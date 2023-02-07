import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Team} from "../shared/models/team.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class TeamsService {

  constructor(private http: HttpClient) {
  }

  fetch() {
    return this.http.get<Team>('/api/teams').pipe(map(res => {
      const teamsArray: Team[] = [];
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          teamsArray.push({ ...res[key] })
        }
      }
      return teamsArray;
    }));
  }

  fetchById(id: number) {
    return this.http.get<Team>('/api/team/' + id);
  }

  save(team: Team) {
    const jwt = localStorage.getItem('currentUser');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + jwt
      }),
      observe: 'response' as const
    };

    return this.http.post('/api/team/new', team, httpOptions);
  }

  edit(team: Team, id: number) {
    const jwt = localStorage.getItem('currentUser');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + jwt
      }),
      observe: 'response' as const
    };

    return this.http.put('/api/team/modify/' + id, team, httpOptions);
  }

  delete(team: Team) {
    const jwt = localStorage.getItem('currentUser');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + jwt
      }),
      observe: 'response' as const,
      body: team
    };

    return this.http.delete('/api/team/delete', httpOptions);
  }

}
