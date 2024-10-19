
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `book-blank` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-blank?s=light book-blank}
 * @preview ![book-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzY4VjQ4QzQ0OCAyMS40OSA0MjYuNTEgMCA0MDAgMEg4MEMzNS44MTcgMCAwIDM1LjgxNyAwIDgwVjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJINDMyQzQ0MC44NDQgNTEyIDQ0OCA1MDQuODQ0IDQ0OCA0OTZTNDQwLjg0NCA0ODAgNDMyIDQ4MEg0MTZWNDEzLjA1M0M0MzQuNTg0IDQwNi40MjYgNDQ4IDM4OC44MzIgNDQ4IDM2OFpNMzIgODBDMzIgNTMuNDkgNTMuNDkgMzIgODAgMzJIOTZWMzg0SDY0QzUyLjI5MSAzODQgNDEuNDUxIDM4Ny4zODkgMzIgMzkyLjlWODBaTTM4NCA0ODBINjRDNDYuMzU5IDQ4MCAzMiA0NjUuNjQxIDMyIDQ0OFM0Ni4zNTkgNDE2IDY0IDQxNkgzODRWNDgwWk00MDAgMzg0SDEyOFYzMkg0MDBDNDA4LjgyOCAzMiA0MTYgMzkuMTcyIDQxNiA0OFYzNjhDNDE2IDM3Ni44MjggNDA4LjgyOCAzODQgNDAwIDM4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BookBlank(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 368V48C448 21.49 426.51 0 400 0H80C35.817 0 0 35.817 0 80V448C0 483.346 28.654 512 64 512H432C440.844 512 448 504.844 448 496S440.844 480 432 480H416V413.053C434.584 406.426 448 388.832 448 368ZM32 80C32 53.49 53.49 32 80 32H96V384H64C52.291 384 41.451 387.389 32 392.9V80ZM384 480H64C46.359 480 32 465.641 32 448S46.359 416 64 416H384V480ZM400 384H128V32H400C408.828 32 416 39.172 416 48V368C416 376.828 408.828 384 400 384Z" />
        </Icon>
    </>
}