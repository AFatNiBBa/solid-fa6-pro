
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bomb` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bomb?s=solid bomb}
 * @preview ![bomb](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOTAuNDc3IDE0NC4xNDhMNDAzLjMxMiAxMzEuMzEzQzQwOS41NjIgMTI1LjA2MyA0MDkuNTYyIDExNC45MzggNDAzLjMxMiAxMDguNjg4UzM4Ni45MzcgMTAyLjQzOCAzODAuNjg4IDEwOC42ODhMMzY3Ljg1MiAxMjEuNTIzTDMzMi42NDYgODYuMzJDMzI0LjIxOSA3Ny44OTMgMzEwLjU1NSA3Ny44OTMgMzAyLjEyNyA4Ni4zMkwyNzkuNTQ3IDEwOC45QzI1Ny4yMDcgMTAwLjcwMyAyMzMuMTgyIDk2IDIwOCA5NkM5My4xMjUgOTYgMCAxODkuMTI1IDAgMzA0UzkzLjEyNSA1MTIgMjA4IDUxMlM0MTYgNDE4Ljg3NSA0MTYgMzA0QzQxNiAyNzguODE4IDQxMS4yOTcgMjU0Ljc5MSA0MDMuMSAyMzIuNDUxTDQyNS42OCAyMDkuODczQzQzNC4xMDcgMjAxLjQ0NSA0MzQuMTA3IDE4Ny43ODEgNDI1LjY4IDE3OS4zNTJMMzkwLjQ3NyAxNDQuMTQ4Wk0yMDggMTkyQzE0Ni4yNSAxOTIgOTYgMjQyLjI1IDk2IDMwNEM5NiAzMTIuODQ0IDg4Ljg0NCAzMjAgODAgMzIwUzY0IDMxMi44NDQgNjQgMzA0QzY0IDIyNC41OTQgMTI4LjU5NCAxNjAgMjA4IDE2MEMyMTYuODQ0IDE2MCAyMjQgMTY3LjE1NiAyMjQgMTc2UzIxNi44NDQgMTkyIDIwOCAxOTJaTTUwOS4xMSA1OS4yMjZMNDY5LjM1MiA0Mi42NUw0NTIuNzczIDIuOTAxQzQ1MC44MTggLTEuMDMxIDQ0NS4xMTQgLTAuOTAyIDQ0My4yMjQgMi45MDFMNDI2LjY0NSA0Mi42NUwzODYuODg5IDU5LjIyNkMzODIuOTcyIDYxLjE4NyAzODMuMTAzIDY2Ljg4MSAzODYuODg5IDY4Ljc3Nkw0MjYuNjQ1IDg1LjM1Mkw0NDMuMjI0IDEyNS4wOTlDNDQ1LjEgMTI4Ljg3NCA0NTAuODA1IDEyOS4wNTkgNDUyLjc3MyAxMjUuMDk5TDQ2OS4zNTIgODUuMzUyTDUwOS4xMSA2OC43NzZDNTEyLjg4NiA2Ni44ODggNTEzLjA0IDYxLjE5MSA1MDkuMTEgNTkuMjI2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Bomb(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M390.477 144.148L403.312 131.313C409.562 125.063 409.562 114.938 403.312 108.688S386.937 102.438 380.688 108.688L367.852 121.523L332.646 86.32C324.219 77.893 310.555 77.893 302.127 86.32L279.547 108.9C257.207 100.703 233.182 96 208 96C93.125 96 0 189.125 0 304S93.125 512 208 512S416 418.875 416 304C416 278.818 411.297 254.791 403.1 232.451L425.68 209.873C434.107 201.445 434.107 187.781 425.68 179.352L390.477 144.148ZM208 192C146.25 192 96 242.25 96 304C96 312.844 88.844 320 80 320S64 312.844 64 304C64 224.594 128.594 160 208 160C216.844 160 224 167.156 224 176S216.844 192 208 192ZM509.11 59.226L469.352 42.65L452.773 2.901C450.818 -1.031 445.114 -0.902 443.224 2.901L426.645 42.65L386.889 59.226C382.972 61.187 383.103 66.881 386.889 68.776L426.645 85.352L443.224 125.099C445.1 128.874 450.805 129.059 452.773 125.099L469.352 85.352L509.11 68.776C512.886 66.888 513.04 61.191 509.11 59.226Z" />
        </Icon>
    </>
}