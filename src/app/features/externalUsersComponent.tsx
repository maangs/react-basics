import { useGetExternalUsersQuery } from '../services/externalUserQuery';

export const ExternalUsersComponent = () => {
  const { data } = useGetExternalUsersQuery(undefined);

  return (
    <>
      <h1>RTK Query External users</h1>
      {data?.map((user) => (
        <>
          <p>Name: {user.name}</p>
          <p>UserName: {user.username}</p>
          <p>Email: {user.email}</p>
          <br />
        </>
      ))}
    </>
  );
};
