export class Product implements IProduct {

    constructor(public name: string = '', public desc: string = '', public price: number = 0, public date?: Date, public editMode: boolean = false) {
    }
}

export interface IProduct {
    name: string;
    desc: string;
    price: number;
    date?: Date;
    editMode: boolean;
}