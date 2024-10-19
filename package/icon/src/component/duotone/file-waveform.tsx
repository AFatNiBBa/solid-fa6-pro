
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-waveform` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-waveform?s=duotone file-waveform}
 * @preview ![file-waveform](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCAxMjhWNDY0QzQ0OCA0OTAuNTA4IDQyNi41MDggNTEyIDQwMCA1MTJIMTEyQzg1LjQ5MiA1MTIgNjQgNDkwLjUwOCA2NCA0NjRWMzA0SDEyOS4xNTZMMTcwLjUzMSAzODYuNzE5QzE3NC42MjUgMzk0Ljg3NSAxODIuOTM4IDQwMCAxOTIgNDAwQzE5Mi4zMTIgNDAwIDE5Mi42NTYgNDAwIDE5MyAzOTkuOTY5QzIwMi40MzggMzk5LjU5NCAyMTAuNzgxIDM5My42ODcgMjE0LjI4MSAzODQuOTA2TDI1OC40MzggMjc0LjUzMUwyNjYuNTMxIDI5MC43MTlDMjcwLjU5NCAyOTguODc1IDI3OC45MDYgMzA0IDI4OCAzMDRIMzUyQzM2MC44MzYgMzA0IDM2OCAyOTYuODM2IDM2OCAyODhWMjcyQzM2OCAyNjMuMTY0IDM2MC44MzYgMjU2IDM1MiAyNTZIMzAyLjg0NEwyNzcuNDY5IDIwNS4yODFDMjczLjI1IDE5Ni44NDQgMjY1LjMxMiAxOTEuNTYzIDI1NSAxOTIuMDMxQzI0NS41NjIgMTkyLjQwNiAyMzcuMjE5IDE5OC4zMTMgMjMzLjcxOSAyMDcuMDk0TDE4OS41NjIgMzE3LjQ2OUwxNjUuNDY5IDI2OS4yODFDMTYxLjM5OCAyNjEuMTQxIDE1My4wNzggMjU2IDE0My45NzcgMjU2SDY0VjQ4QzY0IDIxLjQ5MiA4NS40OTIgMCAxMTIgMEgzMjBWMTI4SDQ0OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzIwIDBWMTI4SDQ0OEwzMjAgMFpNMzUyIDI1NkgzMDIuODQ0TDI3Ny40NjkgMjA1LjI4MUMyNzMuMjUgMTk2Ljg0NCAyNjUuMzEyIDE5MS41NjMgMjU1IDE5Mi4wMzFDMjQ1LjU2MiAxOTIuNDA2IDIzNy4yMTkgMTk4LjMxMyAyMzMuNzE5IDIwNy4wOTRMMTg5LjU2MiAzMTcuNDY5TDE2NS40NjkgMjY5LjI4MUMxNjEuMzk4IDI2MS4xNDEgMTUzLjA3OCAyNTYgMTQzLjk3NyAyNTZIMTZDNy4xNjQgMjU2IDAgMjYzLjE2NCAwIDI3MlYyODhDMCAyOTYuODM2IDcuMTY0IDMwNCAxNiAzMDRIMTI5LjE1NkwxNzAuNTMxIDM4Ni43MTlDMTc0LjYyNSAzOTQuODc1IDE4Mi45MzggNDAwIDE5MiA0MDBDMTkyLjMxMiA0MDAgMTkyLjY1NiA0MDAgMTkzIDM5OS45NjlDMjAyLjQzOCAzOTkuNTk0IDIxMC43ODEgMzkzLjY4NyAyMTQuMjgxIDM4NC45MDZMMjU4LjQzOCAyNzQuNTMxTDI2Ni41MzEgMjkwLjcxOUMyNzAuNTk0IDI5OC44NzUgMjc4LjkwNiAzMDQgMjg4IDMwNEgzNTJDMzYwLjgzNiAzMDQgMzY4IDI5Ni44MzYgMzY4IDI4OFYyNzJDMzY4IDI2My4xNjQgMzYwLjgzNiAyNTYgMzUyIDI1NloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function FileWaveform(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M448 128V464C448 490.508 426.508 512 400 512H112C85.492 512 64 490.508 64 464V304H129.156L170.531 386.719C174.625 394.875 182.938 400 192 400C192.312 400 192.656 400 193 399.969C202.438 399.594 210.781 393.687 214.281 384.906L258.438 274.531L266.531 290.719C270.594 298.875 278.906 304 288 304H352C360.836 304 368 296.836 368 288V272C368 263.164 360.836 256 352 256H302.844L277.469 205.281C273.25 196.844 265.312 191.563 255 192.031C245.562 192.406 237.219 198.313 233.719 207.094L189.562 317.469L165.469 269.281C161.398 261.141 153.078 256 143.977 256H64V48C64 21.492 85.492 0 112 0H320V128H448Z" />
            <path d="M320 0V128H448L320 0ZM352 256H302.844L277.469 205.281C273.25 196.844 265.312 191.563 255 192.031C245.562 192.406 237.219 198.313 233.719 207.094L189.562 317.469L165.469 269.281C161.398 261.141 153.078 256 143.977 256H16C7.164 256 0 263.164 0 272V288C0 296.836 7.164 304 16 304H129.156L170.531 386.719C174.625 394.875 182.938 400 192 400C192.312 400 192.656 400 193 399.969C202.438 399.594 210.781 393.687 214.281 384.906L258.438 274.531L266.531 290.719C270.594 298.875 278.906 304 288 304H352C360.836 304 368 296.836 368 288V272C368 263.164 360.836 256 352 256Z" />
        </Icon>
    </>
}