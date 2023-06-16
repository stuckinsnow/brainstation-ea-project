import { useParams } from 'react-router-dom';

function UserProfile() {
  const users = [
    {
      id: 1,
      name: 'Neo',
    },
    {
      id: 2,
      name: 'Mina',
    },
    {
      id: 3,
      name: 'Luna',
    },
  ];

  // const { id } = useParams(); // using desctructuring
  // console.log(id);

  const paramsObj = useParams();
  console.log(paramsObj.id);
  console.log(paramsObj);

  if (paramsObj.id) {
    return (
      <div>
        <h2>User Profile Page</h2>
        {users
          .filter((user) => user.id === Number(paramsObj.id))
          .map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
      </div>
    );
  }

  return (
    <div>
      <h2>User Profile Page</h2>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default UserProfile;
