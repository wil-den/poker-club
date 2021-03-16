import IPlayer from '../player/player';

class Session {
  session_players : IPlayer[];

  constructor(){
    this.session_players = Array<IPlayer>();
  }

}

export default Session;