
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `galaxy` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/galaxy?s=thin galaxy}
 * @preview ![galaxy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDYuNTM1IDI2OS4zMjhDNDg5LjM0NiAxOTYuODg3IDQyOC45NjMgMTM4LjUxNiAzNTYuMjcgMTI0LjA1NUMzNDMuMzkyIDEyMS40MDIgMzMwLjA3OSAxMjAuMDQ3IDMxNi44MTIgMTIwLjA0N0MzMDQuNDI2IDEyMC4wNDcgMjkyLjExNCAxMjEuMjA3IDI3OS45ODcgMTIzLjUxMkMyOTEuMzE1IDkzLjc1OCAzMTQuMDk4IDY5LjcwMyAzNDQuMTA0IDU2LjgyOEMzNTYuNTk2IDUxLjQ2MSAzNjMuNTczIDM4Ljg0NCAzNjEuNDcxIDI1LjQzQzM1OS4zODUgMTIuMTAyIDM0OC45NzUgMi4yODUgMzM1LjU3IDEuMDA0QzMyOS4wNyAwLjMzMiAzMjIuNDQzIDAgMzE1LjgyOCAwQzMwMC4zNjQgMCAyODQuNzE5IDEuODM2IDI2OS4zMjcgNS40NTdDMTk2Ljg5IDIyLjY0MSAxMzguNTIzIDgzLjAyNyAxMjQuMDU4IDE1NS43MjdDMTE4Ljg4NyAxODAuODQgMTE4Ljc0IDIwNi43ODUgMTIzLjUyNSAyMzIuMDE2QzkzLjc2NiAyMjAuNjkxIDY5LjcxIDE5Ny45MDYgNTYuODM4IDE2Ny44OTFDNTIuMTM1IDE1Ni45NTMgNDEuODc1IDE1MC4xNjQgMzAuMDU5IDE1MC4xNjRDMTQuOTMxIDE1MC4xNjQgMi40NDUgMTYxLjQ1MyAxLjAxMSAxNzYuNDI2Qy0xLjIzMyAxOTguMjM0IDAuMjYxIDIyMC41NjIgNS40NjYgMjQyLjY3NkMyMi42NTMgMzE1LjExMyA4My4wMzYgMzczLjQ4NCAxNTUuNzMxIDM4Ny45NDVDMTY4LjYxIDM5MC41OTggMTgxLjkyIDM5MS45NTMgMTk1LjE4OSAzOTEuOTUzQzIwNy41NzUgMzkxLjk1MyAyMTkuODg1IDM5MC43OTMgMjMyLjAxMiAzODguNDg4QzIyMC42ODQgNDE4LjI0MiAxOTcuOTAyIDQ0Mi4zMDEgMTY3Ljg5NyA0NTUuMTcyQzE1NS40MDMgNDYwLjU0MyAxNDguNDI5IDQ3My4xNiAxNTAuNTI4IDQ4Ni41NzRDMTUyLjYxNiA0OTkuODk4IDE2My4wMjQgNTA5LjcxNSAxNzYuNDMgNTEwLjk5NkMxODIuOTMgNTExLjY2OCAxODkuNTU4IDUxMiAxOTYuMTcxIDUxMkMyMTEuNjM4IDUxMiAyMjcuMjgyIDUxMC4xNjQgMjQyLjY3MiA1MDYuNTQzQzMxNS4xMTEgNDg5LjM1NSAzNzMuNDc5IDQyOC45NzMgMzg3Ljk0MSAzNTYuMjczQzM5My4xMTMgMzMxLjE2NCAzOTMuMjU5IDMwNS4yMTUgMzg4LjQ3NCAyNzkuOTg0QzQxOC4yMzMgMjkxLjMwOSA0NDIuMjg5IDMxNC4wOTQgNDU1LjE2MiAzNDQuMTA5QzQ1OS44NjUgMzU1LjA0NyA0NzAuMTI0IDM2MS44MzYgNDgxLjk0MiAzNjEuODM2QzQ5Ny4wNjkgMzYxLjgzNiA1MDkuNTU5IDM1MC41NDcgNTEwLjk5IDMzNS41NzRDNTEzLjIzMiAzMTMuNzY2IDUxMS43MzggMjkxLjQzOCA1MDYuNTM1IDI2OS4zMjhaTTQ5NS4wNjMgMzM0LjA1MUM0OTQuMzM4IDM0MS42MjkgNDg4LjE2NSAzNDUuODM2IDQ4MS45NDIgMzQ1LjgzNkM0NzcuMDk5IDM0NS44MzYgNDcyLjIyNiAzNDMuMjg5IDQ2OS44NjYgMzM3LjgwMUM0NTEuNDY4IDI5NC45MDYgNDEyLjIxIDI2NC42NzIgMzY2LjAzOSAyNTcuNjQxQzM3Ni41ODYgMjg4LjM0NCAzNzguODEyIDMyMS4yNzcgMzcyLjI1IDM1My4xNTJDMzU4Ljg5MSA0MjAuMzAxIDMwNS42ODggNDc1LjE0OCAyMzkuMDA4IDQ5MC45NjlDMjI0Ljk4MyA0OTQuMjcgMjEwLjYwOCA0OTYgMTk2LjE3MSA0OTZDMTkwLjEwMyA0OTYgMTg0LjAyMyA0OTUuNjk1IDE3Ny45NTMgNDk1LjA3QzE2NC40NzcgNDkzLjc4MSAxNjEuNjY1IDQ3NS4yNjYgMTc0LjIwMyA0NjkuODc1QzIxNy4wOTUgNDUxLjQ3NyAyNDcuMzI4IDQxMi4yMTUgMjU0LjM1OSAzNjYuMDQzQzIzNS4yMzUgMzcyLjYxMyAyMTUuMjQ5IDM3NS45NTMgMTk1LjE4OSAzNzUuOTUzQzE4My4wNDUgMzc1Ljk1MyAxNzAuODcxIDM3NC43MjcgMTU4Ljg1MiAzNzIuMjU0QzkxLjcwNCAzNTguODk1IDM2Ljg2IDMwNS42ODggMjEuMDQgMjM5LjAwOEMxNi4zNSAyMTkuMDg2IDE0LjgyNyAxOTguNDYxIDE2LjkzOCAxNzcuOTQ5QzE3LjY2MyAxNzAuMzcxIDIzLjgzNyAxNjYuMTY0IDMwLjA1OSAxNjYuMTY0QzM0LjkwMSAxNjYuMTY0IDM5Ljc3NCAxNjguNzExIDQyLjEzMyAxNzQuMTk5QzYwLjUzMSAyMTcuMDk0IDk5Ljc4OSAyNDcuMzI4IDE0NS45NiAyNTQuMzU5QzEzNS40MTMgMjIzLjY1NiAxMzMuMTg3IDE5MC43MjcgMTM5Ljc0OSAxNTguODQ4QzE1My4xMSA5MS42OTkgMjA2LjMxMiAzNi44NTIgMjcyLjk5MSAyMS4wMzFDMjg3LjAxOCAxNy43MyAzMDEuMzkxIDE2IDMxNS44MjggMTZDMzIxLjg5NiAxNiAzMjcuOTc2IDE2LjMwNSAzMzQuMDQ2IDE2LjkzQzM0Ny41MjQgMTguMjE5IDM1MC4zMzcgMzYuNzM0IDMzNy43OTYgNDIuMTI1QzI5NC45MDcgNjAuNTI3IDI2NC42NzEgOTkuNzg1IDI1Ny42NCAxNDUuOTU3QzI3Ni43NjcgMTM5LjM4NyAyOTYuNzUgMTM2LjA0NyAzMTYuODEyIDEzNi4wNDdDMzI4Ljk1NCAxMzYuMDQ3IDM0MS4xMyAxMzcuMjczIDM1My4xNDkgMTM5Ljc0NkM0MjAuMjk4IDE1My4xMDUgNDc1LjE0IDIwNi4zMTIgNDkwLjk2MSAyNzIuOTkyQzQ5NS42NDkgMjkyLjkxNCA0OTcuMTcyIDMxMy41MzkgNDk1LjA2MyAzMzQuMDUxWk0yNTYgMjA4QzIyOS41MzQgMjA4IDIwOC4wMDEgMjI5LjUzMSAyMDguMDAxIDI1NlMyMjkuNTM0IDMwNCAyNTYgMzA0UzMwMy45OTggMjgyLjQ2OSAzMDMuOTk4IDI1NlMyODIuNDY2IDIwOCAyNTYgMjA4Wk0yNTYgMjg4QzIzOC4zMzQgMjg4IDIyNC4wMDEgMjczLjY2OCAyMjQuMDAxIDI1NlMyMzguMzM0IDIyNCAyNTYgMjI0UzI4Ny45OTkgMjM4LjMzMiAyODcuOTk5IDI1NlMyNzMuNjY1IDI4OCAyNTYgMjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Galaxy(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M506.535 269.328C489.346 196.887 428.963 138.516 356.27 124.055C343.392 121.402 330.079 120.047 316.812 120.047C304.426 120.047 292.114 121.207 279.987 123.512C291.315 93.758 314.098 69.703 344.104 56.828C356.596 51.461 363.573 38.844 361.471 25.43C359.385 12.102 348.975 2.285 335.57 1.004C329.07 0.332 322.443 0 315.828 0C300.364 0 284.719 1.836 269.327 5.457C196.89 22.641 138.523 83.027 124.058 155.727C118.887 180.84 118.74 206.785 123.525 232.016C93.766 220.691 69.71 197.906 56.838 167.891C52.135 156.953 41.875 150.164 30.059 150.164C14.931 150.164 2.445 161.453 1.011 176.426C-1.233 198.234 0.261 220.562 5.466 242.676C22.653 315.113 83.036 373.484 155.731 387.945C168.61 390.598 181.92 391.953 195.189 391.953C207.575 391.953 219.885 390.793 232.012 388.488C220.684 418.242 197.902 442.301 167.897 455.172C155.403 460.543 148.429 473.16 150.528 486.574C152.616 499.898 163.024 509.715 176.43 510.996C182.93 511.668 189.558 512 196.171 512C211.638 512 227.282 510.164 242.672 506.543C315.111 489.355 373.479 428.973 387.941 356.273C393.113 331.164 393.259 305.215 388.474 279.984C418.233 291.309 442.289 314.094 455.162 344.109C459.865 355.047 470.124 361.836 481.942 361.836C497.069 361.836 509.559 350.547 510.99 335.574C513.232 313.766 511.738 291.438 506.535 269.328ZM495.063 334.051C494.338 341.629 488.165 345.836 481.942 345.836C477.099 345.836 472.226 343.289 469.866 337.801C451.468 294.906 412.21 264.672 366.039 257.641C376.586 288.344 378.812 321.277 372.25 353.152C358.891 420.301 305.688 475.148 239.008 490.969C224.983 494.27 210.608 496 196.171 496C190.103 496 184.023 495.695 177.953 495.07C164.477 493.781 161.665 475.266 174.203 469.875C217.095 451.477 247.328 412.215 254.359 366.043C235.235 372.613 215.249 375.953 195.189 375.953C183.045 375.953 170.871 374.727 158.852 372.254C91.704 358.895 36.86 305.688 21.04 239.008C16.35 219.086 14.827 198.461 16.938 177.949C17.663 170.371 23.837 166.164 30.059 166.164C34.901 166.164 39.774 168.711 42.133 174.199C60.531 217.094 99.789 247.328 145.96 254.359C135.413 223.656 133.187 190.727 139.749 158.848C153.11 91.699 206.312 36.852 272.991 21.031C287.018 17.73 301.391 16 315.828 16C321.896 16 327.976 16.305 334.046 16.93C347.524 18.219 350.337 36.734 337.796 42.125C294.907 60.527 264.671 99.785 257.64 145.957C276.767 139.387 296.75 136.047 316.812 136.047C328.954 136.047 341.13 137.273 353.149 139.746C420.298 153.105 475.14 206.312 490.961 272.992C495.649 292.914 497.172 313.539 495.063 334.051ZM256 208C229.534 208 208.001 229.531 208.001 256S229.534 304 256 304S303.998 282.469 303.998 256S282.466 208 256 208ZM256 288C238.334 288 224.001 273.668 224.001 256S238.334 224 256 224S287.999 238.332 287.999 256S273.665 288 256 288Z" />
        </Icon>
    </>
}