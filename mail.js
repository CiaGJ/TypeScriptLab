"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printMail = exports.Mail = exports.mailtype = void 0;
var mailtype;
(function (mailtype) {
    mailtype["work"] = "Trabajo";
    mailtype["personal"] = "Personal";
    mailtype["other"] = "Otro";
})(mailtype = exports.mailtype || (exports.mailtype = {}));
class Mail {
    type;
    mail;
    constructor(type, mail) {
        this.type = type;
        this.mail = mail;
    }
    getType() {
        return this.type;
    }
    getMail() {
        return this.mail;
    }
    setType(type) {
        this.type = type;
    }
    setMail(mail) {
        this.mail = mail;
    }
}
exports.Mail = Mail;
function printMail(mail) {
    console.log("Tipo: " + mail.getType());
    console.log("Correo electrónico: " + mail.getMail());
}
exports.printMail = printMail;
