export interface ICharacterInfo {
  count: number;
  pages: number;
  next: string;
  prev: undefined; //??
}

export interface ICharacterLocation {
  name: string;
  url: string;
}

export interface ICharacterOrigin {
  name: string;
  url: string;
}

export interface CharacterEpisode {}

export interface ICharacterResult {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string; //??
  gender: string;
  origin: ICharacterOrigin;
  location: ICharacterLocation;
  img: string; //is URL
}

// export interface CharacterResultAll{
//   results=ICharacterResult[];
// }
