
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `peso-sign` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/peso-sign?s=thin peso-sign}
 * @preview ![peso-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzYgMjQwSDMyNy44M0MzMzIuNjcyIDIyNC43NSAzMzYgMjA4LjgzMiAzMzYgMTkyQzMzNiAxODEuMDQzIDMzNC44NzUgMTcwLjM0NCAzMzIuNzY2IDE2MEgzNzZDMzgwLjQyMiAxNjAgMzg0IDE1Ni40MDYgMzg0IDE1MlMzODAuNDIyIDE0NCAzNzYgMTQ0SDMyNy44M0MzMDcuMjk3IDc5LjMxOCAyNDcuMzg3IDMyIDE3NiAzMkg4OEM2NS45MzggMzIgNDggNDkuOTM4IDQ4IDcyVjE0NEg4QzMuNTc4IDE0NCAwIDE0Ny41OTQgMCAxNTJTMy41NzggMTYwIDggMTYwSDQ4VjI0MEg4QzMuNTc4IDI0MCAwIDI0My41OTQgMCAyNDhTMy41NzggMjU2IDggMjU2SDQ4VjQ3MkM0OCA0NzYuNDA2IDUxLjU3OCA0ODAgNTYgNDgwUzY0IDQ3Ni40MDYgNjQgNDcyVjM1MkgxNzZDMjQxLjQ0MSAzNTIgMjk3LjY3OCAzMTIuNDA2IDMyMi40MzggMjU2SDM3NkMzODAuNDIyIDI1NiAzODQgMjUyLjQwNiAzODQgMjQ4UzM4MC40MjIgMjQwIDM3NiAyNDBaTTY0IDcyQzY0IDU4Ljc4MSA3NC43NjYgNDggODggNDhIMTc2QzIzOC40OTQgNDggMjkxLjI3NSA4OC4yNSAzMTEuMTU0IDE0NEg2NFY3MlpNNjQgMTYwSDMxNi4xMzNDMzE4LjQ5NCAxNzAuMzI4IDMyMCAxODAuOTY3IDMyMCAxOTJDMzIwIDIwOC45MTIgMzE2LjUzMyAyMjQuOTEyIDMxMS4xNTQgMjQwSDY0VjE2MFpNMTc2IDMzNkg2NFYyNTZIMzA0LjMxOEMyODAuNjU4IDMwMy4yMDkgMjMyLjMwOSAzMzYgMTc2IDMzNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PesoSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M376 240H327.83C332.672 224.75 336 208.832 336 192C336 181.043 334.875 170.344 332.766 160H376C380.422 160 384 156.406 384 152S380.422 144 376 144H327.83C307.297 79.318 247.387 32 176 32H88C65.938 32 48 49.938 48 72V144H8C3.578 144 0 147.594 0 152S3.578 160 8 160H48V240H8C3.578 240 0 243.594 0 248S3.578 256 8 256H48V472C48 476.406 51.578 480 56 480S64 476.406 64 472V352H176C241.441 352 297.678 312.406 322.438 256H376C380.422 256 384 252.406 384 248S380.422 240 376 240ZM64 72C64 58.781 74.766 48 88 48H176C238.494 48 291.275 88.25 311.154 144H64V72ZM64 160H316.133C318.494 170.328 320 180.967 320 192C320 208.912 316.533 224.912 311.154 240H64V160ZM176 336H64V256H304.318C280.658 303.209 232.309 336 176 336Z" />
        </Icon>
    </>
}