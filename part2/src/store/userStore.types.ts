import { User } from '@mytypes/user';

export interface UserState {
  users: User[];
  selectedUser: User | null;
  deletingUserId: string | null;
  addingUserId: string | null;
  addUser: (user: User) => void;
  deleteUser: (id: string) => void;
  selectUser: (user: User) => void;
  updateAddress: (id: string, newAddress: string) => void;
  clearSelectedUser: () => void;
  setDeletingUserId: (id: string | null) => void;
  setAddingUserId: (id: string | null) => void;
}
