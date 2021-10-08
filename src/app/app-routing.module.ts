import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoFormComponent } from './disco-form/disco-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'new-disco',
    component: DiscoFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
