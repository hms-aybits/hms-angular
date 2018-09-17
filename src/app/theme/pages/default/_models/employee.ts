import {LoginAttributes} from "./login-attributes";
import {ContactDetail} from "./contact-detail";
import {Address} from "./address";
import {IdentificationParam} from "./identification-param";

export class Employee {
    hotel_id: string;
    emp_id: string;
    emp_full_name: string;
    login_attributes = new LoginAttributes();
    emp_role: string;
    contact_details = new ContactDetail();
    employee_address = new Address();
    identification_param = new IdentificationParam();
    employee_status: string;
    date_modified: string;
    date_created: string;
    date_deleted: string;

    constructor() { }

}