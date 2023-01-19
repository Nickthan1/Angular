import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { UserComponentComponent } from './user-table-component/user-table-component.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyRepairComponent } from './property-repair/property-repair.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent, HomeComponent, DetailComponentComponent, UserComponentComponent, PropertiesComponent, PropertyRepairComponent, RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
