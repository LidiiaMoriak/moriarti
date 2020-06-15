import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

import { environment } from "../environments/environment";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule }    from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from "src/app/services/authentification.service";
import { AppRoutingModule }     from './app-routing.module';
import { LikedComponent } from './components/structure/liked/liked.component';
import { CartComponent } from './components/structure/cart/cart.component';
import { UserAccountComponent } from './components/structure/user-account/user-account.component';
import { ProductListItemComponent } from './components/pageElem/catalogue/product-list-item/product-list-item.component';


@NgModule({
  declarations:[
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
    ResetPasswordComponent,
    LikedComponent,
    CartComponent,
    UserAccountComponent,
    ProductListItemComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, "angularfs"),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule ,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
