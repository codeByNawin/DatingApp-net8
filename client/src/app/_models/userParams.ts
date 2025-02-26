import { User } from "./user";

export class UserParams {
    set(arg0: UserParams) {
      throw new Error('Method not implemented.');
    }
    gender: string;
    minAge = 18;
    maxAge = 99;
    pageNumber = 1;
    pageSize = 5;
    orderBy = 'lastActive';

    constructor(user: User | null) {
        this.gender = user?.gender === 'female' ? 'male' : 'female'
    }
}