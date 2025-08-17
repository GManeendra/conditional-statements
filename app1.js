let orderAmount = 1000;         
let isPremium = true;           
let day = "Wednesday";          
let time = 19;                  
let usedCoupon = false;         
let deliveryCharge = 50;        
let benefit = 0;                

if (orderAmount > 1000 && isPremium) {
    benefit =benefit + deliveryCharge;        
    benefit = benefit + orderAmount * 0.15;    
    console.log(" Free delivery + 15% discount");
}
if (orderAmount >= 500 && orderAmount <= 1000) {
    if (day !== "Saturday" && day !== "Sunday") {
        if (time >= 18 && time <= 20) {
            if (!usedCoupon) {
                benefit = benefit + 100; 
                console.log(" ₹100 discount applied");
            }
        }
    }
}
if (orderAmount < 500) {
    if (day === "Sunday") {
        if (time >= 6 && time <= 11) {
            benefit= benefit + deliveryCharge; 
            console.log("Benefit: Free delivery only");
        }
    }
}
if (benefit === 0) {
    console.log("No promotion applied");
}
console.log("Total benefit received: ₹" + benefit);
