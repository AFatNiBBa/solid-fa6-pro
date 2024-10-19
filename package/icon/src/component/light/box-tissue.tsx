
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `box-tissue` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/box-tissue?s=light box-tissue}
 * @preview ![box-tissue](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDQgMzIwSDM2OEMzNzguMzI4IDMyMCAzODcuNDg0IDMxMy40MjIgMzkwLjg0NCAzMDMuMzc1TDQ0Ni43ODEgMTI3LjU3OEM0NDkuMjAzIDEyMC4yODEgNDQ3Ljk2OSAxMTIuMjAzIDQ0My40NjkgMTA1Ljk2OUM0MzguOTY5IDk5LjcxOSA0MzEuNjg4IDk2IDQyNCA5NkgzMzguNTk0QzMxOC42NzIgOTYgMzAxLjA2MiA4My4zMTIgMjk0Ljc2NiA2NC40MDZDMjgxLjkzOCAyNS44OTEgMjQ2LjAzMSAwIDIwNS40MDYgMEg4OEM4MC42NzIgMCA3My44NDQgMy4yODEgNjkuMjgxIDguOTg0QzY0LjY4OCAxNC43MDMgNjIuOTY5IDIyLjA5NCA2NC41MTYgMjguOTY5TDEyMC41NjIgMzAxLjIwM0MxMjMuMDMxIDMxMi4yNjYgMTMyLjY1NiAzMjAgMTQ0IDMyMFpNMjA1LjQwNiAzMkMyMzIuMjE5IDMyIDI1NS45MzggNDkuMDk0IDI2NC40MDYgNzQuNTE2QzI3NS4wNjIgMTA2LjUxNiAzMDQuODc1IDEyOCAzMzguNTk0IDEyOEg0MTMuMDYyTDM2Mi4xNTYgMjg4SDE1MC41MTZMOTcuODEyIDMySDIwNS40MDZaTTQ2NCAyMjRINDQ4QzQzOS4xNTYgMjI0IDQzMiAyMzEuMTU2IDQzMiAyNDBTNDM5LjE1NiAyNTYgNDQ4IDI1Nkg0NjRDNDcyLjgxMiAyNTYgNDgwIDI2My4xNzIgNDgwIDI3MlYzODRIMzJWMjcyQzMyIDI2My4xNzIgMzkuMTg4IDI1NiA0OCAyNTZINjRDNzIuODQ0IDI1NiA4MCAyNDguODQ0IDgwIDI0MFM3Mi44NDQgMjI0IDY0IDIyNEg0OEMyMS41MzEgMjI0IDAgMjQ1LjUzMSAwIDI3MlY0NjRDMCA0OTAuNDY5IDIxLjUzMSA1MTIgNDggNTEySDQ2NEM0OTAuNDY5IDUxMiA1MTIgNDkwLjQ2OSA1MTIgNDY0VjI3MkM1MTIgMjQ1LjUzMSA0OTAuNDY5IDIyNCA0NjQgMjI0Wk00ODAgNDY0QzQ4MCA0NzIuODI4IDQ3Mi44MTIgNDgwIDQ2NCA0ODBINDhDMzkuMTg4IDQ4MCAzMiA0NzIuODI4IDMyIDQ2NFY0MTZINDgwVjQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BoxTissue(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M144 320H368C378.328 320 387.484 313.422 390.844 303.375L446.781 127.578C449.203 120.281 447.969 112.203 443.469 105.969C438.969 99.719 431.688 96 424 96H338.594C318.672 96 301.062 83.312 294.766 64.406C281.938 25.891 246.031 0 205.406 0H88C80.672 0 73.844 3.281 69.281 8.984C64.688 14.703 62.969 22.094 64.516 28.969L120.562 301.203C123.031 312.266 132.656 320 144 320ZM205.406 32C232.219 32 255.938 49.094 264.406 74.516C275.062 106.516 304.875 128 338.594 128H413.062L362.156 288H150.516L97.812 32H205.406ZM464 224H448C439.156 224 432 231.156 432 240S439.156 256 448 256H464C472.812 256 480 263.172 480 272V384H32V272C32 263.172 39.188 256 48 256H64C72.844 256 80 248.844 80 240S72.844 224 64 224H48C21.531 224 0 245.531 0 272V464C0 490.469 21.531 512 48 512H464C490.469 512 512 490.469 512 464V272C512 245.531 490.469 224 464 224ZM480 464C480 472.828 472.812 480 464 480H48C39.188 480 32 472.828 32 464V416H480V464Z" />
        </Icon>
    </>
}