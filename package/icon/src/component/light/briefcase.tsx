
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `briefcase` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase?s=light briefcase}
 * @preview ![briefcase](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggOTZIMzg0VjQ4QzM4NCAyMS41MzEgMzYyLjQ2OSAwIDMzNiAwSDE3NkMxNDkuNTMxIDAgMTI4IDIxLjUzMSAxMjggNDhWOTZINjRDMjguNjU0IDk2IDAgMTI0LjY1NCAwIDE2MFY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDQ0OEM0ODMuMzQ4IDQ4MCA1MTIgNDUxLjM0NiA1MTIgNDE2VjE2MEM1MTIgMTI0LjY1NCA0ODMuMzQ4IDk2IDQ0OCA5NlpNMTYwIDQ4QzE2MCAzOS4xNzIgMTY3LjE3MiAzMiAxNzYgMzJIMzM2QzM0NC44MjggMzIgMzUyIDM5LjE3MiAzNTIgNDhWOTZIMTYwVjQ4Wk00ODAgNDE2QzQ4MCA0MzMuNjQ1IDQ2NS42NDUgNDQ4IDQ0OCA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlYyODhIMTc2VjM1MkMxNzYgMzYwLjg0NCAxODMuMTU2IDM2OCAxOTIgMzY4SDMyMEMzMjguODQ0IDM2OCAzMzYgMzYwLjg0NCAzMzYgMzUyVjI4OEg0ODBWNDE2Wk0yMDggMzM2VjI4OEgzMDRWMzM2SDIwOFpNNDgwIDI1NkgzMlYxNjBDMzIgMTQyLjM1NSA0Ni4zNTUgMTI4IDY0IDEyOEg0NDhDNDY1LjY0NSAxMjggNDgwIDE0Mi4zNTUgNDgwIDE2MFYyNTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Briefcase(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 96H384V48C384 21.531 362.469 0 336 0H176C149.531 0 128 21.531 128 48V96H64C28.654 96 0 124.654 0 160V416C0 451.346 28.654 480 64 480H448C483.348 480 512 451.346 512 416V160C512 124.654 483.348 96 448 96ZM160 48C160 39.172 167.172 32 176 32H336C344.828 32 352 39.172 352 48V96H160V48ZM480 416C480 433.645 465.645 448 448 448H64C46.355 448 32 433.645 32 416V288H176V352C176 360.844 183.156 368 192 368H320C328.844 368 336 360.844 336 352V288H480V416ZM208 336V288H304V336H208ZM480 256H32V160C32 142.355 46.355 128 64 128H448C465.645 128 480 142.355 480 160V256Z" />
        </Icon>
    </>
}