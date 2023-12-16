import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-4 text-center text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-green-500">
          If You Want Mythic Pizza eat Damirli Pizza.
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue Ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
