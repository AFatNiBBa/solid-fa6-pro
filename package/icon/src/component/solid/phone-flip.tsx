
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `phone-flip` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/phone-flip?s=solid phone-flip}
 * @preview ![phone-flip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOC45MDcgMzUxLjI1TDEyNy4zOTIgMzA0Ljc0OUMxNDAuMTczIDI5OS4yMTggMTU1LjE4OCAzMDIuOTM3IDE2My44NzYgMzEzLjcxOEwyMDcuOTIzIDM2Ny41MzFDMjc3LjE3MyAzMzMuNTMxIDMzMy40NyAyNzcuMjQ5IDM2Ny40NTQgMjA4LjAyOUwzMTMuNjI2IDE2My45MzVDMzAyLjg3NiAxNTUuMTU0IDI5OS4yMDQgMTQwLjI3OSAzMDQuNjQyIDEyNy40OTdMMzUxLjE3MyAxOC45MzRDMzU3LjI2NyA1LjAyNyAzNzIuMzQ1IC0yLjU5OCAzODcuMDMyIDAuODA5TDQ4Ny43ODIgMjQuMDU5QzUwMi4wMzIgMjcuMzA5IDUxMi4wMDEgMzkuODQgNTEyLjAwMSA1NC40OTdDNTEyLjAwMSAzMDYuNzggMzA2Ljc2NyA1MTIuMDAxIDU0LjUxNyA1MTIuMDAxQzM5Ljg0NSA1MTIuMDAxIDI3LjMxMyA1MDIuMDMyIDI0LjA0OCA0ODcuNzgyTDAuNzk4IDM4N0MtMi41NzcgMzcyLjQwNiA1LjAwMSAzNTcuMjUgMTguOTA3IDM1MS4yNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PhoneFlip(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M18.907 351.25L127.392 304.749C140.173 299.218 155.188 302.937 163.876 313.718L207.923 367.531C277.173 333.531 333.47 277.249 367.454 208.029L313.626 163.935C302.876 155.154 299.204 140.279 304.642 127.497L351.173 18.934C357.267 5.027 372.345 -2.598 387.032 0.809L487.782 24.059C502.032 27.309 512.001 39.84 512.001 54.497C512.001 306.78 306.767 512.001 54.517 512.001C39.845 512.001 27.313 502.032 24.048 487.782L0.798 387C-2.577 372.406 5.001 357.25 18.907 351.25Z" />
        </Icon>
    </>
}