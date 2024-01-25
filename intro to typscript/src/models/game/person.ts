export default class Person {
    protected name: string;
    public power: number;
    public constructor(name: string, power: number){
        this.name = name;
        this.power = power;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string){
        this.name = name;
    }

    public Print(){
        alert(`name: ${this.name}, power: ${this.power}`);
    }
    
}