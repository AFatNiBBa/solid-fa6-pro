
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-0` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-0?s=duotone square-0}
 * @preview ![square-0](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTQgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ2IDQ4MCA0NDggNDUxLjM0NiA0NDggNDE2Vjk2QzQ0OCA2MC42NTQgNDE5LjM0NiAzMiAzODQgMzJaTTMyMCAyODhDMzIwIDM0MC45MzggMjc2LjkzOCAzODQgMjI0IDM4NFMxMjggMzQwLjkzOCAxMjggMjg4VjIyNEMxMjggMTcxLjA2MiAxNzEuMDYyIDEyOCAyMjQgMTI4UzMyMCAxNzEuMDYyIDMyMCAyMjRWMjg4Wk0yMjQgMTc2QzE5Ny41MzEgMTc2IDE3NiAxOTcuNTMxIDE3NiAyMjRWMjg4QzE3NiAzMTQuNDY5IDE5Ny41MzEgMzM2IDIyNCAzMzZTMjcyIDMxNC40NjkgMjcyIDI4OFYyMjRDMjcyIDE5Ny41MzEgMjUwLjQ2OSAxNzYgMjI0IDE3NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjI0IDEyOEMxNzEuMDYyIDEyOCAxMjggMTcxLjA2MiAxMjggMjI0VjI4OEMxMjggMzQwLjkzOCAxNzEuMDYyIDM4NCAyMjQgMzg0UzMyMCAzNDAuOTM4IDMyMCAyODhWMjI0QzMyMCAxNzEuMDYyIDI3Ni45MzggMTI4IDIyNCAxMjhaTTI3MiAyODhDMjcyIDMxNC40NjkgMjUwLjQ2OSAzMzYgMjI0IDMzNlMxNzYgMzE0LjQ2OSAxNzYgMjg4VjIyNEMxNzYgMTk3LjUzMSAxOTcuNTMxIDE3NiAyMjQgMTc2UzI3MiAxOTcuNTMxIDI3MiAyMjRWMjg4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Square_0(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM320 288C320 340.938 276.938 384 224 384S128 340.938 128 288V224C128 171.062 171.062 128 224 128S320 171.062 320 224V288ZM224 176C197.531 176 176 197.531 176 224V288C176 314.469 197.531 336 224 336S272 314.469 272 288V224C272 197.531 250.469 176 224 176Z" />
            <path d="M224 128C171.062 128 128 171.062 128 224V288C128 340.938 171.062 384 224 384S320 340.938 320 288V224C320 171.062 276.938 128 224 128ZM272 288C272 314.469 250.469 336 224 336S176 314.469 176 288V224C176 197.531 197.531 176 224 176S272 197.531 272 224V288Z" />
        </Icon>
    </>
}