
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `seal` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/seal?s=duotone seal}
 * @preview ![seal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ5My4yMzYgMjg5Ljk0Mkw0NDcuNjQ4IDMzNS41M1Y0MDAuMDAxQzQ0Ny42NDggNDI2LjUxIDQyNi4xNTggNDQ4IDM5OS42NDggNDQ4SDMzNS4xNzdMMjg5LjU4OSA0OTMuNTg4QzI3MC44NDMgNTEyLjMzMiAyNDAuNDUzIDUxMi4zMzIgMjIxLjcwNyA0OTMuNTg4TDE3Ni4xMTkgNDQ4SDExMS42NDhDODUuMTM4IDQ0OCA2My42NDggNDI2LjUxIDYzLjY0OCA0MDAuMDAxVjMzNS41M0wxOC4wNiAyODkuOTQyQy0wLjY4NyAyNzEuMTk2IC0wLjY4NyAyNDAuODAzIDE4LjA2IDIyMi4wNTlMNjMuNjQ4IDE3Ni40NzJWMTEyLjAwMUM2My42NDggODUuNDkxIDg1LjEzOCA2NC4wMDEgMTExLjY0OCA2NC4wMDFIMTc2LjExOUwyMjEuNzA3IDE4LjQxM0MyNDAuNDUzIC0wLjMzMyAyNzAuODQzIC0wLjMzMyAyODkuNTg5IDE4LjQxM0wzMzUuMTc3IDY0LjAwMUgzOTkuNjQ4QzQyNi4xNTggNjQuMDAxIDQ0Ny42NDggODUuNDkxIDQ0Ny42NDggMTEyLjAwMVYxNzYuNDcyTDQ5My4yMzYgMjIyLjA1OUM1MTEuOTgzIDI0MC44MDMgNTExLjk4MyAyNzEuMTk2IDQ5My4yMzYgMjg5Ljk0MloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Seal(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M493.236 289.942L447.648 335.53V400.001C447.648 426.51 426.158 448 399.648 448H335.177L289.589 493.588C270.843 512.332 240.453 512.332 221.707 493.588L176.119 448H111.648C85.138 448 63.648 426.51 63.648 400.001V335.53L18.06 289.942C-0.687 271.196 -0.687 240.803 18.06 222.059L63.648 176.472V112.001C63.648 85.491 85.138 64.001 111.648 64.001H176.119L221.707 18.413C240.453 -0.333 270.843 -0.333 289.589 18.413L335.177 64.001H399.648C426.158 64.001 447.648 85.491 447.648 112.001V176.472L493.236 222.059C511.983 240.803 511.983 271.196 493.236 289.942Z" />
        </Icon>
    </>
}