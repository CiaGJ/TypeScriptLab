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

    getType(type: mailtype):mailtype{
        return this.type;
    }
    
    getMail(mail: string):string{
        return this.mail;
    }

    setType(type:mailtype):void{
        this.type;
    }

    setMail(mail: string):void{
        this.mail;
    }
}