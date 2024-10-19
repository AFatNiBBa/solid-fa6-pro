
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-parking` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-parking?s=solid square-parking}
 * @preview ![square-parking](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDAgMTkySDE5MlYyNTZIMjQwQzI1Ny42NTYgMjU2IDI3MiAyNDEuNjU2IDI3MiAyMjRTMjU3LjY1NiAxOTIgMjQwIDE5MlpNMzg0IDMySDY0QzI4LjY1NCAzMiAwIDYwLjY1NCAwIDk2VjQxNkMwIDQ1MS4zNDYgMjguNjU0IDQ4MCA2NCA0ODBIMzg0QzQxOS4zNDggNDgwIDQ0OCA0NTEuMzQ2IDQ0OCA0MTZWOTZDNDQ4IDYwLjY1NCA0MTkuMzQ4IDMyIDM4NCAzMlpNMjQwIDMyMEgxOTJWMzUyQzE5MiAzNjkuNjg4IDE3Ny42ODggMzg0IDE2MCAzODRTMTI4IDM2OS42ODggMTI4IDM1MlYxNjBDMTI4IDE0Mi4zMTIgMTQyLjMxMiAxMjggMTYwIDEyOEgyNDBDMjkyLjkzOCAxMjggMzM2IDE3MS4wNjIgMzM2IDIyNFMyOTIuOTM4IDMyMCAyNDAgMzIwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareParking(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M240 192H192V256H240C257.656 256 272 241.656 272 224S257.656 192 240 192ZM384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM240 320H192V352C192 369.688 177.688 384 160 384S128 369.688 128 352V160C128 142.312 142.312 128 160 128H240C292.938 128 336 171.062 336 224S292.938 320 240 320Z" />
        </Icon>
    </>
}