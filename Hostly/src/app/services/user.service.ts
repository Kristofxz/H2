import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { lastValueFrom } from 'rxjs';
import { Order } from '../models/order.model';
import { User } from '../models/user.model';
import { HttpService } from './http.service';
import { OrderService } from './order.service';
import { SocketService } from './socket.service';
import { StayService } from './stay.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private httpService: HttpService,
    private stayService: StayService,
    private socketService: SocketService,
    public orderService: OrderService,
    public snackBar: MatSnackBar
  ) {
    const user = this.getUser();
    this._user$.next(user);
    if (user) {
      this.socketService.login(user._id);
      this.socketService.on(
        this.socketService.SOCKET_EMIT_ORDER_FOR_HOST,
        this.hostFunction
      );
      this.socketService.on(
        this.socketService.SOCKET_EMIT_ORDER_FOR_USER,
        this.userFunction
      );
    }
  }

  private USER_URL = 'user/';
  private STORAGE_KEY_LOGGEDIN_USER = 'user';
  private AUTH_URL = 'auth/';

  private _user$ = new BehaviorSubject<User | null>(null); // Felhasználói adatok streamje
  public user$ = this._user$.asObservable();

  hostFunction = this.updateHostMsg.bind(this);
  userFunction = this.updateUserMsg.bind(this);

  /**
   * Bejelentkezett felhasználó lekérése (sessionből).
   */
  public getUser(): User {
    return JSON.parse(
      sessionStorage.getItem(this.STORAGE_KEY_LOGGEDIN_USER) as string
    );
  }

  /**
   * Bejelentkezési metódus, amely a teljes felhasználói adatot (isAdmin-t is) eltárolja.
   */
  public async login(credentials: User) {
    try {
      const loggedInUser = await lastValueFrom(
        this.httpService.post(this.AUTH_URL + 'login', credentials)
      ) as User;

      if (loggedInUser) {
        this.saveLocalUser(loggedInUser);
        this.socketService.login(loggedInUser._id);
        this.socketService.on(
          this.socketService.SOCKET_EMIT_ORDER_FOR_HOST,
          this.hostFunction
        );
        this.socketService.on(
          this.socketService.SOCKET_EMIT_ORDER_FOR_USER,
          this.userFunction
        );
        this._user$.next(loggedInUser); // Felhasználói adatot frissítünk
      }

      return loggedInUser;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Regisztráció metódus, amely az új felhasználót alapértelmezetten `isAdmin: false` státusszal hozza létre.
   */
  public async signup(user: User) {
    try {
      const newUser = await lastValueFrom(
        this.httpService.post(this.AUTH_URL + 'signup', user)
      ) as User;
      return newUser;
    } catch (err) {
      console.error('Regisztrációs hiba:', err);
      throw err;
    }
  }
  


  /**
   * Üres felhasználói objektum.
   */
  public getEmptyUser() {
    return {
      username: '',
      fullname: '',
      password: '',
      imgUrl: '',
      userMsg: 0,
      hostMsg: 0,
      isAdmin: false, // Alapértelmezetten nem admin
    };
  }
  /**
 * Felhasználók lekérdezése a backendből.
 */
/**
 * Felhasználók lekérdezése a backendből.
 */
public async getAllUsers(): Promise<User[]> {
  try {
    const users = await lastValueFrom(
      this.httpService.get('user') // Backend végpont hívása
    ) as User[]; // A választ User[]-nek értelmezzük
    return users;
  } catch (err) {
    console.error('Hiba a felhasználók lekérdezése során:', err);
    throw err; // Hiba továbbdobása
  }
}

  /**
   * Felhasználói adat frissítése.
   */
  async update(user: User) {
    try {
      if (!user) return;
      const updatedUser = await lastValueFrom(
        this.httpService.put(this.USER_URL, user)
      ) as User;
      this.saveLocalUser(updatedUser);
      this._user$.next(updatedUser);
      return updatedUser;
    } catch (err) {
      throw err;
    }
  }

  async updateHostMsg(order: Order) {
    try {
      const user = this.getUser();
      user.hostMsg++;
      await this.update(user);
      const msg = `${order.buyer.fullname} invite your place`;
      this.snackBar.open(msg, 'Close', { duration: 3000 });
      this.orderService.loadOrders();
    } catch (err) {
      console.log('err:', err);
    }
  }

  async updateUserMsg(order: Order) {
    try {
      const user = this.getUser();
      user.userMsg++;
      await this.update(user);
      const msg = `${order.stay.name} update your vacation status`;
      this.snackBar.open(msg, 'Close', { duration: 3000 });
      this.orderService.loadOrders();
    } catch (err) {
      console.log('err:', err);
    }
  }

  /**
   * Kijelentkezés és session törlése.
   */
  public async logout() {
    try {
      await lastValueFrom(this.httpService.post(this.AUTH_URL + 'logout'));
      sessionStorage.clear();
      this.socketService.logout();
      this.socketService.off(
        this.socketService.SOCKET_EMIT_ORDER_FOR_HOST,
        this.hostFunction
      );
      this.socketService.off(
        this.socketService.SOCKET_EMIT_ORDER_FOR_USER,
        this.userFunction
      );
      this._user$.next(null);
      window.location.assign('/');
    } catch (err) {
      console.log('err:', err);
    }
  }

  /**
   * Bejelentkezett felhasználó adatok mentése a sessionStorage-ba.
   */
  private saveLocalUser(user: User) {
    sessionStorage.setItem(this.STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
    return user;
  }
}