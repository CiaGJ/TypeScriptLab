"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = exports.phonetype = void 0;
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
    getType(type) {
        return this.type;
    }
    getPhoneNumber(phonenumber) {
        return this.phonenumber;
    }
    setType(type) {
        this.type;
    }
    setPhoneNumber(phonenumber) {
        this.phonenumber;
    }
}
exports.Phone = Phone;
