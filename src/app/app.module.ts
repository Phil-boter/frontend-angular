import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProjectComponent } from './components/project/project.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectPageComponent } from './pages/projectPage/projectPage.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ScrollToTopButtonComponent } from './components/scroll-to-top-button/scroll-to-top-button/scroll-to-top-button.component';
import { EmailModalComponent } from './components/emailModal/email-modal.component';
import { HeadlineComponent } from './components/headline/headline/headline.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        ProjectComponent,
        ProjectPageComponent,
        ScrollToTopButtonComponent,
        EmailModalComponent,
        HeadlineComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: 'toast-top-center',
            preventDuplicates: true,
            newestOnTop: true,
        }),
        IonicModule.forRoot(),
        MatProgressBarModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
