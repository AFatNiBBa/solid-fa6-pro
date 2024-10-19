
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `piano` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/piano?s=solid piano}
 * @preview ![piano](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzYuNjI1IDI3MC4yNUw0MTkuMzc1IDI0MS43NUMzOTcuNzUgMjMwLjg3NSAzODQgMjA4Ljc1IDM4NCAxODQuNUMzODQgODIuNjI1IDMwMS41IDAgMTk5LjUgMEgxODQuNUM4Mi41IDAgMCA4Mi42MjUgMCAxODQuNVY0ODBDMCA0OTcuNjI1IDE0LjM3NSA1MTIgMzIgNTEySDQ4MEM0OTcuNjI1IDUxMiA1MTIgNDk3LjYyNSA1MTIgNDgwVjMyNy41QzUxMiAzMDMuMjUgNDk4LjI1IDI4MS4xMjUgNDc2LjYyNSAyNzAuMjVaTTQ0OCA0NDhINjRWMzUySDk2VjQwOEM5NiA0MTIuMzc1IDk5LjYyNSA0MTYgMTA0IDQxNkgxMjBDMTI0LjM3NSA0MTYgMTI4IDQxMi4zNzUgMTI4IDQwOFYzNTJIMTYwVjQwOEMxNjAgNDEyLjM3NSAxNjMuNjI1IDQxNiAxNjggNDE2SDE4NEMxODguMzc1IDQxNiAxOTIgNDEyLjM3NSAxOTIgNDA4VjM1MkgyMjRWNDA4QzIyNCA0MTIuMzc1IDIyNy42MjUgNDE2IDIzMiA0MTZIMjQ4QzI1Mi4zNzUgNDE2IDI1NiA0MTIuMzc1IDI1NiA0MDhWMzUySDMyMFY0MDhDMzIwIDQxMi4zNzUgMzIzLjYyNSA0MTYgMzI4IDQxNkgzNDRDMzQ4LjM3NSA0MTYgMzUyIDQxMi4zNzUgMzUyIDQwOFYzNTJIMzg0VjQwOEMzODQgNDEyLjM3NSAzODcuNjI1IDQxNiAzOTIgNDE2SDQwOEM0MTIuMzc1IDQxNiA0MTYgNDEyLjM3NSA0MTYgNDA4VjM1Mkg0NDhWNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Piano(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M476.625 270.25L419.375 241.75C397.75 230.875 384 208.75 384 184.5C384 82.625 301.5 0 199.5 0H184.5C82.5 0 0 82.625 0 184.5V480C0 497.625 14.375 512 32 512H480C497.625 512 512 497.625 512 480V327.5C512 303.25 498.25 281.125 476.625 270.25ZM448 448H64V352H96V408C96 412.375 99.625 416 104 416H120C124.375 416 128 412.375 128 408V352H160V408C160 412.375 163.625 416 168 416H184C188.375 416 192 412.375 192 408V352H224V408C224 412.375 227.625 416 232 416H248C252.375 416 256 412.375 256 408V352H320V408C320 412.375 323.625 416 328 416H344C348.375 416 352 412.375 352 408V352H384V408C384 412.375 387.625 416 392 416H408C412.375 416 416 412.375 416 408V352H448V448Z" />
        </Icon>
    </>
}