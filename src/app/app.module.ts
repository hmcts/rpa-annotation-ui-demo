import { BrowserModule, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ConfigService } from './config.service';
import { AppComponent } from './app.component';
import { AnnotationUiLibModule, ViewerComponent} from 'hmcts-annotation-ui-lib';
import { AuthModule } from './auth/auth.module';

const appRoutes: Routes = [
  { path: '',  component: ViewerComponent }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AnnotationUiLibModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    AuthModule
  ],
  providers: [ConfigService, TransferState],
  bootstrap: [AppComponent]
})
export class AppModule { }
