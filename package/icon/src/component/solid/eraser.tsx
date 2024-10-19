
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `eraser` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/eraser?s=solid eraser}
 * @preview ![eraser](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTcuOTk5IDI3My45ODZDNTA3LjMxMiAyNjQuNjEgNTExLjk2OSAyNTIuMjk3IDUxMS45NjkgMjM5Ljk4M1M1MDcuMzEyIDIxNS4zNTcgNDk3Ljk5OSAyMDUuOTgxTDMzNy45ODkgNDUuOTdDMzI4LjYxNCAzNi42NTcgMzE2LjMwMSAzMiAzMDMuOTg3IDMyUzI3OS4zNjEgMzYuNjU3IDI2OS45ODUgNDUuOTdMMTMuOTcgMzAxLjk4OEM0LjY1NyAzMTEuMzYzIDAgMzIzLjY3NyAwIDMzNS45OVM0LjY1NyAzNjAuNjE3IDEzLjk3IDM2OS45OTJMMTA5Ljk3NSA0NjUuOTk5QzExOC45NCA0NzQuOTY0IDEzMS4wOTkgNDgwIDE0My43NzcgNDgwSDQ5OS45OTlDNTA2LjYyNyA0ODAgNTEyIDQ3NC42MjcgNTEyIDQ2Ny45OTlWNDY3Ljk5OUM1MTIgNDM5LjI3OCA0ODguNzE3IDQxNS45OTYgNDU5Ljk5NiA0MTUuOTk2SDM1NS44NjVMNDk3Ljk5OSAyNzMuOTg2Wk0xOTUuMzU2IDIxMS4zNTZMMzMyLjYxNCAzNDguNjE2TDI2NS4zNiA0MTUuOTk2SDE1MC42MDNMNzAuNTk4IDMzNS45OUwxOTUuMzU2IDIxMS4zNTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Eraser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M497.999 273.986C507.312 264.61 511.969 252.297 511.969 239.983S507.312 215.357 497.999 205.981L337.989 45.97C328.614 36.657 316.301 32 303.987 32S279.361 36.657 269.985 45.97L13.97 301.988C4.657 311.363 0 323.677 0 335.99S4.657 360.617 13.97 369.992L109.975 465.999C118.94 474.964 131.099 480 143.777 480H499.999C506.627 480 512 474.627 512 467.999V467.999C512 439.278 488.717 415.996 459.996 415.996H355.865L497.999 273.986ZM195.356 211.356L332.614 348.616L265.36 415.996H150.603L70.598 335.99L195.356 211.356Z" />
        </Icon>
    </>
}