import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TeamsService} from "../teams.service";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {Team} from "../../shared/models/team.model";

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {
  public editForm: FormGroup;

  constructor(private teamsService: TeamsService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.editForm = new FormGroup<any>({
      'name': new FormControl(null),
      'established': new FormControl(null),
      'noChampionshipTitles': new FormControl(null),
      'entryFee': new FormControl(false)
    })

    this.teamsService.fetchById(this.route.snapshot.params['id']).pipe().subscribe((res: Team) => {
      this.editForm = new FormGroup<any>({
        'name': new FormControl(res.name),
        'established': new FormControl(res.established),
        'noChampionshipTitles': new FormControl(res.noChampionshipTitles),
        'entryFee': new FormControl(res.entryFee)
      })
    });
  }

  onSubmit() {
    this.teamsService.edit(this.editForm.value, this.route.snapshot.params['id']).subscribe(res => {
      if (res.status == 200) {
        this.router.navigateByUrl('/teams');
      }
    });
  }
}
