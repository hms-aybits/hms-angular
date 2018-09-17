import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild } from '@angular/core';
import { ScriptLoaderService } from "../../../../_services/script-loader.service";
import { Hotel } from "../_models/hotel/hotel";
import { RoomCategory } from "../_models/room-category";
import { TaxRules } from "../_models/tax-rules";
import { Employee } from "../_models/employee";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ConfigurationService } from "./configuration.service";
import { HMSRequest } from "./HMSRequest";
import { CarService } from "../learning/table-crud/carservice";
import { Facility } from "../_models/facility/facility";
import { MessageService } from "primeng/components/common/messageservice";
import {Amenity} from "../_models/amenity/amenity";
import {Service} from "../_models/service/service";
import {JsonConvert, OperationMode, ValueCheckingMode} from "json2typescript";
import {Comforts} from "../_models/comforts";
declare let $: any;
@Component({
    selector: "app-setup",
    templateUrl: "./configuration.component.html",
    styleUrls: [
        "../../../../../../node_modules/primeng/resources/themes/omega/theme.css",
        "../../../../../../node_modules/primeng/resources/primeng.min.css",
        "../../../../../../node_modules/primeicons/primeicons.css",
    ],

    encapsulation: ViewEncapsulation.None,
})


export class ConfigurationComponent implements OnInit, AfterViewInit {


    @ViewChild('mwizard_one') wizard_one;
    @ViewChild('mwizard_two') wizard_two;
    @ViewChild('mwizard_three') wizard_three;
    @ViewChild('mwizard_four') wizard_four;
    @ViewChild('mwizard_five') wizard_five;
    @ViewChild('mwizard_six') wizard_six;
    @ViewChild('inputLowerBound') inputLowerBound;



    @ViewChild('facilityName') facilityName;

    setupActivated = false;
    //Facility Declarations
    displayFacilityDialog: boolean;
    facilityCols: any[];
    facilities: Facility[] = [];
    facility: Facility = {};
    selectedFacility: Facility;
    newFacility: boolean;
    selectedFacilityCols: any[];
    facilityForm: FormGroup;

    //Amenity Declarations
    displayAmenityDialog: boolean;
    amenityCols: any[];
    amenities: Amenity[] = [];
    amenity: Amenity = {};
    selectedAmenity: Amenity;
    newAmenity: boolean;
    selectedAmenityCols: any[];
    amenityForm: FormGroup;


    //Service Declarations
    displayServiceDialog: boolean;
    serviceCols: any[];
    services: Service[] = [];
    service: Service = {};
    selectedService: Service;
    newService: boolean;
    selectedServiceCols: any[];
    serviceForm: FormGroup;



    //Room Category Declarations
    displayCategoryDialog: boolean;
    categoryCols: any[];
    categories: RoomCategory[] = [];
    category: RoomCategory = {};
    selectedCategory: RoomCategory;
    newCategory: boolean;
    selectedCategoryCols: any[];
    categoryForm: FormGroup;
    //categories : Array<RoomCategory> = [];
    //tax_category = new RoomCategory();

    //TaxRules Rules Declarations
    displayTaxDialog: boolean;
    taxCols: any[];
    taxRules: TaxRules[] = [];
    taxRule: TaxRules = {};
    selectedTax: TaxRules;
    newTax: boolean;
    selectedTaxCols: any[];
    taxForm: FormGroup;
    taxCategory: string;
    gst: number;
    cgst: number;
    sgst: number;
    status: string;
    //taxRule = new TaxRules();
    //taxRules: Array<TaxRules> = [];


    hotelBundle = [];
    hotel = new Hotel();
    hotelId: string;

    employee = new Employee();






    constructor(private _script: ScriptLoaderService, private _fb: FormBuilder, private _taxFb: FormBuilder, private _facilityFb: FormBuilder, private _amenityFb: FormBuilder, private _serviceFb: FormBuilder, private messageService: MessageService,
                private configurationService: ConfigurationService, private carService: CarService,
                ) {
        this.taxCategory = "Select tax_category";
        this.status = "Active";

    }
    ngOnInit() {
        // this.categories = this.configurationService.getCategories();


        this.categoryCols = [
            { field: 'room_category_name', header: 'Category' },
            { field: 'room_category_desc', header: 'Description' },
            { field: 'room_category_price', header: 'Price' },
            { field: 'room_category_capacity', header: 'Capacity' },
            { field: 'adult_occupancy', header: 'Adults' },
            { field: 'child_occupancy', header: 'Children' },
            { field: 'bed_count', header: 'Beds' },
            { field: 'category_room_count', header: 'Rooms' },
            { field: 'room_category_facilities', header: 'Facilities' }


        ];

        this.selectedCategoryCols = this.categoryCols;


        this.categoryForm = this._fb.group({

            categoryName: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            categoryDescription: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            categoryPrice: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            categoryCapacity: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            adultCapacity: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            childCapacity: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            bedCount: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            categoryRooms: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            facilities: ['']
        });

        this.taxForm = this._taxFb.group({

            category: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            gst: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            cgst: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            sgst: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            lowerBound: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            upperBound: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            status: ['']
        });

         //this.taxRules = this.configurationService.getTaxRules();

        this.taxCols = [
            { field: 'tax_category', header: 'Category' },
            { field: 'gst', header: 'GST' },
            { field: 'cgst', header: 'CGST' },
            { field: 'sgst', header: 'SGST' },
            { field: 'tax_lower_bound', header: 'Lower Bound' },
            { field: 'tax_upper_bound', header: 'Upper Bound' },
            { field: 'status', header: 'Status' }
        ];
        this.selectedTaxCols = this.taxCols;


        //Facilities

        this.facilityForm = this._facilityFb.group({
            'facility_name': new FormControl('', Validators.required),
            'facility_type': new FormControl('', Validators.required),
            'facility_description': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            'facility_charges': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
        });

        // this.facilities = this.configurationService.getFacilities();
        this.facilityCols = [
            { field: 'facility_name', header: 'Facility Name' },
            { field: 'facility_type', header: 'Facility Type' },
            { field: 'facility_description', header: 'Facility Description' },
            { field: 'facility_charges', header: 'Facility Charges' },
        ];
        this.selectedFacilityCols = this.facilityCols;


        //Amenities
        this.amenityForm = this._amenityFb.group({
            'amenity_name': new FormControl('', Validators.required),
            'amenity_type': new FormControl('', Validators.required),
            'amenity_description': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            'amenity_charges': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
        });

        this.amenityCols = [
            { field: 'amenity_name', header: 'Amenity Name' },
            { field: 'amenity_type', header: 'Amenity Type' },
            { field: 'amenity_description', header: 'Amenity Description' },
            { field: 'amenity_charges', header: 'Amenity Charges' },
        ];
        this.selectedAmenityCols = this.amenityCols;


        //Services
        this.serviceForm = this._serviceFb.group({
            'service_name': new FormControl('', Validators.required),
            'service_type': new FormControl('', Validators.required),
            'service_description': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            'service_charges': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
        });

        this.serviceCols = [
            { field: 'service_name', header: 'Service Name' },
            { field: 'service_type', header: 'Service Type' },
            { field: 'service_description', header: 'Service Description' },
            { field: 'service_charges', header: 'Service Charges' },
        ];
        this.selectedServiceCols = this.serviceCols;
    }
    ngAfterViewInit() {
        this._script.loadScripts('app-setup',
            ['assets/app/js/validation/wizard.js',
                'assets/app/js/bootstrap-notify.js',
                'assets/vendors/custom/datatables/datatables.bundle.js',
                'assets/demo/default/custom/crud/datatables/data-sources/html.js']);

        console.log(this.wizard_one.nativeElement.className);
        console.log(this.wizard_one.nativeElement.id);
    }

    addCategory(model: RoomCategory) {
        this.categories.push({

            // categoryName: model.room_category_name,
            // categoryDescription: model.room_category_desc,
            // categoryPrice: model.room_category_price,
            // categoryCapacity: model.room_category_capacity,
            // adultCapacity: model.adult_occupancy,
            // childCapacity: model.child_occupancy,
            // bedCount: model.bed_count,
            // categoryRooms: model.category_room_count,
            // facilities: model.room_category_facilities
        });


        for (let cat of this.categories) {
            console.log(cat.room_category_name);
        }
        this.categoryForm.reset();



    }


    addTaxRule(model: TaxRules) {
        this.taxRules.push({
            tax_category: this.taxCategory,
            gst: model.gst,
            cgst: model.cgst,
            sgst: model.sgst,
            tax_lower_bound: model.tax_upper_bound,
            tax_upper_bound: model.tax_lower_bound,
            status: this.status
        });


        for (let tax of this.taxRules) {
            console.log(tax.tax_category);
            console.log(tax.gst);
            console.log(tax.cgst);
            console.log(tax.sgst);
            console.log(tax.tax_lower_bound);
            console.log(tax.tax_upper_bound);
            console.log(tax.status);
        }


        this.taxForm.reset();

    }
    onFinish() {
        let hmsRequest = new HMSRequest();
        hmsRequest.request_id = "1234";
        hmsRequest.operation = "ADD_HOTEL";
        hmsRequest.entity = "hotel_setup";
        this.hotelBundle.push(this.hotel,
            this.categories,
            this.taxRules,
            this.employee);
        hmsRequest.data = this.hotelBundle;

        this.configurationService.hotelSetUpRequest(hmsRequest)
            .subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
            );
    }


    onDemo() {
        console.log("hi from on demo");
    }

    divideGST() {
        this.taxRule.cgst = this.taxRule.gst / 2;
        this.taxRule.sgst = this.taxRule.gst / 2;
        this.taxRule.status = "ACTIVE";
    }

    selectCategory(event: Event) {
        this.taxCategory = event.srcElement.innerHTML.toString();
    }

    selectStatus(event: Event) {
        if (event.srcElement.id === 'btnActive')
            this.status = "Active";
        else
            this.status = "In-Active";
    }



    //Facility Methods


    showAddFacilityDialog() {
        this.newFacility = true;
        this.facility = {};
        this.displayFacilityDialog = true;
    }

    saveFacility() {



        let facilities = [...this.facilities];
        if (this.newFacility)
        {
            this.facility.hotel_id = this.hotelId;
            this.facility.facility_id = "TO_BE_GEN";
            this.facility.is_available = true;
            facilities.push(this.facility);
        }
        else
            facilities[this.facilities.indexOf(this.selectedFacility)] = this.facility;

        this.facilities = facilities;
        this.facility = null;
        this.displayFacilityDialog = false;

    }

    deleteFacility() {
        let index = this.facilities.indexOf(this.selectedFacility);
        this.facilities = this.facilities.filter((val, i) => i != index);
        this.facility = null;
        this.displayFacilityDialog = false;
    }

    onFacilityRowSelect(event) {
        this.newFacility = false;
        this.facility = this.cloneFacility(event.data);
        this.displayFacilityDialog = true;
    }

    cloneFacility(c: Facility): Facility {
        let facility = {};
        for (let prop in c) {
            facility[prop] = c[prop];
        }
        return facility;
    }




    //Amenity Methods


    showAddAmenityDialog() {
        this.newAmenity = true;
        this.amenity = {};
        this.displayAmenityDialog = true;
    }

    saveAmenity() {
        let amenities = [...this.amenities];
        if (this.newAmenity)
        {
            this.amenity.hotel_id = this.hotelId;
            this.amenity.amenity_id = "TO_BE_GEN";
            this.amenity.is_available = true;
            amenities.push(this.amenity);
        }
        else
            amenities[this.amenities.indexOf(this.selectedAmenity)] = this.amenity;

        this.amenities = amenities;
        this.amenity = null;
        this.displayAmenityDialog = false;

    }

    deleteAmenity() {
        let index = this.amenities.indexOf(this.selectedAmenity);
        this.amenities = this.amenities.filter((val, i) => i != index);
        this.amenity = null;
        this.displayAmenityDialog = false;
    }

    onAmenityRowSelect(event) {
        this.newAmenity = false;
        this.amenity = this.cloneAmenity(event.data);
        this.displayAmenityDialog = true;
    }

    cloneAmenity(c: Amenity): Amenity {
        let amenity = {};
        for (let prop in c) {
            amenity[prop] = c[prop];
        }
        return amenity;
    }


    //Service Methods


    showAddServiceDialog() {
        this.newService = true;
        this.service = {};
        this.displayServiceDialog = true;
    }

    saveService() {
        let services = [...this.services];
        if (this.newService)
        {
            this.service.hotel_id = this.hotelId;
            this.service.service_id = "TO_BE_GEN";
            this.service.is_available = true;
            services.push(this.service);
        }
        else
            services[this.services.indexOf(this.selectedService)] = this.service;

        this.services = services;
        this.service = null;
        this.displayServiceDialog = false;

    }

    deleteService() {
        let index = this.services.indexOf(this.selectedService);
        this.services = this.services.filter((val, i) => i != index);
        this.service = null;
        this.displayServiceDialog = false;
    }

    onServiceRowSelect(event) {
        this.newService = false;
        this.service = this.cloneService(event.data);
        this.displayServiceDialog = true;
    }

    cloneService(c: Service): Service {
        let service = {};
        for (let prop in c) {
            service[prop] = c[prop];
        }
        return service;
    }
    //Room Category Methods


    showCategoryDialogToAdd() {
        this.newCategory = true;
        this.category = {};
        this.displayCategoryDialog = true;
    }

    saveCategory() {
        let categories = [...this.categories];
        if (this.newCategory)
        {
            this.category.hotel_id = this.hotelId;
            this.category.room_category_id = "TO_BE_GEN";
            this.category.is_category_available = true;
            categories.push(this.category);
        }
        else
            categories[this.categories.indexOf(this.selectedCategory)] = this.category;

        this.categories = categories;
        this.category = null;
        this.displayCategoryDialog = false;
    }

    deleteCategory() {
        let index = this.categories.indexOf(this.selectedCategory);
        this.categories = this.categories.filter((val, i) => i != index);
        this.category = null;
        this.displayCategoryDialog = false;
    }

    onCategoryRowSelect(event) {
        this.newCategory = false;
        this.category = this.cloneCategory(event.data);
        this.displayCategoryDialog = true;
    }

    cloneCategory(c: RoomCategory): RoomCategory {
        let category = {};
        for (let prop in c) {
            category[prop] = c[prop];
        }
        return category;
    }


    //TaxRules Methods

    showAddTaxRuleDialog() {
        this.newTax = true;
        this.taxRule = {};
        this.displayTaxDialog = true;
    }

    addTaxRuleToTable() {

        let taxRules = [...this.taxRules];
        if (this.newTax) {
            this.taxRule.hotel_id = this.hotelId;
            this.taxRule.tax_rule_id = "TO_BE_GEN";
            this.taxRule.tax_rule_name = "TO_BE_GEN";
            this.taxRule.status = "ACTIVE";
            taxRules.push(this.taxRule);
        }
        else
            taxRules[this.taxRules.indexOf(this.selectedTax)] = this.taxRule;

        this.taxRules = taxRules;
        this.category = null;
        this.displayTaxDialog = false;
    }

    deleteTaxRule() {
        let index = this.taxRules.indexOf(this.selectedTax);
        this.taxRules = this.taxRules.filter((val, i) => i != index);
        this.taxRule = null;
        this.displayTaxDialog = false;
    }

    onTaxRowSelect(event) {
        this.newTax = false;
        this.taxRule = this.cloneTaxRule(event.data);
        this.displayTaxDialog = true;
    }

    cloneTaxRule(c: TaxRules): TaxRules {
        let tax = {};
        for (let prop in c) {
            tax[prop] = c[prop];
        }
        return tax;
    }







    onSubmit() {
        if (this.wizard_one.nativeElement.id === 'm_wizard_form_step_1' && this.wizard_one.nativeElement.className === 'm-wizard__form-step m-wizard__form-step--current') {

            console.log("hi from wizard one");
            let hmsRequest = new HMSRequest();
            hmsRequest.request_id = "HMS_REQ";
            hmsRequest.operation = "ADD_HOTEL";
            hmsRequest.entity = "HOTEL_SETUP";
            this.hotel.hotel_id = "TO_BE_GEN";
            this.hotel.hotel_status = "1";
            hmsRequest.data = this.hotel;
            let jsonConvert: JsonConvert = new JsonConvert();
            jsonConvert.operationMode = OperationMode.LOGGING; // print some debug data
            jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
            jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL; // never allow null
            let hotel: Hotel;

            this.configurationService.addNewHotel(hmsRequest).subscribe(
                (response) => {
                    // const jsonObject: object = JSON.parse(response.data);
                    // hotel = jsonConvert.deserialize(jsonObject, Hotel);
                    // this.hotelId = hotel.hotel_id;
                    // console.log("the hote id is"+this.hotelId);
                    console.log("hotel json generated");
                       },
                (error) => console.log(error)
            );
        }
        else if (this.wizard_two.nativeElement.id === 'm_wizard_form_step_2' && this.wizard_two.nativeElement.className === 'm-wizard__form-step m-wizard__form-step--current') {

            let hmsRequest = new HMSRequest();
            hmsRequest.request_id = "HMS_REQ";
            hmsRequest.operation = "ADD_COMFORTS";
            hmsRequest.entity = "HOTEL_SETUP";
            let comforts = new Comforts();
            comforts.amenities = this.amenities;
            comforts.facilities = this.facilities;
            comforts.services = this.services;
            hmsRequest.data = comforts;
            this.configurationService.addNewHotelFacilities(hmsRequest).subscribe(
                (response) => console.log("Hotel json has been generated"+response),
                (error) => console.log(error)
            );

        }
        else if (this.wizard_three.nativeElement.id === 'm_wizard_form_step_3' && this.wizard_three.nativeElement.className === 'm-wizard__form-step m-wizard__form-step--current') {
            let hmsRequest = new HMSRequest();
            hmsRequest.request_id = "HMS_REQ";
            hmsRequest.operation = "ADD_ROOM_CATEGORIES";
            hmsRequest.entity = "HOTEL_SETUP";
            hmsRequest.data = this.categories;
            this.configurationService.addNewHotelCategories(hmsRequest).subscribe(
                (response) => console.log("Categories json has been generated"+response),
                (error) => console.log(error)
            );
        }
        else if (this.wizard_four.nativeElement.id === 'm_wizard_form_step_4' && this.wizard_four.nativeElement.className === 'm-wizard__form-step m-wizard__form-step--current') {
            let hmsRequest = new HMSRequest();
            hmsRequest.request_id = "HMS_REQ";
            hmsRequest.operation = "ADD_TAX_RULES";
            hmsRequest.entity = "HOTEL_SETUP";
            hmsRequest.data = this.taxRules;
            this.configurationService.addNewHotelTaxRules(hmsRequest).subscribe(
                (response) => console.log("TaxRules rules json has been generated"+response),
                (error) => console.log(error)
            );
        }
        else if (this.wizard_five.nativeElement.id === 'm_wizard_form_step_5' && this.wizard_five.nativeElement.className === 'm-wizard__form-step m-wizard__form-step--current') {
            let hmsRequest = new HMSRequest();
            hmsRequest.request_id = "HMS_REQ";
            hmsRequest.operation = "ADD_ADMIN";
            hmsRequest.entity = "HOTEL_SETUP";
            this.employee.hotel_id = this.hotelId;
            hmsRequest.data = this.employee;
            this.configurationService.addNewHotelAdmin(hmsRequest).subscribe(
                (response) => console.log("Admin Employee json has been generated"+response),
                (error) => console.log(error)
            );
            console.log("hi from wizard five");
        }
        else if (this.wizard_five.nativeElement.id === 'm_wizard_form_step_6' && this.wizard_six.nativeElement.className === 'm-wizard__form-step m-wizard__form-step--current') {
            //console.log("hi from wizard six")
        }
    }

}
