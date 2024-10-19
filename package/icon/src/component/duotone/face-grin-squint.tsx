
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `face-grin-squint` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-squint?s=duotone face-grin-squint}
 * @preview ![face-grin-squint](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDYxIDE2IDE2IDEyMy40MTkgMTYgMjU2UzEyMy40NjEgNDk2IDI1NiA0OTZTNDk2IDM4OC41ODEgNDk2IDI1NlMzODguNTM5IDE2IDI1NiAxNlpNMjg5Ljc4NSAxOTcuNzVMMzY5LjgyOCAxNDkuNzVDMzgxLjQ1MyAxNDIuNzUgMzkzLjgwNSAxNTcuMzc1IDM4NS4yMDcgMTY3Ljc1TDM1MS41NDMgMjA4TDM4NS4yMDcgMjQ4LjI1QzM5My45MjYgMjU4Ljc1IDM4MS4zMzIgMjczLjEyNSAzNjkuODI4IDI2Ni4yNUwyODkuNzg1IDIxOC4yNUMyODIuMTU2IDIxMy42MjUgMjgyLjE1NiAyMDIuMzc1IDI4OS43ODUgMTk3Ljc1Wk0xMjYuNzkzIDE2Ny43NUMxMTguMTk1IDE1Ny4zNzUgMTMwLjU0NyAxNDIuNzUgMTQyLjE3MiAxNDkuNzVMMjIyLjIxNSAxOTcuNzVDMjI5Ljk2NSAyMDIuMzc1IDIyOS45NjUgMjEzLjYyNSAyMjIuMjE1IDIxOC4yNUwxNDIuMTcyIDI2Ni4yNUMxMzAuNjY4IDI3My4xMjUgMTE4LjE5NSAyNTguNzUgMTI2Ljc5MyAyNDguMjVMMTYwLjQ1NyAyMDhMMTI2Ljc5MyAxNjcuNzVaTTI1NiA0MzJDMTk1LjQ1MyA0MzIgMTIxLjQ2NSAzOTMuNzUgMTEyLjE0MSAzMzguNzVDMTEwLjIwMyAzMjYuNzUgMTIxLjU4NiAzMTcuMTI1IDEzMi44NDggMzIwLjc1QzE2My4xMjEgMzMwLjUgMjA4LjA0NyAzMzYgMjU2IDMzNlMzNDguODc5IDMzMC41IDM3OS4xNTIgMzIwLjc1QzM5MC42NTYgMzE3LjEyNSA0MDEuNjc2IDMyNyAzOTkuODU5IDMzOC43NUMzOTAuNTM1IDM5My43NSAzMTYuNTQ3IDQzMiAyNTYgNDMyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zODUuMjg2IDI0OC4yNUwzNTEuNjIyIDIwOEwzODUuMjg2IDE2Ny43NUMzOTMuODg0IDE1Ny4zNzUgMzgxLjUzMiAxNDIuNzUgMzY5LjkwNyAxNDkuNzVMMjg5Ljg2NCAxOTcuNzVDMjgyLjIzNSAyMDIuMzc1IDI4Mi4yMzUgMjEzLjYyNSAyODkuODY0IDIxOC4yNUwzNjkuOTA3IDI2Ni4yNUMzODEuNDExIDI3My4xMjUgMzk0LjAwNSAyNTguNzUgMzg1LjI4NiAyNDguMjVaTTE0Mi4yNTEgMTQ5Ljc1QzEzMC42MjYgMTQyLjc1IDExOC4yNzQgMTU3LjM3NSAxMjYuODcyIDE2Ny43NUwxNjAuNTM2IDIwOEwxMjYuODcyIDI0OC4yNUMxMTguMjc0IDI1OC43NSAxMzAuNzQ3IDI3My4xMjUgMTQyLjI1MSAyNjYuMjVMMjIyLjI5NCAyMTguMjVDMjMwLjA0NCAyMTMuNjI1IDIzMC4wNDQgMjAyLjM3NSAyMjIuMjk0IDE5Ny43NUwxNDIuMjUxIDE0OS43NVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function FaceGrinSquint(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 16C123.461 16 16 123.419 16 256S123.461 496 256 496S496 388.581 496 256S388.539 16 256 16ZM289.785 197.75L369.828 149.75C381.453 142.75 393.805 157.375 385.207 167.75L351.543 208L385.207 248.25C393.926 258.75 381.332 273.125 369.828 266.25L289.785 218.25C282.156 213.625 282.156 202.375 289.785 197.75ZM126.793 167.75C118.195 157.375 130.547 142.75 142.172 149.75L222.215 197.75C229.965 202.375 229.965 213.625 222.215 218.25L142.172 266.25C130.668 273.125 118.195 258.75 126.793 248.25L160.457 208L126.793 167.75ZM256 432C195.453 432 121.465 393.75 112.141 338.75C110.203 326.75 121.586 317.125 132.848 320.75C163.121 330.5 208.047 336 256 336S348.879 330.5 379.152 320.75C390.656 317.125 401.676 327 399.859 338.75C390.535 393.75 316.547 432 256 432Z" />
            <path d="M385.286 248.25L351.622 208L385.286 167.75C393.884 157.375 381.532 142.75 369.907 149.75L289.864 197.75C282.235 202.375 282.235 213.625 289.864 218.25L369.907 266.25C381.411 273.125 394.005 258.75 385.286 248.25ZM142.251 149.75C130.626 142.75 118.274 157.375 126.872 167.75L160.536 208L126.872 248.25C118.274 258.75 130.747 273.125 142.251 266.25L222.294 218.25C230.044 213.625 230.044 202.375 222.294 197.75L142.251 149.75Z" />
        </Icon>
    </>
}