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
    this.http.get(`${environment.API_URL_HTTPS}/api/tree`).subscribe((data: []) => {
      this.nodeService.loadChildren(data);
    });
    this.nodeService.currentNode$.subscribe(node => this.nodes = node);
  }

  loadNode(name: any) {
    const index = this.nodeService.nodeListName.indexOf(name);
    this.nodeService.loadChildren(this.nodeService.nodeList[index]);

    if (index !== this.nodeService.nodeListName.length) {
      this.nodeService.nodeListName = this.nodeService.nodeListName.slice(0, index);
      this.nodeService.nodeList = this.nodeService.nodeList.slice(0, index);
    }
  }
}
