
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ufo-beam` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ufo-beam?s=light ufo-beam}
 * @preview ![ufo-beam](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggMjE2LjAwN0MyNzQuNzUgMjE2LjAwNyAyNjQuMDAxIDIyNi43NTcgMjY0LjAwMSAyNDAuMDA4UzI3NC43NSAyNjQuMDA4IDI4OCAyNjQuMDA4UzMxMS45OTkgMjUzLjI1OCAzMTEuOTk5IDI0MC4wMDhTMzAxLjI1IDIxNi4wMDcgMjg4IDIxNi4wMDdaTTEyMC4wMDYgMTg0LjAwNkMxMDYuNzU2IDE4NC4wMDYgOTYuMDA3IDE5NC43NTYgOTYuMDA3IDIwOC4wMDdTMTA2Ljc1NiAyMzIuMDA3IDEyMC4wMDYgMjMyLjAwN0MxMzMuMjU1IDIzMi4wMDcgMTQ0LjAwNSAyMjEuMjU3IDE0NC4wMDUgMjA4LjAwN1MxMzMuMjU1IDE4NC4wMDYgMTIwLjAwNiAxODQuMDA2Wk00NTUuOTk0IDE4NC4wMDZDNDQyLjc0NSAxODQuMDA2IDQzMS45OTUgMTk0Ljc1NiA0MzEuOTk1IDIwOC4wMDdTNDQyLjc0NSAyMzIuMDA3IDQ1NS45OTQgMjMyLjAwN1M0NzkuOTkzIDIyMS4yNTcgNDc5Ljk5MyAyMDguMDA3UzQ2OS4yNDQgMTg0LjAwNiA0NTUuOTk0IDE4NC4wMDZaTTU3NS45OSAyMDguMDA2QzU3NS45OSAxNjcuMTMgNTE5LjExNyAxMzEuNTA0IDQzNC43NDUgMTEyLjAwNEM0MTcuMTIgNDcuMzc2IDM1Ny4zNzMgMCAyODggMFMxNTguODggNDcuMzc2IDE0MS4yNTUgMTEyLjAwNEM1Ni44ODMgMTMxLjUwNCAwLjAxIDE2Ny4xMyAwLjAxIDIwOC4wMDZDMC4wMSAyNjkuODgzIDEyOS4wMDYgMzIwLjAxIDI4OCAzMjAuMDFTNTc1Ljk5IDI2OS44ODMgNTc1Ljk5IDIwOC4wMDZaTTI4OCAzMi4wMDFDMzUwLjg3MyAzMS44NzYgNDAzLjEyMSA4MC4yNTIgNDA3Ljc0NiAxNDMuMDA0QzM3MS45OTcgMTUzLjc1NSAzMzEuMjQ4IDE2MC4wMDUgMjg4IDE2MC4wMDVTMjA0LjAwMyAxNTMuNzU1IDE2OC4yNTQgMTQzLjAwNEMxNzIuODc5IDgwLjI1MiAyMjUuMTI3IDMxLjg3NiAyODggMzIuMDAxWk0yODggMjg4LjAwOUMxMjIuMzgxIDI4OC4wMDkgMzIuMDA5IDIzNS4xMzIgMzIuMDA5IDIwOC4wMDZDMzIuMDA5IDE5MC44ODEgNjguNjMzIDE2My42MyAxMzYuNzU1IDE0NS44OEMxMzguMDA1IDE1OC42MyAxNDYuMjU1IDE2OS43NTUgMTU4Ljg4IDE3My42M0MxOTkuMjUzIDE4NS43NTYgMjQyLjYyNyAxOTIuMDA2IDI4OCAxOTIuMDA2UzM3Ni43NDcgMTg1Ljc1NiA0MTcuMTIgMTczLjYzQzQyOS43NDUgMTY5Ljc1NSA0MzcuOTk0IDE1OC42MyA0MzkuMjQ1IDE0NS44OEM1MDcuMzY3IDE2My42MyA1NDMuOTkxIDE5MC44ODEgNTQzLjk5MSAyMDguMDA3QzU0My45OTEgMjM1LjEzMiA0NTMuNjE5IDI4OC4wMDkgMjg4IDI4OC4wMDlaTTE2LjAxIDUxMkMxMy4zNTMgNTEyIDEwLjY5NyA1MTEuMzU5IDguMjI5IDUwOS45ODRDMC41MSA1MDUuNjg3IC0yLjI3MSA0OTUuOTUzIDIuMDEgNDg4LjIzNEw4Mi4wMDcgMzQ0LjIyOUM4Ni4zMiAzMzYuNDMyIDk2LjA2OSAzMzMuNzI5IDEwMy43ODggMzM4LjAxQzExMS41MDYgMzQyLjMwNyAxMTQuMjg3IDM1Mi4wNDIgMTEwLjAwNiAzNTkuNzYxTDMwLjAwOSA1MDMuNzY1QzI3LjA3MiA1MDkuMDMxIDIxLjYwMyA1MTIgMTYuMDEgNTEyWk01NTkuOTkgNTEyQzU1NC4zOTcgNTEyIDU0OC45MjggNTA5LjAzMSA1NDUuOTkxIDUwMy43NjVMNDY1Ljk5NCAzNTkuNzYxQzQ2MS43MTMgMzUyLjA0MiA0NjQuNDk0IDM0Mi4zMDcgNDcyLjIxMiAzMzguMDFDNDc5Ljg2OCAzMzMuNzYgNDg5LjY4IDMzNi40NjMgNDkzLjk5MyAzNDQuMjI5TDU3My45OSA0ODguMjM0QzU3OC4yNzEgNDk1Ljk1MyA1NzUuNDkgNTA1LjY4NyA1NjcuNzcxIDUwOS45ODRDNTY1LjMwMyA1MTEuMzU5IDU2Mi42NDcgNTEyIDU1OS45OSA1MTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function UfoBeam(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M288 216.007C274.75 216.007 264.001 226.757 264.001 240.008S274.75 264.008 288 264.008S311.999 253.258 311.999 240.008S301.25 216.007 288 216.007ZM120.006 184.006C106.756 184.006 96.007 194.756 96.007 208.007S106.756 232.007 120.006 232.007C133.255 232.007 144.005 221.257 144.005 208.007S133.255 184.006 120.006 184.006ZM455.994 184.006C442.745 184.006 431.995 194.756 431.995 208.007S442.745 232.007 455.994 232.007S479.993 221.257 479.993 208.007S469.244 184.006 455.994 184.006ZM575.99 208.006C575.99 167.13 519.117 131.504 434.745 112.004C417.12 47.376 357.373 0 288 0S158.88 47.376 141.255 112.004C56.883 131.504 0.01 167.13 0.01 208.006C0.01 269.883 129.006 320.01 288 320.01S575.99 269.883 575.99 208.006ZM288 32.001C350.873 31.876 403.121 80.252 407.746 143.004C371.997 153.755 331.248 160.005 288 160.005S204.003 153.755 168.254 143.004C172.879 80.252 225.127 31.876 288 32.001ZM288 288.009C122.381 288.009 32.009 235.132 32.009 208.006C32.009 190.881 68.633 163.63 136.755 145.88C138.005 158.63 146.255 169.755 158.88 173.63C199.253 185.756 242.627 192.006 288 192.006S376.747 185.756 417.12 173.63C429.745 169.755 437.994 158.63 439.245 145.88C507.367 163.63 543.991 190.881 543.991 208.007C543.991 235.132 453.619 288.009 288 288.009ZM16.01 512C13.353 512 10.697 511.359 8.229 509.984C0.51 505.687 -2.271 495.953 2.01 488.234L82.007 344.229C86.32 336.432 96.069 333.729 103.788 338.01C111.506 342.307 114.287 352.042 110.006 359.761L30.009 503.765C27.072 509.031 21.603 512 16.01 512ZM559.99 512C554.397 512 548.928 509.031 545.991 503.765L465.994 359.761C461.713 352.042 464.494 342.307 472.212 338.01C479.868 333.76 489.68 336.463 493.993 344.229L573.99 488.234C578.271 495.953 575.49 505.687 567.771 509.984C565.303 511.359 562.647 512 559.99 512Z" />
        </Icon>
    </>
}