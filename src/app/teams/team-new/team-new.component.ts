import {Component, Input} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TeamsService} from "../teams.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-teams-form',
  templateUrl: './team-new.component.html',
  styleUrls: ['./team-new.component.css']
})
export class TeamNewComponent {
    constructor(private teamsService: TeamsService, private router: Router) {
  }

  onSubmit(saveForm: NgForm) {
    this.teamsService.save(saveForm.value).subscribe(res => {
      if (res.status == 200) {
        this.router.navigateByUrl('/teams')
      }
    });
  }

}
