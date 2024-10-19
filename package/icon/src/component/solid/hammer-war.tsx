
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hammer-war` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hammer-war?s=solid hammer-war}
 * @preview ![hammer-war](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDYuNzUgMzIuNUwyMjQgNTIuODc1VjE2QzIyNCA3LjEyNSAyMTYuODc1IDAgMjA4IDBIMTc2QzE2Ny4xMjUgMCAxNjAgNy4xMjUgMTYwIDE2VjUyLjg3NUwzNy4yNSAzMi41QzE3Ljc1IDI5LjI1IDAgNDQuMjUgMCA2NFYyNTZDMCAyNzUuNzUgMTcuNzUgMjkwLjc1IDM3LjI1IDI4Ny41TDE5MiAyNjEuNzVMMzQ2Ljc1IDI4Ny41QzM2Ni4yNSAyOTAuNzUgMzg0IDI3NS43NSAzODQgMjU2VjY0QzM4NCA0NC4yNSAzNjYuMjUgMjkuMjUgMzQ2Ljc1IDMyLjVaTTE2MCAyOTkuNVY0OTZDMTYwIDUwNC44NzUgMTY3LjEyNSA1MTIgMTc2IDUxMkgyMDhDMjE2Ljg3NSA1MTIgMjI0IDUwNC44NzUgMjI0IDQ5NlYyOTkuNUwxOTIgMjk0LjI1TDE2MCAyOTkuNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HammerWar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M346.75 32.5L224 52.875V16C224 7.125 216.875 0 208 0H176C167.125 0 160 7.125 160 16V52.875L37.25 32.5C17.75 29.25 0 44.25 0 64V256C0 275.75 17.75 290.75 37.25 287.5L192 261.75L346.75 287.5C366.25 290.75 384 275.75 384 256V64C384 44.25 366.25 29.25 346.75 32.5ZM160 299.5V496C160 504.875 167.125 512 176 512H208C216.875 512 224 504.875 224 496V299.5L192 294.25L160 299.5Z" />
        </Icon>
    </>
}