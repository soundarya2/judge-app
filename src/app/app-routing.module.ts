
  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { JudgesComponent } from './components/judges/judges.component';
import { ParticipantsComponent } from './components/participants/participants.component';


  const routes: Routes = [
    {path: "navmenu", component: NavmenuComponent},{path: "judges", component: JudgesComponent},{path: "participants", component: ParticipantsComponent},
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule { }
