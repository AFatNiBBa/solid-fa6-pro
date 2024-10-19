
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dagger` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dagger?s=duotone dagger}
 * @preview ![dagger](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyOCA0MjguODc1TDE3OC43NSA1MDQuODc1QzE4NSA1MTQuMzc1IDE5OSA1MTQuMzc1IDIwNS4zNzUgNTA0Ljg3NUwyNTYgNDI4Ljg3NVYxOTJIMTI4VjQyOC44NzVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTMzNiAxMjhIMjI0VjE2QzIyNCA3LjEyNSAyMTYuODc1IDAgMjA4IDBIMTc2QzE2Ny4xMjUgMCAxNjAgNy4xMjUgMTYwIDE2VjEyOEg0OEMyMS41IDEyOCAwIDE0OS41IDAgMTc2UzIxLjUgMjI0IDQ4IDIyNEM2OC44NzUgMjI0IDg2LjUgMjEwLjYyNSA5MyAxOTJIMjkxQzI5Ny41IDIxMC42MjUgMzE1LjEyNSAyMjQgMzM2IDIyNEMzNjIuNSAyMjQgMzg0IDIwMi41IDM4NCAxNzZTMzYyLjUgMTI4IDMzNiAxMjhaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Dagger(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M128 428.875L178.75 504.875C185 514.375 199 514.375 205.375 504.875L256 428.875V192H128V428.875Z" />
            <path d="M336 128H224V16C224 7.125 216.875 0 208 0H176C167.125 0 160 7.125 160 16V128H48C21.5 128 0 149.5 0 176S21.5 224 48 224C68.875 224 86.5 210.625 93 192H291C297.5 210.625 315.125 224 336 224C362.5 224 384 202.5 384 176S362.5 128 336 128Z" />
        </Icon>
    </>
}