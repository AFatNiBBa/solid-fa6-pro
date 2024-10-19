
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-pause` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-pause?s=light circle-pause}
 * @preview ![circle-pause](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NjRDMTQxLjMwOSA0NjQgNDggMzcwLjY5MSA0OCAyNTZTMTQxLjMwOSA0OCAyNTYgNDhTNDY0IDE0MS4zMDkgNDY0IDI1NlMzNzAuNjkxIDQ2NCAyNTYgNDY0Wk0zMDQgMTYwQzI5NS4xNTYgMTYwIDI4OCAxNjcuMTU2IDI4OCAxNzZWMzM2QzI4OCAzNDQuODQ0IDI5NS4xNTYgMzUyIDMwNCAzNTJTMzIwIDM0NC44NDQgMzIwIDMzNlYxNzZDMzIwIDE2Ny4xNTYgMzEyLjg0NCAxNjAgMzA0IDE2MFpNMjA4IDE2MEMxOTkuMTU2IDE2MCAxOTIgMTY3LjE1NiAxOTIgMTc2VjMzNkMxOTIgMzQ0Ljg0NCAxOTkuMTU2IDM1MiAyMDggMzUyUzIyNCAzNDQuODQ0IDIyNCAzMzZWMTc2QzIyNCAxNjcuMTU2IDIxNi44NDQgMTYwIDIwOCAxNjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CirclePause(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM304 160C295.156 160 288 167.156 288 176V336C288 344.844 295.156 352 304 352S320 344.844 320 336V176C320 167.156 312.844 160 304 160ZM208 160C199.156 160 192 167.156 192 176V336C192 344.844 199.156 352 208 352S224 344.844 224 336V176C224 167.156 216.844 160 208 160Z" />
        </Icon>
    </>
}