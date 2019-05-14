import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() node: any;

  isLoading = false;


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  loadVideo(node: any) {
    console.log(node.name)
    this.isLoading = true;
  }

  path(node) {
    return `${environment.API_URL_HTTPS}/video/${node.name}`;
  }


}
