import { useGetTestUsersQuery } from '../services/rtkTestQuery';

export const UserTestComponent = () => {
  const { data } = useGetTestUsersQuery(undefined);
  console.log('DATA: ', data);
  return (
    <>
      <h1>RTK Query Express</h1>
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
