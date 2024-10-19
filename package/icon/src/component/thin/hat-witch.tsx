
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hat-witch` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hat-witch?s=thin hat-witch}
 * @preview ![hat-witch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjcuMzEyIDM3OS4yNTFMMTQzLjE1NiAzNDMuNjVDMTQzLjQ3MyAzNDMuNjg5IDE0My42NzIgMzQ0LjAwMSAxNDQgMzQ0LjAwMUgyNDAuMDMxVjM3Ni4wMDFDMjQwLjAzMSAzODAuNDA3IDI0My42MjUgMzg0LjAwMSAyNDguMDMxIDM4NC4wMDFTMjU2LjAzMSAzODAuNDA3IDI1Ni4wMzEgMzc2LjAwMVYzMjguMDAxQzI1Ni4wMzEgMzIzLjU5NSAyNTkuNjI1IDMyMC4wMDEgMjY0LjAzMSAzMjAuMDAxSDMxMkMzMTYuNDA2IDMyMC4wMDEgMzIwIDMyMy41OTUgMzIwIDMyOC4wMDFWMzc2LjAwMUMzMjAgMzgwLjQwNyAzMjMuNTk0IDM4NC4wMDEgMzI4IDM4NC4wMDFTMzM2IDM4MC40MDcgMzM2IDM3Ni4wMDFWMzQ0LjAwMUg0MzguOTY5TDQ1NC4wMzEgMzc5LjE1N0M0NTUuMzEyIDM4Mi4xODggNDU4LjI4MSAzODQuMDAxIDQ2MS4zNzUgMzg0LjAwMUM0NjIuNDM3IDM4NC4wMDEgNDYzLjUgMzgzLjc4MiA0NjQuNTMxIDM4My4zNDVDNDY4LjU5NCAzODEuNjI2IDQ3MC40NjkgMzc2LjkwNyA0NjguNzE5IDM3Mi44NDVMMzk5LjA5NCAyMTAuMjgzQzM5My44NzUgMTk4LjM0NiAzOTMuMzQ0IDE4NC44NzcgMzk3LjU2MiAxNzIuMzQ2TDQwMy41MzEgMTU0LjE5QzQwNi42MjUgMTQ0LjkwOSA0MTUuMzEyIDEzOC42OSA0MjUuMDk0IDEzOC42OUg0NjIuNzE5QzQ3Mi41MzEgMTM4LjY5IDQ4MS4xNTYgMTQ0LjkwOSA0ODQuMjUgMTU0LjE5TDQ5Ny42ODcgMTk0LjUzM0M0OTguNzUgMTk3LjcyMSA1MDEuNzE5IDE5OS45MDggNTA1LjA2MiAyMDAuMDAyQzUwOS4xNTYgMTk5LjkwOCA1MTEuNTMxIDE5OC4wNjQgNTEyLjcxOSAxOTQuOTRMNTQyIDEyMC41NjVDNTQ2LjY4NyAxMDYuNTk2IDU0My4wOTQgOTEuNDA5IDUzMi43NSA4MS4wNjVMNDY2LjEyNSAxMS4zNzhDNDUzLjc4MSAtMS4wNTkgNDM0LjY1NiAtMy42MjIgNDE5LjMxMiA1LjI4NEwyNTkuOTY5IDEwMy43NTNDMjM1LjUzMSAxMTcuODQ2IDIxNi42ODggMTM4Ljc4NCAyMDUuNSAxNjQuMjIxTDExMi42ODggMzcyLjc1MUMxMTAuOTA2IDM3Ni43ODIgMTEyLjcxOSAzODEuNTAxIDExNi43NSAzODMuMzEzQzEyMC43ODEgMzg1LjA5NSAxMjUuNSAzODMuMjgyIDEyNy4zMTIgMzc5LjI1MVpNMjIwLjEyNSAxNzAuNjlDMjI5LjkzOCAxNDguMzQ2IDI0Ni41IDEzMC4wMDMgMjY4LjE4OCAxMTcuNTAzTDQyNy41MzEgMTkuMDAzQzQzNi4zNzUgMTMuOTA5IDQ0Ny41NjMgMTUuMzQ3IDQ1NC42NTYgMjIuNTM0TDUyMS4zMTIgOTIuMjUzQzUyNy40NjkgOTguNDA5IDUyOS41NjIgMTA3LjI4NCA1MjYuOTY5IDExNS4wNjVMNTA1LjkwNiAxNjguNTY1TDQ5OS40MzggMTQ5LjEyN0M0OTQuMTg4IDEzMy4zMTUgNDc5LjQwNiAxMjIuNjkgNDYyLjcxOSAxMjIuNjlINDI1LjA5NEM0MDguNDA2IDEyMi42OSAzOTMuNjU2IDEzMy4zMTUgMzg4LjM0NCAxNDkuMTU5TDM4Mi4zNzUgMTY3LjI4M0MzNzYuOTA2IDE4My41MzMgMzc3LjYyNSAyMDEuMDY0IDM4NC40MDYgMjE2LjYyN0w0MzIuMTE3IDMyOC4wMDFIMzM2QzMzNiAzMTQuNzgyIDMyNS4yMTkgMzA0LjAwMSAzMTIgMzA0LjAwMUgyNjQuMDMxQzI1MC44MTMgMzA0LjAwMSAyNDAuMDMxIDMxNC43ODMgMjQwLjAzMSAzMjguMDAxSDE1MC4xMTdMMjIwLjEyNSAxNzAuNjlaTTU1My40MzggNDE2LjAwMUgyMi41NjJDMTAuMTAyIDQxNi4wMDEgMCA0MjYuMTAyIDAgNDM4LjU1OVY0MzguNjc2QzAgNDQ1LjIxOSAyLjc4MSA0NTEuMzUyIDcuNjg4IDQ1NS42OEMzMC40MDYgNDc1LjczMSA4OC45OTIgNTEyIDE2Ni4zNTkgNTEySDQwOS41N0M0ODYuMTg0IDUxMiA1NDUuNTM5IDQ3NS43NDIgNTY4LjMwNSA0NTUuNzIzQzU3My4yMTkgNDUxLjM5OSA1NzYgNDQ1LjI1OCA1NzYgNDM4LjcwN1Y0MzguNTU5QzU3NiA0MjYuMTAyIDU2NS44OTggNDE2LjAwMSA1NTMuNDM4IDQxNi4wMDFaTTU1Ny43MzggNDQzLjcwN0M1MzUuNjUyIDQ2My4xMjkgNDc5LjU5IDQ5NiA0MDkuNTcgNDk2SDE2Ni4zNTlDODAuMDQzIDQ5NiAyNC4zNDQgNDQ5LjAzOSAxOC4yNzMgNDQzLjY4QzE2LjgwOSA0NDIuMzkxIDE2IDQ0MC42MSAxNiA0MzguNTU5QzE2IDQzNC45NDIgMTguOTQ1IDQzMi4wMDEgMjIuNTYyIDQzMi4wMDFINTUzLjQzOEM1NTcuMDU1IDQzMi4wMDEgNTYwIDQzNC45NDIgNTYwIDQzOC43MDdDNTYwIDQ0MC42NDkgNTU5LjE5NSA0NDIuNDI2IDU1Ny43MzggNDQzLjcwN1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HatWitch(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M127.312 379.251L143.156 343.65C143.473 343.689 143.672 344.001 144 344.001H240.031V376.001C240.031 380.407 243.625 384.001 248.031 384.001S256.031 380.407 256.031 376.001V328.001C256.031 323.595 259.625 320.001 264.031 320.001H312C316.406 320.001 320 323.595 320 328.001V376.001C320 380.407 323.594 384.001 328 384.001S336 380.407 336 376.001V344.001H438.969L454.031 379.157C455.312 382.188 458.281 384.001 461.375 384.001C462.437 384.001 463.5 383.782 464.531 383.345C468.594 381.626 470.469 376.907 468.719 372.845L399.094 210.283C393.875 198.346 393.344 184.877 397.562 172.346L403.531 154.19C406.625 144.909 415.312 138.69 425.094 138.69H462.719C472.531 138.69 481.156 144.909 484.25 154.19L497.687 194.533C498.75 197.721 501.719 199.908 505.062 200.002C509.156 199.908 511.531 198.064 512.719 194.94L542 120.565C546.687 106.596 543.094 91.409 532.75 81.065L466.125 11.378C453.781 -1.059 434.656 -3.622 419.312 5.284L259.969 103.753C235.531 117.846 216.688 138.784 205.5 164.221L112.688 372.751C110.906 376.782 112.719 381.501 116.75 383.313C120.781 385.095 125.5 383.282 127.312 379.251ZM220.125 170.69C229.938 148.346 246.5 130.003 268.188 117.503L427.531 19.003C436.375 13.909 447.563 15.347 454.656 22.534L521.312 92.253C527.469 98.409 529.562 107.284 526.969 115.065L505.906 168.565L499.438 149.127C494.188 133.315 479.406 122.69 462.719 122.69H425.094C408.406 122.69 393.656 133.315 388.344 149.159L382.375 167.283C376.906 183.533 377.625 201.064 384.406 216.627L432.117 328.001H336C336 314.782 325.219 304.001 312 304.001H264.031C250.813 304.001 240.031 314.783 240.031 328.001H150.117L220.125 170.69ZM553.438 416.001H22.562C10.102 416.001 0 426.102 0 438.559V438.676C0 445.219 2.781 451.352 7.688 455.68C30.406 475.731 88.992 512 166.359 512H409.57C486.184 512 545.539 475.742 568.305 455.723C573.219 451.399 576 445.258 576 438.707V438.559C576 426.102 565.898 416.001 553.438 416.001ZM557.738 443.707C535.652 463.129 479.59 496 409.57 496H166.359C80.043 496 24.344 449.039 18.273 443.68C16.809 442.391 16 440.61 16 438.559C16 434.942 18.945 432.001 22.562 432.001H553.438C557.055 432.001 560 434.942 560 438.707C560 440.649 559.195 442.426 557.738 443.707Z" />
        </Icon>
    </>
}