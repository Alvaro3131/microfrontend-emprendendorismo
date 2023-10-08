import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';


const routes: Routes = [

 {path:'',
 component:TeacherComponent,
 children:[
  {
    path: 'proyeccion',
    loadChildren: () =>
        loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:5200/remoteEntry.js',
            exposedModule: './Module'
        })
        .then(m => m.DashboardModule)
},
{
  path: 'tutoria',
  loadChildren: () =>
      loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:5100/remoteEntry.js',
          exposedModule: './Module'
      })
      .then(m => m.DashboardModule)
},
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
