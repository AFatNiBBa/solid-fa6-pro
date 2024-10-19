
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-down` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down?s=thin arrow-down}
 * @preview ![arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOTkuNzEyIDMwNy4xNDhMMjI5LjIxNiA0NzcuNjQ0QzIyNi4wNzYgNDgwLjc4NCAyMjAuOTkgNDgwLjc4NCAyMTcuODUxIDQ3Ny42NDRMNDcuMzU1IDMwNy4xNDhDNDQuMjE1IDMwNC4wMDkgNDQuMjE1IDI5OC45MjMgNDcuMzU1IDI5NS43ODNDNTAuNDk0IDI5Mi42NDQgNTUuNTggMjkyLjY0NCA1OC43MiAyOTUuNzgzTDIxNS40OTYgNDUyLjU2VjQwLjAzN0MyMTUuNDk2IDM1LjYxIDIxOS4wOTEgMzIgMjIzLjUzMyAzMlMyMzEuNTcgMzUuNjEgMjMxLjU3IDQwLjAzN1Y0NTIuNTZMMzg4LjM0NyAyOTUuNzgzQzM5MS40ODYgMjkyLjY0NCAzOTYuNTcyIDI5Mi42NDQgMzk5LjcxMiAyOTUuNzgzQzQwMi44NTMgMjk4LjkyNSA0MDIuODUzIDMwNC4wMDcgMzk5LjcxMiAzMDcuMTQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M399.712 307.148L229.216 477.644C226.076 480.784 220.99 480.784 217.851 477.644L47.355 307.148C44.215 304.009 44.215 298.923 47.355 295.783C50.494 292.644 55.58 292.644 58.72 295.783L215.496 452.56V40.037C215.496 35.61 219.091 32 223.533 32S231.57 35.61 231.57 40.037V452.56L388.347 295.783C391.486 292.644 396.572 292.644 399.712 295.783C402.853 298.925 402.853 304.007 399.712 307.148Z" />
        </Icon>
    </>
}