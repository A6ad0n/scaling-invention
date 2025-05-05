import { useUserStore } from '../store/userStore.ts';
import { UserRow } from './UserRow.tsx';

export const UserList = () => {
  const users = useUserStore((state) => state.users);

  return (
    <table className="w-full">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2">Username</th>
          <th className="px-4 py-2">Address</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};
