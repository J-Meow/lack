export enum APIAccessMode {
    None = 0,
    CORSProxy,
    Extension,
}
export interface APIAccessInfo {
    mode: APIAccessMode
}
