
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-microphone` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-microphone?s=light circle-microphone}
 * @preview ![circle-microphone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NjRDMTQxLjMwOSA0NjQgNDggMzcwLjY5MSA0OCAyNTZTMTQxLjMwOSA0OCAyNTYgNDhTNDY0IDE0MS4zMDkgNDY0IDI1NlMzNzAuNjkxIDQ2NCAyNTYgNDY0Wk0yNTYgMzIwQzI5MS4zNDYgMzIwIDMyMCAyOTEuMzQ2IDMyMCAyNTZWMTYwQzMyMCAxMjQuNjUyIDI5MS4zNDYgOTYgMjU2IDk2UzE5MiAxMjQuNjUyIDE5MiAxNjBWMjU2QzE5MiAyOTEuMzQ2IDIyMC42NTQgMzIwIDI1NiAzMjBaTTIyNCAxNjBDMjI0IDE0Mi4zNTUgMjM4LjM1NSAxMjggMjU2IDEyOFMyODggMTQyLjM1NSAyODggMTYwVjI1NkMyODggMjczLjY0NSAyNzMuNjQ1IDI4OCAyNTYgMjg4UzIyNCAyNzMuNjQ1IDIyNCAyNTZWMTYwWk0zNjggMjI0QzM1OS4xNTYgMjI0IDM1MiAyMzEuMTU2IDM1MiAyNDBWMjU2QzM1MiAzMDguOTM4IDMwOC45MzggMzUyIDI1NiAzNTJTMTYwIDMwOC45MzggMTYwIDI1NlYyNDBDMTYwIDIzMS4xNTYgMTUyLjg0NCAyMjQgMTQ0IDIyNFMxMjggMjMxLjE1NiAxMjggMjQwVjI1NkMxMjggMzIxLjEgMTc3LjAzMSAzNzQuNDA2IDI0MCAzODIuMzgzVjQwMEMyNDAgNDA4Ljg0NCAyNDcuMTU2IDQxNiAyNTYgNDE2UzI3MiA0MDguODQ0IDI3MiA0MDBWMzgyLjM4M0MzMzQuOTY5IDM3NC40MDYgMzg0IDMyMS4xIDM4NCAyNTZWMjQwQzM4NCAyMzEuMTU2IDM3Ni44NDQgMjI0IDM2OCAyMjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleMicrophone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM256 320C291.346 320 320 291.346 320 256V160C320 124.652 291.346 96 256 96S192 124.652 192 160V256C192 291.346 220.654 320 256 320ZM224 160C224 142.355 238.355 128 256 128S288 142.355 288 160V256C288 273.645 273.645 288 256 288S224 273.645 224 256V160ZM368 224C359.156 224 352 231.156 352 240V256C352 308.938 308.938 352 256 352S160 308.938 160 256V240C160 231.156 152.844 224 144 224S128 231.156 128 240V256C128 321.1 177.031 374.406 240 382.383V400C240 408.844 247.156 416 256 416S272 408.844 272 400V382.383C334.969 374.406 384 321.1 384 256V240C384 231.156 376.844 224 368 224Z" />
        </Icon>
    </>
}