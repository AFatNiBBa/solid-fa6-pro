
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `backward` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/backward?s=light backward}
 * @preview ![backward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODEuMzc1IDY0QzQ3NC42MjUgNjQgNDY3Ljk2OSA2Ni4zNDQgNDYyLjQ2OSA3MC44NzVMMzA5Ljg0NCAxOTYuMjE5QzMwMy4wMzEgMjAxLjgyOCAzMDIuMDMxIDIxMS45MDYgMzA3LjYyNSAyMTguNzM0QzMxMy4yODEgMjI1LjU2MyAzMjMuMzc1IDIyNi41MzEgMzMwLjE1NiAyMjAuOTM4TDQ4MCA5NS41OTRWNDE2LjQwNkwzMzAuMTU2IDI5MS4wNjJDMzIzLjM3NSAyODUuNDY5IDMxMy4yODEgMjg2LjQzOCAzMDcuNjI1IDI5My4yNjZDMzAyLjAzMSAzMDAuMDk0IDMwMy4wMzEgMzEwLjE3MiAzMDkuODQ0IDMxNS43ODFMNDYyLjQ2OSA0NDEuMTI1QzQ2Ny45NjkgNDQ1LjY1NiA0NzQuNjI1IDQ0OCA0ODEuMzc1IDQ0OEM0OTcuNSA0NDggNTEyIDQzNC41NTkgNTEyIDQxNS45NjlWOTYuMDMxQzUxMiA3Ny40NDEgNDk3LjUgNjQgNDgxLjM3NSA2NFpNMjI1LjM3NSA2NEMyMTguNjI1IDY0IDIxMS45NjkgNjYuMzQ0IDIwNi40NjkgNzAuODc1TDExLjY4OCAyMzAuODQ0QzQuMjUgMjM2LjkzOCAwIDI0Ni4xMDkgMCAyNTZTNC4yNSAyNzUuMDYyIDExLjY4OCAyODEuMTU2TDIwNi40NjkgNDQxLjEyNUMyMTEuOTY5IDQ0NS42NTYgMjE4LjYyNSA0NDggMjI1LjM3NSA0NDhDMjM1LjcyMyA0NDggMjU2IDQzOS44NzUgMjU2IDQxNS45NjlWOTYuMDMxQzI1NiA3Mi4xMjUgMjM1LjcyMyA2NCAyMjUuMzc1IDY0Wk0yMjQgNDE2LjQwNkwzMi41MjEgMjU2TDIyNCA5NS41OTRWNDE2LjQwNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Backward(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M481.375 64C474.625 64 467.969 66.344 462.469 70.875L309.844 196.219C303.031 201.828 302.031 211.906 307.625 218.734C313.281 225.563 323.375 226.531 330.156 220.938L480 95.594V416.406L330.156 291.062C323.375 285.469 313.281 286.438 307.625 293.266C302.031 300.094 303.031 310.172 309.844 315.781L462.469 441.125C467.969 445.656 474.625 448 481.375 448C497.5 448 512 434.559 512 415.969V96.031C512 77.441 497.5 64 481.375 64ZM225.375 64C218.625 64 211.969 66.344 206.469 70.875L11.688 230.844C4.25 236.938 0 246.109 0 256S4.25 275.062 11.688 281.156L206.469 441.125C211.969 445.656 218.625 448 225.375 448C235.723 448 256 439.875 256 415.969V96.031C256 72.125 235.723 64 225.375 64ZM224 416.406L32.521 256L224 95.594V416.406Z" />
        </Icon>
    </>
}