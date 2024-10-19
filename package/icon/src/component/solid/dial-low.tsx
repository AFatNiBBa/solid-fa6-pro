
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dial-low` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dial-low?s=solid dial-low}
 * @preview ![dial-low](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggNjRDMzA1LjY3NCA2NCAzMjAgNDkuNjc0IDMyMCAzMlMzMDUuNjc0IDAgMjg4IDBDMjcwLjMyOCAwIDI1NiAxNC4zMjYgMjU2IDMyUzI3MC4zMjggNjQgMjg4IDY0Wk0zMiAyNTZDMTQuMzI2IDI1NiAwIDI3MC4zMjggMCAyODhDMCAzMDUuNjc0IDE0LjMyNiAzMjAgMzIgMzIwUzY0IDMwNS42NzQgNjQgMjg4QzY0IDI3MC4zMjggNDkuNjc0IDI1NiAzMiAyNTZaTTU0NCAyNTZDNTI2LjMyNiAyNTYgNTEyIDI3MC4zMjggNTEyIDI4OEM1MTIgMzA1LjY3NCA1MjYuMzI2IDMyMCA1NDQgMzIwUzU3NiAzMDUuNjc0IDU3NiAyODhDNTc2IDI3MC4zMjggNTYxLjY3NCAyNTYgNTQ0IDI1NlpNNDQ2LjM5MyA4NC4zNTRDNDMzLjg5NiA5Ni44NSA0MzMuODk2IDExNy4xMTEgNDQ2LjM5MyAxMjkuNjA3QzQ1OC44OTEgMTQyLjEwNSA0NzkuMTUyIDE0Mi4xMDUgNDkxLjY0OCAxMjkuNjA3QzUwNC4xNDUgMTE3LjExMSA1MDQuMTQ1IDk2Ljg1IDQ5MS42NDggODQuMzU0UzQ1OC44OTEgNzEuODU3IDQ0Ni4zOTMgODQuMzU0Wk04NC4zNTQgNDQ2LjM5M0M3MS44NTcgNDU4Ljg5MSA3MS44NTcgNDc5LjE1IDg0LjM1NCA0OTEuNjQ4Qzk2Ljg1IDUwNC4xNDUgMTE3LjExMSA1MDQuMTQ1IDEyOS42MDkgNDkxLjY0OEMxNDIuMTA1IDQ3OS4xNSAxNDIuMTA1IDQ1OC44OTEgMTI5LjYwOSA0NDYuMzkzQzExNy4xMTEgNDMzLjg5NiA5Ni44NSA0MzMuODk2IDg0LjM1NCA0NDYuMzkzWk00NDYuMzkzIDQ0Ni4zOTNDNDMzLjg5NiA0NTguODkxIDQzMy44OTYgNDc5LjE1IDQ0Ni4zOTMgNDkxLjY0OEM0NTguODkxIDUwNC4xNDUgNDc5LjE1MiA1MDQuMTQ1IDQ5MS42NDggNDkxLjY0OEM1MDQuMTQ1IDQ3OS4xNSA1MDQuMTQ1IDQ1OC44OTEgNDkxLjY0OCA0NDYuMzkzQzQ3OS4xNTIgNDMzLjg5NiA0NTguODkxIDQzMy44OTYgNDQ2LjM5MyA0NDYuMzkzWk0xMjkuNjA5IDEyOS42MDdDMTQyLjEwNSAxMTcuMTExIDE0Mi4xMDUgOTYuODUgMTI5LjYwOSA4NC4zNTRDMTE3LjExMSA3MS44NTcgOTYuODUgNzEuODU3IDg0LjM1NCA4NC4zNTRTNzEuODU3IDExNy4xMTEgODQuMzU0IDEyOS42MDdDOTYuODUgMTQyLjEwNSAxMTcuMTExIDE0Mi4xMDUgMTI5LjYwOSAxMjkuNjA3Wk00MDEuMTM4IDE3NC44NjNDMzM4LjY1NCAxMTIuMzc5IDIzNy4zNDggMTEyLjM3OSAxNzQuODY0IDE3NC44NjNDMTQ3LjcxMSAyMDIuMDE2IDEzMy4wODggMjM2LjU1OSAxMjkuNTMzIDI3Mi4wMDNIMjg4QzI5Ni44MzggMjcyLjAwMyAzMDMuOTk4IDI3OS4xNjIgMzAzLjk5OCAyODguMDAxUzI5Ni44MzggMzAzLjk5OSAyODggMzAzLjk5OUgxMjkuNTMzQzEzMy4wODcgMzM5LjQ0MiAxNDcuNzA5IDM3My45ODUgMTc0Ljg2MyA0MDEuMTM4QzIzNy4zNDggNDYzLjYyMyAzMzguNjU0IDQ2My42MjMgNDAxLjEzOSA0MDEuMTM4QzQ2My42MjMgMzM4LjY1NCA0NjMuNjIzIDIzNy4zNDggNDAxLjEzOCAxNzQuODYzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DialLow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M288 64C305.674 64 320 49.674 320 32S305.674 0 288 0C270.328 0 256 14.326 256 32S270.328 64 288 64ZM32 256C14.326 256 0 270.328 0 288C0 305.674 14.326 320 32 320S64 305.674 64 288C64 270.328 49.674 256 32 256ZM544 256C526.326 256 512 270.328 512 288C512 305.674 526.326 320 544 320S576 305.674 576 288C576 270.328 561.674 256 544 256ZM446.393 84.354C433.896 96.85 433.896 117.111 446.393 129.607C458.891 142.105 479.152 142.105 491.648 129.607C504.145 117.111 504.145 96.85 491.648 84.354S458.891 71.857 446.393 84.354ZM84.354 446.393C71.857 458.891 71.857 479.15 84.354 491.648C96.85 504.145 117.111 504.145 129.609 491.648C142.105 479.15 142.105 458.891 129.609 446.393C117.111 433.896 96.85 433.896 84.354 446.393ZM446.393 446.393C433.896 458.891 433.896 479.15 446.393 491.648C458.891 504.145 479.152 504.145 491.648 491.648C504.145 479.15 504.145 458.891 491.648 446.393C479.152 433.896 458.891 433.896 446.393 446.393ZM129.609 129.607C142.105 117.111 142.105 96.85 129.609 84.354C117.111 71.857 96.85 71.857 84.354 84.354S71.857 117.111 84.354 129.607C96.85 142.105 117.111 142.105 129.609 129.607ZM401.138 174.863C338.654 112.379 237.348 112.379 174.864 174.863C147.711 202.016 133.088 236.559 129.533 272.003H288C296.838 272.003 303.998 279.162 303.998 288.001S296.838 303.999 288 303.999H129.533C133.087 339.442 147.709 373.985 174.863 401.138C237.348 463.623 338.654 463.623 401.139 401.138C463.623 338.654 463.623 237.348 401.138 174.863Z" />
        </Icon>
    </>
}