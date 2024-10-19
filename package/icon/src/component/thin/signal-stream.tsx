
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `signal-stream` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signal-stream?s=thin signal-stream}
 * @preview ![signal-stream](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggMjE2QzI2NS45MzggMjE2IDI0OCAyMzMuOTM3IDI0OCAyNTZTMjY1LjkzOCAyOTYgMjg4IDI5NlMzMjggMjc4LjA2MiAzMjggMjU2UzMxMC4wNjIgMjE2IDI4OCAyMTZaTTI4OCAyODBDMjc0Ljc2NiAyODAgMjY0IDI2OS4yMTkgMjY0IDI1NkMyNjQgMjQyLjc4MSAyNzQuNzY2IDIzMiAyODggMjMyUzMxMiAyNDIuNzgxIDMxMiAyNTZDMzEyIDI2OS4yMTkgMzAxLjIzNCAyODAgMjg4IDI4MFpNOTUuNjcyIDUyLjM0NEM5Mi41NDcgNDkuMjE5IDg3LjQ4NCA0OS4yMTkgODQuMzU5IDUyLjM0NEMyOS45NTMgMTA2Ljc1IDAgMTc5LjA2MiAwIDI1NlMyOS45NTMgNDA1LjI1IDg0LjM1OSA0NTkuNjU2Qzg1LjkyMiA0NjEuMjE5IDg3Ljk2OSA0NjIgOTAuMDE2IDQ2MlM5NC4xMDkgNDYxLjIxOSA5NS42NzIgNDU5LjY1NkM5OC43OTcgNDU2LjUzMSA5OC43OTcgNDUxLjQ2OSA5NS42NzIgNDQ4LjM0NEM0NC4yOTcgMzk2Ljk2OSAxNiAzMjguNjU2IDE2IDI1NlM0NC4yOTcgMTE1LjAzMSA5NS42NzIgNjMuNjU2Qzk4Ljc5NyA2MC41MzEgOTguNzk3IDU1LjQ2OSA5NS42NzIgNTIuMzQ0Wk00OTEuNjQxIDUyLjM0NEM0ODguNTE2IDQ5LjIxOSA0ODMuNDUzIDQ5LjIxOSA0ODAuMzI4IDUyLjM0NFM0NzcuMjAzIDYwLjUzMSA0ODAuMzI4IDYzLjY1NkM1MzEuNzAzIDExNS4wMzEgNTYwIDE4My4zNDQgNTYwIDI1NlM1MzEuNzAzIDM5Ni45NjkgNDgwLjMyOCA0NDguMzQ0QzQ3Ny4yMDMgNDUxLjQ2OSA0NzcuMjAzIDQ1Ni41MzEgNDgwLjMyOCA0NTkuNjU2QzQ4MS44OTEgNDYxLjIxOSA0ODMuOTM4IDQ2MiA0ODUuOTg0IDQ2MlM0OTAuMDc4IDQ2MS4yMTkgNDkxLjY0MSA0NTkuNjU2QzU0Ni4wNDcgNDA1LjI1IDU3NiAzMzIuOTM3IDU3NiAyNTZTNTQ2LjA0NyAxMDYuNzUgNDkxLjY0MSA1Mi4zNDRaTTE3NC44NTkgMTMxLjU2MkMxNzEuNzM0IDEyOC40MzcgMTY2LjY3MiAxMjguNDM3IDE2My41NDcgMTMxLjU2MkMxMzAuMjk3IDE2NC43ODEgMTEyIDIwOSAxMTIgMjU2UzEzMC4yOTcgMzQ3LjIxOSAxNjMuNTQ3IDM4MC40MzdDMTY1LjEwOSAzODIgMTY3LjE1NiAzODIuNzgxIDE2OS4yMDMgMzgyLjc4MVMxNzMuMjk3IDM4MiAxNzQuODU5IDM4MC40MzdDMTc3Ljk4NCAzNzcuMzEyIDE3Ny45ODQgMzcyLjI1IDE3NC44NTkgMzY5LjEyNUMxNDQuNjQxIDMzOC45MDYgMTI4IDI5OC43NSAxMjggMjU2UzE0NC42NDEgMTczLjA5NCAxNzQuODU5IDE0Mi44NzVDMTc3Ljk4NCAxMzkuNzUgMTc3Ljk4NCAxMzQuNjg3IDE3NC44NTkgMTMxLjU2MlpNNDAxLjE0MSAxMzEuNTYyQzM5OC4wMTYgMTM0LjY4NyAzOTguMDE2IDEzOS43NSA0MDEuMTQxIDE0Mi44NzVDNDMxLjM1OSAxNzMuMDk0IDQ0OCAyMTMuMjUgNDQ4IDI1NlM0MzEuMzU5IDMzOC45MDYgNDAxLjE0MSAzNjkuMTI1QzM5OC4wMTYgMzcyLjI1IDM5OC4wMTYgMzc3LjMxMiA0MDEuMTQxIDM4MC40MzdDNDAyLjcwMyAzODIgNDA0Ljc1IDM4Mi43ODEgNDA2Ljc5NyAzODIuNzgxUzQxMC44OTEgMzgyIDQxMi40NTMgMzgwLjQzN0M0NDUuNzAzIDM0Ny4yMTkgNDY0IDMwMyA0NjQgMjU2UzQ0NS43MDMgMTY0Ljc4MSA0MTIuNDUzIDEzMS41NjJDNDA5LjMyOCAxMjguNDM3IDQwNC4yNjYgMTI4LjQzNyA0MDEuMTQxIDEzMS41NjJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SignalStream(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M288 216C265.938 216 248 233.937 248 256S265.938 296 288 296S328 278.062 328 256S310.062 216 288 216ZM288 280C274.766 280 264 269.219 264 256C264 242.781 274.766 232 288 232S312 242.781 312 256C312 269.219 301.234 280 288 280ZM95.672 52.344C92.547 49.219 87.484 49.219 84.359 52.344C29.953 106.75 0 179.062 0 256S29.953 405.25 84.359 459.656C85.922 461.219 87.969 462 90.016 462S94.109 461.219 95.672 459.656C98.797 456.531 98.797 451.469 95.672 448.344C44.297 396.969 16 328.656 16 256S44.297 115.031 95.672 63.656C98.797 60.531 98.797 55.469 95.672 52.344ZM491.641 52.344C488.516 49.219 483.453 49.219 480.328 52.344S477.203 60.531 480.328 63.656C531.703 115.031 560 183.344 560 256S531.703 396.969 480.328 448.344C477.203 451.469 477.203 456.531 480.328 459.656C481.891 461.219 483.938 462 485.984 462S490.078 461.219 491.641 459.656C546.047 405.25 576 332.937 576 256S546.047 106.75 491.641 52.344ZM174.859 131.562C171.734 128.437 166.672 128.437 163.547 131.562C130.297 164.781 112 209 112 256S130.297 347.219 163.547 380.437C165.109 382 167.156 382.781 169.203 382.781S173.297 382 174.859 380.437C177.984 377.312 177.984 372.25 174.859 369.125C144.641 338.906 128 298.75 128 256S144.641 173.094 174.859 142.875C177.984 139.75 177.984 134.687 174.859 131.562ZM401.141 131.562C398.016 134.687 398.016 139.75 401.141 142.875C431.359 173.094 448 213.25 448 256S431.359 338.906 401.141 369.125C398.016 372.25 398.016 377.312 401.141 380.437C402.703 382 404.75 382.781 406.797 382.781S410.891 382 412.453 380.437C445.703 347.219 464 303 464 256S445.703 164.781 412.453 131.562C409.328 128.437 404.266 128.437 401.141 131.562Z" />
        </Icon>
    </>
}