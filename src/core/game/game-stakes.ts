interface iGameStakes {

  entry_fee:number;
  
  starting_chip_value : number;
  starting_blind : number;
  blind_interval : number;
  payout() : iPayout;
}

interface iPayout {

  get_payout_(number_of_players: number,
            game_position : number,
            game_stakes: number) : number;
}


class GameStakes implements iGameStakes {
  entry_fee : number;
}


export 
