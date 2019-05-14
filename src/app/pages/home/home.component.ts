import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  node: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(`${environment.API_URL_HTTPS}/api/seriesTree`).subscribe(data => {
      this.node = data;
    });
  }
}
