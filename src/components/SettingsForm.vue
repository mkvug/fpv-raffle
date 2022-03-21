<template>
  <h2>Settings</h2>
  <Form @submit="updateSettings">
    <div class="form-element">
      <label for="duration">Duration</label>
      <Field
        type="text"
        id="duration"
        name="duration"
        v-model="duration"
        :rules="validateDuration"
      />
      <ErrorMessage name="duration" />
    </div>
    <div class="form-element">
      <label for="quad">Quad</label>
      <select name="quad" id="quad" v-model="quad">
        <option value="player1">Player 1</option>
        <option value="crush">MQTB Crush Light</option>
        <option value="sourceone">Source One</option>
        <option value="sourceone-hdzero">Source One - HDZero</option>
      </select>
    </div>
    <div class="form-element">
      <label for="custom-theme">Custom Theme</label>
      <input
        type="checkbox"
        name="custom-theme"
        id="custom-theme"
        v-model="customTheme"
      />
    </div>
    <div class="form-element" v-if="customTheme">
      <label for="custom-background">Background</label>
      <input
        type="color"
        name="custom-background"
        id="custom-background"
        v-model="customBackground"
      />
    </div>
    <div class="form-element" v-if="customTheme">
      <label for="custom-header">Header Background</label>
      <input
        type="color"
        name="custom-header"
        id="custom-header"
        v-model="customHeader"
      />
    </div>
    <div class="form-element" v-if="customTheme">
      <label for="custom-header-color">Header Text</label>
      <input
        type="color"
        name="custom-header-color"
        id="custom-header-color"
        v-model="customHeaderColor"
      />
    </div>
    <div class="form-element" v-if="customTheme">
      <label for="custom-header-color">Text Color</label>
      <input
        type="color"
        name="custom-text-color"
        id="custom-text-color"
        v-model="customTextColor"
      />
    </div>
    <div class="form-element" v-if="customTheme">
      <label for="custom-button">Button Background</label>
      <input
        type="color"
        name="custom-button"
        id="custom-button"
        v-model="customButton"
      />
    </div>
    <div class="form-element" v-if="customTheme">
      <label for="custom-button">Button Text</label>
      <input
        type="color"
        name="custom-button-text"
        id="custom-button-text"
        v-model="customButtonColor"
      />
    </div>
    <input type="submit" value="Save" />
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      durationError: null,
    };
  },
  computed: {
    duration: {
      get() {
        return this.$store.state.duration;
      },
      set(value) {
        this.$store.commit("udpateDuration", value);
      },
    },
    quad: {
      get() {
        return this.$store.state.quad;
      },
      set(value) {
        this.$store.commit("updateQuad", value);
      },
    },
    customTheme: {
      get() {
        return this.$store.state.customTheme;
      },
      set() {
        this.$store.commit("customTheme");
      },
    },
    customBackground: {
      get() {
        return this.$store.state.customBackground;
      },
      set(value) {
        var obj = {
          type: "customBackground",
          value: value,
        };
        this.$store.commit("updateThemeProp", obj);
      },
    },
    customHeader: {
      get() {
        return this.$store.state.customHeader;
      },
      set(value) {
        var obj = {
          type: "customHeader",
          value: value,
        };
        this.$store.commit("updateThemeProp", obj);
      },
    },
    customHeaderColor: {
      get() {
        return this.$store.state.customHeaderColor;
      },
      set(value) {
        var obj = {
          type: "customHeaderColor",
          value: value,
        };
        this.$store.commit("updateThemeProp", obj);
      },
    },
    customTextColor: {
      get() {
        return this.$store.state.customTextColor;
      },
      set(value) {
        var obj = {
          type: "customTextColor",
          value: value,
        };
        this.$store.commit("updateThemeProp", obj);
      },
    },
    customButton: {
      get() {
        return this.$store.state.customButton;
      },
      set(value) {
        var obj = {
          type: "customButton",
          value: value,
        };
        this.$store.commit("updateThemeProp", obj);
      },
    },
    customButtonColor: {
      get() {
        return this.$store.state.customButtonColor;
      },
      set(value) {
        var obj = {
          type: "customButtonColor",
          value: value,
        };
        this.$store.commit("updateThemeProp", obj);
      },
    },
  },
  methods: {
    updateSettings() {
      this.$store.commit("toggleSettings");
    },
    validateDuration(value) {
      if (Array.isArray(value)) {
        value = value.join();
      }
      // if the field is empty
      if (!value) {
        return "This field is required";
      }
      // if the field is not a valid email
      const regex = /[^0-9,\s]/g;
      if (value.match(regex)) {
        return "This field must only contain numbers or commas";
      }
      // All is good
      return true;
    },
  },
};
</script>

<style>
.form-element {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}
input {
  margin-bottom: 0;
}
label {
  font-weight: bold;
  margin-right: 0.5rem;
  text-align: right;
  width: 100px;
}
</style>
