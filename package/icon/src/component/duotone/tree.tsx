
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tree` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tree?s=duotone tree}
 * @preview ![tree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQxNC44MjggNDQ4LjAzNkgyNTZWMzY4LjA5TDI4Ny4xNDUgMzE1LjY5OEMyODkuODA1IDMxMC4zODMgMjg1LjkzOCAzMDQuMTI5IDI3OS45OSAzMDQuMTI5SDI1NlYyMjQuMTc5QzI1NiAyMDYuNTE3IDI0MS42NzMgMTkyLjE5OSAyMjQgMTkyLjE5OUgyMjRDMjA2LjMyNyAxOTIuMTk5IDE5MiAyMDYuNTE3IDE5MiAyMjQuMTc5VjI0MC4xNjlIMTY4LjAxQzE2Mi4wNjMgMjQwLjE2OSAxNTguMTk2IDI0Ni40MjMgMTYwLjg1NiAyNTEuNzRMMTkyIDMwNC4xMjlWNDQ4LjAzNkgzMy4xMjNDNC42MjMgNDQ4LjAzNiAtMTAuNTYyIDQxMy41NTUgOC40MzYgMzkxLjY2MUw3Ny40MTQgMzEyLjExMUg2Mi4yMTVDMzYuNjIzIDMxMi4xMTEgMjIuNzE3IDI4Mi45NDEgMzkuMDI5IDI2My42MzlMOTkuOTQ5IDE5Mi4xNzlIODkuMjE1QzY3LjkzNCAxOTIuMTc5IDU2LjM0IDE2OS42OTIgNjkuOTM0IDE1NC44ODhMMjA0LjcxMSA4LjQ3QzIxNS4xMDQgLTIuODIxIDIzMi45MzIgLTIuODI0IDI0My4zMjggOC40NjNMMzc4LjIwMyAxNTQuODg4QzM5MS44MjggMTY5LjY5MiAzODAuMjAzIDE5Mi4xNzkgMzU4LjkyNCAxOTIuMTc5SDM0OC4xNThMNDA5LjAxNiAyNjMuNjM5QzQyNS4zMjYgMjgyLjk0MSA0MTEuNDIyIDMxMi4xMTEgMzg1LjgyOCAzMTIuMTExSDM3MC42MzFMNDM5LjYwOCAzOTEuNjYxQzQ1OC41MTQgNDEzLjQ2MiA0NDMuNDIgNDQ4LjAzNiA0MTQuODI4IDQ0OC4wMzZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTE2OC4wMSAyNDAuMTY5SDE5MlYyMjQuMTc5QzE5MiAyMDYuNTE3IDIwNi4zMjcgMTkyLjE5OSAyMjQgMTkyLjE5OUgyMjRDMjQxLjY3MyAxOTIuMTk5IDI1NiAyMDYuNTE3IDI1NiAyMjQuMTc5VjMwNC4xMjlIMjc5Ljk5QzI4NS45MzggMzA0LjEyOSAyODkuODA1IDMxMC4zODMgMjg3LjE0NSAzMTUuNjk4TDI1NiAzNjguMDlWNDgwLjAyQzI1NiA0OTcuNjgyIDI0MS42NzMgNTEyIDIyNCA1MTJIMjI0QzIwNi4zMjcgNTEyIDE5MiA0OTcuNjgyIDE5MiA0ODAuMDJWMzA0LjEyOUwxNjAuODU1IDI1MS43NEMxNTguMTk1IDI0Ni40MjMgMTYyLjA2MiAyNDAuMTY5IDE2OC4wMSAyNDAuMTY5WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Tree(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M414.828 448.036H256V368.09L287.145 315.698C289.805 310.383 285.938 304.129 279.99 304.129H256V224.179C256 206.517 241.673 192.199 224 192.199H224C206.327 192.199 192 206.517 192 224.179V240.169H168.01C162.063 240.169 158.196 246.423 160.856 251.74L192 304.129V448.036H33.123C4.623 448.036 -10.562 413.555 8.436 391.661L77.414 312.111H62.215C36.623 312.111 22.717 282.941 39.029 263.639L99.949 192.179H89.215C67.934 192.179 56.34 169.692 69.934 154.888L204.711 8.47C215.104 -2.821 232.932 -2.824 243.328 8.463L378.203 154.888C391.828 169.692 380.203 192.179 358.924 192.179H348.158L409.016 263.639C425.326 282.941 411.422 312.111 385.828 312.111H370.631L439.608 391.661C458.514 413.462 443.42 448.036 414.828 448.036Z" />
            <path d="M168.01 240.169H192V224.179C192 206.517 206.327 192.199 224 192.199H224C241.673 192.199 256 206.517 256 224.179V304.129H279.99C285.938 304.129 289.805 310.383 287.145 315.698L256 368.09V480.02C256 497.682 241.673 512 224 512H224C206.327 512 192 497.682 192 480.02V304.129L160.855 251.74C158.195 246.423 162.062 240.169 168.01 240.169Z" />
        </Icon>
    </>
}