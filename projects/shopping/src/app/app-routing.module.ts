import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ElectronicsComponent } from "./components/electronics/electronics.component";
import { FootwearComponent } from "./components/footwear/footwear.component";
import { FashionComponent } from "./components/fashion/fashion.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { ShoppinghomeComponent } from "./components/shoppinghome/shoppinghome.component";
import { DetailsComponent } from "./components/details/details.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { ProductslistComponent } from "./components/productslist/productslist.component";
import { RegisteruserComponent } from "./components/registeruser/registeruser.component";
import { UserloginComponent } from "./components/userlogin/userlogin.component";
import { UsererrorComponent } from "./components/usererror/usererror.component";
import { CategoriesGuard } from "./components/guards/categories.guard";
import { HomeComponent } from "./components/home/home.component";


const routes:Routes = [
 
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}