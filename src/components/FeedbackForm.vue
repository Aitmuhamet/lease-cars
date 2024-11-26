<template>
  <div class="feedback-form">
    <base-heading
      title="Contact Us"
      level="2"
      custom-class="heading-h2 feedback-form__title"
    >Форма обратной связи</base-heading>
    <p class="feedback-form__subtile">Feel free to contact us with questions, potencial partnerships or media inquiries
    </p>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <!-- <label for="name">Имя:</label> -->
        <input
          id="name"
          v-model="formData.name"
          type="text"
          :class="{ 'error': errors.name }"
          @blur="validateName"
          placeholder="Name"
        >
        <span
          v-if="errors.name"
          class="error-message"
        >{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <!-- <label for="email">Email:</label> -->
        <input
          id="email"
          v-model="formData.email"
          type="email"
          :class="{ 'error': errors.email }"
          @blur="validateEmail"
          placeholder="E-mail"
        >
        <span
          v-if="errors.email"
          class="error-message"
        >{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <!-- <label for="message">Сообщение:</label> -->
        <textarea
          id="message"
          v-model="formData.message"
          :class="{ 'error': errors.message }"
          @blur="validateMessage"
          placeholder="Your text"
        ></textarea>
        <span
          v-if="errors.message"
          class="error-message"
        >{{ errors.message }}</span>
      </div>

      <div class="btn-wrapper">
        <button
          type="submit"
          :disabled="!isFormValid"
          class="feedback-form__btn"
        >Submit</button>
      </div>
    </form>

    <div
      v-if="submitStatus"
      :class="['status-message', submitStatus.type]"
    >
      {{ submitStatus.message }}
    </div>
  </div>
</template>

<script>
import BaseHeading from './base/BaseHeading.vue';
import './FeedbackForm.scss'

export default {
  name: 'FeedbackForm',
  components: {
    BaseHeading
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      errors: {
        name: '',
        email: '',
        message: ''
      },
      submitStatus: null
    }
  },
  computed: {
    isFormValid() {
      return this.formData.name &&
        this.formData.email &&
        this.formData.message &&
        !this.errors.name &&
        !this.errors.email &&
        !this.errors.message
    }
  },
  methods: {
    validateName() {
      if (!this.formData.name) {
        this.errors.name = 'Имя обязательно для заполнения'
      } else if (this.formData.name.length < 2) {
        this.errors.name = 'Имя должно содержать минимум 2 символа'
      } else {
        this.errors.name = ''
      }
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!this.formData.email) {
        this.errors.email = 'Email обязателен для заполнения'
      } else if (!emailRegex.test(this.formData.email)) {
        this.errors.email = 'Введите корректный email адрес'
      } else {
        this.errors.email = ''
      }
    },
    validateMessage() {
      if (!this.formData.message) {
        this.errors.message = 'Сообщение обязательно для заполнения'
      } else if (this.formData.message.length < 10) {
        this.errors.message = 'Сообщение должно содержать минимум 10 символов'
      } else {
        this.errors.message = ''
      }
    },
    async handleSubmit() {
      // Валидация всех полей перед отправкой
      this.validateName()
      this.validateEmail()
      this.validateMessage()

      if (this.isFormValid) {
        try {
          // Здесь должен быть ваш код для отправки данных на сервер
          // Например, использование axios:
          // await axios.post('/api/feedback', this.formData)

          this.submitStatus = {
            type: 'success',
            message: 'Сообщение успешно отправлено!'
          }

          // Очистка формы после успешной отправки
          this.formData = {
            name: '',
            email: '',
            message: ''
          }
        } catch (error) {
          this.submitStatus = {
            type: 'error',
            message: 'Произошла ошибка при отправке сообщения.'
          }
        }
      }
    }
  }
}
</script>
