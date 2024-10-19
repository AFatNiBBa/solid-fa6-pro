
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cookie` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cookie?s=duotone cookie}
 * @preview ![cookie](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUyNi40NzUgMjU0LjgyOEw1MTUuMTA4IDE4My4zNDVDNTExLjAwNiAxNTcuNDQ3IDQ5OC44MTkgMTMzLjU0MSA0ODAuMzAzIDExNS4wMjZMNDI4Ljk3NiA2My42OThDNDEwLjQ2IDQ1LjE4MyAzODYuNjcyIDMyLjk5NiAzNjAuNzczIDI4Ljg5NEwyODguOTM4IDE3LjUyN0MyNjMuMTU3IDEzLjQyNiAyMzYuNjczIDE3LjY0NCAyMTMuNDcxIDI5LjQ4TDE0OC42NjcgNjIuNTI2QzEyNS4yMjkgNzQuMzYyIDEwNi4zNjIgOTMuMzQ2IDk0LjQwOSAxMTYuNjY2TDYxLjQ4IDE4MS4yMzZDNDkuNjQ0IDIwNC42NzMgNDUuNDI2IDIzMS4yNzQgNDkuNTI3IDI1Ny4xNzJMNjAuODk0IDMyOC42NTVDNjQuOTk2IDM1NC41NTMgNzcuMTgzIDM3OC40NTkgOTUuNjk4IDM5Ny4wOTJMMTQ3LjAyNiA0NDguNDE5QzE2NS41NDEgNDY2LjgxNyAxODkuMzMgNDc5LjAwNCAyMTUuMjI4IDQ4My4xMDZMMjg3LjA2MyA0OTQuNDczQzMxMi44NDQgNDk4LjU3NCAzMzkuMzI4IDQ5NC4zNTYgMzYyLjUzMSA0ODIuNTJMNDI3LjMzNSA0NDkuNDc0QzQ1MC42NTUgNDM3LjYzOCA0NjkuNjM5IDQxOC42NTQgNDgxLjU5MiAzOTUuMzM0TDUxNC40MDUgMzMwLjc2NEM1MjYuMzU3IDMwNy4zMjcgNTMwLjU3NiAyODAuODQzIDUyNi40NzUgMjU0LjgyOFpNMjA4LjAwMSAzNjhDMTkwLjM3NiAzNjggMTc2LjAwMSAzNTMuNjI1IDE3Ni4wMDEgMzM2UzE5MC4zNzYgMzA0IDIwOC4wMDEgMzA0UzI0MC4wMDEgMzE4LjM3NSAyNDAuMDAxIDMzNlMyMjUuNjI2IDM2OCAyMDguMDAxIDM2OFpNMjQwLjAwMSAyMDhDMjIyLjM3NiAyMDggMjA4LjAwMSAxOTMuNjI1IDIwOC4wMDEgMTc2UzIyMi4zNzYgMTQ0IDI0MC4wMDEgMTQ0QzI1Ny42MjYgMTQ0IDI3Mi4wMDEgMTU4LjM3NSAyNzIuMDAxIDE3NlMyNTcuNjI2IDIwOCAyNDAuMDAxIDIwOFpNNDAwLjAwMSAzMzZDMzgyLjM3NiAzMzYgMzY4LjAwMSAzMjEuNjI1IDM2OC4wMDEgMzA0UzM4Mi4zNzYgMjcyIDQwMC4wMDEgMjcyUzQzMi4wMDEgMjg2LjM3NSA0MzIuMDAxIDMwNFM0MTcuNjI2IDMzNiA0MDAuMDAxIDMzNloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjA4IDMwNEMxOTAuMzc1IDMwNCAxNzYgMzE4LjM3NSAxNzYgMzM2UzE5MC4zNzUgMzY4IDIwOCAzNjhTMjQwIDM1My42MjUgMjQwIDMzNlMyMjUuNjI1IDMwNCAyMDggMzA0Wk0yNDAgMTQ0QzIyMi4zNzUgMTQ0IDIwOCAxNTguMzc1IDIwOCAxNzZTMjIyLjM3NSAyMDggMjQwIDIwOFMyNzIgMTkzLjYyNSAyNzIgMTc2UzI1Ny42MjUgMTQ0IDI0MCAxNDRaTTQwMCAyNzJDMzgyLjM3NSAyNzIgMzY4IDI4Ni4zNzUgMzY4IDMwNFMzODIuMzc1IDMzNiA0MDAgMzM2UzQzMiAzMjEuNjI1IDQzMiAzMDRTNDE3LjYyNSAyNzIgNDAwIDI3MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Cookie(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M526.475 254.828L515.108 183.345C511.006 157.447 498.819 133.541 480.303 115.026L428.976 63.698C410.46 45.183 386.672 32.996 360.773 28.894L288.938 17.527C263.157 13.426 236.673 17.644 213.471 29.48L148.667 62.526C125.229 74.362 106.362 93.346 94.409 116.666L61.48 181.236C49.644 204.673 45.426 231.274 49.527 257.172L60.894 328.655C64.996 354.553 77.183 378.459 95.698 397.092L147.026 448.419C165.541 466.817 189.33 479.004 215.228 483.106L287.063 494.473C312.844 498.574 339.328 494.356 362.531 482.52L427.335 449.474C450.655 437.638 469.639 418.654 481.592 395.334L514.405 330.764C526.357 307.327 530.576 280.843 526.475 254.828ZM208.001 368C190.376 368 176.001 353.625 176.001 336S190.376 304 208.001 304S240.001 318.375 240.001 336S225.626 368 208.001 368ZM240.001 208C222.376 208 208.001 193.625 208.001 176S222.376 144 240.001 144C257.626 144 272.001 158.375 272.001 176S257.626 208 240.001 208ZM400.001 336C382.376 336 368.001 321.625 368.001 304S382.376 272 400.001 272S432.001 286.375 432.001 304S417.626 336 400.001 336Z" />
            <path d="M208 304C190.375 304 176 318.375 176 336S190.375 368 208 368S240 353.625 240 336S225.625 304 208 304ZM240 144C222.375 144 208 158.375 208 176S222.375 208 240 208S272 193.625 272 176S257.625 144 240 144ZM400 272C382.375 272 368 286.375 368 304S382.375 336 400 336S432 321.625 432 304S417.625 272 400 272Z" />
        </Icon>
    </>
}