import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ResourceMainComponent } from './resource-main/resource-main.component';
import { ResourcesComponent } from './resources/resources.component';
import { BusinessDetailComponent } from './business-detail/business-detail.component';
import { BusinessDirectoryComponent } from './business-directory/business-directory.component';
import { BusinessCategoryComponent } from './business-category/business-category.component';
import { FooterComponent } from './footer/footer.component';
import { ContributeComponent } from './contribute/contribute.component';
import { LoginComponent } from './helper/login/login.component';
import { ConfirmComponent } from './helper/confirm/confirm.component';
import { AddBusinessComponent } from './helper/add-business/add-business.component';
import { IntroComponent } from './intro/intro.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResourceMainComponent,
    ResourcesComponent,
    BusinessDetailComponent,
    BusinessDirectoryComponent,
    BusinessCategoryComponent,
    FooterComponent,
    ContributeComponent,
    LoginComponent,
    ConfirmComponent,
    AddBusinessComponent,
    IntroComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
