
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `home-user` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/home-user?s=light home-user}
 * @preview ![home-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMzUyLjAwOUMyMTEuODE3IDM1Mi4wMDkgMTc2LjAwMSAzODcuODI0IDE3Ni4wMDEgNDMyLjAwNUMxNzYuMDAxIDQ0MC44NCAxODMuMTY1IDQ0OC4wMDQgMTkyLjAwMSA0NDguMDA0QzIwMC44MzcgNDQ4LjAwNCAyMDguMDAxIDQ0MC44NCAyMDguMDAxIDQzMi4wMDVDMjA4LjAwMSA0MDUuNDk2IDIyOS40OTEgMzg0LjAwNyAyNTYgMzg0LjAwN0gzMTkuOTk5QzM0Ni41MDggMzg0LjAwNyAzNjcuOTk4IDQwNS40OTYgMzY3Ljk5OCA0MzIuMDA1QzM2Ny45OTggNDQwLjg0IDM3NS4xNjIgNDQ4LjAwNCAzODMuOTk4IDQ0OC4wMDRTMzk5Ljk5OCA0NDAuODQgMzk5Ljk5OCA0MzIuMDA1QzM5OS45OTggMzg3LjgyNCAzNjQuMTgyIDM1Mi4wMDkgMzE5Ljk5OSAzNTIuMDA5SDI1NlpNMjI0IDI1Ni4wMTVDMjI0IDI5MS4zNTggMjUyLjY1NCAzMjAuMDExIDI4OCAzMjAuMDExUzM1MS45OTkgMjkxLjM1OCAzNTEuOTk5IDI1Ni4wMTVTMzIzLjM0NSAxOTIuMDE4IDI4OCAxOTIuMDE4UzIyNCAyMjAuNjcxIDIyNCAyNTYuMDE1Wk0zMTkuOTk5IDI1Ni4wMTVDMzE5Ljk5OSAyNzMuNjU4IDMwNS42NDQgMjg4LjAxMyAyODggMjg4LjAxM0MyNzAuMzU1IDI4OC4wMTMgMjU2IDI3My42NTggMjU2IDI1Ni4wMTVTMjcwLjM1NSAyMjQuMDE2IDI4OCAyMjQuMDE2QzMwNS42NDQgMjI0LjAxNiAzMTkuOTk5IDIzOC4zNzEgMzE5Ljk5OSAyNTYuMDE1Wk0yOTguNTkzIDQuMDI5QzI5NS41NjIgMS4zNzMgMjkxLjc4MSAwLjA0NSAyODggMC4wNDVDMjg0LjIxOCAwLjA0NSAyODAuNDM3IDEuMzczIDI3Ny40MDYgNC4wMjlMNS40MSAyNDQuMDE1QzEuODI4IDI0Ny4xNzUgMCAyNTEuNTg1IDAgMjU2LjAxOEMwIDI2NC44NDUgNy4xMzcgMjcyLjAwNyAxNi4wMTIgMjcyLjAwN0MxOS43NjkgMjcyLjAwNyAyMy41NDQgMjcwLjY5NCAyNi41OTcgMjY4LjAxNEw2NC4wMDMgMjM1LjAxVjQzMi4wMDVDNjQuMDAzIDQ3Ni4xMjcgOTkuODc3IDUxMiAxNDQuMDAyIDUxMkg0MzEuOTk3QzQ3Ni4xMjIgNTEyIDUxMS45OTYgNDc2LjEyNyA1MTEuOTk2IDQzMi4wMDVWMjM1LjAxTDU0OS40MDIgMjY4LjAxNEM1NTIuNDY0IDI3MC43MDEgNTU2LjIxNCAyNzIuMDE0IDU1OS45OTYgMjcyLjAxNEM1NjguODM1IDI3Mi4wMTQgNTc1Ljk5OSAyNjQuODYyIDU3NS45OTkgMjU2LjAxOEM1NzUuOTk5IDI1MS41ODUgNTc0LjE3MSAyNDcuMTc1IDU3MC41ODkgMjQ0LjAxNUwyOTguNTkzIDQuMDI5Wk00NzkuOTk3IDIwOC4wMTdWNDMyLjAwNUM0NzkuOTk3IDQ1OC40NzIgNDU4LjQ2NiA0ODAuMDAyIDQzMS45OTcgNDgwLjAwMkgxNDQuMDAyQzExNy41MzMgNDgwLjAwMiA5Ni4wMDIgNDU4LjQ3MiA5Ni4wMDIgNDMyLjAwNVYyMDguMDE3Qzk2LjAwMiAyMDcuNjQyIDk1LjgxNSAyMDcuMzMgOTUuNzg5IDIwNi45NjNMMjg4IDM3LjM3MUw0ODAuMjEgMjA2Ljk2M0M0ODAuMTg0IDIwNy4zMyA0NzkuOTk3IDIwNy42NDIgNDc5Ljk5NyAyMDguMDE3WiAiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function HomeUser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M256 352.009C211.817 352.009 176.001 387.824 176.001 432.005C176.001 440.84 183.165 448.004 192.001 448.004C200.837 448.004 208.001 440.84 208.001 432.005C208.001 405.496 229.491 384.007 256 384.007H319.999C346.508 384.007 367.998 405.496 367.998 432.005C367.998 440.84 375.162 448.004 383.998 448.004S399.998 440.84 399.998 432.005C399.998 387.824 364.182 352.009 319.999 352.009H256ZM224 256.015C224 291.358 252.654 320.011 288 320.011S351.999 291.358 351.999 256.015S323.345 192.018 288 192.018S224 220.671 224 256.015ZM319.999 256.015C319.999 273.658 305.644 288.013 288 288.013C270.355 288.013 256 273.658 256 256.015S270.355 224.016 288 224.016C305.644 224.016 319.999 238.371 319.999 256.015ZM298.593 4.029C295.562 1.373 291.781 0.045 288 0.045C284.218 0.045 280.437 1.373 277.406 4.029L5.41 244.015C1.828 247.175 0 251.585 0 256.018C0 264.845 7.137 272.007 16.012 272.007C19.769 272.007 23.544 270.694 26.597 268.014L64.003 235.01V432.005C64.003 476.127 99.877 512 144.002 512H431.997C476.122 512 511.996 476.127 511.996 432.005V235.01L549.402 268.014C552.464 270.701 556.214 272.014 559.996 272.014C568.835 272.014 575.999 264.862 575.999 256.018C575.999 251.585 574.171 247.175 570.589 244.015L298.593 4.029ZM479.997 208.017V432.005C479.997 458.472 458.466 480.002 431.997 480.002H144.002C117.533 480.002 96.002 458.472 96.002 432.005V208.017C96.002 207.642 95.815 207.33 95.789 206.963L288 37.371L480.21 206.963C480.184 207.33 479.997 207.642 479.997 208.017Z " />
        </Icon>
    </>
}