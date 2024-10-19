
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `staff` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/staff?s=duotone staff}
 * @preview ![staff](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk2IDMwMy45ODJWMzQ4LjEwNEwxNTYuMTIxIDI4Ny45ODJIMTExLjk5OEMxMDMuMTI1IDI4Ny45ODIgOTYgMjk1LjEwNyA5NiAzMDMuOTgyWk0zNjkuODU3IDI4NC43MzJMNDAyLjEwNSAzMDMuMzU3QzQwOS43MyAzMDcuODU1IDQxOS42MDUgMzA1LjIzIDQyMy45OCAyOTcuNjA3TDQ0My40NzkgMjYzLjczNEwzNjkuODU3IDI4NC43MzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTUxMiA3OS45OTZWMTgzLjg2M0M1MTIgMjE5LjYxMSA0ODguMjUyIDI1MC45ODQgNDU0LjAwNCAyNjAuNzM0TDI4NS4xMzkgMzA4Ljk4QzI3Mi4wMTQgMzEyLjczIDI2MC4xNDEgMzE5LjczIDI1MC41MTYgMzI5LjM1NUw3NC45MDIgNTA0Ljk2OUM2NS41MjcgNTE0LjM0NCA1MC40MDIgNTE0LjM0NCA0MS4wMjkgNTA0Ljk2OUw3LjAzMSA0NzAuOTcxQy0yLjM0NCA0NjEuNTk4IC0yLjM0NCA0NDYuNDczIDcuMDMxIDQzNy4wOThMMTgyLjY0NSAyNjEuNDg0QzIwMy43NyAyNDAuMzU5IDIzMC4wMTggMjI0Ljk4NiAyNTguNzY2IDIxNi43MzZMNDE2LjAwNiAxNzEuNzRWOTUuOTk0SDM2NS42MzVMMzU0LjEzNSAxMTkuMTE3QzM1MC4xMzUgMTI2Ljk5MiAzNDAuNTEgMTMwLjI0MiAzMzIuNjM3IDEyNi4yNDJMMjc1LjM4OSA5Ny42MTlDMjY3LjUxNiA5My43NDQgMjY0LjI2NiA4NC4xMTkgMjY4LjI2NiA3Ni4yNDZMMjg0LjI2NCA0NC4yNDhDMjk3Ljc2NCAxNy4xMjMgMzI1LjUxMiAwIDM1NS43NiAwSDQzMi4wMDRDNDc2LjEyNyAwIDUxMiAzNS44NzMgNTEyIDc5Ljk5NloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Staff(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M96 303.982V348.104L156.121 287.982H111.998C103.125 287.982 96 295.107 96 303.982ZM369.857 284.732L402.105 303.357C409.73 307.855 419.605 305.23 423.98 297.607L443.479 263.734L369.857 284.732Z" />
            <path d="M512 79.996V183.863C512 219.611 488.252 250.984 454.004 260.734L285.139 308.98C272.014 312.73 260.141 319.73 250.516 329.355L74.902 504.969C65.527 514.344 50.402 514.344 41.029 504.969L7.031 470.971C-2.344 461.598 -2.344 446.473 7.031 437.098L182.645 261.484C203.77 240.359 230.018 224.986 258.766 216.736L416.006 171.74V95.994H365.635L354.135 119.117C350.135 126.992 340.51 130.242 332.637 126.242L275.389 97.619C267.516 93.744 264.266 84.119 268.266 76.246L284.264 44.248C297.764 17.123 325.512 0 355.76 0H432.004C476.127 0 512 35.873 512 79.996Z" />
        </Icon>
    </>
}