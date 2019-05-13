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
    console.log(node.name)
    //this.http.get(`http://192.168.1.29:8080/api/video/${node.name}`).subscribe();
    this.isLoading = true;
  }


}
