import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDemoInjectorComponent } from './components/user-demo-injector/user-demo-injector.component';

import {Metric, AnalyticsImplementation} from './models/metric.interface';

import { UserService } from './services/user.service';
import {AnalyticsService} from './services/analytics.service';

@NgModule({
  declarations: [
    AppComponent,
    UserDemoInjectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ 
    { provide: UserService, useClass: UserService },
    { provide: 'API_URL', useValue: 'https://google.com'},
    {provide: AnalyticsService, useFactory(){
      const loggingImplementation: AnalyticsImplementation = {
        recordEvent: (metric: Metric): void =>{
          console.log('The metric is: ', metric);
        }
      };
      return new AnalyticsService(loggingImplementation);
    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
