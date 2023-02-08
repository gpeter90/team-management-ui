import {Component, OnInit} from '@angular/core';
import {TeamsService} from "./teams.service";
import {Team} from "../shared/models/team.model";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit{

  public teams: Team[];
  public isFetching = false;
  public isAuthenticated = false;

  constructor(private teamsService: TeamsService) {
  }

  ngOnInit() {
    this.isFetching = true;
    this.teamsService.fetch().subscribe((teams: Team[]) => {
      this.isFetching = false;
      this.teams = teams;
    });
    if (localStorage.getItem('currentUser')) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  deleteTeam(team: Team, index: number) {
    this.teamsService.delete(team).subscribe();
    this.teams.splice(index, 1);
  }

}
