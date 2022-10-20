import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
  stable var  currentValue: Float = 300;
  //currentValue:= 100;
  stable var startTime=Time.now();

  Debug.print (debug_show(startTime));

  let id = 2456456465154;

  //Debug.print(debug_show(id));
   
   public func topUp(amount: Float) {
    currentValue += amount ;

    Debug.print(debug_show(currentValue));
   }; //Always close your functions
   //topUp();

   //allow user to withdraw an amount from the current calue
   //Decrease the currentValue bu the amounmt

   public func withdraw(amount: Float){
    let tempValue:Float = currentValue - amount;
    if (tempValue  >= 0 ) {
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    }else{
      Debug.print("You do not have enough fund to remove the curent amount");
    }        
   };
   public query func checkBalance(): async Float{
    return currentValue;
   };
   public func compound() {
    let currentTime = Time.now();
    let timeElapsedNS = currentTime - startTime;
    let timeElapsedS = timeElapsedNS / 1000000000;
    currentValue:= currentValue * (100000.01 ** Float.fromInt(timeElapsedS));
    startTime := currentTime;
   }
}