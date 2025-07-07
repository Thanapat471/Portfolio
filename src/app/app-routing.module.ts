import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // หน้าแรก
  { path: 'about', component: AboutComponent },
  { path: 'certificate', component: CertificateComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'project', component: ProjectComponent },
  { path: '**', redirectTo: '' }  // 404 ถ้าไม่มีเส้นทางตรง
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
