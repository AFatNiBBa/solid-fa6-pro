
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `truck-medical` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/truck-medical?s=solid truck-medical}
 * @preview ![truck-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MjQgMzUySDYwOFYyMzcuMjVDNjA4IDIyMC4xNTYgNjAxLjM0NCAyMDQuMDk0IDU4OS4yNSAxOTJMNTEyIDExNC43NUM1MDAuMDk0IDEwMi44MjggNDgzLjU5NCA5NiA0NjYuNzUgOTZINDE2VjQ4QzQxNiAyMS41IDM5NC41IDAgMzY4IDBINDhDMjEuNSAwIDAgMjEuNSAwIDQ4VjM2OEMwIDM5NC41IDIxLjUgNDE2IDQ4IDQxNkg2NEM2NCA0NjkgMTA3IDUxMiAxNjAgNTEyUzI1NiA0NjkgMjU2IDQxNkgzODRDMzg0IDQ2OSA0MjcgNTEyIDQ4MCA1MTJTNTc2IDQ2OSA1NzYgNDE2SDYyNEM2MzIuODEyIDQxNiA2NDAgNDA4Ljc5NyA2NDAgNDAwVjM2OEM2NDAgMzU5LjIwMyA2MzIuODEyIDM1MiA2MjQgMzUyWk0xNjAgNDY0QzEzMy41IDQ2NCAxMTIgNDQyLjUgMTEyIDQxNlMxMzMuNSAzNjggMTYwIDM2OFMyMDggMzg5LjUgMjA4IDQxNlMxODYuNSA0NjQgMTYwIDQ2NFpNMzA0IDE4NEMzMDQgMTg4LjM3NSAzMDAuMzc1IDE5MiAyOTYgMTkySDI0MFYyNDhDMjQwIDI1Mi4zNzUgMjM2LjM3NSAyNTYgMjMyIDI1NkgxODRDMTc5LjYyNSAyNTYgMTc2IDI1Mi4zNzUgMTc2IDI0OFYxOTJIMTIwQzExNS42MjUgMTkyIDExMiAxODguMzc1IDExMiAxODRWMTM2QzExMiAxMzEuNjI1IDExNS42MjUgMTI4IDEyMCAxMjhIMTc2VjcyQzE3NiA2Ny42MjUgMTc5LjYyNSA2NCAxODQgNjRIMjMyQzIzNi4zNzUgNjQgMjQwIDY3LjYyNSAyNDAgNzJWMTI4SDI5NkMzMDAuMzc1IDEyOCAzMDQgMTMxLjYyNSAzMDQgMTM2VjE4NFpNNDgwIDQ2NEM0NTMuNSA0NjQgNDMyIDQ0Mi41IDQzMiA0MTZTNDUzLjUgMzY4IDQ4MCAzNjhTNTI4IDM4OS41IDUyOCA0MTZTNTA2LjUgNDY0IDQ4MCA0NjRaTTU0NCAyNTZINDE2VjE2MEg0NjYuNzVMNTQ0IDIzNy4yNVYyNTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TruckMedical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M624 352H608V237.25C608 220.156 601.344 204.094 589.25 192L512 114.75C500.094 102.828 483.594 96 466.75 96H416V48C416 21.5 394.5 0 368 0H48C21.5 0 0 21.5 0 48V368C0 394.5 21.5 416 48 416H64C64 469 107 512 160 512S256 469 256 416H384C384 469 427 512 480 512S576 469 576 416H624C632.812 416 640 408.797 640 400V368C640 359.203 632.812 352 624 352ZM160 464C133.5 464 112 442.5 112 416S133.5 368 160 368S208 389.5 208 416S186.5 464 160 464ZM304 184C304 188.375 300.375 192 296 192H240V248C240 252.375 236.375 256 232 256H184C179.625 256 176 252.375 176 248V192H120C115.625 192 112 188.375 112 184V136C112 131.625 115.625 128 120 128H176V72C176 67.625 179.625 64 184 64H232C236.375 64 240 67.625 240 72V128H296C300.375 128 304 131.625 304 136V184ZM480 464C453.5 464 432 442.5 432 416S453.5 368 480 368S528 389.5 528 416S506.5 464 480 464ZM544 256H416V160H466.75L544 237.25V256Z" />
        </Icon>
    </>
}