
import { ProductToBuy } from "./productToBuy";

export interface Purchase {
    id?:string;
    date?:Date;
    idType?:string;
      idClient?:string;
      clientName?:string;
      email?:string;
     products:ProductToBuy[];
     total:number;
}