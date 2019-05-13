import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
    this.http.get('https://aqwarium.ddns.net:8443/api/seriesTree').subscribe(data => {
      this.node = data;
    });
  }
}
