
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `book-medical` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-medical?s=light book-medical}
 * @preview ![book-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzY4VjQ4QzQ0OCAyMS40OTIgNDI2LjUxIDAgNDAwIDBIODBDMzUuODE2IDAgMCAzNS44MTYgMCA4MFY0NDhDMCA0ODMuMzQ0IDI4LjY1NCA1MTIgNjQgNTEySDQzMkM0NDAuODQ0IDUxMiA0NDggNTA0Ljg0NCA0NDggNDk2UzQ0MC44NDQgNDgwIDQzMiA0ODBINDE2VjQxMy4wNTVDNDM0LjU4NCA0MDYuNDI2IDQ0OCAzODguODMyIDQ0OCAzNjhaTTM4NCA0ODBINjRDNDYuMzU5IDQ4MCAzMiA0NjUuNjQxIDMyIDQ0OFM0Ni4zNTkgNDE2IDY0IDQxNkgzODRWNDgwWk00MDAgMzg0SDY0QzUyLjI5MSAzODQgNDEuNDUxIDM4Ny4zOTEgMzIgMzkyLjg5OFY4MEMzMiA1My40OTIgNTMuNDkgMzIgODAgMzJINDAwQzQwOC44MzYgMzIgNDE2IDM5LjE2NCA0MTYgNDhWMzY4QzQxNiAzNzYuODM2IDQwOC44MzYgMzg0IDQwMCAzODRaTTMyMCAxNjBIMjcyVjExMkMyNzIgMTAzLjE2NCAyNjQuODM2IDk2IDI1NiA5NkgyMjRDMjE1LjE2NCA5NiAyMDggMTAzLjE2NCAyMDggMTEyVjE2MEgxNjBDMTUxLjE2NCAxNjAgMTQ0IDE2Ny4xNjQgMTQ0IDE3NlYyMDhDMTQ0IDIxNi44MzYgMTUxLjE2NCAyMjQgMTYwIDIyNEgyMDhWMjcyQzIwOCAyODAuODM2IDIxNS4xNjQgMjg4IDIyNCAyODhIMjU2QzI2NC44MzYgMjg4IDI3MiAyODAuODM2IDI3MiAyNzJWMjI0SDMyMEMzMjguODM2IDIyNCAzMzYgMjE2LjgzNiAzMzYgMjA4VjE3NkMzMzYgMTY3LjE2NCAzMjguODM2IDE2MCAzMjAgMTYwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BookMedical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 368V48C448 21.492 426.51 0 400 0H80C35.816 0 0 35.816 0 80V448C0 483.344 28.654 512 64 512H432C440.844 512 448 504.844 448 496S440.844 480 432 480H416V413.055C434.584 406.426 448 388.832 448 368ZM384 480H64C46.359 480 32 465.641 32 448S46.359 416 64 416H384V480ZM400 384H64C52.291 384 41.451 387.391 32 392.898V80C32 53.492 53.49 32 80 32H400C408.836 32 416 39.164 416 48V368C416 376.836 408.836 384 400 384ZM320 160H272V112C272 103.164 264.836 96 256 96H224C215.164 96 208 103.164 208 112V160H160C151.164 160 144 167.164 144 176V208C144 216.836 151.164 224 160 224H208V272C208 280.836 215.164 288 224 288H256C264.836 288 272 280.836 272 272V224H320C328.836 224 336 216.836 336 208V176C336 167.164 328.836 160 320 160Z" />
        </Icon>
    </>
}