export enum mailtype{
    work = "Trabajo",
    personal = "Personal",
    other = "Otro"
}

export class Mail {
    type: mailtype;
    mail: string;

    constructor(type: mailtype, mail: string){
        this.type = type;
        this.mail = mail;
    } 

    getType():mailtype{
        return this.type;
    }
    
    getMail():string{
        return this.mail;
    }

    setType(type:mailtype):void{
        this.type = type;
    }

    setMail(mail: string):void{
        this.mail = mail;
    }
}

export function printMail(mail: Mail):void{
    console.log("Tipo: " + mail.getType())
    console.log("Correo electrónico: "+mail.getMail())
}