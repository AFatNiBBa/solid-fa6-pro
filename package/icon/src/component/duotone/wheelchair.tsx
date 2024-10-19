
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wheelchair` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wheelchair?s=duotone wheelchair}
 * @preview ![wheelchair](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyMCAzNTJDMzIwIDQ0MC4zNjUgMjQ4LjM2NSA1MTIgMTYwIDUxMlMwIDQ0MC4zNjUgMCAzNTJTNzEuNjM1IDE5MiAxNjAgMTkyQzE2MC43MTMgMTkyIDE2MS4zNjkgMTkyLjE5OSAxNjIuMDggMTkyLjIwOUwxNzAuMzEyIDI0MS4wNDNDMTY2Ljg2MyAyNDAuNzIxIDE2My41MzEgMjQwIDE2MCAyNDBDOTguMjQyIDI0MCA0OCAyOTAuMjQyIDQ4IDM1MlM5OC4yNDIgNDY0IDE2MCA0NjRTMjcyIDQxMy43NTggMjcyIDM1MkgzMjBaTTI0MC4wMDQgNDhDMjQwLjAwNCAyMS40OTIgMjE4LjUxNCAwIDE5Mi4wMDQgMFMxNDQuMDA0IDIxLjQ5MiAxNDQuMDA0IDQ4UzE2NS40OTQgOTYgMTkyLjAwNCA5NlMyNDAuMDA0IDc0LjUwOCAyNDAuMDA0IDQ4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01MTAuMzQ0IDQyMS44NzVDNTA0Ljc1IDQwNS4xMjUgNDg2LjgxMyAzOTYuMDMxIDQ2OS44NzUgNDAxLjY1Nkw0NTAuNSA0MDguMDk0TDQwOC43OTkgMzA4LjEyNUM0MDMuOTM4IDI5NS45NjkgMzkyLjE2NiAyODggMzc5LjA3NCAyODhIMjgxLjI5NUwyNzAuODkxIDI0MEgzMzZDMzUzLjY4OCAyNDAgMzY4IDIyNS42ODggMzY4IDIwOFMzNTMuNjg4IDE3NiAzMzYgMTc2SDI1Ny4wMThMMjU1LjU1MSAxNjkuMjNDMjUxLjc3IDE0Mi45OCAyMjcuMjA3IDEyNC43NjIgMjAxLjIzOCAxMjguNDhDMTc0Ljk4OCAxMzIuMjMgMTU2LjczOCAxNTYuNTQzIDE2MC40ODggMTgyLjc5M0wxODQuMTY0IDMyMy4yMjdDMTg1LjgyIDMzOS41NjYgMTk5LjU3NiAzNTIgMjE2IDM1MkgzNTcuNDI0TDQwMi4yODEgNDU5Ljg3NUM0MDcuMjgxIDQ3Mi4zNDQgNDE5LjI1IDQ4MCA0MzIgNDgwQzQzNS4zNDQgNDgwIDQzOC43ODEgNDc5LjQ2OSA0NDIuMTI1IDQ3OC4zNDRMNDkwLjEyNSA0NjIuMzQ0QzUwNi44NzUgNDU2Ljc4MSA1MTUuOTM4IDQzOC42NTYgNTEwLjM0NCA0MjEuODc1WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Wheelchair(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M320 352C320 440.365 248.365 512 160 512S0 440.365 0 352S71.635 192 160 192C160.713 192 161.369 192.199 162.08 192.209L170.312 241.043C166.863 240.721 163.531 240 160 240C98.242 240 48 290.242 48 352S98.242 464 160 464S272 413.758 272 352H320ZM240.004 48C240.004 21.492 218.514 0 192.004 0S144.004 21.492 144.004 48S165.494 96 192.004 96S240.004 74.508 240.004 48Z" />
            <path d="M510.344 421.875C504.75 405.125 486.813 396.031 469.875 401.656L450.5 408.094L408.799 308.125C403.938 295.969 392.166 288 379.074 288H281.295L270.891 240H336C353.688 240 368 225.688 368 208S353.688 176 336 176H257.018L255.551 169.23C251.77 142.98 227.207 124.762 201.238 128.48C174.988 132.23 156.738 156.543 160.488 182.793L184.164 323.227C185.82 339.566 199.576 352 216 352H357.424L402.281 459.875C407.281 472.344 419.25 480 432 480C435.344 480 438.781 479.469 442.125 478.344L490.125 462.344C506.875 456.781 515.938 438.656 510.344 421.875Z" />
        </Icon>
    </>
}