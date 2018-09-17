import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomerService } from "../../customers/customer.service";
import { ScriptLoaderService } from "../../../../../_services/script-loader.service";
import { Customer } from "../../customers/customer";
declare let Dropzone: any;
@Component({
    selector: 'app-checkin',
    templateUrl: './cancel-booking.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class CancelBookingComponent implements OnInit, AfterViewInit {
    customers = [
        // {
        //     firstName: 'Mohammed',
        //     lastName: 'Rizwan',
        //     mobileNumber: 8147090053
        // }
        // {
        //     name: 'Mohammed Basha',
        //     mobile: 9886670909,
        //     id: this.generateId()
        // }
    ];
    customerForm: FormGroup;

    public submitted: boolean;
    constructor(private customerService: CustomerService, private _fb: FormBuilder, private _script: ScriptLoaderService) {
    }

    ngOnInit() {
        // this.customerForm = new FormGroup({
        //     'firstName': new FormControl(null),
        //     'middleName': new FormControl(null),
        //     'lastName': new FormControl(null),
        //     'email': new FormControl(null),
        //     'mobileNumber': new FormControl(null),
        //     'address': new FormControl(null)
        //
        // });

        this.customerForm = this._fb.group({

            first_name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            contact_details: this._fb.group({
                primary_email: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
                primary_phone: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            }),
            address: this._fb.group({
                address_line1: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
                city: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
                state: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
                country: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            })
            // address: this._fb.group({
            //     street: ['', <any>Validators.required],
            //     postcode: ['']
            // })
        });
    }
    ngAfterViewInit() {
        this._script.loadScripts('app-widgets-dropzone',
            ['assets/demo/default/custom/crud/forms/widgets/dropzone.js']);
        Dropzone._autoDiscoverFunction();
    }
    saveModel(model: Customer, isValid: boolean) {
        this.submitted = true; // set form submit to true

        // check if model is valid
        // if valid, call API to save customer
        //console.log(model, isValid);
        this.onAddCustomer(model);
        this.customerService.addCustomers(this.customers)
            .subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
            );
    }

    onAddCustomer(model: Customer) {
        this.customers.push({
            first_name: model.first_name,
            primary_email: model.contact_details.primary_email,
            primary_phone: model.contact_details.primary_phone,
            address_line1: model.address.address_line1,
            city: model.address.city,
            state: model.address.state,
            country: model.address.country,
            id_proof: Dropzone,
        });
    }
    onAddServer() {
        // this.customers.push({
        //     firstName: this.customerForm.get('firstName').value,
        //     lastName: this.customerForm.get('lastName').value,
        //     mobileNumber: this.customerForm.get('mobileNumber').value
        // });
    }

    onSave() {
        this.onAddServer();
        // console.log(this.customerForm);


        this.customerService.addCustomers(this.customers)
            .subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
            );
    }
    private generateId() {
        return Math.round(Math.random() * 10000);
    }
}