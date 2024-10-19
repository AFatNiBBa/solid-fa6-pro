
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `taxi` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/taxi?s=regular taxi}
 * @preview ![taxi](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTIgMjg4Qzk0LjMyOCAyODggODAgMzAyLjMyNiA4MCAzMjBDODAgMzM3LjY3MiA5NC4zMjggMzUyIDExMiAzNTJTMTQ0IDMzNy42NzIgMTQ0IDMyMEMxNDQgMzAyLjMyNiAxMjkuNjcyIDI4OCAxMTIgMjg4Wk00MDAgMjg4QzM4Mi4zMjggMjg4IDM2OCAzMDIuMzI2IDM2OCAzMjBDMzY4IDMzNy42NzIgMzgyLjMyOCAzNTIgNDAwIDM1MlM0MzIgMzM3LjY3MiA0MzIgMzIwQzQzMiAzMDIuMzI2IDQxNy42NzIgMjg4IDQwMCAyODhaTTQ2Mi45MzkgMjIwLjc0TDQyMi4zNzUgMTE5LjMyOEM0MTAuMzYzIDg5LjI4MyAzODMuNDI0IDY4Ljg2OSAzNTIgNjQuODQ4VjMyQzM1MiAxNC4zMjYgMzM3LjY3NCAwIDMyMCAwSDE5MkMxNzQuMzI2IDAgMTYwIDE0LjMyNiAxNjAgMzJWNjQuODQ4QzEyOC41NzYgNjguODY5IDEwMS42MzcgODkuMjgzIDg5LjYyNSAxMTkuMzI4TDQ5LjA2MSAyMjAuNzRDMTkuOTEgMjM3LjIxOSAwIDI2OC4xMjUgMCAzMDRWNDgwQzAgNDk3LjY3MiAxNC4zMjYgNTEyIDMyIDUxMlM2NCA0OTcuNjcyIDY0IDQ4MFY0MzJINDQ4VjQ4MEM0NDggNDk3LjY3MiA0NjIuMzI2IDUxMiA0ODAgNTEyUzUxMiA0OTcuNjcyIDUxMiA0ODBWMzA0QzUxMiAyNjguMTI1IDQ5Mi4wOSAyMzcuMjE5IDQ2Mi45MzkgMjIwLjc0Wk0xMzQuMTg4IDEzNy4xNDFDMTQwLjI5NyAxMjEuODc1IDE1NC44NzUgMTEyIDE3MS4zMjggMTEySDM0MC42NzJDMzU3LjEyNSAxMTIgMzcxLjcwMyAxMjEuODc1IDM3Ny44MTIgMTM3LjE0MUw0MDYuMTU2IDIwOEgxMDUuODQ0TDEzNC4xODggMTM3LjE0MVpNNDY0IDM4NEg0OFYzMDRDNDggMjc3LjUzMyA2OS41MzMgMjU2IDk2IDI1Nkg0MTZDNDQyLjQ2NyAyNTYgNDY0IDI3Ny41MzMgNDY0IDMwNFYzODRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Taxi(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M112 288C94.328 288 80 302.326 80 320C80 337.672 94.328 352 112 352S144 337.672 144 320C144 302.326 129.672 288 112 288ZM400 288C382.328 288 368 302.326 368 320C368 337.672 382.328 352 400 352S432 337.672 432 320C432 302.326 417.672 288 400 288ZM462.939 220.74L422.375 119.328C410.363 89.283 383.424 68.869 352 64.848V32C352 14.326 337.674 0 320 0H192C174.326 0 160 14.326 160 32V64.848C128.576 68.869 101.637 89.283 89.625 119.328L49.061 220.74C19.91 237.219 0 268.125 0 304V480C0 497.672 14.326 512 32 512S64 497.672 64 480V432H448V480C448 497.672 462.326 512 480 512S512 497.672 512 480V304C512 268.125 492.09 237.219 462.939 220.74ZM134.188 137.141C140.297 121.875 154.875 112 171.328 112H340.672C357.125 112 371.703 121.875 377.812 137.141L406.156 208H105.844L134.188 137.141ZM464 384H48V304C48 277.533 69.533 256 96 256H416C442.467 256 464 277.533 464 304V384Z" />
        </Icon>
    </>
}