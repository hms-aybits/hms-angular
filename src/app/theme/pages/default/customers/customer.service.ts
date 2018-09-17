import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class CustomerService {
    constructor(private http: Http) { }

    addCustomers(customers: any[]) {
        console.log(customers);
        //return this.http.post('https://udemy-ng-http-f3a66.firebaseio.com/data.json', customers);
        // const headers = new Headers()
        return this.http.post('http://al-khadiru:8090/hotel/fetch-all-hotels', customers);


    }

}