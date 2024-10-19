
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `umbrella-simple` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/umbrella-simple?s=thin umbrella-simple}
 * @preview ![umbrella-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTUuOTk4IDMyMEMyNTEuNTkyIDMyMCAyNDcuOTk4IDMyMy41OTQgMjQ3Ljk5OCAzMjhWNDUyQzI0Ny45OTggNDc2LjI1IDIyOC4yNDggNDk2IDIwMy45OTggNDk2UzE1OS45OTggNDc2LjI1IDE1OS45OTggNDUyVjQyNEMxNTkuOTk4IDQxOS41OTQgMTU2LjQwNCA0MTYgMTUxLjk5OCA0MTZTMTQzLjk5OCA0MTkuNTk0IDE0My45OTggNDI0VjQ1MkMxNDMuOTk4IDQ4NS4wOTQgMTcwLjkwNCA1MTIgMjAzLjk5OCA1MTJTMjYzLjk5OCA0ODUuMDk0IDI2My45OTggNDUyVjMyOEMyNjMuOTk4IDMyMy41OTQgMjYwLjQwNCAzMjAgMjU1Ljk5OCAzMjBaTTI2My45OTggOEMyNjMuOTk4IDMuNTk0IDI2MC40MDQgMCAyNTUuOTk4IDBTMjQ3Ljk5OCAzLjU5NCAyNDcuOTk4IDhWMzJIMjU2SDI2My45OThWOFpNMjU2IDMyQzExNC44NDQgMzIgMCAxNDMuMjUgMCAyODBDMCAyODQuNDA2IDMuNTk0IDI4OCA4IDI4OEg1MDRDNTA4LjQwNiAyODggNTEyIDI4NC40MDYgNTEyIDI4MEM1MTIgMTQzLjI1IDM5Ny4xNTYgMzIgMjU2IDMyWk0xNi4xNTYgMjcyQzIwLjUzMSAxNDcuNzUgMTI2LjQzOCA0OCAyNTYgNDhTNDkxLjQ2OSAxNDcuNzUgNDk1Ljg0NCAyNzJIMTYuMTU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UmbrellaSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M255.998 320C251.592 320 247.998 323.594 247.998 328V452C247.998 476.25 228.248 496 203.998 496S159.998 476.25 159.998 452V424C159.998 419.594 156.404 416 151.998 416S143.998 419.594 143.998 424V452C143.998 485.094 170.904 512 203.998 512S263.998 485.094 263.998 452V328C263.998 323.594 260.404 320 255.998 320ZM263.998 8C263.998 3.594 260.404 0 255.998 0S247.998 3.594 247.998 8V32H256H263.998V8ZM256 32C114.844 32 0 143.25 0 280C0 284.406 3.594 288 8 288H504C508.406 288 512 284.406 512 280C512 143.25 397.156 32 256 32ZM16.156 272C20.531 147.75 126.438 48 256 48S491.469 147.75 495.844 272H16.156Z" />
        </Icon>
    </>
}