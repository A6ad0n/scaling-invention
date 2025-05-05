import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { User } from '@mytypes/user';
import { UserState } from './userStore.types';

export const useUserStore = create<UserState>() (
  devtools(
    immer((set) => ({
      users: [],
      selectedUser: null,
      deletingUserId: null,
      addingUserId: null,
      addUser: (user: User) =>
        set((state) => {
          state.users.push(user);
        }),
      deleteUser: (id: string) =>
        set((state) => {
          state.users = state.users.filter((u) => u.id !== id);
          if (state.selectedUser?.id === id) state.selectedUser = null;
        }),
      selectUser: (user: User) =>
        set(() => ({
          selectedUser: user,
        })),
      updateAddress: (id: string, newAddress: string) =>
        set((state) => {
          state.users = state.users.map((u) =>
            u.id === id ? { ...u, address: newAddress } : u
          );
          if (state.selectedUser?.id === id) {
            state.selectedUser.address = newAddress;
          }
        }),
      clearSelectedUser: () =>
        set(() => ({
          selectedUser: null,
        })),
      setDeletingUserId: (id: string | null) =>
        set(() => ({
          deletingUserId: id,
        })),
      setAddingUserId: (id: string | null) =>
        set(() => ({
          addingUserId: id,
        })),
    }))
  )
);