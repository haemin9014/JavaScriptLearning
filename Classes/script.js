class ArithmeticOperations {
  constructor(x, y) {
    this.x = x;

    this.y = y;
  }

  multiply() {
    return this.x * this.y;
  }
}

class Addition extends ArithmeticOperations {
  sum() {
    return this.x + this.y;
  }
}

let operation = new Addition(2, 3);

operation.sum(); //  5

operation.multiply(); // 6
