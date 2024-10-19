
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-h` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-h?s=solid circle-h}
 * @preview ![circle-h](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTM2OCAzNjBDMzY4IDM3My4yNSAzNTcuMjUgMzg0IDM0NCAzODRTMzIwIDM3My4yNSAzMjAgMzYwVjI4MEgxOTJWMzYwQzE5MiAzNzMuMjUgMTgxLjI1IDM4NCAxNjggMzg0UzE0NCAzNzMuMjUgMTQ0IDM2MFYxNTJDMTQ0IDEzOC43NSAxNTQuNzUgMTI4IDE2OCAxMjhTMTkyIDEzOC43NSAxOTIgMTUyVjIzMkgzMjBWMTUyQzMyMCAxMzguNzUgMzMwLjc1IDEyOCAzNDQgMTI4UzM2OCAxMzguNzUgMzY4IDE1MlYzNjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleH(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM368 360C368 373.25 357.25 384 344 384S320 373.25 320 360V280H192V360C192 373.25 181.25 384 168 384S144 373.25 144 360V152C144 138.75 154.75 128 168 128S192 138.75 192 152V232H320V152C320 138.75 330.75 128 344 128S368 138.75 368 152V360Z" />
        </Icon>
    </>
}