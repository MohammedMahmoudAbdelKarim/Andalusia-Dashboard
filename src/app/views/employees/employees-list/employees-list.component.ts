import { Component, OnInit } from "@angular/core";
import { AnimationOptions } from "ngx-lottie";
import Swal from "sweetalert2";

@Component({
  selector: "app-employees-list",
  templateUrl: "./employees-list.component.html",
})
export class EmployeesListComponent implements OnInit {
  constructor() {}

  value: any = "";

  options: AnimationOptions = {
    path: "../../../../assets/animations/empty.json",
    loop: true,
  };

  clients: any = [
    // {
    //   name: "David James",
    //   city: "United States",
    //   mobile: "Mobile : 871.567.4877",
    //   img: "../../../../assets/imgs/c1.png",
    // },
    // {
    //   name: "Bessie Berry",
    //   city: "United States",
    //   mobile: "Mobile : 871.567.4877",
    //   img: "../../../../assets/imgs/c2.png",
    // },
    // {
    //   name: "Andrey Prokopenko",
    //   city: "United States",
    //   mobile: "Mobile : 871.567.4877",
    //   img: "../../../../assets/imgs/c3.png",
    // },
    // {
    //   name: "Valentin Salmon",
    //   city: "United States",
    //   mobile: "Mobile : 871.567.4877",
    //   img: "../../../../assets/imgs/c4.png",
    // },
    // {
    //   name: "Tony Stark",
    //   city: "United States",
    //   mobile: "Mobile : 871.567.4877",
    //   img: "../../../../assets/imgs/c5.png",
    // },
    // {
    //   name: "Gleb Kuznetsov",
    //   city: "United States",
    //   mobile: "Mobile : 871.567.4877",
    //   img: "../../../../assets/imgs/c6.png",
    // },
    // {
    //   name: "Nick Herasimenka",
    //   city: "United States",
    //   mobile: "Mobile : 871.567.4877",
    //   img: "../../../../assets/imgs/c7.png",
    // },
    // {
    //   name: "Miro Kirov",
    //   city: "United States",
    //   mobile: "Mobile : 871.567.4877",
    //   img: "../../../../assets/imgs/c8.png",
    // },
  ];

  clinetsArray: any = [];

  searchResult: boolean = true;

  p: number = 1;

  ngOnInit() {
    this.clinetsArray = this.clients;
    console.log(this.clinetsArray);
  }

  // Remove Client
  removeClient(i) {
    Swal.fire({
      title: "Are you sure you want to delete this ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#A1A0AE",
      cancelButtonColor: "#9290E2",
      confirmButtonText: "Delete",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "", "success");
        this.clients.splice(i, 1);
      }
    });
  }

  // Clear Value
  clearValue() {
    this.value = "";
    this.clients = this.clinetsArray;
  }

  // Search Client
  clientSearch(value) {
    let clientsArray = [];
    if (value == undefined || value == "") {
      this.clients = this.clinetsArray;
    } else {
      clientsArray = this.clients.filter((client) => {
        return client.name.toLowerCase().includes(value.toLowerCase());
      });
      this.clients = clientsArray;
      console.log(this.clients);
    }
  }
}
