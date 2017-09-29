import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {DataTableComponent} from "./components/data-table/data-table.component";
import {SearchComponentComponent} from "./components/search-component/search-component.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";
import {LoginComponent} from "./components/login/login.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {SearchService} from "./services/search.service";
import {FormComponent} from "./components/form/form.component";
import {Directive1} from "./directives/directive1";
import {RowhoverDirective} from "./directives/rowhover.directive";
import {TagDirective} from "./directives/tag.directive";
import {TagComponent} from "./components/tags/tags";
import {PostsComponent} from "./components/posts/posts.component";
import {TpserviceService} from "./services/tpservice/tpservice.service";

const appRoute: Routes = [
    {path:"",component:HomeComponent},
    {path:"contact",component:ContactComponent},
    {path:"about",component:AboutComponent},
    {path:"login",component:LoginComponent},
    {path:"posts",component:PostsComponent}
    ];

@NgModule({
    declarations: [
        AppComponent,
        DataTableComponent,
        SearchComponentComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        LoginComponent,
        FormComponent,
        Directive1,
        RowhoverDirective,
        TagDirective,
        TagComponent,
        PostsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoute)
    ],
    providers: [SearchService,TpserviceService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
