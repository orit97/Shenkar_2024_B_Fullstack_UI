import Person from "./person";

export default class SuperHero extends Person {
    public attacks = new Array<string> ("punch","kick","Super Attack");
    public attacksVal = new Array<number> (20,30,90);
    private saveTheWorld: boolean = false;
    constructor(name: string, power: number,attacks:string,attacksVal:number) {
        super(name, power);
        this.attacks.push(attacks);
        this.attacksVal.push(attacksVal);
    }

    public getIsAttacking():boolean{
        return this.saveTheWorld;
    }

    public save():void{
        this.saveTheWorld=true;
    }

    public rePlenish():void{
        if(this.saveTheWorld==false){
            this.power++;
        }
    }

    public Print():void{
        super.Print();
        alert(`attacks: ${this.attacks}, attacksVal: ${this.attacksVal}`);
    }


}