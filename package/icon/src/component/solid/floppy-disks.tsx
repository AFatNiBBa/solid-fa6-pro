
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `floppy-disks` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disks?s=solid floppy-disks}
 * @preview ![floppy-disks](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OCA0MzJWOTZDMjEuNDkgOTYgMCAxMTcuNDkyIDAgMTQ0VjQ0OEMwIDQ4My4zNDQgMjguNjU0IDUxMiA2NCA1MTJIMzY4QzM5NC41MSA1MTIgNDE2IDQ5MC41MDggNDE2IDQ2NEg4MEM2Mi4zMjYgNDY0IDQ4IDQ0OS42NzIgNDggNDMyWk00OTcuOTM4IDk3LjkzOEw0MTQuMDYyIDE0LjA2MkM0MDYuMzEyIDYuMjk3IDM5MS4wOTQgMCAzODAuMTI1IDBIMTQ0QzExNy41IDAgOTYgMjEuNDg0IDk2IDQ4VjM2OEM5NiAzOTQuNTE2IDExNy41IDQxNiAxNDQgNDE2SDQ2NEM0OTAuNSA0MTYgNTEyIDM5NC41MTYgNTEyIDM2OFYxMzEuODc1QzUxMiAxMjAuOTA2IDUwNS42ODggMTA1LjcwMyA0OTcuOTM4IDk3LjkzOFpNMjg4IDM1MkMyNTIuNjU2IDM1MiAyMjQgMzIzLjM0NCAyMjQgMjg4UzI1Mi42NTYgMjI0IDI4OCAyMjRTMzUyIDI1Mi42NTYgMzUyIDI4OFMzMjMuMzQ0IDM1MiAyODggMzUyWk0zODQgMTQ0QzM4NCAxNTIuODM2IDM3Ni44MzYgMTYwIDM2OCAxNjBIMTc2QzE2Ny4xNjQgMTYwIDE2MCAxNTIuODM2IDE2MCAxNDRWODBDMTYwIDcxLjE2MiAxNjcuMTY0IDY0IDE3NiA2NEgzNjhDMzc2LjgzNiA2NCAzODQgNzEuMTYyIDM4NCA4MFYxNDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FloppyDisks(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M48 432V96C21.49 96 0 117.492 0 144V448C0 483.344 28.654 512 64 512H368C394.51 512 416 490.508 416 464H80C62.326 464 48 449.672 48 432ZM497.938 97.938L414.062 14.062C406.312 6.297 391.094 0 380.125 0H144C117.5 0 96 21.484 96 48V368C96 394.516 117.5 416 144 416H464C490.5 416 512 394.516 512 368V131.875C512 120.906 505.688 105.703 497.938 97.938ZM288 352C252.656 352 224 323.344 224 288S252.656 224 288 224S352 252.656 352 288S323.344 352 288 352ZM384 144C384 152.836 376.836 160 368 160H176C167.164 160 160 152.836 160 144V80C160 71.162 167.164 64 176 64H368C376.836 64 384 71.162 384 80V144Z" />
        </Icon>
    </>
}