import {HotelRegistrationData} from "../hotel-registration-data";
import {HotelAttributes} from "../hotel-attributes";
import {JsonObject, JsonProperty} from "json2typescript";
@JsonObject("Hotel")
export class Hotel {
    @JsonProperty("hotel_id")
    hotel_id: string = undefined;
    @JsonProperty("hotel_attributes")
    private hotel_attributes : HotelAttributes = undefined;
    @JsonProperty("hotel_registration_data")
    private hotel_registration_data : HotelRegistrationData = undefined;
    @JsonProperty("hotel_status")
    hotel_status: string = undefined;

    constructor() {
        this.hotel_attributes = new HotelAttributes();
        this.hotel_registration_data = new HotelRegistrationData();
    }


}