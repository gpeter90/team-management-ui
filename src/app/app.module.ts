import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from './header/header.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamNewComponent } from './teams/team-new/team-new.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TeamsService } from "./teams/teams.service";
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from "@angular/common/http";
import { TeamEditComponent } from './teams/team-edit/team-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    TeamNewComponent,
    AuthComponent,
    TeamEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    TeamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
