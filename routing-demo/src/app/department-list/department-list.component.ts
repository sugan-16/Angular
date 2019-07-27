import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      department-list!
    </h3>
    <ul class="items">
      <li (click)="onSelect(dept)" [class.selected]="isSelected(dept)" *ngFor="let dept of departments">
        <span class="badge">{{dept.id}}</span>{{dept.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId;

  departments = [
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"MongoDB"},
    {"id":4,"name":"Ruby"},
    {"id":5,"name":"Bootstrap"}
  ]

  constructor(private router: Router, private route:ActivatedRoute) { 
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }
  
  onSelect(department)
  {
    //this.router.navigate(['/departments',department.id]);
    this.router.navigate([department.id],{relativeTo: this.route});
  }
  isSelected(department)
  {
    return department.id === this.selectedId;
  }

}
