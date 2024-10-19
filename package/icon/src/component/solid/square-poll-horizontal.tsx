
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-poll-horizontal` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-poll-horizontal?s=solid square-poll-horizontal}
 * @preview ![square-poll-horizontal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjUyIDQxOS4zNDYgMzIgMzg0IDMyWk05NiAxNDRDOTYgMTM1LjEyNSAxMDMuMTI1IDEyOCAxMTIgMTI4SDI0MEMyNDguODc1IDEyOCAyNTYgMTM1LjEyNSAyNTYgMTQ0VjE3NkMyNTYgMTg0Ljg3NSAyNDguODc1IDE5MiAyNDAgMTkySDExMkMxMDMuMTI1IDE5MiA5NiAxODQuODc1IDk2IDE3NlYxNDRaTTE5MiAzNjhDMTkyIDM3Ni44NzUgMTg0Ljg3NSAzODQgMTc2IDM4NEgxMTJDMTAzLjEyNSAzODQgOTYgMzc2Ljg3NSA5NiAzNjhWMzM2Qzk2IDMyNy4xMjUgMTAzLjEyNSAzMjAgMTEyIDMyMEgxNzZDMTg0Ljg3NSAzMjAgMTkyIDMyNy4xMjUgMTkyIDMzNlYzNjhaTTM1MiAyNzJDMzUyIDI4MC44NzUgMzQ0Ljg3NSAyODggMzM2IDI4OEgxMTJDMTAzLjEyNSAyODggOTYgMjgwLjg3NSA5NiAyNzJWMjQwQzk2IDIzMS4xMjUgMTAzLjEyNSAyMjQgMTEyIDIyNEgzMzZDMzQ0Ljg3NSAyMjQgMzUyIDIzMS4xMjUgMzUyIDI0MFYyNzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquarePollHorizontal(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.652 419.346 32 384 32ZM96 144C96 135.125 103.125 128 112 128H240C248.875 128 256 135.125 256 144V176C256 184.875 248.875 192 240 192H112C103.125 192 96 184.875 96 176V144ZM192 368C192 376.875 184.875 384 176 384H112C103.125 384 96 376.875 96 368V336C96 327.125 103.125 320 112 320H176C184.875 320 192 327.125 192 336V368ZM352 272C352 280.875 344.875 288 336 288H112C103.125 288 96 280.875 96 272V240C96 231.125 103.125 224 112 224H336C344.875 224 352 231.125 352 240V272Z" />
        </Icon>
    </>
}