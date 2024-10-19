
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-audio` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-audio?s=duotone file-audio}
 * @preview ![file-audio](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxMjhWMEg0OEMyMS40OSAwIDAgMjEuNDkyIDAgNDhWNDY0QzAgNDkwLjUwOCAyMS40OSA1MTIgNDggNTEySDMzNkMzNjIuNTEgNTEyIDM4NCA0OTAuNTA4IDM4NCA0NjRWMTI4SDI1NlpNMTc2IDQwNEMxNzYgNDE0Ljc1IDE2My4xMjUgNDIwIDE1NS41IDQxMi41TDEyMCAzNzZINzZDNjkuMzc1IDM3NiA2NCAzNzAuNjI1IDY0IDM2NFYzMDhDNjQgMzAxLjM3NSA2OS4zNzUgMjk2IDc2IDI5NkgxMjBMMTU1LjUgMjU5LjVDMTYzLjEyNSAyNTEuODc1IDE3NiAyNTcuMjUgMTc2IDI2OFY0MDRaTTIyNCAzODcuNzgxQzIxOS42MDkgMzg3Ljc4MSAyMTUuMjUgMzg2LjAwMSAyMTIuMDk0IDM4Mi40NjlDMjA2LjE4OCAzNzUuODc1IDIwNi43MzQgMzY1Ljc4MSAyMTMuMzEyIDM1OS44NzVDMjIwLjIwMyAzNTMuNjg4IDIyNCAzNDUuMjE5IDIyNCAzMzZTMjIwLjIwMyAzMTguMzEyIDIxMy4zMTIgMzEyLjEyNUMyMDYuNzM0IDMwNi4yMTkgMjA2LjE4OCAyOTYuMTI1IDIxMi4wOTQgMjg5LjUzMUMyMTguMDE2IDI4Mi45MzcgMjI4LjE0MSAyODIuNDM3IDIzNC42ODggMjg4LjMxMkMyNDguMjM0IDMwMC40NjkgMjU2IDMxNy44NDQgMjU2IDMzNlMyNDguMjM0IDM3MS41MzEgMjM0LjY4OCAzODMuNjg4QzIzMS42MjUgMzg2LjQzOCAyMjcuODEyIDM4Ny43ODEgMjI0IDM4Ny43ODFaTTI2NS4xNTYgNDQxLjA2MkMyNjIuMzc1IDQ0MyAyNTkuMTcyIDQ0My45MzggMjU2LjAxNiA0NDMuOTM4QzI1MC45NjkgNDQzLjkzOCAyNDUuOTg0IDQ0MS41NjIgMjQyLjg3NSA0MzcuMDk0QzIzNy44MjggNDI5Ljg0NCAyMzkuNTk0IDQxOS44NzUgMjQ2Ljg0NCA0MTQuODEyQzI3Mi42MDkgMzk2Ljg0NCAyODggMzY3LjM3NSAyODggMzM2UzI3Mi42MjUgMjc1LjE4OCAyNDYuODU5IDI1Ny4yMTlDMjM5LjYwOSAyNTIuMTU2IDIzNy44MjggMjQyLjE4NyAyNDIuODc1IDIzNC45MzdDMjQ3LjkyMiAyMjcuNjU2IDI1Ny44NTkgMjI1Ljg3NSAyNjUuMTQxIDIzMC45NjlDMjk5LjUgMjU0LjkwNiAzMjAgMjk0LjE1NiAzMjAgMzM2QzMyMCAzNzcuODEyIDI5OS41IDQxNy4wOTQgMjY1LjE1NiA0NDEuMDYyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNTYgMFYxMjhIMzg0TDI1NiAwWk0xNTUuNSAyNTkuNUwxMjAgMjk2SDc2QzY5LjM3NSAyOTYgNjQgMzAxLjM3NSA2NCAzMDhWMzY0QzY0IDM3MC42MjUgNjkuMzc1IDM3NiA3NiAzNzZIMTIwTDE1NS41IDQxMi41QzE2My4xMjUgNDIwIDE3NiA0MTQuNzUgMTc2IDQwNFYyNjhDMTc2IDI1Ny4yNSAxNjMuMTI1IDI1MS44NzUgMTU1LjUgMjU5LjVaTTIzNC42ODggMjg4LjMxMkMyMjguMTQxIDI4Mi40MzcgMjE4LjAxNiAyODIuOTM3IDIxMi4wOTQgMjg5LjUzMUMyMDYuMTg4IDI5Ni4xMjUgMjA2LjczNCAzMDYuMjE5IDIxMy4zMTIgMzEyLjEyNUMyMjAuMjAzIDMxOC4zMTIgMjI0IDMyNi43ODEgMjI0IDMzNlMyMjAuMjAzIDM1My42ODggMjEzLjMxMiAzNTkuODc1QzIwNi43MzQgMzY1Ljc4MSAyMDYuMTg4IDM3NS44NzUgMjEyLjA5NCAzODIuNDY5QzIxNS4yNSAzODYuMDAxIDIxOS42MDkgMzg3Ljc4MSAyMjQgMzg3Ljc4MUMyMjcuODEyIDM4Ny43ODEgMjMxLjYyNSAzODYuNDM4IDIzNC42ODggMzgzLjY4OEMyNDguMjM0IDM3MS41MzEgMjU2IDM1NC4xNTYgMjU2IDMzNlMyNDguMjM0IDMwMC40NjkgMjM0LjY4OCAyODguMzEyWk0yNjUuMTQxIDIzMC45NjlDMjU3Ljg1OSAyMjUuODc1IDI0Ny45MjIgMjI3LjY1NiAyNDIuODc1IDIzNC45MzdDMjM3LjgyOCAyNDIuMTg3IDIzOS42MDkgMjUyLjE1NiAyNDYuODU5IDI1Ny4yMTlDMjcyLjYyNSAyNzUuMTg4IDI4OCAzMDQuNjI1IDI4OCAzMzZTMjcyLjYwOSAzOTYuODQ0IDI0Ni44NDQgNDE0LjgxMkMyMzkuNTk0IDQxOS44NzUgMjM3LjgyOCA0MjkuODQ0IDI0Mi44NzUgNDM3LjA5NEMyNDUuOTg0IDQ0MS41NjIgMjUwLjk2OSA0NDMuOTM4IDI1Ni4wMTYgNDQzLjkzOEMyNTkuMTcyIDQ0My45MzggMjYyLjM3NSA0NDMgMjY1LjE1NiA0NDEuMDYyQzI5OS41IDQxNy4wOTQgMzIwIDM3Ny44MTIgMzIwIDMzNkMzMjAgMjk0LjE1NiAyOTkuNSAyNTQuOTA2IDI2NS4xNDEgMjMwLjk2OVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function FileAudio(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M256 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V128H256ZM176 404C176 414.75 163.125 420 155.5 412.5L120 376H76C69.375 376 64 370.625 64 364V308C64 301.375 69.375 296 76 296H120L155.5 259.5C163.125 251.875 176 257.25 176 268V404ZM224 387.781C219.609 387.781 215.25 386.001 212.094 382.469C206.188 375.875 206.734 365.781 213.312 359.875C220.203 353.688 224 345.219 224 336S220.203 318.312 213.312 312.125C206.734 306.219 206.188 296.125 212.094 289.531C218.016 282.937 228.141 282.437 234.688 288.312C248.234 300.469 256 317.844 256 336S248.234 371.531 234.688 383.688C231.625 386.438 227.812 387.781 224 387.781ZM265.156 441.062C262.375 443 259.172 443.938 256.016 443.938C250.969 443.938 245.984 441.562 242.875 437.094C237.828 429.844 239.594 419.875 246.844 414.812C272.609 396.844 288 367.375 288 336S272.625 275.188 246.859 257.219C239.609 252.156 237.828 242.187 242.875 234.937C247.922 227.656 257.859 225.875 265.141 230.969C299.5 254.906 320 294.156 320 336C320 377.812 299.5 417.094 265.156 441.062Z" />
            <path d="M256 0V128H384L256 0ZM155.5 259.5L120 296H76C69.375 296 64 301.375 64 308V364C64 370.625 69.375 376 76 376H120L155.5 412.5C163.125 420 176 414.75 176 404V268C176 257.25 163.125 251.875 155.5 259.5ZM234.688 288.312C228.141 282.437 218.016 282.937 212.094 289.531C206.188 296.125 206.734 306.219 213.312 312.125C220.203 318.312 224 326.781 224 336S220.203 353.688 213.312 359.875C206.734 365.781 206.188 375.875 212.094 382.469C215.25 386.001 219.609 387.781 224 387.781C227.812 387.781 231.625 386.438 234.688 383.688C248.234 371.531 256 354.156 256 336S248.234 300.469 234.688 288.312ZM265.141 230.969C257.859 225.875 247.922 227.656 242.875 234.937C237.828 242.187 239.609 252.156 246.859 257.219C272.625 275.188 288 304.625 288 336S272.609 396.844 246.844 414.812C239.594 419.875 237.828 429.844 242.875 437.094C245.984 441.562 250.969 443.938 256.016 443.938C259.172 443.938 262.375 443 265.156 441.062C299.5 417.094 320 377.812 320 336C320 294.156 299.5 254.906 265.141 230.969Z" />
        </Icon>
    </>
}