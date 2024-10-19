
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-tag` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-tag?s=regular user-tag}
 * @preview ![user-tag](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OC43MDUgNDY0QzU1LjM3OSA0MDEuMTMzIDEwOC43MjcgMzUyIDE3My4zMzYgMzUySDI3NC42NjRDMzA0LjQwNiAzNTIgMzMxLjQ4NiAzNjIuNzUgMzUzLjAwMiAzODAuMTIxQzM1Mi40MzQgMzc1Ljg2MSAzNTEuNzUgMzcxLjYyMyAzNTEuNzUgMzY3LjI1VjMyMi4yNTJDMzI4LjUwOCAzMTAuNjc2IDMwMi4zOTUgMzA0IDI3NC42NjQgMzA0SDE3My4zMzZDNzcuNjA5IDMwNCAwIDM4MS42MDIgMCA0NzcuMzMyQzAgNDk2LjQ3NyAxNS41MjMgNTEyIDM0LjY2NCA1MTJINDEzLjMzNkM0MjUuMTk3IDUxMiA0MzUuMTU0IDUwNS42NiA0NDEuNDA0IDQ5Ni41NjhMNDA4Ljc5MSA0NjRINDguNzA1Wk0yMjQgMjU2QzI5NC42OTUgMjU2IDM1MiAxOTguNjkxIDM1MiAxMjhTMjk0LjY5NSAwIDIyNCAwQzE1My4zMTIgMCA5NiA1Ny4zMDkgOTYgMTI4UzE1My4zMTIgMjU2IDIyNCAyNTZaTTIyNCA0OEMyNjguMTEzIDQ4IDMwNCA4My44ODcgMzA0IDEyOEMzMDQgMTcyLjExMSAyNjguMTEzIDIwOCAyMjQgMjA4QzE3OS44ODkgMjA4IDE0NCAxNzIuMTExIDE0NCAxMjhDMTQ0IDgzLjg4NyAxNzkuODg5IDQ4IDIyNCA0OFpNNjMwLjY0MSAzNjQuODc1TDU0MC4yNiAyNzQuNzVDNTI4LjI1OCAyNjIuNzUgNTEyLjAwOCAyNTYgNDk1LjAwNiAyNTZINDE1Ljc1MkMzOTggMjU2IDM4My43NSAyNzAuMjUgMzgzLjc1IDI4OFYzNjcuMjVDMzgzLjc1IDM4NC4yNSAzOTAuMzc1IDQwMC4zNzUgNDAyLjM3NyA0MTIuMzc1TDQ5Mi43NTYgNTAyLjYyNUM1MDUuMjU4IDUxNS4xMjUgNTI1LjUwOCA1MTUuMTI1IDUzOC4wMSA1MDIuNjI1TDYzMC41MTYgNDEwLjEyNUM2NDMuMTQxIDM5Ny42MjUgNjQzLjE0MSAzNzcuMzc1IDYzMC42NDEgMzY0Ljg3NVpNNDQ3Ljc1NCAzNDMuODc1QzQzNC41MDQgMzQzLjg3NSA0MjMuNzUyIDMzMy4yNSA0MjMuNzUyIDMxOS44NzVDNDIzLjc1MiAzMDYuNjI1IDQzNC41MDQgMjk1Ljg3NSA0NDcuNzU0IDI5NS44NzVDNDYxLjEyOSAyOTUuODc1IDQ3MS43NTYgMzA2LjYyNSA0NzEuNzU2IDMxOS44NzVTNDYxLjEyOSAzNDMuODc1IDQ0Ny43NTQgMzQzLjg3NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UserTag(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M48.705 464C55.379 401.133 108.727 352 173.336 352H274.664C304.406 352 331.486 362.75 353.002 380.121C352.434 375.861 351.75 371.623 351.75 367.25V322.252C328.508 310.676 302.395 304 274.664 304H173.336C77.609 304 0 381.602 0 477.332C0 496.477 15.523 512 34.664 512H413.336C425.197 512 435.154 505.66 441.404 496.568L408.791 464H48.705ZM224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM224 48C268.113 48 304 83.887 304 128C304 172.111 268.113 208 224 208C179.889 208 144 172.111 144 128C144 83.887 179.889 48 224 48ZM630.641 364.875L540.26 274.75C528.258 262.75 512.008 256 495.006 256H415.752C398 256 383.75 270.25 383.75 288V367.25C383.75 384.25 390.375 400.375 402.377 412.375L492.756 502.625C505.258 515.125 525.508 515.125 538.01 502.625L630.516 410.125C643.141 397.625 643.141 377.375 630.641 364.875ZM447.754 343.875C434.504 343.875 423.752 333.25 423.752 319.875C423.752 306.625 434.504 295.875 447.754 295.875C461.129 295.875 471.756 306.625 471.756 319.875S461.129 343.875 447.754 343.875Z" />
        </Icon>
    </>
}