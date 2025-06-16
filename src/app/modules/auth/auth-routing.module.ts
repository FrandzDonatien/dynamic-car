import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { OptComponent } from "./components/opt/opt.component";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {returnUrl: window.location.pathname},
      },
      {
        path: 'register',
        component: RegistrationComponent,
        data: {returnUrl: window.location.pathname},
      },
      {
        path:'verify-otp',
        component: OptComponent,
        data: {returnUrl: window.location.pathname},
      }

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
