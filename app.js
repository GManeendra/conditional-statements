let age = 22;         
let ticketPrice = 1000;
let discount = 0;
let day = "Sunday";  
let festival = false;   
let student = true;
let studentID = true;
let month = "December";
let finalPrice = ticketPrice;
if (age > 60) {
    if (day !== "Sunday") {
        if (festival === false) {
            discount = ticketPrice * 0.3;
            finalPrice = ticketPrice - discount;
            console.log("Discount applied for senior citizen: " + finalPrice);
        } else {
            console.log("No senior citizen discount (festival day): " + ticketPrice);
        }
    } else {
        console.log("No senior citizen discount (Sunday): " + ticketPrice);
    }
}
else if (age < 25) {
    if (student === true) {
        if (studentID === true) {
            if (month !== "December") {
                discount = ticketPrice * 0.2;
                finalPrice = ticketPrice - discount;
                console.log("Discount applied for student: " + finalPrice);
            } else {
                console.log("No student discount (December): " + ticketPrice);
            }
        } else {
            console.log("No student discount (no ID): " + ticketPrice);
        }
    } else {
        console.log("Not a student, no discount: " + ticketPrice);
    }
}
else {
    if (day === "Sunday") {
        discount = ticketPrice * 0.1;
        finalPrice = ticketPrice - discount;
        console.log("Discount applied for Sunday: " + finalPrice);
    } else {
        console.log("No discount applied: " + ticketPrice);
    }
}