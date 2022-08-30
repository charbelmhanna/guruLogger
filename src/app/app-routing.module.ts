import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {CreateAccountComponent} from "./create-account/create-account.component";
import {ViewLoggerComponent} from "./view-logger/view-logger.component";
import {RemoveAccountComponent} from "./remove-account/remove-account.component";
import {SelectorComponent} from "./selector/selector.component";

const routes: Routes = [
  { path:  '', pathMatch: 'full', component:  SelectorComponent},
  { path:  'create', pathMatch: 'full', component:  CreateAccountComponent},
  { path:  'view', pathMatch: 'full', component:  ViewLoggerComponent},
  { path:  'remove', pathMatch: 'full', component:  RemoveAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
