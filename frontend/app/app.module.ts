import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {routing} from './app.routes';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {Home} from './home';
import {About} from './about';
import {NavBarComponent} from './navbar.component';

import {WorkoutModule} from './workout/workout.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        
        WorkoutModule
    ],
    declarations: [
        AppComponent,

        Home,
        About,

        NavBarComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
