
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tractor` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tractor?s=duotone tractor}
 * @preview ![tractor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUyOCAzMzZDNDc5LjM5OCAzMzYgNDQwIDM3NS4zOTggNDQwIDQyNEM0NDAgNDcyLjYgNDc5LjM5OCA1MTIgNTI4IDUxMlM2MTYgNDcyLjYgNjE2IDQyNEM2MTYgMzc1LjM5OCA1NzYuNjAyIDMzNiA1MjggMzM2Wk01MjggNDQ4QzUxNC43NDYgNDQ4IDUwNCA0MzcuMjU0IDUwNCA0MjRDNTA0IDQxMC43NDQgNTE0Ljc0NiA0MDAgNTI4IDQwMFM1NTIgNDEwLjc0NCA1NTIgNDI0QzU1MiA0MzcuMjU0IDU0MS4yNTQgNDQ4IDUyOCA0NDhaTTMyOS45OTkgMjkxLjk5OEgzMjIuODU5QzMxOS44OTYgMjgyLjA0NSAzMTUuOTI0IDI3Mi40MjIgMzExIDI2My4yNzlMMzE2LjA2MSAyNTguMjE5QzMyNC42NSAyNDkuNjI5IDMyNC42NSAyMzUuNzAxIDMxNi4wNjEgMjI3LjEwOUwyODQuOSAxOTZDMjc2LjMwOSAxODcuNDA4IDI2Mi4zODEgMTg3LjQwOCAyNTMuNzg5IDE5NkwyNDguNzMgMjAxLjA1OUMyMzkuNTg2IDE5Ni4xMTkgMjI5Ljk1OSAxOTIuMTI3IDIyMCAxODkuMTQ4VjE4MS45OThDMjIwIDE2OS44NSAyMTAuMTUgMTYwIDE5Ny45OTkgMTYwSDE1My45OTlDMTQxLjg1IDE2MCAxMzIgMTY5Ljg1IDEzMiAxODEuOTk4VjE4OS4xMzlDMTIyLjA0MyAxOTIuMTE5IDExMi40MTYgMTk2LjExMSAxMDMuMjcgMjAxLjA0OUw5OC4yNyAxOTZDODkuNjggMTg3LjQwOCA3NS43NTIgMTg3LjQwOCA2Ny4xNiAxOTZMMzYgMjI3LjFDMjcuNDEgMjM1LjY5MSAyNy40MSAyNDkuNjE3IDM2IDI1OC4yMDlMNDEuMDYxIDI2My4yN0MzNi4xMTkgMjcyLjQxMiAzMi4xMjkgMjgyLjAzOSAyOS4xNSAyOTEuOTk4SDIxLjk5OUM5Ljg1IDI5MS45OTggMCAzMDEuODUgMCAzMTRWMzU3Ljk5OEMwIDM3MC4xNDggOS44NSAzODAgMjEuOTk5IDM4MEgyOS4xNDFDMzIuMTE5IDM4OS45NTUgMzYuMTExIDM5OS41ODIgNDEuMDUxIDQwOC43MjlMMzYuMDUxIDQxMy43MjlDMjcuNDYxIDQyMi4zMiAyNy40NjEgNDM2LjI0OCAzNi4wNTEgNDQ0Ljg0TDY3LjEgNDc1Ljk5OEM3NS42OTEgNDg0LjU5IDg5LjYxOSA0ODQuNTkgOTguMjExIDQ3NS45OThMMTAzLjI3IDQ3MC45MzlDMTEyLjQxNCA0NzUuODc5IDEyMi4wNDEgNDc5Ljg2OSAxMzIgNDgyLjg1VjQ4OS45OThDMTMyIDUwMi4xNDggMTQxLjg1IDUxMiAxNTMuOTk5IDUxMkgxOTcuOTk5QzIxMC4xNSA1MTIgMjIwIDUwMi4xNDggMjIwIDQ4OS45OThWNDgyLjg1OUMyMjkuOTUzIDQ3OS44OTUgMjM5LjU3NiA0NzUuOTIyIDI0OC43MjEgNDcxTDI1My43NzkgNDc2LjA1OUMyNjIuMzcxIDQ4NC42NDggMjc2LjI5OSA0ODQuNjQ4IDI4NC44OTEgNDc2LjA1OUwzMTYgNDQ0Ljg5OEMzMjQuNTkgNDM2LjMwNyAzMjQuNTkgNDIyLjM4MSAzMTYgNDEzLjc4OUwzMTAuOTM5IDQwOC43MjlDMzE1Ljg4MSAzOTkuNTg0IDMxOS44NzEgMzg5Ljk1NyAzMjIuODUgMzgwSDMyOS45OTlDMzQyLjE1IDM4MCAzNTIgMzcwLjE0OCAzNTIgMzU3Ljk5OFYzMTRDMzUyIDMwMS44NSAzNDIuMTUgMjkxLjk5OCAzMjkuOTk5IDI5MS45OThaTTE3NiA0MTUuOTk4QzEzMS44MTYgNDE1Ljk5OCA5NiAzODAuMTgyIDk2IDMzNS45OThDOTYgMjkxLjgxNiAxMzEuODE2IDI1NS45OTggMTc2IDI1NS45OThTMjU2IDI5MS44MTYgMjU2IDMzNS45OThDMjU2IDM4MC4xODIgMjIwLjE4NCA0MTUuOTk4IDE3NiA0MTUuOTk4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik02NDAgMTkyVjI0Mi43NkM2NDAuMDAyIDI1MS4yNDYgNjM2LjYzMSAyNTkuMzg3IDYzMC42MzEgMjY1LjM4OUw1NzkuODExIDMxNi4xOTlDNTYzLjY4OCAzMDguMjYgNTQ1Ljk3MSAzMDQuMDg4IDUyOCAzMDRDNDg4Ljg1OSAzMDQgNDU0LjQ0OSAzMjMgNDMyLjUzOSAzNTJIMzUyVjMxNEMzNTIgMzAxLjg1IDM0Mi4xNSAyOTIgMzI5Ljk5OSAyOTJIMzIyLjg1OUMzMTkuODk2IDI4Mi4wNDMgMzE1LjkyNCAyNzIuNDE2IDMxMSAyNjMuMjdMMzE2LjA2MSAyNTguMjA5QzMyNC42NSAyNDkuNjE5IDMyNC42NSAyMzUuNjkxIDMxNi4wNjEgMjI3LjFMMjg0LjkgMTk2QzI3Ni4zMDkgMTg3LjQxIDI2Mi4zODEgMTg3LjQxIDI1My43ODkgMTk2TDI0OC43MyAyMDEuMDU5QzIzOS41ODggMTk2LjExMSAyMjkuOTYxIDE5Mi4xMTcgMjIwIDE4OS4xMzlWMTgyQzIyMCAxNjkuODUgMjEwLjE1IDE2MCAxOTcuOTk5IDE2MEgzMDhMMjY2Ljg5MSA2NEgxNjBWMTYwSDE1My45OTlDMTQxLjg1IDE2MCAxMzIgMTY5Ljg1IDEzMiAxODJWMTg5LjEzOUMxMjIuMDQ3IDE5Mi4xMDIgMTEyLjQyNCAxOTYuMDc2IDEwMy4yNzkgMjAxTDk4LjIyMSAxOTZDOTcuNTIzIDE5NS4zMDkgOTYuNzgxIDE5NC42NjQgOTYgMTk0LjA3VjQ4Qzk2LjAyNyAyMS41MDIgMTE3LjUwMiAwLjAyNyAxNDQgMEgyNzcuNDQ5QzI5Ni42NzQgLTAuMDIgMzE0LjA0OSAxMS40NTMgMzIxLjU4IDI5LjEzOUwzNzcuNjcgMTYwSDQ4MFYxMTkuNzk5QzQ4MC4wMTggODkuOTU1IDQ5MC40NTEgNjEuMDU1IDUwOS41IDM4LjA4QzUxNS4xMzcgMzEuMDc0IDUyNS4zODUgMjkuOTYzIDUzMi4zODkgMzUuNkM1MzMuMDM1IDM2LjExOSA1MzMuNjQxIDM2LjY4OCA1MzQuMTk5IDM3LjI5OUw1NTUuODMgNjEuNDY5QzU2MC42OTkgNjYuOSA1NjEuNTcgNzUuMTYgNTU3LjE1IDgwLjk1OUM1NDguNjMxIDkyLjExNSA1NDQuMDEgMTA1Ljc2MiA1NDQgMTE5Ljc5OVYxNjBINjA4QzYyNS42NzQgMTYwIDY0MCAxNzQuMzI2IDY0MCAxOTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Tractor(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M528 336C479.398 336 440 375.398 440 424C440 472.6 479.398 512 528 512S616 472.6 616 424C616 375.398 576.602 336 528 336ZM528 448C514.746 448 504 437.254 504 424C504 410.744 514.746 400 528 400S552 410.744 552 424C552 437.254 541.254 448 528 448ZM329.999 291.998H322.859C319.896 282.045 315.924 272.422 311 263.279L316.061 258.219C324.65 249.629 324.65 235.701 316.061 227.109L284.9 196C276.309 187.408 262.381 187.408 253.789 196L248.73 201.059C239.586 196.119 229.959 192.127 220 189.148V181.998C220 169.85 210.15 160 197.999 160H153.999C141.85 160 132 169.85 132 181.998V189.139C122.043 192.119 112.416 196.111 103.27 201.049L98.27 196C89.68 187.408 75.752 187.408 67.16 196L36 227.1C27.41 235.691 27.41 249.617 36 258.209L41.061 263.27C36.119 272.412 32.129 282.039 29.15 291.998H21.999C9.85 291.998 0 301.85 0 314V357.998C0 370.148 9.85 380 21.999 380H29.141C32.119 389.955 36.111 399.582 41.051 408.729L36.051 413.729C27.461 422.32 27.461 436.248 36.051 444.84L67.1 475.998C75.691 484.59 89.619 484.59 98.211 475.998L103.27 470.939C112.414 475.879 122.041 479.869 132 482.85V489.998C132 502.148 141.85 512 153.999 512H197.999C210.15 512 220 502.148 220 489.998V482.859C229.953 479.895 239.576 475.922 248.721 471L253.779 476.059C262.371 484.648 276.299 484.648 284.891 476.059L316 444.898C324.59 436.307 324.59 422.381 316 413.789L310.939 408.729C315.881 399.584 319.871 389.957 322.85 380H329.999C342.15 380 352 370.148 352 357.998V314C352 301.85 342.15 291.998 329.999 291.998ZM176 415.998C131.816 415.998 96 380.182 96 335.998C96 291.816 131.816 255.998 176 255.998S256 291.816 256 335.998C256 380.182 220.184 415.998 176 415.998Z" />
            <path d="M640 192V242.76C640.002 251.246 636.631 259.387 630.631 265.389L579.811 316.199C563.688 308.26 545.971 304.088 528 304C488.859 304 454.449 323 432.539 352H352V314C352 301.85 342.15 292 329.999 292H322.859C319.896 282.043 315.924 272.416 311 263.27L316.061 258.209C324.65 249.619 324.65 235.691 316.061 227.1L284.9 196C276.309 187.41 262.381 187.41 253.789 196L248.73 201.059C239.588 196.111 229.961 192.117 220 189.139V182C220 169.85 210.15 160 197.999 160H308L266.891 64H160V160H153.999C141.85 160 132 169.85 132 182V189.139C122.047 192.102 112.424 196.076 103.279 201L98.221 196C97.523 195.309 96.781 194.664 96 194.07V48C96.027 21.502 117.502 0.027 144 0H277.449C296.674 -0.02 314.049 11.453 321.58 29.139L377.67 160H480V119.799C480.018 89.955 490.451 61.055 509.5 38.08C515.137 31.074 525.385 29.963 532.389 35.6C533.035 36.119 533.641 36.688 534.199 37.299L555.83 61.469C560.699 66.9 561.57 75.16 557.15 80.959C548.631 92.115 544.01 105.762 544 119.799V160H608C625.674 160 640 174.326 640 192Z" />
        </Icon>
    </>
}