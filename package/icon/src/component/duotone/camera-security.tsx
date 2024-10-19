
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `camera-security` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/camera-security?s=duotone camera-security}
 * @preview ![camera-security](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyNCAxMTJDMTcwLjk2NSAxMTIgMTI4IDE1NC45NjMgMTI4IDIwOEMxMjggMjYxLjAzNSAxNzAuOTY1IDMwNCAyMjQgMzA0UzMyMCAyNjEuMDM1IDMyMCAyMDhDMzIwIDE1NC45NjMgMjc3LjAzNSAxMTIgMjI0IDExMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzg0IDBINjRDMjguNjI1IDAgMCAyOC42MjUgMCA2NFYzNTJDMCAzODcuMzc1IDI4LjYyNSA0MTYgNjQgNDE2SDEzNi43NUw3Ni41IDQ1MC44NzVDNjkuNjI1IDQ1NS4xMjUgNjQgNDY1LjI1IDY0IDQ3My4zNzVWNDg1LjM3NUM2NCA1MDAgNzYgNTEyIDkwLjc1IDUxMkgzNTcuMzc1QzM3Mi4xMjUgNTEyIDM4NCA1MDAgMzg0IDQ4NS4zNzVWNDczLjVDMzg0IDQ2NS4yNSAzNzguMzc1IDQ1NS4xMjUgMzcxLjM3NSA0NTAuODc1TDMxMS4yNSA0MTZIMzg0QzQxOS4zNzUgNDE2IDQ0OCAzODcuMzc1IDQ0OCAzNTJWNjRDNDQ4IDI4LjYyNSA0MTkuMzc1IDAgMzg0IDBaTTIyNCAzMzZDMTUzLjIyMyAzMzYgOTYgMjc4LjY2NiA5NiAyMDhDOTYgMTM3LjMzMiAxNTMuMzM0IDgwIDIyNCA4MFMzNTIgMTM3LjMzMiAzNTIgMjA4QzM1MiAyNzguNjY2IDI5NC42NjYgMzM2IDIyNCAzMzZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CameraSecurity(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M224 112C170.965 112 128 154.963 128 208C128 261.035 170.965 304 224 304S320 261.035 320 208C320 154.963 277.035 112 224 112Z" />
            <path d="M384 0H64C28.625 0 0 28.625 0 64V352C0 387.375 28.625 416 64 416H136.75L76.5 450.875C69.625 455.125 64 465.25 64 473.375V485.375C64 500 76 512 90.75 512H357.375C372.125 512 384 500 384 485.375V473.5C384 465.25 378.375 455.125 371.375 450.875L311.25 416H384C419.375 416 448 387.375 448 352V64C448 28.625 419.375 0 384 0ZM224 336C153.223 336 96 278.666 96 208C96 137.332 153.334 80 224 80S352 137.332 352 208C352 278.666 294.666 336 224 336Z" />
        </Icon>
    </>
}