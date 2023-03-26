import { Person, genre,showPerson } from "./person";
import { Address } from "./address";
import { Phone, phonetype } from "./phone";
import { Mail,mailtype } from "./mail";

// Person 1
const aliciaAddress = new Address("Calle uno", 1, 12345, "Madrid", "Madrid", 1, "A");
const aliciaMail = new Mail(mailtype.personal,"alicia@test.com");
const aliciaPhone = new Phone(phonetype.mobile,999999999);
const alicia = new Person("Alicia","Perez",30,"999999999A",new Date(1993,1,1),genre.F, aliciaAddress, aliciaMail,aliciaPhone,"Amarillo","Este es el espacio dedicado a las notas")

showPerson(alicia);

// Person 2
const felipeAddress = new Address("Calle dos", 2, 67890, "Madrid", "Madrid");
const felipeMail = new Mail(mailtype.work,"felipe@test.com");
const felipePhone = new Phone(phonetype.work,111111111);
const felipe = new Person("Felipe","Fernandez", 50,"123456789A",new Date(1971,2,2),genre.M,felipeAddress,felipeMail,felipePhone);

showPerson(felipe);

// Person 3
const DNI = "123456789A"
const alexAddress = new Address("Calle tres", 3, 13579, "Madrid", "Madrid");
const alexMail = new Mail(mailtype.personal,"alex@test.com");
const alexPhone = new Phone(phonetype.mobile,111111111);
const alex = new Person("Alex","Zurita", 23,DNI,new Date(2000,3,3),genre.NB,alexAddress,alexMail,alexPhone);

showPerson(alex);


console.log("Actualizando usuario con DNI "+DNI)

//Modify register by DNI search
const people = [alicia,felipe,alex]
const changePerson= people.find((p)=>p.getDNI()===DNI)
changePerson?.addAddress(new Address("Calle Nueva",8,34000,"Alicante","Alicante",undefined,"A"))
changePerson?.addMail(new Mail(mailtype.personal,"personal.felipe@test.com"))
changePerson?.addPhone(new Phone(phonetype.mobile,666777888))

// Show 3 people
showPerson(alicia);
showPerson(felipe);
showPerson(alex);
