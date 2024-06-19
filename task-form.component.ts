import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
     @Input() task:any;
     newtask!: string;
     updateLocalStorage(task: string[]): void {
      this.task = task;
      localStorage.setItem('my_tasks', JSON.stringify(this.task));
    }
  
    addToDo(): void {
      // Validation check to prevent adding empty tasks
      if (this.newtask.trim()) {
        this.task.push(this.newtask.trim());
        this.updateLocalStorage(this.task);
        this.newtask = ''; // Clear the input field 
      }
    }
     
}
