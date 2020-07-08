import { ProjectComponent } from './project/project.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        DashboardComponent,
        AboutComponent,
        MyProjectComponent,
        ProjectComponent

    ],
    imports: [CommonModule],
    exports:
        [
            DashboardComponent,
            AboutComponent,
            MyProjectComponent,
            ProjectComponent
        ],
    providers:
        [

        ]
})
export class AdminModule { }