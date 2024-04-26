import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatAreWe1Component } from './Pages/what-are-we1/what-are-we1.component';
import { WhatAreWe2Component } from './Pages/what-are-we2/what-are-we2.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full',
  },
  { path: 'who-are-we-1', component: WhatAreWe1Component },
  { path: 'who-are-we-2', component: WhatAreWe2Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
