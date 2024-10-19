
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `font-awesome` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/font-awesome?s=solid font-awesome}
 * @preview ![font-awesome](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggNDhWMzg0QzM4NC45MDYgNDA2LjUzNSAzNjUuNjY0IDQxNiAzMjguNTMxIDQxNkMyNjUuNzExIDQxNiAyNDEuOTMgMzg0IDE3OS4xOTkgMzg0QzE1OC42MDkgMzg0IDE0Mi42MjEgMzg3LjU2MSAxMjggMzkyLjE3OFYzMjguMTc4QzE0Mi42MjEgMzIzLjU2MSAxNTguNjA5IDMyMCAxNzkuMTk5IDMyMEMyNDEuOTMgMzIwIDI2NS43MTEgMzUyIDMyOC41MzEgMzUyQzM0OC45NDUgMzUyIDM2NC4xNDEgMzQ5LjAxMiAzODQgMzQyLjY4OVYxMzQuNjg5QzM2NC4xNDEgMTQxLjAxIDM0OC45NDUgMTQ0IDMyOC41MzEgMTQ0QzI2NS43MTEgMTQ0IDI0MS45MyAxMTIgMTc5LjIwMyAxMTJDMTI4LjQzOCAxMTIgMTA0LjM0OCAxMzIuNjI5IDY0IDE0MC42NjRWNDQ4QzY0IDQ2NS42NzIgNDkuNjc0IDQ4MCAzMiA0ODBTMCA0NjUuNjcyIDAgNDQ4VjY0QzAgNDYuMzI2IDE0LjMyNiAzMiAzMiAzMlM2NCA0Ni4zMjYgNjQgNjRWNzYuNjY0QzEwNC4zNDggNjguNjI5IDEyOC40MzggNDggMTc5LjIwMyA0OEMyNDEuOTMgNDggMjY1LjcxMSA4MCAzMjguNTMxIDgwQzM2NS42NjQgODAgMzg0LjkwNiA3MC41MzUgNDQ4IDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FontAwesome(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 48V384C384.906 406.535 365.664 416 328.531 416C265.711 416 241.93 384 179.199 384C158.609 384 142.621 387.561 128 392.178V328.178C142.621 323.561 158.609 320 179.199 320C241.93 320 265.711 352 328.531 352C348.945 352 364.141 349.012 384 342.689V134.689C364.141 141.01 348.945 144 328.531 144C265.711 144 241.93 112 179.203 112C128.438 112 104.348 132.629 64 140.664V448C64 465.672 49.674 480 32 480S0 465.672 0 448V64C0 46.326 14.326 32 32 32S64 46.326 64 64V76.664C104.348 68.629 128.438 48 179.203 48C241.93 48 265.711 80 328.531 80C365.664 80 384.906 70.535 448 48Z" />
        </Icon>
    </>
}