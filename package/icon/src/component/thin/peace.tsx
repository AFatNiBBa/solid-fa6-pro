
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `peace` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/peace?s=thin peace}
 * @preview ![peace](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTQ4MCAyNTZDNDgwIDMwNy42MDUgNDYyLjI4NSAzNTUuMDUzIDQzMi44NTIgMzkyLjk2OUwyNjQgMjUyLjI2VjMyLjQwNEMzODMuNzkxIDM2LjY2NCA0ODAgMTM1LjE4OCA0ODAgMjU2Wk0yNDggMzIuNDA0VjI1Mi4yNkw3OS4xNDggMzkyLjk2OUM0OS43MTUgMzU1LjA1MyAzMiAzMDcuNjA1IDMyIDI1NkMzMiAxMzUuMTg4IDEyOC4yMDkgMzYuNjY0IDI0OCAzMi40MDRaTTg5LjQyMiA0MDUuMjNMMjQ4IDI3My4wNzRWNDc5LjU5NkMxODUuMDc0IDQ3Ny4zNTcgMTI4Ljc4NyA0NDkuMTI3IDg5LjQyMiA0MDUuMjNaTTI2NCA0NzkuNTk2VjI3My4wNzRMNDIyLjU3OCA0MDUuMjNDMzgzLjIxMyA0NDkuMTI3IDMyNi45MjYgNDc3LjM1NyAyNjQgNDc5LjU5NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Peace(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM480 256C480 307.605 462.285 355.053 432.852 392.969L264 252.26V32.404C383.791 36.664 480 135.188 480 256ZM248 32.404V252.26L79.148 392.969C49.715 355.053 32 307.605 32 256C32 135.188 128.209 36.664 248 32.404ZM89.422 405.23L248 273.074V479.596C185.074 477.357 128.787 449.127 89.422 405.23ZM264 479.596V273.074L422.578 405.23C383.213 449.127 326.926 477.357 264 479.596Z" />
        </Icon>
    </>
}