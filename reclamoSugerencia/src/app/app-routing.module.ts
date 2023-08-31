import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginReclamoComponent } from './pages/login-reclamo/login-reclamo.component';
import { ReclamoComponent } from './pages/reclamo/reclamo.component';
import { AdminReclamoComponent } from './pages/admin-reclamo/admin-reclamo.component';
import { RegistroReclamoComponent } from './pages/registro-reclamo/registro-reclamo.component';

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component:LoginReclamoComponent},
  {path:'reclamo', component:ReclamoComponent},
  {path: 'admin', component: AdminReclamoComponent},
  {path: 'registro', component: RegistroReclamoComponent},


  {path: '**', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
