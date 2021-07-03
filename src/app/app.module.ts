import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { ListComponent } from './list/list.component';
import { DialogAddListComponent } from './list/dialog-add-list/dialog-add-list.component';
import { TaskComponent } from './list/task/task.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DialogConfirmComponent } from './list/dialog-confirm/dialog-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    DialogAddListComponent,
    TaskComponent,
    PageNotFoundComponent,
    DialogConfirmComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
