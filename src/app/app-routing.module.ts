import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {StartComponent} from "./start/start.component";
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {ThirdComponent} from "./third/third.component";
import {InfoComponent} from "./info/info.component";
import {ContactComponent} from "./contact/contact.component";
import {ImpressumComponent} from "./impressum/impressum.component";
import {PrivacyComponent} from "./privacy/privacy.component";

const routes: Routes = [
  {path: '', component: HomeComponent, children:[
      {path: 'home', component: StartComponent},
      {path: 'first', component: FirstComponent},
      {path: 'second', component: SecondComponent},
      {path: 'third', component: ThirdComponent},
      {path: 'info', component: InfoComponent},
      {path: 'contact', component: ContactComponent}
    ]},
  { path: 'impressum', component: ImpressumComponent },
  { path: 'privacy', component: PrivacyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
