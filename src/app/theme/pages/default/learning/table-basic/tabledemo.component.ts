import { Car } from "../car";
import { CarService } from "./carservice";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'app-table-basic',
    templateUrl: './table-basic.component.html',

    styleUrls: [
        "../../../../../../../node_modules/primeng/resources/themes/omega/theme.css",
        "../../../../../../../node_modules/primeng/resources/primeng.min.css",
        "../../../../../../../node_modules/primeicons/primeicons.css",
    ],
    encapsulation: ViewEncapsulation.None,
})
export class TabledemoComponent implements OnInit {

    cars: Car[];

    cols: any[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        // this.carService.getCarsSmall().then(cars => this.cars = cars);
        this.cars = this.carService.getLocalCars();

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    }
}