
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-phone-hangup` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone-hangup?s=thin circle-phone-hangup}
 * @preview ![circle-phone-hangup](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NiA0ODAgMzIgMzc5LjUxNCAzMiAyNTZTMTMyLjQ4NiAzMiAyNTYgMzJTNDgwIDEzMi40ODYgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwWk00MjMuNDA4IDIzMS4wNzRDMzMxLjA5OCAxMzguNzY0IDE4MC45MDIgMTM4Ljc2NCA4OC41OTIgMjMxLjA3NEM4MC43NDggMjM4LjkxOCA3OS4zNzkgMjUwLjkzOSA4NS4yNjggMjYwLjI5N0wxMTIuNjU2IDMwNC4xMjdDMTE4Ljc0NCAzMTMuNzI5IDEzMC43ODcgMzE3Ljc3MSAxNDEuNTA0IDMxMy41OTZMMTk2LjM1OSAyOTEuNjQzQzIwNi4wNDkgMjg3Ljc0MiAyMTIuMDgyIDI3Ny43NTQgMjExLjAzMyAyNjcuMzc5TDIwOC4yMzYgMjM5LjE5NUMyMzkuMjczIDIyOS45MjYgMjcyLjc3MSAyMjkuOTI2IDMwMy44MyAyMzkuMjE3TDMwMS4wMjMgMjY3LjMwM0MyOTkuODk2IDI3Ny44MiAzMDUuOTczIDI4Ny44NTIgMzE1Ljc0IDI5MS42NzZMMzcwLjUyOSAzMTMuNTg0SDM3MC41NTFDMzgxLjE4IDMxNy44MDUgMzkzLjI4OSAzMTMuODUgMzk5LjMzMiAzMDQuMTZMNDI2Ljc0NCAyNjAuMzA5QzQzMi42MTEgMjUwLjkyOCA0MzEuMjQgMjM4LjkwOCA0MjMuNDA4IDIzMS4wNzRaTTQxMy4xNzYgMjUxLjgyMkwzODUuNzY2IDI5NS42NzZDMzgzLjgwOSAyOTguODAxIDM3OS45MSAzMDAuMDcyIDM3Ni40NzMgMjk4LjcxM0wzMjEuNjYyIDI3Ni44MDVDMzE4LjQ2OSAyNzUuNTMzIDMxNi41OSAyNzIuMzMgMzE2LjkzNCAyNjguOTU5TDMyMS4wMzEgMjI4LjA0N0wzMTUuMDIxIDIyNS45OTJDMjc2Ljk4IDIxMy4wMSAyMzUuMDc0IDIxMi45OTggMTk3LjA0NSAyMjUuOTY5TDE5MS4wMzUgMjI4LjAyNUwxOTUuMTExIDI2OC45ODJDMTk1LjQ1MyAyNzIuMzMgMTkzLjQ5OCAyNzUuNTQ1IDE5MC4zOTUgMjc2Ljc5M0wxMzUuNjI3IDI5OC43MDFDMTMyLjExMyAzMDAuMDcyIDEyOC4xNjggMjk4LjgwMSAxMjYuMjM0IDI5NS42NTJMOTguODI0IDI1MS44MDFDOTYuOTM0IDI0OC43ODUgOTcuMzc3IDI0NC45MTggOTkuOTA2IDI0Mi4zODlDMTg1Ljk3NSAxNTYuMzIgMzI2LjAyNSAxNTYuMzIgNDEyLjA5NCAyNDIuMzg5QzQxNC42MjMgMjQ0LjkxOCA0MTUuMDc2IDI0OC43OTUgNDEzLjE3NiAyNTEuODIyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CirclePhoneHangup(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM423.408 231.074C331.098 138.764 180.902 138.764 88.592 231.074C80.748 238.918 79.379 250.939 85.268 260.297L112.656 304.127C118.744 313.729 130.787 317.771 141.504 313.596L196.359 291.643C206.049 287.742 212.082 277.754 211.033 267.379L208.236 239.195C239.273 229.926 272.771 229.926 303.83 239.217L301.023 267.303C299.896 277.82 305.973 287.852 315.74 291.676L370.529 313.584H370.551C381.18 317.805 393.289 313.85 399.332 304.16L426.744 260.309C432.611 250.928 431.24 238.908 423.408 231.074ZM413.176 251.822L385.766 295.676C383.809 298.801 379.91 300.072 376.473 298.713L321.662 276.805C318.469 275.533 316.59 272.33 316.934 268.959L321.031 228.047L315.021 225.992C276.98 213.01 235.074 212.998 197.045 225.969L191.035 228.025L195.111 268.982C195.453 272.33 193.498 275.545 190.395 276.793L135.627 298.701C132.113 300.072 128.168 298.801 126.234 295.652L98.824 251.801C96.934 248.785 97.377 244.918 99.906 242.389C185.975 156.32 326.025 156.32 412.094 242.389C414.623 244.918 415.076 248.795 413.176 251.822Z" />
        </Icon>
    </>
}