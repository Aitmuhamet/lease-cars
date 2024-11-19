import { createStore } from "vuex";
import home from "./modules/home-page";
import cars from "./modules/cars";

export default createStore({
  state() {
    return {
      currentTheme: "light-theme",
      isMenuOpen: false,
      menuList: [
        { title: "NEW CARS", url: "/new-cars" },
        { title: "PRE-OWNED CARS", url: "/pre-owned-cars" },
        { title: "FINANCE", url: "/finance" },
        { title: "LEASE VS BUY", url: "/lease-buy" },
        { title: "CONTACT US", url: "/contact-us" },
      ],
      footer: {
        lists: [
          { title: "Products", links: ["Used", "Blog", "Dealers"] },
          { title: "Resources", links: ["About us", "New", "FAQ"] },
          { title: "Work With TrueCar", links: ["Partners", "Team"] },
          {
            title: "About",
            links: ["Sell your car", "Contact us", "Careers"],
          },
        ],
        stores: ["app-store.svg", "play-market.svg"],
        copyright: [
          `For questions about the TrueCar Auto Buying Service please call <a href="tel:1-888-878-3227">1-888-878-3227</a>.`,
          `Certified Dealers are contractually obligated by TrueCar to meet certain customer service requirements and complete the TrueCar Dealer Certification Program.`,
          `TrueCar does not broker, sell, or lease motor vehicles. Unless otherwise noted, all vehicles shown on this website are offered for sale by licensed motor vehicle dealers. All vehicles are subject to prior sale. By accessing this website, you agree to the TrueCar Terms of Service and Privacy Policy.`,
        ],
        policies: [
          "Terms of Service",
          "Privacy Policy",
          "Do Not Sell My Personal Information",
        ],
      },
    };
  },
  mutations: {
    toggleTheme(state) {
      state.currentTheme =
        state.currentTheme === "light-theme" ? "dark-theme" : "light-theme";
      document.documentElement.className = state.currentTheme;
    },
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu(state) {
      state.isMenuOpen = false;
    }
  },
  modules: {
    home,
    cars
  }
});
