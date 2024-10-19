
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pallet` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pallet?s=light pallet}
 * @preview ![pallet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MjQgNDgwSDU2MFYzODRINjI0QzYzMi44NDQgMzg0IDY0MCAzNzYuODQ0IDY0MCAzNjhTNjMyLjg0NCAzNTIgNjI0IDM1MkgxNkM3LjE1NiAzNTIgMCAzNTkuMTU2IDAgMzY4UzcuMTU2IDM4NCAxNiAzODRIODBWNDgwSDE2QzcuMTU2IDQ4MCAwIDQ4Ny4xNTYgMCA0OTZTNy4xNTYgNTEyIDE2IDUxMkg2MjRDNjMyLjg0NCA1MTIgNjQwIDUwNC44NDQgNjQwIDQ5NlM2MzIuODQ0IDQ4MCA2MjQgNDgwWk0zMDQgNDgwSDExMlYzODRIMzA0VjQ4MFpNNTI4IDQ4MEgzMzZWMzg0SDUyOFY0ODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Pallet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M624 480H560V384H624C632.844 384 640 376.844 640 368S632.844 352 624 352H16C7.156 352 0 359.156 0 368S7.156 384 16 384H80V480H16C7.156 480 0 487.156 0 496S7.156 512 16 512H624C632.844 512 640 504.844 640 496S632.844 480 624 480ZM304 480H112V384H304V480ZM528 480H336V384H528V480Z" />
        </Icon>
    </>
}