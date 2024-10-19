
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-half` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-half?s=light circle-half}
 * @preview ![circle-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDAuMjc5IDE2LjU0MUMyMzkuOTM0IDE2LjU0MSAyMzkuNTg4IDE2LjU1MyAyMzkuMjM2IDE2LjU3OEMxMTQuNTEgMjUuMTgyIDE2IDEyOS4wODYgMTYgMjU2QzE2IDM4Mi45MTIgMTE0LjUxIDQ4Ni44MTYgMjM5LjIzNiA0OTUuNDIyQzIzOS41ODYgNDk1LjQ0NSAyMzkuOTM2IDQ5NS40NTcgMjQwLjI3OSA0OTUuNDU3QzI0OC45MTIgNDk1LjQ1NyAyNTYgNDg4LjAzMSAyNTYgNDc5LjI2NFYzMi43MzZDMjU2IDIzLjk2OSAyNDguOTEyIDE2LjU0MSAyNDAuMjc5IDE2LjU0MVpNMjI0IDQ2MS41NTFDMTIzLjk5OCA0NDYuMDcgNDggMzU4Ljk2MyA0OCAyNTZDNDggMTUzLjA0MyAxMjMuOTk4IDY1LjkzOCAyMjQgNTAuNDQ5VjQ2MS41NTFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleHalf(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M240.279 16.541C239.934 16.541 239.588 16.553 239.236 16.578C114.51 25.182 16 129.086 16 256C16 382.912 114.51 486.816 239.236 495.422C239.586 495.445 239.936 495.457 240.279 495.457C248.912 495.457 256 488.031 256 479.264V32.736C256 23.969 248.912 16.541 240.279 16.541ZM224 461.551C123.998 446.07 48 358.963 48 256C48 153.043 123.998 65.938 224 50.449V461.551Z" />
        </Icon>
    </>
}