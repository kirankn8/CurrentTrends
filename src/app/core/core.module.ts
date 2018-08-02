import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { MocksComponent } from './mocks/mocks.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';
import { GuardsComponent } from './guards/guards.component';
import { HttpComponent } from './http/http.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthenticationComponent, FooterComponent, HeaderComponent, ServicesComponent, MocksComponent, InterceptorsComponent, GuardsComponent, HttpComponent]
})
export class CoreModule { }
