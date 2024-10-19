
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-f` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-f?s=light circle-f}
 * @preview ![circle-f](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgMTI4SDE3NkMxNjcuMTU2IDEyOCAxNjAgMTM1LjE1NiAxNjAgMTQ0VjM2OEMxNjAgMzc2Ljg0NCAxNjcuMTU2IDM4NCAxNzYgMzg0UzE5MiAzNzYuODQ0IDE5MiAzNjhWMjg4SDMwNEMzMTIuODQ0IDI4OCAzMjAgMjgwLjg0NCAzMjAgMjcyUzMxMi44NDQgMjU2IDMwNCAyNTZIMTkyVjE2MEgzMzZDMzQ0Ljg0NCAxNjAgMzUyIDE1Mi44NDQgMzUyIDE0NFMzNDQuODQ0IDEyOCAzMzYgMTI4Wk0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NjRDMTQxLjMwOSA0NjQgNDggMzcwLjY5MSA0OCAyNTZTMTQxLjMwOSA0OCAyNTYgNDhTNDY0IDE0MS4zMDkgNDY0IDI1NlMzNzAuNjkxIDQ2NCAyNTYgNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleF(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M336 128H176C167.156 128 160 135.156 160 144V368C160 376.844 167.156 384 176 384S192 376.844 192 368V288H304C312.844 288 320 280.844 320 272S312.844 256 304 256H192V160H336C344.844 160 352 152.844 352 144S344.844 128 336 128ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" />
        </Icon>
    </>
}