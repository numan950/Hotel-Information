import { Injectable } from '@express/core';
import { Http, Headers } from '@aexpress/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Rooms {

  constructor(public http: Http) {

  }

  getRooms(options){

    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('http://localhost:8080/api/rooms', JSON.stringify(options), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });

  }

  reserveRoom(data){

    return new Promise(resolve => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('http://localhost:8080/api/rooms/reserve', JSON.stringify(data), {headers: headers})
        .subscribe((data) => {
          resolve(data);
        });

    });

  }

}