import iPlayer from "../user/player";

interface iHand {
  pot_size : number;
  blind : number;
  deal():void;
  play_turn(player : iPlayer): void;
  
}

interface iTable {
  seats : iSeat[];
  current_dealer : iSeat;
  active_seats_in_order(): iSeat[];
  next_active_seat(): iSeat;
  
}

interface iPokerTable  extends iTable {
  small_blind : iSeat;
  big_blind : iSeat;
  dealer : iSeat;
}

interface iSeat {
  table_position : number;
  player_id : number;
  table_number : number;
}

interface iPoker {
  dealer_position : number;
  hands : iHand[];
  current_hand : iHand;
  players : iPlayer[];
  small_blind : number;
  big_blind : number;

  table : iTable

}



class Game {

  players : iPlayer [];
  current_game : iPoker| null;

  next_round(): void {}
  
  add_player(player : iPlayer){
    this.players.push(player);
  }

  list_players(){
    this.players.forEach((p) => {
      console.log(`Player : ${p.name} with Id : ${p.name}`);
    })
  }


  constructor(players : iPlayer[], ){
    this.players = new Array<iPlayer>();
    this.current_game = null;    
  }


 

}

export default Game;