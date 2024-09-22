import { reactive } from "vue";

export const formState = reactive({
  values: {
    mortgageAmount: "",
    mortgageTerm: "",
    interestRate: "",
    mortgageType: "",
  },
  errors: {
    mortgageAmount: null,
    mortgageTerm: null,
    interestRate: null,
    mortgageType: null,
  },
  validateRequiredValue(value) {
    this.errors[value] = null;
    if (this.values[value] == null || this.values[value] === "") {
      this.errors[value] = "This field is required";
    }
  },
  validateData() {
    for (let value of Object.keys(this.values)) {
      this.validateRequiredValue(value);
    }
  },
  thereAreErrors() {
    this.validateData();
    for (let error of Object.keys(this.errors)) {
      if (this.errors[error] != null || this.errors[error] === "") {
        return true;
      }
    }
    return false;
  },
  clear() {
    this.values = {
      mortgageAmount: "",
      mortgageTerm: "",
      interestRate: "",
      mortgageType: "",
    };
    this.errors = {
      mortgageAmount: null,
      mortgageTerm: null,
      interestRate: null,
      mortgageType: null,
    };
  },
});
