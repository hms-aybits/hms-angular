import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from "../../../../../_services/script-loader.service";


@Component({
    selector: "app-data-sources-ajax-server-side",
    templateUrl: "./bookings-report.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class BookingsReportComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts('app-data-sources-ajax-server-side',
            ['assets/vendors/custom/datatables/datatables.bundle.js',
                'assets/app/js/ajax-server-side.js']);

    }

}