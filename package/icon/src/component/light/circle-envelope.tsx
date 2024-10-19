
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-envelope` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-envelope?s=light circle-envelope}
 * @preview ![circle-envelope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NjRDMTQxLjMwOSA0NjQgNDggMzcwLjY5MSA0OCAyNTZTMTQxLjMwOSA0OCAyNTYgNDhTNDY0IDE0MS4zMDkgNDY0IDI1NlMzNzAuNjkxIDQ2NCAyNTYgNDY0Wk0zNTIgMTYwSDE2MEMxNDIuMzI4IDE2MCAxMjggMTc0LjMyNiAxMjggMTkyVjMyMEMxMjggMzM3LjY3NCAxNDIuMzI4IDM1MiAxNjAgMzUySDM1MkMzNjkuNjc0IDM1MiAzODQgMzM3LjY3NCAzODQgMzIwVjE5MkMzODQgMTc0LjMyNiAzNjkuNjc0IDE2MCAzNTIgMTYwWk0zNTIgMzIwSDE2MFYyNDUuMzE2TDI0OS4yOTcgMjg2LjUzMUMyNTEuNDIyIDI4Ny41IDI1My43MTkgMjg4IDI1NiAyODhTMjYwLjU3OCAyODcuNSAyNjIuNzAzIDI4Ni41MzFMMzUyIDI0NS4zMTZWMzIwWk0zNTIgMjEwLjA2NkwyNTYgMjU0LjM3NUwxNjAgMjEwLjA2NlYxOTJIMzUyVjIxMC4wNjZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleEnvelope(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM352 160H160C142.328 160 128 174.326 128 192V320C128 337.674 142.328 352 160 352H352C369.674 352 384 337.674 384 320V192C384 174.326 369.674 160 352 160ZM352 320H160V245.316L249.297 286.531C251.422 287.5 253.719 288 256 288S260.578 287.5 262.703 286.531L352 245.316V320ZM352 210.066L256 254.375L160 210.066V192H352V210.066Z" />
        </Icon>
    </>
}