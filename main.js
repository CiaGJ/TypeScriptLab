"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
const address_1 = require("./address");
const phone_1 = require("./phone");
const mail_1 = require("./mail");
// Person 1
var aliciaAddress = new address_1.Address("Calle uno", 1, 1, "A", 12345, "Madrid", "Madrid");
var aliciaMail = new mail_1.Mail(mail_1.mailtype.personal, "alicia@test.com");
var aliciaPhone = new phone_1.Phone(phone_1.phonetype.mobile, 999999999);
var alicia = new person_1.Person("Alicia", "Perez", 30, "999999999A", new Date(1993, 1, 1), person_1.genre.F, aliciaAddress, aliciaMail, aliciaPhone, "Yellow", "this are notes");
(0, person_1.showPerson)(alicia);
// Person 2
var felipeAddress = new address_1.Address("Calle dos", 2, 2, "B", 67890, "Madrid", "Madrid");
var felipeMail = new mail_1.Mail(mail_1.mailtype.work, "felipe@test.com");
var felipePhone = new phone_1.Phone(phone_1.phonetype.work, 111111111);
var felipe = new person_1.Person("Felipe", "Fernandez", 50, "123456789A", new Date(1971, 2, 2), person_1.genre.M, felipeAddress, felipeMail, felipePhone);
//console.log(felipe);
// Person 3
var alexAddress = new address_1.Address("Calle tres", 3, 3, "C", 13579, "Madrid", "Madrid");
var alexMail = new mail_1.Mail(mail_1.mailtype.personal, "alex@test.com");
var alexPhone = new phone_1.Phone(phone_1.phonetype.mobile, 111111111);
var alex = new person_1.Person("Alex", "Zurita", 23, "167492678A", new Date(2000, 3, 3), person_1.genre.NB, alexAddress, alexMail, alexPhone);
//console.log(alex);
//Modify register by DNI search
var people = [alicia, felipe, alex];
var changePerson = people.find((p) => p.getDNI() === "123456789A");
changePerson?.setAddress(new address_1.Address("Calle Nueva", 8, 0, "A", 34000, "Alicante", "Alicante"));
changePerson?.setMail(new mail_1.Mail(mail_1.mailtype.personal, "personal.felipe@test.com"));
changePerson?.setPhone(new phone_1.Phone(phone_1.phonetype.mobile, 666777888));
// Show 3 people
//console.log(alicia,felipe,alex)
