
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `spider` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/spider?s=light spider}
 * @preview ![spider](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NDMuMTE2IDI4MS42NzdDNTQxLjcxIDI3Ni43MDggNTM3Ljk2IDI3Mi43MDkgNTMzLjA1NCAyNzAuOTlMMzkxLjYyMSAyMjEuMDQ5TDUyOC44MDQgMjEwLjUyN0M1MzQuOTI5IDIxMC4wMjcgNTQwLjI0MSAyMDYuMTIxIDU0Mi40OTEgMjAwLjQwMkw1NzQuODk2IDExNy44NzhDNTc4LjExNSAxMDkuNjYgNTc0LjA1MyAxMDAuMzggNTY1LjgzNCA5Ny4xM0M1NTcuNjc4IDkzLjg4MSA1NDguMzM1IDk3Ljk0MyA1NDUuMDg1IDEwNi4xOTJMNTE2LjM2NyAxNzkuMzczTDM5My4wMjggMTg4LjgyM0w0ODcuMDU2IDE0MC4xODlDNDkzLjgzNyAxMzYuNjg5IDQ5Ny4yMTIgMTI4Ljg3NyA0OTUuMDg3IDEyMS41MzRMNDYzLjM2OSAxMS42MDdDNDYwLjkgMy4xMzggNDUxLjk5NCAtMS44OTIgNDQzLjU1NyAwLjY3QzQzNS4wNTcgMy4xMDcgNDMwLjE4MyAxMS45ODEgNDMyLjYyIDIwLjQ4MUw0NjAuNzEzIDExNy43ODVMMzY3Ljk5NyAxNjUuNzM3VjE2MC4wMzFDMzY3Ljk5NyAxMjUuMDM0IDM0NS40OTggOTEuNzU2IDMxNC40NjggODAuOTEzQzMwNi41NjIgNzguMTMyIDI5Ny44NzUgODEuOTEzIDI5NC41NjIgODkuNTM3TDI4Ny42ODggMTA1LjA2N0wyODAuMTI1IDg4LjYzMUMyNzYuNTYzIDgwLjg4MiAyNjcuNjI2IDc3LjQxMyAyNTkuNjg4IDgwLjQ0NEMyMjkuNzUyIDkyLjM0OSAyMDguMDAzIDEyNS44MTUgMjA4LjAwMyAxNjAuMDMxVjE2NS43MzdMMTE1LjI4NyAxMTcuNzg1TDE0My4zOCAyMC40ODFDMTQ1LjgxNyAxMS45ODEgMTQwLjk0MyAzLjEwNyAxMzIuNDQzIDAuNjdDMTI0LjAwNiAtMS44OTIgMTE1LjEgMy4xMzggMTEyLjYzMSAxMS42MDdMODAuOTEzIDEyMS41MzRDNzguNzg4IDEyOC44NzcgODIuMTYzIDEzNi42ODkgODguOTQ0IDE0MC4xODlMMTgyLjk3MiAxODguODIzTDU5LjYzMyAxNzkuMzczTDMwLjkxNSAxMDYuMTkyQzI3LjY2NSA5Ny45NDMgMTguMzIyIDkzLjg4MSAxMC4xNjYgOTcuMTNDMS45NDcgMTAwLjM4IC0yLjExNSAxMDkuNjYgMS4xMDQgMTE3Ljg3OEwzMy41MDkgMjAwLjQwMkMzNS43NTkgMjA2LjEyMSA0MS4wNzEgMjEwLjAyNyA0Ny4xOTYgMjEwLjUyN0wxODQuMzc5IDIyMS4wNDlMNDIuOTQ2IDI3MC45OUMzOC4wNCAyNzIuNzA5IDM0LjI5IDI3Ni43MDggMzIuODg0IDI4MS42NzdMMC44ODUgMzkzLjY2N0MtMS41NTMgNDAyLjE2NiAzLjM1MyA0MTEuMDQgMTEuODUzIDQxMy40NDZDMTMuMzIyIDQxMy44ODQgMTQuODIyIDQxNC4wNzEgMTYuMjU5IDQxNC4wNzFDMjMuMjI4IDQxNC4wNzEgMjkuNjM0IDQwOS41MDkgMzEuNjM0IDQwMi40NzhMNjEuMzgzIDI5OC40MjVMMTczLjI2OCAyNTguOTExTDcwLjE2NCAzMzkuMzlDNjQuODIgMzQzLjU3NyA2Mi42OTUgMzUwLjYzOSA2NC44MiAzNTcuMDc2TDExMi44MTggNTAxLjA2M0MxMTUuMDY4IDUwNy43NSAxMjEuMzE4IDUxMiAxMjguMDA1IDUxMkMxMjkuNjkzIDUxMiAxMzEuMzggNTExLjc1IDEzMy4wNjggNTExLjE4OEMxNDEuNDQyIDUwOC4zNzUgMTQ1Ljk3NCA0OTkuMzE0IDE0My4xOTIgNDkwLjkzOUw5OC43NTYgMzU3LjY3TDE3OC41NTUgMjk1LjM5MkMxNzQuNTkgMzA3LjA4MSAxNzIuMDA0IDMxOS4yNzEgMTcyLjAwNCAzMzIuMDE2QzE3Mi4wMDQgMzk1Ljk3OSAyMjQuMDMzIDQ0OC4wMDYgMjg4IDQ0OC4wMDZTNDAzLjk5NiAzOTUuOTc5IDQwMy45OTYgMzMyLjAxNkM0MDMuOTk2IDMxOS4yNzUgNDAxLjQxIDMwNy4wODQgMzk3LjQ0OSAyOTUuMzk2TDQ3Ny4yNDQgMzU3LjY3TDQzMi44MDggNDkwLjkzOUM0MzAuMDI2IDQ5OS4zMTQgNDM0LjU1NyA1MDguMzc1IDQ0Mi45MzIgNTExLjE4OEM0NDQuNjIgNTExLjc1IDQ0Ni4zMDcgNTEyIDQ0Ny45OTUgNTEyQzQ1NC42ODIgNTEyIDQ2MC45MzIgNTA3Ljc1IDQ2My4xODIgNTAxLjA2M0w1MTEuMTggMzU3LjA3NkM1MTMuMzA1IDM1MC42MzkgNTExLjE4IDM0My41NzcgNTA1LjgzNiAzMzkuMzlMNDAyLjczMiAyNTguOTExTDUxNC42MTcgMjk4LjQyNUw1NDQuMzY2IDQwMi40NzhDNTQ2LjM2NiA0MDkuNTA5IDU1Mi43NzIgNDE0LjA3MSA1NTkuNzQxIDQxNC4wNzFDNTYxLjE3OCA0MTQuMDcxIDU2Mi42NzggNDEzLjg4NCA1NjQuMTQ3IDQxMy40NDZDNTcyLjY0NyA0MTEuMDQgNTc3LjU1MyA0MDIuMTY2IDU3NS4xMTUgMzkzLjY2N0w1NDMuMTE2IDI4MS42NzdaTTI4OCA0MTYuMDA4QzI0MS42ODkgNDE2LjAwOCAyMDQuMDAzIDM3OC4zMjQgMjA0LjAwMyAzMzIuMDE2QzIwNC4wMDMgMzA4LjI2OCAyMTMuOTcxIDI4Ni4yMDcgMjMyLjEyNyAyNjkuODY1TDIzNC43NTIgMjY3LjQ5QzIzOC4wOTUgMjY0LjQ1OSAyNDAuMDAyIDI2MC4xNDcgMjQwLjAwMiAyNTUuNjE2VjE2MC4wMzFDMjQwLjAwMiAxNDQuMjgyIDI0Ny40MzkgMTI4LjQwOSAyNTguNTk1IDExOC4zNzhMMjczLjQ2OSAxNTAuNzE5QzI3Ni4wNjMgMTU2LjQwNiAyODEuNzUgMTYwLjAzMSAyODggMTYwLjAzMUgyODguMTI1QzI5NC40MDYgMTU5Ljk2OCAzMDAuMDkzIDE1Ni4yNSAzMDIuNjI1IDE1MC41MDFMMzE2Ljc0OSAxMTguNTM1QzMyOC4yOCAxMjguMTU5IDMzNS45OTggMTQzLjk3IDMzNS45OTggMTYwLjAzMVYyNTUuNjE2QzMzNS45OTggMjYwLjE0NyAzMzcuOTA1IDI2NC40NTkgMzQxLjI0OCAyNjcuNDlMMzQzLjkwNCAyNjkuODY1QzM2Mi4wMjkgMjg2LjIwNyAzNzEuOTk3IDMwOC4yNjggMzcxLjk5NyAzMzIuMDE2QzM3MS45OTcgMzc4LjMyNCAzMzQuMzExIDQxNi4wMDggMjg4IDQxNi4wMDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Spider(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M543.116 281.677C541.71 276.708 537.96 272.709 533.054 270.99L391.621 221.049L528.804 210.527C534.929 210.027 540.241 206.121 542.491 200.402L574.896 117.878C578.115 109.66 574.053 100.38 565.834 97.13C557.678 93.881 548.335 97.943 545.085 106.192L516.367 179.373L393.028 188.823L487.056 140.189C493.837 136.689 497.212 128.877 495.087 121.534L463.369 11.607C460.9 3.138 451.994 -1.892 443.557 0.67C435.057 3.107 430.183 11.981 432.62 20.481L460.713 117.785L367.997 165.737V160.031C367.997 125.034 345.498 91.756 314.468 80.913C306.562 78.132 297.875 81.913 294.562 89.537L287.688 105.067L280.125 88.631C276.563 80.882 267.626 77.413 259.688 80.444C229.752 92.349 208.003 125.815 208.003 160.031V165.737L115.287 117.785L143.38 20.481C145.817 11.981 140.943 3.107 132.443 0.67C124.006 -1.892 115.1 3.138 112.631 11.607L80.913 121.534C78.788 128.877 82.163 136.689 88.944 140.189L182.972 188.823L59.633 179.373L30.915 106.192C27.665 97.943 18.322 93.881 10.166 97.13C1.947 100.38 -2.115 109.66 1.104 117.878L33.509 200.402C35.759 206.121 41.071 210.027 47.196 210.527L184.379 221.049L42.946 270.99C38.04 272.709 34.29 276.708 32.884 281.677L0.885 393.667C-1.553 402.166 3.353 411.04 11.853 413.446C13.322 413.884 14.822 414.071 16.259 414.071C23.228 414.071 29.634 409.509 31.634 402.478L61.383 298.425L173.268 258.911L70.164 339.39C64.82 343.577 62.695 350.639 64.82 357.076L112.818 501.063C115.068 507.75 121.318 512 128.005 512C129.693 512 131.38 511.75 133.068 511.188C141.442 508.375 145.974 499.314 143.192 490.939L98.756 357.67L178.555 295.392C174.59 307.081 172.004 319.271 172.004 332.016C172.004 395.979 224.033 448.006 288 448.006S403.996 395.979 403.996 332.016C403.996 319.275 401.41 307.084 397.449 295.396L477.244 357.67L432.808 490.939C430.026 499.314 434.557 508.375 442.932 511.188C444.62 511.75 446.307 512 447.995 512C454.682 512 460.932 507.75 463.182 501.063L511.18 357.076C513.305 350.639 511.18 343.577 505.836 339.39L402.732 258.911L514.617 298.425L544.366 402.478C546.366 409.509 552.772 414.071 559.741 414.071C561.178 414.071 562.678 413.884 564.147 413.446C572.647 411.04 577.553 402.166 575.115 393.667L543.116 281.677ZM288 416.008C241.689 416.008 204.003 378.324 204.003 332.016C204.003 308.268 213.971 286.207 232.127 269.865L234.752 267.49C238.095 264.459 240.002 260.147 240.002 255.616V160.031C240.002 144.282 247.439 128.409 258.595 118.378L273.469 150.719C276.063 156.406 281.75 160.031 288 160.031H288.125C294.406 159.968 300.093 156.25 302.625 150.501L316.749 118.535C328.28 128.159 335.998 143.97 335.998 160.031V255.616C335.998 260.147 337.905 264.459 341.248 267.49L343.904 269.865C362.029 286.207 371.997 308.268 371.997 332.016C371.997 378.324 334.311 416.008 288 416.008Z" />
        </Icon>
    </>
}