
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lips` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lips?s=solid lips}
 * @preview ![lips](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjguMDE3IDIwMS42NjRDNTIxLjU1NCAxMjQuNTk4IDQxOS42MjggNjQgMzc1Ljk3NiA2NEMzNzUuOTc2IDY0IDM0Ni42MTUgNjQgMjg4LjAwMSAxMDlDMjI5LjM4OCA2NCAyMDAuMDI1IDY0IDIwMC4wMjUgNjRDMTU2LjM3NCA2NCA1NC40NDcgMTI0LjU5OCA3Ljk4NCAyMDEuNjY0Qy0xLjM1NCAyMTcuMDc0IC0yLjQ3OSAyMzUuODU5IDQuNDk1IDI1Mi4zOThDMjkuNjk3IDMxMi4yNSAxMDUuODYxIDQ0OCAyNTEuMzI1IDQ0OEgzMjQuNjc1QzQ3MC4xNCA0NDggNTQ2LjMwNCAzMTIuMjUgNTcxLjUwNSAyNTIuMzk4QzU3OC40OCAyMzUuODU5IDU3Ny4zNTUgMjE3LjA3NCA1NjguMDE3IDIwMS42NjRaTTI4OC4wMDUgMzIwQzEzOC43MDggMzIwIDY0LjAwNSAyMjQgNjQuMDA1IDIyNFMxMjAuMDA1IDE5MiAyMDQuMDA1IDE5MkwyMzQuOTU4IDIwMC44NzVDMjUxLjQ3NCAyMDUuNSAyNjkuNjMgMjA4IDI4OC4wMDUgMjA4UzMyNC41MzYgMjA1LjUgMzQxLjA1MiAyMDAuODc1TDM3Mi4wMDUgMTkyQzQ1Ni4wMDUgMTkyIDUxMi4wMDUgMjI0IDUxMi4wMDUgMjI0UzQzNy4zMDIgMzIwIDI4OC4wMDUgMzIwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Lips(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M568.017 201.664C521.554 124.598 419.628 64 375.976 64C375.976 64 346.615 64 288.001 109C229.388 64 200.025 64 200.025 64C156.374 64 54.447 124.598 7.984 201.664C-1.354 217.074 -2.479 235.859 4.495 252.398C29.697 312.25 105.861 448 251.325 448H324.675C470.14 448 546.304 312.25 571.505 252.398C578.48 235.859 577.355 217.074 568.017 201.664ZM288.005 320C138.708 320 64.005 224 64.005 224S120.005 192 204.005 192L234.958 200.875C251.474 205.5 269.63 208 288.005 208S324.536 205.5 341.052 200.875L372.005 192C456.005 192 512.005 224 512.005 224S437.302 320 288.005 320Z" />
        </Icon>
    </>
}