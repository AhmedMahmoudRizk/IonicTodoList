import { Component, OnInit, ViewChild } from '@angular/core';
import { MultiFileUploadComponent } from '../components/multi-file-upload/multi-file-upload.component';
import { FileuploadService } from '../fileupload.service'

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.page.html',
  styleUrls: ['./file-upload.page.scss'],
})
export class FileUploadPage implements OnInit {

  @ViewChild(MultiFileUploadComponent, { static: false }) fileField: MultiFileUploadComponent;
  constructor(public fileUploadService: FileuploadService) { }

  ngOnInit() {
  }
  upload() {

    let files = this.fileField.getFiles();
    console.log(files);

    let formData = new FormData();
    formData.append('somekey', 'some value') // Add any other data you want to send

    files.forEach((file) => {
      formData.append('files[]', file.rawFile, file.name);
    });
    // POST formData to Server
    console.log(formData.get('files[]'));

    this.fileUploadService.uploadFile(formData).subscribe((sucess) => {
      console.log(sucess);
    },
      (err) => {
        console.log(err);
      })

  }

}
