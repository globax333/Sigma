class Calculator {
     add(a,b){
      return a+b;
     }
     subtract(a,b){
      return a-b;
     }
     multiply(a,b){
      if(b==0){
         return false
      }
      else{
         return a*b
      }
     }
     divide(a,b){
         if(a==0){
            return console.log('Cannot divide by zero')
         }
      else {
         return a/b;
      }
     }


}
export default  Calculator;