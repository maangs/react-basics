import { useGetLocalUsersQuery } from '../services/localUserQuery';

export const LocalUsersComponent = () => {
  const { data } = useGetLocalUsersQuery(undefined);
  return (
    <>
      <h1>RTK Query Local users</h1>
      {JSON.stringify(data)}
      {data?.map((user) => (
        <>
          <p>Name: {user.name}</p>
          <br />
        </>
      ))}
    </>
  );
};
