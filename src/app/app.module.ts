import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { HttpService } from './core/http.service';
import { CoreModule } from './core/core.module';
import { NumberComponent } from './core/number/number.component';

import { route } from './app-route.module';
import { AppComponent } from './app.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { BindingComponent } from './binding/binding.component';
import { DirectiveNgComponent } from './directive-ng/directive-ng.component';
import { CrudComponent } from './crud/crud.component';
import { ApiResponseComponent } from './api-response/api-response.component';
import { ApiGithubComponent } from './api-github/api-github.component';
import { HomeComponent } from './home/home.component';
import { RouteComponent } from './route/route.component';
import { PruebaComponent } from './route/prueba.component';
import { SubCompComponent } from './sub-comp/sub-comp.component';
import { SubCompComponent2 } from './subcomponente2/sub2.component';

import { DirectiveMiwComponent } from './directive-miw/directive-miw.component';
import { PipeComponent } from './pipe/pipe.component';
import { ObserverComponent } from './observer/observer.component';
import { GithubService } from './api-github/github.service';
import { ApiItemsComponent } from './api-items/api-items.componet';
import { ApiItemsService } from './api-items/api-items.service';



@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule, CoreModule, route
  ],
  declarations: [
    AppComponent, TypescriptComponent, BindingComponent, SubCompComponent, SubCompComponent2, DirectiveNgComponent,
    CrudComponent, ApiResponseComponent, ApiGithubComponent, ApiItemsComponent, HomeComponent, RouteComponent, NumberComponent,
    DirectiveMiwComponent, ObserverComponent, PipeComponent, PruebaComponent
  ],
  bootstrap: [AppComponent],
  providers: [HttpService, GithubService, ApiItemsService]

})
export class AppModule { }
