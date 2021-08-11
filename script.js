const billAmount = document.querySelector('#bill-amt')
const amountPaid = document.querySelector('#amt-paid')
const checkBtn = document.querySelector('#check-btn')
const message = document.querySelector('#message')
const noOfnote = document.querySelectorAll('.noOfnotes')
const notesValue = [2000, 500,100,50,20,10,5,1]
const reset = document.querySelector('#reset-btn')



const validateTheAmount = ( ) =>{
    if(billAmount.value > 0 && amountPaid.value > 0) {
      if(amountPaid.value>=billAmount.value){
            
        if(amountPaid.value===billAmount.value){
                message.innerText = "no amount to be returned"
            }
            else{
                const returnAmount = amountPaid.value - billAmount.value
                calculateReturnAmount(returnAmount)
            }
      }else{
          message.innerText = "Amount Paid must be greater than or equal to bill amount"
      }
    }else{
        message.innerText ="Invalid Bill Amount"
    }
}
function calculateReturnAmount(returnAmount){
    for (let i = 0 ; i < notesValue.length; i++){
        const numberOfNotes = Math.trunc(returnAmount/notesValue[i]);
        returnAmount %= notesValue[i];
        noOfnote[i].innerText = numberOfNotes;
    }
}

function resetHandler(){
for(let i=0; i< notesValue.length; i++){
    noOfnote[i].innerText = ''
}
message.innerText =""
billAmount.value='';
amountPaid.value=''
}

checkBtn.addEventListener('click',validateTheAmount )
reset.addEventListener('click',resetHandler)