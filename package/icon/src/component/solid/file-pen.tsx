
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-pen` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-pen?s=solid file-pen}
 * @preview ![file-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMTI4VjBINDhDMjEuNDkgMCAwIDIxLjQ5MiAwIDQ4VjQ2NEMwIDQ5MC41MDggMjEuNDkgNTEyIDQ4IDUxMkgzMzZDMzYyLjUxIDUxMiAzODQgNDkwLjUwOCAzODQgNDY0VjE2MEgyNTZDMjM4LjMyNiAxNjAgMjI0IDE0NS42NzIgMjI0IDEyOFpNMTUxLjA4IDQzMi45MjJDMTQ5LjEyNSA0MzQuODc5IDE0Ni42MzcgNDM2LjIwNyAxNDMuOTI4IDQzNi43NUw4OC4zNzkgNDQ3Ljg1OUM4My40ODIgNDQ4Ljg0IDc5LjE2NCA0NDQuNTIgODAuMTQzIDQzOS42MjVMOTEuMjUgMzg0LjA4MkM5MS43OTMgMzgxLjM3MSA5My4xMjUgMzc4Ljg3OSA5NS4wOCAzNzYuOTI2TDE5Mi42ODkgMjc5LjMxM0wyNDguNjk1IDMzNS4zMkwxNTEuMDggNDMyLjkyMlpNMjc5LjM5MSAyMzIuMjA3TDI5NS44MDMgMjQ4LjYyMUMzMDYuNzM4IDI1OS41NTUgMzA2LjczNiAyNzcuMjg1IDI5NS44MDEgMjg4LjIxOUwyNzEuMzIgMzEyLjY5NUwyMTUuMzE0IDI1Ni42ODhMMjM5Ljc5NSAyMzIuMjA3QzI1MC43MjkgMjIxLjI3MyAyNjguNDU3IDIyMS4yNzMgMjc5LjM5MSAyMzIuMjA3Wk0yNTYgMFYxMjhIMzg0TDI1NiAwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FilePen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M224 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V160H256C238.326 160 224 145.672 224 128ZM151.08 432.922C149.125 434.879 146.637 436.207 143.928 436.75L88.379 447.859C83.482 448.84 79.164 444.52 80.143 439.625L91.25 384.082C91.793 381.371 93.125 378.879 95.08 376.926L192.689 279.313L248.695 335.32L151.08 432.922ZM279.391 232.207L295.803 248.621C306.738 259.555 306.736 277.285 295.801 288.219L271.32 312.695L215.314 256.688L239.795 232.207C250.729 221.273 268.457 221.273 279.391 232.207ZM256 0V128H384L256 0Z" />
        </Icon>
    </>
}