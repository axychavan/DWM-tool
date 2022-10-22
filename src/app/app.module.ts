import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { EmergencycontactComponent } from './emergency-contact/emergencycontact.component';
import { CtmapComponent } from './ctmap/ctmap.component';
import { RecordsComponent } from './records/records.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    ProfileComponent,
    EmergencycontactComponent,
    CtmapComponent,
    RecordsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgToastModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
