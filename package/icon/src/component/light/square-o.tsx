
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-o` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-o?s=light square-o}
 * @preview ![square-o](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk00MTYgNDE2QzQxNiA0MzMuNjQ1IDQwMS42NDUgNDQ4IDM4NCA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlY5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDM4NEM0MDEuNjQ1IDY0IDQxNiA3OC4zNTUgNDE2IDk2VjQxNlpNMjI0IDEyOEMxNTMuNDIyIDEyOCA5NiAxODUuNDIyIDk2IDI1NlMxNTMuNDIyIDM4NCAyMjQgMzg0UzM1MiAzMjYuNTc4IDM1MiAyNTZTMjk0LjU3OCAxMjggMjI0IDEyOFpNMjI0IDM1MkMxNzEuMDYyIDM1MiAxMjggMzA4LjkzOCAxMjggMjU2UzE3MS4wNjIgMTYwIDIyNCAxNjBTMzIwIDIwMy4wNjIgMzIwIDI1NlMyNzYuOTM4IDM1MiAyMjQgMzUyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareO(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416ZM224 128C153.422 128 96 185.422 96 256S153.422 384 224 384S352 326.578 352 256S294.578 128 224 128ZM224 352C171.062 352 128 308.938 128 256S171.062 160 224 160S320 203.062 320 256S276.938 352 224 352Z" />
        </Icon>
    </>
}