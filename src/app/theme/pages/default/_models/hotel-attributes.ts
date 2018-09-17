import {Address} from "./address";
import {ContactDetail} from "./contact-detail";
import {JsonObject} from "json2typescript";
@JsonObject("HotelAttributes")
export class HotelAttributes {
    hotel_name: string;
    hotel_address = new Address();
    hotel_contact_details = new ContactDetail();
    hotel_room_count: string;
    hotel_room_doorno_format: string;
    hotel_employee_count: string;
    hotel_bed_count: string;
    hotel_rating: string;
    hotel_logo: string;

}