
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `comment-check` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-check?s=regular comment-check}
 * @preview ![comment-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDkuNzgxIDE2OC4zNTlMMjMwLjY1NiAyNjAuNzAzTDIwMC45NjkgMjMxLjAxNkMxOTEuNTk0IDIyMS42NDEgMTc2LjQwNiAyMjEuNjQxIDE2Ny4wMzEgMjMxLjAxNlMxNTcuNjU2IDI1NS41NzggMTY3LjAzMSAyNjQuOTUzTDIxNS4wMzEgMzEyLjk1M0MyMTkuNTMxIDMxNy40NTMgMjI1LjY1NiAzMTkuOTg0IDIzMiAzMTkuOTg0QzIzMi4zMTIgMzE5Ljk4NCAyMzIuNjI1IDMxOS45ODQgMjMyLjkwNiAzMTkuOTUzQzIzOS41OTQgMzE5LjcwMyAyNDUuODc1IDMxNi42NzIgMjUwLjIxOSAzMTEuNjA5TDM0Ni4yMTkgMTk5LjYwOUMzNTQuODQ0IDE4OS41NDcgMzUzLjY4NyAxNzQuMzkxIDM0My42MjUgMTY1Ljc2NkMzMzMuNTk0IDE1Ny4xNzIgMzE4LjQzNyAxNTguMjk3IDMwOS43ODEgMTY4LjM1OVpNMjU2LjAzMyAzMkMxMTQuNjc4IDMyIDAuMDY4IDEyNS4xMjUgMC4wNjggMjQwQzAuMDY4IDI4Ny42MjUgMTkuOTQxIDMzMS4yNSA1Mi45MzUgMzY2LjI1QzM4LjA2MiA0MDUuNzUgNy4wNjYgNDM5LjEyNSA2LjU2NiA0MzkuNUMtMC4wNTcgNDQ2LjUgLTEuODA3IDQ1Ni43NSAxLjk0MyA0NjUuNUM1LjgxNiA0NzQuMjUgMTQuNDQxIDQ4MCAyNC4wNjQgNDgwQzg1LjU1NiA0ODAgMTM0LjA1MSA0NTQuMjUgMTYzLjE3MiA0MzMuNzVDMTkyLjA0MyA0NDIuNzUgMjIzLjI4OSA0NDggMjU2LjAzMyA0NDhDMzk3LjM5IDQ0OCA1MTIgMzU0Ljg3NSA1MTIgMjQwUzM5Ny4zOSAzMiAyNTYuMDMzIDMyWk0yNTYuMDMzIDQwMEMyMjkuMjg3IDQwMCAyMDIuOTE2IDM5NS44NzUgMTc3LjY3IDM4Ny44NzVMMTU0LjkyMiAzODAuNzVMMTM1LjQyNiAzOTQuNUMxMjEuMTc4IDQwNC42MjUgMTAxLjU1NSA0MTUuODc1IDc3LjkzMyA0MjMuNUM4NS4zMDYgNDExLjM3NSA5Mi4zMDYgMzk3Ljc1IDk3LjgwNSAzODMuMjVMMTA4LjQyOCAzNTUuMjVMODcuODA2IDMzMy4zNzVDNjkuODA4IDMxNC4xMjUgNDguMDYyIDI4Mi4yNSA0OC4wNjIgMjQwQzQ4LjA2MiAxNTEuNzUgMTQxLjI5OSA4MCAyNTYuMDMzIDgwQzM3MC43NjkgODAgNDY0LjAwNiAxNTEuNzUgNDY0LjAwNiAyNDBTMzcwLjc2OSA0MDAgMjU2LjAzMyA0MDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CommentCheck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M309.781 168.359L230.656 260.703L200.969 231.016C191.594 221.641 176.406 221.641 167.031 231.016S157.656 255.578 167.031 264.953L215.031 312.953C219.531 317.453 225.656 319.984 232 319.984C232.312 319.984 232.625 319.984 232.906 319.953C239.594 319.703 245.875 316.672 250.219 311.609L346.219 199.609C354.844 189.547 353.687 174.391 343.625 165.766C333.594 157.172 318.437 158.297 309.781 168.359ZM256.033 32C114.678 32 0.068 125.125 0.068 240C0.068 287.625 19.941 331.25 52.935 366.25C38.062 405.75 7.066 439.125 6.566 439.5C-0.057 446.5 -1.807 456.75 1.943 465.5C5.816 474.25 14.441 480 24.064 480C85.556 480 134.051 454.25 163.172 433.75C192.043 442.75 223.289 448 256.033 448C397.39 448 512 354.875 512 240S397.39 32 256.033 32ZM256.033 400C229.287 400 202.916 395.875 177.67 387.875L154.922 380.75L135.426 394.5C121.178 404.625 101.555 415.875 77.933 423.5C85.306 411.375 92.306 397.75 97.805 383.25L108.428 355.25L87.806 333.375C69.808 314.125 48.062 282.25 48.062 240C48.062 151.75 141.299 80 256.033 80C370.769 80 464.006 151.75 464.006 240S370.769 400 256.033 400Z" />
        </Icon>
    </>
}