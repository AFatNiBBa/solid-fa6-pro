
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `table` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/table?s=light table}
 * @preview ![table](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDYgNTEyIDQxNlY5NkM1MTIgNjAuNjUyIDQ4My4zNDYgMzIgNDQ4IDMyWk0zMiAxOTJIMjQwVjMwNEgzMlYxOTJaTTY0IDQ0OEM0Ni4zNTUgNDQ4IDMyIDQzMy42NDUgMzIgNDE2VjMzNkgyNDBWNDQ4SDY0Wk00ODAgNDE2QzQ4MCA0MzMuNjQ1IDQ2NS42NDUgNDQ4IDQ0OCA0NDhIMjcyVjMzNkg0ODBWNDE2Wk00ODAgMzA0SDI3MlYxOTJINDgwVjMwNFpNNDgwIDE2MEgzMlY5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDQ0OEM0NjUuNjQ1IDY0IDQ4MCA3OC4zNTUgNDgwIDk2VjE2MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Table(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.652 483.346 32 448 32ZM32 192H240V304H32V192ZM64 448C46.355 448 32 433.645 32 416V336H240V448H64ZM480 416C480 433.645 465.645 448 448 448H272V336H480V416ZM480 304H272V192H480V304ZM480 160H32V96C32 78.355 46.355 64 64 64H448C465.645 64 480 78.355 480 96V160Z" />
        </Icon>
    </>
}