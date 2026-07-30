namespace UserModule {
  export interface User {
    id: number;
    name: string;
  }
}

class User {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

// interface User {
//   id: number;
//   name: string;
// }
export = User;