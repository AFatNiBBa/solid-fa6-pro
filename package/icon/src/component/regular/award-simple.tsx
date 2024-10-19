
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `award-simple` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/award-simple?s=regular award-simple}
 * @preview ![award-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMTkyQzM4NCAxNzAuNTA0IDM3My43MzIgMTU0LjkwOCAzNjcuNTk2IDE0NS41OUMzNjcuNDQxIDE0NS4zNTQgMzY3LjI4NSAxNDUuMTE5IDM2Ny4xMjkgMTQ0Ljg4N0MzNjcuMTU2IDE0NC40NzkgMzY3LjE4NCAxNDQuMDcyIDM2Ny4yMDUgMTQzLjY2NEMzNjcuODE4IDEzMi42NTIgMzY4Ljg0NiAxMTQuMjIxIDM1OC4yNzUgOTUuOTUxQzM0Ny42NDMgNzcuNTY2IDMzMS4wNzQgNjkuMjQgMzIxLjE3NiA2NC4yNjZDMzIwLjg2MSA2NC4xMDcgMzIwLjU0NSA2My45NTMgMzIwLjIzIDYzLjc5N0MzMjAuMDc0IDYzLjQ4IDMxOS45MTggNjMuMTY0IDMxOS43NiA2Mi44NDhDMzE0Ljc4OSA1Mi45NDkgMzA2LjQ2NyAzNi4zODMgMjg4LjA3NiAyNS43NEMyNzcuMjc1IDE5LjQ5IDI2NC45ODggMTYuNDUxIDI1MC41MTIgMTYuNDUxQzI0Ny4xOTEgMTYuNDUxIDI0My43ODMgMTYuNjE1IDI0MC4zNjkgMTYuODA1QzIzOS45NTcgMTYuODI2IDIzOS41NDMgMTYuODUyIDIzOS4xMjkgMTYuODc1QzIzOC44OTMgMTYuNzE3IDIzOC42NTYgMTYuNTU5IDIzOC40MTggMTYuNDAyQzIyOS4wOTggMTAuMjY4IDIxMy40OTggMCAxOTIgMEMxNzAuNTA2IDAgMTU0LjkxIDEwLjI2OCAxNDUuNTkyIDE2LjQwMkMxNDUuMzU5IDE2LjU1NyAxNDUuMTI3IDE2LjcxMSAxNDQuODk2IDE2Ljg2N0MxNDQuNDgyIDE2Ljg0MiAxNDQuMDcyIDE2LjgxOCAxNDMuNjY0IDE2Ljc5NUMxNDAuMjQyIDE2LjYwNSAxMzYuODI2IDE2LjQzOSAxMzMuNDk4IDE2LjQzOUMxMTkuMDMxIDE2LjQzOSAxMDYuNzUgMTkuNDc3IDk1Ljk1MSAyNS43MjdDNzcuNTY0IDM2LjM2MyA2OS4yNCA1Mi45MyA2NC4yNjggNjIuODI4QzY0LjEwOSA2My4xNDMgNjMuOTU1IDYzLjQ1NyA2My44MDEgNjMuNzcxQzYzLjQ4NiA2My45MjYgNjMuMTcgNjQuMDggNjIuODU1IDY0LjIzOEM1Mi45NTUgNjkuMjExIDM2LjM4NSA3Ny41MzMgMjUuNzQyIDk1LjkyOEMxNS4xNyAxMTQuMTg2IDE2LjE5MyAxMzIuNjIzIDE2LjgwNyAxNDMuNjM5QzE2LjgyOCAxNDQuMDQ3IDE2Ljg1NSAxNDQuNDU3IDE2Ljg4MyAxNDQuODYzQzE2LjcyNSAxNDUuMSAxNi41NjYgMTQ1LjMzNiAxNi40MDggMTQ1LjU3NEMxMC4yNzEgMTU0Ljg5NiAwIDE3MC41IDAgMTkyQzAgMjEzLjQ5OCAxMC4yNzEgMjI5LjA5NCAxNi40MDggMjM4LjQxNEMxNi41NjIgMjM4LjY0NiAxNi43MTkgMjM4Ljg4MSAxNi44NzMgMjM5LjExMUMxNi44NDggMjM5LjUxOCAxNi44MiAyMzkuOTI0IDE2Ljc5NyAyNDAuMzNDMTYuMTgyIDI1MS4zNDQgMTUuMTUyIDI2OS43NzUgMjUuNzI1IDI4OC4wNDlDMzYuMzcxIDMwNi40MzkgNTIuOTMyIDMxNC43NjIgNjIuODI2IDMxOS43MzJDNjMuMTQzIDMxOS44OTEgNjMuNDU5IDMyMC4wNDcgNjMuNzc1IDMyMC4yMDFDNjMuOTMgMzIwLjUyIDY0LjA4NiAzMjAuODM2IDY0LjI0NCAzMjEuMTUyQzY5LjIxNSAzMzEuMDQ5IDc3LjUzNyAzNDcuNjEzIDk1LjkyIDM1OC4yNTZDOTYuNzMgMzU4LjcyNSA5Ny43MDMgMzU4Ljg3MSA5OC41MzEgMzU5LjMwNUw3MC43NCA0OTIuNjk5QzY4LjAxNCA1MDUuNzkzIDgxLjU5OCA1MTYuMjU0IDkzLjU1OSA1MTAuMjczTDE5MiA0NjEuMDUzTDI5MC40NDEgNTEwLjI3M0MzMDIuNDAyIDUxNi4yNTQgMzE1Ljk4NiA1MDUuNzkzIDMxMy4yNiA0OTIuNjk5TDI4NS40NzEgMzU5LjMxMkMyODYuMjg1IDM1OC44ODUgMjg3LjI0NiAzNTguNzQyIDI4OC4wNDUgMzU4LjI3OUMzMDYuNDQxIDM0Ny42MzkgMzE0Ljc2OCAzMzEuMDY2IDMxOS43NDIgMzIxLjE2NEMzMTkuODk4IDMyMC44NTIgMzIwLjA1MyAzMjAuNTM5IDMyMC4yMDcgMzIwLjIyN0MzMjAuNTIgMzIwLjA3MiAzMjAuODM0IDMxOS45MTggMzIxLjE0OCAzMTkuNzZDMzMxLjA0NyAzMTQuNzg3IDM0Ny42MTcgMzA2LjQ2NyAzNTguMjYgMjg4LjA3NkMzNjguODM2IDI2OS44MTEgMzY3LjgxMSAyNTEuMzc1IDM2Ny4xOTkgMjQwLjM2MUMzNjcuMTc2IDIzOS45NTEgMzY3LjE0OCAyMzkuNTQzIDM2Ny4xMjEgMjM5LjEzM0MzNjcuMjgxIDIzOC44OTYgMzY3LjQzOSAyMzguNjU4IDM2Ny41OTggMjM4LjQyQzM3My43MzIgMjI5LjA5OCAzODQgMjEzLjQ5NiAzODQgMTkyWk0zMTkuOTkyIDIyNi4zMjJDMzE2LjgzOCAyMzguMTMzIDMyMi43MDMgMjUzLjY5MSAzMTYuNzE3IDI2NC4wMzFDMzEwLjY0NiAyNzQuNTIgMjk0LjE4MiAyNzcuMTc2IDI4NS42NjggMjg1LjY4OEMyNzcuMTYgMjk0LjE5NyAyNzQuNSAzMTAuNjYyIDI2NC4wMTIgMzE2LjcyOUMyNjAuMDk2IDMxOC45OTQgMjU1LjQzMiAzMTkuNTYxIDI1MC41MDYgMzE5LjU2MUMyNDUuNTkgMzE5LjU2MSAyNDAuNDE0IDMxOC45OTYgMjM1LjQ2MSAzMTguOTk2QzIzMi4yNzMgMzE4Ljk5NiAyMjkuMTc4IDMxOS4yMyAyMjYuMzA1IDMxOS45OThDMjE0Ljg5MSAzMjMuMDQ3IDIwNC4zNzUgMzM2IDE5MiAzMzZDMTc5LjYxNyAzMzYgMTY5LjEwMiAzMjMuMDQ3IDE1Ny42OCAzMTkuOTkyQzE1NC44MDEgMzE5LjIyMyAxNTEuNzAxIDMxOC45ODggMTQ4LjUwOCAzMTguOTg4QzE0My41NjIgMzE4Ljk4OCAxMzguMzk4IDMxOS41NDkgMTMzLjQ5IDMxOS41NDlDMTI4LjU1OSAzMTkuNTQ5IDEyMy44ODkgMzE4Ljk4MiAxMTkuOTY5IDMxNi43MTVDMTA5LjQ4MiAzMTAuNjQ1IDEwNi44MjYgMjk0LjE4IDk4LjMxMiAyODUuNjY4Qzg5LjgwNSAyNzcuMTU2IDczLjM0MiAyNzQuNDk2IDY3LjI3MSAyNjQuMDFDNjEuMjg5IDI1My42NyA2Ny4xNiAyMzguMTA5IDY0LjAwNiAyMjYuMzAxQzYwLjk1NSAyMTQuODg3IDQ4IDIwNC4zNzcgNDggMTkyQzQ4IDE3OS42MTUgNjAuOTU1IDE2OS4wOTggNjQuMDEyIDE1Ny42NzhDNjcuMTY2IDE0NS44NjcgNjEuMzAxIDEzMC4zMDcgNjcuMjg5IDExOS45NjdDNzMuMzU3IDEwOS40NzkgODkuODI0IDEwNi44MjIgOTguMzM2IDk4LjMxMUMxMDYuODQ2IDg5LjgwMyAxMDkuNTA2IDczLjMzOCAxMTkuOTkyIDY3LjI3MUMxMjMuOTA4IDY1LjAwNiAxMjguNTcyIDY0LjQzOSAxMzMuNDk4IDY0LjQzOUMxMzguNDE0IDY0LjQzOSAxNDMuNTkgNjUuMDA0IDE0OC41NDMgNjUuMDA0QzE1MS43MyA2NS4wMDQgMTU0LjgyNiA2NC43NyAxNTcuNjk5IDY0LjAwMkMxNjkuMTEzIDYwLjk1MSAxNzkuNjI1IDQ4IDE5MiA0OEMyMDQuMzg3IDQ4IDIxNC45IDYwLjk1MyAyMjYuMzI0IDY0LjAwOEMyMjkuMjAxIDY0Ljc3NyAyMzIuMzAxIDY1LjAxMiAyMzUuNDk0IDY1LjAxMkMyNDAuNDM5IDY1LjAxMiAyNDUuNjA1IDY0LjQ1MSAyNTAuNTEyIDY0LjQ1MUMyNTUuNDQzIDY0LjQ1MSAyNjAuMTE1IDY1LjAxOCAyNjQuMDM1IDY3LjI4NUMyNzQuNTIxIDczLjM1NCAyNzcuMTc4IDg5LjgyIDI4NS42OTEgOTguMzMyQzI5NC4xOTkgMTA2Ljg0NCAzMTAuNjY0IDEwOS41MDQgMzE2LjcyOSAxMTkuOTlDMzIyLjcxMSAxMzAuMzMgMzE2Ljg0NCAxNDUuODg5IDMxOS45OTggMTU3LjY5OUMzMjMuMDUxIDE2OS4xMTMgMzM2IDE3OS42MjMgMzM2IDE5MkMzMzYgMjA0LjM4NSAzMjMuMDQ5IDIxNC45IDMxOS45OTIgMjI2LjMyMlpNMTkyIDEyOEMxNTYuNjUgMTI4IDEyOCAxNTYuNTgyIDEyOCAxOTJDMTI4IDIyNy4zMzIgMTU2LjY1IDI1NiAxOTIgMjU2UzI1NiAyMjcuMzMyIDI1NiAxOTJDMjU2IDE1Ni41ODIgMjI3LjM1IDEyOCAxOTIgMTI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function AwardSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 192C384 170.504 373.732 154.908 367.596 145.59C367.441 145.354 367.285 145.119 367.129 144.887C367.156 144.479 367.184 144.072 367.205 143.664C367.818 132.652 368.846 114.221 358.275 95.951C347.643 77.566 331.074 69.24 321.176 64.266C320.861 64.107 320.545 63.953 320.23 63.797C320.074 63.48 319.918 63.164 319.76 62.848C314.789 52.949 306.467 36.383 288.076 25.74C277.275 19.49 264.988 16.451 250.512 16.451C247.191 16.451 243.783 16.615 240.369 16.805C239.957 16.826 239.543 16.852 239.129 16.875C238.893 16.717 238.656 16.559 238.418 16.402C229.098 10.268 213.498 0 192 0C170.506 0 154.91 10.268 145.592 16.402C145.359 16.557 145.127 16.711 144.896 16.867C144.482 16.842 144.072 16.818 143.664 16.795C140.242 16.605 136.826 16.439 133.498 16.439C119.031 16.439 106.75 19.477 95.951 25.727C77.564 36.363 69.24 52.93 64.268 62.828C64.109 63.143 63.955 63.457 63.801 63.771C63.486 63.926 63.17 64.08 62.855 64.238C52.955 69.211 36.385 77.533 25.742 95.928C15.17 114.186 16.193 132.623 16.807 143.639C16.828 144.047 16.855 144.457 16.883 144.863C16.725 145.1 16.566 145.336 16.408 145.574C10.271 154.896 0 170.5 0 192C0 213.498 10.271 229.094 16.408 238.414C16.562 238.646 16.719 238.881 16.873 239.111C16.848 239.518 16.82 239.924 16.797 240.33C16.182 251.344 15.152 269.775 25.725 288.049C36.371 306.439 52.932 314.762 62.826 319.732C63.143 319.891 63.459 320.047 63.775 320.201C63.93 320.52 64.086 320.836 64.244 321.152C69.215 331.049 77.537 347.613 95.92 358.256C96.73 358.725 97.703 358.871 98.531 359.305L70.74 492.699C68.014 505.793 81.598 516.254 93.559 510.273L192 461.053L290.441 510.273C302.402 516.254 315.986 505.793 313.26 492.699L285.471 359.312C286.285 358.885 287.246 358.742 288.045 358.279C306.441 347.639 314.768 331.066 319.742 321.164C319.898 320.852 320.053 320.539 320.207 320.227C320.52 320.072 320.834 319.918 321.148 319.76C331.047 314.787 347.617 306.467 358.26 288.076C368.836 269.811 367.811 251.375 367.199 240.361C367.176 239.951 367.148 239.543 367.121 239.133C367.281 238.896 367.439 238.658 367.598 238.42C373.732 229.098 384 213.496 384 192ZM319.992 226.322C316.838 238.133 322.703 253.691 316.717 264.031C310.646 274.52 294.182 277.176 285.668 285.688C277.16 294.197 274.5 310.662 264.012 316.729C260.096 318.994 255.432 319.561 250.506 319.561C245.59 319.561 240.414 318.996 235.461 318.996C232.273 318.996 229.178 319.23 226.305 319.998C214.891 323.047 204.375 336 192 336C179.617 336 169.102 323.047 157.68 319.992C154.801 319.223 151.701 318.988 148.508 318.988C143.562 318.988 138.398 319.549 133.49 319.549C128.559 319.549 123.889 318.982 119.969 316.715C109.482 310.645 106.826 294.18 98.312 285.668C89.805 277.156 73.342 274.496 67.271 264.01C61.289 253.67 67.16 238.109 64.006 226.301C60.955 214.887 48 204.377 48 192C48 179.615 60.955 169.098 64.012 157.678C67.166 145.867 61.301 130.307 67.289 119.967C73.357 109.479 89.824 106.822 98.336 98.311C106.846 89.803 109.506 73.338 119.992 67.271C123.908 65.006 128.572 64.439 133.498 64.439C138.414 64.439 143.59 65.004 148.543 65.004C151.73 65.004 154.826 64.77 157.699 64.002C169.113 60.951 179.625 48 192 48C204.387 48 214.9 60.953 226.324 64.008C229.201 64.777 232.301 65.012 235.494 65.012C240.439 65.012 245.605 64.451 250.512 64.451C255.443 64.451 260.115 65.018 264.035 67.285C274.521 73.354 277.178 89.82 285.691 98.332C294.199 106.844 310.664 109.504 316.729 119.99C322.711 130.33 316.844 145.889 319.998 157.699C323.051 169.113 336 179.623 336 192C336 204.385 323.049 214.9 319.992 226.322ZM192 128C156.65 128 128 156.582 128 192C128 227.332 156.65 256 192 256S256 227.332 256 192C256 156.582 227.35 128 192 128Z" />
        </Icon>
    </>
}