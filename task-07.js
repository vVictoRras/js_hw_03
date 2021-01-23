// Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы
// для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */
const account = {
  // Текущий баланс счета
  balance: 0,
  // История транзакций
  transactions: [],
  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return { id: this.transactions.length, amount, type };
  },
  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    let newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(newTransaction);
  },
  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance >= amount) {
      let newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(newTransaction);
      this.balance -= amount;
    } else {
      console.log("Cнятие такой суммы не возможно, недостаточно средств.");
    }
  },
  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },
  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const elem of this.transactions) {
      if (elem.id === id) {
        return this.transactions[id];
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const elem of this.transactions) {
      if (elem.type === type) {
        total += elem.amount;
      }
    }
    return total;
  },
};

console.log(account.getBalance());

account.deposit(100);
console.log(account.getBalance());

account.deposit(50);
console.log(account.getBalance());

account.withdraw(100);
console.log(account.getBalance());

account.withdraw(60);
console.log(account.getBalance());

//account.getTransactionDetails(1);
console.log(account.getTransactionDetails(0));

console.log(
  account.getTransactionTotal(Transaction.DEPOSIT) + " " + "сумма депозитов"
);
console.log(
  account.getTransactionTotal(Transaction.WITHDRAW) + " " + "сумма снятий"
);

console.log(account.transactions);
