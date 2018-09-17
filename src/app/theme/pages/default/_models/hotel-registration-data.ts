import {JsonObject} from "json2typescript";

@JsonObject("HotelRegistrationData")
export class HotelRegistrationData {
    hotel_reg_no: string;
    building_permit_no: string;
    fire_safety_permit_no: string;
    police_license_no: string;
    health_trade_license_no: string;
    liquor_license_no: string;
    fssai_license_no: string;
    gst_no: string;
    esi_reg_no: string;
    epf_reg_no: string;
}