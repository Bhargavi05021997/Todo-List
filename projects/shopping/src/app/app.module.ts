import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {TextFieldModule} from '@angular/cdk/text-field';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NetflixregisterComponent } from './components/netflixregister/netflixregister.component';
import { NetflixmainComponent } from './components/netflixmain/netflixmain.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { KeybindingComponent } from './components/keybinding/keybinding.component';
import { ProductscatalogComponent } from './components/productscatalog/productscatalog.component';
import { FilterComponent } from './components/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialdemoComponent } from './components/materialdemo/materialdemo.component';
import { MenuComponent } from './components/menu/menu.component';
import { SentenceCasePipe } from './pipes/sentencecase.pipe';
import { SortingPipe } from './pipes/sorting.pipe';
import { FilteringPipe } from './pipes/filtering.pipe';
import { RegisterComponent } from './components/register/register.component';
import { ApidemoComponent } from './components/apidemo/apidemo.component';
import { TemplateformComponent } from './components/templateform/templateform.component';
import { ReactivedemoComponent } from './components/reactivedemo/reactivedemo.component';
import { AppRoutingModule } from './app-routing.module';
import { FootwearComponent } from './components/footwear/footwear.component';
import { DetailsComponent } from './components/details/details.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductslistComponent } from './components/productslist/productslist.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { UsererrorComponent } from './components/usererror/usererror.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NetflixregisterComponent,
    NetflixmainComponent,
    ParentComponent,
    ChildComponent,
    KeybindingComponent,
    ProductscatalogComponent,
    FilterComponent,
    MaterialdemoComponent,
    MenuComponent,
    SentenceCasePipe,
    SortingPipe,
    FilteringPipe,
    RegisterComponent,
    ApidemoComponent,
    TemplateformComponent,
    ReactivedemoComponent,
    FootwearComponent,
    DetailsComponent,
    CategoriesComponent,
    ProductslistComponent,
    RegisteruserComponent,
    UserloginComponent,
    UsererrorComponent,
    
    
    
],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    ScrollingModule,
    TextFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
