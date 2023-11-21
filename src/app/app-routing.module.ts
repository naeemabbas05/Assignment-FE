import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './Layout/default-layout/default-layout.component';
import { AddComponent } from './user/add/add.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        children: [{
          path: '',
          component: UserComponent,
        }, {
          path: 'add',
          component: AddComponent,
        }, {
          path: 'edit/:id',
          component: AddComponent,
        }]
      }
    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
