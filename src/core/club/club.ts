import iPlayer from '../user/player';
import Session from './session';

class Club {
  sessions : Session[];
  club_members : iPlayer[];
  


  constructor() {
    this.sessions = Array<Session>();
    this.club_members = Array<ClubMember>();
    console.log("club created");
  }
}

export default Club;