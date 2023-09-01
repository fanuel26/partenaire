import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  compte: number = 1
  step: number = 1

  token: string = ''

  afuConfig: any = {
    multiple: false,
    formatsAllowed: ".jpg,.png",
    maxSize: "1",
    uploadAPI: {
      url: "https://example-file-upload-api",
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
        "Authorization": `Bearer `
      },
      params: {
        'page': '1'
      },
      responseType: 'blob',
      withCredentials: false,
    },
    theme: "dragNDrop",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true,
    // hideSelectBtn: true,
    fileNameIndex: true,
    autoUpload: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  fileSelected(e: any) {
    console.log(e)
  }

  docUpload(e: any) {
    console.log(e)
  }

  changeCompte(i: number) {
    this.compte = i
  }

  changeNextStep() {
    this.step += 1
  }

  changePreviewStep() {
    this.step -= 1
  }
}
