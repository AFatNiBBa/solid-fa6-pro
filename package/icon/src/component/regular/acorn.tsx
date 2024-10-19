
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `acorn` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/acorn?s=regular acorn}
 * @preview ![acorn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDcuOTk2IDE2MEM0NDcuOTc3IDEwNy4wMTQgNDA0Ljk5IDY0LjAzOSAzNTIgNjQuMDM5SDI1NS44MDVDMjU5LjUwNCA1Ny4wMDggMjY0Ljg0IDQ5LjA5OCAyNzIuOTY5IDQwLjk2OUMyODIuMzQ0IDMxLjU5NCAyODIuMzQ0IDE2LjQwNiAyNzIuOTY5IDcuMDMxUzI0OC40MDYgLTIuMzQ0IDIzOS4wMzEgNy4wMzFDMjE4LjI3NyAyNy43ODUgMjA4LjczNiA0OC41NzQgMjA0LjE4MiA2NC4wMzlIOTZDNDMuMDEgNjQuMDM5IDAuMDIzIDEwNy4wMTQgMC4wMDQgMTYwSDBWMTkyQzAgMjA5LjY3MiAxNC4zMjYgMjI0IDMyIDIyNEg0OEM0OCAzOTcuODczIDE3Ni45NTMgNDU3LjEzMyAyMjQgNDgwQzI1Ny4wNDEgNDYzLjk0MSA0MDAgNDA5LjEyMyA0MDAgMjI0SDQxNkM0MzMuNjc0IDIyNCA0NDggMjA5LjY3MiA0NDggMTkyVjE2MEg0NDcuOTk2Wk0yMjQgNDI2LjYzMUMxMzUuMDUxIDM4My4zOTggOTYgMzAyLjI5NyA5NiAyMjRIMzUyQzM1MiAyOTguNzg5IDMxNi43MTMgMzgxLjU2NiAyMjQgNDI2LjYzMVpNNDAwIDE3Nkg0OC4wMDJMNDguMDA0IDE2MC4wMThDNDguMDE0IDEzMy41NjIgNjkuNTQ1IDExMi4wMzkgOTYgMTEyLjAzOUgzNTJDMzc4LjQ1NSAxMTIuMDM5IDM5OS45ODggMTMzLjU2MiA0MDAgMTYwVjE3NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Acorn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M447.996 160C447.977 107.014 404.99 64.039 352 64.039H255.805C259.504 57.008 264.84 49.098 272.969 40.969C282.344 31.594 282.344 16.406 272.969 7.031S248.406 -2.344 239.031 7.031C218.277 27.785 208.736 48.574 204.182 64.039H96C43.01 64.039 0.023 107.014 0.004 160H0V192C0 209.672 14.326 224 32 224H48C48 397.873 176.953 457.133 224 480C257.041 463.941 400 409.123 400 224H416C433.674 224 448 209.672 448 192V160H447.996ZM224 426.631C135.051 383.398 96 302.297 96 224H352C352 298.789 316.713 381.566 224 426.631ZM400 176H48.002L48.004 160.018C48.014 133.562 69.545 112.039 96 112.039H352C378.455 112.039 399.988 133.562 400 160V176Z" />
        </Icon>
    </>
}