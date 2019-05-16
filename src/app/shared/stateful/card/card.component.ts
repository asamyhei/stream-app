import {Component, Input, OnInit} from '@angular/core';
import {NodeService} from '../../services/node.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() nodes: any[];

  constructor(private nodeService: NodeService) {
  }

  ngOnInit() {
  }

  pathFile(node) {
    return `${environment.API_URL_HTTPS}/api/videoFile/${node.name}`;
  }

  openChildren(node) {
    if (node.children) {
      console.log(node);
      this.nodeService.loadChildren(node.children);
      this.nodeService.nodeListName.push(node.name);
    }
  }
}
