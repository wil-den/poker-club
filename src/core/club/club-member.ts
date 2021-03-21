interface iClubMember {
  id : number;
  name : string;
}

class ClubMember implements iClubMember {
  id : number;
  name: string;

  constructor(id : number, name : string) {
    this.id = id;
    this.name = name;
  }
}