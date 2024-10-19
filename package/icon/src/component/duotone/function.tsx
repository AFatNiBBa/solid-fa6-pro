
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `function` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/function?s=duotone function}
 * @preview ![function](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMxNy44NzUgMTQyLjc1QzMwMy45NjkgMTMxLjg3NSAyODMuODQ0IDEzNC40MDYgMjcyLjk2OSAxNDguMzQ0QzI0MS44NDQgMTg4LjMxMiAyMjQgMjUwLjg3NSAyMjQgMzIwUzI0MS44NDQgNDUxLjY4OCAyNzIuOTY5IDQ5MS42NTZDMjc5LjI4MSA0OTkuNzUgMjg4LjcwMyA1MDQgMjk4LjIzNCA1MDRDMzA1LjEwOSA1MDQgMzEyLjAzMSA1MDEuODEyIDMxNy44NzUgNDk3LjI1QzMzMS44MjggNDg2LjM3NSAzMzQuMzI4IDQ2Ni4yODEgMzIzLjQ2OSA0NTIuMzQ0QzMwMS41OTQgNDI0LjI1IDI4OCAzNzMuNTMxIDI4OCAzMjBTMzAxLjU5NCAyMTUuNzUgMzIzLjQ2OSAxODcuNjU2QzMzNC4zMjggMTczLjcxOSAzMzEuODI4IDE1My42MjUgMzE3Ljg3NSAxNDIuNzVaTTU5MS4wMzEgMTQ4LjM0NEM1ODAuMTQxIDEzNC4zNzUgNTYwLjA0NyAxMzEuODQ0IDU0Ni4xMjUgMTQyLjc1QzUzMi4xNzIgMTUzLjYyNSA1MjkuNjcyIDE3My43MTkgNTQwLjUzMSAxODcuNjU2QzU2Mi40MDYgMjE1Ljc1IDU3NiAyNjYuNDY5IDU3NiAzMjBTNTYyLjQwNiA0MjQuMjUgNTQwLjUzMSA0NTIuMzQ0QzUyOS42NzIgNDY2LjI4MSA1MzIuMTcyIDQ4Ni4zNzUgNTQ2LjEyNSA0OTcuMjVDNTUxLjk2OSA1MDEuODEyIDU1OC44OTEgNTA0IDU2NS43NjYgNTA0QzU3NS4yODEgNTA0IDU4NC43MTkgNDk5Ljc1IDU5MS4wMzEgNDkxLjY1NkM2MjIuMTU2IDQ1MS42ODggNjQwIDM4OS4xMjUgNjQwIDMyMFM2MjIuMTU2IDE4OC4zMTIgNTkxLjAzMSAxNDguMzQ0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xODQgMEgxNTJDOTkuMDYyIDAgNTYgNDMuMDYyIDU2IDk2VjE2OEg0MEMxNy45MDYgMTY4IDAgMTg1LjkwNiAwIDIwOFMxNy45MDYgMjQ4IDQwIDI0OEg1NlYzODRDNTYgMzkyLjgxMiA0OC44MjggNDAwIDQwIDQwMEMxNy45MDYgNDAwIDAgNDE3LjkwNiAwIDQ0MFMxNy45MDYgNDgwIDQwIDQ4MEM5Mi45MzggNDgwIDEzNiA0MzYuOTM4IDEzNiAzODRWMjQ4SDE1MkMxNzQuMDk0IDI0OCAxOTIgMjMwLjA5NCAxOTIgMjA4UzE3NC4wOTQgMTY4IDE1MiAxNjhIMTM2Vjk2QzEzNiA4Ny4xODggMTQzLjE3MiA4MCAxNTIgODBIMTg0QzIwNi4wOTQgODAgMjI0IDYyLjA5NCAyMjQgNDBTMjA2LjA5NCAwIDE4NCAwWk00NzcuMjUgMzIwTDUxMC42MjUgMjg2LjYyNUM1MjMuMTI1IDI3NC4xMjUgNTIzLjEyNSAyNTMuODc1IDUxMC42MjUgMjQxLjM3NVM0NzcuODc1IDIyOC44NzUgNDY1LjM3NSAyNDEuMzc1TDQzMiAyNzQuNzVMMzk4LjYyNSAyNDEuMzc1QzM4Ni4xMjUgMjI4Ljg3NSAzNjUuODc1IDIyOC44NzUgMzUzLjM3NSAyNDEuMzc1UzM0MC44NzUgMjc0LjEyNSAzNTMuMzc1IDI4Ni42MjVMMzg2Ljc1IDMyMEwzNTMuMzc1IDM1My4zNzVDMzQwLjg3NSAzNjUuODc1IDM0MC44NzUgMzg2LjEyNSAzNTMuMzc1IDM5OC42MjVDMzU5LjYyNSA0MDQuODc1IDM2Ny44MTIgNDA4IDM3NiA0MDhTMzkyLjM3NSA0MDQuODc1IDM5OC42MjUgMzk4LjYyNUw0MzIgMzY1LjI1TDQ2NS4zNzUgMzk4LjYyNUM0NzEuNjI1IDQwNC44NzUgNDc5LjgxMiA0MDggNDg4IDQwOFM1MDQuMzc1IDQwNC44NzUgNTEwLjYyNSAzOTguNjI1QzUyMy4xMjUgMzg2LjEyNSA1MjMuMTI1IDM2NS44NzUgNTEwLjYyNSAzNTMuMzc1TDQ3Ny4yNSAzMjBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Function(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M317.875 142.75C303.969 131.875 283.844 134.406 272.969 148.344C241.844 188.312 224 250.875 224 320S241.844 451.688 272.969 491.656C279.281 499.75 288.703 504 298.234 504C305.109 504 312.031 501.812 317.875 497.25C331.828 486.375 334.328 466.281 323.469 452.344C301.594 424.25 288 373.531 288 320S301.594 215.75 323.469 187.656C334.328 173.719 331.828 153.625 317.875 142.75ZM591.031 148.344C580.141 134.375 560.047 131.844 546.125 142.75C532.172 153.625 529.672 173.719 540.531 187.656C562.406 215.75 576 266.469 576 320S562.406 424.25 540.531 452.344C529.672 466.281 532.172 486.375 546.125 497.25C551.969 501.812 558.891 504 565.766 504C575.281 504 584.719 499.75 591.031 491.656C622.156 451.688 640 389.125 640 320S622.156 188.312 591.031 148.344Z" />
            <path d="M184 0H152C99.062 0 56 43.062 56 96V168H40C17.906 168 0 185.906 0 208S17.906 248 40 248H56V384C56 392.812 48.828 400 40 400C17.906 400 0 417.906 0 440S17.906 480 40 480C92.938 480 136 436.938 136 384V248H152C174.094 248 192 230.094 192 208S174.094 168 152 168H136V96C136 87.188 143.172 80 152 80H184C206.094 80 224 62.094 224 40S206.094 0 184 0ZM477.25 320L510.625 286.625C523.125 274.125 523.125 253.875 510.625 241.375S477.875 228.875 465.375 241.375L432 274.75L398.625 241.375C386.125 228.875 365.875 228.875 353.375 241.375S340.875 274.125 353.375 286.625L386.75 320L353.375 353.375C340.875 365.875 340.875 386.125 353.375 398.625C359.625 404.875 367.812 408 376 408S392.375 404.875 398.625 398.625L432 365.25L465.375 398.625C471.625 404.875 479.812 408 488 408S504.375 404.875 510.625 398.625C523.125 386.125 523.125 365.875 510.625 353.375L477.25 320Z" />
        </Icon>
    </>
}