export class Address {
    street: string;
    num: number;
    floor?: number;
    letter?: string;
    zipcode: number;
    poblacion: string;
    provincia: string;

    constructor(street: string, no: number, zipcode: number, poblacion: string, provincia: string, floor?: number, letter?: string){
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
        this.street = street;
    }

    getNum():number{
        return this.num;
    }
    setNum(num:number):void{
        this.num = num;
    }

    getFloor():number|undefined{
        return this.floor;
    }
    setFloor(floor:number):void{
        this.floor = floor;
    }

    getLetter():string|undefined{
        return this.letter;
    }
    setLetter(letter:string):void{
        this.letter = letter;
    }

    getZipcode():number{
        return this.zipcode;
    }
    setZipcode(zipcode:number):void{
        this.zipcode = zipcode;
    }

    getPoblacion():string{
        return this.poblacion;
    }
    setPoblacion(poblacion:string):void{
        this.poblacion = poblacion;
    }

    getProvincia():string{
        return this.provincia;
    }
    setProvincia(provincia:string):void{
        this.provincia = provincia;
    }
}

export function printAddress(address: Address):void{
    console.log("Dirección: "+address.getStreet()+", "+address.getNum()+", "+(address.getFloor()?address.getFloor():"")+(address.getLetter()?address.getLetter():""))
    console.log(address.getPoblacion()+", "+address.getZipcode()+", "+address.getProvincia())
}