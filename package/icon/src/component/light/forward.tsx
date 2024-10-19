
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `forward` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/forward?s=light forward}
 * @preview ![forward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODEuODQ0IDIyMC45MzhDMTg4LjYyNSAyMjYuNTMxIDE5OC43MTkgMjI1LjU2MiAyMDQuMzc1IDIxOC43MzRDMjA5Ljk2OSAyMTEuOTA2IDIwOC45NjkgMjAxLjgyOCAyMDIuMTU2IDE5Ni4yMTlMNDkuNTMxIDcwLjg3NUM0NC4wMzEgNjYuMzQ0IDM3LjM3NSA2NCAzMC42MjUgNjRDMTQuNSA2NCAwIDc3LjQ0MSAwIDk2LjAzMVY0MTUuOTY5QzAgNDM0LjU1OSAxNC41IDQ0OCAzMC42MjUgNDQ4QzM3LjM3NSA0NDggNDQuMDMxIDQ0NS42NTYgNDkuNTMxIDQ0MS4xMjVMMjAyLjE1NiAzMTUuNzgxQzIwOC45NjkgMzEwLjE3MiAyMDkuOTY5IDMwMC4wOTQgMjA0LjM3NSAyOTMuMjY2QzE5OC43MTkgMjg2LjQzOCAxODguNjI1IDI4NS40NjkgMTgxLjg0NCAyOTEuMDYyTDMyIDQxNi40MDZWOTUuNTk0TDE4MS44NDQgMjIwLjkzOFpNNTAwLjMxMiAyMzAuODQ0TDMwNS41MzEgNzAuODc1QzMwMC4wMzEgNjYuMzQ0IDI5My4zNzUgNjQgMjg2LjYyNSA2NEMyNzYuMjc3IDY0IDI1NiA3Mi4xMjUgMjU2IDk2LjAzMVY0MTUuOTY5QzI1NiA0MzkuODc1IDI3Ni4yNzcgNDQ4IDI4Ni42MjUgNDQ4QzI5My4zNzUgNDQ4IDMwMC4wMzEgNDQ1LjY1NiAzMDUuNTMxIDQ0MS4xMjVMNTAwLjMxMiAyODEuMTU2QzUwNy43NSAyNzUuMDYyIDUxMiAyNjUuODkxIDUxMiAyNTZTNTA3Ljc1IDIzNi45MzggNTAwLjMxMiAyMzAuODQ0Wk0yODggNDE2LjQwNlY5NS41OTRMNDc5LjQ3OSAyNTZMMjg4IDQxNi40MDZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Forward(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M181.844 220.938C188.625 226.531 198.719 225.562 204.375 218.734C209.969 211.906 208.969 201.828 202.156 196.219L49.531 70.875C44.031 66.344 37.375 64 30.625 64C14.5 64 0 77.441 0 96.031V415.969C0 434.559 14.5 448 30.625 448C37.375 448 44.031 445.656 49.531 441.125L202.156 315.781C208.969 310.172 209.969 300.094 204.375 293.266C198.719 286.438 188.625 285.469 181.844 291.062L32 416.406V95.594L181.844 220.938ZM500.312 230.844L305.531 70.875C300.031 66.344 293.375 64 286.625 64C276.277 64 256 72.125 256 96.031V415.969C256 439.875 276.277 448 286.625 448C293.375 448 300.031 445.656 305.531 441.125L500.312 281.156C507.75 275.062 512 265.891 512 256S507.75 236.938 500.312 230.844ZM288 416.406V95.594L479.479 256L288 416.406Z" />
        </Icon>
    </>
}