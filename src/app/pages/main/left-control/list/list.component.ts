import {Component, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {List} from '../../../../../domain/entities';
import {ListService} from '../../../../services/list/list.service';
import {TodoService} from '../../../../services/todo/todo.service';
import {NzContextMenuService, NzDropdownMenuComponent, NzModalService} from 'ng-zorro-antd';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() isCollapsed: boolean;
  @ViewChild('listRenameInput') private listRenameInput: ElementRef;
  @ViewChild('listInput') private listInput: ElementRef;
  lists: List[];
  currentListUuid: string;
  contextListUuid: string;
  addListModalVisible = false;
  renameListModalVisible = false;


  private destroy$ = new Subject();

  constructor(private nzContextMenuService: NzContextMenuService,
              private listService: ListService,
              private todoService: TodoService,
              private modal: NzModalService) { }

  ngOnInit(): void {
    this.listService.lists$
      .pipe(takeUntil(this.destroy$))
      .subscribe(lists => {
        this.lists = lists;
      });
    this.listService.currentUuid$
      .pipe(takeUntil(this.destroy$))
      .subscribe(uuid => {
        this.currentListUuid = uuid;
      });

    this.listService.getAll();
  }

  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent, uuid: string): void{
    this.contextListUuid = uuid;
    this.nzContextMenuService.create($event, menu);
  }
  close(): void {
     this.nzContextMenuService.close();
  }

  closeRenameListModal(): void{
    this.renameListModalVisible = false;
  }

  rename(title: string): void{
    this.listService.rename(this.contextListUuid, title);
    this.closeRenameListModal();
  }

  add(title: string): void{
    this.listService.add(title);
    this.closeAddListModal();
  }

  closeAddListModal(): void{
    this.addListModalVisible = false;
  }

  delete(): void{
    const uuid = this.contextListUuid;
    this.modal.confirm({
      nzTitle: '确认删除列表',
      nzContent: '该操作会导致该列表下的所有待办事项被删除',
      nzOnOk: () =>
        new Promise((res, rej) => {
          this.listService.delete(uuid);
          this.todoService.delete(uuid);
          res();
      }).catch(() => console.error('Delete list failed'))
    });
  }
  public openAddListModal(): void {
    this.addListModalVisible = true;
    setTimeout(() => {
      this.listInput.nativeElement.focus();
    });
  }

  openRenameListModal(): void{
    this.renameListModalVisible = true;
    setTimeout(() => {
      const title = this.lists.find(l => l._id = this.contextListUuid).title;
      this.listRenameInput.nativeElement.value = title;
      this.listRenameInput.nativeElement.focus();
    });
  }


  click(uuid: string): void{
    this.listService.setCurrentUuid(uuid);
  }


}
