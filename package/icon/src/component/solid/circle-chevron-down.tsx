
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-chevron-down` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-down?s=solid circle-chevron-down}
 * @preview ![circle-chevron-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQyIDE2IDE2IDEyMy40MTggMTYgMjU2QzE2IDM4OC41NzggMTIzLjQyIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTc4IDQ5NiAyNTZDNDk2IDEyMy40MTggMzg4LjU4IDE2IDI1NiAxNlpNMzkwLjYyNSAyNDYuNjI1TDI3OC42MjUgMzU4LjYyNUMyNzIuMzc1IDM2NC44NzUgMjY0LjE4OCAzNjggMjU2IDM2OFMyMzkuNjI1IDM2NC44NzUgMjMzLjM3NSAzNTguNjI1TDEyMS4zNzUgMjQ2LjYyNUMxMDguODc1IDIzNC4xMjUgMTA4Ljg3NSAyMTMuODc1IDEyMS4zNzUgMjAxLjM3NVMxNTQuMTI1IDE4OC44NzUgMTY2LjYyNSAyMDEuMzc1TDI1NiAyOTAuNzVMMzQ1LjM3NSAyMDEuMzc1QzM1Ny44NzUgMTg4Ljg3NSAzNzguMTI1IDE4OC44NzUgMzkwLjYyNSAyMDEuMzc1UzQwMy4xMjUgMjM0LjEyNSAzOTAuNjI1IDI0Ni42MjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleChevronDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.42 16 16 123.418 16 256C16 388.578 123.42 496 256 496S496 388.578 496 256C496 123.418 388.58 16 256 16ZM390.625 246.625L278.625 358.625C272.375 364.875 264.188 368 256 368S239.625 364.875 233.375 358.625L121.375 246.625C108.875 234.125 108.875 213.875 121.375 201.375S154.125 188.875 166.625 201.375L256 290.75L345.375 201.375C357.875 188.875 378.125 188.875 390.625 201.375S403.125 234.125 390.625 246.625Z" />
        </Icon>
    </>
}