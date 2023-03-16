import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Output() showQuestion = new EventEmitter<boolean>();
  displayedColumns: string[] = ['description', 'hour', 'days', 'isActive'];
  dataSource = new MatTableDataSource<any>([
    {description: 'Alarma trabajo', hour: '09:00', days: ['Lun', 'Mar', 'Miér', 'Jue', 'Vie'].join(', '), isActive: true},
    {description: 'Alarma 2', hour: '19:00', days: ['Sáb'].join(', '), isActive: true}
  ])

  constructor() { }

  ngOnInit(): void {
  }

  createAlarm() {
    const newRow: any = { description: 'Alarma nueva', hour: '00:00', days: ['Dom'].join(', '), isActive: false };
    this.dataSource.data.push(newRow);
    this.dataSource.data = this.dataSource.data.slice();
    this.showQuestion.emit(true)
  }
}
