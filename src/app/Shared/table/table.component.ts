import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() schema: any;
  @Input() data: any;
  @Input() actionTemplate: TemplateRef<any>;
  @Input() totalCount: number = 0;
  @Input() pageNo: number = 1;
  @Input() pageSize: number = 10;
  @Output() pageChangeEvent = new EventEmitter<any>();
  constructor() {
  }

  generateCountArray(): any[] {
    return Array(Math.ceil(this.totalCount / this.pageSize)).fill(0).map((x, i) => i + 1);
  }

  pageChange(page: number) {
    this.pageChangeEvent.emit(page);
  }
  last() {
    let data = this.generateCountArray();
    this.pageChangeEvent.emit(data[data?.length - 1]);
  }
  first() {
    this.pageChangeEvent.emit(this.generateCountArray()[0]);
  }

}
