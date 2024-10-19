
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `camera-web` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/camera-web?s=solid camera-web}
 * @preview ![camera-web](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAuODc1IDQzOC42MjVMMzUxLjc1IDQwNy44NzVDNDA5Ljg3NSAzNjcuMzc1IDQ0OCAzMDAuMjUgNDQ4IDIyNEM0NDggMTAwLjI1IDM0Ny42MjUgMCAyMjQgMEMxMDAuMjUgMCAwIDEwMC4yNSAwIDIyNEMwIDMwMC4yNSAzOC4xMjUgMzY3LjM3NSA5Ni4xMjUgNDA3Ljg3NUw0NyA0MzguNjI1QzM3LjYyNSA0NDQuNSAzMiA0NTQuNzUgMzIgNDY1Ljc1VjQ4MEMzMiA0OTcuNjI1IDQ2LjM3NSA1MTIgNjQgNTEySDM4NEM0MDEuNjI1IDUxMiA0MTYgNDk3LjYyNSA0MTYgNDgwVjQ2NS43NUM0MTYgNDU0Ljc1IDQxMC4yNSA0NDQuNSA0MDAuODc1IDQzOC42MjVaTTIyMy44NzUgMzg0QzEzNS41IDM4NCA2My44NzUgMzEyLjM3NSA2My44NzUgMjI0UzEzNS41IDY0IDIyMy44NzUgNjRTMzgzLjg3NSAxMzUuNjI1IDM4My44NzUgMjI0UzMxMi4yNSAzODQgMjI0IDM4NEgyMjMuODc1Wk0yMjMuODc1IDk2QzE1My4yNSA5NiA5NS44NzUgMTUzLjI1IDk1Ljg3NSAyMjRTMTUzLjI1IDM1MiAyMjMuODc1IDM1MkMyOTQuNjI1IDM1MiAzNTEuODc1IDI5NC43NSAzNTEuODc1IDIyNEMzNTEuODc1IDE1My4zNzUgMjk0LjYyNSA5NiAyMjQgOTZIMjIzLjg3NVpNMjIzLjg3NSAxNzZDMTk3LjM3NSAxNzYgMTc2IDE5Ny41IDE3NS44NzUgMjI0QzE3NS44NzUgMjMyLjg3NSAxNjguNzUgMjQwIDE1OS44NzUgMjQwQzE1MS4xMjUgMjQwIDE0My44NzUgMjMyLjg3NSAxNDMuODc1IDIyNEMxNDQgMTc5Ljg3NSAxNzkuNzUgMTQ0IDIyMy44NzUgMTQ0QzIzMi43NSAxNDQgMjM5Ljg3NSAxNTEuMTI1IDIzOS44NzUgMTYwUzIzMi43NSAxNzYgMjIzLjg3NSAxNzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CameraWeb(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400.875 438.625L351.75 407.875C409.875 367.375 448 300.25 448 224C448 100.25 347.625 0 224 0C100.25 0 0 100.25 0 224C0 300.25 38.125 367.375 96.125 407.875L47 438.625C37.625 444.5 32 454.75 32 465.75V480C32 497.625 46.375 512 64 512H384C401.625 512 416 497.625 416 480V465.75C416 454.75 410.25 444.5 400.875 438.625ZM223.875 384C135.5 384 63.875 312.375 63.875 224S135.5 64 223.875 64S383.875 135.625 383.875 224S312.25 384 224 384H223.875ZM223.875 96C153.25 96 95.875 153.25 95.875 224S153.25 352 223.875 352C294.625 352 351.875 294.75 351.875 224C351.875 153.375 294.625 96 224 96H223.875ZM223.875 176C197.375 176 176 197.5 175.875 224C175.875 232.875 168.75 240 159.875 240C151.125 240 143.875 232.875 143.875 224C144 179.875 179.75 144 223.875 144C232.75 144 239.875 151.125 239.875 160S232.75 176 223.875 176Z" />
        </Icon>
    </>
}