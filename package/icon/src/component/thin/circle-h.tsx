
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-h` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-h?s=thin circle-h}
 * @preview ![circle-h](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NiA0ODAgMzIgMzc5LjUxNCAzMiAyNTZTMTMyLjQ4NiAzMiAyNTYgMzJTNDgwIDEzMi40ODYgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwWk0zNDQgMTI4QzMzOS41OTQgMTI4IDMzNiAxMzEuNTc4IDMzNiAxMzZWMjQ4SDE3NlYxMzZDMTc2IDEzMS41NzggMTcyLjQwNiAxMjggMTY4IDEyOFMxNjAgMTMxLjU3OCAxNjAgMTM2VjM3NkMxNjAgMzgwLjQyMiAxNjMuNTk0IDM4NCAxNjggMzg0UzE3NiAzODAuNDIyIDE3NiAzNzZWMjY0SDMzNlYzNzZDMzM2IDM4MC40MjIgMzM5LjU5NCAzODQgMzQ0IDM4NFMzNTIgMzgwLjQyMiAzNTIgMzc2VjEzNkMzNTIgMTMxLjU3OCAzNDguNDA2IDEyOCAzNDQgMTI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleH(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM344 128C339.594 128 336 131.578 336 136V248H176V136C176 131.578 172.406 128 168 128S160 131.578 160 136V376C160 380.422 163.594 384 168 384S176 380.422 176 376V264H336V376C336 380.422 339.594 384 344 384S352 380.422 352 376V136C352 131.578 348.406 128 344 128Z" />
        </Icon>
    </>
}