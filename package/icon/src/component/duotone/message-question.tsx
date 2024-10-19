
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `message-question` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-question?s=duotone message-question}
 * @preview ![message-question](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCAwSDY0QzI4LjYyNSAwIDAgMjguNjIzIDAgNjMuOTk4VjM1MS45OUMwIDM4Ny4zNjMgMjguNjI1IDQxNS45ODggNjQgNDE1Ljk4OEgxNjBWNDk5Ljk4NkMxNjAgNTA5Ljg1OSAxNzEuMjUgNTE1LjQ4NCAxNzkuMTI1IDUwOS42MDlMMzA0IDQxNS45ODhINDQ4QzQ4My4zNzUgNDE1Ljk4OCA1MTIgMzg3LjM2MyA1MTIgMzUxLjk5VjYzLjk5OEM1MTIgMjguNjIzIDQ4My4zNzUgMCA0NDggMFpNMjQ5Ljk5OSAzMjBDMjM1LjM3NSAzMjAgMjI0IDMwOC42MjUgMjI0IDI5NFMyMzUuMzc1IDI2OCAyNDkuOTk5IDI2OEMyNjQuNjI1IDI2OCAyNzYgMjc5LjM3NSAyNzYgMjk0UzI2NC42MjUgMzIwIDI0OS45OTkgMzIwWk0zMDcuNjY2IDIwMy4zOTFMMjY5LjMzNCAyMjYuNTIxVjIyOC4xNzRDMjY5LjMzNCAyMzguOTEyIDI2MC4xNjYgMjQ4IDI0OS4zMzQgMjQ4QzIzOC41IDI0OCAyMjkuMzM0IDIzOC45MTIgMjI5LjMzNCAyMjguMTc0VjIxNC45NTdDMjI5LjMzNCAyMDguMzQ4IDIzMi42NjYgMjAxLjczOCAyMzkuMzM0IDE5Ny42MDdMMjg2LjgzNCAxNjkuNTIxQzI5Mi42NjYgMTY2LjIxNyAyOTYgMTYwLjQzNCAyOTYgMTUzLjgyNkMyOTYgMTQzLjkxMiAyODcuNjY2IDEzNS42NTIgMjc3LjY2NiAxMzUuNjUySDIzNC4zMzRDMjI0LjMzNCAxMzUuNjUyIDIxNiAxNDMuOTEyIDIxNiAxNTMuODI2QzIxNiAxNjQuNTY0IDIwNi44MzQgMTczLjY1MiAxOTYgMTczLjY1MlMxNzYgMTY0LjU2NCAxNzYgMTUzLjgyNkMxNzYgMTIxLjYwNyAyMDEuODM0IDk2IDIzNC4zMzQgOTZIMjc3LjY2NkMzMTAuMTY2IDk2IDMzNiAxMjEuNjA3IDMzNiAxNTMuODI2QzMzNiAxNzMuNjUyIDMyNS4xNjYgMTkyLjY1MiAzMDcuNjY2IDIwMy4zOTFaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI0OS45OTkgMjY4QzIzNS4zNzUgMjY4IDIyNCAyNzkuMzc1IDIyNCAyOTRTMjM1LjM3NSAzMjAgMjQ5Ljk5OSAzMjBDMjY0LjYyNSAzMjAgMjc2IDMwOC42MjUgMjc2IDI5NFMyNjQuNjI1IDI2OCAyNDkuOTk5IDI2OFpNMjc3LjY2NiA5NkgyMzQuMzM0QzIwMS44MzQgOTYgMTc2IDEyMS42MDcgMTc2IDE1My44MjZDMTc2IDE2NC41NjQgMTg1LjE2NiAxNzMuNjUyIDE5NiAxNzMuNjUyUzIxNiAxNjQuNTY0IDIxNiAxNTMuODI2QzIxNiAxNDMuOTEyIDIyNC4zMzQgMTM1LjY1MiAyMzQuMzM0IDEzNS42NTJIMjc3LjY2NkMyODcuNjY2IDEzNS42NTIgMjk2IDE0My45MTIgMjk2IDE1My44MjZDMjk2IDE2MC40MzQgMjkyLjY2NiAxNjYuMjE3IDI4Ni44MzQgMTY5LjUyMUwyMzkuMzM0IDE5Ny42MDdDMjMyLjY2NiAyMDEuNzM4IDIyOS4zMzQgMjA4LjM0OCAyMjkuMzM0IDIxNC45NTdWMjI4LjE3NEMyMjkuMzM0IDIzOC45MTIgMjM4LjUgMjQ4IDI0OS4zMzQgMjQ4QzI2MC4xNjYgMjQ4IDI2OS4zMzQgMjM4LjkxMiAyNjkuMzM0IDIyOC4xNzRWMjI2LjUyMUwzMDcuNjY2IDIwMy4zOTFDMzI1LjE2NiAxOTIuNjUyIDMzNiAxNzMuNjUyIDMzNiAxNTMuODI2QzMzNiAxMjEuNjA3IDMxMC4xNjYgOTYgMjc3LjY2NiA5NloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function MessageQuestion(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M448 0H64C28.625 0 0 28.623 0 63.998V351.99C0 387.363 28.625 415.988 64 415.988H160V499.986C160 509.859 171.25 515.484 179.125 509.609L304 415.988H448C483.375 415.988 512 387.363 512 351.99V63.998C512 28.623 483.375 0 448 0ZM249.999 320C235.375 320 224 308.625 224 294S235.375 268 249.999 268C264.625 268 276 279.375 276 294S264.625 320 249.999 320ZM307.666 203.391L269.334 226.521V228.174C269.334 238.912 260.166 248 249.334 248C238.5 248 229.334 238.912 229.334 228.174V214.957C229.334 208.348 232.666 201.738 239.334 197.607L286.834 169.521C292.666 166.217 296 160.434 296 153.826C296 143.912 287.666 135.652 277.666 135.652H234.334C224.334 135.652 216 143.912 216 153.826C216 164.564 206.834 173.652 196 173.652S176 164.564 176 153.826C176 121.607 201.834 96 234.334 96H277.666C310.166 96 336 121.607 336 153.826C336 173.652 325.166 192.652 307.666 203.391Z" />
            <path d="M249.999 268C235.375 268 224 279.375 224 294S235.375 320 249.999 320C264.625 320 276 308.625 276 294S264.625 268 249.999 268ZM277.666 96H234.334C201.834 96 176 121.607 176 153.826C176 164.564 185.166 173.652 196 173.652S216 164.564 216 153.826C216 143.912 224.334 135.652 234.334 135.652H277.666C287.666 135.652 296 143.912 296 153.826C296 160.434 292.666 166.217 286.834 169.521L239.334 197.607C232.666 201.738 229.334 208.348 229.334 214.957V228.174C229.334 238.912 238.5 248 249.334 248C260.166 248 269.334 238.912 269.334 228.174V226.521L307.666 203.391C325.166 192.652 336 173.652 336 153.826C336 121.607 310.166 96 277.666 96Z" />
        </Icon>
    </>
}