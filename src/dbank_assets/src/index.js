import {dbank} from "../../declarations/dbank";

window.addEventListener("load",  async ()=>{
  //console.log("hello world")
  const currentAmount = await dbank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentAmount * 100)/ 100;
});

//gettinng hold of the form 
document.querySelector("form").addEventListener("submit", async (e) =>{
  e.preventDefault();
  console.log("event has been triggered");
  
  const button = e.target.querySelector("#submit-btn");
  const inputAmount = parseFloat (document.getElementById("input-amount").value);
  const withdrawAmount = parseFloat (document.getElementById("withdraw-amount").value);

  //disabaled button upon click 
  button.setAttribute("disabled", true);
  
  if (document.getElementById("input-amount").value.length != 0) {
    await dbank.topUp(inputAmount);
  }

  if (document.getElementById("withdraw-amount").value.length != 0){
    await dbank.withdraw(withdrawAmount);
  }

  //await dbank.compound();
 
  const currentAmount = await dbank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentAmount * 100)/ 100;
 
  document.getElementById("input-amount").value="";
  document.getElementById("withdraw-amount").value="";
  //reactivate button upon click 
  button.removeAttribute("disabled");  
});
