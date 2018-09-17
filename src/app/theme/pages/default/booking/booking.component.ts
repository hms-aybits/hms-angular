import { AfterViewInit, Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Room } from "./_models/room";
import { ScriptLoaderService } from "../../../../_services/script-loader.service";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { SelectItem } from "primeng/primeng";
import { BookingService } from "./booking.service";
import { ActivatedRoute, Router } from "@angular/router";
const now = new Date();
@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: [
        '../../../../../assets/app/css/primeng.css',
        '../../../../../assets/app/css/theme.css',
    ],
    encapsulation: ViewEncapsulation.None,
})

export class BookingComponent implements OnInit, AfterViewInit {
    model1: NgbDateStruct;
    model2: NgbDateStruct;
    isDisabled: boolean;
    categories: SelectItem[];
    roomStatus: SelectItem[];
    selectedCategories: string[] = [];
    selectedRoomStatus: string[] = [];
    rooms: Room[];
    allRooms = this.rooms;
    categorisedRooms = this.rooms;
    roomsSelected = new Array();
    constructor(private _script: ScriptLoaderService, private bookingService: BookingService,
        private router: Router) {
        this.categories = [];
        this.roomStatus = [];
        this.categories.push({ label: 'PRIMARY_DELUXE', value: 'PRIMARY_DELUXE' });
        this.categories.push({ label: 'SECONDARY_DELUXE', value: 'SECONDARY_DELUXE' });
        this.categories.push({ label: 'SUPER_DELUXE', value: 'SUPER_DELUXE' });
        this.categories.push({ label: 'ULTRA_DELUXE', value: 'ULTRA_DELUXE' });

        this.roomStatus.push({ label: 'AVAILABLE', value: 'AVAILABLE' });
        this.roomStatus.push({ label: 'BOOKED', value: 'BOOKED' });
        this.roomStatus.push({ label: 'OCCUPIED', value: 'OCCUPIED' });
        this.roomStatus.push({ label: 'N/A', value: 'N/A' });

    }
    ngOnInit() {
        this.model1 = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
        this.model2 = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
        this.rooms = this.bookingService.getRooms();
        this.allRooms = this.rooms;
        this.categorisedRooms = this.rooms;
    }
    ngAfterViewInit() {
        this._script.loadScripts('app-booking',
            ['assets/app/js/bootstrap-datetimepicker.js',

            ]);

    }






    fromDate(event: Event) {
        console.log('hi am from calendar' + this.model1.day + "/" + this.model1.month + "/" + this.model1.year);
    }
    toDate(event: Event) {
        let sortedRooms: Array<Room> = [];
        for (let room of this.rooms) {
            if (room.roomPrice === "1000") {
                sortedRooms.push(room);
            }
        }
        this.rooms = sortedRooms;

        for (let room of this.rooms)
            console.log(room.roomNumber);
        //console.log('hi am from calendar'+this.model2.day+"/"+this.model2.month+"/"+this.model2.year);

    }

    filterByCategory(event: Event) {
        /*       console.log("tax_category list starts");
               for (let tax_category of this.selectedCategories)
                   console.log(tax_category);*/
        this.rooms = this.allRooms;
        let filteredRooms: Array<Room> = [];
        if (this.selectedCategories.length !== 0) {
            for (let category of this.selectedCategories) {
                console.log("selected tax_category is" + category)
                for (let room of this.rooms) {
                    if (room.roomCategory === category) {
                        filteredRooms.push(room);
                    }
                }
            }

            this.rooms = filteredRooms;
            this.categorisedRooms = filteredRooms;
        }
        else {
            this.rooms = this.allRooms;
        }
        for (let room of this.rooms)
            console.log(room.roomNumber);
    }

    filterByStatus(event: Event) {
        this.rooms = this.categorisedRooms;
        let filteredRooms: Array<Room> = [];
        if (this.selectedRoomStatus.length !== 0) {
            for (let status of this.selectedRoomStatus) {
                console.log("selected tax_category is" + status)
                for (let room of this.rooms) {
                    if (room.roomStatus === status) {
                        filteredRooms.push(room);
                    }
                }
            }

            this.rooms = filteredRooms;
        }
        else {
            this.rooms = this.categorisedRooms;
        }
        for (let room of this.rooms)
            console.log(room.roomNumber);
    }



    sortRoomsAscPrice(event: Event) {
        this.rooms.sort(this.compareValues('roomPrice'));
    }
    sortRoomsDescPrice(event: Event) {
        this.rooms.sort(this.compareValues('roomPrice', 'desc'));
    }









    // //[ngStyle]="setMyStyles(room)"
    setHeaderStyle(room: Room) {
        let style = {};
        if (room.roomStatus === 'OCCUPIED')
            style = { 'background-color': 'green' };
        else if (room.roomStatus === 'N/A')
            style = { 'background-color': 'red' };
        else if (room.roomStatus === 'AVAILABLE')
            style = { 'background-color': '#36a3f7' };
        else if (room.roomStatus === 'BOOKED')
            style = { 'background-color': 'red' };

        return style;
    }

    //[ngClass]="setHeaderClass(room)"
    setHeaderClass(room: Room) {
        let customClass: string;
        if (room.roomStatus === 'OCCUPIED')
            customClass = "card-header bg-warning border-warning";
        else if (room.roomStatus === 'N/A')
            customClass = "card-header bg-success border-success";
        else if (room.roomStatus === 'AVAILABLE')
            customClass = "card-header bg-info border-info";
        else if (room.roomStatus === 'CANCELED')
            customClass = "card-header bg-danger border-danger";

        return customClass;
    }

    // [ngClass]="setBorderClass(room)"
    setBorderClass(room: Room) {
        let customClass: string;
        if (room.roomStatus === 'OCCUPIED')
            customClass = "card border-warning mb-3";
        else if (room.roomStatus === 'N/A')
            customClass = "card border-success mb-3";
        else if (room.roomStatus === 'AVAILABLE')
            customClass = "card border-info mb-3";
        else if (room.roomStatus === 'CANCELED')
            customClass = "card border-danger mb-3";

        return customClass;
    }
    //[ngClass]="setFooterClass(room)"
    setFooterClass(room: Room) {
        let customClass: string;
        if (room.roomStatus === 'OCCUPIED')
            customClass = "card-footer bg-primary border-warning";
        else if (room.roomStatus === 'N/A')
            customClass = "card-footer bg-success border-success";
        else if (room.roomStatus === 'AVAILABLE')
            customClass = "card-footer bg-info border-info";
        else if (room.roomStatus === 'CANCELED')
            customClass = "card-footer bg-danger border-danger";

        return customClass;
    }

    setFooterStyle(room: Room) {
        let style = {};
        if (room.roomStatus === 'OCCUPIED')
            style = {
                'background-color': 'green',
                'cursor': 'pointer',
                'color': '#F0F0F0',
                'font-weight': 'bold',
                'text-align': 'center'
            };
        else if (room.roomStatus === 'N/A')
            style = {
                'background-color': 'red',
                'cursor': 'pointer',
                'color': '#F0F0F0',
                'font-weight': 'bold',
                'text-align': 'center'
            };
        else if (room.roomStatus === 'AVAILABLE')
            style = {                
'background-color': '#36a3f7',
                'cursor': 'pointer',
                'color': '#F0F0F0',
                'font-weight': 'bold',
                'text-align': 'center'
            };
        else if (room.roomStatus === 'BOOKED')
            style = {
                'background-color': '#EC7145',
                'cursor': 'pointer',
                'color': '#F0F0F0',
                'font-weight': 'bold',
                'text-align': 'center'
            };

        return style;
    }



    compareValues(key, order = 'asc') {
        return function(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }

            const varA = (typeof a[key] === 'string') ?
                a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string') ?
                b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order == 'desc') ? (comparison * -1) : comparison
            );
        };
    }


    onSubmitBooking() {
        this.router.navigateByUrl('booking/individual-booking'); 
    }

    selectedRooms(event: Event) {
        //  console.log(event.srcElement.id);
        //   if (event.srcElement.className === "card-footer bg-success border-success") {
        //  if (event.srcElement.getAttribute("class") === "card-footer bg-success border-success")
        if (event.srcElement.innerHTML === "AVAILABLE") {
            event.srcElement.innerHTML = "SELECTED";
            event.srcElement.setAttribute("class", "card-footer bg-primary border-success");
            this.roomsSelected.push(event.srcElement.id);

            this.roomsSelected.forEach((item, index) => {
                console.log("rooms are \n" + item); // 9, 2, 5
                console.log("Array index is" + index); // 0, 1, 2
            });

        }
        else if (event.srcElement.innerHTML === "SELECTED") {
            event.srcElement.innerHTML = "AVAILABLE";
            event.srcElement.setAttribute("class", "card-footer bg-info border-success");

        }

    }
}