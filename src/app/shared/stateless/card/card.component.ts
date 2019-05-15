import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {NodeService} from '../../services/node.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() nodes: any[];

  constructor(private http: HttpClient, private nodeService: NodeService) {
  }

  ngOnInit() {
//    this.nodeService.currentNode$.subscribe(node => this.node = node);
  }

  pathFile(node) {
    return `${environment.API_URL_HTTPS}/api/videoFile/${node.name}`;
  }

  openChildren(node) {
    if (node.children) {
      console.log(node);
      this.nodeService.loadChildren(node.children);
    }
  }
}
