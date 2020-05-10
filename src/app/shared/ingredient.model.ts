export class Ingredient{
    // public name:string;
    // public amount:number;
    // constructor(name:string,amount:number){
    // this.name=name;
    // this.amount=amount;
    // }
    //This is one way of writing a model
    //another way is written below

   //this is will automatically assign the model the values tht we pass
    constructor(public name:string,public amount:number){}
}