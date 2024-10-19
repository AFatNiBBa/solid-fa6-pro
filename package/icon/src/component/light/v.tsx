
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `v` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/v?s=light v}
 * @preview ![v](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgNDgwQzE4NS41NzggNDgwIDE3OS43NjYgNDc2LjE1NiAxNzcuMjY2IDQ3MC4yMTlMMS4yNjcgNTQuMjI0Qy0yLjE3MSA0Ni4wOTkgMS42MjYgMzYuNzI0IDkuNzY3IDMzLjI1NUMxNy44NzYgMjkuODggMjcuMjk4IDMzLjYzIDMwLjczNSA0MS43ODdMMTkyIDQyMi45MzhMMzUzLjI2NSA0MS43ODZDMzU2LjY4NiAzMy41OTkgMzY2LjA5MyAyOS44NDkgMzc0LjIzMyAzMy4yNTVDMzgyLjM3NCAzNi43MjQgMzg2LjE3MSA0Ni4wOTkgMzgyLjczMyA1NC4yMjRMMjA2LjczNCA0NzAuMjE5QzIwNC4yMzQgNDc2LjE1NiAxOTguNDIyIDQ4MCAxOTIgNDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function V(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 480C185.578 480 179.766 476.156 177.266 470.219L1.267 54.224C-2.171 46.099 1.626 36.724 9.767 33.255C17.876 29.88 27.298 33.63 30.735 41.787L192 422.938L353.265 41.786C356.686 33.599 366.093 29.849 374.233 33.255C382.374 36.724 386.171 46.099 382.733 54.224L206.734 470.219C204.234 476.156 198.422 480 192 480Z" />
        </Icon>
    </>
}