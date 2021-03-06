import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ToDoComponent } from './to-do/to-do.component';
import { TodosService } from './todos.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, SignUpComponent, WelcomeComponent, ToDoComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, providers: [TodosService] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
