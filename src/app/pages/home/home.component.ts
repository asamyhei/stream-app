import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {NodeService} from '../../shared/services/node.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nodes: any[];

  constructor(private http: HttpClient, private nodeService: NodeService) {
  }

  ngOnInit() {
    this.http.get(`${environment.API_URL_HTTPS}/api/tree`).subscribe(data => {
      console.log(data);
      this.nodeService.loadChildren([data[0], data[1]]);
    });
    this.nodeService.currentNode$.subscribe(node => this.nodes = node);
  }
}
