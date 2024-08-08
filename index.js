class Car {
  constructor(cost) {
    this.cost = cost;
  }
  changeCost(newCost) {
    return (this.cost = this.cost + newCost);
  }
  getCost() {
    return this.cost;
  }

  get newCost() {
    return this.cost;
  }
  set newCost(cost) {
    this.cost = this.cost + cost;
  }
}

const car = new Car(500);
