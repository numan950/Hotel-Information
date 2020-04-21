import { NgModule } from 
import { IonicApp, IonicModule } from 
import { MyApp } from 
import { HomePage } from 
import { AvailableRoomsPage } from 
import { BookingPage } from 
import { SearchPage } from 
import { Rooms } from 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AvailableRoomsPage,
    BookingPage,
    SearchPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AvailableRoomsPage,
    BookingPage,
    SearchPage
  ],
  providers: [Rooms]
})
export class AppModule {}