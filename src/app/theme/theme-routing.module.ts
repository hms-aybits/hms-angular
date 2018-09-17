import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/_guards/auth.guard';

const routes: Routes = [
    {
        'path': '',
        'component': ThemeComponent,
        'canActivate': [AuthGuard],
        'children': [
            {
                'path': 'hotel-setup',
                'loadChildren': '.\/pages\/default\/configuration\/configuration.module#ConfigurationModule',
            },
            {
                'path': 'index',
                'loadChildren': '.\/pages\/default\/customers\/customer.module#CustomerModule',
            },
            {
                'path': 'customers',
                'loadChildren': '.\/pages\/default\/customers\/customer.module#CustomerModule',
            },
            {
                'path': 'testing',
                'loadChildren': '.\/pages\/default\/testing\/data-sources-html.module#DataSourcesHtmlModule',
            },

            {
                "path": "learning\/table-basic",
                "loadChildren": ".\/pages\/default\/learning\/table-basic\/table-basic.module#TableBasicModule"
            },

            {
                "path": "crud\/forms\/widgets\/dropzone",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-dropzone\/widgets-dropzone.module#WidgetsDropzoneModule"
            },
            {
                "path": "booking",
                "loadChildren": ".\/pages\/default\/booking\/booking.module#BookingModule"
            },
            {
                "path": "booking\/individual-booking",
                "loadChildren": ".\/pages\/default\/booking\/individual-booking\/individual-booking.module#IndividualBookingModule"
            },
            {
                "path": "booking\/corporate-booking",
                "loadChildren": ".\/pages\/default\/booking\/corporate-booking\/corporate-booking.module#CorporateBookingModule"
            },
            {
                "path": "booking\/hall-booking",
                "loadChildren": ".\/pages\/default\/booking\/hall-booking\/hall-booking.module#HallBookingModule"
            },
            {
                "path": "booking\/cancel-booking",
                "loadChildren": ".\/pages\/default\/booking\/cancel-booking\/cancel-booking.module#CancelBookingModule"
            },
            {
                "path": "booking\/checkin",
                "loadChildren": ".\/pages\/default\/booking\/checkin\/checkin.module#CheckinModule"
            },
            {
                "path": "booking\/checkout",
                "loadChildren": ".\/pages\/default\/booking\/checkout\/checkout.module#CheckoutModule"
            },
            {
                "path": "reports\/customers-report",
                "loadChildren": ".\/pages\/default\/reports\/customers-report\/customers-report.module#CustomersReportModule"
            },
            {
                "path": "reports\/bookings-report",
                "loadChildren": ".\/pages\/default\/reports\/bookings-report\/bookings-report.module#BookingsReportModule"
            },

            {
                'path': '',
                'redirectTo': 'index',
                'pathMatch': 'full',
            },
        ],
    },
    {
        'path': '**',
        'redirectTo': 'index',
        'pathMatch': 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ThemeRoutingModule { }