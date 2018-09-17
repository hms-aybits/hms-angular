import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from "../../../../../_services/script-loader.service";
declare let $: any;
import 'fullcalendar';
import { DatePipe } from "@angular/common";
import { Constants } from "../_models/constants";

let dynamicEvents = [{
    title: 'Basha',
    start: '2018-07-01',
    end: '2018-07-02',
    description: 'Basha bhi daughter birthday party',
    color: 'red',
},
{
    title: 'Sibgath',
    start: '2018-07-07',
    end: '2018-07-10',
    description: 'Sibgath marriage party',
    color: 'red'
},
];

$(function() {
    let containerEl: JQuery = $('#m_calendar');

    containerEl.fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listWeek',

        },
        defaultDate: new Date(),
        navLinks: true, // can click day/week names to navigate views
        eventLimit: true, // allow "more" link when too many events
        events: dynamicEvents,
        eventRender: function(event, element) {
            $(element).qtip({
                content: '<div class="fc-description">' + event.description + '</div>'
            });
        },
        eventTextColor: '#ffffff',
    })
});

@Component({
    selector: "app-hall-booking",
    templateUrl: "./hall-booking.component.html",
    styleUrls: [
        '../../../../../../assets/app/css/primeng.css',
        '../../../../../../assets/app/css/theme.css',
        '../../../../../../assets/vendors/custom/fullcalendar/fullcalendar.bundle.css',
        '../../../../../../assets/app/css/jquery.qtip.min.css',
    ],
    encapsulation: ViewEncapsulation.None,
})
export class HallBookingComponent implements OnInit, AfterViewInit {

    eventTitle: string;
    description: string;
    endTimestamp: Date;
    startTimestamp: Date;


    constructor(private _script: ScriptLoaderService, public datePipe: DatePipe) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts('app-hall-booking',
            ['assets/app/js/jquery.qtip.min.js',
                'assets/demo/default/custom/crud/forms/widgets/bootstrap-datetimepicker.js']);

    }

    onClick(event: Event) {

        dynamicEvents.push({
            title: 'don',
            start: '2018-08-01',
            end: '2018-08-10',
            description: 'Don had thrown a party',
            color: 'red'
        });
        /*       this.dynamicEvents = [ {
                    title: 'Basha',
                    start: '2018-01-01',
                },
                    {
                        title: 'Sibgath',
                        start: '2018-01-07',
                        end: '2018-01-10'
                    }]*/

        // $('#m_calendar').fullCalendar( 'addEventSource', dynamicEvents );  Dynamically Changes the resouce event



        $('#m_calendar').fullCalendar('renderEvent', {
            title: 'don',
            start: '2018-01-02',
            end: '2018-01-03',
            description: 'Don had thrown a party',
            color: 'red'
        });

    }
    onSubmit(event: Event) {
        let customStartTimestamp = this.datePipe.transform(this.startTimestamp, Constants.CUSTOM_DATE_TIME_FMT);
        let customEndTimestamp = this.datePipe.transform(this.endTimestamp, Constants.CUSTOM_DATE_TIME_FMT);

        dynamicEvents.push({
            title: this.eventTitle,
            start: customStartTimestamp,
            end: customEndTimestamp,
            description: this.description,
            color: 'red'
        });
        $('#m_calendar').fullCalendar('renderEvent', {
            title: this.eventTitle,
            start: customStartTimestamp,
            end: customEndTimestamp,
            description: this.description,
            color: 'red'
        });

        console.log("eventTitle" + this.eventTitle);
        console.log("eventTitle" + customStartTimestamp);
        console.log("eventTitle" + customEndTimestamp);
        console.log("eventTitle" + this.description);
        event.srcElement.setAttribute('data-dismiss', 'modal');
    }






}

