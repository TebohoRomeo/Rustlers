import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BusinessService } from '../services/business.service';

@Component({
  selector: 'app-business-detail',
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.css']
})
export class BusinessDetailComponent implements OnInit {
id: number = 0;
business: any = null;
  constructor(private route: ActivatedRoute, private busService: BusinessService,
              private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.route.paramMap
    .subscribe(params => {
      this.id = parseInt(params.get('id'));
      this.getDetails(this.id);
    })
  }

  getDetails(id: number){
    this.busService.getBusinessDetails(id)
    .then(res => {
      this.spinner.hide();
      this.business = res.data;
      console.log(this.business);
    })
  }

  goBackToList(){
    this.router.navigateByUrl('/bizdir');
  }

}
