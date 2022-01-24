import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HostService } from '../helping/hostaddress';
import SnackBar from '../helping/snackbar';
import { Customer } from '../interfaces/Customer';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private hostAddress: HostService,
    protected snack_pop_up: SnackBar
  ) { }

  post(route: string, customer: Customer) {


    return new Promise<Customer>((resolve, reject) => {
      this.http.post(`${this.hostAddress.getHostIp()}/${route}`, customer)
        .toPromise()
        .then((data: any) => {
          console.log(data)
          if (data == null) {
            this.snack_pop_up.showSnackBar("Server failure")
          }
          this.snack_pop_up.showSnackBar("Customer Added")
          resolve(data)
        })
        .catch((err) => {
          console.log(err)
          this.snack_pop_up.showSnackBar(err.error)
          // Rejection Baby
          reject(err)
        })
    })
  }

  get(route: string) {
    return new Promise<Customer>((resolve, reject) => {
      this.http.get(`${this.hostAddress.getHostIp()}/${route}`)
        .toPromise()
        .then((data: any) => {
          // Debugger
          console.log(data)
          // Check Length of Data
          if (data == null) {
            // Error PopUp
            this.snack_pop_up.showSnackBar("Server failure")
          }
          // Hurrah Baby
          resolve(data)
        })
        .catch((err) => {
          // Debugger
          console.log(err)
          // Error PopUp
          this.snack_pop_up.showSnackBar(err.error)
          // Rejection Baby
          reject(err)
        })
    })

  }
}
