import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'settings', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'firstpage', loadChildren: './firstpage/firstpage.module#FirstpagePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'file-upload', loadChildren: './file-upload/file-upload.module#FileUploadPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
