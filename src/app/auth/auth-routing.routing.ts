import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import {SetupComponent} from "./setup/setup.component";

const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'setup', component: SetupComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {
}