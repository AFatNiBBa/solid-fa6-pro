
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-o` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-o?s=solid circle-o}
 * @preview ![circle-o](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTc2QzIxMS44OTEgMTc2IDE3NiAyMTEuODkxIDE3NiAyNTZTMjExLjg5MSAzMzYgMjU2IDMzNlMzMzYgMzAwLjEwOSAzMzYgMjU2UzMwMC4xMDkgMTc2IDI1NiAxNzZaTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMjU2IDM4NEMxODUuNDIyIDM4NCAxMjggMzI2LjU3OCAxMjggMjU2UzE4NS40MjIgMTI4IDI1NiAxMjhTMzg0IDE4NS40MjIgMzg0IDI1NlMzMjYuNTc4IDM4NCAyNTYgMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleO(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 176C211.891 176 176 211.891 176 256S211.891 336 256 336S336 300.109 336 256S300.109 176 256 176ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 384C185.422 384 128 326.578 128 256S185.422 128 256 128S384 185.422 384 256S326.578 384 256 384Z" />
        </Icon>
    </>
}