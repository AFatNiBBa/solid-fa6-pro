
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wheelchair` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wheelchair?s=solid wheelchair}
 * @preview ![wheelchair](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTAuMzQ3IDQyMS44NzVDNTA0Ljc1MyA0MDUuMTI1IDQ4Ni44MTUgMzk2LjAzMSA0NjkuODc4IDQwMS42NTZMNDUwLjUwMyA0MDguMDk0TDQwOC44MDEgMzA4LjEyNUM0MDMuOTQgMjk1Ljk2OSAzOTIuMTY4IDI4OCAzNzkuMDc2IDI4OEgyODEuMjk3TDI3MC44OTIgMjQwSDMzNi4wMDJDMzUzLjY5IDI0MCAzNjguMDAyIDIyNS42ODggMzY4LjAwMiAyMDhTMzUzLjY5IDE3NiAzMzYuMDAyIDE3NkgyNTcuMDE5TDI1NS41NTIgMTY5LjIzQzI1MS43NzEgMTQyLjk4IDIyNy4yMDggMTI0Ljc2MiAyMDEuMjM5IDEyOC40OEMxNzQuOTg5IDEzMi4yMyAxNTYuNzM5IDE1Ni41NDMgMTYwLjQ4OSAxODIuNzkzTDE4NC4xNjUgMzIzLjIyN0MxODUuODIxIDMzOS41NjYgMTk5LjU3NyAzNTIgMjE2LjAwMSAzNTJIMzU3LjQyNkw0MDIuMjg0IDQ1OS44NzVDNDA3LjI4NCA0NzIuMzQ0IDQxOS4yNTIgNDgwIDQzMi4wMDMgNDgwQzQzNS4zNDYgNDgwIDQzOC43ODQgNDc5LjQ2OSA0NDIuMTI4IDQ3OC4zNDRMNDkwLjEyOCA0NjIuMzQ0QzUwNi44NzggNDU2Ljc4MSA1MTUuOTQgNDM4LjY1NiA1MTAuMzQ3IDQyMS44NzVaTTE2MC4wMDEgNDY0Qzk4LjI0MyA0NjQgNDggNDEzLjc1OCA0OCAzNTJDNDggMjk3Ljc1NCA4Ni43OCAyNTIuNDUzIDEzOC4wNjMgMjQyLjIxOUwxMzAuMTA4IDE5NS4wMTZDNTYuMDYzIDIwOS4wMzkgMCAyNzMuODc1IDAgMzUyQzAgNDQwLjM2NyA3MS42MzUgNTEyIDE2MC4wMDEgNTEyQzIzNy40MDYgNTEyIDMwMS45NDkgNDU3LjAzMSAzMTYuNzc3IDM4NEgyNjYuNzgxQzI1Mi45MSA0MzAuMTA1IDIxMC41NjYgNDY0IDE2MC4wMDEgNDY0Wk0xOTIuMDAxIDk2QzIxOC41MTEgOTYgMjQwLjAwMSA3NC41MDggMjQwLjAwMSA0OFMyMTguNTExIDAgMTkyLjAwMSAwUzE0NC4wMDEgMjEuNDkyIDE0NC4wMDEgNDhTMTY1LjQ5MSA5NiAxOTIuMDAxIDk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Wheelchair(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M510.347 421.875C504.753 405.125 486.815 396.031 469.878 401.656L450.503 408.094L408.801 308.125C403.94 295.969 392.168 288 379.076 288H281.297L270.892 240H336.002C353.69 240 368.002 225.688 368.002 208S353.69 176 336.002 176H257.019L255.552 169.23C251.771 142.98 227.208 124.762 201.239 128.48C174.989 132.23 156.739 156.543 160.489 182.793L184.165 323.227C185.821 339.566 199.577 352 216.001 352H357.426L402.284 459.875C407.284 472.344 419.252 480 432.003 480C435.346 480 438.784 479.469 442.128 478.344L490.128 462.344C506.878 456.781 515.94 438.656 510.347 421.875ZM160.001 464C98.243 464 48 413.758 48 352C48 297.754 86.78 252.453 138.063 242.219L130.108 195.016C56.063 209.039 0 273.875 0 352C0 440.367 71.635 512 160.001 512C237.406 512 301.949 457.031 316.777 384H266.781C252.91 430.105 210.566 464 160.001 464ZM192.001 96C218.511 96 240.001 74.508 240.001 48S218.511 0 192.001 0S144.001 21.492 144.001 48S165.491 96 192.001 96Z" />
        </Icon>
    </>
}