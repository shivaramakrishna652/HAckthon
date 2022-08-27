import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { DesignPageComponent } from './design-page/design-page.component';
import { RouterModule, Routes } from '@angular/router';
import { EmpComponent } from './emp/emp.component';

const approutes:Routes =[
  // {path:'',component:AppComponent},
  {path:'employee',component:EmpComponent},
  {path:'design',component:DesignPageComponent}
]

@NgModule({
  declarations: [AppComponent, DesignPageComponent, EmpComponent],
  imports: [BrowserModule, HttpClientModule,RouterModule.forRoot(approutes)],
  providers: [AppService],
  bootstrap: [AppComponent],
})


export class AppModule {}
