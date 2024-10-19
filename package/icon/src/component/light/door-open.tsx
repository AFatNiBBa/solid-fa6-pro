
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `door-open` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/door-open?s=light door-open}
 * @preview ![door-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMzIgMjI0LjAwNEMyMTguNzQ2IDIyNC4wMDQgMjA4IDIzOC4zMyAyMDggMjU2LjAwMlMyMTguNzQ2IDI4OC4wMDIgMjMyIDI4OC4wMDJTMjU2IDI3My42NzQgMjU2IDI1Ni4wMDJTMjQ1LjI1NCAyMjQuMDA0IDIzMiAyMjQuMDA0Wk0yNjAuMzc1IDEuNDQzTDEwMC4zNzUgNDEuNDQzQzc4Ljk5OCA0Ni43ODcgNjQgNjUuOTk2IDY0IDg4LjAzMVY0ODBIMTZDNy4xNjQgNDgwIDAgNDg3LjE2MiAwIDQ5NkMwIDUwNC44MzYgNy4xNjQgNTEyIDE2IDUxMkgyODhDMzA1LjY3NCA1MTIgMzIwIDQ5Ny42NzIgMzIwIDQ4MFY0OS4xNDhDMzIwIDM5LjAwNCAzMTcuMzg5IDI4LjgwNSAzMTEuNDc3IDIwLjU1OUMyOTkuMzkzIDMuNzA3IDI3OS4yNjQgLTMuMjc5IDI2MC4zNzUgMS40NDNaTTI4OCA0ODBIOTZWODguMDM1Qzk2IDgwLjY2MiAxMDEgNzQuMjg3IDEwOC4xMjUgNzIuNTA2TDI2OC4xMjUgMzIuNTA2QzI3Mi44NzUgMzEuMjI1IDI3Ny45MzggMzIuMzgxIDI4MS44NDQgMzUuNDEyQzI4NS43NSAzOC40NzUgMjg4IDQzLjA2OCAyODggNDguMDM3VjQ4MFpNNTYwIDQ4MEg1MTJWMTQ0LjAwNEM1MTIgOTkuODIyIDQ3Ni4xODQgNjQuMDA2IDQzMi4wMDIgNjQuMDA2SDM2OEMzNTkuMTY0IDY0LjAwNiAzNTIgNzEuMTY4IDM1MiA4MC4wMDRWODAuMDA2QzM1MiA4OC44NDIgMzU5LjE2NCA5Ni4wMDQgMzY4IDk2LjAwNEg0MzJDNDU4LjUxIDk2LjAwNCA0ODAgMTE3LjQ5NCA0ODAgMTQ0LjAwNFY0ODBDNDgwIDQ5Ny42NzIgNDk0LjMyNiA1MTIgNTEyIDUxMkg1NjBDNTY4LjgzNiA1MTIgNTc2IDUwNC44MzYgNTc2IDQ5NkM1NzYgNDg3LjE2MiA1NjguODM2IDQ4MCA1NjAgNDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DoorOpen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M232 224.004C218.746 224.004 208 238.33 208 256.002S218.746 288.002 232 288.002S256 273.674 256 256.002S245.254 224.004 232 224.004ZM260.375 1.443L100.375 41.443C78.998 46.787 64 65.996 64 88.031V480H16C7.164 480 0 487.162 0 496C0 504.836 7.164 512 16 512H288C305.674 512 320 497.672 320 480V49.148C320 39.004 317.389 28.805 311.477 20.559C299.393 3.707 279.264 -3.279 260.375 1.443ZM288 480H96V88.035C96 80.662 101 74.287 108.125 72.506L268.125 32.506C272.875 31.225 277.938 32.381 281.844 35.412C285.75 38.475 288 43.068 288 48.037V480ZM560 480H512V144.004C512 99.822 476.184 64.006 432.002 64.006H368C359.164 64.006 352 71.168 352 80.004V80.006C352 88.842 359.164 96.004 368 96.004H432C458.51 96.004 480 117.494 480 144.004V480C480 497.672 494.326 512 512 512H560C568.836 512 576 504.836 576 496C576 487.162 568.836 480 560 480Z" />
        </Icon>
    </>
}