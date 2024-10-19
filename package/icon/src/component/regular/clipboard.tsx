
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `clipboard` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard?s=regular clipboard}
 * @preview ![clipboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNjRIMjcwLjM4N0MyNjIuOTczIDI3LjQ4NCAyMzAuNzAxIDAgMTkyIDBTMTIxLjAyNyAyNy40ODQgMTEzLjYxMyA2NEg2NEMyOC42NTQgNjQgMCA5Mi42NTYgMCAxMjhWNDQ4QzAgNDgzLjM0NCAyOC42NTQgNTEyIDY0IDUxMkgzMjBDMzU1LjM0NiA1MTIgMzg0IDQ4My4zNDQgMzg0IDQ0OFYxMjhDMzg0IDkyLjY1NiAzNTUuMzQ2IDY0IDMyMCA2NFpNMTkyIDQ4QzIwNS4yMzQgNDggMjE2IDU4Ljc2NiAyMTYgNzJTMjA1LjIzNCA5NiAxOTIgOTZTMTY4IDg1LjIzNCAxNjggNzJTMTc4Ljc2NiA0OCAxOTIgNDhaTTMzNiA0NDhDMzM2IDQ1Ni44MiAzMjguODIyIDQ2NCAzMjAgNDY0SDY0QzU1LjE3OCA0NjQgNDggNDU2LjgyIDQ4IDQ0OFYxMjhDNDggMTE5LjE4IDU1LjE3OCAxMTIgNjQgMTEySDgyLjI2NEM4MC45MzIgMTE3LjE0MSA4MCAxMjIuNDQxIDgwIDEyOFYxNDRDODAgMTUyLjgzNiA4Ny4xNjQgMTYwIDk2IDE2MEgyODhDMjk2LjgzNiAxNjAgMzA0IDE1Mi44MzYgMzA0IDE0NFYxMjhDMzA0IDEyMi40NDEgMzAzLjA2OCAxMTcuMTQxIDMwMS43MzYgMTEySDMyMEMzMjguODIyIDExMiAzMzYgMTE5LjE4IDMzNiAxMjhWNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Clipboard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M320 64H270.387C262.973 27.484 230.701 0 192 0S121.027 27.484 113.613 64H64C28.654 64 0 92.656 0 128V448C0 483.344 28.654 512 64 512H320C355.346 512 384 483.344 384 448V128C384 92.656 355.346 64 320 64ZM192 48C205.234 48 216 58.766 216 72S205.234 96 192 96S168 85.234 168 72S178.766 48 192 48ZM336 448C336 456.82 328.822 464 320 464H64C55.178 464 48 456.82 48 448V128C48 119.18 55.178 112 64 112H82.264C80.932 117.141 80 122.441 80 128V144C80 152.836 87.164 160 96 160H288C296.836 160 304 152.836 304 144V128C304 122.441 303.068 117.141 301.736 112H320C328.822 112 336 119.18 336 128V448Z" />
        </Icon>
    </>
}