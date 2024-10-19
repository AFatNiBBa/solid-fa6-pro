
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `squirrel` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/squirrel?s=duotone squirrel}
 * @preview ![squirrel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4Ny45OTIgMjg4LjA3NkwyMTYuMDQxIDUwNC4zNDZDMTQ5LjExNyA0ODQuNzg1IDk3LjA4MiA0MjYuNzExIDk2LjAyIDM1NC42NzZDOTUuNjQ1IDMyOS4yMjEgMTAxLjc1NiAzMDUuNTIzIDExMi4wMjcgMjg0LjE1OEM0Ny45MzkgMjY5LjU3OCAwIDIxMi41MDQgMCAxNDRDMCA2NC40NzEgNjQuNDY5IDAgMTQzLjk5NiAwUzI4Ny45OTIgNjQuNDcxIDI4Ny45OTIgMTQ0VjI4OC4wNzZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ2My44NTcgNDQ4SDQ0OC44NTdDNDY3LjEwNyA0MjkuNjI1IDQ3OS44NTcgNDA1Ljg3NSA0NzkuODU3IDM4NEM0NzkuODU3IDM1Ny41IDQ1Ny43MzIgMzMxLjI1IDQzMS45ODIgMzIyLjg3NVYyMjRINDc5Ljg1N0M1MDAuMjE3IDIyNCA1MTUuNDc3IDIwNS4xNSA1MTEuMjUyIDE4NS4yMzJDNTAwLjkwNCAxMzYuNDM0IDQ2Ni43NyA5NiA0MTUuODU5IDk2VjY0QzM2Ny44NTkgNjQgMzQxLjYxMSAxMjYuNzUgMzI2LjQ4NiAxNzIuMjVMMjE2IDUwNC4zNDZDMjMxLjUwNCA1MDguODc3IDI0Ny41NTEgNTEyIDI2NC4yMzggNTEySDQ5NS44NTVDNTA0LjYwNSA1MTIgNTExLjg1NSA1MDQuODc1IDUxMS44NTUgNDk2QzUxMS44NTUgNDY5LjYgNDkwLjI1OCA0NDggNDYzLjg1NyA0NDhaTTQxNS44NTkgMTYwQzQxNS44NTkgMTUxLjEyNSA0MjIuOTgyIDE0NCA0MzEuODU3IDE0NFM0NDcuODU3IDE1MS4xMjUgNDQ3Ljg1NyAxNjBTNDQwLjczMiAxNzYgNDMxLjg1NyAxNzZTNDE1Ljg1OSAxNjguODc1IDQxNS44NTkgMTYwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Squirrel(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M287.992 288.076L216.041 504.346C149.117 484.785 97.082 426.711 96.02 354.676C95.645 329.221 101.756 305.523 112.027 284.158C47.939 269.578 0 212.504 0 144C0 64.471 64.469 0 143.996 0S287.992 64.471 287.992 144V288.076Z" />
            <path d="M463.857 448H448.857C467.107 429.625 479.857 405.875 479.857 384C479.857 357.5 457.732 331.25 431.982 322.875V224H479.857C500.217 224 515.477 205.15 511.252 185.232C500.904 136.434 466.77 96 415.859 96V64C367.859 64 341.611 126.75 326.486 172.25L216 504.346C231.504 508.877 247.551 512 264.238 512H495.855C504.605 512 511.855 504.875 511.855 496C511.855 469.6 490.258 448 463.857 448ZM415.859 160C415.859 151.125 422.982 144 431.857 144S447.857 151.125 447.857 160S440.732 176 431.857 176S415.859 168.875 415.859 160Z" />
        </Icon>
    </>
}