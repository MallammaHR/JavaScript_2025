//object:refernce vlaue
//properties:key-value
//functions-behaviour-actions

let user = {
    name :'mallu',
    age :20,
    salaray :30.55,

   // method using function expression
  coding : function code(){
    console.log(`${this.name} is writing the code`);
  },
  //object with method
  //normal function

  priniting(ctc){
    let finalSalaray =ctc+this.salaray;
    console.log(finalSalaray);
    return finalSalaray;
  }

  //

};


user.priniting(10);
