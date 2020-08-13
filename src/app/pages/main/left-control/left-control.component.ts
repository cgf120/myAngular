import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {LocalStorageService} from '../../../services/local-storage.service';
import {USERNAME} from '../../../services/local-storage.namespace';
import {ListComponent} from './list/list.component';

@Component({
  selector: 'app-left-control',
  templateUrl: './left-control.component.html',
  styleUrls: ['./left-control.component.less']
})
export class LeftControlComponent implements OnInit {
  @ViewChild(ListComponent) listComponent: ListComponent;

  @Input() isCollapsed: boolean;
  username: string;
  constructor(private store: LocalStorageService) { }

  ngOnInit(): void {
    this.username = this.store.get(USERNAME);
  }

  openAddListModal(): void{
    this.listComponent.openAddListModal();
  }
}
