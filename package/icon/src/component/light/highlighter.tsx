
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `highlighter` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/highlighter?s=light highlighter}
 * @preview ![highlighter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MjguNTk5IDc1Ljg3NUw0NjguMTAzIDE1LjM3NUM0NTcuODUzIDUuMTI1IDQ0NC40NzggMCA0MzAuOTc4IDBDNDE4LjEwNSAwIDQwNS44NTUgNC42MjUgMzk2LjIzIDEzLjEyNUwxMTAuNjE5IDI2MS43NUMxMDAuMjQ2IDI3MC44NzUgOTYuMjQ2IDI4NS4xMjUgMTAwLjI0NiAyOTguMjVMMTEyLjc0NCAzMzkuMjVMNzYuMjQ2IDM3NS44NzVDNjkuNDk2IDM4Mi42MjUgNjkuNDk2IDM5My41IDc2LjI0NiA0MDAuMjVMNzcuMjU2IDQwMS4yNkw2LjQwNCA0NzQuODQ4Qy03LjI3NiA0ODguNTU3IDIuNDEyIDUxMiAyMS43NTYgNTEySDk0LjI5NUM5OC41MjcgNTEyIDEwMi41ODggNTEwLjMxNCAxMDUuNTgyIDUwNy4zMTJMMTQzLjIzNCA0NjcuMzY1TDE0My44NjcgNDY4QzE1MC42MTcgNDc0Ljc1IDE2MS42MTcgNDc0Ljc1IDE2OC4zNjcgNDY4TDIwNC43NCA0MzEuNUwyNDUuNzM4IDQ0NC4xMjVDMjYzLjczOCA0NDkuNjI1IDI3Ny4xMTEgNDM5LjUgMjgyLjIzNiA0MzMuNzVMNTMwLjg0OSAxNDcuODc1QzU0OS4yMjQgMTI3IDU0OC4yMjQgOTUuNSA1MjguNTk5IDc1Ljg3NVpNODcuMzY3IDQ4MEg0NS44NjVMOTQuMjcxIDQyOS43MjVMOTkuNzU0IDQyMy44MDFMMTIwLjUyMyA0NDQuNjExTDg3LjM2NyA0ODBaTTI1OC4yMzggNDEyLjVDMjU3LjYxMyA0MTMuMjUgMjU2LjczOCA0MTMuNSAyNTUuODYzIDQxMy41SDI1NC45ODhMMjE0LjExNSA0MDAuODc1TDE5NS43NCAzOTUuMjVMMTU2LjExNyA0MzVMMTA5LjI0NCAzODguMTI1TDE0OC45OTIgMzQ4LjM3NUwxNDMuMzY3IDMzMEwxMzAuODY5IDI4OUMxMzAuNDk0IDI4Ny44NzUgMTMwLjg2OSAyODYuNjI1IDEzMS42MTkgMjg2TDE3Ni42MTcgMjQ2Ljc1TDI5Ny4zNjEgMzY3LjYyNUwyNTguMjM4IDQxMi41Wk01MDYuNzI2IDEyNi44NzVMMzE4LjM1OSAzNDMuMzc1TDIwMC43NCAyMjUuNzVMNDE3LjM1NSAzNy4xMjVDNDIxLjg1NSAzMy4xMjUgNDM0Ljk3OCAyNy41IDQ0NS40NzggMzhMNTA1Ljk3NCA5OC41QzUxMy41OTkgMTA2LjI1IDUxMy45NzQgMTE4LjUgNTA2LjcyNiAxMjYuODc1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Highlighter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M528.599 75.875L468.103 15.375C457.853 5.125 444.478 0 430.978 0C418.105 0 405.855 4.625 396.23 13.125L110.619 261.75C100.246 270.875 96.246 285.125 100.246 298.25L112.744 339.25L76.246 375.875C69.496 382.625 69.496 393.5 76.246 400.25L77.256 401.26L6.404 474.848C-7.276 488.557 2.412 512 21.756 512H94.295C98.527 512 102.588 510.314 105.582 507.312L143.234 467.365L143.867 468C150.617 474.75 161.617 474.75 168.367 468L204.74 431.5L245.738 444.125C263.738 449.625 277.111 439.5 282.236 433.75L530.849 147.875C549.224 127 548.224 95.5 528.599 75.875ZM87.367 480H45.865L94.271 429.725L99.754 423.801L120.523 444.611L87.367 480ZM258.238 412.5C257.613 413.25 256.738 413.5 255.863 413.5H254.988L214.115 400.875L195.74 395.25L156.117 435L109.244 388.125L148.992 348.375L143.367 330L130.869 289C130.494 287.875 130.869 286.625 131.619 286L176.617 246.75L297.361 367.625L258.238 412.5ZM506.726 126.875L318.359 343.375L200.74 225.75L417.355 37.125C421.855 33.125 434.978 27.5 445.478 38L505.974 98.5C513.599 106.25 513.974 118.5 506.726 126.875Z" />
        </Icon>
    </>
}