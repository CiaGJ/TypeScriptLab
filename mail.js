"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = exports.mailtype = void 0;
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
    getType(type) {
        return this.type;
    }
    getMail(mail) {
        return this.mail;
    }
    setType(type) {
        this.type;
    }
    setMail(mail) {
        this.mail;
    }
}
exports.Mail = Mail;
