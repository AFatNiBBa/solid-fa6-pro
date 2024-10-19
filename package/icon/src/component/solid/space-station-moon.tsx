
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `space-station-moon` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/space-station-moon?s=solid space-station-moon}
 * @preview ![space-station-moon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NkMxNiAyNjYuMzYxIDE2Ljg3NyAyNzYuNSAxOC4xNSAyODYuNTE2Qzg3Ljg3OSAzMDcuNDk2IDE2OC44OTggMzIwIDI1NiAzMjBTNDI0LjEyMSAzMDcuNDk2IDQ5My44NSAyODYuNTE2QzQ5NS4xMjMgMjc2LjUgNDk2IDI2Ni4zNjEgNDk2IDI1NkM0OTYgMTIzLjQ1MSAzODguNTQ5IDE2IDI1NiAxNlpNMTkyIDI0MEMxNDcuODc1IDI0MCAxMTIgMjA0LjEyNSAxMTIgMTYwUzE0Ny44NzUgODAgMTkyIDgwUzI3MiAxMTUuODc1IDI3MiAxNjBTMjM2LjEyNSAyNDAgMTkyIDI0MFpNMjUuNTE0IDMyMi40MDhDNTQuMzQ0IDQyMi42MTcgMTQ2LjUxOCA0OTYgMjU2IDQ5NlM0NTcuNjU2IDQyMi42MTcgNDg2LjQ4NiAzMjIuNDA4QzQxNy45NzcgMzQxLjE3NCAzMzkuODg1IDM1MiAyNTYgMzUyUzk0LjAyMyAzNDEuMTc0IDI1LjUxNCAzMjIuNDA4Wk0xOTIgMTM2QzE3OC43NSAxMzYgMTY4IDE0Ni43NSAxNjggMTYwUzE3OC43NSAxODQgMTkyIDE4NFMyMTYgMTczLjI1IDIxNiAxNjBTMjA1LjI1IDEzNiAxOTIgMTM2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SpaceStationMoon(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256C16 266.361 16.877 276.5 18.15 286.516C87.879 307.496 168.898 320 256 320S424.121 307.496 493.85 286.516C495.123 276.5 496 266.361 496 256C496 123.451 388.549 16 256 16ZM192 240C147.875 240 112 204.125 112 160S147.875 80 192 80S272 115.875 272 160S236.125 240 192 240ZM25.514 322.408C54.344 422.617 146.518 496 256 496S457.656 422.617 486.486 322.408C417.977 341.174 339.885 352 256 352S94.023 341.174 25.514 322.408ZM192 136C178.75 136 168 146.75 168 160S178.75 184 192 184S216 173.25 216 160S205.25 136 192 136Z" />
        </Icon>
    </>
}