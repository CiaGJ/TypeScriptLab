"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showPerson = exports.genre = exports.Person = void 0;
const address_1 = require("./address");
const phone_1 = require("./phone");
const mail_1 = require("./mail");
class Person {
    name;
    surname;
    age;
    DNI;
    birthday;
    favouriteColor;
    genre;
    addresses;
    mails;
    phones;
    notes;
    constructor(name, surname, age, DNI, birthday, genre, address, mail, phone, color, notes) {
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
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getSurname() {
        return this.surname;
    }
    setSurname(surname) {
        this.surname = surname;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    getDNI() {
        return this.DNI;
    }
    setDNI(DNI) {
        this.DNI = DNI;
    }
    getBirthday() {
        return this.birthday;
    }
    setBirthday(birthday) {
        this.birthday = birthday;
    }
    getColor() {
        return this.favouriteColor;
    }
    setColor(favouriteColor) {
        this.favouriteColor = favouriteColor;
    }
    getGenre() {
        return this.genre;
    }
    setGenre(genre) {
        this.genre = genre;
    }
    getAddresses() {
        return this.addresses;
    }
    setAddresses(addresses) {
        this.addresses = addresses = addresses;
    }
    addAddress(address) {
        this.addresses.push(address);
    }
    getMails() {
        return this.mails;
    }
    setMail(mails) {
        this.mails = mails;
    }
    addMail(mail) {
        this.mails.push(mail);
    }
    getPhones() {
        return this.phones;
    }
    setPhone(phones) {
        this.phones = phones;
    }
    addPhone(phone) {
        this.phones.push(phone);
    }
    getNotes() {
        return this.notes;
    }
    setNotes(notes) {
        this.notes = notes;
    }
}
exports.Person = Person;
var genre;
(function (genre) {
    genre["M"] = "Masculine";
    genre["F"] = "Femenine";
    genre["NB"] = "No Binarie";
    genre["O"] = "Other";
})(genre = exports.genre || (exports.genre = {}));
function showPerson(person) {
    console.log("====================== Person Data ======================");
    console.log("Nombre: " + person.getName());
    console.log("Apellidos: " + person.getSurname());
    console.log("Edad: " + person.getAge());
    console.log("DNI: " + person.getDNI());
    console.log("Cumpleaños: " + person.getBirthday().toLocaleDateString("es-ES"));
    console.log("Color favorito: " + (person.getColor() != undefined ? person.getColor() : "No se ha añadido ningún color"));
    console.log("Sexo: " + person.getGenre());
    console.log("Direcciones: ");
    person.getAddresses().map(address_1.printAddress);
    console.log("Mails: ");
    person.getMails().map(mail_1.printMail);
    console.log("Teléfonos: ");
    person.getPhones().map(phone_1.printPhone);
    console.log("Notas: " + (person.getNotes() != undefined ? person.getNotes() : ""));
    console.log("=========================================================\n");
}
exports.showPerson = showPerson;
