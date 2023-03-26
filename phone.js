"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printPhone = exports.Phone = exports.phonetype = void 0;
var phonetype;
(function (phonetype) {
    phonetype["mobile"] = "Movil";
    phonetype["work"] = "Trabajo";
    phonetype["home"] = "Casa";
    phonetype["other"] = "Otro";
})(phonetype = exports.phonetype || (exports.phonetype = {}));
class Phone {
    type;
    phonenumber;
    constructor(type, phone) {
        this.type = type;
        this.phonenumber = phone;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type;
    }
    getPhoneNumber() {
        return this.phonenumber;
    }
    setPhoneNumber(phonenumber) {
        this.phonenumber;
    }
}
exports.Phone = Phone;
function printPhone(phone) {
    console.log("Tipo: " + phone.getType());
    console.log("Teléfono: " + phone.getPhoneNumber());
}
exports.printPhone = printPhone;
