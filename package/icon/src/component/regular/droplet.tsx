
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `droplet` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/droplet?s=regular droplet}
 * @preview ![droplet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjEuMjUgMjIuMTI1QzIxNy4yNSA3LjUgMjA0LjYyNSAwIDE5MiAwQzE3OS42MjUgMCAxNjcuMjUgNy4yNSAxNjIuNzUgMjIuMTI1QzExNiAxNzkuODc1IDE2IDIyMi43NSAxNiAzMzMuODc1QzE2IDQzMi4zNzUgOTQuNzUgNTEyIDE5MiA1MTJTMzY4IDQzMi4zNzUgMzY4IDMzMy44NzVDMzY4IDIyMi4xMjUgMjY4LjI1IDE4MC42MjUgMjIxLjI1IDIyLjEyNVpNMTkyIDQ2NEMxMjEuMzc1IDQ2NCA2NCA0MDUuNjI1IDY0IDMzMy44NzVDNjQgMjkwLjYyNSA4NC42MjUgMjYxIDExNiAyMTYuMTI1QzE0MC4xMjUgMTgxLjUgMTY5IDE0MC4yNSAxOTIgODMuNjI1QzIxNS4xMjUgMTQwLjUgMjQ0IDE4MS43NSAyNjguMjUgMjE2LjM3NUMyOTkuMzc1IDI2MC44NzUgMzIwIDI5MC4zNzUgMzIwIDMzMy44NzVDMzIwIDQwNS42MjUgMjYyLjYyNSA0NjQgMTkyIDQ2NFpNMjA4IDQwMEMxNjMuODc1IDQwMCAxMjggMzY0LjEyNSAxMjggMzIwQzEyOCAzMTEuMTI1IDEyMC44NzUgMzA0IDExMiAzMDRTOTYgMzExLjEyNSA5NiAzMjBDOTYgMzgxLjc1IDE0Ni4yNSA0MzIgMjA4IDQzMkMyMTYuODc1IDQzMiAyMjQgNDI0Ljg3NSAyMjQgNDE2UzIxNi44NzUgNDAwIDIwOCA0MDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Droplet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M221.25 22.125C217.25 7.5 204.625 0 192 0C179.625 0 167.25 7.25 162.75 22.125C116 179.875 16 222.75 16 333.875C16 432.375 94.75 512 192 512S368 432.375 368 333.875C368 222.125 268.25 180.625 221.25 22.125ZM192 464C121.375 464 64 405.625 64 333.875C64 290.625 84.625 261 116 216.125C140.125 181.5 169 140.25 192 83.625C215.125 140.5 244 181.75 268.25 216.375C299.375 260.875 320 290.375 320 333.875C320 405.625 262.625 464 192 464ZM208 400C163.875 400 128 364.125 128 320C128 311.125 120.875 304 112 304S96 311.125 96 320C96 381.75 146.25 432 208 432C216.875 432 224 424.875 224 416S216.875 400 208 400Z" />
        </Icon>
    </>
}