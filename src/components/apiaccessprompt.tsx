export const APIAccessPrompt: Component = function () {
    return (
        <div>
            <h1>Before you use Lack...</h1>
            <p>You need to decide how to connect to Slack's internal API.</p>
            <p>
                Slack doesn't allow other websites to directly access its API,
                so in order to get around that restriction, we need to use one
                of two options.
            </p>
            <div>
                <button
                    on:click={() => {
                        alert(
                            "Sorry, this doesn't work yet. Please use an extension instead.",
                        )
                    }}
                >
                    Use
                </button>
                <label for="api-access-forwarding-server">
                    Forwarding server (send requests to a different server that
                    forwards them to Slack's API to get around blocking, only
                    use servers you trust)
                </label>
            </div>
            <div>
                <button
                    on:click={() => {
                        alert("WIP")
                    }}
                >
                    Use
                </button>
                <label for="api-access-extension">
                    Browser Extension (removes Slack's system to block Lack from
                    accessing its API so no server is necessary)
                </label>
            </div>
        </div>
    )
}
