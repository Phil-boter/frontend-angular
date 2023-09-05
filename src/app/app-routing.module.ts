import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectPageComponent } from './pages/projectPage/projectPage.component';
import { MainPageComponent } from './pages/mainPage/main-page/main-page.component';

const routes: Routes = [
    { path: 'project', component: ProjectPageComponent },
    { path: '', component: MainPageComponent}
                    ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            // Restore the last scroll position
            scrollPositionRestoration: 'enabled',
            scrollOffset: [0, 0],
            // Enable scrolling to anchors
            anchorScrolling: 'enabled',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
