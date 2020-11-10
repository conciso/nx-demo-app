import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BackendService } from './backend.service';

@Component({
  selector: 'nx-demo-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  hello$: Observable<{ message: string }>;
  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.hello$ = this.backendService.getWelcomeMessage();
  }
}
