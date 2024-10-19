
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrows-rotate` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-rotate?s=light arrows-rotate}
 * @preview ![arrows-rotate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgMzJDNDU1LjE1NiAzMiA0NDggMzkuMTU2IDQ0OCA0OFYxNzcuMzA1QzQxNi4xNjIgOTkuNzE5IDM0MC41NjEgNDggMjU2IDQ4QzE1NCA0OCA2Ny43MzQgMTIwLjkwNiA1MC44NzUgMjIxLjM0NEM0OS40MjIgMjMwLjA2MiA1NS4yOTcgMjM4LjMxMiA2NC4wMTYgMjM5Ljc4MUM2NC45MDYgMjM5LjkzOCA2NS43OTcgMjQwIDY2LjY3MiAyNDBDNzQuMzQ0IDI0MCA4MS4xMjUgMjM0LjQ2OSA4Mi40MzggMjI2LjY1NkM5Ni42ODggMTQxLjY4OCAxNjkuNjg4IDgwIDI1NiA4MEMzMjguNDk0IDgwIDM5My4zMyAxMjQuODc5IDQxOS42MjMgMTkySDMwNEMyOTUuMTU2IDE5MiAyODggMTk5LjE1NiAyODggMjA4UzI5NS4xNTYgMjI0IDMwNCAyMjRINDY0QzQ3Mi44NDQgMjI0IDQ4MCAyMTYuODQ0IDQ4MCAyMDhWNDhDNDgwIDM5LjE1NiA0NzIuODQ0IDMyIDQ2NCAzMlpNNDQ3Ljk4NCAyNzIuMjE5QzQzOS4yMTkgMjcwLjY1NiA0MzEuMDE2IDI3Ni42MjUgNDI5LjU2MiAyODUuMzQ0QzQxNS4zMTIgMzcwLjMxMiAzNDIuMzEyIDQzMiAyNTYgNDMyQzE4My41MDYgNDMyIDExOC42NyAzODcuMTIxIDkyLjM3NyAzMjBIMjA4QzIxNi44NDQgMzIwIDIyNCAzMTIuODQ0IDIyNCAzMDRTMjE2Ljg0NCAyODggMjA4IDI4OEg0OEMzOS4xNTYgMjg4IDMyIDI5NS4xNTYgMzIgMzA0VjQ2NEMzMiA0NzIuODQ0IDM5LjE1NiA0ODAgNDggNDgwUzY0IDQ3Mi44NDQgNjQgNDY0VjMzNC42OTVDOTUuODM4IDQxMi4yODEgMTcxLjQzOSA0NjQgMjU2IDQ2NEMzNTggNDY0IDQ0NC4yNjYgMzkxLjA5NCA0NjEuMTI1IDI5MC42NTZDNDYyLjU3OCAyODEuOTM4IDQ1Ni43MDMgMjczLjY4OCA0NDcuOTg0IDI3Mi4yMTlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowsRotate(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 32C455.156 32 448 39.156 448 48V177.305C416.162 99.719 340.561 48 256 48C154 48 67.734 120.906 50.875 221.344C49.422 230.062 55.297 238.312 64.016 239.781C64.906 239.938 65.797 240 66.672 240C74.344 240 81.125 234.469 82.438 226.656C96.688 141.688 169.688 80 256 80C328.494 80 393.33 124.879 419.623 192H304C295.156 192 288 199.156 288 208S295.156 224 304 224H464C472.844 224 480 216.844 480 208V48C480 39.156 472.844 32 464 32ZM447.984 272.219C439.219 270.656 431.016 276.625 429.562 285.344C415.312 370.312 342.312 432 256 432C183.506 432 118.67 387.121 92.377 320H208C216.844 320 224 312.844 224 304S216.844 288 208 288H48C39.156 288 32 295.156 32 304V464C32 472.844 39.156 480 48 480S64 472.844 64 464V334.695C95.838 412.281 171.439 464 256 464C358 464 444.266 391.094 461.125 290.656C462.578 281.938 456.703 273.688 447.984 272.219Z" />
        </Icon>
    </>
}