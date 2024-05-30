import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: 'auth',
    // loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
    component: RegisterComponent
  },
  {
    path: 'content',
    loadChildren: () => import('../app/content/content.module').then(module => module.ContentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
