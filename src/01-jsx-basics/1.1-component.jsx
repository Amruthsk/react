//befor react
function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Vikram")); // Hello, Vikram

//React Component as a Function
function Greet() {
  return <h1>Hello, React!</h1>;
}

<Greet />;

//Accepting Props (Dynamic Data)-Props = Inputs to the component, like parameters to a function.
function Greet(props) {
  return <h1>Hello, {props.name}!</h1>;
}

<Greet name="Vikram" />;

<h1>Hello, Vikram!</h1>;

// / Destructuring Props (Cleaner)-Same usage, cleaner syntax. Props are now accessed directly

function Greet({ name }) {
  return <h1>Hello, {name}!</h1>;
}

//with logic
function Greet({ name }) {
  if (!name) return <p>Please log in.</p>;
  return <h1>Welcome back, {name}!</h1>;
}

//add styling
function Greet({ name }) {
  return (
    <h1 className="text-2xl font-bold text-blue-600">
      Hello, {name || "Guest"}!
    </h1>
  );
}

//Reusable UI component
function UserCard({ name, email }) {
  return (
    <div className="p-4 shadow rounded bg-white">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">{email}</p>
    </div>
  );
}

<UserCard name="Vikram" email="vikram@example.com" />;

//with list
function UserList({ users }) {
  return (
    <div className="space-y-4">
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
}
