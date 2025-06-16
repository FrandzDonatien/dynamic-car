import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { provideRouter, RouterOutlet } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { routes } from "./app.routes";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthService } from './modules/auth';
import { appHttpInterceptor } from './core/services/app.interceptor';

function appInitializer(authService: AuthService) {
  return () => {
    return new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      authService.getUserByToken().subscribe().add(resolve);
    });
  };
}

@NgModule({
  declarations:[
    AppComponent
  ],
  imports:[
    BrowserModule,
    RouterOutlet,
  ],
  providers:[
    {provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthService]},
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([appHttpInterceptor])),
    provideRouter(routes),
  ],
  bootstrap:[AppComponent]
})

export class AppModule {
}
