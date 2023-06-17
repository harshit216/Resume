import { Component, Input, OnInit, Output } from '@angular/core';

import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-new-tcc',
  templateUrl: './new-tcc.component.html',
  styleUrls: ['./new-tcc.component.css']
})
export class NewTCCComponent implements OnInit {
  showTable:Boolean;
  
  ngOnInit(): void {
  }
  
  constructor(private http: HttpClient) {}

 selectedFile:File;

 onFileselected(files:FileList)
{ 
  this.selectedFile=files.item(0);

}
 
  uploadfile():void{
        if(this.selectedFile){
          const formData =new FormData();
           formData.append('file',this.selectedFile);
            this.http.post('http://localhost:2023/upload',formData)
            .subscribe(
           response =>{
                       console.log('file upoaded');
                                 });
                                 this.showTable=true;
                   }  
      }
     
        Download():void {
          const headers = new HttpHeaders().set('Accept', 'text/plain');
          this.http.get('http://localhost:2023/download', { headers, responseType: 'blob' })
          .subscribe((blob: Blob) => {
          const downloadLink = document.createElement('a');
          downloadLink.href = window.URL.createObjectURL(blob);
          downloadLink.download = 'TestCaseCountUpdated.txt';
          downloadLink.click();
          });
          
        }
        
       
          
          
}
interface Response{
  output:Output;
  
}

