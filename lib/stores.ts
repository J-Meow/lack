import { APIAccessInfo, APIAccessMode } from "./APIAccessInfo"

export const apiAccessInfo: Stateful<APIAccessInfo> = $store(
    {
        mode: APIAccessMode.None,
    },
    { ident: "api-access-info", backing: "localstorage", autosave: "auto" },
)
