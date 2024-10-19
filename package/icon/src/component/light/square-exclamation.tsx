
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-exclamation` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-exclamation?s=light square-exclamation}
 * @preview ![square-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMzA0QzIzMi44NDQgMzA0IDI0MCAyOTYuODQ0IDI0MCAyODhWMTI4QzI0MCAxMTkuMTU2IDIzMi44NDQgMTEyIDIyNCAxMTJTMjA4IDExOS4xNTYgMjA4IDEyOFYyODhDMjA4IDI5Ni44NDQgMjE1LjE1NiAzMDQgMjI0IDMwNFpNMzg0IDMySDY0QzI4LjY1NCAzMiAwIDYwLjY1NCAwIDk2VjQxNkMwIDQ1MS4zNDYgMjguNjU0IDQ4MCA2NCA0ODBIMzg0QzQxOS4zNDYgNDgwIDQ0OCA0NTEuMzQ2IDQ0OCA0MTZWOTZDNDQ4IDYwLjY1NCA0MTkuMzQ2IDMyIDM4NCAzMlpNNDE2IDQxNkM0MTYgNDMzLjY0NSA0MDEuNjQ1IDQ0OCAzODQgNDQ4SDY0QzQ2LjM1NSA0NDggMzIgNDMzLjY0NSAzMiA0MTZWOTZDMzIgNzguMzU1IDQ2LjM1NSA2NCA2NCA2NEgzODRDNDAxLjY0NSA2NCA0MTYgNzguMzU1IDQxNiA5NlY0MTZaTTIyNCAzNDRDMjEwLjc0NiAzNDQgMjAwIDM1NC43NDYgMjAwIDM2OFMyMTAuNzQ2IDM5MiAyMjQgMzkyUzI0OCAzODEuMjU0IDI0OCAzNjhTMjM3LjI1NCAzNDQgMjI0IDM0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquareExclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 304C232.844 304 240 296.844 240 288V128C240 119.156 232.844 112 224 112S208 119.156 208 128V288C208 296.844 215.156 304 224 304ZM384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416ZM224 344C210.746 344 200 354.746 200 368S210.746 392 224 392S248 381.254 248 368S237.254 344 224 344Z" />
        </Icon>
    </>
}