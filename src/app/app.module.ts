import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterService } from './models';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { TodosModule } from './todos/todos.module';
import { ChatModule } from './chat/chat.module';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    AboutModule,
    LoginModule,
    TodosModule,
    ChatModule,
    BrowserModule,
    HttpModule

  ],
  providers: [
      CharacterService
  ],
  bootstrap: [
    AppComponent
  ],
})

export class AppModule { }
