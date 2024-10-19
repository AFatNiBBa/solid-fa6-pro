
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `overline` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/overline?s=light overline}
 * @preview ![overline](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIgMEgxNkM3LjE5OSAwIDAgNy4xOTkgMCAxNkMwIDI0Ljc5OSA3LjE5OSAzMiAxNiAzMkg0MzJDNDQwLjgwMSAzMiA0NDggMjQuNzk5IDQ0OCAxNkM0NDggNy4xOTkgNDQwLjgwMSAwIDQzMiAwWk0yMjQgOTZDMTM1LjYyNSA5NiA2NCAxNjcuNjI1IDY0IDI1NlYzNTJDNjQgNDQwLjM3NSAxMzUuNjI1IDUxMiAyMjQgNTEyUzM4NCA0NDAuMzc1IDM4NCAzNTJWMjU2QzM4NCAxNjcuNjI1IDMxMi4zNzUgOTYgMjI0IDk2Wk0zNTIgMzUyQzM1MiA0MjIuNzUgMjk0Ljc1IDQ4MCAyMjQgNDgwUzk2IDQyMi43NSA5NiAzNTJWMjU2Qzk2IDE4NS4yNSAxNTMuMjUgMTI4IDIyNCAxMjhTMzUyIDE4NS4yNSAzNTIgMjU2VjM1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Overline(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M432 0H16C7.199 0 0 7.199 0 16C0 24.799 7.199 32 16 32H432C440.801 32 448 24.799 448 16C448 7.199 440.801 0 432 0ZM224 96C135.625 96 64 167.625 64 256V352C64 440.375 135.625 512 224 512S384 440.375 384 352V256C384 167.625 312.375 96 224 96ZM352 352C352 422.75 294.75 480 224 480S96 422.75 96 352V256C96 185.25 153.25 128 224 128S352 185.25 352 256V352Z" />
        </Icon>
    </>
}