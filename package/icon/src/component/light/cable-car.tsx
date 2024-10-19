
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cable-car` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cable-car?s=light cable-car}
 * @preview ![cable-car](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTEuNDU1IDUxLjg3NUM1MDkuMTc0IDQzLjM3NSA1MDAuNDg3IDM4LjE4OCA0OTEuODYzIDQwLjU0N0wxMS44ODggMTY4LjU0N0MzLjM1NyAxNzAuODEyIC0xLjczNiAxNzkuNTc4IDAuNTQ1IDE4OC4xMjVDMy4wMjggMTk3LjQ0OCAxMi40NDUgMjAxLjU1MSAyMC4xMzcgMTk5LjQ1M0wyNDAuMDAxIDE0MC44MlYyMjRIOTYuMDA4QzYwLjY2NSAyMjQgMzIuMDEyIDI1Mi42NTQgMzIuMDEyIDI4OFY0NDhDMzIuMDEyIDQ4My4zNDYgNjAuNjY1IDUxMiA5Ni4wMDggNTEySDQxNS45OTJDNDUxLjMzNSA1MTIgNDc5Ljk4OCA0ODMuMzQ2IDQ3OS45ODggNDQ4VjI4OEM0NzkuOTg4IDI1Mi42NTQgNDUxLjMzNSAyMjQgNDE1Ljk5MiAyMjRIMjcxLjk5OVYxMzIuMjg3TDUwMC4xMTIgNzEuNDUzQzUwOC42NDMgNjkuMTg4IDUxMy43MzYgNjAuNDIyIDUxMS40NTUgNTEuODc1Wk02NC4wMSAyODhDNjQuMDEgMjcwLjM1NSA3OC4zNjUgMjU2IDk2LjAwOCAyNTZIMTYwLjAwNVYzNTJINjQuMDFWMjg4Wk00NDcuOTkgNDQ4QzQ0Ny45OSA0NjUuNjQ1IDQzMy42MzUgNDgwIDQxNS45OTIgNDgwSDk2LjAwOEM3OC4zNjUgNDgwIDY0LjAxIDQ2NS42NDUgNjQuMDEgNDQ4VjM4NEg0NDcuOTlWNDQ4Wk0zNTEuOTk1IDI1Nkg0MTUuOTkyQzQzMy42MzUgMjU2IDQ0Ny45OSAyNzAuMzU1IDQ0Ny45OSAyODhWMzUySDM1MS45OTVWMjU2Wk0zMTkuOTk3IDI1NlYzNTJIMTkyLjAwM1YyNTZIMzE5Ljk5N1pNMjg3Ljk5OCA1NkMzMDEuMjUyIDU2IDMxMS45OTcgNDUuMjU2IDMxMS45OTcgMzJTMzAxLjI1MiA4IDI4Ny45OTggOFMyNjQgMTguNzQ0IDI2NCAzMlMyNzQuNzQ1IDU2IDI4Ny45OTggNTZaTTE5Mi4wMDMgODhDMjA1LjI1NyA4OCAyMTYuMDAyIDc3LjI1NiAyMTYuMDAyIDY0UzIwNS4yNTcgNDAgMTkyLjAwMyA0MFMxNjguMDA1IDUwLjc0NCAxNjguMDA1IDY0UzE3OC43NSA4OCAxOTIuMDAzIDg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CableCar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M511.455 51.875C509.174 43.375 500.487 38.188 491.863 40.547L11.888 168.547C3.357 170.812 -1.736 179.578 0.545 188.125C3.028 197.448 12.445 201.551 20.137 199.453L240.001 140.82V224H96.008C60.665 224 32.012 252.654 32.012 288V448C32.012 483.346 60.665 512 96.008 512H415.992C451.335 512 479.988 483.346 479.988 448V288C479.988 252.654 451.335 224 415.992 224H271.999V132.287L500.112 71.453C508.643 69.188 513.736 60.422 511.455 51.875ZM64.01 288C64.01 270.355 78.365 256 96.008 256H160.005V352H64.01V288ZM447.99 448C447.99 465.645 433.635 480 415.992 480H96.008C78.365 480 64.01 465.645 64.01 448V384H447.99V448ZM351.995 256H415.992C433.635 256 447.99 270.355 447.99 288V352H351.995V256ZM319.997 256V352H192.003V256H319.997ZM287.998 56C301.252 56 311.997 45.256 311.997 32S301.252 8 287.998 8S264 18.744 264 32S274.745 56 287.998 56ZM192.003 88C205.257 88 216.002 77.256 216.002 64S205.257 40 192.003 40S168.005 50.744 168.005 64S178.75 88 192.003 88Z" />
        </Icon>
    </>
}