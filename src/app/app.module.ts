import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ViewLoggerComponent } from './view-logger/view-logger.component';
import { RemoveAccountComponent } from './remove-account/remove-account.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { SelectorComponent } from './selector/selector.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from "@angular/material/icon";
import {environment} from "../environments/environment";
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {Observable} from "rxjs";
import {MatProgressBarModule} from "@angular/material/progress-bar";
@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    ViewLoggerComponent,
    RemoveAccountComponent,
    SelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatProgressBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private db: AngularFirestore) {

  }

  ngOnInit(){
    this.getAllUsers();
  }

  getAllUsers() {

  }


}
