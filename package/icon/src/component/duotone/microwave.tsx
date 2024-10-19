
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `microwave` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/microwave?s=duotone microwave}
 * @preview ![microwave](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQxNiAzNTJIOTZWMTI4SDQxNlYzNTJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTUyOCAzMkg0OEMyMS41IDMyIDAgNTMuNSAwIDgwVjQwMEMwIDQyNi41IDIxLjUgNDQ4IDQ4IDQ0OEw3MiA0ODBIMTIwTDE0NCA0NDhINDMyTDQ1NiA0ODBINTA0TDUyOCA0NDhDNTU0LjUgNDQ4IDU3NiA0MjYuNSA1NzYgNDAwVjgwQzU3NiA1My41IDU1NC41IDMyIDUyOCAzMlpNNDE2IDM1Mkg5NlYxMjhINDE2VjM1MlpNNDk2IDI2NEM0ODIuNzUgMjY0IDQ3MiAyNTMuMjUgNDcyIDI0MFM0ODIuNzUgMjE2IDQ5NiAyMTZTNTIwIDIyNi43NSA1MjAgMjQwUzUwOS4yNSAyNjQgNDk2IDI2NFpNNDk2IDE2OEM0ODIuNzUgMTY4IDQ3MiAxNTcuMjUgNDcyIDE0NFM0ODIuNzUgMTIwIDQ5NiAxMjBTNTIwIDEzMC43NSA1MjAgMTQ0UzUwOS4yNSAxNjggNDk2IDE2OFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Microwave(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M416 352H96V128H416V352Z" />
            <path d="M528 32H48C21.5 32 0 53.5 0 80V400C0 426.5 21.5 448 48 448L72 480H120L144 448H432L456 480H504L528 448C554.5 448 576 426.5 576 400V80C576 53.5 554.5 32 528 32ZM416 352H96V128H416V352ZM496 264C482.75 264 472 253.25 472 240S482.75 216 496 216S520 226.75 520 240S509.25 264 496 264ZM496 168C482.75 168 472 157.25 472 144S482.75 120 496 120S520 130.75 520 144S509.25 168 496 168Z" />
        </Icon>
    </>
}