
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `briefcase-arrow-right` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-arrow-right?s=solid briefcase-arrow-right}
 * @preview ![briefcase-arrow-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgOTZIMzg0VjQ4QzM4NCAyMS41IDM2Mi41IDAgMzM2IDBIMTc2QzE0OS41IDAgMTI4IDIxLjUgMTI4IDQ4Vjk2SDQ4QzIxLjUgOTYgMCAxMTcuNSAwIDE0NFY0MzJDMCA0NTguNSAyMS41IDQ4MCA0OCA0ODBINDY0QzQ5MC41IDQ4MCA1MTIgNDU4LjUgNTEyIDQzMlYxNDRDNTEyIDExNy41IDQ5MC41IDk2IDQ2NCA5NlpNMTc2IDQ4SDMzNlY5NkgxNzZWNDhaTTM3Ni45NjkgMzA0Ljk2OUwyOTYuOTY5IDM4NC45NjlDMjg3LjU5NCAzOTQuMzQ0IDI3Mi40MDYgMzk0LjM0NCAyNjMuMDMxIDM4NC45NjlDMjU4LjM0NCAzODAuMjgxIDI1NiAzNzQuMTU2IDI1NiAzNjhTMjU4LjM0NCAzNTUuNzE5IDI2My4wMzEgMzUxLjAzMUwzMDIuMDYyIDMxMkgxNTJDMTM4Ljc1IDMxMiAxMjggMzAxLjI1IDEyOCAyODhTMTM4Ljc1IDI2NCAxNTIgMjY0SDMwMi4wNjJMMjYzLjAzMSAyMjQuOTY5QzI1My42NTYgMjE1LjU5NCAyNTMuNjU2IDIwMC40MDYgMjYzLjAzMSAxOTEuMDMxUzI4Ny41OTQgMTgxLjY1NiAyOTYuOTY5IDE5MS4wMzFMMzc2Ljk2OSAyNzEuMDMxQzM4Ni4zNDQgMjgwLjQwNiAzODYuMzQ0IDI5NS41OTQgMzc2Ljk2OSAzMDQuOTY5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BriefcaseArrowRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 96H384V48C384 21.5 362.5 0 336 0H176C149.5 0 128 21.5 128 48V96H48C21.5 96 0 117.5 0 144V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM176 48H336V96H176V48ZM376.969 304.969L296.969 384.969C287.594 394.344 272.406 394.344 263.031 384.969C258.344 380.281 256 374.156 256 368S258.344 355.719 263.031 351.031L302.062 312H152C138.75 312 128 301.25 128 288S138.75 264 152 264H302.062L263.031 224.969C253.656 215.594 253.656 200.406 263.031 191.031S287.594 181.656 296.969 191.031L376.969 271.031C386.344 280.406 386.344 295.594 376.969 304.969Z" />
        </Icon>
    </>
}