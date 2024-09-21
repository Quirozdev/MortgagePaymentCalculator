import { reactive } from "vue";

export const formState = reactive({
  mortgageAmount: null,
  mortgageTerm: null,
  interestRate: null,
  mortgageType: null,
});
