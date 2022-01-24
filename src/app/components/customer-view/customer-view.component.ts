import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Customer } from 'src/app/interfaces/Customer';
import { HttpService } from 'src/app/services/http.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  public CUSTOMER_DATA: any = []
  tableLoaded = false

  displayedColumns: Customer | any = ['name', 'email', 'phone', 'address', 'detail'];
  dataSource = new MatTableDataSource<any>(this.CUSTOMER_DATA);
  @ViewChild('TABLE') table: ElementRef | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;


  constructor(
    private http: HttpService,
    private route_: Router,
    public dialog: MatDialog
  ) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.http.get('api/customer/')
      .then((data: any) => {
        console.log(data);
        this.CUSTOMER_DATA = data;
        this.dataSource = new MatTableDataSource<Customer>(data);
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort;
        this.tableLoaded = true;
      })
      .catch((error) => {
        console.log(error);
      })

  }

  specificCustomerDetails(index: number) {
    console.log(this.CUSTOMER_DATA[index])
    this.dialog.open(CustomerDetailComponent, {
      width: '450px',
      data: this.CUSTOMER_DATA[index],
    });

    // this.route_.navigate([
    //   `./details-customer`, { "customer": JSON.stringify(this.CUSTOMER_DATA[index]) }
    // ]);
  }
}


