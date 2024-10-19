
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pen-line` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pen-line?s=thin pen-line}
 * @preview ![pen-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTcuOTM4IDc0LjE1OEw0MzcuODQ4IDE0LjA2MkM0MjguNDczIDQuNjg4IDQxNi4xNzYgMCA0MDMuODgxIDBDMzkxLjU4NCAwIDM3OS4yODcgNC42ODggMzY5LjkxMiAxNC4wNjJMMzEuMDM3IDM1Mi45NTVDMjguODA1IDM1NS4xODkgMjcuMjgyIDM1OC4wMzMgMjYuNjY0IDM2MS4xMzFMMC4zMjEgNDkyLjg1MkMtMS43MDcgNTAyLjk2NyA2LjE2MSA1MTIgMTUuOTUgNTEyQzE2Ljk5NiA1MTIgMTguMDY3IDUxMS44OTYgMTkuMTQ5IDUxMS42OEwxNTAuODU4IDQ4NS4zMzRDMTUzLjk1NSA0ODQuNzE1IDE1Ni43OTcgNDgzLjE5MyAxNTkuMDMyIDQ4MC45NjFMNDk3LjkzOCAxNDIuMDg0QzUxNi42ODggMTIzLjMxNiA1MTYuNjg4IDkyLjkxIDQ5Ny45MzggNzQuMTU4Wk0xNDcuNzIxIDQ2OS42NDVMMTYuMDA4IDQ5NS45OUw0Mi4zNSAzNjQuMjdMMzA5LjY0NyA5Ni45NTdMNDE1LjAzNiAyMDIuMzU0TDE0Ny43MjEgNDY5LjY0NVpNNDg2LjYyNyAxMzAuNzY4TDQyNi4zNDggMTkxLjA0MUwzMjAuOTYzIDg1LjY0NUwzODEuMjI1IDI1LjM3NUMzODcuMjcyIDE5LjMzIDM5NS4zMTkgMTYgNDAzLjg4MSAxNkM0MTIuNDQyIDE2IDQyMC40ODkgMTkuMzMgNDI2LjUzNiAyNS4zNzVMNDg2LjYyNyA4NS40NzFDNDk5LjEwNiA5Ny45NTcgNDk5LjEwNiAxMTguMjc3IDQ4Ni42MjcgMTMwLjc2OFpNNTY4IDQ5NkgyMzJDMjI3LjU4MiA0OTYgMjI0IDQ5OS41OCAyMjQgNTA0QzIyNCA1MDguNDE4IDIyNy41ODIgNTEyIDIzMiA1MTJINTY4QzU3Mi40MTggNTEyIDU3NiA1MDguNDE4IDU3NiA1MDRDNTc2IDQ5OS41OCA1NzIuNDE4IDQ5NiA1NjggNDk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PenLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M497.938 74.158L437.848 14.062C428.473 4.688 416.176 0 403.881 0C391.584 0 379.287 4.688 369.912 14.062L31.037 352.955C28.805 355.189 27.282 358.033 26.664 361.131L0.321 492.852C-1.707 502.967 6.161 512 15.95 512C16.996 512 18.067 511.896 19.149 511.68L150.858 485.334C153.955 484.715 156.797 483.193 159.032 480.961L497.938 142.084C516.688 123.316 516.688 92.91 497.938 74.158ZM147.721 469.645L16.008 495.99L42.35 364.27L309.647 96.957L415.036 202.354L147.721 469.645ZM486.627 130.768L426.348 191.041L320.963 85.645L381.225 25.375C387.272 19.33 395.319 16 403.881 16C412.442 16 420.489 19.33 426.536 25.375L486.627 85.471C499.106 97.957 499.106 118.277 486.627 130.768ZM568 496H232C227.582 496 224 499.58 224 504C224 508.418 227.582 512 232 512H568C572.418 512 576 508.418 576 504C576 499.58 572.418 496 568 496Z" />
        </Icon>
    </>
}