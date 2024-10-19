
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wine-glass-empty` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wine-glass-empty?s=solid wine-glass-empty}
 * @preview ![wine-glass-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMzIuMDE2IDQ2NEgxOTIuMDA2VjM0Ni43NUMyNjAuNTIyIDMzMC44NzUgMzEwLjAzMiAyNjYuODc1IDMwMy40MDcgMTkyLjYyNUwyODcuNTI4IDE0LjVDMjg2Ljc3OCA2LjI1IDI3OS45MDEgMCAyNzEuNzc0IDBINDguMjI3QzQwLjEgMCAzMy4yMjMgNi4yNSAzMi40NzMgMTQuNUwxNi41OTQgMTkyLjYyNUM5Ljk2OSAyNjYuODc1IDU5LjQ3OSAzMzAuODc1IDEyNy45OTUgMzQ2Ljg3NVY0NjRIODcuOTg1QzY1Ljg1NiA0NjQgNDcuOTc3IDQ4MS44NzUgNDcuOTc3IDUwNEM0Ny45NzcgNTA4LjM3NSA1MS42MDIgNTEyIDU1Ljk3OSA1MTJIMjY0LjAyMkMyNjguMzk5IDUxMiAyNzIuMDI0IDUwOC4zNzUgMjcyLjAyNCA1MDRDMjcyLjAyNCA0ODEuODc1IDI1NC4xNDUgNDY0IDIzMi4wMTYgNDY0Wk0xODAuMzkxIDMwMC4xN0MxNjYuNzQ3IDMwMy4zMyAxNTIuNTU1IDMwMy4zMTggMTM4LjkxNSAzMDAuMTMzQzkxLjg4MSAyODkuMTUgNjAuMTA2IDI0NS4yMzIgNjQuMzk1IDE5Ny4xMzVMNzcuNjg4IDQ4SDI0Mi4zMTNMMjU1LjYyIDE5Ny4yNzdDMjU5Ljg5OSAyNDUuMjg5IDIyOC4xMzMgMjg5LjExMSAxODEuMTY3IDI5OS45OUwxODAuMzkxIDMwMC4xN1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WineGlassEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M232.016 464H192.006V346.75C260.522 330.875 310.032 266.875 303.407 192.625L287.528 14.5C286.778 6.25 279.901 0 271.774 0H48.227C40.1 0 33.223 6.25 32.473 14.5L16.594 192.625C9.969 266.875 59.479 330.875 127.995 346.875V464H87.985C65.856 464 47.977 481.875 47.977 504C47.977 508.375 51.602 512 55.979 512H264.022C268.399 512 272.024 508.375 272.024 504C272.024 481.875 254.145 464 232.016 464ZM180.391 300.17C166.747 303.33 152.555 303.318 138.915 300.133C91.881 289.15 60.106 245.232 64.395 197.135L77.688 48H242.313L255.62 197.277C259.899 245.289 228.133 289.111 181.167 299.99L180.391 300.17Z" />
        </Icon>
    </>
}