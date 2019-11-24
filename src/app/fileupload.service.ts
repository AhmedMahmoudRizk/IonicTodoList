import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  constructor(public httpClient: HttpClient) { }

  uploadFile(body) {
    return this.httpClient.post("http://localhost:3000/files", body);
  }

}
