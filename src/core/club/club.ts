import Session from './session';

class Club {
  sessions : Session[];

  constructor(){
    this.sessions = Array<Session>();
    console.log("club created");
  }
}

export default Club;