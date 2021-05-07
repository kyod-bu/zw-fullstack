/**
 * 面向对象、继承
*/

class Person {
    static mood = 'good';
    constructor() {
      this.money = 100;
    }
    job = {
      salary: 100,
    }
    buybuyby() {
      this.money -= 100;
      console.log('money::', this.money);
    }
  }
  
  Person.mood = 'super good';
  const wife = new Person();
  const person = new Person();
  
  person.job.salary = 0;
  console.log('wife.job.salary:', wife.job.salary); // 0
  
  wife.buybuyby();
  person.buybuyby();