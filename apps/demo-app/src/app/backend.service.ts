import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class BackendService {
  constructor(private http: HttpClient) {}
  getWelcomeMessage(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(
      `${environment.api_url}:${environment.api_port}/api`
    );
  }
}
