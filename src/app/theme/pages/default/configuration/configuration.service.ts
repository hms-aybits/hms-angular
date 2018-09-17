import {EventEmitter, Injectable} from "@angular/core";
import { Headers, RequestOptions } from '@angular/http';
import { HMSRequest } from "./HMSRequest";
import { Observable } from "rxjs/Observable";
import { Http, Response } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import {HmsResponse} from "../_models/hms-response";

@Injectable()
export class ConfigurationService {
    constructor(private http: Http, private httpClient: HttpClient) { }

    setupHotel(hotelBundle: any[]) {
        console.log(hotelBundle);
        //return this.http.post('https://udemy-ng-http-f3a66.firebaseio.com/data.json', customers);
        // const headers = new Headers()
        return this.http.post('http://al-khadiru:8090/hotel/fetch-all-hotels', hotelBundle);
    }
    hotelSetUpRequest(hmsRequest: HMSRequest): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('https://udemy-ng-http-f3a66.firebaseio.com/data.json', hmsRequest, options);
    }
    addNewHotel(hmsRequest: HMSRequest) {
        return this.httpClient.post('https://udemy-ng-http-f3a66.firebaseio.com/data.json', hmsRequest);
        //return this.httpClient.post<HmsResponse>('http://192.168.0.104:8090/hotel/setup/hotel', hmsRequest);
    }
    // addNewHotelFacilities(hmsRequest: any[]) {
    //     return this.httpClient.post('https://udemy-ng-http-f3a66.firebaseio.com/data.json', hotelFacilities);
    // }
    addNewHotelFacilities(hmsRequest: HMSRequest) {
        return this.httpClient.post('https://udemy-ng-http-f3a66.firebaseio.com/data.json', hmsRequest);
    }
    addNewHotelCategories(hmsRequest: HMSRequest) {
        return this.httpClient.post('https://udemy-ng-http-f3a66.firebaseio.com/data.json', hmsRequest);
    }
    addNewHotelTaxRules(hmsRequest: HMSRequest) {
        return this.httpClient.post('https://udemy-ng-http-f3a66.firebaseio.com/data.json', hmsRequest);
    }
    addNewHotelAdmin(hmsRequest: HMSRequest) {
        return this.httpClient.post('https://udemy-ng-http-f3a66.firebaseio.com/data.json', hmsRequest);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }

    //
    // getCategories() {
    //     let categories: RoomCategory[] = [];
    //     categories.push(
    //         { "hotel_id":"TO_GEN", "room_category_id": "TO_GEN", "room_category_name": "DELUXE",  "room_category_desc": "Orange", "room_category_price": "10000", "room_category_capacity": "10", "adult_occupancy": "2", "child_occupancy": "4", "bed_count": "4", "category_room_count": "10", "room_category_facilities": "GYM", "is_category_available": true},
    //         { "hotel_id":"TO_GEN", "room_category_id": "TO_GEN", "room_category_name": "DELUXE", "room_category_desc": "Orange", "room_category_price": "2000", "room_category_capacity": "8", "adult_occupancy": "2", "child_occupancy": "4", "bed_count": "4", "category_room_count": "10", "room_category_facilities": "GYM", "is_category_available": true },
    //     )
    //     return categories;
    // }
    //
    // getTaxRules() {
    //     let taxRules: TaxRules[] = [];
    //     taxRules.push(
    //         { "tax_category": "Booking", "gst": "20", "cgst": "10", "sgst": "10", "tax_lower_bound": "0", "tax_upper_bound": "2000", "status": "ACTIVE" },
    //         { "tax_category": "Service", "gst": "10", "cgst": "5", "sgst": "5", "tax_lower_bound": "0", "tax_upper_bound": "1000", "status": "IN-ACTIVE" },
    //     )
    //
    //     return taxRules;
    // }
    // getFacilities() {
    //     let facilities: Facility[] = [];
    //     facilities.push(
    //         {"hotel_id":"TO_GEN", "facility_id":"TO_GEN", "facility_name": "Swimming Pool", "facility_type": "HOTEL", "facility_description": "Only for men", "is_available": true, "is_chargeable": false, "facility_charges": "NIL"},
    //         {"hotel_id":"TO_GEN", "facility_id":"TO_GEN", "facility_name": "Gym", "facility_type": "HOTEL", "facility_description": "Only for women", "is_available": true, "is_chargeable": false, "facility_charges": "NIL"},
    //     )
    //
    //     return facilities;
    // }
}