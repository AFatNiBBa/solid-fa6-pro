
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-plus-minus` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-plus-minus?s=light file-plus-minus}
 * @preview ![file-plus-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjUuMjU2IDEyNS4yNTRMMjU4Ljc0NiAxOC43NDZDMjQ2Ljc0NCA2Ljc0MiAyMzAuNDY1IDAgMjEzLjQ5IDBINjRDMjguNjU0IDAgMCAyOC42NTQgMCA2NFY0NDhDMCA0ODMuMzQ2IDI4LjY1NCA1MTIgNjQgNTEySDMyMEMzNTUuMzQ4IDUxMiAzODQgNDgzLjM0NiAzODQgNDQ4VjE3MC41MUMzODQgMTUzLjUzNSAzNzcuMjU4IDEzNy4yNTggMzY1LjI1NiAxMjUuMjU0Wk0yMjQgMzQuMDc2QzIyOC40NzcgMzUuNjQzIDIzMi42NjYgMzcuOTIyIDIzNi4xMTkgNDEuMzc1TDM0Mi42MjcgMTQ3Ljg3OUMzNDYuMDggMTUxLjMzMiAzNDguMzU3IDE1NS41MjMgMzQ5LjkyNCAxNjBIMjQwQzIzMS4xODggMTYwIDIyNCAxNTIuODI4IDIyNCAxNDRWMzQuMDc2Wk0zNTIgNDQ4QzM1MiA0NjUuNjQ1IDMzNy42NDUgNDgwIDMyMCA0ODBINjRDNDYuMzU1IDQ4MCAzMiA0NjUuNjQ1IDMyIDQ0OFY2NEMzMiA0Ni4zNTUgNDYuMzU1IDMyIDY0IDMySDE5MlYxNDRDMTkyIDE3MC40NjkgMjEzLjUzMSAxOTIgMjQwIDE5MkgzNTJWNDQ4Wk0yMDggMjI0QzIwOCAyMTUuMTU2IDIwMC44NDQgMjA4IDE5MiAyMDhTMTc2IDIxNS4xNTYgMTc2IDIyNFYyNzJIMTI4QzExOS4xNTYgMjcyIDExMiAyNzkuMTU2IDExMiAyODhTMTE5LjE1NiAzMDQgMTI4IDMwNEgxNzZWMzUyQzE3NiAzNjAuODQ0IDE4My4xNTYgMzY4IDE5MiAzNjhTMjA4IDM2MC44NDQgMjA4IDM1MlYzMDRIMjU2QzI2NC44NDQgMzA0IDI3MiAyOTYuODQ0IDI3MiAyODhTMjY0Ljg0NCAyNzIgMjU2IDI3MkgyMDhWMjI0Wk0yNTYgNDAwSDEyOEMxMTkuMTU2IDQwMCAxMTIgNDA3LjE1NiAxMTIgNDE2UzExOS4xNTYgNDMyIDEyOCA0MzJIMjU2QzI2NC44NDQgNDMyIDI3MiA0MjQuODQ0IDI3MiA0MTZTMjY0Ljg0NCA0MDAgMjU2IDQwMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FilePlusMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M365.256 125.254L258.746 18.746C246.744 6.742 230.465 0 213.49 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H320C355.348 512 384 483.346 384 448V170.51C384 153.535 377.258 137.258 365.256 125.254ZM224 34.076C228.477 35.643 232.666 37.922 236.119 41.375L342.627 147.879C346.08 151.332 348.357 155.523 349.924 160H240C231.188 160 224 152.828 224 144V34.076ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H192V144C192 170.469 213.531 192 240 192H352V448ZM208 224C208 215.156 200.844 208 192 208S176 215.156 176 224V272H128C119.156 272 112 279.156 112 288S119.156 304 128 304H176V352C176 360.844 183.156 368 192 368S208 360.844 208 352V304H256C264.844 304 272 296.844 272 288S264.844 272 256 272H208V224ZM256 400H128C119.156 400 112 407.156 112 416S119.156 432 128 432H256C264.844 432 272 424.844 272 416S264.844 400 256 400Z" />
        </Icon>
    </>
}