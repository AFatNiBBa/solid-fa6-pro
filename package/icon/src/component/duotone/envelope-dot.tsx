
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `envelope-dot` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-dot?s=duotone envelope-dot}
 * @preview ![envelope-dot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4LjI4NyAxNDUuMzA1TDI2MC40NjkgMzEwLjM1OUMyNzYuNjYyIDMyMi45NTUgMjk5LjMzOCAzMjIuOTU1IDMxNS41MzEgMzEwLjM1OUw1MDkuMTg2IDE1OS43MTdDNDU3LjQ5OCAxNTguMTkxIDQxNiAxMTYuMDU3IDQxNiA2NEg4MEM1My40OSA2NCAzMiA4NS40OSAzMiAxMTJDMzIgMTI1LjAyIDM4LjAxIDEzNy4zMTEgNDguMjg3IDE0NS4zMDVaTTMzNS4xNzggMzM1LjgxMkMzMjEuNzU2IDM0Ni4yNSAzMDUuMDAyIDM1MiAyODggMzUyUzI1NC4yNDQgMzQ2LjI1IDI0MC44MiAzMzUuODExTDMyIDE3My4zNjlWNDAwQzMyIDQyNi41MSA1My40OSA0NDggODAgNDQ4SDQ5NkM1MjIuNTEgNDQ4IDU0NCA0MjYuNTEgNTQ0IDQwMFYxNzMuMzcxTDMzNS4xNzggMzM1LjgxMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTEyIDBDNTQ3LjM0NiAwIDU3NiAyOC42NTQgNTc2IDY0UzU0Ny4zNDYgMTI4IDUxMiAxMjhTNDQ4IDk5LjM0NiA0NDggNjRTNDc2LjY1NCAwIDUxMiAwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function EnvelopeDot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M48.287 145.305L260.469 310.359C276.662 322.955 299.338 322.955 315.531 310.359L509.186 159.717C457.498 158.191 416 116.057 416 64H80C53.49 64 32 85.49 32 112C32 125.02 38.01 137.311 48.287 145.305ZM335.178 335.812C321.756 346.25 305.002 352 288 352S254.244 346.25 240.82 335.811L32 173.369V400C32 426.51 53.49 448 80 448H496C522.51 448 544 426.51 544 400V173.371L335.178 335.812Z" />
            <path d="M512 0C547.346 0 576 28.654 576 64S547.346 128 512 128S448 99.346 448 64S476.654 0 512 0Z" />
        </Icon>
    </>
}