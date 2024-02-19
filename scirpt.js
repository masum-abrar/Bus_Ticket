var totalPrice = 0;
var count = 1;
var seatLeft = 23;
// if(seatLeft < 21){
//     alert("You cannot booked more than 4 seat");
// }

function scrollSection() {
    const section = document.getElementById('Select-seat');
    section.scrollIntoView();
    }

const btn = document.querySelectorAll(".btn");
   

    btn.forEach(function(button) {
        
               
        
        button.addEventListener('click',  function() {
           
            const seat = this.innerText;
                console.log(seat)
           
            
           
            const seatTittle = document.getElementById('seat-tittle');
            const SelectedSeatCount = seatTittle.childElementCount;
            if(SelectedSeatCount < 4){
                const SelectSeat = seatTittle.innerText.includes(seat);
                if(SelectSeat === false){
                button.style.backgroundColor = '#1DD100';
                const p = document.createElement("p");
                p.innerText =seat;
                seatTittle.appendChild(p);
    
                const price = document.getElementById('price');
                const h1 = document.createElement("h1");
                const prices = parseFloat(
                    h1.innerText ="550"
                   
                )
                // console.log(typeof(prices))
                price.appendChild(h1);
               
               
    
                const seatClass = document.getElementById('seat-class');
                const h2 = document.createElement("h2");
                h2.innerText ="Economy";
                seatClass.appendChild(h2);
    
                // price calculation
                totalPrice += prices;
                // console.log(totalPrice)
                document.getElementById('total').innerText=totalPrice
    
                const seatCount = document.getElementById('seat-count').innerText=count;
               
               
            }
            else{
                alert("This Seat already filled. Please select another seat")
            }
            if(seatCount < 4){
                count ++;
            }
            else{
                alert("You cannot booked more than 4 seat");
            }
            
            const seatL = document.getElementById('seat-left').innerText=seatLeft;
            seatLeft --;

            
            }
             
        });
    });

// calculating the discount

const btnApply =document.getElementById('btn-apply');
btnApply.addEventListener('click', function(){
    // console.log("clicked")
const inputField = document.getElementById('input-field').value;
// console.log(inputField)
if( inputField === "NEW15" || inputField === "Couple 20"){
    // console.log("nice")
    const cuponInput = document.querySelector('.cupon-input').classList.add("hidden");
    const btnApply = document.querySelector('.btn-apply').classList.add("hidden");
   
// input field gayebul hawa
   if(inputField === "NEW15" ){
    const discountPrice = document.getElementById('discount-price');
    const discountAmount = totalPrice * 0.15;
    const result =totalPrice - discountAmount;
    // console.log(discountAmount)
    discountPrice.innerText = result;
   }
   else if( inputField === "Couple 20"){
    const discountPrice = document.getElementById('discount-price');
    const discountAmount = totalPrice * 0.2 ;
     const result =totalPrice - discountAmount;
    // console.log(discountAmount)
    discountPrice.innerText = result;
   }
}
else{
    alert("Invaild Code");
}


})
// //next button 
const updateButton = document.getElementById("updateDetails");
const dialog = document.getElementById("my_modal_1");


function openCheck(dialog) {
    if (dialog.open) {
        console.log("Dialog open");
    }
}

updateButton.addEventListener("click", function() {
    if (totalPrice > 0) {
        dialog.showModal();
        openCheck(dialog);
    } else {
        alert("Purchase at least one  Ticket First");
    }
});
   
