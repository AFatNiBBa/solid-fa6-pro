
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-up-left` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-up-left?s=thin square-up-left}
 * @preview ![square-up-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTIuNDQ5IDIxNi41NjZMMjg0LjA0NSAxODQuOTY5QzI5OS4xNjYgMTY5Ljg1MiAyODguNDU3IDE0NCAyNjcuMDc0IDE0NEgxMzZDMTI5LjM3MyAxNDQgMTIzLjM3MyAxNDYuNjg4IDExOS4wMjkgMTUxLjAzMVMxMTIuMDAyIDE2MS4zNzEgMTEyIDE2OFYyOTkuMDc0QzExMiAzMjAuNDUzIDEzNy44NTIgMzMxLjE2NCAxNTIuOTcxIDMxNi4wNDdMMTg0LjU2NiAyODQuNDQ5TDI1OC4xMDUgMzU3Ljk4OEMyNjcuNDc5IDM2Ny4zNTkgMjgyLjY3NiAzNjcuMzU5IDI5Mi4wNDcgMzU3Ljk4OEwzMjUuOTg4IDMyNC4wNDdDMzM1LjM1OSAzMTQuNjcyIDMzNS4zNjEgMjk5LjQ3NyAzMjUuOTg4IDI5MC4xMDVMMjUyLjQ0OSAyMTYuNTY2Wk0zMTQuNjc0IDMxMi43MzRMMjgwLjczMiAzNDYuNjcyQzI3Ny42MTMgMzQ5Ljc5MyAyNzIuNTM5IDM0OS43OTMgMjY5LjQyIDM0Ni42NzJMMTg0LjU2NiAyNjEuODJMMTQxLjY1NiAzMDQuNzNDMTM4LjI0NiAzMDguMTQxIDEzNC40MjQgMzA3LjA4MiAxMzIuOTM4IDMwNi40NjlDMTMxLjQ1MyAzMDUuODUyIDEyOC4wMDIgMzAzLjg5OCAxMjguMDAyIDI5OS4wNzRWMTY4QzEyOC4wMDIgMTY1LjExNyAxMjkuNDY3IDE2My4yMTkgMTMwLjM0NCAxNjIuMzQ0QzEzMS4yMTkgMTYxLjQ2OSAxMzMuMTE3IDE2MCAxMzYgMTYwSDI2Ny4wNzRDMjcxLjkgMTYwIDI3My44NSAxNjMuNDUzIDI3NC40NjcgMTY0LjkzOEMyNzUuMDgyIDE2Ni40MjIgMjc2LjE0MyAxNzAuMjQ2IDI3Mi43MzIgMTczLjY1NkwyMjkuODIyIDIxNi41NjZMMzE0LjY3NCAzMDEuNDIyQzMxNy43OTUgMzA0LjUzOSAzMTcuNzk1IDMwOS42MTMgMzE0LjY3NCAzMTIuNzM0Wk0zODQgMzJINjRDMjguNjUyIDMyIDAgNjAuNjU2IDAgOTZWNDE2QzAgNDUxLjM0OCAyOC42NTIgNDgwIDY0IDQ4MEgzODRDNDE5LjM0OCA0ODAgNDQ4IDQ1MS4zNDggNDQ4IDQxNlY5NkM0NDggNjAuNjU2IDQxOS4zNDggMzIgMzg0IDMyWk00MzIgNDE2QzQzMiA0NDIuNDY5IDQxMC40NjkgNDY0IDM4NCA0NjRINjRDMzcuNTMxIDQ2NCAxNiA0NDIuNDY5IDE2IDQxNlY5NkMxNiA2OS41MzEgMzcuNTMxIDQ4IDY0IDQ4SDM4NEM0MTAuNDY5IDQ4IDQzMiA2OS41MzEgNDMyIDk2VjQxNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquareUpLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M252.449 216.566L284.045 184.969C299.166 169.852 288.457 144 267.074 144H136C129.373 144 123.373 146.688 119.029 151.031S112.002 161.371 112 168V299.074C112 320.453 137.852 331.164 152.971 316.047L184.566 284.449L258.105 357.988C267.479 367.359 282.676 367.359 292.047 357.988L325.988 324.047C335.359 314.672 335.361 299.477 325.988 290.105L252.449 216.566ZM314.674 312.734L280.732 346.672C277.613 349.793 272.539 349.793 269.42 346.672L184.566 261.82L141.656 304.73C138.246 308.141 134.424 307.082 132.938 306.469C131.453 305.852 128.002 303.898 128.002 299.074V168C128.002 165.117 129.467 163.219 130.344 162.344C131.219 161.469 133.117 160 136 160H267.074C271.9 160 273.85 163.453 274.467 164.938C275.082 166.422 276.143 170.246 272.732 173.656L229.822 216.566L314.674 301.422C317.795 304.539 317.795 309.613 314.674 312.734ZM384 32H64C28.652 32 0 60.656 0 96V416C0 451.348 28.652 480 64 480H384C419.348 480 448 451.348 448 416V96C448 60.656 419.348 32 384 32ZM432 416C432 442.469 410.469 464 384 464H64C37.531 464 16 442.469 16 416V96C16 69.531 37.531 48 64 48H384C410.469 48 432 69.531 432 96V416Z" />
        </Icon>
    </>
}