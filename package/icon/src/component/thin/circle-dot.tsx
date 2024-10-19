
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-dot` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-dot?s=thin circle-dot}
 * @preview ![circle-dot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NiA0ODAgMzIgMzc5LjUxNCAzMiAyNTZTMTMyLjQ4NiAzMiAyNTYgMzJTNDgwIDEzMi40ODYgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwWk0yNTYgMTYwQzIwMi45OCAxNjAgMTYwIDIwMi45OCAxNjAgMjU2UzIwMi45OCAzNTIgMjU2IDM1MlMzNTIgMzA5LjAyIDM1MiAyNTZTMzA5LjAyIDE2MCAyNTYgMTYwWk0yNTYgMzM2QzIxMS44ODkgMzM2IDE3NiAzMDAuMTExIDE3NiAyNTZTMjExLjg4OSAxNzYgMjU2IDE3NkMzMDAuMTEzIDE3NiAzMzYgMjExLjg4OSAzMzYgMjU2UzMwMC4xMTMgMzM2IDI1NiAzMzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleDot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM256 160C202.98 160 160 202.98 160 256S202.98 352 256 352S352 309.02 352 256S309.02 160 256 160ZM256 336C211.889 336 176 300.111 176 256S211.889 176 256 176C300.113 176 336 211.889 336 256S300.113 336 256 336Z" />
        </Icon>
    </>
}