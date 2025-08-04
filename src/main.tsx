import "dreamland"
import { Landing } from "./pages/landing.tsx"
import { LogIn } from "./pages/logIn.tsx"
import { APIAccessPrompt } from "./components/apiaccessprompt.tsx"
import { APIAccessMode } from "../lib/APIAccessInfo.ts"
import { apiAccessInfo } from "../lib/stores.ts"
const path = location.pathname
const App: Component = function () {
    return (
        <div>
            {$if(
                path == "/",
                <Landing />,
                // @ts-expect-error because idk how to fix it lol
                <>
                    {$if(
                        use(
                            apiAccessInfo,
                            (apiAccessInfo) =>
                                apiAccessInfo.mode == APIAccessMode.None,
                        ),
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
