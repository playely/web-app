import { UserService } from "../../services/user.service";

export const userServiceMock: jasmine.SpyObj<UserService> = jasmine.createSpyObj('UserService', ['login', 'logout', 'userChange']);