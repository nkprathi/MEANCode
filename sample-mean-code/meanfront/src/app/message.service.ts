import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface MessageResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  getHelloWorldMessage() {
    throw new Error('Method not implemented.');
  }


  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  sendMessage(message: string) {
    return this.http.post(this.apiUrl, { message });
  }
}



  // private apiUrl = 'http://localhost:3000';

//   constructor(private http: HttpClient) { }

//   getMessage(): Observable<MessageResponse> {
//     return this.http.get<MessageResponse>(this.apiUrl);
//   }

//   getHelloWorldMessage() {
//     return this.http.get<any>(`${this.apiUrl}`);
//   }
// }
