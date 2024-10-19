
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-f` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-f?s=thin circle-f}
 * @preview ![circle-f](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDQgMTI4SDE2OEMxNjMuNTk0IDEyOCAxNjAgMTMxLjU3OCAxNjAgMTM2VjM3NkMxNjAgMzgwLjQyMiAxNjMuNTk0IDM4NCAxNjggMzg0UzE3NiAzODAuNDIyIDE3NiAzNzZWMjcySDMxMkMzMTYuNDA2IDI3MiAzMjAgMjY4LjQyMiAzMjAgMjY0UzMxNi40MDYgMjU2IDMxMiAyNTZIMTc2VjE0NEgzNDRDMzQ4LjQwNiAxNDQgMzUyIDE0MC40MjIgMzUyIDEzNlMzNDguNDA2IDEyOCAzNDQgMTI4Wk0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NiA0ODAgMzIgMzc5LjUxNCAzMiAyNTZTMTMyLjQ4NiAzMiAyNTYgMzJTNDgwIDEzMi40ODYgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleF(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M344 128H168C163.594 128 160 131.578 160 136V376C160 380.422 163.594 384 168 384S176 380.422 176 376V272H312C316.406 272 320 268.422 320 264S316.406 256 312 256H176V144H344C348.406 144 352 140.422 352 136S348.406 128 344 128ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480Z" />
        </Icon>
    </>
}