import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Car } from "../car";
import { CarService } from "./carservice";
@Component({
    selector: 'app-tablecrud',
    templateUrl: './tablecruddemo.component.html',
    styleUrls: [
        "../../../../../../../node_modules/primeng/resources/themes/omega/theme.css",
        "../../../../../../../node_modules/primeng/resources/primeng.min.css",
        "../../../../../../../node_modules/primeicons/primeicons.css",
    ],
    encapsulation: ViewEncapsulation.None,

})
export class TableCrudDemo implements OnInit {

    displayDialog: boolean;
    displayCategoryDialog: boolean;

    car: Car = {};

    selectedCar: Car;

    newCar: boolean;

    cars: Car[];

    cols: any[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        //this.carService.getCarsSmall().then(cars => this.cars = cars);
        this.cars = this.carService.getLocalCars();

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    }

    showDialogToAdd() {
        this.newCar = true;
        this.car = {};
        this.displayDialog = true;
    }

    save() {
        let cars = [...this.cars];
        if (this.newCar)
            cars.push(this.car);
        else
            cars[this.cars.indexOf(this.selectedCar)] = this.car;

        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    }

    delete() {
        let index = this.cars.indexOf(this.selectedCar);
        this.cars = this.cars.filter((val, i) => i != index);
        this.car = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }

    cloneCar(c: Car): Car {
        let car = {};
        for (let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
}
