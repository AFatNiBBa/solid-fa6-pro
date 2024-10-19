
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `face-grin-hearts` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-hearts?s=solid face-grin-hearts}
 * @preview ![face-grin-hearts](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ2MSAxNiAxNiAxMjMuNDE5IDE2IDI1NlMxMjMuNDYxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTgxIDQ5NiAyNTZTMzg4LjUzOSAxNiAyNTYgMTZaTTk4LjQ1NyAxODMuNjI1QzEwNS4xMTcgMTY2IDEyNS4wOTggMTU2Ljg3NSAxNDMuMjYyIDE2MS43NUwxNTAuNDA2IDE2My42MjVMMTUyLjM0NCAxNTYuNUMxNTcuNDMgMTM4LjM3NSAxNzUuMjMgMTI1LjYyNSAxOTMuODc5IDEyOC42MjVDMjE1LjMxMiAxMzIgMjI4LjI3IDE1Mi43NSAyMjIuNjk5IDE3My4xMjVMMjAzLjMyNCAyNDNDMjAyLjExMyAyNDcuNSAxOTcuMzkxIDI1MC4yNSAxOTIuNzg5IDI0OUwxMjIuNTU1IDIzMC43NUMxMDIuMjExIDIyNS4zNzUgOTAuNzA3IDIwMy43NSA5OC40NTcgMTgzLjYyNVpNMjU2IDQzMkMxOTUuNDUzIDQzMiAxMjEuNDY1IDM5My43NSAxMTIuMTQxIDMzOC43NUMxMTAuMjAzIDMyNi44NzUgMTIxLjM0NCAzMTcuMjUgMTMyLjg0OCAzMjAuNzVDMTYzLjEyMSAzMzAuNSAyMDguMDQ3IDMzNiAyNTYgMzM2UzM0OC44NzkgMzMwLjUgMzc5LjE1MiAzMjAuNzVDMzkwLjUzNSAzMTcuMjUgNDAxLjY3NiAzMjYuODc1IDM5OS44NTkgMzM4Ljc1QzM5MC41MzUgMzkzLjc1IDMxNi41NDcgNDMyIDI1NiA0MzJaTTM4OS40NDUgMjMwLjc1TDMxOS4yMTEgMjQ4Ljg3NUMzMTQuNzMgMjUwLjEyNSAzMTAuMDA4IDI0Ny4zNzUgMzA4LjY3NiAyNDIuODc1TDI4OS4zMDEgMTczQzI4My43MyAxNTIuNzUgMjk2LjY4OCAxMzEuODc1IDMxOC4xMjEgMTI4LjVDMzM2LjY0OCAxMjUuNSAzNTQuNDQ5IDEzOC4yNSAzNTkuNjU2IDE1Ni4zNzVMMzYxLjU5NCAxNjMuNUwzNjguNzM4IDE2MS42MjVDMzg2LjkwMiAxNTYuODc1IDQwNi44ODMgMTY1Ljg3NSA0MTMuNTQzIDE4My41QzQyMS4yOTMgMjAzLjc1IDQwOS43ODkgMjI1LjM3NSAzODkuNDQ1IDIzMC43NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FaceGrinHearts(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.461 16 16 123.419 16 256S123.461 496 256 496S496 388.581 496 256S388.539 16 256 16ZM98.457 183.625C105.117 166 125.098 156.875 143.262 161.75L150.406 163.625L152.344 156.5C157.43 138.375 175.23 125.625 193.879 128.625C215.312 132 228.27 152.75 222.699 173.125L203.324 243C202.113 247.5 197.391 250.25 192.789 249L122.555 230.75C102.211 225.375 90.707 203.75 98.457 183.625ZM256 432C195.453 432 121.465 393.75 112.141 338.75C110.203 326.875 121.344 317.25 132.848 320.75C163.121 330.5 208.047 336 256 336S348.879 330.5 379.152 320.75C390.535 317.25 401.676 326.875 399.859 338.75C390.535 393.75 316.547 432 256 432ZM389.445 230.75L319.211 248.875C314.73 250.125 310.008 247.375 308.676 242.875L289.301 173C283.73 152.75 296.688 131.875 318.121 128.5C336.648 125.5 354.449 138.25 359.656 156.375L361.594 163.5L368.738 161.625C386.902 156.875 406.883 165.875 413.543 183.5C421.293 203.75 409.789 225.375 389.445 230.75Z" />
        </Icon>
    </>
}