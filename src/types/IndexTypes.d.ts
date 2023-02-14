export type { IInfo } from "./InfoTypes.d";

export type { ICharacter } from "./CharacterTypes";

export type { ILocation } from "./LocationTypes";

export { IEpisode } from "./EpisodeTypes";

export interface ICharactersResponse {
  results(results: any): unknown;
  characters: {
    info: IInfo;
    results: ICharacter[];
  };
}
export interface ILocationsResponse {
  locations: {
    info: IInfo;
    results: ILocation[];
  };
}

export interface IEpisodesResponse {
  episodes: {
    info: IInfo;
    results: IEpisode[];
  };
}

export interface ICharacterFullData extends ICharacter {
  origin: { name: string; url: string };
  location: { name: string; url: string };
  episode: { id: number; name: string };
  [];
}
