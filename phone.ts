export enum phonetype{
    mobile = "Movil",
    work = "Trabajo",
    home = "Casa",
    other = "Otro"
}

export class Phone{
    type: phonetype;
    phonenumber: number;

    constructor(type: phonetype, phone: number){
        this.type= type;
        this.phonenumber = phone;
    }

    getType():phonetype{
        return this.type;
    }
    setType(type:phonetype):void{
        this.type = type;
    }
    
    getPhoneNumber():number{
        return this.phonenumber;
    }
    setPhoneNumber(phonenumber: number):void{
        this.phonenumber = phonenumber;
    }
}

export function printPhone(phone: Phone):void{
    console.log("Tipo: " + phone.getType())
    console.log("Teléfono: "+phone.getPhoneNumber())
}