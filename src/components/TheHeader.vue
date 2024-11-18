<template>
  <header :class="{
    'header': true,
    'secondary-background': $route.meta.mainPage === false,
    'hidden-header': !isHeaderVisible,
    'header--dark': isHeaderDark
  }">
    <div class="container">
      <div
        class="navbar header__content"
        :class="{ 'toggle-menu': $store.state.isMenuOpen }"
      >
        <router-link
          to="/"
          custom
          v-slot="{ navigate }"
        >
          <a
            href="#"
            @click="navigate"
          >
            <img
              src="./../assets/logo.svg"
              alt="Logo"
              class="logo"
            >
          </a>
        </router-link>
        <ul class="menu-list">
          <li
            v-for="(link, index) in $store.state.menuList"
            :key="index"
            class="menu-item"
          >
            <router-link
              :to="link.url"
              custom
              v-slot="{ navigate, href }"
            >
              <a
                href="#"
                @click="navigate"
                class="menu-link"
                :class="{ active: $route.path.indexOf(href) !== -1 }"
              >
                {{ link.title }}
              </a>
            </router-link>
          </li>
        </ul>
        <button
          class="header__burger-btn"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      previousScroll: 0,
      isHeaderVisible: true,
      isHeaderDark: false
    }
  },
  computed: {
    isHomePage() {
      return this.$route.path === '/'
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    ...mapMutations([
      'toggleMenu'
    ]),
    handleScroll() {
      const currentScroll = window.scrollY

      if (currentScroll > this.previousScroll && currentScroll > 100) {
        this.isHeaderVisible = false;
        this.isHeaderDark = false
      } else if (currentScroll < 100) {
        this.isHeaderDark = false
      } else {
        this.isHeaderVisible = true
        this.isHeaderDark = true
      }

      this.previousScroll = currentScroll
    }

  },
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 20;

  padding: 20px 0px;
  background-color: transparent;
  color: var(--text-secondary-color);

  transition: background-color 1s, transform .3s ease;

  @media (min-width: 992px) {
    padding: 40px 0 45px;
  }

  .logo {
    height: 35px;
  }

  a {
    text-decoration: none;
    color: var(--text-secondary-color);
    text-transform: uppercase;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &.active {
      color: var(--text-active-color);
    }
  }


  .navbar {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .menu-list {
    position: fixed;
    right: 0;
    top: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: var(--background-secondary-color);
    padding: 20px;
    gap: 0px;
    text-align: left;
    z-index: 20;

    transform: scale(.3) translate(1580px, -1380px);
    opacity: 0;
    transition: transform .5s, opacity .5s;

    width: 100%;
    height: 100%;

    .menu-link {
      display: block;
      padding: 10px 0;

      @media (min-width: 992px) {
        padding: 0;
      }
    }

    @media (min-width:576px) {
      width: unset;
      height: unset;
      padding: 100px 250px 20px 20px;
    }

    @media (min-width:992px) {
      transform: scale(1);
      opacity: 1;
      flex-direction: row;
      gap: 20px;
    }

    @media (min-width:1200px) {
      gap: 35px;
    }
  }

  .toggle-menu {
    .menu-list {
      transform: scale(1) translate(0, 0);
      opacity: 1;
      -webkit-box-shadow: -6px 16px 8px 0px rgba(0, 0, 0, 0.4);
      -moz-box-shadow: -6px 16px 8px 0px rgba(0, 0, 0, 0.4);
      box-shadow: -6px 16px 8px 0px rgba(0, 0, 0, 0.4);
    }

  }

  .header__burger-btn {
    position: relative;
    cursor: pointer;
    width: 40px;
    height: 40px;
    outline: none;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 30;

    &:active,
    &:focus {
      outline: none;
      background-color: transparent;
      box-shadow: none;
    }

    span {
      position: absolute;
      width: 75%;
      height: 20%;
      background-color: #fff;
      left: 5px;
      border-radius: .5rem;
    }

    span:nth-child(1) {
      transform: translateY(-10px);
      animation: menu-span-1-out .5s ease-in-out forwards;
    }

    span:nth-child(2) {
      transform: scale(1);
      animation: menu-span-2-out .5s ease-in-out forwards;
    }

    span:nth-child(3) {
      transform: translateY(10px);
      animation: menu-span-3-out .5s ease-in-out forwards;
    }
  }

  .toggle-menu {
    span:nth-child(1) {
      animation: menu-span-1-in .5s ease-in-out forwards;
    }

    span:nth-child(2) {
      animation: menu-span-2-in .5s ease-in-out forwards;
    }

    span:nth-child(3) {
      animation: menu-span-3-in .5s ease-in-out forwards;
    }
  }


  @media (min-width: 992px) {
    .logo {
      height: unset;
    }

    .header__burger-btn {
      display: none;
    }

    .menu-list {
      display: flex;
      position: relative;
      right: unset;
      top: unset;
      background-color: transparent;
      padding: 0;
    }

    .menu-link {
      padding: 0;
    }
  }

}

.hidden-header {
  transform: translateY(-200px);
  transition: background-color .3s ease, transform .3s ease;
}

.header--dark {
  background-color: var(--background-secondary-color);
}

.header.secondary-background {
  background-color: var(--background-secondary-color);
}

@keyframes menu-span-1-in {
  0% {
    transform: translateY(-10px)
  }

  50% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(0, 0) rotate(-45deg);
  }
}

@keyframes menu-span-1-out {
  0% {
    transform: translate(0, 0) rotate(-45deg);
  }

  50% {
    transform: translate(0, 0);
  }

  100% {
    transform: translateY(-10px)
  }
}

@keyframes menu-span-2-in {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}

@keyframes menu-span-2-out {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes menu-span-3-in {
  0% {
    transform: translateY(10px)
  }

  50% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(0, 0) rotate(45deg);
  }
}

@keyframes menu-span-3-out {
  0% {
    transform: translate(0, 0) rotate(45deg);
  }

  50% {
    transform: translate(0, 0);
  }

  100% {
    transform: translateY(10px)
  }
}
</style>