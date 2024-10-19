
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-plus-minus` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-plus-minus?s=regular file-plus-minus}
 * @preview ![file-plus-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjUuMjU2IDkzLjM4M0wyOTAuNjI3IDE4Ljc0NkMyNzguNjI1IDYuNzQyIDI2Mi4zNDggMCAyNDUuMzczIDBINjRDMjguNjU0IDAgMCAyOC42NTIgMCA2NEwwLjAyIDQ0OEMwLjAyIDQ4My4zNDQgMjguNjc0IDUxMiA2NC4wMiA1MTJIMzIwQzM1NS4xOTkgNTEyIDM4NCA0ODMuMTk5IDM4NCA0NDhWMTM4LjY0MUMzODQgMTIxLjY2NCAzNzcuMjU4IDEwNS4zODMgMzY1LjI1NiA5My4zODNaTTMzNi4wMDIgNDQ4QzMzNi4wMDIgNDU2LjgzNiAzMjguODM4IDQ2NCAzMjAuMDAyIDQ2NEg2NC4wMThDNTUuMTggNDY0IDQ4LjAxOCA0NTYuODM2IDQ4LjAxOCA0NDhMNDggNjQuMTI1QzQ4IDU1LjI4OSA1NS4xNjQgNDguMTI1IDY0IDQ4LjEyNUgyMjQuMDA4VjEyOEMyMjQuMDA4IDE0NS42NzIgMjM4LjMzNCAxNjAgMjU2LjAwOCAxNjBIMzM2LjAwMlY0NDhaTTIxNiAyMzJWMTkyQzIxNiAxNzguNzUgMjA1LjI1IDE2OCAxOTIgMTY4UzE2OCAxNzguNzUgMTY4IDE5MlYyMzJIMTI4QzExNC43NSAyMzIgMTA0IDI0Mi43NSAxMDQgMjU2UzExNC43NSAyODAgMTI4IDI4MEgxNjhWMzIwQzE2OCAzMzMuMjUgMTc4Ljc1IDM0NCAxOTIgMzQ0UzIxNiAzMzMuMjUgMjE2IDMyMFYyODBIMjU2QzI2OS4yNSAyODAgMjgwIDI2OS4yNSAyODAgMjU2UzI2OS4yNSAyMzIgMjU2IDIzMkgyMTZaTTI1NiAzNzZIMTI4QzExNC43NSAzNzYgMTA0IDM4Ni43NSAxMDQgNDAwUzExNC43NSA0MjQgMTI4IDQyNEgyNTZDMjY5LjI1IDQyNCAyODAgNDEzLjI1IDI4MCA0MDBTMjY5LjI1IDM3NiAyNTYgMzc2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FilePlusMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M365.256 93.383L290.627 18.746C278.625 6.742 262.348 0 245.373 0H64C28.654 0 0 28.652 0 64L0.02 448C0.02 483.344 28.674 512 64.02 512H320C355.199 512 384 483.199 384 448V138.641C384 121.664 377.258 105.383 365.256 93.383ZM336.002 448C336.002 456.836 328.838 464 320.002 464H64.018C55.18 464 48.018 456.836 48.018 448L48 64.125C48 55.289 55.164 48.125 64 48.125H224.008V128C224.008 145.672 238.334 160 256.008 160H336.002V448ZM216 232V192C216 178.75 205.25 168 192 168S168 178.75 168 192V232H128C114.75 232 104 242.75 104 256S114.75 280 128 280H168V320C168 333.25 178.75 344 192 344S216 333.25 216 320V280H256C269.25 280 280 269.25 280 256S269.25 232 256 232H216ZM256 376H128C114.75 376 104 386.75 104 400S114.75 424 128 424H256C269.25 424 280 413.25 280 400S269.25 376 256 376Z" />
        </Icon>
    </>
}