
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `unicorn` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/unicorn?s=light unicorn}
 * @preview ![unicorn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzIuMDIxIDY0SDUzNS4wMThMNTM0Ljg5MyA2My43NUM1NDAuNjEzIDUzLjY0MSA1NDMuNjQzIDQxLjk3MyA1NDMuMjMgMjkuODA1QzU0Mi42NiAxMy4wMzMgNTI4LjA0OSAwIDUxMS4yNjggMEg0MDAuMDE0QzMzMC44ODcgMCAyNzQuNjM1IDU1LjI1IDI3Mi4zODUgMTIzLjg3NVYxMjhIMTYwQzEyNC41MDggMTI4IDkzLjgwNyAxNDcuNTggNzcuMTkzIDE3Ni4yOTNDMzQuMzc1IDE3Ny44MDUgMCAyMTIuNzQ0IDAgMjU2VjMwNEMwIDMxMi44MDEgNy4xOTkgMzIwIDE2IDMyMFMzMi4wMDIgMzEyLjc5OSAzMi4wMDIgMzA0VjI1NkMzMi4wMDIgMjM0LjY1NiA0Ni4wNzggMjE2LjgyIDY1LjM1NyAyMTAuNTdDNjUuMTYgMjExLjk2MSA2NS4wNjggMjEzLjM3OSA2NC45MzIgMjE0Ljc4N0M2NC40MDYgMjE3LjU0NyA2NCAyMjAuMDUzIDY0IDIyNEM2NCAyNTYgNzIuODc3IDI3NC43NSA4OC41MDQgMjkyLjYyNUw2Ni41NzYgMzY3LjA0N0M2My40NTMgMzc3LjY0NiA2My4xNyAzODguODgxIDY1Ljc1MiAzOTkuNjI1TDgzLjkyNCA0NzUuMjE5Qzg5LjExMSA0OTYuNzkzIDEwOC40MDggNTEyIDEzMC41OTYgNTEySDE1NC45NDFDMTg2LjIyMyA1MTIgMjA5LjE0NiA0ODIuNTU3IDIwMS40NzUgNDUyLjIyOUwxODQuODgxIDM4Ni42MjVMMjA0LjEzMSAzMzIuODc1TDI1Ni4wMDggMzQ0LjM3NVY0NjRDMjU2LjAwOCA0OTAuNCAyNzcuNjA3IDUxMiAzMDQuMDA4IDUxMkgzMzYuMDE0QzM2Mi40MTQgNTEyIDM4NC4wMTQgNDkwLjQgMzg0LjAxNCA0NjRWMzIzLjc1QzQwNC41MTQgMzAyLjI1IDQxNi4wMTQgMjc0IDQxNi4wMTQgMjQ0LjI1VjE5My43NUw0MzAuNTE0IDIxNS41QzQ0OS42NDEgMjQ0LjEyNSA0ODAuNTE2IDIzNi4xMjUgNDg2LjAxNiAyMzQuMjVMNTExLjUxOCAyMjUuNjI1QzUzMC45NDMgMjE5LjA1NSA1NDQuMDE4IDIwMC44MyA1NDQuMDE4IDE4MC4zMjRWMTE1LjM3NUw2MzYuMzk2IDc4LjYyNUM2NDMuMDIxIDc0LjI1IDYzOS44OTYgNjQgNjMyLjAyMSA2NFpNNTEyLjAxOCAxODAuMTI1QzUxMi4wMTggMTg3IDUwNy42NDMgMTkzLjEyNSA1MDEuMTQzIDE5NS4yNUw0NzUuNjQxIDIwNEM0NjYuMzkxIDIwNy4yNSA0NTkuNTE2IDIwMS4yNSA0NTcuMTQxIDE5Ny43NUw0MzIuMDE0IDE2MEwzODQuMDE0IDE0NFYyNDQuMjVDMzg0LjAxNCAyNzAuODc1IDM3MS4zODcgMjk0LjM3NSAzNTIuMDEyIDMwOS43NVY0NjRDMzUyLjAxMiA0NzIuODM2IDM0NC44NDggNDgwIDMzNi4wMTIgNDgwSDMwNC4wMUMyOTUuMTc0IDQ4MCAyODguMDEgNDcyLjgzNiAyODguMDEgNDY0VjMxOC43NUwxODMuNjMxIDI5NS41TDE1MS41MDYgMzg1TDE3MC40NzUgNDYwLjA4QzE3My4wMjcgNDcwLjE4OSAxNjUuMzg3IDQ4MCAxNTQuOTYxIDQ4MEgxMzAuNjEzQzEyMy4yMTcgNDgwIDExNi43ODUgNDc0LjkzMiAxMTUuMDU3IDQ2Ny43NEw5Ni44NzkgMzkyLjEyNUM5NS41OSAzODYuNzU4IDk1LjczMiAzODEuMTQ4IDk3LjI5NyAzNzUuODU1TDEyNC44NzkgMjgyLjVDMTA3LjUwNCAyNzAuMzc1IDk2IDI1NiA5NiAyMjRDOTYgMTg4LjcxOSAxMjQuNzE5IDE2MCAxNjAgMTYwSDMwNC4wMVYxMjhDMzA0LjAxIDc0Ljk4IDM0Ni45OSAzMiA0MDAuMDEgMzJINTExLjI2OEM1MTEuMjY4IDQ1LjI1IDUwMy4xNDMgNTYuNjI1IDQ5MS42NDEgNjEuNUw1MTIuMDE4IDg2LjI1VjE4MC4xMjVaTTQ0OC4wMTYgODBDNDM5LjE0MSA4MCA0MzIuMDE0IDg3LjEyNSA0MzIuMDE0IDk2UzQzOS4xNDEgMTEyIDQ0OC4wMTYgMTEyUzQ2NC4wMTYgMTA0Ljg3NSA0NjQuMDE2IDk2UzQ1Ni44OTEgODAgNDQ4LjAxNiA4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Unicorn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M632.021 64H535.018L534.893 63.75C540.613 53.641 543.643 41.973 543.23 29.805C542.66 13.033 528.049 0 511.268 0H400.014C330.887 0 274.635 55.25 272.385 123.875V128H160C124.508 128 93.807 147.58 77.193 176.293C34.375 177.805 0 212.744 0 256V304C0 312.801 7.199 320 16 320S32.002 312.799 32.002 304V256C32.002 234.656 46.078 216.82 65.357 210.57C65.16 211.961 65.068 213.379 64.932 214.787C64.406 217.547 64 220.053 64 224C64 256 72.877 274.75 88.504 292.625L66.576 367.047C63.453 377.646 63.17 388.881 65.752 399.625L83.924 475.219C89.111 496.793 108.408 512 130.596 512H154.941C186.223 512 209.146 482.557 201.475 452.229L184.881 386.625L204.131 332.875L256.008 344.375V464C256.008 490.4 277.607 512 304.008 512H336.014C362.414 512 384.014 490.4 384.014 464V323.75C404.514 302.25 416.014 274 416.014 244.25V193.75L430.514 215.5C449.641 244.125 480.516 236.125 486.016 234.25L511.518 225.625C530.943 219.055 544.018 200.83 544.018 180.324V115.375L636.396 78.625C643.021 74.25 639.896 64 632.021 64ZM512.018 180.125C512.018 187 507.643 193.125 501.143 195.25L475.641 204C466.391 207.25 459.516 201.25 457.141 197.75L432.014 160L384.014 144V244.25C384.014 270.875 371.387 294.375 352.012 309.75V464C352.012 472.836 344.848 480 336.012 480H304.01C295.174 480 288.01 472.836 288.01 464V318.75L183.631 295.5L151.506 385L170.475 460.08C173.027 470.189 165.387 480 154.961 480H130.613C123.217 480 116.785 474.932 115.057 467.74L96.879 392.125C95.59 386.758 95.732 381.148 97.297 375.855L124.879 282.5C107.504 270.375 96 256 96 224C96 188.719 124.719 160 160 160H304.01V128C304.01 74.98 346.99 32 400.01 32H511.268C511.268 45.25 503.143 56.625 491.641 61.5L512.018 86.25V180.125ZM448.016 80C439.141 80 432.014 87.125 432.014 96S439.141 112 448.016 112S464.016 104.875 464.016 96S456.891 80 448.016 80Z" />
        </Icon>
    </>
}