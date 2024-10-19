
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sword` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sword?s=regular sword}
 * @preview ![sword](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTEuODM5IDE4LjI1QzUxMy4yMTQgOC41IDUwNS41OSAwIDQ5NS45NjYgMEM0OTUuMjE2IDAgNDk0LjQ2NiAwIDQ5My43MTYgMC4xMjVMMzk5Ljk3OSAxNkwxNDguNTEyIDI2Ny41TDEwOS43NjcgMjI4LjYyNUMxMDMuNTE4IDIyMi41IDkzLjM5NCAyMjIuNSA4Ny4xNDUgMjI4LjYyNUw2OC4zOTcgMjQ3LjM3NUM2My4wMjMgMjUyLjc1IDYyLjI3MyAyNjEuMjUgNjYuNTIzIDI2Ny41TDExOS42NDEgMzQ3LjI1TDY2LjM5OCA0MDAuNUwzNy4yNzYgMzg2QzM2LjAyNyAzODUuMzc1IDI4LjAyOCAzODEuNzUgMjEuMjc4IDM4OC41TDQuMDMxIDQwNS43NUMtMS4zNDQgNDExLjEyNSAtMS4zNDQgNDE5Ljg3NSA0LjAzMSA0MjUuMzc1TDg2LjY0NSA1MDhDODkuMzk1IDUxMC42MjUgOTIuODk0IDUxMiA5Ni41MTkgNTEyQzEwMC4wMTggNTEyIDEwMy41MTggNTEwLjYyNSAxMDYuMjY3IDUwOEwxMjMuNTE1IDQ5MC43NUMxMjcuNjM5IDQ4Ni41IDEyOC43NjQgNDgwLjEyNSAxMjYuMDE1IDQ3NC43NUwxMTEuNTE3IDQ0NS42MjVMMTY0Ljc2IDM5Mi4zNzVMMjQ0LjQ5OSA0NDUuNUMyNTAuODczIDQ0OS43NSAyNTkuMjQ3IDQ0OSAyNjQuNjIyIDQ0My42MjVMMjgzLjM2OSA0MjQuODc1QzI4OS40OTMgNDE4LjYyNSAyODkuNDkzIDQwOC41IDI4My4zNjkgNDAyLjI1TDI0NC40OTkgMzYzLjVMNDk1Ljk2NiAxMTJMNTExLjgzOSAxOC4yNVpNNDUxLjIyMiA4OC44NzVMMjEwLjYyOSAzMjkuNUwxODIuNTA3IDMwMS4zNzVMNDIzLjEwMSA2MC43NUw0NTYuOTcxIDU1TDQ1MS4yMjIgODguODc1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Sword(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M511.839 18.25C513.214 8.5 505.59 0 495.966 0C495.216 0 494.466 0 493.716 0.125L399.979 16L148.512 267.5L109.767 228.625C103.518 222.5 93.394 222.5 87.145 228.625L68.397 247.375C63.023 252.75 62.273 261.25 66.523 267.5L119.641 347.25L66.398 400.5L37.276 386C36.027 385.375 28.028 381.75 21.278 388.5L4.031 405.75C-1.344 411.125 -1.344 419.875 4.031 425.375L86.645 508C89.395 510.625 92.894 512 96.519 512C100.018 512 103.518 510.625 106.267 508L123.515 490.75C127.639 486.5 128.764 480.125 126.015 474.75L111.517 445.625L164.76 392.375L244.499 445.5C250.873 449.75 259.247 449 264.622 443.625L283.369 424.875C289.493 418.625 289.493 408.5 283.369 402.25L244.499 363.5L495.966 112L511.839 18.25ZM451.222 88.875L210.629 329.5L182.507 301.375L423.101 60.75L456.971 55L451.222 88.875Z" />
        </Icon>
    </>
}