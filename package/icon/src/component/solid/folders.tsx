
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `folders` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folders?s=solid folders}
 * @preview ![folders](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjAgOTZIMzY4TDMwNCAzMkgxNzZDMTQ5LjUgMzIgMTI4IDUzLjUgMTI4IDgwVjMzNkMxMjggMzYyLjUgMTQ5LjUgMzg0IDE3NiAzODRINTYwQzU4Ni41IDM4NCA2MDggMzYyLjUgNjA4IDMzNlYxNDRDNjA4IDExNy41IDU4Ni41IDk2IDU2MCA5NlpNODAgNDAwVjE2MEM1My40OSAxNjAgMzIgMTgxLjQ5MiAzMiAyMDhWNDE2QzMyIDQ1MS4zNDYgNjAuNjU0IDQ4MCA5NiA0ODBINDY0QzQ5MC41MSA0ODAgNTEyIDQ1OC41MDggNTEyIDQzMkgxMTJDOTQuMzI2IDQzMiA4MCA0MTcuNjcyIDgwIDQwMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Folders(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M560 96H368L304 32H176C149.5 32 128 53.5 128 80V336C128 362.5 149.5 384 176 384H560C586.5 384 608 362.5 608 336V144C608 117.5 586.5 96 560 96ZM80 400V160C53.49 160 32 181.492 32 208V416C32 451.346 60.654 480 96 480H464C490.51 480 512 458.508 512 432H112C94.326 432 80 417.672 80 400Z" />
        </Icon>
    </>
}