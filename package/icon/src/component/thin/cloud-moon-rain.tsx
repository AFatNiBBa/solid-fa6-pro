
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cloud-moon-rain` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-moon-rain?s=thin cloud-moon-rain}
 * @preview ![cloud-moon-rain](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTAuNTEyIDIyNS41MzVDMzQzLjYzNyAxODguMjkgMzExLjI2MSAxNjAuMDQzIDI3Mi4wMSAxNjAuMDQzQzI1OS43NTkgMTYwLjA0MyAyNDguMTM0IDE2My4wNDMgMjM3Ljc1OCAxNjguMDQyQzIyMC4yNTggMTQzLjkyIDE5Mi4xMzIgMTI4LjA0NyAxNjAuMDA2IDEyOC4wNDdDMTA3LjAwNCAxMjguMDQ3IDY0LjAwMiAxNzEuMDQyIDY0LjAwMiAyMjQuMDM1QzY0LjAwMiAyMjQuNTM1IDY0LjI1MiAyMjUuMTYgNjQuMjUyIDIyNS42NkMyNy42MjYgMjMyLjkwOSAwIDI2NS4yOCAwIDMwNC4wMjVDMCAzNDguMjcgMzUuNzUxIDM4NC4wMTYgODAuMDAzIDM4NC4wMTZIMzM2LjAxMkMzODAuMjYzIDM4NC4wMTYgNDE2LjAxNSAzNDguMjcgNDE2LjAxNSAzMDQuMDI1QzQxNi4wMTUgMjY0Ljc4IDM4Ny43NjQgMjMyLjI4NCAzNTAuNTEyIDIyNS41MzVaTTMzNi4wMTIgMzY4LjAxOEg4MC4wMDNDNDQuNzEzIDM2OC4wMTggMTYuMDAxIDMzOS4zMSAxNi4wMDEgMzA0LjAyNUMxNi4wMDEgMjczLjU5OSAzNy42MDEgMjQ3LjI0MyA2Ny4zNiAyNDEuMzUzTDgwLjI1MyAyMzguODAxVjIyNS42NkM4MC4yNTMgMjI0LjUzMSA4MC4xNDEgMjIzLjUzMyA4MC4wMTMgMjIyLjc0MkM4MC43MDQgMTc5LjIyOCAxMTYuMzIyIDE0NC4wNDUgMTYwLjAwNiAxNDQuMDQ1QzE4NS43OTIgMTQ0LjA0NSAyMDkuNDEyIDE1Ni4yMTUgMjI0LjgwNyAxNzcuNDM1TDIzMi42NTkgMTg4LjI1OEwyNDQuNzA2IDE4Mi40NTJDMjUzLjUzNiAxNzguMTk5IDI2Mi43MjIgMTc2LjA0MSAyNzIuMDEgMTc2LjA0MUMzMDIuNzc0IDE3Ni4wNDEgMzI5LjE3NCAxOTguMDc3IDMzNC43NzcgMjI4LjQzOUwzMzYuNzgzIDIzOS4zMDVMMzQ3LjY1OSAyNDEuMjc1QzM3Ny45OTYgMjQ2Ljc3MyA0MDAuMDE0IDI3My4xNjIgNDAwLjAxNCAzMDQuMDI1QzQwMC4wMTQgMzM5LjMxIDM3MS4zMDIgMzY4LjAxOCAzMzYuMDEyIDM2OC4wMThaTTY1LjEyNyA0MTkuOTAyTDE3LjEyNiA0OTkuODkyQzE0Ljg3NiA1MDMuNjczIDE2LjA5NCA1MDguNTk0IDE5Ljg3NiA1MTAuODZDMjEuMTg4IDUxMS42NDEgMjIuNTk1IDUxMiAyNC4wMDEgNTEyQzI2LjcyIDUxMiAyOS4zNzYgNTEwLjYxIDMwLjg3NiA1MDguMTFMNzguODc4IDQyOC4xMkM4MS4xMjggNDI0LjMzOSA3OS45MDkgNDE5LjQxOCA3Ni4xMjggNDE3LjE1MkM3Mi4yMjEgNDE0Ljg1NiA2Ny4zNzcgNDE2LjEwNSA2NS4xMjcgNDE5LjkwMlpNMTYxLjEzMSA0MTkuOTAyTDExMy4xMjkgNDk5Ljg5MkMxMTAuODc5IDUwMy42NzMgMTEyLjA5OCA1MDguNTk0IDExNS44NzkgNTEwLjg2QzExNy4xOTIgNTExLjY0MSAxMTguNTk4IDUxMiAxMjAuMDA0IDUxMkMxMjIuNzIzIDUxMiAxMjUuMzc5IDUxMC42MSAxMjYuODc5IDUwOC4xMUwxNzQuODgxIDQyOC4xMkMxNzcuMTMxIDQyNC4zMzkgMTc1LjkxMiA0MTkuNDE4IDE3Mi4xMzEgNDE3LjE1MkMxNjguMjU2IDQxNC44NTYgMTYzLjM4MSA0MTYuMTA1IDE2MS4xMzEgNDE5LjkwMlpNMjU3LjEzNCA0MTkuOTAyTDIwOS4xMzIgNDk5Ljg5MkMyMDYuODgyIDUwMy42NzMgMjA4LjEwMSA1MDguNTk0IDIxMS44ODIgNTEwLjg2QzIxMy4xOTUgNTExLjY0MSAyMTQuNjAxIDUxMiAyMTYuMDA4IDUxMkMyMTguNzI2IDUxMiAyMjEuMzgzIDUxMC42MSAyMjIuODgzIDUwOC4xMUwyNzAuODg0IDQyOC4xMkMyNzMuMTM1IDQyNC4zMzkgMjcxLjkxNiA0MTkuNDE4IDI2OC4xMzQgNDE3LjE1MkMyNjQuMjkgNDE0Ljg1NiAyNTkuMzg0IDQxNi4xMDUgMjU3LjEzNCA0MTkuOTAyWk0zNTMuMTM3IDQxOS45MDJMMzA1LjEzNiA0OTkuODkyQzMwMi44ODYgNTAzLjY3MyAzMDQuMTA0IDUwOC41OTQgMzA3Ljg4NiA1MTAuODZDMzA5LjE5OCA1MTEuNjQxIDMxMC42MDUgNTEyIDMxMi4wMTEgNTEyQzMxNC43MyA1MTIgMzE3LjM4NiA1MTAuNjEgMzE4Ljg4NiA1MDguMTFMMzY2Ljg4OCA0MjguMTJDMzY5LjEzOCA0MjQuMzM5IDM2Ny45MTkgNDE5LjQxOCAzNjQuMTM4IDQxNy4xNTJDMzYwLjI2MyA0MTQuODU2IDM1NS40MTkgNDE2LjEwNSAzNTMuMTM3IDQxOS45MDJaTTU3NC4wODMgMjE4LjQ0MkM1NzAuOTg5IDIxMy4xMTUgNTY1LjIwNyAyMTAuNDc0IDU1OC45ODggMjExLjUyMUM1MzAuNjEyIDIxNy4wMzYgNTAxLjQ1NSAyMDkuNTg0IDQ3OS4wNzkgMTkxLjE0OUM0NTYuMjk3IDE3Mi4zMjMgNDQzLjIwMyAxNDQuNDgyIDQ0My4yMDMgMTE0Ljc1MkM0NDMuMjAzIDc5LjMzNCA0NjIuMTEgNDYuNDc5IDQ5Mi42MTEgMjguOTY1QzQ5Ny44NjEgMjUuOTAzIDUwMC42MTEgMjAuMDI5IDQ5OS41NDkgMTQuMDE0QzQ5OC40ODYgOC4wMyA0OTMuOTg2IDMuNDY4IDQ4OC4xMTEgMi4zOUM0NzkuODkyIDAuODEyIDQ3MS4wNzkgMCA0NjEuOTg1IDBDMzkxLjUxNCAwIDMzMS4yNjIgNTMuNzQzIDMyMS43NjEgMTI1LjAzMkMzMjEuMTk5IDEyOS40MDYgMzI0LjI2MSAxMzMuNDIxIDMyOC42MzYgMTM0LjAxNUMzMzMuMzI0IDEzNC41MTUgMzM3LjA0MyAxMzEuNSAzMzcuNjM3IDEyNy4xMjVDMzQ2LjA0MyA2My43NzMgMzk5LjUxNCAxNS45OTggNDYxLjk4NSAxNS45OThDNDY4LjUxNiAxNS45OTggNDc0Ljg2IDE2LjQ2NyA0ODAuODI5IDE3LjM3M0M0NDcuNjQxIDM4LjE4MyA0MjcuMjAyIDc1LjEgNDI3LjIwMiAxMTQuNzUyQzQyNy4yMDIgMTQ5LjI3OSA0NDIuMzkgMTgxLjYxOCA0NjguODkxIDIwMy40NzVDNDkzLjczNiAyMjMuOTg4IDUyNS43MzcgMjMyLjgzMSA1NTcuMzk0IDIyOC4wMzVDNTMzLjM2MiAyNTYuMDE2IDQ5OC44OTIgMjcxLjk2NyA0NjIuNzk3IDI3Mi4wMTRDNDU4LjQ4NSAyNzEuNDUxIDQ1My43MDMgMjc1LjE1NCA0NTMuNzAzIDI3OS45NUM0NTMuNzAzIDI4NC4zNTYgNDU3LjU3OCAyODcuOTY1IDQ2MS45ODUgMjg3Ljk2NUM1MDUuMjA1IDI4Ny45NjUgNTQ1LjU1IDI2OC41MyA1NzIuNTIgMjM0Ljg2MkM1NzYuNTIgMjMwLjE3NSA1NzcuMTE0IDIyMy43MjMgNTc0LjA4MyAyMTguNDQyWk00ODQuNTQ4IDE1LjEyM0g0ODQuNjExQzQ4NC41NzkgMTUuMTIzIDQ4NC41NzkgMTUuMTM5IDQ4NC41NDggMTUuMTM5VjE1LjEyM1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CloudMoonRain(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M350.512 225.535C343.637 188.29 311.261 160.043 272.01 160.043C259.759 160.043 248.134 163.043 237.758 168.042C220.258 143.92 192.132 128.047 160.006 128.047C107.004 128.047 64.002 171.042 64.002 224.035C64.002 224.535 64.252 225.16 64.252 225.66C27.626 232.909 0 265.28 0 304.025C0 348.27 35.751 384.016 80.003 384.016H336.012C380.263 384.016 416.015 348.27 416.015 304.025C416.015 264.78 387.764 232.284 350.512 225.535ZM336.012 368.018H80.003C44.713 368.018 16.001 339.31 16.001 304.025C16.001 273.599 37.601 247.243 67.36 241.353L80.253 238.801V225.66C80.253 224.531 80.141 223.533 80.013 222.742C80.704 179.228 116.322 144.045 160.006 144.045C185.792 144.045 209.412 156.215 224.807 177.435L232.659 188.258L244.706 182.452C253.536 178.199 262.722 176.041 272.01 176.041C302.774 176.041 329.174 198.077 334.777 228.439L336.783 239.305L347.659 241.275C377.996 246.773 400.014 273.162 400.014 304.025C400.014 339.31 371.302 368.018 336.012 368.018ZM65.127 419.902L17.126 499.892C14.876 503.673 16.094 508.594 19.876 510.86C21.188 511.641 22.595 512 24.001 512C26.72 512 29.376 510.61 30.876 508.11L78.878 428.12C81.128 424.339 79.909 419.418 76.128 417.152C72.221 414.856 67.377 416.105 65.127 419.902ZM161.131 419.902L113.129 499.892C110.879 503.673 112.098 508.594 115.879 510.86C117.192 511.641 118.598 512 120.004 512C122.723 512 125.379 510.61 126.879 508.11L174.881 428.12C177.131 424.339 175.912 419.418 172.131 417.152C168.256 414.856 163.381 416.105 161.131 419.902ZM257.134 419.902L209.132 499.892C206.882 503.673 208.101 508.594 211.882 510.86C213.195 511.641 214.601 512 216.008 512C218.726 512 221.383 510.61 222.883 508.11L270.884 428.12C273.135 424.339 271.916 419.418 268.134 417.152C264.29 414.856 259.384 416.105 257.134 419.902ZM353.137 419.902L305.136 499.892C302.886 503.673 304.104 508.594 307.886 510.86C309.198 511.641 310.605 512 312.011 512C314.73 512 317.386 510.61 318.886 508.11L366.888 428.12C369.138 424.339 367.919 419.418 364.138 417.152C360.263 414.856 355.419 416.105 353.137 419.902ZM574.083 218.442C570.989 213.115 565.207 210.474 558.988 211.521C530.612 217.036 501.455 209.584 479.079 191.149C456.297 172.323 443.203 144.482 443.203 114.752C443.203 79.334 462.11 46.479 492.611 28.965C497.861 25.903 500.611 20.029 499.549 14.014C498.486 8.03 493.986 3.468 488.111 2.39C479.892 0.812 471.079 0 461.985 0C391.514 0 331.262 53.743 321.761 125.032C321.199 129.406 324.261 133.421 328.636 134.015C333.324 134.515 337.043 131.5 337.637 127.125C346.043 63.773 399.514 15.998 461.985 15.998C468.516 15.998 474.86 16.467 480.829 17.373C447.641 38.183 427.202 75.1 427.202 114.752C427.202 149.279 442.39 181.618 468.891 203.475C493.736 223.988 525.737 232.831 557.394 228.035C533.362 256.016 498.892 271.967 462.797 272.014C458.485 271.451 453.703 275.154 453.703 279.95C453.703 284.356 457.578 287.965 461.985 287.965C505.205 287.965 545.55 268.53 572.52 234.862C576.52 230.175 577.114 223.723 574.083 218.442ZM484.548 15.123H484.611C484.579 15.123 484.579 15.139 484.548 15.139V15.123Z" />
        </Icon>
    </>
}