import { Injectable, Injector } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user-model';
import { BaseService } from './base-service';

@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseService {
    prefix: string = 'User';

    constructor(public override injector: Injector) {
        super(injector);
    }
 

    getUsersPaginated(pageNo: number, pageSize: number): Observable<any> {
        return this.httpClient.get<any[]>(`${environment.apiUrl}/${this.prefix}?pageNumber=${pageNo === 0 ? 1 : pageNo}&pageSize=${pageSize < 1 ? 10 : pageSize}`);
    }


    insert(obj: UserModel): Observable<any> {
        return this.httpClient.post<UserModel[]>(`${environment.apiUrl}/${this.prefix}`, obj);
    }

    update(obj: UserModel): Observable<any> {
        return this.httpClient.put<UserModel[]>(`${environment.apiUrl}/${this.prefix}`, obj);
    }

    getUserById(id: number): Observable<any> {
        return this.httpClient.get<any[]>(`${environment.apiUrl}/${this.prefix}/${id}`);
    }
    remove(id: number): Observable<any> {
        return this.httpClient.delete<UserModel[]>(`${environment.apiUrl}/${this.prefix}/${id}`);
    }


}
