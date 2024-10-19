
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `border-all` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-all?s=light border-all}
 * @preview ![border-all](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgMzJINDhDMjEuNDkyIDMyIDAgNTMuNDkgMCA4MFY0MzJDMCA0NTguNTEgMjEuNDkyIDQ4MCA0OCA0ODBINDAwQzQyNi41MDggNDgwIDQ0OCA0NTguNTEgNDQ4IDQzMlY4MEM0NDggNTMuNDkgNDI2LjUwOCAzMiA0MDAgMzJaTTMyIDgwQzMyIDcxLjE3OCAzOS4xNzYgNjQgNDggNjRIMjA4VjI0MEgzMlY4MFpNNDggNDQ4QzM5LjE3NiA0NDggMzIgNDQwLjgyMiAzMiA0MzJWMjcySDIwOFY0NDhINDhaTTQxNiA0MzJDNDE2IDQ0MC44MjIgNDA4LjgyNCA0NDggNDAwIDQ0OEgyNDBWMjcySDQxNlY0MzJaTTQxNiAyNDBIMjQwVjY0SDQwMEM0MDguODI0IDY0IDQxNiA3MS4xNzggNDE2IDgwVjI0MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BorderAll(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400 32H48C21.492 32 0 53.49 0 80V432C0 458.51 21.492 480 48 480H400C426.508 480 448 458.51 448 432V80C448 53.49 426.508 32 400 32ZM32 80C32 71.178 39.176 64 48 64H208V240H32V80ZM48 448C39.176 448 32 440.822 32 432V272H208V448H48ZM416 432C416 440.822 408.824 448 400 448H240V272H416V432ZM416 240H240V64H400C408.824 64 416 71.178 416 80V240Z" />
        </Icon>
    </>
}