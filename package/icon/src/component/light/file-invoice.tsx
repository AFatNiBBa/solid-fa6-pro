
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-invoice` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-invoice?s=light file-invoice}
 * @preview ![file-invoice](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04MCAxNjBIMTQ0QzE1Mi44NDQgMTYwIDE2MCAxNTIuODQ0IDE2MCAxNDRTMTUyLjg0NCAxMjggMTQ0IDEyOEg4MEM3MS4xNTYgMTI4IDY0IDEzNS4xNTYgNjQgMTQ0UzcxLjE1NiAxNjAgODAgMTYwWk04MCA5NkgxNDRDMTUyLjg0NCA5NiAxNjAgODguODQ0IDE2MCA4MFMxNTIuODQ0IDY0IDE0NCA2NEg4MEM3MS4xNTYgNjQgNjQgNzEuMTU2IDY0IDgwUzcxLjE1NiA5NiA4MCA5NlpNMzY1LjI1NiAxMjUuMjU0TDI1OC43NDYgMTguNzQ2QzI0Ni43NDQgNi43NDIgMjMwLjQ2NSAwIDIxMy40OSAwSDY0QzI4LjY1NCAwIDAgMjguNjU0IDAgNjRWNDQ4QzAgNDgzLjM0NiAyOC42NTQgNTEyIDY0IDUxMkgzMjBDMzU1LjM0OCA1MTIgMzg0IDQ4My4zNDYgMzg0IDQ0OFYxNzAuNTFDMzg0IDE1My41MzUgMzc3LjI1OCAxMzcuMjU4IDM2NS4yNTYgMTI1LjI1NFpNMjI0IDM0LjA3NkMyMjguNDc3IDM1LjY0MyAyMzIuNjY2IDM3LjkyMiAyMzYuMTE5IDQxLjM3NUwzNDIuNjI3IDE0Ny44NzlDMzQ2LjA4IDE1MS4zMzIgMzQ4LjM1NyAxNTUuNTIzIDM0OS45MjQgMTYwSDI0MEMyMzEuMTg4IDE2MCAyMjQgMTUyLjgyOCAyMjQgMTQ0VjM0LjA3NlpNMzUyIDQ0OEMzNTIgNDY1LjY0NSAzMzcuNjQ1IDQ4MCAzMjAgNDgwSDY0QzQ2LjM1NSA0ODAgMzIgNDY1LjY0NSAzMiA0NDhWNjRDMzIgNDYuMzU1IDQ2LjM1NSAzMiA2NCAzMkgxOTJWMTQ0QzE5MiAxNzAuNDY5IDIxMy41MzEgMTkyIDI0MCAxOTJIMzUyVjQ0OFpNNjQgMjcyVjMzNkM2NCAzNTMuNjQxIDc4LjM1OSAzNjggOTYgMzY4SDI4OEMzMDUuNjQxIDM2OCAzMjAgMzUzLjY0MSAzMjAgMzM2VjI3MkMzMjAgMjU0LjM1OSAzMDUuNjQxIDI0MCAyODggMjQwSDk2Qzc4LjM1OSAyNDAgNjQgMjU0LjM1OSA2NCAyNzJaTTI4OCAzMzZIOTZWMjcySDI4OFYzMzZaTTMwNCA0MTZIMjQwQzIzMS4xNTYgNDE2IDIyNCA0MjMuMTU2IDIyNCA0MzJTMjMxLjE1NiA0NDggMjQwIDQ0OEgzMDRDMzEyLjg0NCA0NDggMzIwIDQ0MC44NDQgMzIwIDQzMlMzMTIuODQ0IDQxNiAzMDQgNDE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FileInvoice(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M80 160H144C152.844 160 160 152.844 160 144S152.844 128 144 128H80C71.156 128 64 135.156 64 144S71.156 160 80 160ZM80 96H144C152.844 96 160 88.844 160 80S152.844 64 144 64H80C71.156 64 64 71.156 64 80S71.156 96 80 96ZM365.256 125.254L258.746 18.746C246.744 6.742 230.465 0 213.49 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H320C355.348 512 384 483.346 384 448V170.51C384 153.535 377.258 137.258 365.256 125.254ZM224 34.076C228.477 35.643 232.666 37.922 236.119 41.375L342.627 147.879C346.08 151.332 348.357 155.523 349.924 160H240C231.188 160 224 152.828 224 144V34.076ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H192V144C192 170.469 213.531 192 240 192H352V448ZM64 272V336C64 353.641 78.359 368 96 368H288C305.641 368 320 353.641 320 336V272C320 254.359 305.641 240 288 240H96C78.359 240 64 254.359 64 272ZM288 336H96V272H288V336ZM304 416H240C231.156 416 224 423.156 224 432S231.156 448 240 448H304C312.844 448 320 440.844 320 432S312.844 416 304 416Z" />
        </Icon>
    </>
}