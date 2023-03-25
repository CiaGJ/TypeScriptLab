export class Address {
    street: string;
    num: number;
    floor: number;
    letter: string;
    zipcode: number;
    poblacion: string;
    provincia: string;

    constructor(street: string, no: number, floor: number, letter: string, zipcode: number, poblacion: string, provincia: string){
        this.street = street;
        this.num = no;
        this.floor = floor;
        this.letter = letter;
        this.zipcode = zipcode;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
}