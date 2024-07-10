class User {
  constructor(id, name){
    this.id = id;
    this.name = name;
  }

  getUserInfo(){
    return '${this.name} ${this.id}';
  }

}
export default User;