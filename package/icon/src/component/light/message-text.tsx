
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `message-text` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-text?s=light message-text}
 * @preview ![message-text](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMEg2NEMyOC43NSAwIDAgMjguNzUgMCA2NFYzNTIuMDAyQzAgMzg3LjI1MiAyOC43NSA0MTYuMDAyIDY0IDQxNi4wMDJIMTYwVjUwMC4wMDJDMTYwIDUwOS44NCAxNzEuMDI1IDUxNS40NzkgMTc5LjEyNSA1MDkuNjI3TDMwNCA0MTYuMDAySDQ0OEM0ODMuMjUgNDE2LjAwMiA1MTIgMzg3LjI1MiA1MTIgMzUyLjAwMlY2NEM1MTIgMjguNzUgNDgzLjI1IDAgNDQ4IDBaTTQ4MCAzNTIuMDAyQzQ4MCAzNjkuNjAyIDQ2NS42IDM4NC4wMDIgNDQ4IDM4NC4wMDJIMzAzLjkyNEMyOTYuOTk2IDM4NC4wMDIgMjkwLjI1NCAzODYuMjUgMjg0LjcxMyAzOTAuNDA4TDE5MiA0NjAuMDAyVjQwMC4wMDJDMTkyIDM5MS4xNjQgMTg0LjgzNiAzODQuMDAyIDE3NiAzODQuMDAySDY0QzQ2LjQgMzg0LjAwMiAzMiAzNjkuNjAyIDMyIDM1Mi4wMDJWNjRDMzIgNDYuNCA0Ni40IDMyIDY0IDMySDQ0OEM0NjUuNiAzMiA0ODAgNDYuNCA0ODAgNjRWMzUyLjAwMlpNMzIwIDEyOEgxOTJDMTgzLjE1NiAxMjggMTc2IDEzNS4xNTYgMTc2IDE0NFMxODMuMTU2IDE2MCAxOTIgMTYwSDI0MFYyNzJDMjQwIDI4MC44NDQgMjQ3LjE1NiAyODggMjU2IDI4OFMyNzIgMjgwLjg0NCAyNzIgMjcyVjE2MEgzMjBDMzI4Ljg0NCAxNjAgMzM2IDE1Mi44NDQgMzM2IDE0NFMzMjguODQ0IDEyOCAzMjAgMTI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MessageText(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 0H64C28.75 0 0 28.75 0 64V352.002C0 387.252 28.75 416.002 64 416.002H160V500.002C160 509.84 171.025 515.479 179.125 509.627L304 416.002H448C483.25 416.002 512 387.252 512 352.002V64C512 28.75 483.25 0 448 0ZM480 352.002C480 369.602 465.6 384.002 448 384.002H303.924C296.996 384.002 290.254 386.25 284.713 390.408L192 460.002V400.002C192 391.164 184.836 384.002 176 384.002H64C46.4 384.002 32 369.602 32 352.002V64C32 46.4 46.4 32 64 32H448C465.6 32 480 46.4 480 64V352.002ZM320 128H192C183.156 128 176 135.156 176 144S183.156 160 192 160H240V272C240 280.844 247.156 288 256 288S272 280.844 272 272V160H320C328.844 160 336 152.844 336 144S328.844 128 320 128Z" />
        </Icon>
    </>
}