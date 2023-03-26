"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printAddress = exports.Address = void 0;
class Address {
    street;
    num;
    floor;
    letter;
    zipcode;
    poblacion;
    provincia;
    constructor(street, no, zipcode, poblacion, provincia, floor, letter) {
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
        this.street = street;
    }
    getNum() {
        return this.num;
    }
    setNum(num) {
        this.num = num;
    }
    getFloor() {
        return this.floor;
    }
    setFloor(floor) {
        this.floor = floor;
    }
    getLetter() {
        return this.letter;
    }
    setLetter(letter) {
        this.letter = letter;
    }
    getZipcode() {
        return this.zipcode;
    }
    setZipcode(zipcode) {
        this.zipcode = zipcode;
    }
    getPoblacion() {
        return this.poblacion;
    }
    setPoblacion(poblacion) {
        this.poblacion = poblacion;
    }
    getProvincia() {
        return this.provincia;
    }
    setProvincia(provincia) {
        this.provincia = provincia;
    }
}
exports.Address = Address;
function printAddress(address) {
    console.log("Dirección: " + address.getStreet() + ", " + address.getNum() + ", " + (address.getFloor() ? address.getFloor() : "") + (address.getLetter() ? address.getLetter() : ""));
    console.log(address.getPoblacion() + ", " + address.getZipcode() + ", " + address.getProvincia());
}
exports.printAddress = printAddress;
