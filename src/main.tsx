import "dreamland"
import { Landing } from "./pages/landing.tsx"
const path = location.pathname
const App: Component = function () {
    return <div>{$if(path == "/", <Landing />)}</div>
}

window.addEventListener("load", () => {
    document.body.appendChild(<App />)
})
