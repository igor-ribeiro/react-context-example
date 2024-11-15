import { createContext, useContext } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
}

// Here we create the context with the initial value.
const UserContext = createContext<User | null>(null);

// Hook that first validate that the context is valid.
function useUser() {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error('Missing user')
  }
  return user;
}

function App() {
  const user = {
    id: 1,
    name: 'Lucas Abreu',
    email: 'lucas.abreu@galleysolutions.co',
  }

  return (
    // Here is where we pass the value to the context, any componenent rendered
    // inside this can access the context value.
    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  )
}


function UserProfile() {
  // Using the context value with the validation.
  const user = useUser();

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )
}

export default App
