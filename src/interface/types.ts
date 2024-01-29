export interface User {
    id: string;
    name: string;
    avatar:string
  }
  
  export interface AppState {
    users: User[];
    error: string | null;
  }
  
  export interface RootState {
    app: AppState;
  }
  