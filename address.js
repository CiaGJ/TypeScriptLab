"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    street;
    num;
    floor;
    letter;
    zipcode;
    poblacion;
    provincia;
    constructor(street, no, floor, letter, zipcode, poblacion, provincia) {
        this.street = street;
        this.num = no;
        this.floor = floor;
        this.letter = letter;
        this.zipcode = zipcode;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    getStreet() {
        return this.street;
    }
    setStreet(street) {
        this.street;
    }
    getNum() {
        return this.num;
    }
    setNum(num) {
        this.num;
    }
    getFloor() {
        return this.floor;
    }
    setFloor(floor) {
        this.floor;
    }
    getLetter() {
        return this.letter;
    }
    setLetter(letter) {
        this.letter;
    }
    getZipcode() {
        return this.zipcode;
    }
    setZipcode(zipcode) {
        this.zipcode;
    }
    getPoblacion() {
        return this.poblacion;
    }
    setPoblacion(poblacion) {
        this.poblacion;
    }
    getProvincia() {
        return this.provincia;
    }
    setProvincia(provincia) {
        this.provincia;
    }
}
exports.Address = Address;
