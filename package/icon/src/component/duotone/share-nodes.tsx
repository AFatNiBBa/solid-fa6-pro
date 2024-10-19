
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `share-nodes` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/share-nodes?s=duotone share-nodes}
 * @preview ![share-nodes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4NS4wMTIgMTk3LjAyOUMyNjkuNTQ3IDE4Mi4xMjkgMjU5LjQyNCAxNjIuMDY2IDI1Ni42OCAxMzkuNjMzTDE2MiAxODYuOTcxQzE3Ny40NjUgMjAxLjg3MSAxODcuNTg4IDIyMS45MzQgMTkwLjMzMiAyNDQuMzY3TDI4NS4wMTIgMTk3LjAyOVpNMTYyIDMyNS4wMjlMMjU2LjY4IDM3Mi4zNjdDMjU5LjQyNCAzNDkuOTM0IDI2OS41NDcgMzI5Ljg3MSAyODUuMDEyIDMxNC45NzFMMTkwLjMzMiAyNjcuNjMzQzE4Ny41ODggMjkwLjA2NiAxNzcuNDY1IDMxMC4xMjkgMTYyIDMyNS4wMjlaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM1MiAyMjRDNDA1LjAyIDIyNCA0NDggMTgxLjAyIDQ0OCAxMjhTNDA1LjAyIDMyIDM1MiAzMlMyNTYgNzQuOTggMjU2IDEyOFMyOTguOTggMjI0IDM1MiAyMjRaTTM1MiAyODhDMjk4Ljk4IDI4OCAyNTYgMzMwLjk4IDI1NiAzODRTMjk4Ljk4IDQ4MCAzNTIgNDgwUzQ0OCA0MzcuMDIgNDQ4IDM4NFM0MDUuMDIgMjg4IDM1MiAyODhaTTk2IDE2MEM0Mi45OCAxNjAgMCAyMDIuOTggMCAyNTZTNDIuOTggMzUyIDk2IDM1MlMxOTIgMzA5LjAyIDE5MiAyNTZTMTQ5LjAyIDE2MCA5NiAxNjBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ShareNodes(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M285.012 197.029C269.547 182.129 259.424 162.066 256.68 139.633L162 186.971C177.465 201.871 187.588 221.934 190.332 244.367L285.012 197.029ZM162 325.029L256.68 372.367C259.424 349.934 269.547 329.871 285.012 314.971L190.332 267.633C187.588 290.066 177.465 310.129 162 325.029Z" />
            <path d="M352 224C405.02 224 448 181.02 448 128S405.02 32 352 32S256 74.98 256 128S298.98 224 352 224ZM352 288C298.98 288 256 330.98 256 384S298.98 480 352 480S448 437.02 448 384S405.02 288 352 288ZM96 160C42.98 160 0 202.98 0 256S42.98 352 96 352S192 309.02 192 256S149.02 160 96 160Z" />
        </Icon>
    </>
}