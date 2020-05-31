import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/structure/header/header.component';
import { NavComponent } from './components/structure/nav/nav.component';
import { FooterComponent } from './components/structure/footer/footer.component';
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

const routes: Routes = [
  {path:'registration', component:RegistrationComponent },
  {path:'login', component:LoginComponent },
  {path:'main', component:MainPageComponent },
  {path:'reset', component:ResetPasswordComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    OwnSketchComponent,
    IdeasCatalogueComponent,
    WeWorkComponent,
    ConstructorComponent,
    SizesComponent,
    CatalogueComponent,
    CareComponent,
    ContactUsComponent,
    FeedbacksComponent,
    LoginComponent,
    RegistrationComponent,
    MainPageComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
