import { User } from '@mytypes/user';
import { useUserStore } from '../store/userStore';
import '../index.css'

export const UserRow = ({ user }: { user: User }) => {
  const deletingUserId = useUserStore(state => state.deletingUserId);
  const addingUserId = useUserStore(state => state.addingUserId);
  const setDeletingUserId = useUserStore(state => state.setDeletingUserId);
  const deleteUser = useUserStore(state => state.deleteUser);
  const selectUser = useUserStore(state => state.selectUser); 

  const handleDelete = () => {
    setDeletingUserId(user.id);
    setTimeout(() => {
      deleteUser(user.id);
      setDeletingUserId(null);
    }, 500);
  };

  return (
   <tr
      onClick={() => selectUser(user)}
      className={`transition-all duration-300 transform hover:scale-[1.02] cursor-pointer ${
        deletingUserId === user.id 
        ? 'opacity-0 scale-[0.98]' 
        : addingUserId === user.id 
          ? 'animate-fadeInScale'
          : ''
      }`}
    >
      <td className="px-4 py-2">{user.username}</td>
      <td className="px-4 py-2">{user.address}</td>
      <td className="px-4 py-2">{user.email}</td>
      <td className="px-4 py-2 text-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDelete();
          }}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition hover:scale-105"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
