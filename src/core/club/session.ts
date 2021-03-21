import IPlayer from '../user/player';
import Club from './club';
import Game from '../game/game'


class Session {
  session_players : IPlayer[];
  session_games : Game[];
  current_game : Game:

  new_game(): void {
    const game_stakes = new GameStakes()


  }

  list_players(): void {
    this.session_players.forEach(element => {
      console.log(`player name : ${element.name} id : ${element.id}`)
    });
  }


  constructor(){
    this.session_players = Array<IPlayer>();
    this.session_players.push({
      "name": "wilson",
      "id": 1
    });
    this.list_players();
  }

}

export default Session;