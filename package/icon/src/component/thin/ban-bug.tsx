
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ban-bug` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ban-bug?s=thin ban-bug}
 * @preview ![ban-bug](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzcuNTY2IDIzMS44NDRDMzgxLjkxIDIzMC45ODQgMzg0LjcyMyAyMjYuNzY2IDM4My44NDggMjIyLjQzOEMzODMuMDA0IDIxOC4xMDkgMzc4LjkxIDIxNS4xNDEgMzc0LjQ0MSAyMTYuMTU2TDMyOCAyMjUuNDQ1VjIwMEMzMjggMTkxLjk5NCAzMjYuMzg3IDE4NC40MyAzMjMuOTc3IDE3Ny4yMzZMMzU1Ljk2OSAxNTguOTUzQzM1OS44MTMgMTU2Ljc1IDM2MS4xMjUgMTUxLjg1OSAzNTguOTM4IDE0OC4wMzFDMzU2Ljc1IDE0NC4xODggMzUxLjg0NCAxNDIuODc1IDM0OC4wMzEgMTQ1LjA0N0wzMTcuMjY2IDE2Mi42MjdDMzA0LjYxNyAxNDEuOTM5IDI4Mi4wMjMgMTI4IDI1NiAxMjhDMjMzLjM2NyAxMjggMjEzLjQyNiAxMzguNjUyIDIwMC4yMjcgMTU0Ljk3OUwyMTEuNTU5IDE2Ni4zMDlDMjIxLjc5NyAxNTIuODQ0IDIzNy44MiAxNDQgMjU2IDE0NEMyODYuODc5IDE0NCAzMTIgMTY5LjEyMSAzMTIgMjAwVjI2Ni43NUwzMzIuNzU4IDI4Ny41MDZMMzc0LjQ0MSAyOTUuODQ0QzM3NC45NzMgMjk1Ljk1MyAzNzUuNTA0IDI5NiAzNzYuMDA0IDI5NkMzNzkuNzU0IDI5NiAzODMuMDk4IDI5My4zNzUgMzgzLjg0OCAyODkuNTYyQzM4NC43MjMgMjg1LjIzNCAzODEuOTEgMjgxLjAxNiAzNzcuNTY2IDI4MC4xNTZMMzI4IDI3MC4yNDJWMjQxLjc1OEwzNzcuNTY2IDIzMS44NDRaTTEzNC40MzQgMjgwLjE1NkMxMzAuMDkgMjgxLjAxNiAxMjcuMjc3IDI4NS4yMzQgMTI4LjE1MiAyODkuNTYyQzEyOC45MDIgMjkzLjM3NSAxMzIuMjQ2IDI5NiAxMzUuOTk2IDI5NkMxMzYuNDk2IDI5NiAxMzcuMDI3IDI5NS45NTMgMTM3LjU1OSAyOTUuODQ0TDE4NCAyODYuNTU1VjMxMkMxODQgMzIwLjAwNiAxODUuNjEzIDMyNy41NyAxODguMDIzIDMzNC43NjRMMTU2LjAzMSAzNTMuMDQ3QzE1Mi4xODcgMzU1LjI1IDE1MC44NzUgMzYwLjE0MSAxNTMuMDYyIDM2My45NjlDMTU0LjUzMSAzNjYuNTQ3IDE1Ny4yMTkgMzY4IDE2MCAzNjhDMTYxLjM0NCAzNjggMTYyLjcxOSAzNjcuNjU2IDE2My45NjkgMzY2Ljk1M0wxOTQuNzM0IDM0OS4zNzNDMjA3LjM4MyAzNzAuMDYxIDIyOS45NzcgMzg0IDI1NiAzODRDMjc4LjYzMyAzODQgMjk4LjU3NCAzNzMuMzQ4IDMxMS43NzMgMzU3LjAyMUwzMDAuNDQxIDM0NS42OTFDMjkwLjIwMyAzNTkuMTU2IDI3NC4xOCAzNjggMjU2IDM2OEMyMjUuMTIxIDM2OCAyMDAgMzQyLjg3OSAyMDAgMzEyVjI0NS4yNUwxNzkuMjQyIDIyNC40OTRMMTM3LjU1OSAyMTYuMTU2QzEzMi45NjUgMjE1LjEwOSAxMjguOTk2IDIxOC4xMDkgMTI4LjE1MiAyMjIuNDM4QzEyNy4yNzcgMjI2Ljc2NiAxMzAuMDkgMjMwLjk4NCAxMzQuNDM0IDIzMS44NDRMMTg0IDI0MS43NThWMjcwLjI0MkwxMzQuNDM0IDI4MC4xNTZaTTI1NiAxNkMxMjMuNDUzIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTMgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ3IDE2IDI1NiAxNlpNMjU2IDQ4MEMxMzIuNDg0IDQ4MCAzMiAzNzkuNTE0IDMyIDI1NkMzMiAxOTcuMTE3IDU1LjAxNiAxNDMuNjMxIDkyLjI5NyAxMDMuNjA3TDQwOC4zOTEgNDE5LjcwNUMzNjguMzY3IDQ1Ni45ODggMzE0Ljg4MyA0ODAgMjU2IDQ4MFpNNDE5LjcwMyA0MDguMzkzTDEwMy42MDkgOTIuMjk1QzE0My42MzMgNTUuMDEyIDE5Ny4xMTcgMzIgMjU2IDMyQzM3OS41MTYgMzIgNDgwIDEzMi40ODYgNDgwIDI1NkM0ODAgMzE0Ljg4MyA0NTYuOTg0IDM2OC4zNjkgNDE5LjcwMyA0MDguMzkzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BanBug(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M377.566 231.844C381.91 230.984 384.723 226.766 383.848 222.438C383.004 218.109 378.91 215.141 374.441 216.156L328 225.445V200C328 191.994 326.387 184.43 323.977 177.236L355.969 158.953C359.813 156.75 361.125 151.859 358.938 148.031C356.75 144.188 351.844 142.875 348.031 145.047L317.266 162.627C304.617 141.939 282.023 128 256 128C233.367 128 213.426 138.652 200.227 154.979L211.559 166.309C221.797 152.844 237.82 144 256 144C286.879 144 312 169.121 312 200V266.75L332.758 287.506L374.441 295.844C374.973 295.953 375.504 296 376.004 296C379.754 296 383.098 293.375 383.848 289.562C384.723 285.234 381.91 281.016 377.566 280.156L328 270.242V241.758L377.566 231.844ZM134.434 280.156C130.09 281.016 127.277 285.234 128.152 289.562C128.902 293.375 132.246 296 135.996 296C136.496 296 137.027 295.953 137.559 295.844L184 286.555V312C184 320.006 185.613 327.57 188.023 334.764L156.031 353.047C152.187 355.25 150.875 360.141 153.062 363.969C154.531 366.547 157.219 368 160 368C161.344 368 162.719 367.656 163.969 366.953L194.734 349.373C207.383 370.061 229.977 384 256 384C278.633 384 298.574 373.348 311.773 357.021L300.441 345.691C290.203 359.156 274.18 368 256 368C225.121 368 200 342.879 200 312V245.25L179.242 224.494L137.559 216.156C132.965 215.109 128.996 218.109 128.152 222.438C127.277 226.766 130.09 230.984 134.434 231.844L184 241.758V270.242L134.434 280.156ZM256 16C123.453 16 16 123.451 16 256S123.453 496 256 496S496 388.549 496 256S388.547 16 256 16ZM256 480C132.484 480 32 379.514 32 256C32 197.117 55.016 143.631 92.297 103.607L408.391 419.705C368.367 456.988 314.883 480 256 480ZM419.703 408.393L103.609 92.295C143.633 55.012 197.117 32 256 32C379.516 32 480 132.486 480 256C480 314.883 456.984 368.369 419.703 408.393Z" />
        </Icon>
    </>
}