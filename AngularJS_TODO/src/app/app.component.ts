import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NgFor],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']  // Use styleUrls instead of styleUrl
})

export class AppComponent {
  
  title = 'project';
  text: any;
  list: {
     text: any;id:number 
}[] = [];

  addTask(item: string) {
    this.list.push({text: item,id: this.list.length});
    console.log(this.list);
  }
  editTask(item:string,i:number) {
    this.list[i].text = item
  }
  
  deleteTask(id: number) {
    this.list.splice(id, 1);
  }
  }

