
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `computer-mouse-scrollwheel` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse-scrollwheel?s=light computer-mouse-scrollwheel}
 * @preview ![computer-mouse-scrollwheel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMEgxNjBDNzEuNjI1IDAgMCA3MS42MjUgMCAxNjBWMzUyQzAgNDQwLjM3NSA3MS42MjUgNTEyIDE2MCA1MTJIMjI0QzMxMi4zNzUgNTEyIDM4NCA0NDAuMzc1IDM4NCAzNTJWMTYwQzM4NCA3MS42MjUgMzEyLjM3NSAwIDIyNCAwWk0zNTIgMzUyQzM1MS44NzUgNDIyLjYyNSAyOTQuNjI1IDQ3OS44NzUgMjI0IDQ4MEgxNjBDODkuMzc1IDQ3OS44NzUgMzIuMTI1IDQyMi42MjUgMzIgMzUyVjE2MEMzMi4xMjUgODkuMzc1IDg5LjM3NSAzMi4xMjUgMTYwIDMySDIyNEMyOTQuNjI1IDMyLjEyNSAzNTEuODc1IDg5LjM3NSAzNTIgMTYwVjM1MlpNMTkyIDk2QzE4My4xNTYgOTYgMTc2IDEwMy4xNTYgMTc2IDExMlYxNzZDMTc2IDE4NC44NDQgMTgzLjE1NiAxOTIgMTkyIDE5MlMyMDggMTg0Ljg0NCAyMDggMTc2VjExMkMyMDggMTAzLjE1NiAyMDAuODQ0IDk2IDE5MiA5NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ComputerMouseScrollwheel(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M224 0H160C71.625 0 0 71.625 0 160V352C0 440.375 71.625 512 160 512H224C312.375 512 384 440.375 384 352V160C384 71.625 312.375 0 224 0ZM352 352C351.875 422.625 294.625 479.875 224 480H160C89.375 479.875 32.125 422.625 32 352V160C32.125 89.375 89.375 32.125 160 32H224C294.625 32.125 351.875 89.375 352 160V352ZM192 96C183.156 96 176 103.156 176 112V176C176 184.844 183.156 192 192 192S208 184.844 208 176V112C208 103.156 200.844 96 192 96Z" />
        </Icon>
    </>
}