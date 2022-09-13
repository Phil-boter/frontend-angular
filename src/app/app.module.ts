import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectPageComponent } from './pages/projectPage/projectPage.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ScrollToTopButtonComponent } from './components/scroll-to-top-button/scroll-to-top-button/scroll-to-top-button.component';
import { EmailPageComponent } from './pages/emailPage/email-page.component';
import { EmailModalComponent } from './components/emailModal/email-modal.component';
import { HeadlineComponent } from './components/headline/headline/headline.component';
import { IntesectionDirective } from './directives/intesection.directive';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        ProjectsComponent,
        ProjectPageComponent,
        ScrollToTopButtonComponent,
        EmailPageComponent,
        EmailModalComponent,
        HeadlineComponent,
        IntesectionDirective,
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
