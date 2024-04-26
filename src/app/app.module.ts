import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './Home/hero/hero.component';
import { WhatWeDoComponent } from './Home/what-we-do/what-we-do.component';
import { WhyChooseUsComponent } from './Home/why-choose-us/why-choose-us.component';
import { OurSolutionsComponent } from './Home//our-solutions/our-solutions.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatisticComponent } from './Home/statistic/statistic.component';
import { CaseStudiesComponent } from './Home/case-studies/case-studies.component';
import { HowAreWeComponent } from './Home/how-are-we/how-are-we.component';
import { OurTeamComponent } from './Home/our-team/our-team.component';
import { TestimonyComponent } from './Home/testimony/testimony.component';
import { FooterComponent } from './footer/footer.component';
import { PricingComponent } from './Home/pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    WhatWeDoComponent,
    WhyChooseUsComponent,
    OurSolutionsComponent,
    StatisticComponent,
    CaseStudiesComponent,
    HowAreWeComponent,
    OurTeamComponent,
    TestimonyComponent,
    FooterComponent,
    PricingComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
