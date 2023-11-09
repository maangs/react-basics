import { useGetUsersQuery } from "../services/rtkQuery";

export const UserComponent = () => {
  const { data } = useGetUsersQuery(undefined);

  return (
    <>
      <h1>RTK Query</h1>
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
