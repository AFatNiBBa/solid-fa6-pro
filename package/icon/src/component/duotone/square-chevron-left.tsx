
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-chevron-left` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-left?s=duotone square-chevron-left}
 * @preview ![square-chevron-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTYgMCA5NlY0MTZDMCA0NTEuMzQ0IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ4IDQ4MCA0NDggNDUxLjM0NCA0NDggNDE2Vjk2QzQ0OCA2MC42NTYgNDE5LjM0OCAzMiAzODQgMzJaTTI5NC42MjUgMzQ1LjM3NUMzMDcuMTI1IDM1Ny44NzUgMzA3LjEyNSAzNzguMTI1IDI5NC42MjUgMzkwLjYyNVMyNjEuODc1IDQwMy4xMjUgMjQ5LjM3NSAzOTAuNjI1TDEzNy4zNzUgMjc4LjYyNUMxMzEuMTI1IDI3Mi4zNzUgMTI4IDI2NC4xODggMTI4IDI1NlMxMzEuMTI1IDIzOS42MjUgMTM3LjM3NSAyMzMuMzc1TDI0OS4zNzUgMTIxLjM3NUMyNjEuODc1IDEwOC44NzUgMjgyLjEyNSAxMDguODc1IDI5NC42MjUgMTIxLjM3NVMzMDcuMTI1IDE1NC4xMjUgMjk0LjYyNSAxNjYuNjI1TDIwNS4yNSAyNTZMMjk0LjYyNSAzNDUuMzc1WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yOTQuNjI1IDM0NS4zNzVDMzA3LjEyNSAzNTcuODc1IDMwNy4xMjUgMzc4LjEyNSAyOTQuNjI1IDM5MC42MjVTMjYxLjg3NSA0MDMuMTI1IDI0OS4zNzUgMzkwLjYyNUwxMzcuMzc1IDI3OC42MjVDMTMxLjEyNSAyNzIuMzc1IDEyOCAyNjQuMTg4IDEyOCAyNTZTMTMxLjEyNSAyMzkuNjI1IDEzNy4zNzUgMjMzLjM3NUwyNDkuMzc1IDEyMS4zNzVDMjYxLjg3NSAxMDguODc1IDI4Mi4xMjUgMTA4Ljg3NSAyOTQuNjI1IDEyMS4zNzVTMzA3LjEyNSAxNTQuMTI1IDI5NC42MjUgMTY2LjYyNUwyMDUuMjUgMjU2TDI5NC42MjUgMzQ1LjM3NVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function SquareChevronLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.348 480 448 451.344 448 416V96C448 60.656 419.348 32 384 32ZM294.625 345.375C307.125 357.875 307.125 378.125 294.625 390.625S261.875 403.125 249.375 390.625L137.375 278.625C131.125 272.375 128 264.188 128 256S131.125 239.625 137.375 233.375L249.375 121.375C261.875 108.875 282.125 108.875 294.625 121.375S307.125 154.125 294.625 166.625L205.25 256L294.625 345.375Z" />
            <path d="M294.625 345.375C307.125 357.875 307.125 378.125 294.625 390.625S261.875 403.125 249.375 390.625L137.375 278.625C131.125 272.375 128 264.188 128 256S131.125 239.625 137.375 233.375L249.375 121.375C261.875 108.875 282.125 108.875 294.625 121.375S307.125 154.125 294.625 166.625L205.25 256L294.625 345.375Z" />
        </Icon>
    </>
}