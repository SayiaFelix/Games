export class Game {

    showDescription:boolean | undefined;

    constructor(public id:number,public name:string,public description:string, public playDate:Date){
       this.showDescription=false;
    }
    // id: number | undefined;
    // name: string | undefined;
    // description:string | undefined;
}
