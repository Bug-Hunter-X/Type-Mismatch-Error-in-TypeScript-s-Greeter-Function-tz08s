function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane Doe", "John Smith"];

user.forEach(name => {
    console.log(greeter(name));
});
//Alternative solution:
// function greeter(person: string[]): string {
//   return person.map(name => "Hello, " + name).join("\n");
// }
// console.log(greeter(user));