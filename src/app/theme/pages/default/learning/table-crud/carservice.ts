import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Car } from "../car";


@Injectable()
export class CarService {

    constructor(private http: Http) { }

    getCarsSmall() {
        return this.http.get('/showcase/resources/data/cars-small.json')
            .toPromise()
            .then(res => <Car[]>res.json().data)
            .then(data => { return data; });
    }
    getLocalCars() {
        let cars: Car[] = [];
        cars.push(
            { "brand": "VW", "color": "Orange", "vin": "dsad231ff", "year": 2012 }, { "brand": "Audi", "color": "Black", "vin": "gwregre345", "year": 2011 }, { "brand": "Renault", "color": "Gray", "vin": "h354htr", "year": 2005 }, { "brand": "BMW", "color": "Blue", "vin": "j6w54qgh", "year": 2003 }, { "brand": "Mercedes", "color": "Orange", "vin": "hrtwy34", "year": 1995 }, { "brand": "Volvo", "color": "Black", "vin": "jejtyj", "year": 2005 }, { "brand": "Honda", "color": "Yellow", "vin": "g43gr", "year": 2012 }, { "brand": "Jaguar", "color": "Orange", "vin": "greg34", "year": 2013 }, { "brand": "Ford", "color": "Black", "vin": "h54hw5", "year": 2000 }, { "brand": "Fiat", "color": "Red", "vin": "245t2s", "year": 2013 }
        )

        return cars;
    }
}