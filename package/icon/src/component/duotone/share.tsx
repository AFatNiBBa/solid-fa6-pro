
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `share` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/share?s=duotone share}
 * @preview ![share](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4OC4wMDIgMjcyLjA3OUMxMzIuOTA3IDI3NC4zMTQgNjYuMDYzIDMxMi44MTQgMTExLjQwNyA0NTcuODI5QzExNi40MzggNDczLjkyMyA5Ny4wMDEgNDg2LjM5MiA4My4zNDQgNDc2LjQ1NEMzOS41OTQgNDQ0LjY0MiAwIDM4My43NjcgMCAzMjIuMzI5QzAgMTcwLjA5NSAxMjcuMzc2IDEzNy45MDcgMjg4LjAwMiAxMzYuMDY0VjI3Mi4wNzlaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTUwMy42ODkgMjI2LjE1N0wzMjcuNjg4IDM3OC4xNTdDMzEyLjMxMyAzOTEuNDU0IDI4OCAzODAuNzA0IDI4OCAzNjAuMDAxVjU2LjAxN0MyODggMzUuMzQ1IDMxMi4yODEgMjQuNTQ4IDMyNy42ODggMzcuODQ1TDUwMy42ODkgMTg5Ljg0NUM1MTQuNzgzIDE5OS40MDcgNTE0Ljc1MiAyMTYuNTk1IDUwMy42ODkgMjI2LjE1N1oiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Share(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M288.002 272.079C132.907 274.314 66.063 312.814 111.407 457.829C116.438 473.923 97.001 486.392 83.344 476.454C39.594 444.642 0 383.767 0 322.329C0 170.095 127.376 137.907 288.002 136.064V272.079Z" />
            <path d="M503.689 226.157L327.688 378.157C312.313 391.454 288 380.704 288 360.001V56.017C288 35.345 312.281 24.548 327.688 37.845L503.689 189.845C514.783 199.407 514.752 216.595 503.689 226.157Z" />
        </Icon>
    </>
}