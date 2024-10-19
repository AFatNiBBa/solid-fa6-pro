
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `clipboard-check` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-check?s=light clipboard-check}
 * @preview ![clipboard-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNjRDMzExLjE1NiA2NCAzMDQgNzEuMTU2IDMwNCA4MFMzMTEuMTU2IDk2IDMyMCA5NkMzMzcuNjQxIDk2IDM1MiAxMTAuMzQ0IDM1MiAxMjhWNDQ4QzM1MiA0NjUuNjU2IDMzNy42NDEgNDgwIDMyMCA0ODBINjRDNDYuMzU5IDQ4MCAzMiA0NjUuNjU2IDMyIDQ0OFYxMjhDMzIgMTEwLjM0NCA0Ni4zNTkgOTYgNjQgOTZDNzIuODQ0IDk2IDgwIDg4Ljg0NCA4MCA4MFM3Mi44NDQgNjQgNjQgNjRDMjguNzAzIDY0IDAgOTIuNzE5IDAgMTI4VjQ0OEMwIDQ4My4yODEgMjguNzAzIDUxMiA2NCA1MTJIMzIwQzM1NS4yOTcgNTEyIDM4NCA0ODMuMjgxIDM4NCA0NDhWMTI4QzM4NCA5Mi43MTkgMzU1LjI5NyA2NCAzMjAgNjRaTTExMiAxMjhIMjcyQzI4MC44NDQgMTI4IDI4OCAxMjAuODQ0IDI4OCAxMTJTMjgwLjg0NCA5NiAyNzIgOTZIMjQ3LjEyM0MyNTIuNjIxIDg2LjU1NSAyNTYgNzUuNzE3IDI1NiA2NEMyNTYgMjguNjU0IDIyNy4zNDYgMCAxOTIgMFMxMjggMjguNjU0IDEyOCA2NEMxMjggNzUuNzE3IDEzMS4zNzkgODYuNTU1IDEzNi44NzcgOTZIMTEyQzEwMy4xNTYgOTYgOTYgMTAzLjE1NiA5NiAxMTJTMTAzLjE1NiAxMjggMTEyIDEyOFpNMTkyIDMyQzIwOS42NDUgMzIgMjI0IDQ2LjM1NSAyMjQgNjRTMjA5LjY0NSA5NiAxOTIgOTZTMTYwIDgxLjY0NSAxNjAgNjRTMTc0LjM1NSAzMiAxOTIgMzJaTTg0LjY4OCAyOTkuMzEyTDE0OC42ODggMzYzLjMxMkMxNTEuODEyIDM2Ni40MzggMTU1LjkwNiAzNjggMTYwIDM2OFMxNjguMTg4IDM2Ni40MzggMTcxLjMxMiAzNjMuMzEyTDI5OS4zMTIgMjM1LjMxMkMzMDUuNTYyIDIyOS4wNjIgMzA1LjU2MiAyMTguOTM3IDI5OS4zMTIgMjEyLjY4OFMyODIuOTM3IDIwNi40MzggMjc2LjY4OCAyMTIuNjg4TDE2MCAzMjkuMzc1TDEwNy4zMTIgMjc2LjY4OEMxMDEuMDYyIDI3MC40MzggOTAuOTM3IDI3MC40MzggODQuNjg4IDI3Ni42ODhTNzguNDM4IDI5My4wNjIgODQuNjg4IDI5OS4zMTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ClipboardCheck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M320 64C311.156 64 304 71.156 304 80S311.156 96 320 96C337.641 96 352 110.344 352 128V448C352 465.656 337.641 480 320 480H64C46.359 480 32 465.656 32 448V128C32 110.344 46.359 96 64 96C72.844 96 80 88.844 80 80S72.844 64 64 64C28.703 64 0 92.719 0 128V448C0 483.281 28.703 512 64 512H320C355.297 512 384 483.281 384 448V128C384 92.719 355.297 64 320 64ZM112 128H272C280.844 128 288 120.844 288 112S280.844 96 272 96H247.123C252.621 86.555 256 75.717 256 64C256 28.654 227.346 0 192 0S128 28.654 128 64C128 75.717 131.379 86.555 136.877 96H112C103.156 96 96 103.156 96 112S103.156 128 112 128ZM192 32C209.645 32 224 46.355 224 64S209.645 96 192 96S160 81.645 160 64S174.355 32 192 32ZM84.688 299.312L148.688 363.312C151.812 366.438 155.906 368 160 368S168.188 366.438 171.312 363.312L299.312 235.312C305.562 229.062 305.562 218.937 299.312 212.688S282.937 206.438 276.688 212.688L160 329.375L107.312 276.688C101.062 270.438 90.937 270.438 84.688 276.688S78.438 293.062 84.688 299.312Z" />
        </Icon>
    </>
}