
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-exclamation` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-exclamation?s=solid file-exclamation}
 * @preview ![file-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMTI4VjBINDhDMjEuNDkyIDAgMCAyMS40OTIgMCA0OFY0NjRDMCA0OTAuNTA4IDIxLjQ5MiA1MTIgNDggNTEySDMzNkMzNjIuNTA4IDUxMiAzODQgNDkwLjUwOCAzODQgNDY0VjE2MEgyNTZDMjM4LjMyOCAxNjAgMjI0IDE0NS42NzIgMjI0IDEyOFpNMTY4IDIxNkMxNjggMjAyLjc1IDE3OC43NSAxOTIgMTkyIDE5MlMyMTYgMjAyLjc1IDIxNiAyMTZWMzI4QzIxNiAzNDEuMjUgMjA1LjI1IDM1MiAxOTIgMzUyUzE2OCAzNDEuMjUgMTY4IDMyOFYyMTZaTTIyNCA0MTZDMjI0IDQzMy42NzIgMjA5LjY3MiA0NDggMTkyIDQ0OFMxNjAgNDMzLjY3MiAxNjAgNDE2VjQxNS45OThDMTYwIDQxNS44MiAxNjAuMTAyIDQxNS42NzQgMTYwLjEwMiA0MTUuNDk4QzE2MC4zNzUgMzk4Ljk0NyAxNzMuMjQ2IDM4NS44MTQgMTg5LjUyMyAzODQuNUMxOTAuMzgzIDM4NC40MyAxOTEuMTI1IDM4My45OTggMTkyIDM4My45OThTMTkzLjYxNyAzODQuNDMgMTk0LjQ3NyAzODQuNUMyMTAuNzU0IDM4NS44MTQgMjIzLjYyNSAzOTguOTQ3IDIyMy44OTggNDE1LjQ5OEMyMjMuODk4IDQxNS42NzQgMjI0IDQxNS44MiAyMjQgNDE1Ljk5OFY0MTZaTTI1NiAwVjEyOEgzODRMMjU2IDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FileExclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M224 128V0H48C21.492 0 0 21.492 0 48V464C0 490.508 21.492 512 48 512H336C362.508 512 384 490.508 384 464V160H256C238.328 160 224 145.672 224 128ZM168 216C168 202.75 178.75 192 192 192S216 202.75 216 216V328C216 341.25 205.25 352 192 352S168 341.25 168 328V216ZM224 416C224 433.672 209.672 448 192 448S160 433.672 160 416V415.998C160 415.82 160.102 415.674 160.102 415.498C160.375 398.947 173.246 385.814 189.523 384.5C190.383 384.43 191.125 383.998 192 383.998S193.617 384.43 194.477 384.5C210.754 385.814 223.625 398.947 223.898 415.498C223.898 415.674 224 415.82 224 415.998V416ZM256 0V128H384L256 0Z" />
        </Icon>
    </>
}