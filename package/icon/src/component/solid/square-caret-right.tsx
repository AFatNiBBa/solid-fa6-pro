
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-caret-right` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-right?s=solid square-caret-right}
 * @preview ![square-caret-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NCAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDQgNDQ4IDQxNlY5NkM0NDggNjAuNjUyIDQxOS4zNDYgMzIgMzg0IDMyWk0zMTIuMzQ0IDI3My41OTRMMjAwLjM0NCAzNzcuNTk0QzE5NS44MTIgMzgxLjc4MSAxODkuOTM4IDM4NCAxODQgMzg0QzE4MC43NSAzODQgMTc3LjUgMzgzLjM0NCAxNzQuNDA2IDM4MkMxNjUuNjU2IDM3OC4xODggMTYwIDM2OS41MzEgMTYwIDM2MFYxNTJDMTYwIDE0Mi40NjkgMTY1LjY1NiAxMzMuODEyIDE3NC40MDYgMTMwQzE4My4xNTYgMTI2LjI1IDE5My4zNDQgMTI3LjkzOCAyMDAuMzQ0IDEzNC40MDZMMzEyLjM0NCAyMzguNDA2QzMxNy4yMTkgMjQyLjk2OSAzMjAgMjQ5LjMxMiAzMjAgMjU2UzMxNy4yMTkgMjY5LjAzMSAzMTIuMzQ0IDI3My41OTRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareCaretRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.652 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.652 419.346 32 384 32ZM312.344 273.594L200.344 377.594C195.812 381.781 189.938 384 184 384C180.75 384 177.5 383.344 174.406 382C165.656 378.188 160 369.531 160 360V152C160 142.469 165.656 133.812 174.406 130C183.156 126.25 193.344 127.938 200.344 134.406L312.344 238.406C317.219 242.969 320 249.312 320 256S317.219 269.031 312.344 273.594Z" />
        </Icon>
    </>
}