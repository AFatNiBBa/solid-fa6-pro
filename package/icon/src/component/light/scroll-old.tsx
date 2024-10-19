
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `scroll-old` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scroll-old?s=light scroll-old}
 * @preview ![scroll-old](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NDQgMzIwSDQ4MFYxNDRDNDgwIDgyLjI1IDQyOS43NSAzMiAzNjggMzJIODBDMzUuODc1IDMyIDAgNjcuODc1IDAgMTEyVjE5MkMwIDIwOS42MjUgMTQuMzc1IDIyNCAzMiAyMjRIMTI4VjM4NEMxMjggNDM1LjEyNSAxNjguMjUgNDc2LjYyNSAyMTguNjI1IDQ3OS41TDQ2Ni42MjUgNDgwQzUyNyA0ODAgNTc2IDQzMSA1NzYgMzcwLjYyNVYzNTJDNTc2IDMzNC4zNzUgNTYxLjYyNSAzMjAgNTQ0IDMyMFpNMTI4IDE5MkgzMlYxMTJDMzIgODUuNSA1My41IDY0IDgwIDY0UzEyOCA4NS41IDEyOCAxMTJWMTkyWk0yODggMzg0QzI4OCA0MTkuMjUgMjU5LjI1IDQ0OCAyMjQgNDQ4UzE2MCA0MTkuMjUgMTYwIDM4NFYyNTZIMjA4QzIxNi44NDQgMjU2IDIyNCAyNDguODQ0IDIyNCAyNDBTMjE2Ljg0NCAyMjQgMjA4IDIyNEgxNjBWMTEyQzE2MCA5NCAxNTQgNzcuMzc1IDE0NCA2NEgzNjhDNDA2LjY0NSA2NCA0MzguOTUxIDkxLjUyMyA0NDYuMzgzIDEyOEg0MDBDMzkxLjE1NiAxMjggMzg0IDEzNS4xNTYgMzg0IDE0NFMzOTEuMTU2IDE2MCA0MDAgMTYwSDQ0OFYyMjRINDAwQzM5MS4xNTYgMjI0IDM4NCAyMzEuMTU2IDM4NCAyNDBTMzkxLjE1NiAyNTYgNDAwIDI1Nkg0NDhWMzIwSDMyMEMzMDIuMzc1IDMyMCAyODggMzM0LjM3NSAyODggMzUyVjM4NFpNNTQ0IDM3MC42MjVDNTQ0IDQxMy4yNSA1MDkuMjUgNDQ4IDQ2Ni42MjUgNDQ4SDI5NUMzMTAuMzc1IDQzMSAzMjAgNDA4LjYyNSAzMjAgMzg0VjM1MkgzNjhWMzY4QzM2OCAzNzYuODQ0IDM3NS4xNTYgMzg0IDM4NCAzODRTNDAwIDM3Ni44NDQgNDAwIDM2OFYzNTJINTQ0VjM3MC42MjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ScrollOld(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M544 320H480V144C480 82.25 429.75 32 368 32H80C35.875 32 0 67.875 0 112V192C0 209.625 14.375 224 32 224H128V384C128 435.125 168.25 476.625 218.625 479.5L466.625 480C527 480 576 431 576 370.625V352C576 334.375 561.625 320 544 320ZM128 192H32V112C32 85.5 53.5 64 80 64S128 85.5 128 112V192ZM288 384C288 419.25 259.25 448 224 448S160 419.25 160 384V256H208C216.844 256 224 248.844 224 240S216.844 224 208 224H160V112C160 94 154 77.375 144 64H368C406.645 64 438.951 91.523 446.383 128H400C391.156 128 384 135.156 384 144S391.156 160 400 160H448V224H400C391.156 224 384 231.156 384 240S391.156 256 400 256H448V320H320C302.375 320 288 334.375 288 352V384ZM544 370.625C544 413.25 509.25 448 466.625 448H295C310.375 431 320 408.625 320 384V352H368V368C368 376.844 375.156 384 384 384S400 376.844 400 368V352H544V370.625Z" />
        </Icon>
    </>
}