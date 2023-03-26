import { Person, genre,showPerson } from "./person";
import { Address } from "./address";
import { Phone, phonetype } from "./phone";
import { Mail,mailtype } from "./mail";

// Person 1
var aliciaAddress = new Address("Calle uno", 1, 1, "A", 12345, "Madrid", "Madrid");
var aliciaMail = new Mail(mailtype.personal,"alicia@test.com");
var aliciaPhone = new Phone(phonetype.mobile,999999999);
var alicia = new Person("Alicia","Perez",30,"999999999A",new Date(1993,1,1),genre.F, aliciaAddress, aliciaMail,aliciaPhone,"Amarillo","Este es el espacio dedicado a las notas")

showPerson(alicia);

// Person 2
var felipeAddress = new Address("Calle dos", 2, 2, "B", 67890, "Madrid", "Madrid");
var felipeMail = new Mail(mailtype.work,"felipe@test.com");
var felipePhone = new Phone(phonetype.work,111111111);
var felipe = new Person("Felipe","Fernandez", 50,"123456789A",new Date(1971,2,2),genre.M,felipeAddress,felipeMail,felipePhone);

//console.log(felipe);

// Person 3
var alexAddress = new Address("Calle tres", 3, 3, "C", 13579, "Madrid", "Madrid");
var alexMail = new Mail(mailtype.personal,"alex@test.com");
var alexPhone = new Phone(phonetype.mobile,111111111);
var alex = new Person("Alex","Zurita", 23,"167492678A",new Date(2000,3,3),genre.NB,alexAddress,alexMail,alexPhone);

//console.log(alex);

//Modify register by DNI search
var people = [alicia,felipe,alex]
var changePerson= people.find((p)=>p.getDNI()=== "123456789A")
changePerson?.setAddress(new Address("Calle Nueva",8,0,"A",34000,"Alicante","Alicante"))
changePerson?.setMail(new Mail(mailtype.personal,"personal.felipe@test.com"))
changePerson?.setPhone(new Phone(phonetype.mobile,666777888))

// Show 3 people
//console.log(alicia,felipe,alex)