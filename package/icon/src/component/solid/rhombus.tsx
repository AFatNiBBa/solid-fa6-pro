
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rhombus` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rhombus?s=solid rhombus}
 * @preview ![rhombus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDIuMTg5IDI0MC4yNjVDNDQ2LjA2MyAyNDQuNzY1IDQ0OCAyNTAuMzU5IDQ0OCAyNTUuOTUzQzQ0OCAyNjEuNTQ3IDQ0Ni4wNjMgMjY3LjE0MSA0NDIuMTg5IDI3MS42NDJMMjQyLjI0NSA1MDMuNjU2QzIzNy40MzQgNTA5LjIxOSAyMzAuNzE3IDUxMiAyMjQgNTEyUzIxMC41NjYgNTA5LjIxOSAyMDUuNzU1IDUwMy42NTZMNS44MTEgMjcxLjY0MkMxLjkzNyAyNjcuMTQxIDAgMjYxLjU0NyAwIDI1NS45NTNDMCAyNTAuMzU5IDEuOTM3IDI0NC43NjUgNS44MTEgMjQwLjI2NUwyMDUuNzU1IDguMjVDMjEwLjU2NiAyLjc1IDIxNy4yODMgMCAyMjQgMFMyMzcuNDM0IDIuNzUgMjQyLjI0NSA4LjI1TDQ0Mi4xODkgMjQwLjI2NVogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function Rhombus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M442.189 240.265C446.063 244.765 448 250.359 448 255.953C448 261.547 446.063 267.141 442.189 271.642L242.245 503.656C237.434 509.219 230.717 512 224 512S210.566 509.219 205.755 503.656L5.811 271.642C1.937 267.141 0 261.547 0 255.953C0 250.359 1.937 244.765 5.811 240.265L205.755 8.25C210.566 2.75 217.283 0 224 0S237.434 2.75 242.245 8.25L442.189 240.265Z " />
        </Icon>
    </>
}