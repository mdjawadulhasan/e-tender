import { Injectable, Param, Put, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AgencyEntity } from '../entities/agency.entity';
import { AgencyDto } from '../DTOs/agency.dto';
// import { Agency } from './AgencyInterface/agency';

@Injectable()
export class AgencyService {
    constructor(
        @InjectRepository(AgencyEntity)
        private agencyRepo: Repository<AgencyEntity>,
    ) { }
    //  public agencys: Agency []=[];  // globel agency object

    //Inserting 
    insert(agency: AgencyDto) {
        return this.agencyRepo.save(agency);
    }

    getAgencyById(id) {

        return this.agencyRepo.findOneBy({ id });
    }
    getAgencyByName(AgencyName) {

        return this.agencyRepo.findOneBy({ AgencyName });
    }
    getAgencyByIDName(qry): any {
        return this.agencyRepo.findOneBy({ id: qry.id, AgencyName: qry.AgencyName });
    }

    SearchAgencyById(id) {
        return this.agencyRepo.findOneBy({ id });

<<<<<<< HEAD

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
=======
    }
    SearchAgencyByName(AgencyName) {
        return this.agencyRepo.findOneBy({ AgencyName });
    }


    //    getAgencybylocation(location:string): Agency {
    //    return this.agencys.filter(i=>i.location==location)[0];


    //    }


    deleteAgencyByid(id) {
        return this.agencyRepo.delete(id);

    }
    deleteAgencybyname(AgencyName) {
        return this.agencyRepo.delete(AgencyName);
    }

    updateAgency(AgencyName, location, Email, id): any {
        return this.agencyRepo.update(id, { AgencyName: AgencyName, location: location, Email: Email });
    }
    getAllAgency(): any {
>>>>>>> 36707f84e0205efa16e22f6f3c9f8a77e3682413
            return this.agencyRepo.find();

        }

    async updateAgencyRating(id: number, Ratings: number): Promise < void> {
            const agency = await this.agencyRepo.findOneBy({ id });
<<<<<<< HEAD

            agency.Ratings = Ratings;
=======

        agency.workingRecord = workingRecord;
>>>>>>> 36707f84e0205efa16e22f6f3c9f8a77e3682413
            await this.agencyRepo.save(agency);
        }
        done








        record(): any {
            return "all reecord hare";
        }
        project(): any {
            return "100 project done";
        }
        Nextproject(): any {
            return "next project name padma setu";
        }

        updateAgencybyid(AgencyDto: AgencyEntity, id): any {
            return this.agencyRepo.update(id, AgencyDto)

        }



        viewagencyArea(q): string {
            return "Area is  : " + q.location;
        }
        tanderValidornot(valid): boolean {
            return valid;
        }
        adminApproaveProposal(approave): string {
            //boolean ans= approave;
            if (approave == true) {

                return "admin accept the Proposal";
            }
            else {
                return "admin reject the Proposal";
            }

        }







    }