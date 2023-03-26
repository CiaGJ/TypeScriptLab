"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showPerson = exports.genre = exports.Person = void 0;
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
        this.addresses = address;
        this.mails = mail;
        this.phones = phone;
        this.notes = notes;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name;
    }
    getSurname() {
        return this.surname;
    }
    setSurname(surname) {
        this.surname;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age;
    }
    getDNI() {
        return this.DNI;
    }
    setDNI(DNI) {
        this.DNI;
    }
    getBirthday() {
        return this.birthday;
    }
    setBirthday(birthday) {
        this.birthday;
    }
    getColor() {
        return this.favouriteColor;
    }
    setColor(favouriteColor) {
        this.favouriteColor;
    }
    getGenre() {
        return this.genre;
    }
    setGenre(genre) {
        this.genre;
    }
    getAddress() {
        return this.addresses;
    }
    setAddress(address) {
        this.addresses;
    }
    getMail() {
        return this.mails;
    }
    setMail(mail) {
        this.mails;
    }
    getPhone() {
        return this.phones;
    }
    setPhone(phone) {
        this.phones;
    }
    getNotes() {
        return this.notes;
    }
    setNotes(notes) {
        this.notes;
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
    console.log("Nombre: " + person.getName());
    console.log("Apellidos: " + person.getSurname());
    console.log("Edad: " + person.getAge());
    console.log("DNI: " + person.getDNI());
    console.log("Cumpleaños: " + person.getBirthday());
    console.log("Color favorito: " + (person.getColor() != undefined ? person.getColor() : "No se ha añadido ningún color"));
    console.log("Sexo: " + person.getGenre());
    console.log("Direcciones: " + person.getAddress());
    console.log("Mails: " + person.getMail());
    console.log("Teléfonos: " + person.getPhone());
    console.log("Notas: " + (person.getNotes() != undefined ? person.getNotes() : ""));
}
exports.showPerson = showPerson;
