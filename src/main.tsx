import "dreamland"
const App: Component = function () {
    return <div>Hello world</div>
}

window.addEventListener("load", () => {
    document.body.appendChild(<App />)
})
