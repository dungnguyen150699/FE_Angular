import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { from, map, Observable, of } from 'rxjs';
import { ACCESS_TOKEN } from 'src/utils/constant';
import { User } from 'src/utils/types';
import { CategoryDTO } from '../model/CategoryDTO';
import { NavModulService } from './nav-modul.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav-modul.component.html',
  styleUrls: ['./nav-modul.component.css']
})
export class NavModulModuleComponent implements OnInit {
  categorys: CategoryDTO[] = new Array();

  constructor(
    public navModulService:NavModulService,
    private toastr:ToastrService,
    private route:ActivatedRoute,
    private translateService: TranslateService
    ) { 
  }

  selectLanguage = (localize: string) => {
    this.translateService.use(localize);
  }

  ngOnInit(): void {
    if(localStorage.getItem(ACCESS_TOKEN)){
      this.navModulService
      .searchAllCategory()
      .subscribe(
        {
          next : (res: any) =>{
            this.categorys.push(...res.items);
            console.log("res",res,this.categorys);
          },
          error : (err:any) =>{
            console.log("error", err);
            this.toastr.error("Fail",err.error.message,{
            timeOut:5000 });
          }
        }).unsubscribe;
    }else{
      const observer = {
        next: (value:any) => console.log(value),
        error: (err:any) => console.error(err),
        complete: () => console.log('completed'),
      };

      const users:User[] = [
        {
          id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662',
          username: 'tiepphan',
          firstname: 'tiep',
          lastname: 'phan',
        },
        {
          id: '34784716-019b-4868-86cd-02287e49c2d3',
          username: 'nartc',
          firstname: 'chau',
          lastname: 'tran',
        },
      ];
  
      from(users)
        .pipe(
          map((user:any) => {
            return {
              ...user,
              fullname: `${user.firstname} ${user.lastname}`,
            };
          })
        )
        .subscribe(observer);
    }
  }
 

}
