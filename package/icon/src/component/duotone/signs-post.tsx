
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `signs-post` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signs-post?s=duotone signs-post}
 * @preview ![signs-post](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyNCA0OTZDMjI0IDUwNC44MzYgMjMxLjE2NCA1MTIgMjQwIDUxMkgyNzJDMjgwLjgzOCA1MTIgMjg4IDUwNC44MzYgMjg4IDQ5NlYzNTJIMjI0VjQ5NlpNMjcyIDBIMjQwQzIzMS4xNjQgMCAyMjQgNy4xNjQgMjI0IDE2VjMySDI4OFYxNkMyODggNy4xNjQgMjgwLjgzOCAwIDI3MiAwWk0yMjQgMjI0SDI4OFYxNjBIMjI0VjIyNFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTA3LjMxMiA4NC43NUw0NjQuMDYyIDQxLjM3NUM0NTguMDYyIDM1LjM3NSA0NDkuOTM3IDMyIDQ0MS40MzggMzJINTUuOTM4QzQyLjY4OCAzMiAzMS45MzggNDIuNzUgMzEuOTM4IDU2VjEzNkMzMS45MzggMTQ5LjI1IDQyLjY4OCAxNjAgNTUuOTM4IDE2MEg0NDEuNDM4QzQ0OS45MzcgMTYwIDQ1OC4wNjIgMTU2LjYyNSA0NjQuMDYyIDE1MC42MjVMNTA3LjMxMiAxMDcuMzc1QzUxMy41NjIgMTAxIDUxMy41NjIgOTEgNTA3LjMxMiA4NC43NVpNNDU1LjkzNyAyMjRINzAuNTYyQzYyLjA2MiAyMjQgNTMuOTM4IDIyNy4zNzUgNDcuOTM4IDIzMy4zNzVMNC42ODggMjc2Ljc1Qy0xLjU2MyAyODMgLTEuNTYzIDI5My4xMjUgNC42ODggMjk5LjM3NUw0Ny45MzggMzQyLjYyNUM1My45MzggMzQ4LjYyNSA2Mi4wNjIgMzUyIDcwLjU2MiAzNTJINDU1LjkzN0M0NjkuMTg3IDM1MiA0NzkuOTM3IDM0MS4yNSA0NzkuOTM3IDMyOFYyNDhDNDc5LjkzNyAyMzQuNzUgNDY5LjE4NyAyMjQgNDU1LjkzNyAyMjRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SignsPost(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M224 496C224 504.836 231.164 512 240 512H272C280.838 512 288 504.836 288 496V352H224V496ZM272 0H240C231.164 0 224 7.164 224 16V32H288V16C288 7.164 280.838 0 272 0ZM224 224H288V160H224V224Z" />
            <path d="M507.312 84.75L464.062 41.375C458.062 35.375 449.937 32 441.438 32H55.938C42.688 32 31.938 42.75 31.938 56V136C31.938 149.25 42.688 160 55.938 160H441.438C449.937 160 458.062 156.625 464.062 150.625L507.312 107.375C513.562 101 513.562 91 507.312 84.75ZM455.937 224H70.562C62.062 224 53.938 227.375 47.938 233.375L4.688 276.75C-1.563 283 -1.563 293.125 4.688 299.375L47.938 342.625C53.938 348.625 62.062 352 70.562 352H455.937C469.187 352 479.937 341.25 479.937 328V248C479.937 234.75 469.187 224 455.937 224Z" />
        </Icon>
    </>
}