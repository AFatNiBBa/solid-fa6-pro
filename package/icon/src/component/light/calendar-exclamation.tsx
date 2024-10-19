
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `calendar-exclamation` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-exclamation?s=light calendar-exclamation}
 * @preview ![calendar-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgNjRIMzUyVjE2QzM1MiA3LjE2NCAzNDQuODM2IDAgMzM2IDBTMzIwIDcuMTY0IDMyMCAxNlY2NEgxMjhWMTZDMTI4IDcuMTY0IDEyMC44MzYgMCAxMTIgMFM5NiA3LjE2NCA5NiAxNlY2NEg2NEMyOC42NTQgNjQgMCA5Mi42NTQgMCAxMjhWNDQ4QzAgNDgzLjM0NiAyOC42NTQgNTEyIDY0IDUxMkgzODRDNDE5LjM0NiA1MTIgNDQ4IDQ4My4zNDYgNDQ4IDQ0OFYxMjhDNDQ4IDkyLjY1NCA0MTkuMzQ2IDY0IDM4NCA2NFpNNDE2IDQ0OEM0MTYgNDY1LjY3NCA0MDEuNjc0IDQ4MCAzODQgNDgwSDY0QzQ2LjMyNiA0ODAgMzIgNDY1LjY3NCAzMiA0NDhWMTkySDQxNlY0NDhaTTQxNiAxNjBIMzJWMTI4QzMyIDExMC4zMjYgNDYuMzI2IDk2IDY0IDk2SDM4NEM0MDEuNjc0IDk2IDQxNiAxMTAuMzI2IDQxNiAxMjhWMTYwWk0yMjQgMzY4QzIzMi44NDQgMzY4IDI0MCAzNjAuODQ0IDI0MCAzNTJWMjU2QzI0MCAyNDcuMTU2IDIzMi44NDQgMjQwIDIyNCAyNDBTMjA4IDI0Ny4xNTYgMjA4IDI1NlYzNTJDMjA4IDM2MC44NDQgMjE1LjE1NiAzNjggMjI0IDM2OFpNMjI0IDQ0MEMyMzcuMjU0IDQ0MCAyNDggNDI5LjI1NCAyNDggNDE2QzI0OCA0MDIuNzQ0IDIzNy4yNTQgMzkyIDIyNCAzOTJTMjAwIDQwMi43NDQgMjAwIDQxNkMyMDAgNDI5LjI1NCAyMTAuNzQ2IDQ0MCAyMjQgNDQwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CalendarExclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 64H352V16C352 7.164 344.836 0 336 0S320 7.164 320 16V64H128V16C128 7.164 120.836 0 112 0S96 7.164 96 16V64H64C28.654 64 0 92.654 0 128V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V128C448 92.654 419.346 64 384 64ZM416 448C416 465.674 401.674 480 384 480H64C46.326 480 32 465.674 32 448V192H416V448ZM416 160H32V128C32 110.326 46.326 96 64 96H384C401.674 96 416 110.326 416 128V160ZM224 368C232.844 368 240 360.844 240 352V256C240 247.156 232.844 240 224 240S208 247.156 208 256V352C208 360.844 215.156 368 224 368ZM224 440C237.254 440 248 429.254 248 416C248 402.744 237.254 392 224 392S200 402.744 200 416C200 429.254 210.746 440 224 440Z" />
        </Icon>
    </>
}