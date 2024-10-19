
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `eye-slash` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/eye-slash?s=light eye-slash}
 * @preview ![eye-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzIuODU5IDEzNy4yMzRMMzAzLjc3MyAxNjEuNjQxQzMwOS4wNzQgMTYwLjczIDMxNC40NDMgMTYwIDMyMCAxNjBDMzcwLjc3NSAxNjAgNDEyLjA0NSAxOTkuNzQyIDQxNS4zNjMgMjQ5Ljc0TDQ0Ni4xODMgMjc0LjA3MkM0NDcuMDI5IDI2OC4xMzUgNDQ4IDI2Mi4yMjcgNDQ4IDI1Ni4wNTVWMjU2QzQ0OCAxODUuMzQ4IDM5MC42NjYgMTI4IDMyMCAxMjhDMzAzLjMxNiAxMjggMjg3LjQ3OCAxMzEuNDIyIDI3Mi44NTkgMTM3LjIzNFpNMzIwIDQ0OEMyMTMuNDg0IDQ0OCAxMTUuNjg1IDM3Ni4wMiA2NC45NzUgMjYwLjY1QzY0LjU4IDI1OS41NyA2NC4wNTEgMjU2LjkzOSA2My45OTYgMjU2LjIwOUM2NC4wNTEgMjU1LjA2MyA2NC41ODIgMjUyLjQyNiA2NC43NjYgMjUxLjg0NkM3Ny42MDcgMjIyLjYyMSA5My40NjEgMTk2LjIzMiAxMTEuNjU0IDE3My4wNDNMODYuNjAxIDE1My4yNjZDNjYuNTM5IDE3OC43ODkgNDkuMjY2IDIwNy41NzIgMzUuNDY5IDIzOC45NzNDMzMuNTYyIDI0My40MDIgMzIgMjUxLjA0MSAzMiAyNTZDMzIgMjYwLjk3NyAzMy41NjIgMjY4LjU5NiAzNS40NjkgMjczLjAyNUM4OS43MTkgMzk2LjQ3MyAxOTcuMDYyIDQ4MCAzMjAgNDgwQzM2OC4xMzEgNDgwIDQxMy44MDUgNDY3LjAzOSA0NTQuOTEgNDQ0LjA0M0w0MjcuMTcgNDIyLjE0MUMzOTMuNTcyIDQzOC42NyAzNTcuNCA0NDggMzIwIDQ0OFpNMzIwIDY0QzQyNi41MTYgNjQgNTI0LjMxNiAxMzUuOTc5IDU3NS4wMjUgMjUxLjM0OEM1NzUuNDIgMjUyLjQyOCA1NzUuOTQ5IDI1NS4wNjEgNTc2LjAwNCAyNTUuNzkxQzU3NS45NDkgMjU2LjkzNiA1NzUuNDE4IDI1OS41NzQgNTc1LjIzNCAyNjAuMTUyQzU2Mi4zOTQgMjg5LjM3MyA1NDYuNTQ3IDMxNS43NiA1MjguMzU1IDMzOC45NDdMNTUzLjQwNCAzNTguNzI1QzU3My40NjUgMzMzLjIwMyA1OTAuNzM0IDMwNC40MjIgNjA0LjUzMSAyNzMuMDI1QzYwNi40MzcgMjY4LjU5NiA2MDggMjYwLjk1NyA2MDggMjU2QzYwOCAyNTEuMDIzIDYwNi40MzcgMjQzLjQwMiA2MDQuNTMxIDIzOC45NzNDNTUwLjI4MSAxMTUuNTI1IDQ0Mi45MzcgMzIgMzIwIDMyQzI3MS44NzUgMzIgMjI2LjIwMyA0NC45NTkgMTg1LjEwMSA2Ny45NDlMMjEyLjg0NiA4OS44NTRDMjQ2LjQzOSA3My4zMjggMjgyLjYwNSA2NCAzMjAgNjRaTTMyMC4wNTcgMzg0QzMzNi43MzIgMzg0IDM1Mi41NTggMzgwLjU4IDM2Ny4xNyAzNzQuNzcxTDMzNi4yNDggMzUwLjM1N0MzMzAuOTQxIDM1MS4yNyAzMjUuNTY0IDM1MiAzMjAgMzUyQzI2OS4yMDEgMzUyIDIyNy45MTQgMzEyLjIyMSAyMjQuNjMxIDI2Mi4yMzZMMTkzLjgyNCAyMzcuOTE2QzE5Mi45NzMgMjQzLjg3NSAxOTIgMjQ5LjgwNyAxOTIgMjU2QzE5MiAzMjYuNjUyIDI0OS4zMzQgMzg0IDMyMCAzODRIMzIwLjA1N1pNNjMzLjkwOCA0ODMuNDM4TDI1LjkwNCAzLjQyQzE4Ljk5OCAtMi4wMzMgOC45MzUgLTAuODMgMy40MzUgNi4wNjFDLTIuMDMzIDEyLjk5OCAtMC44NDYgMjMuMDYyIDYuMDkyIDI4LjU0N0w2MTQuMDk2IDUwOC41NjNDNjE3LjAzMyA1MTAuODc1IDYyMC41MzMgNTEyIDYyNC4wMDIgNTEyQzYyOC43MjEgNTEyIDYzMy40MDggNTA5LjkwNiA2MzYuNTY0IDUwNS45MjJDNjQyLjAzMyA0OTguOTg0IDY0MC44NDYgNDg4LjkyMiA2MzMuOTA4IDQ4My40MzhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function EyeSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M272.859 137.234L303.773 161.641C309.074 160.73 314.443 160 320 160C370.775 160 412.045 199.742 415.363 249.74L446.183 274.072C447.029 268.135 448 262.227 448 256.055V256C448 185.348 390.666 128 320 128C303.316 128 287.478 131.422 272.859 137.234ZM320 448C213.484 448 115.685 376.02 64.975 260.65C64.58 259.57 64.051 256.939 63.996 256.209C64.051 255.063 64.582 252.426 64.766 251.846C77.607 222.621 93.461 196.232 111.654 173.043L86.601 153.266C66.539 178.789 49.266 207.572 35.469 238.973C33.562 243.402 32 251.041 32 256C32 260.977 33.562 268.596 35.469 273.025C89.719 396.473 197.062 480 320 480C368.131 480 413.805 467.039 454.91 444.043L427.17 422.141C393.572 438.67 357.4 448 320 448ZM320 64C426.516 64 524.316 135.979 575.025 251.348C575.42 252.428 575.949 255.061 576.004 255.791C575.949 256.936 575.418 259.574 575.234 260.152C562.394 289.373 546.547 315.76 528.355 338.947L553.404 358.725C573.465 333.203 590.734 304.422 604.531 273.025C606.437 268.596 608 260.957 608 256C608 251.023 606.437 243.402 604.531 238.973C550.281 115.525 442.937 32 320 32C271.875 32 226.203 44.959 185.101 67.949L212.846 89.854C246.439 73.328 282.605 64 320 64ZM320.057 384C336.732 384 352.558 380.58 367.17 374.771L336.248 350.357C330.941 351.27 325.564 352 320 352C269.201 352 227.914 312.221 224.631 262.236L193.824 237.916C192.973 243.875 192 249.807 192 256C192 326.652 249.334 384 320 384H320.057ZM633.908 483.438L25.904 3.42C18.998 -2.033 8.935 -0.83 3.435 6.061C-2.033 12.998 -0.846 23.062 6.092 28.547L614.096 508.563C617.033 510.875 620.533 512 624.002 512C628.721 512 633.408 509.906 636.564 505.922C642.033 498.984 640.846 488.922 633.908 483.438Z" />
        </Icon>
    </>
}