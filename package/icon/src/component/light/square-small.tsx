
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-small` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-small?s=light square-small}
 * @preview ![square-small](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgOTZINjRDMjguNjU0IDk2IDAgMTI0LjY1NCAwIDE2MFYzNTJDMCAzODcuMzQ2IDI4LjY1NCA0MTYgNjQgNDE2SDI1NkMyOTEuMzQ2IDQxNiAzMjAgMzg3LjM0NiAzMjAgMzUyVjE2MEMzMjAgMTI0LjY1NCAyOTEuMzQ2IDk2IDI1NiA5NlpNMjg4IDM1MkMyODggMzY5LjY0NSAyNzMuNjQ1IDM4NCAyNTYgMzg0SDY0QzQ2LjM1NSAzODQgMzIgMzY5LjY0NSAzMiAzNTJWMTYwQzMyIDE0Mi4zNTUgNDYuMzU1IDEyOCA2NCAxMjhIMjU2QzI3My42NDUgMTI4IDI4OCAxNDIuMzU1IDI4OCAxNjBWMzUyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareSmall(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M256 96H64C28.654 96 0 124.654 0 160V352C0 387.346 28.654 416 64 416H256C291.346 416 320 387.346 320 352V160C320 124.654 291.346 96 256 96ZM288 352C288 369.645 273.645 384 256 384H64C46.355 384 32 369.645 32 352V160C32 142.355 46.355 128 64 128H256C273.645 128 288 142.355 288 160V352Z" />
        </Icon>
    </>
}