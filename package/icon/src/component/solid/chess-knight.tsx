
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chess-knight` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chess-knight?s=solid chess-knight}
 * @preview ![chess-knight](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOSAyNzIuNUw1OS42MjUgMjkwLjVDNjcuNSAyOTQgNzYuNSAyOTQuMjUgODQuNSAyOTFMOTcuMjUgMjg1Ljg3NUMxMDYuMzc1IDI4Mi4yNSAxMTMuMjUgMjc0Ljc1IDExNiAyNjUuMzc1TDEyNS4yNSAyMzQuNzVDMTI3IDIyNy44NzUgMTMxLjUgMjIyLjI1IDEzNy44NzUgMjE5LjEyNUwxNjAgMjA4VjI1OC4zNzVDMTYwIDI3Ni41IDE0OS42MjUgMjkzLjEyNSAxMzMuMzc1IDMwMS4yNUw3Ni4yNSAzMjkuODc1QzQ5LjEyNSAzNDMuNSAzMiAzNzEuMTI1IDMyIDQwMS41VjQxNkgzNTEuODc1VjIyNEMzNTEuODc1IDExOCAyNjYgMzIgMTYwIDMySDEyQzUuMzc1IDMyIDAgMzcuMzc1IDAgNDRDMCA0Ni42MjUgMC42MjUgNDkuMjUgMS43NSA1MS42MjVMMTYgODBMNyA4OUMyLjUgOTMuNSAwIDk5LjYyNSAwIDEwNlYyNDMuMjVDMCAyNTUuODc1IDcuNSAyNjcuMzc1IDE5IDI3Mi41Wk01MiAxMjhDNjMgMTI4IDcyIDEzNyA3MiAxNDhTNjMgMTY4IDUyIDE2OFMzMiAxNTkgMzIgMTQ4UzQxIDEyOCA1MiAxMjhaTTMzNiA0NDhINDhDMjEuNDkgNDQ4IDAgNDY5LjQ5IDAgNDk2VjQ5NkMwIDUwNC44MzcgNy4xNjMgNTEyIDE2IDUxMkgzNjhDMzc2LjgzNyA1MTIgMzg0IDUwNC44MzcgMzg0IDQ5NlY0OTZDMzg0IDQ2OS40OSAzNjIuNTEgNDQ4IDMzNiA0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ChessKnight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M19 272.5L59.625 290.5C67.5 294 76.5 294.25 84.5 291L97.25 285.875C106.375 282.25 113.25 274.75 116 265.375L125.25 234.75C127 227.875 131.5 222.25 137.875 219.125L160 208V258.375C160 276.5 149.625 293.125 133.375 301.25L76.25 329.875C49.125 343.5 32 371.125 32 401.5V416H351.875V224C351.875 118 266 32 160 32H12C5.375 32 0 37.375 0 44C0 46.625 0.625 49.25 1.75 51.625L16 80L7 89C2.5 93.5 0 99.625 0 106V243.25C0 255.875 7.5 267.375 19 272.5ZM52 128C63 128 72 137 72 148S63 168 52 168S32 159 32 148S41 128 52 128ZM336 448H48C21.49 448 0 469.49 0 496V496C0 504.837 7.163 512 16 512H368C376.837 512 384 504.837 384 496V496C384 469.49 362.51 448 336 448Z" />
        </Icon>
    </>
}