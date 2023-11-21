import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { UserModel } from 'src/app/models/user-model';
import { SkillSetService } from 'src/app/services/skillset-service';
import { UserService } from 'src/app/services/user-service';
import { userMeta } from '../user-meta';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  userMeta = userMeta
  userModel = new UserModel();
  userId: number = 0;
  constructor(public skillSetService: SkillSetService, public userService: UserService, private route: ActivatedRoute, public router: Router) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userId = Number(id);
      this.getUserById();
    }
    this.getSkillSet();
  }
  getUserById() {
    this.userService.getUserById(this.userId).subscribe((result) => {
      this.userModel = this.getUserData(result.data);
    });
  }
  getUserData(data: UserModel) {
    debugger
    data.userSkillSets = data?.userSkillSets?.map((set) => {
      return { SkillSetsId: set.skillSetsId, Name: set?.skillSets?.name }
    })
    return data;
  }
  getSkillSet() {
    this.skillSetService.getSkillSet().subscribe((result) => {
      this.userMeta[4].data = this.setSkillData(result.data);
    })
  }
  setSkillData(data: any[]) {
    return data.map(x => {
      return { SkillSetsId: x.id, Name: x.name };
    })
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  navigateToList(){
    this.router.navigate(['/']);
  }
  submit() {
    if(this.userId)
    {
      this.userService.update(this.userModel).subscribe((result) => {
        this.navigateToList();
      })
    }else{
      this.userService.insert(this.userModel).subscribe((result) => {
        this.navigateToList();
      })
    }
   
  }

}
