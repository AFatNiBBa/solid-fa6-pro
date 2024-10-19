
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `moon-over-sun` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/moon-over-sun?s=solid moon-over-sun}
 * @preview ![moon-over-sun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzcuODEzIDMxOC4xMjVDMjgzLjU2MyAzMjguNDc5IDIzMy41NDEgMjg2Ljc3IDIzMy41NDEgMjMxLjc5MUMyMzMuNTQxIDIwMC4yOTEgMjUwLjQ1OSAxNzEuMTI0IDI3Ny44NzUgMTU1LjUxOUMyODIuMTA0IDE1My4wNCAyODEuMDg0IDE0Ni42MjQgMjc2LjI3MiAxNDUuODk0QzI2OS41NjMgMTQ0LjU4MSAyNjIuNzA5IDE0My45OTkgMjU1Ljg1NCAxNDMuOTk5QzE5NC4xNjYgMTQzLjk5OSAxNDQgMTk0LjAxOSAxNDQgMjU2QzE0NCAzMTcuODMyIDE5NC4wMjIgMzY4LjAwMSAyNTUuODU0IDM2OC4wMDFDMjkwLjQxNiAzNjguMDAxIDMyMS45MTYgMzUyLjI1MSAzNDIuNzcyIDMyNi41ODJDMzQ1Ljk3OSAzMjIuNzkxIDM0Mi42MjUgMzE3LjEwNCAzMzcuODEzIDMxOC4xMjVaTTUwNy44MDcgMzM5LjAxTDQ1MC4yMDMgMjU2TDUwNy44MDcgMTcyLjk4NkM1MTcuNTEgMTU5LjAwMyA1MDkuNSAxMzkuNjY5IDQ5Mi43NTIgMTM2LjY0MkwzOTMuMzIzIDExOC42NzVMMzc1LjM1NiAxOS4yNDhDMzcyLjMyOCAyLjQ5OCAzNTIuOTk0IC01LjUwOSAzMzkuMDEyIDQuMTk0TDI1NiA2MS43OTJMMTcyLjk4OSA0LjE5NEMxNTkuMDA2IC01LjUwOSAxMzkuNjcyIDIuNDk4IDEzNi42NDUgMTkuMjQ4TDExOC42NzggMTE4LjY3NUwxOS4yNDggMTM2LjY0MkMyLjUgMTM5LjY2OSAtNS41MDkgMTU5LjAwMyA0LjE5NCAxNzIuOTg2TDYxLjc5NyAyNTZMNC4xOTQgMzM5LjAxQy01LjUwOSAzNTIuOTk1IDIuNDk4IDM3Mi4zMjkgMTkuMjQ4IDM3NS4zNTZMMTE4LjY3OCAzOTMuMzIzTDEzNi42NDUgNDkyLjc1MUMxMzkuNjcyIDUwOS41MDIgMTU5LjAwNiA1MTcuNTA5IDE3Mi45ODkgNTA3LjgwNkwyNTYgNDUwLjIwNEwzMzkuMDEyIDUwNy44MDZDMzUyLjk5NCA1MTcuNTA5IDM3Mi4zMjggNTA5LjUwMiAzNzUuMzU2IDQ5Mi43NTFMMzkzLjMyMyAzOTMuMzIzTDQ5Mi43NTIgMzc1LjM1NkM1MDkuNTAyIDM3Mi4zMjkgNTE3LjUxIDM1Mi45OTUgNTA3LjgwNyAzMzkuMDFaTTM1Ny43OTMgMzU3Ljk4MUMzMDEuNjQzIDQxNC4xMzIgMjEwLjE3IDQxNC4xMzIgMTU0LjAyIDM1Ny45ODFTOTcuODY5IDIxMC4zNTcgMTU0LjAyIDE1NC4yMDZDMjEwLjE3IDk4LjA1NCAzMDEuNjQzIDk4LjA1NCAzNTcuNzkzIDE1NC4yMDZDNDEzLjk0NCAyMTAuMzU3IDQxMy45NDQgMzAxLjgzIDM1Ny43OTMgMzU3Ljk4MVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MoonOverSun(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M337.813 318.125C283.563 328.479 233.541 286.77 233.541 231.791C233.541 200.291 250.459 171.124 277.875 155.519C282.104 153.04 281.084 146.624 276.272 145.894C269.563 144.581 262.709 143.999 255.854 143.999C194.166 143.999 144 194.019 144 256C144 317.832 194.022 368.001 255.854 368.001C290.416 368.001 321.916 352.251 342.772 326.582C345.979 322.791 342.625 317.104 337.813 318.125ZM507.807 339.01L450.203 256L507.807 172.986C517.51 159.003 509.5 139.669 492.752 136.642L393.323 118.675L375.356 19.248C372.328 2.498 352.994 -5.509 339.012 4.194L256 61.792L172.989 4.194C159.006 -5.509 139.672 2.498 136.645 19.248L118.678 118.675L19.248 136.642C2.5 139.669 -5.509 159.003 4.194 172.986L61.797 256L4.194 339.01C-5.509 352.995 2.498 372.329 19.248 375.356L118.678 393.323L136.645 492.751C139.672 509.502 159.006 517.509 172.989 507.806L256 450.204L339.012 507.806C352.994 517.509 372.328 509.502 375.356 492.751L393.323 393.323L492.752 375.356C509.502 372.329 517.51 352.995 507.807 339.01ZM357.793 357.981C301.643 414.132 210.17 414.132 154.02 357.981S97.869 210.357 154.02 154.206C210.17 98.054 301.643 98.054 357.793 154.206C413.944 210.357 413.944 301.83 357.793 357.981Z" />
        </Icon>
    </>
}