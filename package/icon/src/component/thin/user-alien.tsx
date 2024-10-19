
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-alien` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-alien?s=thin user-alien}
 * @preview ![user-alien](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTIgMjU2SDI3NkMzMDkuMTI1IDI1NiAzMzYgMjI5LjEyNSAzMzYgMTk2VjE4OEMzMzYgMTgxLjM3NSAzMzAuNjI1IDE3NiAzMjQgMTc2SDMwMEMyNjYuODc1IDE3NiAyNDAgMjAyLjg3NSAyNDAgMjM2VjI0NEMyNDAgMjUwLjYyNSAyNDUuMzc1IDI1NiAyNTIgMjU2Wk0yNTYgMjM2QzI1NiAyMTEuNzM4IDI3NS43MzggMTkyIDMwMCAxOTJIMzIwVjE5NkMzMjAgMjIwLjI2MiAzMDAuMjYyIDI0MCAyNzYgMjQwSDI1NlYyMzZaTTE5NiAyNTZDMjAyLjYyNSAyNTYgMjA4IDI1MC42MjUgMjA4IDI0NFYyMzZDMjA4IDIwMi44NzUgMTgxLjEyNSAxNzYgMTQ4IDE3NkgxMjRDMTE3LjM3NSAxNzYgMTEyIDE4MS4zNzUgMTEyIDE4OFYxOTZDMTEyIDIyOS4xMjUgMTM4Ljg3NSAyNTYgMTcyIDI1NkgxOTZaTTEyOCAxOTZWMTkySDE0OEMxNzIuMjYyIDE5MiAxOTIgMjExLjczOCAxOTIgMjM2VjI0MEgxNzJDMTQ3LjczOCAyNDAgMTI4IDIyMC4yNjIgMTI4IDE5NlpNMjA2LjcyNyAzNzguMTI1QzIxMS44NDIgMzgyLjA0MSAyMTcuOTIyIDM4My45OTggMjI0IDM4My45OThDMjMwLjA4IDM4My45OTggMjM2LjE2IDM4Mi4wNDEgMjQxLjI3MyAzNzguMTI1QzI4Mi42MzcgMzQ2LjMyIDM4NCAyNTkuNTY2IDM4NCAxNzMuNjI5QzM4NCA2NS44MjggMzEyLjI5NSAwIDIyNCAwQzEzNS41OTIgMCA2NCA2NS44MjggNjQgMTczLjYyOUM2NCAyNTkuNTY2IDE2NS4zNjMgMzQ2LjMyIDIwNi43MjcgMzc4LjEyNVpNMjI0IDE2QzMwOC43ODUgMTYgMzY4IDgwLjgxOCAzNjggMTczLjYyOUMzNjggMjU0LjIzNiAyNjMuNTM3IDM0MC44MjIgMjMxLjU0NyAzNjUuNDIyQzIyOS4zNDQgMzY3LjEwNyAyMjYuNzM0IDM2Ny45OTggMjI0IDM2Ny45OThTMjE4LjY1NiAzNjcuMTA3IDIxNi40OCAzNjUuNDQxQzE4NC40NjMgMzQwLjgyMiA4MCAyNTQuMjM2IDgwIDE3My42MjlDODAgODAuODE4IDEzOS4yMTUgMTYgMjI0IDE2Wk0zMTYuNTE2IDM1MkMzMTIuMzI4IDM1Mi4zNDQgMzA4LjQwNiAzNTUuMzEyIDMwOC4yMzQgMzU5LjcxOUMzMDguMDc4IDM2NC4xMjUgMzExLjUzMSAzNjcuODQ0IDMxNS45NTMgMzY4QzM4MS4wMzEgMzcwLjMxMiA0MzIgNDE5LjQ2OSA0MzIgNDc5LjkzOEM0MzIgNDg4Ljc4MSA0MjQuMDQ3IDQ5NiA0MTQuMjgxIDQ5NkgzMy43MTlDMjMuOTUzIDQ5NiAxNiA0ODguNzgxIDE2IDQ3OS45MzhDMTYgNDE5LjQ2OSA2Ni45NjkgMzcwLjMxMiAxMzIuMDQ3IDM2OEMxMzYuNDY5IDM2Ny44NDQgMTM5LjkyMiAzNjQuMTI1IDEzOS43NjYgMzU5LjcxOUMxMzkuNTk0IDM1NS4zMTIgMTM1LjM3NSAzNTEuNzUgMTMxLjQ4NCAzNTJDNTcuNzUgMzU0LjYyNSAwIDQxMC44MTIgMCA0NzkuOTM4QzAgNDk3LjYyNSAxNS4xMjUgNTEyIDMzLjcxOSA1MTJINDE0LjI4MUM0MzIuODc1IDUxMiA0NDggNDk3LjYyNSA0NDggNDc5LjkzOEM0NDggNDEwLjgxMiAzOTAuMjUgMzU0LjYyNSAzMTYuNTE2IDM1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UserAlien(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M252 256H276C309.125 256 336 229.125 336 196V188C336 181.375 330.625 176 324 176H300C266.875 176 240 202.875 240 236V244C240 250.625 245.375 256 252 256ZM256 236C256 211.738 275.738 192 300 192H320V196C320 220.262 300.262 240 276 240H256V236ZM196 256C202.625 256 208 250.625 208 244V236C208 202.875 181.125 176 148 176H124C117.375 176 112 181.375 112 188V196C112 229.125 138.875 256 172 256H196ZM128 196V192H148C172.262 192 192 211.738 192 236V240H172C147.738 240 128 220.262 128 196ZM206.727 378.125C211.842 382.041 217.922 383.998 224 383.998C230.08 383.998 236.16 382.041 241.273 378.125C282.637 346.32 384 259.566 384 173.629C384 65.828 312.295 0 224 0C135.592 0 64 65.828 64 173.629C64 259.566 165.363 346.32 206.727 378.125ZM224 16C308.785 16 368 80.818 368 173.629C368 254.236 263.537 340.822 231.547 365.422C229.344 367.107 226.734 367.998 224 367.998S218.656 367.107 216.48 365.441C184.463 340.822 80 254.236 80 173.629C80 80.818 139.215 16 224 16ZM316.516 352C312.328 352.344 308.406 355.312 308.234 359.719C308.078 364.125 311.531 367.844 315.953 368C381.031 370.312 432 419.469 432 479.938C432 488.781 424.047 496 414.281 496H33.719C23.953 496 16 488.781 16 479.938C16 419.469 66.969 370.312 132.047 368C136.469 367.844 139.922 364.125 139.766 359.719C139.594 355.312 135.375 351.75 131.484 352C57.75 354.625 0 410.812 0 479.938C0 497.625 15.125 512 33.719 512H414.281C432.875 512 448 497.625 448 479.938C448 410.812 390.25 354.625 316.516 352Z" />
        </Icon>
    </>
}