class Profile {
  constructor() {
    (this.clientId = ""), (this.clientSecret = "");
  }

  async getProfile(username) {
    const profile = await fetch(
      `https://jsonplaceholder.typicode.com/users?username=${username}`
    ).then((res) => res.json());

     const todos = await fetch(
       `https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`
     ).then((res) => res.json());
    return {
      profile,
      todos,
    };
  }
}
