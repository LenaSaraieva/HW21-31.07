// Створити сутність "Людина".Властивості:імʼя;вік.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showData() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Створити сутність "Автомобіль".Властивості:марка, модель, рік виписку, номерний знак (або на Ваш розсуд);власник.
class Car {
    constructor(brand, model, year, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.owner = null;
    }
    //присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
    addOwner(owner) {
        if (owner.age > 18) {
            this.owner = owner;
          } else {
            console.log(`The owner must be at least 18 years old!`);
          }

}
//метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника
   showData() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, License Plate: ${this.licensePlate}`);
    if (this.owner) {
      console.log(`Owner:`);
      this.owner.showData();
    } else {
      console.log(`The car has no owner.`);
    }
   }
}
      
 //Examples 
      //декілька екземплярів класу Людина;
      const person1 = new Person('Nick', 26);
      const person2 = new Person('John', 45);
      const person3 = new Person('Vicky',30);

      //декілька екземплярів класу Автомобіль;
      const car1 = new Car('Audi', 'Q8', 2020, 'AX4576AK');
      const car2 = new Car('Kia', 'Sorento', 2021, 'BH5723TC');
      const car3 = new Car('Hyundai', 'Tucson', 2017, 'AH4585AH');

      //присвоїти власників автомобілям.
      car1.addOwner(person1);
      car2.addOwner(person2);
      car3.addOwner(person3);

     

     