import {Injectable} from '@angular/core';
import {BehaviorSubject, ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  private node = new BehaviorSubject(null);
  currentNode$ = this.node.asObservable();

  private nodeList: any[] = [];

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
    }
  }
}
