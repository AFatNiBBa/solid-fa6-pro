
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `list-ol` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/list-ol?s=duotone list-ol}
 * @preview ![list-ol](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4MCAyMjRIMjI0QzIwNi4zMjYgMjI0IDE5MiAyMzguMzI2IDE5MiAyNTZTMjA2LjMyNiAyODggMjI0IDI4OEg0ODBDNDk3LjY3NCAyODggNTEyIDI3My42NzQgNTEyIDI1NlM0OTcuNjc0IDIyNCA0ODAgMjI0Wk0yMjQgMTI4SDQ4MEM0OTcuNjc0IDEyOCA1MTIgMTEzLjY3NCA1MTIgOTZTNDk3LjY3NCA2NCA0ODAgNjRIMjI0QzIwNi4zMjYgNjQgMTkyIDc4LjMyNiAxOTIgOTZTMjA2LjMyNiAxMjggMjI0IDEyOFpNNDgwIDM4NEgyMjRDMjA2LjMyNiAzODQgMTkyIDM5OC4zMjYgMTkyIDQxNlMyMDYuMzI2IDQ0OCAyMjQgNDQ4SDQ4MEM0OTcuNjc0IDQ0OCA1MTIgNDMzLjY3NCA1MTIgNDE2UzQ5Ny42NzQgMzg0IDQ4MCAzODRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQwLjAwMSAyMjRIMTIwLjAwMUMxMzMuMjUxIDIyNCAxNDQuMDAxIDIxMy4yNSAxNDQuMDAxIDE5OS45OThTMTMzLjI1MSAxNzUuOTk2IDEyMC4wMDEgMTc1Ljk5NkgxMDQuMDAxVjU1Ljk4NkMxMDQuMDAxIDQ3LjM5MyA5OS40MDcgMzkuNDUzIDkxLjkzOCAzNS4xNzJDODQuNTAxIDMwLjkwNiA3NS4yODIgMzAuOTUzIDY3LjkwNyAzNS4yNUwzNS45MDcgNTMuOTI0QzI0LjQ2OSA2MC42MTEgMjAuNTk0IDc1LjMwMSAyNy4yODIgODYuNzU0QzMzLjEyNiA5Ni44NSA0NS4zMTMgMTAxLjEgNTYuMDAxIDk3LjI4N1YxNzUuOTk2SDQwLjAwMUMyNi43NTEgMTc1Ljk5NiAxNi4wMDEgMTg2Ljc0NiAxNi4wMDEgMTk5Ljk5OFMyNi43NTEgMjI0IDQwLjAwMSAyMjRaTTEzNi4zMjMgNDMyLjAwMkg4Ni44OEwxMjMuMjg0IDM5OS41MkMxNTMuMiAzNzMuNjkzIDE1Ni44MTkgMzI4LjE2NCAxMzEuMzMzIDI5OC4wMjNDMTE4LjU3MyAyODIuOTYzIDEwMC42NjkgMjczLjgwNyA4MC44OTEgMjcyLjI0NEM2MS4yNyAyNzAuNjUgNDEuOTI4IDI3Ni45MzIgMjYuOTI0IDI4OS44NjdMMTQuNDE3IDMwMC42NjRDNC4zNzIgMzA5LjMyIDMuMjQ5IDMyNC40NzcgMTEuODg5IDMzNC41MjFDMjAuNTYxIDM0NC41ODQgMzUuNjkgMzQ1LjY2MiA0NS42NzIgMzM3LjAzN0w1OC4xODIgMzI2LjI0MkM2My40MjIgMzIxLjcxMSA3MC4yODYgMzE5LjU3IDc3LjE0NyAzMjAuMDg2Qzg0LjA3MyAzMjAuNjMzIDkwLjM0MiAzMjMuODIgOTQuNzcyIDMyOS4wNTVDMTAzLjQ3NSAzMzkuMzM0IDEwMi4yNTggMzU0LjMxOCA5MS43MTUgMzYzLjQxMkw4LjAyIDQzOC4wOEMwLjU5NiA0NDQuNzA1IC0xLjk2MiA0NTUuMjM2IDEuNTYzIDQ2NC41NDdDNS4xMiA0NzMuODQ0IDE0LjAxIDQ4MCAyMy45NjIgNDgwSDEzNi4zMjNDMTQ5LjU0OSA0ODAgMTYwLjI4IDQ2OS4yNSAxNjAuMjggNDU2LjAwMkMxNjAuMjggNDQyLjc1MiAxNDkuNTQ5IDQzMi4wMDIgMTM2LjMyMyA0MzIuMDAyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ListOl(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M480 224H224C206.326 224 192 238.326 192 256S206.326 288 224 288H480C497.674 288 512 273.674 512 256S497.674 224 480 224ZM224 128H480C497.674 128 512 113.674 512 96S497.674 64 480 64H224C206.326 64 192 78.326 192 96S206.326 128 224 128ZM480 384H224C206.326 384 192 398.326 192 416S206.326 448 224 448H480C497.674 448 512 433.674 512 416S497.674 384 480 384Z" />
            <path d="M40.001 224H120.001C133.251 224 144.001 213.25 144.001 199.998S133.251 175.996 120.001 175.996H104.001V55.986C104.001 47.393 99.407 39.453 91.938 35.172C84.501 30.906 75.282 30.953 67.907 35.25L35.907 53.924C24.469 60.611 20.594 75.301 27.282 86.754C33.126 96.85 45.313 101.1 56.001 97.287V175.996H40.001C26.751 175.996 16.001 186.746 16.001 199.998S26.751 224 40.001 224ZM136.323 432.002H86.88L123.284 399.52C153.2 373.693 156.819 328.164 131.333 298.023C118.573 282.963 100.669 273.807 80.891 272.244C61.27 270.65 41.928 276.932 26.924 289.867L14.417 300.664C4.372 309.32 3.249 324.477 11.889 334.521C20.561 344.584 35.69 345.662 45.672 337.037L58.182 326.242C63.422 321.711 70.286 319.57 77.147 320.086C84.073 320.633 90.342 323.82 94.772 329.055C103.475 339.334 102.258 354.318 91.715 363.412L8.02 438.08C0.596 444.705 -1.962 455.236 1.563 464.547C5.12 473.844 14.01 480 23.962 480H136.323C149.549 480 160.28 469.25 160.28 456.002C160.28 442.752 149.549 432.002 136.323 432.002Z" />
        </Icon>
    </>
}