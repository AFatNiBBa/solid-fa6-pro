
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `align-slash` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/align-slash?s=duotone align-slash}
 * @preview ![align-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyOCAyMjRIMTYyLjQ4NkwxMDEuMDIxIDE3NS44MjRDOTguMTE5IDE4MC42NDEgOTYgMTg1Ljk2NyA5NiAxOTJDOTYgMjA5LjY3NCAxMTAuMzI2IDIyNCAxMjggMjI0Wk01MTIgOTZDNTI5LjY3NCA5NiA1NDQgODEuNjc0IDU0NCA2NFM1MjkuNjc0IDMyIDUxMiAzMkgxMjhDMTE0LjYyOSAzMiAxMDMuMjMyIDQwLjIyMyA5OC40NDcgNTEuODY5TDE1NC43NTIgOTZINTEyWk0xMjggMzUySDMyNS43OTlMMjQ0LjE0MyAyODhIMTI4QzExMC4zMjYgMjg4IDk2IDMwMi4zMjYgOTYgMzIwUzExMC4zMjYgMzUyIDEyOCAzNTJaTTUxMiAxNjBIMjM2LjQwOEwzMTguMDY0IDIyNEg1MTJDNTI5LjY3NCAyMjQgNTQ0IDIwOS42NzQgNTQ0IDE5MlM1MjkuNjc0IDE2MCA1MTIgMTYwWk0xMjggNDE2QzExMC4zMjYgNDE2IDk2IDQzMC4zMjYgOTYgNDQ4UzExMC4zMjYgNDgwIDEyOCA0ODBINDg5LjExMUw0MDcuNDU1IDQxNkgxMjhaTTUxMiAyODhIMzk5LjcyMUw0ODEuMzc1IDM1Mkg1MTJDNTI5LjY3NCAzNTIgNTQ0IDMzNy42NzQgNTQ0IDMyMFM1MjkuNjc0IDI4OCA1MTIgMjg4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik02MDEuMTg3IDUwNi44NzRMOS4xODcgNDIuODc5Qy0xLjIzNSAzNC43MjMgLTMuMDYzIDE5LjYzIDUuMTA5IDkuMTkyQzEzLjI5NiAtMS4yMTQgMjguMzQzIC0zLjA4OSAzOC44MTIgNS4xM0w2MzAuODEyIDQ2OS4xMjRDNjQxLjIzNCA0NzcuMjggNjQzLjA2MiA0OTIuMzc0IDYzNC44OSA1MDIuODExQzYyNi43MDYgNTEzLjIzNiA2MTEuNTk5IDUxNS4wNzEgNjAxLjE4NyA1MDYuODc0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function AlignSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M128 224H162.486L101.021 175.824C98.119 180.641 96 185.967 96 192C96 209.674 110.326 224 128 224ZM512 96C529.674 96 544 81.674 544 64S529.674 32 512 32H128C114.629 32 103.232 40.223 98.447 51.869L154.752 96H512ZM128 352H325.799L244.143 288H128C110.326 288 96 302.326 96 320S110.326 352 128 352ZM512 160H236.408L318.064 224H512C529.674 224 544 209.674 544 192S529.674 160 512 160ZM128 416C110.326 416 96 430.326 96 448S110.326 480 128 480H489.111L407.455 416H128ZM512 288H399.721L481.375 352H512C529.674 352 544 337.674 544 320S529.674 288 512 288Z" />
            <path d="M601.187 506.874L9.187 42.879C-1.235 34.723 -3.063 19.63 5.109 9.192C13.296 -1.214 28.343 -3.089 38.812 5.13L630.812 469.124C641.234 477.28 643.062 492.374 634.89 502.811C626.706 513.236 611.599 515.071 601.187 506.874Z" />
        </Icon>
    </>
}