import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usersSchema } from '../constants/constant';
import { SkillSetService } from '../services/skillset-service';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public schema: any = usersSchema;
  pageNo: number = 1;
  pageSize: number = 1;
  totalCount: number = 0;
  public data: any = []
  constructor(public uerService: UserService, public router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }
  handleEdit(data: any) {
    this.router.navigate(['/edit', data?.id]);
  }
  addUser() {
    this.router.navigate(['/add']);
  }

  getUsers() {
    this.uerService.getUsersPaginated(this.pageNo, this.pageSize).subscribe((result) => {
      this.data = result.data;
      
      this.totalCount = result.totalRecords;
      this.pageNo = result.pageNumber;
      this.pageSize = result.pageSize;
    })
  }
  handleRemove(user: any) {
    console.log(user)
    this.uerService.remove(user?.id).subscribe((result) => {
      this.getUsers();
    })
  }

  pageChange(page:number)
  {
    this.pageNo= page;
    this.getUsers();
  }
}
