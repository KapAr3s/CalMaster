const Users = [
  {
    id: 1,
    email: "nico@gmail.com",
    fornavn: "Nicolai",
    efternavn: "Christensen",
    password: "test1",
  },
  {
    id: 2,
    email: "psterner@gmail.com",
    fornavn: "Peter",
    efternavn: "Sterner",
    password: "test2",
  },
];

function CheckIfUserExistsInDatabase(email: string, password: string) {
  console.log("er vi her");
  //check om email og password ekisterer i Users...
  for (let index = 0; index < Users.length; index++) {
    const user = Users[index];
    console.log("User:", user.email, user.password);
    if (user.email === email && user.password === password) {
      return true;
    }
  }
  return false;
}

export default CheckIfUserExistsInDatabase;
