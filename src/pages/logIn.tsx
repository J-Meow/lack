import fetch from "../../lib/fetch"

export const LogIn: Component<{}, { captchaKey: string | undefined }> =
    function () {
        fetch("https://slack.com/api/auth.captcha")
            .then((res) => res.json())
            .then((json) => {
                if (json.ok) {
                    this.captchaKey = json.sitekey
                }
            })
        return (
            <div>
                <h1>Log In</h1>
                <form
                    on:submit={(ev: SubmitEvent) => {
                        ev.preventDefault()
                    }}
                >
                    <label for="login-email">Email</label>
                    <input type="email" required id="login-email" />
                    <label for="login-captcha-res">Captcha Response</label>
                    <input
                        type="text"
                        required
                        autocomplete="off"
                        spellcheck="false"
                        id="login-captcha-res"
                    />
                    <details>
                        <summary>
                            Captcha Response?! What does that mean?
                        </summary>
                        <p>
                            Slack uses reCAPTCHA to make sure robots can't sign
                            in with their API. Their reCAPTCHA only works on
                            their website, slack.com, so we need to use a
                            bookmarklet or a similar way to run JavaScript code
                            on the website to get a key proving you did the
                            Captcha. Here's some JavaScript you can run somehow
                            on Slack's website to get this value:
                        </p>
                        <code>[coming soon]</code>
                    </details>
                    <input type="submit" value="Continue" />
                </form>
            </div>
        )
    }
