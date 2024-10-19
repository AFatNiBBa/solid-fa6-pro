
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-right?s=duotone circle-right}
 * @preview ![circle-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ5NiAyNTZDNDk2IDEyMy40MiAzODguNTggMTYgMjU2IDE2UzE2IDEyMy40MiAxNiAyNTZDMTYgMzg4LjU4MiAxMjMuNDIgNDk2IDI1NiA0OTZTNDk2IDM4OC41ODIgNDk2IDI1NlpNMjY1Ljg3NSAzODIuNzgxQzI1OS44OTEgMzgwLjMxMiAyNTYgMzc0LjQ2OSAyNTYgMzY4VjMwNEgxNjBDMTQyLjMyNyAzMDQgMTI4IDI4OS42NzMgMTI4IDI3MlYyNDBDMTI4IDIyMi4zMjcgMTQyLjMyNyAyMDggMTYwIDIwOEgyNTZWMTQ0QzI1NiAxMzcuNTMxIDI1OS44OTEgMTMxLjY4OCAyNjUuODc1IDEyOS4yMTlDMjcxLjg1OSAxMjYuNzM0IDI3OC43MzQgMTI4LjEwOSAyODMuMzEzIDEzMi42ODdMMzk1LjMxMyAyNDQuNjg3QzQwMS41NiAyNTAuOTM1IDQwMS41NiAyNjEuMDY1IDM5NS4zMTMgMjY3LjMxMkwyODMuMzEzIDM3OS4zMTJDMjc4LjczNCAzODMuODkxIDI3MS44NTkgMzg1LjI2NiAyNjUuODc1IDM4Mi43ODFaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI2NS44NzUgMzgyLjc4MUMyNTkuODkxIDM4MC4zMTIgMjU2IDM3NC40NjkgMjU2IDM2OFYzMDRIMTYwQzE0Mi4zMjcgMzA0IDEyOCAyODkuNjczIDEyOCAyNzJWMjQwQzEyOCAyMjIuMzI3IDE0Mi4zMjcgMjA4IDE2MCAyMDhIMjU2VjE0NEMyNTYgMTM3LjUzMSAyNTkuODkxIDEzMS42ODggMjY1Ljg3NSAxMjkuMjE5QzI3MS44NTkgMTI2LjczNCAyNzguNzM0IDEyOC4xMDkgMjgzLjMxMyAxMzIuNjg3TDM5NS4zMTMgMjQ0LjY4N0M0MDEuNTYgMjUwLjkzNSA0MDEuNTYgMjYxLjA2NSAzOTUuMzEzIDI2Ny4zMTJMMjgzLjMxMyAzNzkuMzEyQzI3OC43MzQgMzgzLjg5MSAyNzEuODU5IDM4NS4yNjYgMjY1Ljg3NSAzODIuNzgxWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M496 256C496 123.42 388.58 16 256 16S16 123.42 16 256C16 388.582 123.42 496 256 496S496 388.582 496 256ZM265.875 382.781C259.891 380.312 256 374.469 256 368V304H160C142.327 304 128 289.673 128 272V240C128 222.327 142.327 208 160 208H256V144C256 137.531 259.891 131.688 265.875 129.219C271.859 126.734 278.734 128.109 283.313 132.687L395.313 244.687C401.56 250.935 401.56 261.065 395.313 267.312L283.313 379.312C278.734 383.891 271.859 385.266 265.875 382.781Z" />
            <path d="M265.875 382.781C259.891 380.312 256 374.469 256 368V304H160C142.327 304 128 289.673 128 272V240C128 222.327 142.327 208 160 208H256V144C256 137.531 259.891 131.688 265.875 129.219C271.859 126.734 278.734 128.109 283.313 132.687L395.313 244.687C401.56 250.935 401.56 261.065 395.313 267.312L283.313 379.312C278.734 383.891 271.859 385.266 265.875 382.781Z" />
        </Icon>
    </>
}