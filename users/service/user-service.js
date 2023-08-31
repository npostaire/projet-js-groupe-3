class UserService {
  constructor(user) {
    this.user = user;
  }

  getName() {
    return this.user.name;
  }

  getCity() {
    return this.user.adress.city;
  }
}
