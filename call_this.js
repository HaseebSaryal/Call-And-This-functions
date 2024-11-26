
// let user = {
//     name: "User",
//     age: 20,
//     isLoggedIn : true,
//     email : "haseebsaryal@gmail.com",

//     Greetings : function(){
//         console.log(`Welcome Mr${this.name}`)
//     }
// }
// console.log(user.name)

function carsInfo(make, model, year, variant){
    this.make = make;
    this.model = model;
    this.year = year;
    this.variant = variant

    if(make === "Honda"){
        console.log(`This car is basically a ${this.make}`)
    }
}
const honda = new carsInfo("Honda", "civic 2.0", "2019", "automatice")
const Lc = new carsInfo("Lexus","lx600", "2020", "rearwheel drive")
console.log(honda["make"])

