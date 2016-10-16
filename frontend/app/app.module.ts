import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {routing} from './app.routes';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {Home} from './home';
import {About} from './about';
import {WorkoutCreate, WorkoutGet} from './workout';
import {NavBarComponent} from './navbar.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations: [
        AppComponent,

        Home,
        About,
        
        WorkoutCreate,
        WorkoutGet,

        NavBarComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
