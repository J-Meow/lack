import { APIAccessMode } from "../../lib/APIAccessInfo"
import { apiAccessInfo } from "../../lib/stores"

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
                    disabled
                    on:click={() => {
                        alert(
                            "Sorry, this doesn't work yet. Please use an extension instead.",
                        )
                    }}
                >
                    Coming Soon
                </button>
                Forwarding server (send requests to a different server that
                forwards them to Slack's API to get around blocking, only use
                servers you trust)
            </div>
            <div>
                <button
                    on:click={() => {
                        apiAccessInfo.mode = APIAccessMode.Extension
                        location.reload()
                        // If you are not me and you're reading this and might know how to get this to update without reloading, please consider opening a PR. If you don't want to that's fine though.
                        // If you are future me, past me says hello and is very confused about why this happens.
                    }}
                >
                    Use
                </button>
                Browser Extension (removes Slack's system to block Lack from
                accessing its API so no server is necessary)
            </div>
        </div>
    )
}
