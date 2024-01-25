import Person from "./person";

export default class EvilGuy extends Person{
    private misfits:number=0;
    private isAttacking:boolean=false;
    public attack:number=0;
    public constructor(name: string, power: number) {
        super(name, power);
    }
    public getMisfits():number{
        return this.misfits;
    }

    public setMisfits(misfits:number){
        this.misfits=misfits;
    }
    public getIsAttacking():boolean{
        return this.isAttacking;
    }
    public attacking(){
        this.isAttacking=true;
    }
    public addMisfits(){
        if(this.isAttacking==false){
            this.misfits++;
            this.attack++;
        }

    }

    public rePlenish(){
        this.power++;
    }

 public Print(){
     super.Print();
     alert(`has ${this.misfits} misfits`);
 }






}