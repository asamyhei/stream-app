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
    this.http.get('http://192.168.1.29:8080/api/seriesTree').subscribe(data => {
      this.node = data;
    });
  }
}
