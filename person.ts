import { Address } from "./address";
import { Phone } from "./phone";
import { Mail } from "./mail";

export class Person{
    name: string;
    surname: string;
    age: number;
    DNI: string;
    birthday: Date;
    favouriteColor?: string;
    genre: genre;
    addresses: Address;
    mails: Mail;
    phones: Phone;
    notes?: string;

    constructor(name: string, surname: string, age: number, DNI: string, birthday: Date, genre: genre, address: Address, mail: Mail, phone: Phone, color?: string, notes?: string){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.DNI = DNI;
        this.birthday = birthday;
        this.favouriteColor = color;
        this.genre = genre;
        this.addresses = address;
        this.mails = mail;
        this.phones = phone;
        this.notes = notes; 
    }

    getName():string{
        return this.name;
    }
    setName(name:string):void{
        this.name;
    }

    getSurname():string{
        return this.surname;
    }
    setSurname(surname:string):void{
        this.surname;
    }

    getAge():number{
        return this.age;
    }
    setAge(age:number):void{
        this.age;
    }

    getDNI():string{
        return this.DNI;
    }
    setDNI(DNI:string):void{
        this.DNI;
    }

    getBirthday():Date{
        return this.birthday;
    }
    setBirthday(birthday:Date):void{
        this.birthday;
    }

    getColor():string|undefined{
        return this.favouriteColor;
    }
    setColor(favouriteColor:string):void{
        this.favouriteColor;
    }

    getGenre():genre{
        return this.genre
    }
    setGenre(genre:genre):void{
        this.genre;
    }

    getAddress():Address{
        return this.addresses;
    }
    setAddress(address: Address):void{
        this.addresses;
    }

    getMail():Mail{
        return this.mails;
    }
    setMail(mail: Mail):void{
        this.mails;
    }

    getPhone():Phone{
        return this.phones;
    }
    setPhone(phone: Phone):void{
        this.phones;
    }

    getNotes():string|undefined{
        return this.notes;
    }
    setNotes(notes:string):void{
        this.notes;
    }

}

export enum genre {
    M = "Masculine",
    F = "Femenine",
    NB = "No Binarie",
    O = "Other"
}

export function showPerson(person: Person):void{
    console.log("Nombre: "+person.getName());
    console.log("Apellidos: "+person.getSurname())
    console.log("Edad: "+person.getAge())
    console.log("DNI: "+person.getDNI())
    console.log("Cumpleaños: "+person.getBirthday())
    console.log("Color favorito: "+ (person.getColor()!=undefined?person.getColor():"No se ha añadido ningún color"))
    console.log("Sexo: "+person.getGenre())
    console.log("Direcciones: "+person.getAddress())
    console.log("Mails: "+person.getMail())
    console.log("Teléfonos: "+person.getPhone())
    console.log("Notas: "+ (person.getNotes()!=undefined?person.getNotes():""))
}