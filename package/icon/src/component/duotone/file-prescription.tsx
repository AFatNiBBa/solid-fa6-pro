
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-prescription` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-prescription?s=duotone file-prescription}
 * @preview ![file-prescription](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE3NiAyNDBIMTI4VjI3MkgxNzZDMTg0Ljg3NSAyNzIgMTkyIDI2NC44NzUgMTkyIDI1NlMxODQuODc1IDI0MCAxNzYgMjQwWk0yNTYgMTI4VjBINDhDMjEuNDkgMCAwIDIxLjQ5MiAwIDQ4VjQ2NEMwIDQ5MC41MDggMjEuNDkgNTEyIDQ4IDUxMkgzMzZDMzYyLjUxIDUxMiAzODQgNDkwLjUwOCAzODQgNDY0VjEyOEgyNTZaTTMwNCA0MzJMMjkyLjc1IDQ0My4zNzVDMjg2LjUgNDQ5LjYyNSAyNzYuMjUgNDQ5LjYyNSAyNzAgNDQzLjM3NUwyNDAgNDEzLjI1TDIxMCA0NDMuMjVDMjAzLjc1IDQ0OS41IDE5My41IDQ0OS41IDE4Ny4yNSA0NDMuMjVMMTc2IDQzMkMxNjkuNzUgNDI1Ljc1IDE2OS43NSA0MTUuNjI1IDE3NiA0MDkuMzc1TDIwNiAzNzkuMjVMMTQ2Ljc1IDMyMEgxMjhWMzY4QzEyOCAzNzYuODc1IDEyMC44NzUgMzg0IDExMiAzODRIOTZDODcuMTI1IDM4NCA4MCAzNzYuODc1IDgwIDM2OFYyMDhDODAgMTk5LjEyNSA4Ny4xMjUgMTkyIDk2IDE5MkgxNzZDMjExLjM3NSAxOTIgMjQwIDIyMC42MjUgMjQwIDI1NkMyNDAgMjgwLjI1IDIyNi4zNzUgMzAxIDIwNi41IDMxMS44NzVMMjQwIDM0NS4zNzVMMjY5Ljg3NSAzMTUuNUMyNzYuMTI1IDMwOS4yNSAyODYuMjUgMzA5LjI1IDI5Mi41IDMxNS41TDMwMy44NzUgMzI2Ljc1QzMxMC4xMjUgMzMzIDMxMC4xMjUgMzQzLjEyNSAzMDMuODc1IDM0OS4zNzVMMjc0IDM3OS4zNzVMMzA0IDQwOS4zNzVDMzEwLjI1IDQxNS42MjUgMzEwLjI1IDQyNS43NSAzMDQgNDMyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNTYgMFYxMjhIMzg0TDI1NiAwWk0yNzQgMzc5LjM3NUwzMDMuODc1IDM0OS4zNzVDMzEwLjEyNSAzNDMuMTI1IDMxMC4xMjUgMzMzIDMwMy44NzUgMzI2Ljc1TDI5Mi41IDMxNS41QzI4Ni4yNSAzMDkuMjUgMjc2LjEyNSAzMDkuMjUgMjY5Ljg3NSAzMTUuNUwyNDAgMzQ1LjM3NUwyMDYuNSAzMTEuODc1QzIyNi4zNzUgMzAxIDI0MCAyODAuMjUgMjQwIDI1NkMyNDAgMjIwLjYyNSAyMTEuMzc1IDE5MiAxNzYgMTkySDk2Qzg3LjEyNSAxOTIgODAgMTk5LjEyNSA4MCAyMDhWMzY4QzgwIDM3Ni44NzUgODcuMTI1IDM4NCA5NiAzODRIMTEyQzEyMC44NzUgMzg0IDEyOCAzNzYuODc1IDEyOCAzNjhWMzIwSDE0Ni43NUwyMDYgMzc5LjI1TDE3NiA0MDkuMzc1QzE2OS43NSA0MTUuNjI1IDE2OS43NSA0MjUuNzUgMTc2IDQzMkwxODcuMjUgNDQzLjI1QzE5My41IDQ0OS41IDIwMy43NSA0NDkuNSAyMTAgNDQzLjI1TDI0MCA0MTMuMjVMMjcwIDQ0My4zNzVDMjc2LjI1IDQ0OS42MjUgMjg2LjUgNDQ5LjYyNSAyOTIuNzUgNDQzLjM3NUwzMDQgNDMyQzMxMC4yNSA0MjUuNzUgMzEwLjI1IDQxNS42MjUgMzA0IDQwOS4zNzVMMjc0IDM3OS4zNzVaTTE3NiAyNzJIMTI4VjI0MEgxNzZDMTg0Ljg3NSAyNDAgMTkyIDI0Ny4xMjUgMTkyIDI1NlMxODQuODc1IDI3MiAxNzYgMjcyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FilePrescription(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M176 240H128V272H176C184.875 272 192 264.875 192 256S184.875 240 176 240ZM256 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V128H256ZM304 432L292.75 443.375C286.5 449.625 276.25 449.625 270 443.375L240 413.25L210 443.25C203.75 449.5 193.5 449.5 187.25 443.25L176 432C169.75 425.75 169.75 415.625 176 409.375L206 379.25L146.75 320H128V368C128 376.875 120.875 384 112 384H96C87.125 384 80 376.875 80 368V208C80 199.125 87.125 192 96 192H176C211.375 192 240 220.625 240 256C240 280.25 226.375 301 206.5 311.875L240 345.375L269.875 315.5C276.125 309.25 286.25 309.25 292.5 315.5L303.875 326.75C310.125 333 310.125 343.125 303.875 349.375L274 379.375L304 409.375C310.25 415.625 310.25 425.75 304 432Z" />
            <path d="M256 0V128H384L256 0ZM274 379.375L303.875 349.375C310.125 343.125 310.125 333 303.875 326.75L292.5 315.5C286.25 309.25 276.125 309.25 269.875 315.5L240 345.375L206.5 311.875C226.375 301 240 280.25 240 256C240 220.625 211.375 192 176 192H96C87.125 192 80 199.125 80 208V368C80 376.875 87.125 384 96 384H112C120.875 384 128 376.875 128 368V320H146.75L206 379.25L176 409.375C169.75 415.625 169.75 425.75 176 432L187.25 443.25C193.5 449.5 203.75 449.5 210 443.25L240 413.25L270 443.375C276.25 449.625 286.5 449.625 292.75 443.375L304 432C310.25 425.75 310.25 415.625 304 409.375L274 379.375ZM176 272H128V240H176C184.875 240 192 247.125 192 256S184.875 272 176 272Z" />
        </Icon>
    </>
}