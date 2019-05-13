import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() node: any;

  isLoading = false;
  path: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  loadVideo(node: any) {
    console.log(node);
    this.http.get(`http://localhost:8080/api/video/${node.name}`).subscribe();
    this.isLoading = true;
    //this.path = `https://aqwarium.ddns.net:8443/api/video/${(node.path)}`;
    console.log(this.path);
  }


}
