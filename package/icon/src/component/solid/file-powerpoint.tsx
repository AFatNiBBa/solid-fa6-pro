
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-powerpoint` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-powerpoint?s=solid file-powerpoint}
 * @preview ![file-powerpoint](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMFYxMjhIMzg0TDI1NiAwWk0yMjQgMTI4VjBINDhDMjEuNDkgMCAwIDIxLjQ5MiAwIDQ4VjQ2NEMwIDQ5MC41MDggMjEuNDkgNTEyIDQ4IDUxMkgzMzZDMzYyLjUxIDUxMiAzODQgNDkwLjUwOCAzODQgNDY0VjE2MEgyNTZDMjM4LjMyNiAxNjAgMjI0IDE0NS42NzIgMjI0IDEyOFpNMjc5LjU5NCAzMDguMDU1QzI4NC4yMyAzNTMuNTEyIDI0OC41MjUgMzkyIDIwNCAzOTJIMTYwVjQzMkMxNjAgNDQwLjgzNiAxNTIuODM2IDQ0OCAxNDQgNDQ4SDEyOEMxMTkuMTY0IDQ0OCAxMTIgNDQwLjgzNiAxMTIgNDMyVjI1NkMxMTIgMjQ3LjE2NCAxMTkuMTY0IDI0MCAxMjggMjQwSDE5OS41MTJDMjM5LjI1OCAyNDAgMjc1LjU2MSAyNjguNTE2IDI3OS41OTQgMzA4LjA1NVpNMTYwIDM0NEgyMDRDMjE5LjQzOCAzNDQgMjMyIDMzMS40MzggMjMyIDMxNlMyMTkuNDM4IDI4OCAyMDQgMjg4SDE2MFYzNDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FilePowerpoint(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M256 0V128H384L256 0ZM224 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V160H256C238.326 160 224 145.672 224 128ZM279.594 308.055C284.23 353.512 248.525 392 204 392H160V432C160 440.836 152.836 448 144 448H128C119.164 448 112 440.836 112 432V256C112 247.164 119.164 240 128 240H199.512C239.258 240 275.561 268.516 279.594 308.055ZM160 344H204C219.438 344 232 331.438 232 316S219.438 288 204 288H160V344Z" />
        </Icon>
    </>
}