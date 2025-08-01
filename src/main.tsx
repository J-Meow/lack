import "dreamland"
import { Landing } from "./pages/landing.tsx"
import { LogIn } from "./pages/logIn.tsx"
const path = location.pathname
const App: Component = function () {
    return (
        <div>
            {$if(path == "/", <Landing />)}
            {$if(path == "/login", <LogIn />)}
        </div>
    )
}

window.addEventListener("load", () => {
    document.body.appendChild(<App />)
})
