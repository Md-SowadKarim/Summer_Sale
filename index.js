
const cuponBtn=document.getElementById("cuponBtn")
const totalPrice=document.getElementById("totalPrice")
const discount=document.getElementById("discount")
const total=document.getElementById("total")
const subSection=document.getElementById("subSection")
const buyBtn=document.getElementById("buyBtn")
const chose=document.querySelectorAll(".chose")


//  ============ the subsection work and pricd adding to the field ============================

function handleClick(target){
const itemPrice=target.childNodes[5].childNodes[3].childNodes[0].innerText;
const itemName=target.childNodes[5].childNodes[1].innerText;

const p = document.createElement("p");
const count = subSection.childElementCount;
p.innerHTML = `${count + 1}.  ${itemName}`
subSection.appendChild(p);

totalPrice.innerText=parseInt(itemPrice)+parseInt(totalPrice.innerText)

total.innerText=parseInt(totalPrice.innerText)


}


//  ============ Cuppon Button Work ============================

cuponBtn.addEventListener("click",()=>{
const cupon=document.getElementById("cupon").value
const tp=parseInt(totalPrice.innerText)
console.log(tp);
     if(tp > 200 && cupon =="SELL200"){
         const d= (tp *20) / 100;
         discount.innerText=d
         
         total.innerText=tp-d
    
     }
})


// ================ Buy now button work  ================================
function refreshPage(){
    window.location.reload();
  }