
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `message-smile` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-smile?s=solid message-smile}
 * @preview ![message-smile](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMEg2NEMyOC43NSAwIDAgMjguNzQ4IDAgNjMuOTk0VjM1MS45NzFDMCAzODcuMjE5IDI4Ljc1IDQxNS45NjcgNjQgNDE1Ljk2N0gxNjBWNDk5Ljk1OUMxNjAgNTA5LjcwOSAxNzEuMjUgNTE1LjQ1OSAxNzkuMTI1IDUwOS43MDlMMzA0IDQxNS45NjdINDQ4QzQ4My4yNSA0MTUuOTY3IDUxMiAzODcuMjE5IDUxMiAzNTEuOTcxVjYzLjk5NEM1MTIgMjguNzQ4IDQ4My4yNSAwIDQ0OCAwWk0zMjAuMDI1IDExMkMzMzcuNzczIDExMiAzNTIuMDIxIDEyNi4yNSAzNTIuMDIxIDE0NFMzMzcuNzczIDE3NiAzMjAuMDI1IDE3NlMyODguMDI5IDE2MS43NSAyODguMDI5IDE0NFMzMDIuMjc3IDExMiAzMjAuMDI1IDExMlpNMTkyLjA0MyAxMTJDMjA5Ljc5MSAxMTIgMjI0LjAzOSAxMjYuMjUgMjI0LjAzOSAxNDRTMjA5Ljc5MSAxNzYgMTkyLjA0MyAxNzZTMTYwLjA0NyAxNjEuNzUgMTYwLjA0NyAxNDRTMTc0LjI5NSAxMTIgMTkyLjA0MyAxMTJaTTM2Mi4yNyAyNzEuMjVDMzM1Ljc3MyAzMDIuMjUgMjk3LjE1NCAzMjAgMjU2LjAzMyAzMjBDMjE0LjkxNCAzMjAgMTc2LjI5NSAzMDIuMjUgMTQ5Ljc5OSAyNzEuMjVDMTQxLjI5OSAyNjEuMjUgMTQyLjI5OSAyNDYuMTI1IDE1Mi40MjQgMjM3LjVDMTYyLjQyMiAyMjkgMTc3LjY3IDIzMC4xMjUgMTg2LjI5MyAyNDAuMjVDMjAzLjU0MSAyNjAuMzc1IDIyOC45MTIgMjcyIDI1Ni4wMzMgMjcyQzI4My4xNTYgMjcyIDMwOC41MjcgMjYwLjM3NSAzMjUuNzc1IDI0MC4yNUMzMzQuMzk4IDIzMC4xMjUgMzQ5LjUyMSAyMjguODc1IDM1OS41MiAyMzcuNUMzNjkuNjQ1IDI0Ni4xMjUgMzcwLjc3IDI2MS4yNSAzNjIuMjcgMjcxLjI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MessageSmile(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 0H64C28.75 0 0 28.748 0 63.994V351.971C0 387.219 28.75 415.967 64 415.967H160V499.959C160 509.709 171.25 515.459 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.971V63.994C512 28.748 483.25 0 448 0ZM320.025 112C337.773 112 352.021 126.25 352.021 144S337.773 176 320.025 176S288.029 161.75 288.029 144S302.277 112 320.025 112ZM192.043 112C209.791 112 224.039 126.25 224.039 144S209.791 176 192.043 176S160.047 161.75 160.047 144S174.295 112 192.043 112ZM362.27 271.25C335.773 302.25 297.154 320 256.033 320C214.914 320 176.295 302.25 149.799 271.25C141.299 261.25 142.299 246.125 152.424 237.5C162.422 229 177.67 230.125 186.293 240.25C203.541 260.375 228.912 272 256.033 272C283.156 272 308.527 260.375 325.775 240.25C334.398 230.125 349.521 228.875 359.52 237.5C369.645 246.125 370.77 261.25 362.27 271.25Z" />
        </Icon>
    </>
}