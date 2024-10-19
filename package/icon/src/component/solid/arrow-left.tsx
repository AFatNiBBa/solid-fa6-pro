
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-left` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left?s=solid arrow-left}
 * @preview ![arrow-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDguMDA0IDI1NkM0NDguMDA0IDI3OC4wOTQgNDMwLjA5OCAyOTYgNDA4LjAwNCAyOTZIMTMzLjE4TDIyMS4wMDQgMzg4LjQzOEMyMzYuMjIzIDQwNC40NjkgMjM1LjU2NiA0MjkuNzgxIDIxOS41NTEgNDQ1QzIxMS44MTYgNDUyLjM0NCAyMDEuOTEgNDU2IDE5Mi4wMDQgNDU2QzE4MS40MjYgNDU2IDE3MC44NjMgNDUxLjgxMiAxNjMuMDA0IDQ0My41NjJMMTEuMDA0IDI4My41NjJDLTMuNjY4IDI2OC4xMjUgLTMuNjY4IDI0My44NzUgMTEuMDA0IDIyOC40MzhMMTYzLjAwNCA2OC40MzhDMTc4LjIzOCA1Mi40NjkgMjAzLjU4MiA1MS44NDQgMjE5LjU1MSA2N0MyMzUuNTY2IDgyLjIxOSAyMzYuMjIzIDEwNy41MzEgMjIxLjAwNCAxMjMuNTYyTDEzMy4xOCAyMTZINDA4LjAwNEM0MzAuMDk4IDIxNiA0NDguMDA0IDIzMy45MDYgNDQ4LjAwNCAyNTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448.004 256C448.004 278.094 430.098 296 408.004 296H133.18L221.004 388.438C236.223 404.469 235.566 429.781 219.551 445C211.816 452.344 201.91 456 192.004 456C181.426 456 170.863 451.812 163.004 443.562L11.004 283.562C-3.668 268.125 -3.668 243.875 11.004 228.438L163.004 68.438C178.238 52.469 203.582 51.844 219.551 67C235.566 82.219 236.223 107.531 221.004 123.562L133.18 216H408.004C430.098 216 448.004 233.906 448.004 256Z" />
        </Icon>
    </>
}