import { useState, useMemo } from 'react';
import { sort } from 'lodash';

import { USERS_MOCKS } from 'users_mocks';

const UsersList = () => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [users, setUsers] = useState(USERS_MOCKS);

  const sortedUsers = useMemo(
    () => sort(users, 'name', sortOrder),
    [sortOrder, users]
  );

  return (
    <ul>
      <button onClick={() => setSortOrder('asc')}>Asc</button>
      <button onClick={() => setSortOrder('desc')}>Desc</button>
      {sortedUsers.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
