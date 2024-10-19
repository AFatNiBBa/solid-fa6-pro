
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `folder-open` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-open?s=solid folder-open}
 * @preview ![folder-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDcuNzgxIDE5Mkg0ODBWMTQ0QzQ4MCAxMTcuNDkyIDQ1OC41MSA5NiA0MzIgOTZIMjcyTDIwOCAzMkg0OEMyMS40OSAzMiAwIDUzLjQ5MiAwIDgwVjQwOC40NDVMOTAuNTM1IDIyNy4zODNDMTAxLjQ0NSAyMDUuNTU1IDEyMy4zODEgMTkyIDE0Ny43ODEgMTkyWk01NDMuOTYxIDIyNEgxNDcuNzgxQzEzNS42NTYgMjI0IDEyNC41NzggMjMwLjg0NCAxMTkuMTU2IDI0MS42ODhMMCA0ODBINDQ3Ljk2MUM0NjAuMDc4IDQ4MCA0NzEuMTYgNDczLjE0OCA0NzYuNTc4IDQ2Mi4zMTJMNTcyLjU3OCAyNzAuMzEyQzU4My4yMTkgMjQ5LjAzMSA1NjcuNzQ2IDIyNCA1NDMuOTYxIDIyNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FolderOpen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M147.781 192H480V144C480 117.492 458.51 96 432 96H272L208 32H48C21.49 32 0 53.492 0 80V408.445L90.535 227.383C101.445 205.555 123.381 192 147.781 192ZM543.961 224H147.781C135.656 224 124.578 230.844 119.156 241.688L0 480H447.961C460.078 480 471.16 473.148 476.578 462.312L572.578 270.312C583.219 249.031 567.746 224 543.961 224Z" />
        </Icon>
    </>
}