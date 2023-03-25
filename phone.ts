enum phonetype{
    mobile = "Movil",
    work = "Trabajo",
    home = "Casa",
    other = "Otro"
}

export class Phone{
    type: phonetype;
    phonenumber: number;
}