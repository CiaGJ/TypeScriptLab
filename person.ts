import { Address } from "./address";
import { Phone } from "./phone";
import { Mail } from "./mail";

export class Person{
    name: string;
    surname: string;
    age: number;
    DNI: string;
    birthday: Date;
    favouriteColor: string;
    genre: genre;
    addresses: Address;
    mails: Mail;
    phones: Phone;
    notes: string;

    constructor(name: string, surname: string, age: number, DNI: string, birthday: Date, color: string, genre: genre, address: Address, mail: Mail, phone: Phone, notes: string){
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
}

enum genre {
    M = "Masculine",
    F = "Femenine",
    NB = "No Binarie",
    O = "Other"
}

