import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';

export const routes: Routes = [
    { path: '', redirectTo: '/hello', pathMatch: 'full' },
    { path: 'hello', component: AppComponent },
    { path: 'message', component: MessageComponent }
];
