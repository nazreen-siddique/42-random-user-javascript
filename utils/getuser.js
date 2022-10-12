const url = "https://randomuser.me/api/";
const getUser = async() => {
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data);
  //   destructuring the array and object
  const person = data.results[0];
  // console.log(person);
  const { phone, email } = person;
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const { age } = person.dob;
  const {
    street: { number, name },
  } = person.location;
  return {
    image,
    phone,
    email,
    password,
    age,
    street: `${number} ${name}`,
    name:`${first} ${last}`,
  };
};
export default getUser;
