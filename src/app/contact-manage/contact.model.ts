export class Contact {
  public id: number;
  public fullName: string;
  public mobilNumber: number;
  public email: string;
  public address: string;
  public profileImage:any
  constructor(id: number, 
    fullName: string,
    mobilNumber:number,
      email: string,
      address:string
      ) {
    this.id = id;
    this.fullName = fullName;
    this.mobilNumber = mobilNumber;
    this.email = email;
    this.address = address;
  }
}