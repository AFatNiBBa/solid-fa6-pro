
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tree-deciduous` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tree-deciduous?s=duotone tree-deciduous}
 * @preview ![tree-deciduous](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiAyODhDNTEyIDMxNC42MjUgNTAyLjYyNSAzMzcuMzc1IDQ4NCAzNTZTNDQyLjYyNSAzODQgNDE2IDM4NEgyODhWMzY4TDMxOS4xNDUgMzE1LjU3NkMzMjEuODA1IDMxMC4yNTggMzE3LjkzOCAzMDQgMzExLjk5IDMwNEgyODhWMjI0QzI4OCAyMDYuMzI3IDI3My42NzMgMTkyIDI1NiAxOTJIMjU2QzIzOC4zMjcgMTkyIDIyNCAyMDYuMzI3IDIyNCAyMjRWMjQwSDIwMC4wMUMxOTQuMDYyIDI0MCAxOTAuMTk1IDI0Ni4yNTggMTkyLjg1NSAyNTEuNTc4TDIyNCAzMDRWMzg0SDk2QzY5LjM3NSAzODQgNDYuNjI1IDM3NC42MjUgMjggMzU2UzAgMzE0LjYyNSAwIDI4OEMwIDI2OC42MjUgNS4zNzUgMjUxIDE2IDIzNVM0MSAyMDcuMzc1IDU5IDIwMEM0OS42MjUgMTg0IDQ2LjEyNSAxNjcuNSA0OC41IDE1MC41UzU3LjYyNSAxMTguODc1IDY5IDEwNi41Uzk0LjEyNSA4NiAxMTAuNSA4MlMxNDMuMzc1IDc5LjYyNSAxNjAgODdDMTYyLjY4MiA2MS44NDQgMTczLjU4MiA0MC43MzIgMTkyLjcgMjMuOTNDMjA5Ljg1OCA4Ljg1MSAyMzIuMzM0IDAuMTc2IDI1NS4xNzUgMC4wMDNDMjgwLjE0NSAtMC4xODYgMzAxLjkyIDguMTkgMzIwLjUgMjVDMzM4Ljg3NSA0MS42MjUgMzQ5LjM3NSA2Mi4zNzUgMzUyIDg3QzM2OC42MjUgNzkuNjI1IDM4NS4xMjUgNzggNDAxLjUgODJTNDMxLjYyNSA5NC4xMjUgNDQzIDEwNi41UzQ2MS4xMjUgMTMzLjUgNDYzLjUgMTUwLjVTNDYyLjYyNSAxODQgNDU0IDIwMEg0NTNDNDcxIDIwNy4zNzUgNDg1LjM3NSAyMTkgNDk2IDIzNVM1MTIgMjY4LjYyNSA1MTIgMjg4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yMDAuMDEgMjQwSDIyNFYyMjRDMjI0IDIwNi4zMjcgMjM4LjMyNyAxOTIgMjU2IDE5MkgyNTZDMjczLjY3MyAxOTIgMjg4IDIwNi4zMjcgMjg4IDIyNFYzMDRIMzExLjk5QzMxNy45MzggMzA0IDMyMS44MDUgMzEwLjI1OCAzMTkuMTQ1IDMxNS41NzZMMjg4IDM2OFY0ODBDMjg4IDQ5Ny42NzMgMjczLjY3MyA1MTIgMjU2IDUxMkgyNTZDMjM4LjMyNyA1MTIgMjI0IDQ5Ny42NzMgMjI0IDQ4MFYzMDRMMTkyLjg1NSAyNTEuNTc4QzE5MC4xOTUgMjQ2LjI1OCAxOTQuMDYyIDI0MCAyMDAuMDEgMjQwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TreeDeciduous(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M512 288C512 314.625 502.625 337.375 484 356S442.625 384 416 384H288V368L319.145 315.576C321.805 310.258 317.938 304 311.99 304H288V224C288 206.327 273.673 192 256 192H256C238.327 192 224 206.327 224 224V240H200.01C194.062 240 190.195 246.258 192.855 251.578L224 304V384H96C69.375 384 46.625 374.625 28 356S0 314.625 0 288C0 268.625 5.375 251 16 235S41 207.375 59 200C49.625 184 46.125 167.5 48.5 150.5S57.625 118.875 69 106.5S94.125 86 110.5 82S143.375 79.625 160 87C162.682 61.844 173.582 40.732 192.7 23.93C209.858 8.851 232.334 0.176 255.175 0.003C280.145 -0.186 301.92 8.19 320.5 25C338.875 41.625 349.375 62.375 352 87C368.625 79.625 385.125 78 401.5 82S431.625 94.125 443 106.5S461.125 133.5 463.5 150.5S462.625 184 454 200H453C471 207.375 485.375 219 496 235S512 268.625 512 288Z" />
            <path d="M200.01 240H224V224C224 206.327 238.327 192 256 192H256C273.673 192 288 206.327 288 224V304H311.99C317.938 304 321.805 310.258 319.145 315.576L288 368V480C288 497.673 273.673 512 256 512H256C238.327 512 224 497.673 224 480V304L192.855 251.578C190.195 246.258 194.062 240 200.01 240Z" />
        </Icon>
    </>
}