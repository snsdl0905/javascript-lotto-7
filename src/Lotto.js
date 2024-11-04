class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    numbers.forEach((number) => {
      if(number < 1 || number > 45){
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    })

    const numberSet = new Set(numbers);
    if(numberSet.size !== 6){
      throw new Error("[ERROR] 로또 번호는 중복되지 않는 6개의 숫자입니다.");
    }
  }

}

export default Lotto;
