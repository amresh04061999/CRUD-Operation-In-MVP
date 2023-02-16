export class Contact {
  private id: number;
  private fullname: string;
  private mobileno: number;
  private email: string;
  private address: string;
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