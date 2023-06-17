import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor() {}

   navItems: Route[] = [
    {
      data: {
        title: 'TestCaseCount',
        icon: 'queue',
      },
      path: '/new-tcc',
    },{
      data: {
        title: 'Version-One',
        icon: 'queue',
      },
      path: '/version-one',
    },{
      data: {
        title: 'Screenshots',
        icon: 'queue',
      },
      path: '/screenshots',
    }
    
  ];
 

  
}