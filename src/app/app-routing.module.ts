import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OwnSketchComponent } from './components/pageElem/own-sketch/own-sketch.component';
import { IdeasCatalogueComponent } from './components/pageElem/ideas-catalogue/ideas-catalogue.component';
import { WeWorkComponent } from './components/pageElem/we-work/we-work.component';
import { ConstructorComponent } from './components/pageElem/constructor/constructor.component';
import { SizesComponent } from './components/pageElem/sizes/sizes.component';
import { CatalogueComponent } from './components/pageElem/catalogue/catalogue.component';
import { CareComponent } from './components/pageElem/care/care.component';
import { ContactUsComponent } from './components/pageElem/contact-us/contact-us.component';
import { FeedbacksComponent } from './components/pageElem/feedbacks/feedbacks.component';
import { LoginComponent } from './components/structure/header/login/login.component';
import { RegistrationComponent } from './components/structure/header/registration/registration.component';
import { MainPageComponent } from './components/structure/main-page/main-page.component';
import { ResetPasswordComponent } from './components/structure/header/reset-password/reset-password.component';
import { LikedComponent } from './components/structure/liked/liked.component';
import { CartComponent } from './components/structure/cart/cart.component';
import { UserAccountComponent } from './components/structure/user-account/user-account.component';
import { AppComponent } from 'src/app/app.component'


const routes: Routes = [
  {path:'registration', component:RegistrationComponent },
  {path:'login', component:LoginComponent },
  {path:'main', component:MainPageComponent },
  {path:'reset', component:ResetPasswordComponent},
  {path:'ideasCatalogue', component:IdeasCatalogueComponent},
  {path:'ownSketch', component:OwnSketchComponent},
  {path:'weWork', component:WeWorkComponent},
  {path:'constructor', component:ConstructorComponent},
  {path:'sizes', component:SizesComponent},
  {path:'catalogue', component: CatalogueComponent},
  {path:'care', component:CareComponent},
  {path:'contact', component:ContactUsComponent},
  {path:'feedback', component:FeedbacksComponent},
  {path:'liked', component:LikedComponent},
  {path:'cart', component:CartComponent},
  {path:'userProfile', component:UserAccountComponent},
  {path: '', component:MainPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
