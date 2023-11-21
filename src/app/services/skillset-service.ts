import { Injectable, Injector } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from './base-service';

@Injectable({
    providedIn: 'root'
})
export class SkillSetService extends BaseService {
    prefix: string = 'SkillSet';

    constructor(public override injector: Injector) {
        super(injector);
    }
 

    getSkillSet(): Observable<any> {
        return this.httpClient.get<any[]>(`${environment.apiUrl}/${this.prefix}`);
    }
}
