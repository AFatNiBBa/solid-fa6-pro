
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `faucet-drip` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/faucet-drip?s=solid faucet-drip}
 * @preview ![faucet-drip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgNDgwQzQxNiA0OTcuNjI1IDQzMC4zNzUgNTEyIDQ0OCA1MTJTNDgwIDQ5Ny42MjUgNDgwIDQ4MFM0NDggNDE2IDQ0OCA0MTZTNDE2IDQ2Mi4zNzUgNDE2IDQ4MFpNMzUyIDE5MkgzMTMuMzc1QzI5Ny42MjUgMTc4LjUgMjc3Ljg3NSAxNjguODc1IDI1NiAxNjRWMTE2LjVMMjI0IDExM0wxOTIgMTE2LjVWMTY0QzE3MC4xMjUgMTY5IDE1MC4zNzUgMTc4LjYyNSAxMzQuNjI1IDE5MkgxNkM3LjEyNSAxOTIgMCAxOTkuMTI1IDAgMjA4VjMwNEMwIDMxMi44NzUgNy4xMjUgMzIwIDE2IDMyMEgxMDguNzVDMTI5LjM3NSAzNTcuNzUgMTczIDM4NCAyMjQgMzg0UzMxOC42MjUgMzU3Ljc1IDMzOS4yNSAzMjBIMzUyQzM2OS42MjUgMzIwIDM4NCAzMzQuMzc1IDM4NCAzNTJTMzk4LjM3NSAzODQgNDE2IDM4NEg0ODBDNDk3LjYyNSAzODQgNTEyIDM2OS42MjUgNTEyIDM1MkM1MTIgMjYzLjYyNSA0NDAuMzc1IDE5MiAzNTIgMTkyWk04MS42MjUgOTUuODc1TDIyNCA4MC44NzVMMzY2LjM3NSA5NS44NzVDMzc1Ljg3NSA5Ni44NzUgMzg0IDg5LjEyNSAzODQgNzkuMTI1VjQ4Ljg3NUMzODQgMzguODc1IDM3NS44NzUgMzEuMTI1IDM2Ni4zNzUgMzIuMTI1TDI1NiA0My43NVYxNkMyNTYgNy4xMjUgMjQ4Ljg3NSAwIDI0MCAwSDIwOEMxOTkuMTI1IDAgMTkyIDcuMTI1IDE5MiAxNlY0My43NUw4MS42MjUgMzIuMTI1QzcyLjEyNSAzMS4xMjUgNjQgMzguODc1IDY0IDQ4Ljg3NVY3OS4xMjVDNjQgODkuMTI1IDcyLjEyNSA5Ni44NzUgODEuNjI1IDk1Ljg3NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FaucetDrip(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M416 480C416 497.625 430.375 512 448 512S480 497.625 480 480S448 416 448 416S416 462.375 416 480ZM352 192H313.375C297.625 178.5 277.875 168.875 256 164V116.5L224 113L192 116.5V164C170.125 169 150.375 178.625 134.625 192H16C7.125 192 0 199.125 0 208V304C0 312.875 7.125 320 16 320H108.75C129.375 357.75 173 384 224 384S318.625 357.75 339.25 320H352C369.625 320 384 334.375 384 352S398.375 384 416 384H480C497.625 384 512 369.625 512 352C512 263.625 440.375 192 352 192ZM81.625 95.875L224 80.875L366.375 95.875C375.875 96.875 384 89.125 384 79.125V48.875C384 38.875 375.875 31.125 366.375 32.125L256 43.75V16C256 7.125 248.875 0 240 0H208C199.125 0 192 7.125 192 16V43.75L81.625 32.125C72.125 31.125 64 38.875 64 48.875V79.125C64 89.125 72.125 96.875 81.625 95.875Z" />
        </Icon>
    </>
}