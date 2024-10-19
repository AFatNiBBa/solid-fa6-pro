
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pizza` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pizza?s=duotone pizza}
 * @preview ![pizza](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ3OC4zMjkgMTIwLjM2N0wzNDIuODQyIDI1Nkw0NzguMzI5IDM5MS42MzNDNTExLjcgMzUyLjY5MyA1MjguMzg1IDMwNC4zNDcgNTI4LjM4NSAyNTZDNTI4LjM4NSAyMDcuNjUzIDUxMS43IDE1OS4zMDcgNDc4LjMyOSAxMjAuMzY3Wk00NDguNTgxIDMwNEM0MzAuODM2IDMwNCA0MTYuNTg2IDI4OS43NTIgNDE2LjU4NiAyNzIuMDAyQzQxNi41ODYgMjU0LjI1IDQzMC44MzYgMjQwIDQ0OC41ODEgMjQwQzQ2Ni4wNzkgMjQwIDQ4MC41NzUgMjU0LjI1IDQ4MC41NzUgMjcyLjAwMkM0ODAuNTc1IDI4OS43NTIgNDY2LjA3OSAzMDQgNDQ4LjU4MSAzMDRaTTQwMy43MTEgMTA4Ljg2NUMzNjMuMTE2IDY4LjI2NCAzMDkuOTIgNDcuOTggMjU2LjcyNyA0Ny45OThDMjAyLjY0OSA0OC4wMTcgMTQ4LjU3MyA2OS4wMiAxMDcuNzQzIDExMC45OUM2OS4yNDggMTUwLjYxOCA1MCAyMDMuMzA5IDUwIDI1NkM1MCAzMDguNjkxIDY5LjI0OCAzNjEuMzgyIDEwNy43NDMgNDAxLjAxQzE0OC4yMzkgNDQyLjYzNyAyMDEuNzY0IDQ2My42MzggMjU1LjM5OSA0NjMuOTk3QzMwOS4wMzQgNDY0LjM1NiAzNjIuNzc4IDQ0NC4wNzQgNDAzLjcxMSA0MDMuMTM1TDI1Ni43MjcgMjU2TDQwMy43MTEgMTA4Ljg2NVpNMTYwLjczNyAyODguMDAyQzE0Mi45ODkgMjg4LjAwMiAxMjguNzM3IDI3My43NDYgMTI4LjczNyAyNTUuOTk0QzEyOC43MzcgMjQ3LjQ5MiAxMzIuMjM3IDIzOS4yNDIgMTM4LjIzOSAyMzMuMjRDMTQ0LjIwOCAyMjcuMjcxIDE1Mi40MDMgMjI0LjA0MSAxNjAuODU4IDIyNC4wMUMxNzguNTUxIDIyNC4wOCAxOTIuNzM3IDIzOC4yODUgMTkyLjczNyAyNTUuOTk0QzE5Mi43MzcgMjczLjc0NiAxNzguNDg5IDI4OC4wMDIgMTYwLjczNyAyODguMDAyWk0xOTIuNDczIDE0My45OTZDMTkyLjQ3MyAxMzUuNDk0IDE5NS45NjkgMTI3LjI0NCAyMDEuOTcxIDEyMS4yNDJDMjA3Ljk3MSAxMTUuMjM4IDIxNS45NzEgMTExLjk4OCAyMjQuNDczIDExMS45ODhDMjQyLjIyMSAxMTEuOTg4IDI1Ni40NzMgMTI2LjI0NCAyNTYuNDczIDE0My45OTZTMjQyLjIyMSAxNzYgMjI0LjQ3MyAxNzZDMjA2LjcyMSAxNzYgMTkyLjQ3MyAxNjEuNzQ4IDE5Mi40NzMgMTQzLjk5NlpNMjg4LjcyNyAzNjguMDA4QzI4OC43MjcgMzg1Ljc2IDI3NC40NzkgNDAwLjAxMiAyNTYuNzI3IDQwMC4wMTJDMjM4Ljk3OSA0MDAuMDEyIDIyNC43MjcgMzg1Ljc2IDIyNC43MjcgMzY4LjAwOEMyMjQuNzI3IDM1MC4yNTIgMjM4Ljk3OSAzMzYgMjU2LjcyNyAzMzZDMjc0LjQ3OSAzMzYgMjg4LjcyNyAzNTAuMjUyIDI4OC43MjcgMzY4LjAwOFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTIzLjIyNCAxMDAuMTE1QzUxNy40NzYgOTIuNjE1IDUwNS45NzYgOTIuMjQgNDk5LjIyNiA5OC45OUw0NzcuODU1IDEyMC4zNjdDNTQ0LjU5NyAxOTguMjQ2IDU0NC41OTcgMzEzLjc1NCA0NzcuODU1IDM5MS42MzNMNDk5LjIyNiA0MTMuMDFDNTA1Ljk3NiA0MTkuNzYgNTE3LjQ3NiA0MTkuMzg1IDUyMy4yMjQgNDExLjg4NUM1NTguNDA2IDM2NS44ODMgNTc1Ljk5OCAzMTAuOTQ1IDU3NiAyNTYuMDA2QzU3Ni4wMDEgMjAxLjA2MyA1NTguNDA5IDE0Ni4xMiA1MjMuMjI0IDEwMC4xMTVaTTIyNCAxNzZDMjQxLjc0OCAxNzYgMjU2IDE2MS43NDggMjU2IDE0My45OTZTMjQxLjc0OCAxMTEuOTg4IDIyNCAxMTEuOTg4QzIxNS40OTggMTExLjk4OCAyMDcuNDk4IDExNS4yMzggMjAxLjQ5OCAxMjEuMjQyQzE5NS40OTYgMTI3LjI0NCAxOTIgMTM1LjQ5NCAxOTIgMTQzLjk5NkMxOTIgMTYxLjc0OCAyMDYuMjQ4IDE3NiAyMjQgMTc2Wk00MDMuMjM4IDQwMy4xMzVDMzIxLjM3MSA0ODUuMDE0IDE4OC4yNjEgNDg0LjI2NCAxMDcuMjY5IDQwMS4wMUMzMC4yNzkgMzIxLjc1NCAzMC4yNzkgMTkwLjI0NiAxMDcuMjY5IDExMC45OUMxODguMjYxIDI3LjczNiAzMjEuMzcxIDI2Ljk4NiA0MDMuMjM4IDEwOC44NjVMNDI1LjIzNiA4Ni44NjVDNDMxLjYwOSA4MC4zNjMgNDMxLjYwOSA2OS40ODggNDI0LjczNiA2My40ODhDMzc2LjY1OCAyMS4xNiAzMTYuNDY0IC0wLjAwMyAyNTYuMjUzIDBDMTc1LjI3NSAwLjAwNSA5NC4yNjUgMzguMjkzIDQyLjY1MiAxMTQuODY1QzE0LjIxNyAxNTYuOTkzIDAgMjA2LjQ5NiAwIDI1NkMwIDMwNS41MDMgMTQuMjE3IDM1NS4wMDcgNDIuNjUyIDM5Ny4xMzVDOTMuMjcxIDQ3Mi4yMzMgMTcyLjE2NiA1MTAuNTA3IDI1MS41OTggNTExLjk1N0MzMTMuMzc4IDUxMy4wODUgMzc1LjQ4MyA0OTEuOTM2IDQyNC44NjEgNDQ4LjUxMkM0MzEuNzM0IDQ0Mi41MTIgNDMxLjczNCA0MzEuNjM3IDQyNS4yMzYgNDI1LjEzNUw0MDMuMjM4IDQwMy4xMzVaTTQ0OC4xMDcgMjQwQzQzMC4zNjMgMjQwIDQxNi4xMTMgMjU0LjI1IDQxNi4xMTMgMjcyLjAwMkM0MTYuMTEzIDI4OS43NTIgNDMwLjM2MyAzMDQgNDQ4LjEwNyAzMDRDNDY1LjYwNSAzMDQgNDgwLjEwMSAyODkuNzUyIDQ4MC4xMDEgMjcyLjAwMkM0ODAuMTAxIDI1NC4yNSA0NjUuNjA1IDI0MCA0NDguMTA3IDI0MFpNMTYwLjM4NCAyMjQuMDFDMTUxLjkyOSAyMjQuMDQxIDE0My43MzQgMjI3LjI3MSAxMzcuNzY1IDIzMy4yNEMxMzEuNzYzIDIzOS4yNDIgMTI4LjI2MyAyNDcuNDkyIDEyOC4yNjMgMjU1Ljk5NEMxMjguMjYzIDI3My43NDYgMTQyLjUxNSAyODguMDAyIDE2MC4yNjMgMjg4LjAwMkMxNzguMDE1IDI4OC4wMDIgMTkyLjI2MyAyNzMuNzQ2IDE5Mi4yNjMgMjU1Ljk5NEMxOTIuMjYzIDIzOC4yODUgMTc4LjA3OCAyMjQuMDggMTYwLjM4NCAyMjQuMDFaTTI1Ni4yNTMgNDAwLjAxMkMyNzQuMDA1IDQwMC4wMTIgMjg4LjI1MyAzODUuNzYgMjg4LjI1MyAzNjguMDA4QzI4OC4yNTMgMzUwLjI1MiAyNzQuMDA1IDMzNiAyNTYuMjUzIDMzNkMyMzguNTA1IDMzNiAyMjQuMjUzIDM1MC4yNTIgMjI0LjI1MyAzNjguMDA4QzIyNC4yNTMgMzg1Ljc2IDIzOC41MDUgNDAwLjAxMiAyNTYuMjUzIDQwMC4wMTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Pizza(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M478.329 120.367L342.842 256L478.329 391.633C511.7 352.693 528.385 304.347 528.385 256C528.385 207.653 511.7 159.307 478.329 120.367ZM448.581 304C430.836 304 416.586 289.752 416.586 272.002C416.586 254.25 430.836 240 448.581 240C466.079 240 480.575 254.25 480.575 272.002C480.575 289.752 466.079 304 448.581 304ZM403.711 108.865C363.116 68.264 309.92 47.98 256.727 47.998C202.649 48.017 148.573 69.02 107.743 110.99C69.248 150.618 50 203.309 50 256C50 308.691 69.248 361.382 107.743 401.01C148.239 442.637 201.764 463.638 255.399 463.997C309.034 464.356 362.778 444.074 403.711 403.135L256.727 256L403.711 108.865ZM160.737 288.002C142.989 288.002 128.737 273.746 128.737 255.994C128.737 247.492 132.237 239.242 138.239 233.24C144.208 227.271 152.403 224.041 160.858 224.01C178.551 224.08 192.737 238.285 192.737 255.994C192.737 273.746 178.489 288.002 160.737 288.002ZM192.473 143.996C192.473 135.494 195.969 127.244 201.971 121.242C207.971 115.238 215.971 111.988 224.473 111.988C242.221 111.988 256.473 126.244 256.473 143.996S242.221 176 224.473 176C206.721 176 192.473 161.748 192.473 143.996ZM288.727 368.008C288.727 385.76 274.479 400.012 256.727 400.012C238.979 400.012 224.727 385.76 224.727 368.008C224.727 350.252 238.979 336 256.727 336C274.479 336 288.727 350.252 288.727 368.008Z" />
            <path d="M523.224 100.115C517.476 92.615 505.976 92.24 499.226 98.99L477.855 120.367C544.597 198.246 544.597 313.754 477.855 391.633L499.226 413.01C505.976 419.76 517.476 419.385 523.224 411.885C558.406 365.883 575.998 310.945 576 256.006C576.001 201.063 558.409 146.12 523.224 100.115ZM224 176C241.748 176 256 161.748 256 143.996S241.748 111.988 224 111.988C215.498 111.988 207.498 115.238 201.498 121.242C195.496 127.244 192 135.494 192 143.996C192 161.748 206.248 176 224 176ZM403.238 403.135C321.371 485.014 188.261 484.264 107.269 401.01C30.279 321.754 30.279 190.246 107.269 110.99C188.261 27.736 321.371 26.986 403.238 108.865L425.236 86.865C431.609 80.363 431.609 69.488 424.736 63.488C376.658 21.16 316.464 -0.003 256.253 0C175.275 0.005 94.265 38.293 42.652 114.865C14.217 156.993 0 206.496 0 256C0 305.503 14.217 355.007 42.652 397.135C93.271 472.233 172.166 510.507 251.598 511.957C313.378 513.085 375.483 491.936 424.861 448.512C431.734 442.512 431.734 431.637 425.236 425.135L403.238 403.135ZM448.107 240C430.363 240 416.113 254.25 416.113 272.002C416.113 289.752 430.363 304 448.107 304C465.605 304 480.101 289.752 480.101 272.002C480.101 254.25 465.605 240 448.107 240ZM160.384 224.01C151.929 224.041 143.734 227.271 137.765 233.24C131.763 239.242 128.263 247.492 128.263 255.994C128.263 273.746 142.515 288.002 160.263 288.002C178.015 288.002 192.263 273.746 192.263 255.994C192.263 238.285 178.078 224.08 160.384 224.01ZM256.253 400.012C274.005 400.012 288.253 385.76 288.253 368.008C288.253 350.252 274.005 336 256.253 336C238.505 336 224.253 350.252 224.253 368.008C224.253 385.76 238.505 400.012 256.253 400.012Z" />
        </Icon>
    </>
}