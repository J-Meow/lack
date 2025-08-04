import "dreamland"
import { Landing } from "./pages/landing.tsx"
import { LogIn } from "./pages/logIn.tsx"
import { APIAccessPrompt } from "./components/apiaccessprompt.tsx"
const path = location.pathname
enum APIAccessMode {
    None = 0,
    CORSProxy,
    Extension,
}
let apiAccessInfo: Stateful<{ mode: APIAccessMode }> = $store(
    {
        mode: APIAccessMode.None,
    },
    { ident: "api-access-info", backing: "localstorage", autosave: "auto" },
)
const App: Component = function () {
    return (
        <div>
            {$if(
                path == "/",
                <Landing />,
                // @ts-expect-error because idk how to fix it lol
                <>
                    {$if(
                        apiAccessInfo.mode == APIAccessMode.None,
                        <APIAccessPrompt />,
                        // @ts-expect-error because idk how to fix it lol
                        <>{$if(path == "/login", <LogIn />)}</>,
                    )}
                </>,
            )}
        </div>
    )
}

window.addEventListener("load", () => {
    document.body.appendChild(<App />)
})
