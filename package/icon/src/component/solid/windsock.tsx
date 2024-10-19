
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `windsock` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/windsock?s=solid windsock}
 * @preview ![windsock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggOTZINjRWMzJDNjQgMTQuMzI2IDQ5LjY3NCAwIDMyIDBTMCAxNC4zMjYgMCAzMlY0OTZDMCA1MDQuODM2IDcuMTY0IDUxMiAxNiA1MTJINDhDNTYuODM2IDUxMiA2NCA1MDQuODM2IDY0IDQ5NlYzMjBIMTI4VjM2NC43OTlMMjA4IDM0OC43OTlWNjcuMTk5TDEyOCA1MS4xOTlWOTZaTTEyOCAyNzJINjRWMTQ0SDEyOFYyNzJaTTI3MiAzMzZMMzY4IDMxNi43OTlWOTkuMTk5TDI3MiA4MFYzMzZaTTQ5Mi43MDcgMTI0LjE0MUw0MzIgMTEyVjMwMy45OThMNDkyLjcwNyAyOTEuODU3QzUwMy45MjYgMjg5LjYxNSA1MTIgMjc5Ljc2NCA1MTIgMjY4LjMyNFYxNDcuNjc2QzUxMiAxMzYuMjM0IDUwMy45MjYgMTI2LjM4NSA0OTIuNzA3IDEyNC4xNDFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Windsock(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M128 96H64V32C64 14.326 49.674 0 32 0S0 14.326 0 32V496C0 504.836 7.164 512 16 512H48C56.836 512 64 504.836 64 496V320H128V364.799L208 348.799V67.199L128 51.199V96ZM128 272H64V144H128V272ZM272 336L368 316.799V99.199L272 80V336ZM492.707 124.141L432 112V303.998L492.707 291.857C503.926 289.615 512 279.764 512 268.324V147.676C512 136.234 503.926 126.385 492.707 124.141Z" />
        </Icon>
    </>
}