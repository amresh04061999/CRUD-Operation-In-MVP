export class Contact {
  public id: number;
  public fullname: string;
  public mobileno: number;
  public email: string;
  public address: string;
  public profileImage:any
  constructor(id: number, 
    fullname: string,
     mobileno:number,
      email: string,
      address:string
      ) {
    this.id = id;
    this.fullname = fullname;
    this.mobileno = mobileno;
    this.email = email;
    this.address = address;
  }
}