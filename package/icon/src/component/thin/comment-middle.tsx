
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `comment-middle` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-middle?s=thin comment-middle}
 * @preview ![comment-middle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMEMxMTQuNTk0IDAgMCA5My4wOTQgMCAyMDhDMCAzMDMuOTg4IDgwLjA3NiAzODQuNTMzIDE4OC44MzggNDA4LjUyNUwyMzcuNzI1IDUwMS45MTZDMjQxLjI0MiA1MDguNjM5IDI0OC42MjEgNTEyIDI1NiA1MTJTMjcwLjc1OCA1MDguNjM5IDI3NC4yNzUgNTAxLjkxNkwzMjMuMTYyIDQwOC41MjVDNDMxLjkyNCAzODQuNTMzIDUxMiAzMDMuOTg4IDUxMiAyMDhDNTEyIDkzLjA5NCAzOTcuNDA2IDAgMjU2IDBaTTMxMi40NDEgMzk0LjUwNkwyNjAuMSA0OTQuNDk2QzI1OS43MTMgNDk1LjIzNiAyNTguMDc0IDQ5NiAyNTYgNDk2UzI1Mi4yODcgNDk1LjIzNiAyNTEuOSA0OTQuNDk2TDE5OS41NTkgMzk0LjUwNkMyMi42MDQgMzU1LjQ0NyAxNiAyMjYuMjY4IDE2IDIwOEMxNiAxMDIuMTMxIDEyMy42NjQgMTYgMjU2IDE2UzQ5NiAxMDIuMTMxIDQ5NiAyMDhDNDk2IDIyNi4yNjggNDg5LjM5NiAzNTUuNDQ3IDMxMi40NDEgMzk0LjUwNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CommentMiddle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 0C114.594 0 0 93.094 0 208C0 303.988 80.076 384.533 188.838 408.525L237.725 501.916C241.242 508.639 248.621 512 256 512S270.758 508.639 274.275 501.916L323.162 408.525C431.924 384.533 512 303.988 512 208C512 93.094 397.406 0 256 0ZM312.441 394.506L260.1 494.496C259.713 495.236 258.074 496 256 496S252.287 495.236 251.9 494.496L199.559 394.506C22.604 355.447 16 226.268 16 208C16 102.131 123.664 16 256 16S496 102.131 496 208C496 226.268 489.396 355.447 312.441 394.506Z" />
        </Icon>
    </>
}