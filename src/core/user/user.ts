interface iUser {
  name : string;
  email : string;
}

interface iRegistrant {
  name : string;
  email : string;
}

class User implements iUser {
  name : string;
  email : string;
  id : number;

  set_id(): number {
    return 0;
  }

  constructor(reg : iRegistrant){
    this.name = reg.name;
    this.email = reg.email;
    this.id = this.set_id();
  }
}


