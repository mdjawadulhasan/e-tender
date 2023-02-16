import { Injectable, Param, Put } from '@nestjs/common';
import { Agency } from './AgencyInterface/agency';

@Injectable()
export class AgencyService {
    public agencys: Agency []=[];  // globel agency object
  getAllAgency(): Agency[] {
      return this.agencys;
  }
  getAgency(id:string): Agency {
   return this.agencys.filter(i=>i.id==id)[0];

   
   }

   getAgencybyname(AgencyName:string): Agency {
    return this.agencys.filter(i=>i.AgencyName==AgencyName)[0];
 
    
    }
   addAgency(agency:Agency):Agency{
    this.agencys.push(agency);
    return agency;
   }
   deleteAgency(id:string):Agency []{
    const remainingAgency =this.agencys.filter(i=>i.id !== id);
    this.agencys=remainingAgency;
    return remainingAgency || [];
   }

   updateAgencybyid(AgencyName,id):any{
   return "update Agency "+AgencyName+" Agency id "+id;
   }
   

  
}