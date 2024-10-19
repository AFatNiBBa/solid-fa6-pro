
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `clock-rotate-left` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clock-rotate-left?s=regular clock-rotate-left}
 * @preview ![clock-rotate-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMzJDMTc2LjE1MiAzMiAxMDMuNzM4IDc1LjU2NiA2NCAxNDIuMDk0VjU2QzY0IDQyLjc1IDUzLjI1IDMyIDQwIDMyUzE2IDQyLjc1IDE2IDU2VjIwMEMxNiAyMTMuMjUgMjYuNzUgMjI0IDQwIDIyNEgxNjhDMTgxLjI1IDIyNCAxOTIgMjEzLjI1IDE5MiAyMDBTMTgxLjI1IDE3NiAxNjggMTc2SDk5LjUzN0MxMjkuMjI1IDExOC4yODEgMTg5LjQ1NSA4MCAyNTYgODBDMzUzLjAzMSA4MCA0MzIgMTU4Ljk2OSA0MzIgMjU2UzM1My4wMzEgNDMyIDI1NiA0MzJDMjE0LjkwNiA0MzIgMTc0LjkwNiA0MTcuNTMxIDE0My4zNzUgMzkxLjI1QzEzMy4yMTkgMzgyLjc1IDExOC4wNjMgMzg0LjA5NCAxMDkuNTYzIDM5NC4zMTJDMTAxLjA2MyA0MDQuNSAxMDIuNDM4IDQxOS42MjUgMTEyLjYyNSA0MjguMTI1QzE1Mi43ODEgNDYxLjU2MiAyMDMuNjg4IDQ4MCAyNTYgNDgwQzM3OS41IDQ4MCA0ODAgMzc5LjUgNDgwIDI1NlMzNzkuNSAzMiAyNTYgMzJaTTI1NiAxMjhDMjQyLjc1IDEyOCAyMzIgMTM4Ljc1IDIzMiAxNTJWMjcyQzIzMiAyNzkuNzUgMjM1Ljc1IDI4Ny4wMzEgMjQyLjA0NyAyOTEuNTMxTDI5OC4wNDcgMzMxLjUzMUMzMDIuMjgxIDMzNC41NjIgMzA3LjE1NiAzMzYgMzExLjk4NCAzMzZDMzE5LjQ2OSAzMzYgMzI2Ljg0NCAzMzIuNSAzMzEuNTMxIDMyNS45MzhDMzM5LjIzNCAzMTUuMTU2IDMzNi43MzQgMzAwLjE4OCAzMjUuOTUzIDI5Mi40NjlMMjgwIDI1OS42NTZWMTUyQzI4MCAxMzguNzUgMjY5LjI1IDEyOCAyNTYgMTI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ClockRotateLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 32C176.152 32 103.738 75.566 64 142.094V56C64 42.75 53.25 32 40 32S16 42.75 16 56V200C16 213.25 26.75 224 40 224H168C181.25 224 192 213.25 192 200S181.25 176 168 176H99.537C129.225 118.281 189.455 80 256 80C353.031 80 432 158.969 432 256S353.031 432 256 432C214.906 432 174.906 417.531 143.375 391.25C133.219 382.75 118.063 384.094 109.563 394.312C101.063 404.5 102.438 419.625 112.625 428.125C152.781 461.562 203.688 480 256 480C379.5 480 480 379.5 480 256S379.5 32 256 32ZM256 128C242.75 128 232 138.75 232 152V272C232 279.75 235.75 287.031 242.047 291.531L298.047 331.531C302.281 334.562 307.156 336 311.984 336C319.469 336 326.844 332.5 331.531 325.938C339.234 315.156 336.734 300.188 325.953 292.469L280 259.656V152C280 138.75 269.25 128 256 128Z" />
        </Icon>
    </>
}