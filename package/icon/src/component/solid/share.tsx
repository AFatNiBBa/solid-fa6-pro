
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `share` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/share?s=solid share}
 * @preview ![share](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDMuNjkxIDIyNi4xNTdMMzI3LjY5IDM3OC4xNTdDMzEyLjMxNSAzOTEuNDU0IDI4OC4wMDIgMzgwLjcwNCAyODguMDAyIDM2MC4wMDFWMjcyLjA3OUMxMzIuOTA3IDI3NC4zMTQgNjYuMDYzIDMxMi44MTQgMTExLjQwNyA0NTcuODI5QzExNi40MzggNDczLjkyMyA5Ny4wMDEgNDg2LjM5MiA4My4zNDQgNDc2LjQ1NEMzOS41OTQgNDQ0LjY0MiAwIDM4My43NjcgMCAzMjIuMzI5QzAgMTcwLjA5NSAxMjcuMzc2IDEzNy45MDcgMjg4LjAwMiAxMzYuMDY0VjU2LjAxN0MyODguMDAyIDM1LjM0NSAzMTIuMjg0IDI0LjU0OCAzMjcuNjkgMzcuODQ1TDUwMy42OTEgMTg5Ljg0NUM1MTQuNzg1IDE5OS40MDcgNTE0Ljc1NCAyMTYuNTk1IDUwMy42OTEgMjI2LjE1N1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Share(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M503.691 226.157L327.69 378.157C312.315 391.454 288.002 380.704 288.002 360.001V272.079C132.907 274.314 66.063 312.814 111.407 457.829C116.438 473.923 97.001 486.392 83.344 476.454C39.594 444.642 0 383.767 0 322.329C0 170.095 127.376 137.907 288.002 136.064V56.017C288.002 35.345 312.284 24.548 327.69 37.845L503.691 189.845C514.785 199.407 514.754 216.595 503.691 226.157Z" />
        </Icon>
    </>
}