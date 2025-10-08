import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxLookupModule } from 'devextreme-angular/ui/lookup';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxLookupModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
