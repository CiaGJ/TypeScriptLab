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

    getType(type: phonetype):phonetype{
        return this.type;
    }
    
    getPhoneNumber(phonenumber: number):number{
        return this.phonenumber;
    }

    setType(type:phonetype):void{
        this.type;
    }

    setPhoneNumber(phonenumber: number):void{
        this.phonenumber;
    }
}