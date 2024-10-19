
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `angles-up` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angles-up?s=duotone angles-up}
 * @preview ![angles-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIxOS41MDEgMjM0Ljk1M0MyMTEuNzgyIDIyNy42NDEgMjAxLjkwNyAyMjMuOTg0IDE5Mi4wMDEgMjIzLjk4NFMxNzIuMjE5IDIyNy42NDEgMTY0LjUwMSAyMzQuOTUzTDEyLjQ5OSAzNzguOTM4Qy0zLjU2NCAzOTQuMTI1IC00LjIyIDQxOS40MzggMTAuOTY3IDQzNS40NjlDMjYuMTg2IDQ1MS41NTkgNTEuNTMyIDQ1Mi4yNDYgNjcuNTAxIDQzN0wxOTIuMDAxIDMxOS4wN0wzMTYuNTAxIDQzN0MzMzIuNTAxIDQ1Mi4yMTUgMzU3LjkwOSA0NTEuNTI3IDM3My4wMzQgNDM1LjQ2OUMzODguMjIxIDQxOS40MzcgMzg3LjU2NSAzOTQuMTI1IDM3MS41MDMgMzc4LjkzN0wyMTkuNTAxIDIzNC45NTNaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTY3LjUwMSAyNDUuMDAxTDE5MiAxMjcuMDc5TDMxNi41IDI0NS4wMDFDMzMyLjUgMjYwLjIxNCAzNTcuOTA4IDI1OS41MjcgMzczLjAzMyAyNDMuNDdDMzg4LjIyMSAyMjcuNDM5IDM4Ny41NjQgMjAyLjEyOSAzNzEuNTAyIDE4Ni45NDJMMjE5LjUgNDIuOTY4QzIxMS43ODIgMzUuNjU2IDIwMS45MDcgMzIgMTkyIDMyQzE4Mi4wOTQgMzIgMTcyLjIxOSAzNS42NTYgMTY0LjUgNDIuOTY4TDEyLjQ5OSAxODYuOTQyQy0zLjU2NCAyMDIuMTI5IC00LjIyIDIyNy40MzkgMTAuOTY3IDI0My40N0MyNi4xODYgMjU5LjU1OCA1MS41MzIgMjYwLjI0NiA2Ny41MDEgMjQ1LjAwMVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function AnglesUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M219.501 234.953C211.782 227.641 201.907 223.984 192.001 223.984S172.219 227.641 164.501 234.953L12.499 378.938C-3.564 394.125 -4.22 419.438 10.967 435.469C26.186 451.559 51.532 452.246 67.501 437L192.001 319.07L316.501 437C332.501 452.215 357.909 451.527 373.034 435.469C388.221 419.437 387.565 394.125 371.503 378.937L219.501 234.953Z" />
            <path d="M67.501 245.001L192 127.079L316.5 245.001C332.5 260.214 357.908 259.527 373.033 243.47C388.221 227.439 387.564 202.129 371.502 186.942L219.5 42.968C211.782 35.656 201.907 32 192 32C182.094 32 172.219 35.656 164.5 42.968L12.499 186.942C-3.564 202.129 -4.22 227.439 10.967 243.47C26.186 259.558 51.532 260.246 67.501 245.001Z" />
        </Icon>
    </>
}