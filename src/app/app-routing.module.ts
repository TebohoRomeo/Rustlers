import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessDetailComponent } from './business-detail/business-detail.component';
import { BusinessDirectoryComponent } from './business-directory/business-directory.component';
import { ContributeComponent } from './contribute/contribute.component';
import { AddBusinessComponent } from './helper/add-business/add-business.component';
import { ConfirmComponent } from './helper/confirm/confirm.component';
import { LoginComponent } from './helper/login/login.component';
import { IntroComponent } from './intro/intro.component';
import { ResourceMainComponent } from './resource-main/resource-main.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'intro'},
  {path: 'bizdir', component: BusinessDirectoryComponent},
  {path: 'addbiz', component: AddBusinessComponent},
  {path: 'biz/:id', component: BusinessDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'res-main', component: ResourceMainComponent},
  {path: 'res-details/:id', component: ResourcesComponent},
  {path: 'contribute', component: ContributeComponent},
  {path: 'confirm', component: ConfirmComponent},
  {path: 'intro', component: IntroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
