import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
      @Input() role:string[]=[];
      searchText:string=''
      constructor(){}
      ngOnInit():void{}
      removeTask(index:number){
          this.role.splice(index,1)
          localStorage.setItem('my_tasks',JSON.stringify(this.role))
      }
}
