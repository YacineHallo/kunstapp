export interface ILocation {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: { id: number; name: string }[];
  url: string;
  created: string;
}
