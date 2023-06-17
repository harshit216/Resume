import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTCCComponent } from './new-tcc/new-tcc.component';
import { VersionOneComponent } from './version-one/version-one.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';


const routes: Routes = [
{path:'new-tcc' , component:NewTCCComponent},
{path:'version-one',component:VersionOneComponent},
{path:'screenshots',component:ScreenshotsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 })
export class AppRoutingModule { }
