import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "src/app/components/structure/header/login/login.component";
import { RegistrationComponent } from "src/app/components/structure/header/registration/registration.component";


const routes: Routes = [
  {path:'registration', component:RegistrationComponent },
  {path:'login', component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
