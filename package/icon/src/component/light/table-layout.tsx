
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `table-layout` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/table-layout?s=light table-layout}
 * @preview ![table-layout](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDYgNTEyIDQxNlY5NkM1MTIgNjAuNjUyIDQ4My4zNDYgMzIgNDQ4IDMyWk0xNjAgNDQ4SDY0QzQ2LjMyNiA0NDggMzIgNDMzLjY3MiAzMiA0MTZWMjAyLjYyNUgxNjBWNDQ4Wk00ODAgNDE2QzQ4MCA0MzMuNjcyIDQ2NS42NzQgNDQ4IDQ0OCA0NDhIMTkyVjIwMi42MjVINDgwVjQxNlpNNDgwIDE3MC42MjVIMzJWOTZDMzIgNzguMzI2IDQ2LjMyNiA2NCA2NCA2NEg0NDhDNDY1LjY3NCA2NCA0ODAgNzguMzI2IDQ4MCA5NlYxNzAuNjI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TableLayout(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.652 483.346 32 448 32ZM160 448H64C46.326 448 32 433.672 32 416V202.625H160V448ZM480 416C480 433.672 465.674 448 448 448H192V202.625H480V416ZM480 170.625H32V96C32 78.326 46.326 64 64 64H448C465.674 64 480 78.326 480 96V170.625Z" />
        </Icon>
    </>
}