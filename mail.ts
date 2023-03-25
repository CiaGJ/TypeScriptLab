enum mailtype{
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
}