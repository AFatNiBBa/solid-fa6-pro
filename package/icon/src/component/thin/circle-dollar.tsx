
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-dollar` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-dollar?s=thin circle-dollar}
 * @preview ![circle-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NiA0ODAgMzIgMzc5LjUxNCAzMiAyNTZTMTMyLjQ4NiAzMiAyNTYgMzJTNDgwIDEzMi40ODYgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwWk0yNTguMTA5IDI0OC4yNUwyNDguNjA5IDI0NS42MDlDMjA3LjU2MiAyMzQgMTg3LjY0MSAyMjIuODU5IDE5Mi43OTcgMTk0LjIxOUMxOTcuNTQ3IDE2Ny44MTIgMjI4Ljk4NCAxNTUuMTI1IDI3My4xNzIgMTYxLjY3MkMyODIuMzI4IDE2My4wNDcgMjkzLjIxOSAxNjUuOTA2IDMwNy40NjkgMTcwLjY0MUMzMTEuNzE5IDE3Mi4wMTYgMzE2LjIwMyAxNjkuNzM0IDMxNy41OTQgMTY1LjU3OEMzMTguOTg0IDE2MS4zNzUgMzE2LjcxOSAxNTYuODQ0IDMxMi41MzEgMTU1LjQ1M0MyOTcuMzc1IDE1MC40MjIgMjg1LjYyNSAxNDcuMzc1IDI3NS41NDcgMTQ1Ljg1OUMyNzEuNTUzIDE0NS4yNSAyNjcuODIyIDE0NS4wNzYgMjY0IDE0NC43NTZWMTA0QzI2NCA5OS41NzggMjYwLjQyMiA5NiAyNTYgOTZTMjQ4IDk5LjU3OCAyNDggMTA0VjE0NC4yNDZDMjA5LjI0OCAxNDUuMTcyIDE4Mi4yNjggMTYyLjE5NyAxNzcuMDQ3IDE5MS4zNzVDMTY4LjM5MSAyMzkuNTQ3IDIxNS44OTEgMjUyLjk4NCAyNDQuMjY2IDI2MS4wMTZMMjUzLjg1OSAyNjMuNjcyQzI5OC4zNTkgMjc1LjkzOCAzMjQuOTY5IDI4NS43MDMgMzE5LjIwMyAzMTcuNzgxQzMxNC40NjkgMzQ0LjE4OCAyODIuOTIyIDM1Ni45MjIgMjM4Ljc4MSAzNTAuMzEzQzIyNC41MzEgMzQ4LjI1IDIwOC4yMzQgMzQyLjU5NCAxOTMuODQ0IDMzNy42MDlMMTg2LjU3OCAzMzUuMDk0QzE4Mi40ODQgMzMzLjY4OCAxNzcuODU5IDMzNS45MDYgMTc2LjQyMiAzNDAuMDk0QzE3NSAzNDQuMjY2IDE3Ny4yMzQgMzQ4LjgxMiAxODEuNDIyIDM1MC4yNUwxODguNjA5IDM1Mi43MTlDMjAzLjY1NiAzNTcuOTUzIDIyMC43MTkgMzYzLjg3NSAyMzYuNDUzIDM2Ni4xNDFDMjQwLjQ5IDM2Ni43NSAyNDQuMTM5IDM2Ni43MzIgMjQ4IDM2Ny4wNDdWNDA4QzI0OCA0MTIuNDIyIDI1MS41NzggNDE2IDI1NiA0MTZTMjY0IDQxMi40MjIgMjY0IDQwOFYzNjcuODY5QzMwMi43OTUgMzY2LjkzOSAzMjkuNzExIDM0OS44MTEgMzM0Ljk1MyAzMjAuNjI1QzM0My43MTkgMjcxLjg0NCAyOTguMjM0IDI1OS4zMTIgMjU4LjEwOSAyNDguMjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleDollar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM258.109 248.25L248.609 245.609C207.562 234 187.641 222.859 192.797 194.219C197.547 167.812 228.984 155.125 273.172 161.672C282.328 163.047 293.219 165.906 307.469 170.641C311.719 172.016 316.203 169.734 317.594 165.578C318.984 161.375 316.719 156.844 312.531 155.453C297.375 150.422 285.625 147.375 275.547 145.859C271.553 145.25 267.822 145.076 264 144.756V104C264 99.578 260.422 96 256 96S248 99.578 248 104V144.246C209.248 145.172 182.268 162.197 177.047 191.375C168.391 239.547 215.891 252.984 244.266 261.016L253.859 263.672C298.359 275.938 324.969 285.703 319.203 317.781C314.469 344.188 282.922 356.922 238.781 350.313C224.531 348.25 208.234 342.594 193.844 337.609L186.578 335.094C182.484 333.688 177.859 335.906 176.422 340.094C175 344.266 177.234 348.812 181.422 350.25L188.609 352.719C203.656 357.953 220.719 363.875 236.453 366.141C240.49 366.75 244.139 366.732 248 367.047V408C248 412.422 251.578 416 256 416S264 412.422 264 408V367.869C302.795 366.939 329.711 349.811 334.953 320.625C343.719 271.844 298.234 259.312 258.109 248.25Z" />
        </Icon>
    </>
}