import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './Layout/default-layout/default-layout.component';
import { UserComponent } from './user/user.component';
import { AddComponent } from './user/add/add.component';
import { TableComponent } from './Shared/table/table.component';
import { ButtonComponent } from './Shared/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { FormBuilderComponent } from './Shared/form-builder/form-builder.component';
import { InputComponent } from './Shared/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    TableComponent,
    ButtonComponent,
    UserComponent,
    AddComponent,
    FormBuilderComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgMultiSelectDropDownModule
  ],
  providers: [],
  schemas:[NO_ERRORS_SCHEMA], 
  bootstrap: [AppComponent]
})
export class AppModule { }
