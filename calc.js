class Calculator {
     divide(a,b){
      if(b==0){
         throw new Error("Cannot divide by zero")
      }
      return a/b;
     }
}
export default  Calculator;