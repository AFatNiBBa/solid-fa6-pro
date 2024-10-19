
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-arrow-up` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-arrow-up?s=light file-arrow-up}
 * @preview ![file-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjUuMjU2IDEyNS4yNTRMMjU4Ljc0NiAxOC43NDZDMjQ2Ljc0NCA2Ljc0MiAyMzAuNDY1IDAgMjEzLjQ5IDBINjRDMjguNjU0IDAgMCAyOC42NTQgMCA2NFY0NDhDMCA0ODMuMzQ2IDI4LjY1NCA1MTIgNjQgNTEySDMyMEMzNTUuMzQ4IDUxMiAzODQgNDgzLjM0NiAzODQgNDQ4VjE3MC41MUMzODQgMTUzLjUzNSAzNzcuMjU4IDEzNy4yNTggMzY1LjI1NiAxMjUuMjU0Wk0yMjQgMzQuMDc2QzIyOC40NzcgMzUuNjQzIDIzMi42NjYgMzcuOTIyIDIzNi4xMTkgNDEuMzc1TDM0Mi42MjcgMTQ3Ljg3OUMzNDYuMDggMTUxLjMzMiAzNDguMzU3IDE1NS41MjMgMzQ5LjkyNCAxNjBIMjQwQzIzMS4xODggMTYwIDIyNCAxNTIuODI4IDIyNCAxNDRWMzQuMDc2Wk0zNTIgNDQ4QzM1MiA0NjUuNjQ1IDMzNy42NDUgNDgwIDMyMCA0ODBINjRDNDYuMzU1IDQ4MCAzMiA0NjUuNjQ1IDMyIDQ0OFY2NEMzMiA0Ni4zNTUgNDYuMzU1IDMyIDY0IDMySDE5MlYxNDRDMTkyIDE3MC40NjkgMjEzLjUzMSAxOTIgMjQwIDE5MkgzNTJWNDQ4Wk0xODAuNjg4IDIyOC42ODhMMTAwLjY4OCAzMDguNjg4Qzk0LjQzOCAzMTQuOTM4IDk0LjQzOCAzMjUuMDYzIDEwMC42ODggMzMxLjMxMlMxMTcuMDYzIDMzNy41NjIgMTIzLjMxMiAzMzEuMzEyTDE3NiAyNzguNjI1VjQwMEMxNzYgNDA4Ljg0NCAxODMuMTU2IDQxNiAxOTIgNDE2UzIwOCA0MDguODQ0IDIwOCA0MDBWMjc4LjYyNUwyNjAuNjg4IDMzMS4zMTJDMjYzLjgxMiAzMzQuNDM4IDI2Ny45MDYgMzM2IDI3MiAzMzZTMjgwLjE4OCAzMzQuNDM4IDI4My4zMTIgMzMxLjMxMkMyODkuNTYyIDMyNS4wNjIgMjg5LjU2MiAzMTQuOTM3IDI4My4zMTIgMzA4LjY4OEwyMDMuMzEyIDIyOC42ODhDMTk3LjA2MiAyMjIuNDM4IDE4Ni45MzggMjIyLjQzOCAxODAuNjg4IDIyOC42ODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FileArrowUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M365.256 125.254L258.746 18.746C246.744 6.742 230.465 0 213.49 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H320C355.348 512 384 483.346 384 448V170.51C384 153.535 377.258 137.258 365.256 125.254ZM224 34.076C228.477 35.643 232.666 37.922 236.119 41.375L342.627 147.879C346.08 151.332 348.357 155.523 349.924 160H240C231.188 160 224 152.828 224 144V34.076ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H192V144C192 170.469 213.531 192 240 192H352V448ZM180.688 228.688L100.688 308.688C94.438 314.938 94.438 325.063 100.688 331.312S117.063 337.562 123.312 331.312L176 278.625V400C176 408.844 183.156 416 192 416S208 408.844 208 400V278.625L260.688 331.312C263.812 334.438 267.906 336 272 336S280.188 334.438 283.312 331.312C289.562 325.062 289.562 314.937 283.312 308.688L203.312 228.688C197.062 222.438 186.938 222.438 180.688 228.688Z" />
        </Icon>
    </>
}