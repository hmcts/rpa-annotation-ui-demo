import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AnnotationUiLibModule, ViewerComponent} from 'hmcts-annotation-ui-lib';
import { Routes, RouterModule } from '@angular/router';
import { LineComponent } from './line/line.component';

const appRoutes: Routes = [
  { path: '',  component: ViewerComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LineComponent
  ],
  imports: [
    BrowserModule,
    AnnotationUiLibModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
