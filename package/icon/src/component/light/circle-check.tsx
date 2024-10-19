
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-check` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-check?s=light circle-check}
 * @preview ![circle-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDAuNjg4IDE4MC42ODhMMjI0IDI5Ny4zNzVMMTcxLjMxMiAyNDQuNjg4QzE2NS4wNjIgMjM4LjQzOCAxNTQuOTM3IDIzOC40MzggMTQ4LjY4OCAyNDQuNjg4UzE0Mi40MzggMjYxLjA2MyAxNDguNjg4IDI2Ny4zMTJMMjEyLjY4OCAzMzEuMzEyQzIxNS44MTIgMzM0LjQzOCAyMTkuOTA2IDMzNiAyMjQgMzM2UzIzMi4xODggMzM0LjQzOCAyMzUuMzEyIDMzMS4zMTJMMzYzLjMxMiAyMDMuMzEyQzM2OS41NjIgMTk3LjA2MiAzNjkuNTYyIDE4Ni45MzcgMzYzLjMxMiAxODAuNjg4UzM0Ni45MzggMTc0LjQzOCAzNDAuNjg4IDE4MC42ODhaTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMjU2IDQ2NEMxNDEuMzA5IDQ2NCA0OCAzNzAuNjkxIDQ4IDI1NlMxNDEuMzA5IDQ4IDI1NiA0OFM0NjQgMTQxLjMwOSA0NjQgMjU2UzM3MC42OTEgNDY0IDI1NiA0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleCheck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M340.688 180.688L224 297.375L171.312 244.688C165.062 238.438 154.937 238.438 148.688 244.688S142.438 261.063 148.688 267.312L212.688 331.312C215.812 334.438 219.906 336 224 336S232.188 334.438 235.312 331.312L363.312 203.312C369.562 197.062 369.562 186.937 363.312 180.688S346.938 174.438 340.688 180.688ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" />
        </Icon>
    </>
}