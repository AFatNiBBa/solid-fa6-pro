
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ring` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ring?s=solid ring}
 * @preview ![ring](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgNjRDMTEwIDY0IDAgMTI1Ljg3NSAwIDIwOFYzMDYuMTI1QzAgMzg0LjUgMTE0LjYyNSA0NDggMjU2IDQ0OFM1MTIgMzg0LjUgNTEyIDMwNi4xMjVWMjA4QzUxMiAxMjUuODc1IDQwMiA2NCAyNTYgNjRaTTI1NiAyODhDMjAzLjEyNSAyODggMTU1LjEyNSAyNzkuMTI1IDEyMC4zNzUgMjY0LjYyNUMxNTUgMjQ5Ljg3NSAyMDEuNjI1IDI0MCAyNTYgMjQwUzM1NyAyNDkuODc1IDM5MS42MjUgMjY0LjYyNUMzNTYuODc1IDI3OS4xMjUgMzA4Ljg3NSAyODggMjU2IDI4OFpNNDM3LjEyNSAyMzQuMzc1QzM5Mi4xMjUgMjA4LjI1IDMyOC4yNSAxOTIgMjU2IDE5MlMxMTkuODc1IDIwOC4yNSA3NC44NzUgMjM0LjM3NUM2OCAyMjYuMTI1IDY0IDIxNy4yNSA2NCAyMDhDNjQgMTYzLjg3NSAxNTAgMTI4IDI1NiAxMjhDMzYyIDEyOCA0NDggMTYzLjg3NSA0NDggMjA4QzQ0OCAyMTcuMjUgNDQ0IDIyNi4xMjUgNDM3LjEyNSAyMzQuMzc1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Ring(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 64C110 64 0 125.875 0 208V306.125C0 384.5 114.625 448 256 448S512 384.5 512 306.125V208C512 125.875 402 64 256 64ZM256 288C203.125 288 155.125 279.125 120.375 264.625C155 249.875 201.625 240 256 240S357 249.875 391.625 264.625C356.875 279.125 308.875 288 256 288ZM437.125 234.375C392.125 208.25 328.25 192 256 192S119.875 208.25 74.875 234.375C68 226.125 64 217.25 64 208C64 163.875 150 128 256 128C362 128 448 163.875 448 208C448 217.25 444 226.125 437.125 234.375Z" />
        </Icon>
    </>
}