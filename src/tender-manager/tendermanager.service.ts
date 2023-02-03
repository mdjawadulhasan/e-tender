import { Injectable } from "@nestjs/common";
import { TenderForm } from "./tender.dto";
import { TendermanagerForm } from "./tendermanager.dto";





@Injectable()
export class TendermanagerService {

    getIndex(): string {
        return "Welcome to Tender Manager Home Page";

    }
    getTmanagerProfile(): any {

        return "Tender Manager Profile";
    }

    getUserByIDName(qry): any {

        return "the id is " + qry.id + " and name is " + qry.name;
    }

    insert(Tmdto: TendermanagerForm): any {

        return "Name: " + Tmdto.name + " \n id is " + Tmdto.id + " \n emai: " + Tmdto.email;
    }

    update(Tmdto: TendermanagerForm): any {
        return "Profile Updated";
    }

    viewAllAgency():any{
        return "Agency List";
    }

    createTender(tenderdto: TenderForm): any {

        return "Name: " + tenderdto.name + " \n id is " + tenderdto.id + " \n location: " + tenderdto.location;
    }

    updateTender(tenderdto: TenderForm): any {
        return "Tender Updated";
    }


    deleteTenderById(id): any {

        return "Deleted Tender Id is : " + id;
    }


    getAllTender():any{
        return "All tender List";
    }

    updateUserbyid(name, id): any {
        return "Update admin where id " + id + " and change name to " + name;
    }
   
    findtenderById(id): any {

        return "Tender Id is : " + id;
    }

    viewagencyById(id): any {

        return "Agency Id is : " + id;
    }

    viewagencyByArea(qry):any{
        return "Location : "+qry.location;
    }

}