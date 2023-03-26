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

    getStreet():string{
        return this.street;
    }
    setStreet(street:string):void{
        this.street;
    }

    getNum():number{
        return this.num;
    }
    setNum(num:number):void{
        this.num;
    }

    getFloor():number{
        return this.floor;
    }
    setFloor(floor:number):void{
        this.floor;
    }

    getLetter():string{
        return this.letter;
    }
    setLetter(letter:string):void{
        this.letter;
    }

    getZipcode():number{
        return this.zipcode;
    }
    setZipcode(zipcode:number):void{
        this.zipcode;
    }

    getPoblacion():string{
        return this.poblacion;
    }
    setPoblacion(poblacion:string):void{
        this.poblacion;
    }

    getProvincia():string{
        return this.provincia;
    }
    setProvincia(provincia:string):void{
        this.provincia;
    }
}