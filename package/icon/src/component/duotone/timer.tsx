
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `timer` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/timer?s=duotone timer}
 * @preview ![timer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4OS43NTUgNTYuNDkyQzM0OC4xOTcgMjguMTM5IDI5Ny42NTQgMTYuMDE1IDI0Ny4zNDMgMTYuMDAxQzIzNC40OTQgMTUuOTk3IDIyMy45ODQgMjYuNDA5IDIyMy45ODQgMzkuMjU4TDIyMy45ODQgMTEwLjMxMkMyMjMuOTg0IDEyNi4yNTggMjM0Ljg4MyAxNDEuMDM1IDI1MC42MjIgMTQzLjU5M0MyNzAuNjgzIDE0Ni44NTUgMjg4LjAxNyAxMzEuNDY2IDI4OC4wMTcgMTEyLjAyNFY4My4xNDFDMzM2LjE1MSA5MS45NSAzNzkuMDcyIDEyMC4xMDIgNDA2Ljc2NSAxNjQuNzQ1QzQ0Mi4zMjIgMjIyLjA2NCA0NDEuMTM5IDI5NS40NjYgNDAzLjk3MyAzNTEuNzU2QzM0MC4zMzggNDQ4LjEzNSAyMDguNzA0IDQ1Ny43ODEgMTMxLjQ4MiAzODAuNTYzQzY5LjQyNSAzMTguNTA5IDYzLjQ2OSAyMjEuMjUzIDExMy42MTYgMTUyLjQ0QzEyMi44OTIgMTM5LjcxMSAxMjIuMjc4IDEyMi4zNTcgMTExLjEzOSAxMTEuMjIyTDExMS4xMzggMTExLjIyMkM5Ni4xMjQgOTYuMjE0IDczLjg1OSA5OC4xNzQgNjEuNDA5IDExNS4zNjlDLTYuNTA2IDIwOS4xNzIgMS43NjEgMzQxLjM3MiA4Ni4yMDkgNDI1LjgyNEMxMzMuMDEzIDQ3Mi42MTcgMTk0LjUxNSA0OTYuMDMyIDI1NiA0OTZDMzE3LjQ4NiA0OTYgMzc4Ljk4NiA0NzIuNjE3IDQyNS43OTIgNDI1LjgyNEM1MzAuMTc1IDMyMS40MzQgNTE4LjE2MyAxNDQuMDkgMzg5Ljc1NSA1Ni40OTJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTIzOS4wMzEgMjcyLjk2OUMyNDMuNzE5IDI3Ny42NTcgMjQ5Ljg1OSAyODAgMjU2IDI4MEMyNjIuMTQgMjgwIDI2OC4yODEgMjc3LjY1NyAyNzIuOTY5IDI3Mi45NjlDMjgyLjM0NCAyNjMuNTk0IDI4Mi4zNDQgMjQ4LjQwNyAyNzIuOTY5IDIzOS4wMzJMMTkyLjk2OSAxNTkuMDMyQzE4My41OTQgMTQ5LjY1NyAxNjguNDA2IDE0OS42NTcgMTU5LjAzMSAxNTkuMDMyUzE0OS42NTYgMTgzLjU5NCAxNTkuMDMxIDE5Mi45NjlMMjM5LjAzMSAyNzIuOTY5WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Timer(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M389.755 56.492C348.197 28.139 297.654 16.015 247.343 16.001C234.494 15.997 223.984 26.409 223.984 39.258L223.984 110.312C223.984 126.258 234.883 141.035 250.622 143.593C270.683 146.855 288.017 131.466 288.017 112.024V83.141C336.151 91.95 379.072 120.102 406.765 164.745C442.322 222.064 441.139 295.466 403.973 351.756C340.338 448.135 208.704 457.781 131.482 380.563C69.425 318.509 63.469 221.253 113.616 152.44C122.892 139.711 122.278 122.357 111.139 111.222L111.138 111.222C96.124 96.214 73.859 98.174 61.409 115.369C-6.506 209.172 1.761 341.372 86.209 425.824C133.013 472.617 194.515 496.032 256 496C317.486 496 378.986 472.617 425.792 425.824C530.175 321.434 518.163 144.09 389.755 56.492Z" />
            <path d="M239.031 272.969C243.719 277.657 249.859 280 256 280C262.14 280 268.281 277.657 272.969 272.969C282.344 263.594 282.344 248.407 272.969 239.032L192.969 159.032C183.594 149.657 168.406 149.657 159.031 159.032S149.656 183.594 159.031 192.969L239.031 272.969Z" />
        </Icon>
    </>
}