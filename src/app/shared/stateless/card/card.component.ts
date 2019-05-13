import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() node: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  loadVideo(node: any) {
    console.log(node);
    this.http.get('http://localhost:8080/api/video', {params: {path: node.path}}).subscribe(data => console.log(data), err => console.log(err));
  }
}
