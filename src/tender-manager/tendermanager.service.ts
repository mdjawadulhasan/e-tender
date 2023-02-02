import { Injectable } from "@nestjs/common";
import { TendermanagerForm } from "./tendermanager.dto"


@Injectable()
export class TendermanagerService {

    getIndex(): string {
        return "Welcome to Tender Manager Home Page";

    }
    getUserByID(id): any {

        return "User id is " + id;
    }

    getUserByIDName(qry): any {

        return "the id is " + qry.id + " and name is " + qry.name;
    }

    insertUser(mydto: TendermanagerForm): any {

        return "Admin Inserted name: " + mydto.name + " and id is " + mydto.id;
    }

    updateUser(name, id): any {
        return "Admin updated name: " + name + " and id is " + id;
    }
    updateUserbyid(name, id): any {
        return "Update admin where id " + id + " and change name to " + name;
    }
    deleteUserbyid(id): any {

        return "Delete id is " + id;
    }


}