import { useState, useMemo } from 'react';
// 💢 There is a bug inside "sort" from "lodash".
import { sort } from 'lodash';

import { USERS_MOCKS } from 'users_mocks';

interface UserListProps {
  sortFn?: <T>(arr: T[], key: keyof T, order: 'asc' | 'desc') => T[];
}

const UsersList = ({ sortFn = sort }: UserListProps) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [users, setUsers] = useState(USERS_MOCKS);

  const sortedUsers = useMemo(
    () => sortFn(users, 'name', sortOrder),
    [sortOrder, users]
  );
