export interface IUser {
  name: string;
  email: string;
  phone: string;
}

export interface IUserUpdate {
  name: string;
  email: string;
  phone: string;
}

export interface IContact {
  name: string;
  email: string;
  phone: string;
}

export interface IAdm {
  name: string;
  email: string;
  password: string;
}

export interface IAdmLogin {
  email: string;
  password: string;
}
