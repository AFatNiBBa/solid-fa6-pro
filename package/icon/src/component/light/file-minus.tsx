
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-minus` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-minus?s=light file-minus}
 * @preview ![file-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTIgMzIwLjAwMkMxMDMuMTYgMzIwLjAwMiA5NiAzMjcuMTYyIDk2IDMzNkM5NiAzNDQuODM0IDEwMy4xNTYgMzUxLjk5OCAxMTIgMzUxLjk5OEgyNzJDMjgwLjg0IDM1MS45OTggMjg4IDM0NC44MzggMjg4IDMzNlMyODAuODQgMzIwLjAwMiAyNzIgMzIwLjAwMkgxMTJaTTM2NS4yNTggMTI1LjI1NEwyNTguNzQ2IDE4Ljc0NkMyNDYuNzQyIDYuNzQyIDIzMC40NjUgMCAyMTMuNDkyIDBINjRDMjguNjU2IDAgMCAyOC42NTQgMCA2NFY0NDhDMCA0ODMuMzQ2IDI4LjY1NiA1MTIgNjQgNTEySDMyMEMzNTUuMzQ4IDUxMiAzODQgNDgzLjM0NiAzODQgNDQ4VjE3MC41MUMzODQgMTUzLjUzNSAzNzcuMjU4IDEzNy4yNTggMzY1LjI1OCAxMjUuMjU0Wk0yMjQgMzQuMDc2QzIyOC40NzcgMzUuNjQzIDIzMi42NjQgMzcuOTIyIDIzNi4xMTcgNDEuMzc1TDM0Mi42MjUgMTQ3Ljg3OUMzNDYuMDc4IDE1MS4zMzIgMzQ4LjM1OSAxNTUuNTIzIDM0OS45MjIgMTYwSDI0MEMyMzEuMTg4IDE2MCAyMjQgMTUyLjgyOCAyMjQgMTQ0VjM0LjA3NlpNMzUyIDQ0OEMzNTIgNDY1LjY0NSAzMzcuNjQ1IDQ4MCAzMjAgNDgwSDY0QzQ2LjM1NSA0ODAgMzIgNDY1LjY0NSAzMiA0NDhWNjRDMzIgNDYuMzU1IDQ2LjM1NSAzMiA2NCAzMkgxOTJWMTQ0QzE5MiAxNzAuNDY5IDIxMy41MzEgMTkyIDI0MCAxOTJIMzUyVjQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FileMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M112 320.002C103.16 320.002 96 327.162 96 336C96 344.834 103.156 351.998 112 351.998H272C280.84 351.998 288 344.838 288 336S280.84 320.002 272 320.002H112ZM365.258 125.254L258.746 18.746C246.742 6.742 230.465 0 213.492 0H64C28.656 0 0 28.654 0 64V448C0 483.346 28.656 512 64 512H320C355.348 512 384 483.346 384 448V170.51C384 153.535 377.258 137.258 365.258 125.254ZM224 34.076C228.477 35.643 232.664 37.922 236.117 41.375L342.625 147.879C346.078 151.332 348.359 155.523 349.922 160H240C231.188 160 224 152.828 224 144V34.076ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H192V144C192 170.469 213.531 192 240 192H352V448Z" />
        </Icon>
    </>
}