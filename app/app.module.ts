import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingComponent } from './components/loading-component/loading.component';
import { AppComponent } from './app.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, LoadingComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
