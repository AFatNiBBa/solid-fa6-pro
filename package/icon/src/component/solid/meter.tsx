
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `meter` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/meter?s=solid meter}
 * @preview ![meter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTE5MiAyMDhDMTkyIDIxNi44MzYgMTg0LjgzOCAyMjQgMTc2IDIyNEgxNDRDMTM1LjE2NCAyMjQgMTI4IDIxNi44MzYgMTI4IDIwOFYxNDRDMTI4IDEzNS4xNjIgMTM1LjE2NCAxMjggMTQ0IDEyOEgxNzZDMTg0LjgzOCAxMjggMTkyIDEzNS4xNjIgMTkyIDE0NFYyMDhaTTI4OCAyMDhDMjg4IDIxNi44MzYgMjgwLjgzNiAyMjQgMjcyIDIyNEgyNDBDMjMxLjE2NCAyMjQgMjI0IDIxNi44MzYgMjI0IDIwOFYxNDRDMjI0IDEzNS4xNjIgMjMxLjE2NCAxMjggMjQwIDEyOEgyNzJDMjgwLjgzNiAxMjggMjg4IDEzNS4xNjIgMjg4IDE0NFYyMDhaTTM4NCAyMDhDMzg0IDIxNi44MzYgMzc2LjgzNiAyMjQgMzY4IDIyNEgzMzZDMzI3LjE2NCAyMjQgMzIwIDIxNi44MzYgMzIwIDIwOFYxNDRDMzIwIDEzNS4xNjIgMzI3LjE2NCAxMjggMzM2IDEyOEgzNjhDMzc2LjgzNiAxMjggMzg0IDEzNS4xNjIgMzg0IDE0NFYyMDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Meter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM192 208C192 216.836 184.838 224 176 224H144C135.164 224 128 216.836 128 208V144C128 135.162 135.164 128 144 128H176C184.838 128 192 135.162 192 144V208ZM288 208C288 216.836 280.836 224 272 224H240C231.164 224 224 216.836 224 208V144C224 135.162 231.164 128 240 128H272C280.836 128 288 135.162 288 144V208ZM384 208C384 216.836 376.836 224 368 224H336C327.164 224 320 216.836 320 208V144C320 135.162 327.164 128 336 128H368C376.836 128 384 135.162 384 144V208Z" />
        </Icon>
    </>
}