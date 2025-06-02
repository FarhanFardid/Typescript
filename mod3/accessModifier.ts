class BankAccount{
    public readonly id:number;
    public name:string;
    // private _balance:number;
    protected _balance:number;
    
    constructor(id:number, name:string, balance:number){
        this.id=id;
        this.name=name;
        this._balance=balance;
    }
    addDeposit(amount:number){
        this._balance= this._balance+amount;
    }

    getBalance(){
        return this._balance;
    }
} 

// Instance of class will not get the private data
const user1 = new BankAccount(1,'John', 50);
user1.addDeposit(100);
const result = user1.getBalance();
console.log("The Balance is now:", result);

// Encapsulation
// Child class can extend and get the protected data
class Student1 extends BankAccount{
    test(){
this._balance;
    }
}