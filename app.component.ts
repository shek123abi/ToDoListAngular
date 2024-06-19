import { Component,OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ToDoList';
  taskList:string[]=[]
  ngOnInit():void{
     
        const savedlists=localStorage.getItem('my_tasks')
        if (savedlists){
          this.taskList=JSON.parse(savedlists)
          console.log(this.taskList); 
          
        }
      }
  }


