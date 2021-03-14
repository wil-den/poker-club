import iPlayer from "../player/player";

interface iPoker {

}

class Game {

  players : iPlayer [];
  current_game : iPoker;
  
  constructor(){
    this.players = new Array<iPlayer>();
    this.current_game = {};
  }


  add_player(player : iPlayer){
    this.players.push(player);
  }

  list_players(){
    this.players.forEach((p) => {
      console.log(`Player : ${p.name} with Id : ${p.name}`);
    })
  }



}