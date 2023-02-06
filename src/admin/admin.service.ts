import { Injectable } from "@nestjs/common";
import { AdminForm } from "./admindto";

@Injectable()
export class AdminService {

    getIndex(): string {
        return "Welcome to Admin Dash Board";

    }
    getTadminProfile(): any {

        return "Tender Admin Profile";
    }

    insert(admindto: AdminForm): any {

        return "Name: " + admindto.name + " \n id is " + admindto.id + " \n emai: " + admindto.email;
    }

    update(admindto: AdminForm): any {
        return "Profile Updated for : "+admindto.name;
    }

    userCount(qry): any {
        return "Total : " + qry.utype + "= 10";
    }


    blockuserById(id): any {

        return "Blocked User Id is : " + id;
    }

    delteuserById(id): any {

        return "Deleted User Id is : " + id;
    }

    activeuserById(id): any {

        return "Actived User Id is : " + id;
    }

    userStatusById(id): any {

        return "Status : Active for user with ID =: " + id;
    }

    userLog(id): any {

        return "User log with ID =: " + id;
    }

    sentMsg(qry): any {

        return "Your message is : " + qry.msg;
    }

    adduser(qry): any {

        return "User Name : " + qry.name + " and |  User ID : " + qry.id;
    }



}