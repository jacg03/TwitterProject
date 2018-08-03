import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TwitterService } from './services/twitter.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeComponent,
    TimelineComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    FormsModule
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
