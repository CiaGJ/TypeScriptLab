import { Address, printAddress } from "./address";
import { Phone, printPhone } from "./phone";
import { Mail, printMail } from "./mail";

export class Person{
    name: string;
    surname: string;
    age: number;
    DNI: string;
    birthday: Date;
    favouriteColor?: string;
    genre: genre;
    addresses: Address[];
    mails: Mail[];
    phones: Phone[];
    notes?: string;

    constructor(name: string, surname: string, age: number, DNI: string, birthday: Date, genre: genre, address: Address, mail: Mail, phone: Phone, color?: string, notes?: string){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.DNI = DNI;
        this.birthday = birthday;
        this.favouriteColor = color;
        this.genre = genre;
        this.addresses = [address];
        this.mails = [mail];
        this.phones = [phone];
        this.notes = notes; 
    }

    getName():string{
        return this.name;
    }
    setName(name:string):void{
        this.name = name;
    }

    getSurname():string{
        return this.surname;
    }
    setSurname(surname:string):void{
        this.surname = surname;
    }

    getAge():number{
        return this.age;
    }
    setAge(age:number):void{
        this.age = age;
    }

    getDNI():string{
        return this.DNI;
    }
    setDNI(DNI:string):void{
        this.DNI = DNI;
    }

    getBirthday():Date{
        return this.birthday;
    }
    setBirthday(birthday:Date):void{
        this.birthday = birthday;
    }

    getColor():string|undefined{
        return this.favouriteColor;
    }
    setColor(favouriteColor:string):void{
        this.favouriteColor = favouriteColor;
    }

    getGenre():genre{
        return this.genre
    }
    setGenre(genre:genre):void{
        this.genre = genre;
    }

    getAddresses():Address[]{
        return this.addresses;
    }
    setAddresses(addresses: Address[]):void{
        this.addresses = addresses;
    }
    addAddress(address: Address):void{
        this.addresses.push(address)
    }

    getMails():Mail[]{
        return this.mails;
    }
    setMail(mails: Mail[]):void{
        this.mails = mails;
    }
    addMail(mail: Mail):void{
        this.mails.push(mail)
    }

    getPhones():Phone[]{
        return this.phones;
    }
    setPhone(phones: Phone[]):void{
        this.phones = phones;
    }
    addPhone(phone: Phone):void{
        this.phones.push(phone)
    }

    getNotes():string|undefined{
        return this.notes;
    }
    setNotes(notes:string):void{
        this.notes = notes;
    }

}

export enum genre {
    M = "Masculine",
    F = "Femenine",
    NB = "No Binarie",
    O = "Other"
}

export function showPerson(person: Person):void{
    console.log("====================== Datos de la persona ======================")
    console.log("Nombre: "+person.getName());
    console.log("Apellidos: "+person.getSurname())
    console.log("Edad: "+person.getAge())
    console.log("DNI: "+person.getDNI())
    console.log("Cumpleaños: "+person.getBirthday().toLocaleDateString("es-ES"))
    console.log("Color favorito: "+ (person.getColor()!=undefined?person.getColor():"No se ha añadido ningún color"))
    console.log("Sexo: "+person.getGenre())
    console.log("Direcciones: ")
    person.getAddresses().map(printAddress)
    console.log("Mails: ")
    person.getMails().map(printMail)
    console.log("Teléfonos: ")
    person.getPhones().map(printPhone)
    console.log("Notas: "+ (person.getNotes()!=undefined?person.getNotes():""))
    console.log("=================================================================\n")
}