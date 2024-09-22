export class Mortgage {
  constructor(amount, yearsTerm, yearlyInterestRate, type) {
    this.amount = amount;
    this.yearsTerm = yearsTerm;
    this.yearlyInterestRate = yearlyInterestRate;
    this.type = type;
  }

  calculateMonthlyRepayment() {
    const r = this.yearlyInterestRate / 12 / 100;
    const n = this.yearsTerm * 12;
    return (
      this.amount *
      ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1))
    ).toFixed(2);
  }

  calculateInterestOnlyPayment() {
    const i = this.yearlyInterestRate / 12 / 100;
    return (
      i *
      this.yearsTerm *
      12 *
      (this.amount / (this.yearsTerm * 12))
    ).toFixed(2);
  }

  calculateTotalRepay() {
    return (this.calculateMonthlyRepayment() * this.yearsTerm * 12).toFixed(2);
  }
}
