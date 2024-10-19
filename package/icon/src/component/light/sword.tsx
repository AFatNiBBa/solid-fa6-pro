
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sword` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sword?s=light sword}
 * @preview ![sword](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTUuOTY1IDAuMDQ3QzQ5NC44NjMgMC4wNDcgNTA0Ljc3NSAtMS43MDMgMzk5Ljk3MyAxNi4wNDdMMTk4LjYxMSAyMTcuNDAyQzE5Mi4zNjMgMjIzLjY0OCAxOTIuMzYzIDIzMy43NzcgMTk4LjYxMSAyNDAuMDIzQzIwNC44NTcgMjQ2LjI3MyAyMTQuOTg2IDI0Ni4yNzMgMjIxLjIzNCAyNDAuMDIzTDQxNS4zNDYgNDUuOTE4TDQ3Ni40NjcgMzUuNTQzTDQ2Ni4wOTIgOTYuNjY0TDI3MS45OCAyOTAuNzdDMjY1LjczNCAyOTcuMDE2IDI2NS43MzQgMzA3LjE0OCAyNzEuOTggMzEzLjM5MUMyNzguMjI5IDMxOS42NDEgMjg4LjM1NyAzMTkuNjQxIDI5NC42MDQgMzEzLjM5MUw0OTUuOTY1IDExMi4wMzlMNTExLjg0IDE4LjI5N0M1MTMuMjE1IDguNTQ3IDUwNS41OSAwLjA0NyA0OTUuOTY1IDAuMDQ3Wk0xMjIuNzAxIDIwOS4zNjNDMTEzLjA1NyAyMDMuNzAzIDEwNS43NSAyMDkuMzk1IDEwMy40OTIgMjExLjY1Mkw2OC43NDYgMjQ2LjM5OEM2My4yNDYgMjUxLjc3MyA2Mi40OTYgMjYwLjI3MyA2Ni43NDYgMjY2LjY0OEwxMTIuNjE3IDMzNS4zOTFMNzIuNzQ0IDM3NS4yNjJMNTUuOTk2IDM2Ni44OTFDNTQuODAzIDM2Ni4yNSA0Ni42NzYgMzYyLjcxMSAzOS45OTggMzY5LjM5MUw0LjEyNSA0MDUuMzgzQy0xLjM3NSA0MTAuNzU4IC0xLjM3NSA0MTkuNjMzIDQuMTI1IDQyNS4wMDhMODYuOTk0IDUwNy44NzVDODkuNzQ0IDUxMC42MjUgOTMuMjQ0IDUxMiA5Ni44NjkgNTEyQzEwMC4zNjcgNTEyIDEwMy44NjcgNTEwLjYyNSAxMDYuNjE3IDUwNy44NzVMMTQyLjYxNSA0NzIuMDA0QzE0Ni43NCA0NjcuNzU0IDE0Ny44NjUgNDYxLjM3OSAxNDUuMTE1IDQ1Ni4wMDRMMTM2Ljc0IDQzOS4yNThMMTc2LjYxMyAzOTkuMzgzTDI0NS4zNTcgNDQ1LjM4M0MyNTEuOTE2IDQ0OS41NTUgMjYwLjEzOSA0NDguNjMzIDI2NS42MDUgNDQzLjM4M0wzMDAuMzU0IDQwOC41MDhDMzA1LjYxNSA0MDMuMjUgMzA2LjE3NiAzOTUuMzY3IDMwMi41NzggMzg5LjIzOEwxMjIuNzAxIDIwOS4zNjNaTTI1Mi4yMzIgNDExLjM4M0MxODQuMjU2IDM2Ni4wMTYgMjAwLjY0MSAzNzYuOTIyIDE3Mi40ODggMzU4LjI2Nkw5Ny44NjcgNDMyLjg4M0MxMDkuOTA0IDQ1Ny4xMDIgMTA3LjM0NiA0NTIgMTEwLjc0MiA0NTguNjI5TDk2Ljg2OSA0NzIuNTA0TDM5LjQ5OCA0MTUuMTMzTDUzLjM3MSA0MDEuMjU4QzYwLjAwNCA0MDQuNjU2IDU0Ljg5NiA0MDIuMDk0IDc5LjExOSA0MTQuMTMzTDE1My43MzggMzM5LjUxNkMxMzUuMDc0IDMxMS4zNTkgMTQ1Ljk4IDMyNy43NDIgMTAwLjYxNyAyNTkuNzczTDExNC43NDIgMjQ1LjUyM0wyNjYuNDggMzk3LjI1OEwyNTIuMjMyIDQxMS4zODNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Sword(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M495.965 0.047C494.863 0.047 504.775 -1.703 399.973 16.047L198.611 217.402C192.363 223.648 192.363 233.777 198.611 240.023C204.857 246.273 214.986 246.273 221.234 240.023L415.346 45.918L476.467 35.543L466.092 96.664L271.98 290.77C265.734 297.016 265.734 307.148 271.98 313.391C278.229 319.641 288.357 319.641 294.604 313.391L495.965 112.039L511.84 18.297C513.215 8.547 505.59 0.047 495.965 0.047ZM122.701 209.363C113.057 203.703 105.75 209.395 103.492 211.652L68.746 246.398C63.246 251.773 62.496 260.273 66.746 266.648L112.617 335.391L72.744 375.262L55.996 366.891C54.803 366.25 46.676 362.711 39.998 369.391L4.125 405.383C-1.375 410.758 -1.375 419.633 4.125 425.008L86.994 507.875C89.744 510.625 93.244 512 96.869 512C100.367 512 103.867 510.625 106.617 507.875L142.615 472.004C146.74 467.754 147.865 461.379 145.115 456.004L136.74 439.258L176.613 399.383L245.357 445.383C251.916 449.555 260.139 448.633 265.605 443.383L300.354 408.508C305.615 403.25 306.176 395.367 302.578 389.238L122.701 209.363ZM252.232 411.383C184.256 366.016 200.641 376.922 172.488 358.266L97.867 432.883C109.904 457.102 107.346 452 110.742 458.629L96.869 472.504L39.498 415.133L53.371 401.258C60.004 404.656 54.896 402.094 79.119 414.133L153.738 339.516C135.074 311.359 145.98 327.742 100.617 259.773L114.742 245.523L266.48 397.258L252.232 411.383Z" />
        </Icon>
    </>
}