import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // title = 'my-first-app';

  // helloMessage: string | undefined;

  // constructor(private messageService : MessageService) {}

  // ngOnInit() {
  //   this.messageService.getHelloWorldMessage().subscribe(
  //     (data) => {
  //       this.helloMessage = data.message; // Assuming your API returns { message: "hello world" }
  //     },
  //     (error) => {
  //       console.error('Error fetching hello world message:', error);
  //     }
  //   );
  // }
    }
  

