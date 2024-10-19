
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `planet-ringed` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/planet-ringed?s=regular planet-ringed}
 * @preview ![planet-ringed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDIuOTI0IDkuMDAyQzQ3OS41NDYgLTE0LjM3NSA0MTQuNjY1IDkuMTI3IDMzNS45MDggNjMuODgyQzMxMC41MyA1My4zODEgMjgzLjQwMyA0OC4wMDUgMjU2LjAyNSA0OC4wMDVDMTQxLjEzOSA0OC4wMDUgNDguMDA1IDE0MS4xMzkgNDguMDA1IDI1Ni4wMjVDNDguMDA1IDI4My40MDMgNTMuMzgxIDMxMC41MyA2My44ODIgMzM1LjkwOEM5LjEyNyA0MTQuNjY1IC0xNC4zNzUgNDc5LjU0NiA5LjAwMiA1MDIuOTI0QzMyLjUwNCA1MjYuNDI2IDk3LjM4NSA1MDIuOTI0IDE3Ni4yNjggNDQ4LjE2OEMyMDEuNTIgNDU4LjY2OSAyMjguNjQ4IDQ2NC4wNDUgMjU2LjAyNSA0NjQuMDQ1QzM3MC45MTEgNDY0LjA0NSA0NjQuMDQ1IDM3MC45MTEgNDY0LjA0NSAyNTYuMDI1QzQ2NC4wNDUgMjI4LjY0OCA0NTguNjY5IDIwMS41MiA0NDguMTY4IDE3Ni4yNjhDNTAyLjkyNCA5Ny4zODUgNTI2LjQyNiAzMi41MDQgNTAyLjkyNCA5LjAwMlpNNjQuMDA3IDQ0OC4wNDNDNTYuMDA2IDQ0MC4wNDMgNjYuMzgyIDQxNS4xNjUgODkuNzU5IDM4MC42NjJDMTAxLjYzNiAzOTYuNDE0IDExNS42MzcgNDEwLjU0IDEzMS4zODggNDIyLjI5MUM5Ni44ODUgNDQ1LjY2OCA3Mi4wMDggNDU2LjA0NCA2NC4wMDcgNDQ4LjA0M1pNMTcyLjY0MiAzOTEuOTEzQzEyNi44ODggMzYzLjc4NSA5Ni4wMSAzMTMuNjU2IDk2LjAxIDI1Ni4wMjVDOTYuMDEgMTY3Ljc2NyAxNjcuNzY3IDk2LjAxIDI1Ni4wMjUgOTYuMDFDMzEzLjY1NiA5Ni4wMSAzNjMuNzg1IDEyNi44ODggMzkxLjkxMyAxNzIuNjQyQzM2NC40MSAyMDcuMjcxIDMyOC43ODIgMjQ3LjI3NCAyODguMDI4IDI4OC4wMjhDMjQ3LjE0OSAzMjguNzgyIDIwNy4yNzEgMzY0LjQxIDE3Mi42NDIgMzkxLjkxM1pNMjU2LjAyNSA0MTYuMDRDMjQ1LjE0OSA0MTYuMDQgMjM0LjI3MyA0MTQuOTE1IDIyMy42NDcgNDEyLjc5QzI1OC41MjUgMzg0Ljc4NyAyOTEuNzc5IDM1NS4wMzUgMzIzLjQwNyAzMjMuNDA3UzM4NC43ODcgMjU4LjUyNSA0MTIuNzkgMjIzLjY0N0M0MTQuOTE1IDIzNC4yNzMgNDE2LjA0IDI0NS4xNDkgNDE2LjA0IDI1Ni4wMjVDNDE2LjA0IDM0NC4yODQgMzQ0LjI4NCA0MTYuMDQgMjU2LjAyNSA0MTYuMDRaTTM4MC42NjIgODkuNzU5QzQxNS4xNjUgNjYuMzgyIDQ0MC4wNDMgNTYuMDA2IDQ0OC4wNDMgNjQuMDA3QzQ1Ni4wNDQgNzIuMDA4IDQ0NS42NjggOTYuODg1IDQyMi4yOTEgMTMxLjM4OEM0MTAuNTQgMTE1LjYzNyAzOTYuNDE0IDEwMS42MzYgMzgwLjY2MiA4OS43NTlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function PlanetRinged(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M502.924 9.002C479.546 -14.375 414.665 9.127 335.908 63.882C310.53 53.381 283.403 48.005 256.025 48.005C141.139 48.005 48.005 141.139 48.005 256.025C48.005 283.403 53.381 310.53 63.882 335.908C9.127 414.665 -14.375 479.546 9.002 502.924C32.504 526.426 97.385 502.924 176.268 448.168C201.52 458.669 228.648 464.045 256.025 464.045C370.911 464.045 464.045 370.911 464.045 256.025C464.045 228.648 458.669 201.52 448.168 176.268C502.924 97.385 526.426 32.504 502.924 9.002ZM64.007 448.043C56.006 440.043 66.382 415.165 89.759 380.662C101.636 396.414 115.637 410.54 131.388 422.291C96.885 445.668 72.008 456.044 64.007 448.043ZM172.642 391.913C126.888 363.785 96.01 313.656 96.01 256.025C96.01 167.767 167.767 96.01 256.025 96.01C313.656 96.01 363.785 126.888 391.913 172.642C364.41 207.271 328.782 247.274 288.028 288.028C247.149 328.782 207.271 364.41 172.642 391.913ZM256.025 416.04C245.149 416.04 234.273 414.915 223.647 412.79C258.525 384.787 291.779 355.035 323.407 323.407S384.787 258.525 412.79 223.647C414.915 234.273 416.04 245.149 416.04 256.025C416.04 344.284 344.284 416.04 256.025 416.04ZM380.662 89.759C415.165 66.382 440.043 56.006 448.043 64.007C456.044 72.008 445.668 96.885 422.291 131.388C410.54 115.637 396.414 101.636 380.662 89.759Z" />
        </Icon>
    </>
}