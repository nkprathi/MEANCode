import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000', { responseType: 'text' }).subscribe(
      (response) => {
        this.message = response;
      },
      (error) => {
        console.error('Error fetching message:', error);
      }
    );
  }
}
