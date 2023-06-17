import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VersionOneModel, VersionResponse } from '../VersionOneModel';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-version-one',
  templateUrl: './version-one.component.html',
  styleUrls: ['./version-one.component.css']
})
export class VersionOneComponent implements OnInit {


  ngOnInit(): void {
  }

  title = 'Verion-One-data-fetcher';
  fileName= 'ExcelSheet.xlsx';
  serverform : FormGroup;
  error:string='';
  data:Response;
  showTable:Boolean;

  constructor(private httpClient: HttpClient) {}

  VersionOneProperties = {iteration:'',teamName:'',totalLeaves:'',totalTeamMembers:'',totalWorkingDays:''} as VersionOneModel
  VersionOneResponse= {} as VersionResponse
  
  //Download button hit
  downloadExcel():void{
    this.httpClient.get('http://localhost:4770/v1/download',{responseType:'blob'})
    .subscribe((data:Blob)=>{
      this.handleExcelFile(data);
      this.fileName;
    });
  }
  //Download file conversion
  handleExcelFile(data:Blob):void{
    const file=new Blob([data],{type:'application/vnd.ms-excel'});
    const fileURL=URL.createObjectURL(file);
    window.open(fileURL);
  }
    //Submit button function
  VersionOne():void{
    this.httpClient.get<Response>('http://localhost:4770/v1/findData/'+this.VersionOneProperties.iteration+ "/"+this.VersionOneProperties.teamName+ "/"+this.VersionOneProperties.totalLeaves+ "/"+this.VersionOneProperties.totalTeamMembers+ "/"+this.VersionOneProperties.totalWorkingDays).subscribe((data)=>{
    this.data=data;
    if (this.data){  
    this.showTable=true; }
      console.log(this.VersionOneResponse.output);
    });
  }
  
  }
  interface Response{
    output:Output;
    
  }
  interface Output{
    noOfStories: number;
    sprintPoints: number;
    totalPlannedHrs: number;
    totalDoneHrs: number;
    teamCapacity:number;
    teamCapacityAsPerOrganization: number;
    reworkActualEfforts: number;
    productivity:number;
    normalizedProductivity:number;
}




