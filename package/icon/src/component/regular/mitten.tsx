
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mitten` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mitten?s=regular mitten}
 * @preview ![mitten](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYuNzIgMTg0Ljc1QzQwMS4yMiAxNzEuNzUgMzgxLjQ3MiAxNjQuNjI1IDM2MS4yMjIgMTY0LjYyNUMzNDYuMzQ5IDE2NC42MjUgMzMyLjA5OSAxNjguMjUgMzE5LjQ3NCAxNzUuMjVMMzA2Ljg1MSAxMjAuNUMyOTAuNDc2IDQ5LjYyNSAyMjguMjMgMCAxNTUuNDg0IDBDMTQzLjczNCAwIDEzMS45ODQgMS4zNzUgMTIwLjM2MSA0QzM2Ljk5IDIzLjI1IC0xNS4yNTggMTA2Ljg3NSAzLjk5MiAxOTAuMzc1TDU0LjYxMyAzODRIMTA0LjIzNkw1MC43MzggMTc5LjYyNUMzNy40OSAxMjEuODc1IDczLjYxMyA2NC4xMjUgMTMxLjIzNCA1MC43NUMxMzkuMjM0IDQ5IDE0Ny4zNTkgNDggMTU1LjQ4NCA0OEMyMDUuNzMgNDggMjQ4LjcyOCA4Mi4yNSAyNjAuMTAzIDEzMS4yNUwyOTIuNzI2IDI3Mi43NUwzMzEuMjI0IDIyNi42MjVDMzM4LjcyNCAyMTcuNzUgMzQ5LjU5NyAyMTIuNjI1IDM2MS4yMjIgMjEyLjYyNUMzNzAuMjIyIDIxMi42MjUgMzc5LjA5NyAyMTUuNzUgMzg1Ljk3IDIyMS42MjVDNDAyLjQ3IDIzNS4yNSA0MDQuNzIgMjU5Ljg3NSAzOTAuOTcgMjc2LjI1TDMwMS4yMjYgMzg0SDM2My43MjJMNDI3Ljg0MyAzMDcuMTI1QzQ1OC41OTMgMjcwLjI1IDQ1My41OTMgMjE1LjM3NSA0MTYuNzIgMTg0Ljc1Wk0zNTEuOTcyIDQxNkg2My45ODhDNDYuMzg4IDQxNiAzMS45OSA0MzAuNCAzMS45OSA0NDhWNDgwQzMxLjk5IDQ5Ny42IDQ2LjM4OCA1MTIgNjMuOTg4IDUxMkgzNTEuOTcyQzM2OS41NzIgNTEyIDM4My45NzIgNDk3LjYgMzgzLjk3MiA0ODBWNDQ4QzM4My45NzIgNDMwLjQgMzY5LjU3MiA0MTYgMzUxLjk3MiA0MTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Mitten(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M416.72 184.75C401.22 171.75 381.472 164.625 361.222 164.625C346.349 164.625 332.099 168.25 319.474 175.25L306.851 120.5C290.476 49.625 228.23 0 155.484 0C143.734 0 131.984 1.375 120.361 4C36.99 23.25 -15.258 106.875 3.992 190.375L54.613 384H104.236L50.738 179.625C37.49 121.875 73.613 64.125 131.234 50.75C139.234 49 147.359 48 155.484 48C205.73 48 248.728 82.25 260.103 131.25L292.726 272.75L331.224 226.625C338.724 217.75 349.597 212.625 361.222 212.625C370.222 212.625 379.097 215.75 385.97 221.625C402.47 235.25 404.72 259.875 390.97 276.25L301.226 384H363.722L427.843 307.125C458.593 270.25 453.593 215.375 416.72 184.75ZM351.972 416H63.988C46.388 416 31.99 430.4 31.99 448V480C31.99 497.6 46.388 512 63.988 512H351.972C369.572 512 383.972 497.6 383.972 480V448C383.972 430.4 369.572 416 351.972 416Z" />
        </Icon>
    </>
}