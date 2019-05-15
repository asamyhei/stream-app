import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  nodeListName = [];
  nodeList: any[] = [];

  private node = new BehaviorSubject(null);
  currentNode$ = this.node.asObservable();

  constructor() {
  }

  loadChildren(children: any[]) {
    this.node.next(children);
    this.nodeList.push(children);
  }

  loadParent() {
    console.log(this.nodeList);
    if (this.nodeList.length > 1) {
      this.node.next(this.nodeList[this.nodeList.length - 2]);
      this.nodeList.pop();
      this.nodeListName.pop();
    }
  }
}
