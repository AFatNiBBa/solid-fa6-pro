
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `6` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/6?s=duotone 6}
 * @preview ![6](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE2MCA0ODBDMjQ4LjIxOSA0ODAgMzIwIDQwOC4yMTkgMzIwIDMyMEMzMjAgMjQ1Ljk0NSAyNjkuMTY2IDE4NC4wNjQgMjAwLjc0IDE2NS45MTJMMjQ1LjQ2OSAxMTBDMjYyLjAzMSA4OS4yODEgMjU4LjY4NyA1OS4wOTQgMjM4IDQyLjUzMUMyMjkuMTI1IDM1LjQzOCAyMTguNTMxIDMyIDIwOC4wMzEgMzJDMTkzLjkzOCAzMiAxODAgMzguMTU2IDE3MC41MzEgNTBDMjQuNTM0IDIzMi40ODggMzQuNjEyIDIxOS44MDggMzEuOTk0IDIyMy4zNEMxMS4zMzggMjUxLjIwMSAwIDI4NS4yOTEgMCAzMjBDMCA0MDguMjE5IDcxLjc4MSA0ODAgMTYwIDQ4MFpNMjI0IDMyMEMyMjQgMzU1LjI4MSAxOTUuMjgxIDM4NCAxNjAgMzg0Uzk2IDM1NS4yODEgOTYgMzIwQzk2IDMxMy43NSA5Ni44NzUgMzA3LjU5NCA5OC42MjUgMzAxLjY1NkMxMDYuNjU2IDI3NC43ODEgMTMxLjkwNiAyNTYgMTYwIDI1NkMxOTUuMjgxIDI1NiAyMjQgMjg0LjcxOSAyMjQgMzIwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function $6(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path class={generic.secondary} d="M160 480C248.219 480 320 408.219 320 320C320 245.945 269.166 184.064 200.74 165.912L245.469 110C262.031 89.281 258.687 59.094 238 42.531C229.125 35.438 218.531 32 208.031 32C193.938 32 180 38.156 170.531 50C24.534 232.488 34.612 219.808 31.994 223.34C11.338 251.201 0 285.291 0 320C0 408.219 71.781 480 160 480ZM224 320C224 355.281 195.281 384 160 384S96 355.281 96 320C96 313.75 96.875 307.594 98.625 301.656C106.656 274.781 131.906 256 160 256C195.281 256 224 284.719 224 320Z" />
        </Icon>
    </>
}