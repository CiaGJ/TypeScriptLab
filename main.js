"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
const address_1 = require("./address");
const phone_1 = require("./phone");
const mail_1 = require("./mail");
// Person 1
const aliciaAddress = new address_1.Address("Calle uno", 1, 12345, "Madrid", "Madrid", 1, "A");
const aliciaMail = new mail_1.Mail(mail_1.mailtype.personal, "alicia@test.com");
const aliciaPhone = new phone_1.Phone(phone_1.phonetype.mobile, 999999999);
const alicia = new person_1.Person("Alicia", "Perez", 30, "999999999A", new Date(1993, 1, 1), person_1.genre.F, aliciaAddress, aliciaMail, aliciaPhone, "Amarillo", "Este es el espacio dedicado a las notas");
(0, person_1.showPerson)(alicia);
// Person 2
const felipeAddress = new address_1.Address("Calle dos", 2, 67890, "Madrid", "Madrid");
const felipeMail = new mail_1.Mail(mail_1.mailtype.work, "felipe@test.com");
const felipePhone = new phone_1.Phone(phone_1.phonetype.work, 111111111);
const felipe = new person_1.Person("Felipe", "Fernandez", 50, "123456789A", new Date(1971, 2, 2), person_1.genre.M, felipeAddress, felipeMail, felipePhone);
(0, person_1.showPerson)(felipe);
// Person 3
const DNI = "123456789A";
const alexAddress = new address_1.Address("Calle tres", 3, 13579, "Madrid", "Madrid");
const alexMail = new mail_1.Mail(mail_1.mailtype.personal, "alex@test.com");
const alexPhone = new phone_1.Phone(phone_1.phonetype.mobile, 111111111);
const alex = new person_1.Person("Alex", "Zurita", 23, DNI, new Date(2000, 3, 3), person_1.genre.NB, alexAddress, alexMail, alexPhone);
(0, person_1.showPerson)(alex);
console.log("Actualizando usuario con DNI " + DNI);
//Modify register by DNI search
const people = [alicia, felipe, alex];
const changePerson = people.find((p) => p.getDNI() === DNI);
changePerson?.addAddress(new address_1.Address("Calle Nueva", 8, 34000, "Alicante", "Alicante", undefined, "A"));
changePerson?.addMail(new mail_1.Mail(mail_1.mailtype.personal, "personal.felipe@test.com"));
changePerson?.addPhone(new phone_1.Phone(phone_1.phonetype.mobile, 666777888));
// Show 3 people
//showPerson(alicia);
(0, person_1.showPerson)(felipe);
//showPerson(alex);
