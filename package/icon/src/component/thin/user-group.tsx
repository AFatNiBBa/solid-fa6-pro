
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-group` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-group?s=thin user-group}
 * @preview ![user-group](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzQuNjY0IDMwNEgxNzMuMzM2Qzc3LjYwOSAzMDQgMCAzODEuNjAyIDAgNDc3LjMzMkMwIDQ5Ni40NzcgMTUuNTIzIDUxMiAzNC42NjQgNTEySDQxMy4zMzZDNDMyLjQ3NyA1MTIgNDQ4IDQ5Ni40NzcgNDQ4IDQ3Ny4zMzJDNDQ4IDM4MS42MDIgMzcwLjM5OCAzMDQgMjc0LjY2NCAzMDRaTTQxMy4zMzYgNDk2SDM0LjY2NEMyNC4zNzMgNDk2IDE2IDQ4Ny42MjUgMTYgNDc3LjMzMkMxNiAzOTAuNTc4IDg2LjU4IDMyMCAxNzMuMzM2IDMyMEgyNzQuNjY0QzM2MS40MiAzMjAgNDMyIDM5MC41NzggNDMyIDQ3Ny4zMzJDNDMyIDQ4Ny42MjUgNDIzLjYyNyA0OTYgNDEzLjMzNiA0OTZaTTIyNCAyNTZDMjk0LjY5NSAyNTYgMzUyIDE5OC42OTEgMzUyIDEyOFMyOTQuNjk1IDAgMjI0IDBDMTUzLjMxMiAwIDk2IDU3LjMwOSA5NiAxMjhTMTUzLjMxMiAyNTYgMjI0IDI1NlpNMjI0IDE2QzI4NS43NTggMTYgMzM2IDY2LjI0MiAzMzYgMTI4UzI4NS43NTggMjQwIDIyNCAyNDBTMTEyIDE4OS43NTggMTEyIDEyOFMxNjIuMjQyIDE2IDIyNCAxNlpNNDMyIDI1NkM0OTYuNjE1IDI1NiA1NDguNDQ1IDIwMS4yODkgNTQzLjY5NyAxMzUuNjY0QzU0MC4yNTIgODguMDIzIDUwNS41MjkgNDcuNTU1IDQ1OS4yOTMgMzUuNTQ3QzQzMi42NjggMjguNjI5IDQwNy45NzcgMzIuMzYzIDM4Ni41NDcgNDIuMTQxQzM4Mi42MzMgNDMuOTMgMzgwLjk4IDQ4LjUgMzgyLjg1MiA1Mi4zNzFDMzgyLjk1NyA1Mi41OSAzODMuMDYzIDUyLjgxMiAzODMuMTY4IDUzLjAzMUMzODQuOTI4IDU2LjcxNSAzODkuMjE5IDU4LjQ3NyAzOTIuOTMgNTYuNzczQzQwNy42NSA1MC4wMDQgNDI0LjE3NiA0Ni41OTQgNDQxLjg4OSA0OC41NDdDNDkwLjAwNCA1My44NDQgNTI3LjgzNCA5NS4yNTggNTI4IDE0My42NjRDNTI4LjE4IDE5Ni43NSA0ODUuMDQ3IDI0MCA0MzIgMjQwQzQxMi42ODIgMjQwIDM5NC44NjUgMjM0LjAzOSAzNzkuODM2IDIyNC4xMjVDMzc2LjQ2NyAyMjEuOTA2IDM3Mi4wMDIgMjIzLjA1MSAzNjkuNzA1IDIyNi4zNjdDMzY5LjU2MSAyMjYuNTc4IDM2OS40MTYgMjI2Ljc4NSAzNjkuMjcgMjI2Ljk5MkMzNjYuNzk3IDIzMC41MzUgMzY3LjczNCAyMzUuMzM2IDM3MS4zNSAyMzcuNzAzQzM4OC44MzQgMjQ5LjE0MSA0MDkuNTQzIDI1NiA0MzIgMjU2Wk00NzkuOTk4IDMyMEg0NDhDNDQzLjU4MiAzMjAgNDQwIDMyMy41ODIgNDQwIDMyOFM0NDMuNTgyIDMzNiA0NDggMzM2SDQ3OS45OThDNTU5LjQ5NiAzMzYgNjI0LjE1NiA0MDAuNzU0IDYyNCA0ODAuMjg5QzYyMy45ODIgNDg4Ljk5NiA2MTYuNzExIDQ5NiA2MDguMDAyIDQ5Nkg0OTZDNDkxLjU4MiA0OTYgNDg4IDQ5OS41ODIgNDg4IDUwNFM0OTEuNTgyIDUxMiA0OTYgNTEySDYwOC4wMDJDNjI1LjY3OCA1MTIgNjQwLjAxNiA0OTcuNTIzIDY0MCA0NzkuODQ4QzYzOS45MTggMzkxLjU1MSA1NjguMzE2IDMyMCA0NzkuOTk4IDMyMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UserGroup(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M274.664 304H173.336C77.609 304 0 381.602 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 381.602 370.398 304 274.664 304ZM413.336 496H34.664C24.373 496 16 487.625 16 477.332C16 390.578 86.58 320 173.336 320H274.664C361.42 320 432 390.578 432 477.332C432 487.625 423.627 496 413.336 496ZM224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM224 16C285.758 16 336 66.242 336 128S285.758 240 224 240S112 189.758 112 128S162.242 16 224 16ZM432 256C496.615 256 548.445 201.289 543.697 135.664C540.252 88.023 505.529 47.555 459.293 35.547C432.668 28.629 407.977 32.363 386.547 42.141C382.633 43.93 380.98 48.5 382.852 52.371C382.957 52.59 383.063 52.812 383.168 53.031C384.928 56.715 389.219 58.477 392.93 56.773C407.65 50.004 424.176 46.594 441.889 48.547C490.004 53.844 527.834 95.258 528 143.664C528.18 196.75 485.047 240 432 240C412.682 240 394.865 234.039 379.836 224.125C376.467 221.906 372.002 223.051 369.705 226.367C369.561 226.578 369.416 226.785 369.27 226.992C366.797 230.535 367.734 235.336 371.35 237.703C388.834 249.141 409.543 256 432 256ZM479.998 320H448C443.582 320 440 323.582 440 328S443.582 336 448 336H479.998C559.496 336 624.156 400.754 624 480.289C623.982 488.996 616.711 496 608.002 496H496C491.582 496 488 499.582 488 504S491.582 512 496 512H608.002C625.678 512 640.016 497.523 640 479.848C639.918 391.551 568.316 320 479.998 320Z" />
        </Icon>
    </>
}