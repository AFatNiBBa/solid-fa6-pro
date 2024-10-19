
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `music` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/music?s=duotone music}
 * @preview ![music](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5MiAyMjRWODMuNjkxTDQ0OCA4LjA5MlYxNDguOTk0TDE5MiAyMjRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ4MCAwQzQ3Ny4yODEgMCA0NzIuOTY5IDAuNjU2IDQ3MC4zNzUgMS40ODRMNDQ4IDguMDkyVjI5Mi44OThDNDM3Ljk0NSAyODkuOTIgNDI3LjI4MSAyODggNDE2IDI4OEMzNjIuOTggMjg4IDMyMCAzMjMuODE2IDMyMCAzNjhDMzIwIDQxMi4xODIgMzYyLjk4IDQ0OCA0MTYgNDQ4UzUxMiA0MTIuMTgyIDUxMiAzNjhWMzEuOTcxQzUxMS45NjkgMTQuMzI4IDQ5Ny42NTYgMCA0ODAgMFpNMTI4IDEyNi40OTJWMzU2Ljg5OEMxMTcuOTQ1IDM1My45MiAxMDcuMjgxIDM1MiA5NiAzNTJDNDIuOTggMzUyIDAgMzg3LjgxNiAwIDQzMkMwIDQ3Ni4xODIgNDIuOTggNTEyIDk2IDUxMlMxOTIgNDc2LjE4MiAxOTIgNDMyVjgzLjY5MUwxNTAuNDA2IDk1Ljk3NUMxMzguMDYyIDk5Ljg2NSAxMjggMTEzLjUyMyAxMjggMTI2LjQ5MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Music(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M192 224V83.691L448 8.092V148.994L192 224Z" />
            <path d="M480 0C477.281 0 472.969 0.656 470.375 1.484L448 8.092V292.898C437.945 289.92 427.281 288 416 288C362.98 288 320 323.816 320 368C320 412.182 362.98 448 416 448S512 412.182 512 368V31.971C511.969 14.328 497.656 0 480 0ZM128 126.492V356.898C117.945 353.92 107.281 352 96 352C42.98 352 0 387.816 0 432C0 476.182 42.98 512 96 512S192 476.182 192 432V83.691L150.406 95.975C138.062 99.865 128 113.523 128 126.492Z" />
        </Icon>
    </>
}