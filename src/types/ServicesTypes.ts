export interface IService {
  transformRequest: ((data: any, headers: any) => any)[];
}
