class Car {
    constructor(make,model,year,isAvailable){
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable= isAvailable
    }
    toggleAvaibility(){
        console.log(`The ${this.make}is available for rent`);
    }
}
const Car = new Car ("toyota","camry",2020,"The car is avaible for rent")
console.log(Car.toggleAvaibility)();

class Rental extends Car{
    constructor(make,model,year,isAvailable,rentalName,rentalStartDate,rentalEndDate){
        super(make,model,year,isAvailable)
        this.rentalName = rentalName
        this.rentalStartDate = rentalStartDate
        this.rentalEndDate = rentalEndDate
    }
    calculateRentalDuration(){
        console.log(`The rental duration is ${this.rentalEndDate-this.rentalStartDate}`);
    }
}
const rentalCar = new Rental("toyota","camry",2020,"The car is available for rent",)
console.log(rentalCar.make);
rentalCar.calculateRentalDuration()

class Question{
    constructor(text,options,correctAnswer){
        this.text = text
        this.options = options
        this.correctAnswer = correctAnswer
    }
    checkAnswer(answer){
        this.answer = answer
        if(`${this.answer}`!==`${this.correctAnswer}`){
            console.log("false")
        }
        else{
            console.log("true");
        }
    }
    
    }