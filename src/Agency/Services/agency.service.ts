import { Injectable, Param, Put, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AgencyEntity } from '../Entity/agency.entity';
import { AgencyDto } from '../dtos/agency.dto';
// import { Agency } from './AgencyInterface/agency';

@Injectable()
export class AgencyService {
    constructor(
        @InjectRepository(AgencyEntity)
        private agencyRepo: Repository<AgencyEntity>,
    ){}
    //  public agencys: Agency []=[];  // globel agency object

    //Inserting 
    insert(agency:AgencyDto){
        return this.agencyRepo.save(agency);
       }

    getAgencyById(id) {

        return this.agencyRepo.findOneBy({ id });
    }
    getAgencyByName(AgencyName) {

        return this.agencyRepo.findOneBy({ AgencyName });
    }
    getAgencyByIDName(qry):any {
        return this.agencyRepo.findOneBy({ id:qry.id,AgencyName:qry.AgencyName });
    }

    SearchAgencyById(id) {
        return this.agencyRepo.findOneBy({ id });
    
       }
       SearchAgencyByName(AgencyName)
       {
        return this.agencyRepo.findOneBy({ AgencyName });
       }


//    getAgencybylocation(location:string): Agency {
//    return this.agencys.filter(i=>i.location==location)[0];

   
//    }

   
   deleteAgencyByid(id){
    return this.agencyRepo.delete(id);
    
   }
   deleteAgencybyname(AgencyName) {
    return this.agencyRepo.delete(AgencyName);
   }

//  updateAgency(AgencyName,location,Email,id):any{
//     return this.agencyRepo.update(id,{AgencyName:AgencyName,location:location,Email:Email});
//     }
getAllAgency(): any {
        return this.agencyRepo.find();

    }

    async updateAgencyRating(id: number, Ratings: number): Promise<void> {
        const agency = await this.agencyRepo.findOneBy({ id });
       
        agency.Ratings = Ratings;
        await this.agencyRepo.save(agency);
    }
    done


   
  


    
  
  record(): any {
      return "all reecord hare";
  }
  project():any {
      return "100 project done";
  }
  Nextproject():any {
      return "next project name padma setu";
  }
  
   updateAgencybyid(AgencyDto:AgencyEntity, id):any{
    return this.agencyRepo.update(id,AgencyDto)
   
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