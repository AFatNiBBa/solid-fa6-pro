
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `magnifying-glass-plus` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-plus?s=regular magnifying-glass-plus}
 * @preview ![magnifying-glass-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDQuOTY5IDQ3MS4wMzFMMzcwLjk1OSAzMzcuMDIzQzM5OS4wODQgMzAxLjU0NyA0MTYgMjU2Ljc4NSA0MTYgMjA4QzQxNiA5My4xMjUgMzIyLjg3NSAwIDIwOCAwUzAgOTMuMTI1IDAgMjA4UzkzLjEyNSA0MTYgMjA4IDQxNkMyNTYuNzg1IDQxNiAzMDEuNTQ5IDM5OS4wODYgMzM3LjAyMSAzNzAuOTYxTDQ3MS4wMzEgNTA0Ljk2OUM0NzUuNzE5IDUwOS42NTYgNDgxLjg1OSA1MTIgNDg4IDUxMlM1MDAuMjgxIDUwOS42NTYgNTA0Ljk2OSA1MDQuOTY5QzUxNC4zNDQgNDk1LjU5NCA1MTQuMzQ0IDQ4MC40MDYgNTA0Ljk2OSA0NzEuMDMxWk0yMDggMzY4QzExOS43NzUgMzY4IDQ4IDI5Ni4yMjMgNDggMjA4UzExOS43NzUgNDggMjA4IDQ4UzM2OCAxMTkuNzc3IDM2OCAyMDhTMjk2LjIyNSAzNjggMjA4IDM2OFpNMjg4LjAwMiAxODRIMjMxLjk5OFYxMjhDMjMxLjk5OCAxMTQuNzM4IDIyMS4yNTggMTA0IDIwOCAxMDRTMTg0LjAwMiAxMTQuNzM4IDE4NC4wMDIgMTI4VjE4NEgxMjcuOTk4QzExNC43MzggMTg0IDEwNCAxOTQuNzQyIDEwNCAyMDhTMTE0LjczIDIzMiAxMjcuOTk4IDIzMkgxODQuMDAyVjI4OEMxODQuMDAyIDMwMS4yNTggMTk0LjczNCAzMTIgMjA4IDMxMkMyMjEuMjU4IDMxMiAyMzEuOTk4IDMwMS4yNjIgMjMxLjk5OCAyODhWMjMySDI4OC4wMDJDMzAxLjI2MiAyMzIgMzEyIDIyMS4yNTggMzEyIDIwOFMzMDEuMjYyIDE4NCAyODguMDAyIDE4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MagnifyingGlassPlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M504.969 471.031L370.959 337.023C399.084 301.547 416 256.785 416 208C416 93.125 322.875 0 208 0S0 93.125 0 208S93.125 416 208 416C256.785 416 301.549 399.086 337.021 370.961L471.031 504.969C475.719 509.656 481.859 512 488 512S500.281 509.656 504.969 504.969C514.344 495.594 514.344 480.406 504.969 471.031ZM208 368C119.775 368 48 296.223 48 208S119.775 48 208 48S368 119.777 368 208S296.225 368 208 368ZM288.002 184H231.998V128C231.998 114.738 221.258 104 208 104S184.002 114.738 184.002 128V184H127.998C114.738 184 104 194.742 104 208S114.73 232 127.998 232H184.002V288C184.002 301.258 194.734 312 208 312C221.258 312 231.998 301.262 231.998 288V232H288.002C301.262 232 312 221.258 312 208S301.262 184 288.002 184Z" />
        </Icon>
    </>
}