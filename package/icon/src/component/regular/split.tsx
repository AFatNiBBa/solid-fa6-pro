
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `split` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/split?s=regular split}
 * @preview ![split](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDQuOTY5IDM2MEM1MTQuMzQ0IDM2OS4zNzUgNTE0LjM0NCAzODQuNTYyIDUwNC45NjkgMzkzLjkzOEw0MjQuOTY5IDQ3My45MzhDNDIwLjI4MSA0NzguNjI1IDQxNC4xNTYgNDgwLjk2OSA0MDggNDgwLjk2OVMzOTUuNzE5IDQ3OC42MjUgMzkxLjAzMSA0NzMuOTM3QzM4MS42NTYgNDY0LjU2MiAzODEuNjU2IDQ0OS4zNzUgMzkxLjAzMSA0NDBMNDMwLjA2MiA0MDAuOTY5SDMyMEMzMTMuNjI1IDQwMC45NjkgMzA3LjUzMSAzOTguNDM3IDMwMy4wMzEgMzkzLjkzN0wxODIuMDYyIDI3Mi45NjlIMjRDMTAuNzUgMjcyLjk2OSAwIDI2Mi4yMTkgMCAyNDguOTY5UzEwLjc1IDIyNC45NjkgMjQgMjI0Ljk2OUgxODIuMDYyTDMwMy4wMzEgMTA0QzMwNy41MzEgOTkuNSAzMTMuNjI1IDk2Ljk2OSAzMjAgOTYuOTY5SDQzMC4wNjJMMzkxLjAzMSA1Ny45MzdDMzgxLjY1NiA0OC41NjIgMzgxLjY1NiAzMy4zNzUgMzkxLjAzMSAyNFM0MTUuNTk0IDE0LjYyNSA0MjQuOTY5IDI0TDUwNC45NjkgMTA0QzUxNC4zNDQgMTEzLjM3NSA1MTQuMzQ0IDEyOC41NjIgNTA0Ljk2OSAxMzcuOTM3TDQyNC45NjkgMjE3LjkzN0M0MjAuMjgxIDIyMi42MjUgNDE0LjE1NiAyMjQuOTY5IDQwOCAyMjQuOTY5UzM5NS43MTkgMjIyLjYyNSAzOTEuMDMxIDIxNy45MzdDMzgxLjY1NiAyMDguNTYyIDM4MS42NTYgMTkzLjM3NSAzOTEuMDMxIDE4NEw0MzAuMDYyIDE0NC45NjlIMzI5LjkzOEwyMjUuOTM4IDI0OC45NjlMMzI5LjkzOCAzNTIuOTY5SDQzMC4wNjJMMzkxLjAzMSAzMTMuOTM3QzM4MS42NTYgMzA0LjU2MiAzODEuNjU2IDI4OS4zNzUgMzkxLjAzMSAyODBTNDE1LjU5NCAyNzAuNjI1IDQyNC45NjkgMjgwTDUwNC45NjkgMzYwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Split(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M504.969 360C514.344 369.375 514.344 384.562 504.969 393.938L424.969 473.938C420.281 478.625 414.156 480.969 408 480.969S395.719 478.625 391.031 473.937C381.656 464.562 381.656 449.375 391.031 440L430.062 400.969H320C313.625 400.969 307.531 398.437 303.031 393.937L182.062 272.969H24C10.75 272.969 0 262.219 0 248.969S10.75 224.969 24 224.969H182.062L303.031 104C307.531 99.5 313.625 96.969 320 96.969H430.062L391.031 57.937C381.656 48.562 381.656 33.375 391.031 24S415.594 14.625 424.969 24L504.969 104C514.344 113.375 514.344 128.562 504.969 137.937L424.969 217.937C420.281 222.625 414.156 224.969 408 224.969S395.719 222.625 391.031 217.937C381.656 208.562 381.656 193.375 391.031 184L430.062 144.969H329.938L225.938 248.969L329.938 352.969H430.062L391.031 313.937C381.656 304.562 381.656 289.375 391.031 280S415.594 270.625 424.969 280L504.969 360Z" />
        </Icon>
    </>
}