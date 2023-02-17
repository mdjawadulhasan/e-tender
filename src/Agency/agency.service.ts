import { Injectable, Param, Put, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AgencyEntity } from './agency.entity';
import { Agency } from './AgencyInterface/agency';
import { AgencyDto } from './dtos/agency.dto';

@Injectable()
export class AgencyService {
    constructor(
        @InjectRepository(AgencyEntity)
        private agencyRepo: Repository<AgencyEntity>,
    ){}
    public agencys: Agency []=[];  // globel agency object
    
    //Inserting 
    insert(agency:AgencyDto){
        return this.agencyRepo.save(agency);
       }

  getAllAgency(): Agency[] {
      return this.agencys;
  }

record(): any {
    return "all reecord hare";
}
project():any {
    return "100 project done";
}
Nextproject():any {
    return "next project name padma setu";
}

  getAgencyById(id:number
    
    ): Agency {
   return this.agencys.filter(i=>i.id==id)[0];

   
   }
   getAgencybylocation(location:string
    
): Agency {
   return this.agencys.filter(i=>i.location==location)[0];

   
   }



   search(id:number
    // / @Query('id', ParseIntPipe) id:number
    ): Agency {
   return this.agencys.filter(i=>i.id==id)[0];

   
   }

   getAgencybyname(AgencyName:string): Agency {
    return this.agencys.filter(i=>i.AgencyName==AgencyName)[0];
 
    
    }
   
   deleteAgency(id:number):Agency []{
    const remainingAgency =this.agencys.filter(i=>i.id !== id);
    this.agencys=remainingAgency;
    return remainingAgency || [];
   }
   deleteAgencybyname(AgencyName:string):Agency []{
    const remainingAgency =this.agencys.filter(i=>i.AgencyName !== AgencyName);
    this.agencys=remainingAgency;
    return remainingAgency || [];
   }


   updateAgencybyid(id):any{
   return "update   Agency id "+id;
   }
   updateAgencybyname(AgencyName):any{
    return "update Agency  Agency name "+AgencyName;
    }

    viewagencyArea(q):string{
        return "Area is  : "+q.location;
    }
    tanderValidornot(valid):boolean{
        return  valid; 
    }
    adminApproaveProposal(approave):string{
        //boolean ans= approave;
        if(approave==true) {

            return "admin accept the Proposal";
        }
        else{
            return "admin reject the Proposal";
        }

    }
 

   
    
   

  
}