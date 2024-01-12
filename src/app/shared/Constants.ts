import { environment } from "../../environments/environment";

export class ConstantsApp {
  public static readonly BASE_URL = environment.apiUrl;
  public static readonly LOGIN = ConstantsApp.BASE_URL + '/login';
  public static readonly POSTS = ConstantsApp.BASE_URL + '/posts';
}
