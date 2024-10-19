
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hard-drive` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hard-drive?s=light hard-drive}
 * @preview ![hard-drive](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0OCA0ODAgNTEyIDQ1MS4zNDYgNTEyIDQxNlY5NkM1MTIgNjAuNjUyIDQ4My4zNDggMzIgNDQ4IDMyWk00ODAgNDE2QzQ4MCA0MzMuNjQ1IDQ2NS42NDUgNDQ4IDQ0OCA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlYzMjBDMzIgMzAyLjM1NSA0Ni4zNTUgMjg4IDY0IDI4OEg0NDhDNDY1LjY0NSAyODggNDgwIDMwMi4zNTUgNDgwIDMyMFY0MTZaTTQ4MCAyNjQuODc3QzQ3MC41NTMgMjU5LjM3OSA0NTkuNzE3IDI1NiA0NDggMjU2SDY0QzUyLjI4MyAyNTYgNDEuNDQ1IDI1OS4zNzkgMzIgMjY0Ljg3N1Y5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDQ0OEM0NjUuNjQ1IDY0IDQ4MCA3OC4zNTUgNDgwIDk2VjI2NC44NzdaTTMyMCAzNDRDMzA2Ljc0NiAzNDQgMjk2IDM1NC43NDQgMjk2IDM2OEMyOTYgMzgxLjI1NCAzMDYuNzQ2IDM5MiAzMjAgMzkyQzMzMy4yNTYgMzkyIDM0NCAzODEuMjU0IDM0NCAzNjhDMzQ0IDM1NC43NDQgMzMzLjI1NiAzNDQgMzIwIDM0NFpNNDE2IDM0NEM0MDIuNzQ2IDM0NCAzOTIgMzU0Ljc0NCAzOTIgMzY4QzM5MiAzODEuMjU0IDQwMi43NDYgMzkyIDQxNiAzOTJDNDI5LjI1NiAzOTIgNDQwIDM4MS4yNTQgNDQwIDM2OEM0NDAgMzU0Ljc0NCA0MjkuMjU2IDM0NCA0MTYgMzQ0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HardDrive(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H448C483.348 480 512 451.346 512 416V96C512 60.652 483.348 32 448 32ZM480 416C480 433.645 465.645 448 448 448H64C46.355 448 32 433.645 32 416V320C32 302.355 46.355 288 64 288H448C465.645 288 480 302.355 480 320V416ZM480 264.877C470.553 259.379 459.717 256 448 256H64C52.283 256 41.445 259.379 32 264.877V96C32 78.355 46.355 64 64 64H448C465.645 64 480 78.355 480 96V264.877ZM320 344C306.746 344 296 354.744 296 368C296 381.254 306.746 392 320 392C333.256 392 344 381.254 344 368C344 354.744 333.256 344 320 344ZM416 344C402.746 344 392 354.744 392 368C392 381.254 402.746 392 416 392C429.256 392 440 381.254 440 368C440 354.744 429.256 344 416 344Z" />
        </Icon>
    </>
}