
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `radar` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/radar?s=light radar}
 * @preview ![radar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgMjQwQzQ4Ny4xNTYgMjQwIDQ4MCAyNDcuMTU2IDQ4MCAyNTZDNDgwIDM3OS41IDM3OS41MTYgNDgwIDI1NiA0ODBTMzIgMzc5LjUgMzIgMjU2UzEzMi40ODQgMzIgMjU2IDMyQzMxMC4zNjMgMzIgMzYxLjc4MSA1MS41MTYgNDAyLjQ5OCA4Ni44NzdMMzY4LjA1OSAxMjEuMzE2QzMzNi41IDk1LjAyNSAyOTcuNTA2IDgwIDI1NiA4MEMxODYuMDE2IDgwIDEyMi42NzIgMTIxLjQzOCA5NC42NTYgMTg1LjU5NEM5MS4xMDkgMTkzLjY4OCA5NC44MTIgMjAzLjEyNSAxMDIuOTA2IDIwNi42NTZDMTA0Ljk4NCAyMDcuNTYyIDEwNy4xNzIgMjA4IDEwOS4yOTcgMjA4QzExNS40NjkgMjA4IDEyMS4zNDQgMjA0LjQwNiAxMjMuOTY5IDE5OC40MDZDMTQ2LjkwNiAxNDUuOTA2IDE5OC43MzQgMTEyIDI1NiAxMTJDMjg4Ljk3MyAxMTIgMzE5Ljk2NyAxMjMuNjM5IDM0NS4zOTUgMTQzLjk4TDMxMS40MzYgMTc3LjkzOUMyOTUuMjkzIDE2Ni40NTEgMjc2LjE2OCAxNjAgMjU2IDE2MEMyMDMuMDYyIDE2MCAxNjAgMjAzLjA2MiAxNjAgMjU2UzIwMy4wNjIgMzUyIDI1NiAzNTJTMzUyIDMwOC45MzggMzUyIDI1NkMzNTIgMjQ3LjE1NiAzNDQuODQ0IDI0MCAzMzYgMjQwUzMyMCAyNDcuMTU2IDMyMCAyNTZDMzIwIDI5MS4yODEgMjkxLjI5NyAzMjAgMjU2IDMyMFMxOTIgMjkxLjI4MSAxOTIgMjU2UzIyMC43MDMgMTkyIDI1NiAxOTJDMjY3LjU3OCAxOTIgMjc4LjYxNyAxOTUuMjcxIDI4OC4zNTUgMjAxLjAyTDI0NC42ODggMjQ0LjY4OEMyMzguNDM4IDI1MC45MzggMjM4LjQzOCAyNjEuMDYzIDI0NC42ODggMjY3LjMxMkMyNDcuODEyIDI3MC40MzggMjUxLjkwNiAyNzIgMjU2IDI3MlMyNjQuMTg4IDI3MC40MzggMjY3LjMxMiAyNjcuMzEyTDQ5MS4zMTIgNDMuMzEyQzQ5Ny41NjIgMzcuMDYyIDQ5Ny41NjIgMjYuOTM3IDQ5MS4zMTIgMjAuNjg4UzQ3NC45MzcgMTQuNDM4IDQ2OC42ODggMjAuNjg4TDQyNS4xNSA2NC4yMjVDMzc4LjM0MiAyMi44NjkgMzE4Ljg5NiAwIDI1NiAwQzExNC44NDQgMCAwIDExNC44NDQgMCAyNTZTMTE0Ljg0NCA1MTIgMjU2IDUxMlM1MTIgMzk3LjE1NiA1MTIgMjU2QzUxMiAyNDcuMTU2IDUwNC44NDQgMjQwIDQ5NiAyNDBaTTE4NS41OTQgNDE3LjM0NEMxODcuNjg4IDQxOC4yNSAxODkuODU5IDQxOC42ODggMTkxLjk4NCA0MTguNjg4QzE5OC4xNTYgNDE4LjY4OCAyMDQuMDMxIDQxNS4wOTQgMjA2LjY1NiA0MDkuMDk0QzIxMC4yMDMgNDAxIDIwNi41IDM5MS41NjIgMTk4LjQwNiAzODguMDMxQzE2NSAzNzMuNDM4IDEzOC41NjIgMzQ3IDEyMy45NjkgMzEzLjU5NEMxMjAuNDUzIDMwNS41MzEgMTExLjA0NyAzMDEuODEyIDEwMi45MDYgMzA1LjM0NEM5NC44MTIgMzA4Ljg3NSA5MS4xMDkgMzE4LjMxMiA5NC42NTYgMzI2LjQwNkMxMTIuNDg0IDM2Ny4yMTkgMTQ0Ljc4MSAzOTkuNTMxIDE4NS41OTQgNDE3LjM0NFpNNDAwIDI1NkM0MDAgMzEzLjI4MSAzNjYuMDc4IDM2NS4wOTQgMzEzLjU5NCAzODguMDMxQzMwNS41IDM5MS41NjMgMzAxLjc5NyA0MDEgMzA1LjM0NCA0MDkuMDk0QzMwNy45NjkgNDE1LjA5NCAzMTMuODQ0IDQxOC42ODggMzIwLjAxNiA0MTguNjg4QzMyMi4xNDEgNDE4LjY4OCAzMjQuMzEyIDQxOC4yNSAzMjYuNDA2IDQxNy4zNDRDMzkwLjU0NyAzODkuMzQ0IDQzMiAzMjYgNDMyIDI1NkM0MzIgMjQ3LjE1NiA0MjQuODQ0IDI0MCA0MTYgMjQwUzQwMCAyNDcuMTU2IDQwMCAyNTZaTTEyMCAyNTZDMTIwIDI0Mi43NDQgMTA5LjI1NCAyMzIgOTYgMjMyUzcyIDI0Mi43NDQgNzIgMjU2QzcyIDI2OS4yNTQgODIuNzQ2IDI4MCA5NiAyODBTMTIwIDI2OS4yNTQgMTIwIDI1NlpNMjMyIDQxNkMyMzIgNDI5LjI1NCAyNDIuNzQ2IDQ0MCAyNTYgNDQwUzI4MCA0MjkuMjU0IDI4MCA0MTZDMjgwIDQwMi43NDQgMjY5LjI1NCAzOTIgMjU2IDM5MlMyMzIgNDAyLjc0NCAyMzIgNDE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Radar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 240C487.156 240 480 247.156 480 256C480 379.5 379.516 480 256 480S32 379.5 32 256S132.484 32 256 32C310.363 32 361.781 51.516 402.498 86.877L368.059 121.316C336.5 95.025 297.506 80 256 80C186.016 80 122.672 121.438 94.656 185.594C91.109 193.688 94.812 203.125 102.906 206.656C104.984 207.562 107.172 208 109.297 208C115.469 208 121.344 204.406 123.969 198.406C146.906 145.906 198.734 112 256 112C288.973 112 319.967 123.639 345.395 143.98L311.436 177.939C295.293 166.451 276.168 160 256 160C203.062 160 160 203.062 160 256S203.062 352 256 352S352 308.938 352 256C352 247.156 344.844 240 336 240S320 247.156 320 256C320 291.281 291.297 320 256 320S192 291.281 192 256S220.703 192 256 192C267.578 192 278.617 195.271 288.355 201.02L244.688 244.688C238.438 250.938 238.438 261.063 244.688 267.312C247.812 270.438 251.906 272 256 272S264.188 270.438 267.312 267.312L491.312 43.312C497.562 37.062 497.562 26.937 491.312 20.688S474.937 14.438 468.688 20.688L425.15 64.225C378.342 22.869 318.896 0 256 0C114.844 0 0 114.844 0 256S114.844 512 256 512S512 397.156 512 256C512 247.156 504.844 240 496 240ZM185.594 417.344C187.688 418.25 189.859 418.688 191.984 418.688C198.156 418.688 204.031 415.094 206.656 409.094C210.203 401 206.5 391.562 198.406 388.031C165 373.438 138.562 347 123.969 313.594C120.453 305.531 111.047 301.812 102.906 305.344C94.812 308.875 91.109 318.312 94.656 326.406C112.484 367.219 144.781 399.531 185.594 417.344ZM400 256C400 313.281 366.078 365.094 313.594 388.031C305.5 391.563 301.797 401 305.344 409.094C307.969 415.094 313.844 418.688 320.016 418.688C322.141 418.688 324.312 418.25 326.406 417.344C390.547 389.344 432 326 432 256C432 247.156 424.844 240 416 240S400 247.156 400 256ZM120 256C120 242.744 109.254 232 96 232S72 242.744 72 256C72 269.254 82.746 280 96 280S120 269.254 120 256ZM232 416C232 429.254 242.746 440 256 440S280 429.254 280 416C280 402.744 269.254 392 256 392S232 402.744 232 416Z" />
        </Icon>
    </>
}