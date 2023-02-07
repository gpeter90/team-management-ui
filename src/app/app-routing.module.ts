import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamNewComponent} from "./teams/team-new/team-new.component";
import {TeamsComponent} from "./teams/teams.component";
import {AuthComponent} from "./auth/auth.component";
import {AuthGuardService} from "./auth/auth-guard.service";
import {TeamEditComponent} from "./teams/team-edit/team-edit.component";

const routes: Routes = [
  { path: '', redirectTo: '/teams', pathMatch: 'full' },
  { path: 'teams', component: TeamsComponent },
  { path: 'new', component: TeamNewComponent, canActivate: [AuthGuardService]},
  { path: 'edit/:id', component: TeamEditComponent, canActivate: [AuthGuardService]},
  { path: 'login', component: AuthComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
