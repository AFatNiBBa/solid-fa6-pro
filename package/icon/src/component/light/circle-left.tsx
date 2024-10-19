
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-left` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-left?s=light circle-left}
 * @preview ![circle-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjMuNzE5IDIyNy43MTlDMTA4LjU5NCAyNDIuODQ0IDEwOC4zOTEgMjY4Ljk2OSAxMjMuOTIyIDI4NC40NjlMMjE5LjcxOSAzNzYuOTY5QzIzMS4yMDMgMzg4LjQzNyAyNDguMzEyIDM5MS44NDQgMjYzLjMxMiAzODUuNjU2QzI3OC4zMTIgMzc5LjQzOCAyODggMzY0LjkzOCAyODggMzQ4LjY4OFYzMjBIMzYwQzM4Mi4wNjIgMzIwIDQwMCAzMDIuMDYyIDQwMCAyODBWMjMyQzQwMCAyMDkuOTM4IDM4Mi4wNjIgMTkyIDM2MCAxOTJIMjg4VjE2My4zMTJDMjg4IDE0Ny4wNjIgMjc4LjMxMiAxMzIuNTYyIDI2My4zMTIgMTI2LjM0NEMyNDguMzU5IDEyMC4xNTYgMjMxLjMxMiAxMjMuNTMxIDIxOS44MjggMTM0LjkwNkwxMjMuNzE5IDIyNy43MTlaTTI1NiAxNjMuMzEyVjIyNEgzNjBDMzY0LjQwNiAyMjQgMzY4IDIyNy41OTQgMzY4IDIzMlYyODBDMzY4IDI4NC40MDYgMzY0LjQwNiAyODggMzYwIDI4OEgyNTZWMzQ4LjY4OEMyNTYgMzU1LjEwMiAyNDcuOTUzIDM1OS45NDMgMjQyLjE0MSAzNTQuMTU2TDE0Ni4zNDQgMjYxLjY1NkMxNDIuMTM5IDI1Ny40OTQgMTQ0LjU0NyAyNTIuMTIzIDE0Ni4xNDEgMjUwLjUzMUwyNDIuMTQxIDE1Ny44NDRMMjQyLjM0NCAxNTcuNjU2QzI0Ny4xOTUgMTUyLjgwNSAyNTYgMTU1Ljg3OSAyNTYgMTYzLjMxMlpNMTYgMjU2QzE2IDM4OC41NDkgMTIzLjQ1MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0OSA0OTYgMjU2UzM4OC41NDkgMTYgMjU2IDE2UzE2IDEyMy40NTEgMTYgMjU2Wk00NjQgMjU2QzQ2NCAzNzAuNjkxIDM3MC42OTEgNDY0IDI1NiA0NjRTNDggMzcwLjY5MSA0OCAyNTZTMTQxLjMwOSA0OCAyNTYgNDhTNDY0IDE0MS4zMDkgNDY0IDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M123.719 227.719C108.594 242.844 108.391 268.969 123.922 284.469L219.719 376.969C231.203 388.437 248.312 391.844 263.312 385.656C278.312 379.438 288 364.938 288 348.688V320H360C382.062 320 400 302.062 400 280V232C400 209.938 382.062 192 360 192H288V163.312C288 147.062 278.312 132.562 263.312 126.344C248.359 120.156 231.312 123.531 219.828 134.906L123.719 227.719ZM256 163.312V224H360C364.406 224 368 227.594 368 232V280C368 284.406 364.406 288 360 288H256V348.688C256 355.102 247.953 359.943 242.141 354.156L146.344 261.656C142.139 257.494 144.547 252.123 146.141 250.531L242.141 157.844L242.344 157.656C247.195 152.805 256 155.879 256 163.312ZM16 256C16 388.549 123.451 496 256 496S496 388.549 496 256S388.549 16 256 16S16 123.451 16 256ZM464 256C464 370.691 370.691 464 256 464S48 370.691 48 256S141.309 48 256 48S464 141.309 464 256Z" />
        </Icon>
    </>
}