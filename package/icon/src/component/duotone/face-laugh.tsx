
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `face-laugh` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-laugh?s=duotone face-laugh}
 * @preview ![face-laugh](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDYxIDE2IDE2IDEyMy40MTggMTYgMjU2QzE2IDM4OC41NzggMTIzLjQ2MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU3OCA0OTYgMjU2QzQ5NiAxMjMuNDE4IDM4OC41MzkgMTYgMjU2IDE2Wk0zMzYuMDQzIDE2MEMzNTMuNzIzIDE2MCAzNjguMDEyIDE3NC4yNSAzNjguMDEyIDE5MlMzNTMuNzIzIDIyNCAzMzYuMDQzIDIyNEMzMTguMjQyIDIyNCAzMDMuOTUzIDIwOS43NSAzMDMuOTUzIDE5MlMzMTguMjQyIDE2MCAzMzYuMDQzIDE2MFpNMTc1Ljk1NyAxNjBDMTkzLjc1OCAxNjAgMjA4LjA0NyAxNzQuMjUgMjA4LjA0NyAxOTJTMTkzLjc1OCAyMjQgMTc1Ljk1NyAyMjRDMTU4LjI3NyAyMjQgMTQzLjk4OCAyMDkuNzUgMTQzLjk4OCAxOTJTMTU4LjI3NyAxNjAgMTc1Ljk1NyAxNjBaTTI2My45OTIgNDMySDI0OC4wMDhDMTc0LjYyNSA0MzIgMTEzLjk1NyAzNzcgMTA1LjExNyAzMDZDMTAzLjkwNiAyOTYuNSAxMTEuNDE0IDI4OCAxMjAuOTggMjg4SDM5MS4wMkM0MDAuNTg2IDI4OCA0MDguMDk0IDI5Ni4zNzUgNDA2Ljg4MyAzMDZDMzk4LjA0MyAzNzcgMzM3LjM3NSA0MzIgMjYzLjk5MiA0MzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTMzNi4wNTUgMTYwQzMxOC4yNTQgMTYwIDMwMy45NjUgMTc0LjI1IDMwMy45NjUgMTkyUzMxOC4yNTQgMjI0IDMzNi4wNTUgMjI0QzM1My43MzQgMjI0IDM2OC4wMjMgMjA5Ljc1IDM2OC4wMjMgMTkyUzM1My43MzQgMTYwIDMzNi4wNTUgMTYwWk0xNzUuOTY5IDE2MEMxNTguMjg5IDE2MCAxNDQgMTc0LjI1IDE0NCAxOTJTMTU4LjI4OSAyMjQgMTc1Ljk2OSAyMjRDMTkzLjc3IDIyNCAyMDguMDU5IDIwOS43NSAyMDguMDU5IDE5MlMxOTMuNzcgMTYwIDE3NS45NjkgMTYwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FaceLaugh(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 16C123.461 16 16 123.418 16 256C16 388.578 123.461 496 256 496S496 388.578 496 256C496 123.418 388.539 16 256 16ZM336.043 160C353.723 160 368.012 174.25 368.012 192S353.723 224 336.043 224C318.242 224 303.953 209.75 303.953 192S318.242 160 336.043 160ZM175.957 160C193.758 160 208.047 174.25 208.047 192S193.758 224 175.957 224C158.277 224 143.988 209.75 143.988 192S158.277 160 175.957 160ZM263.992 432H248.008C174.625 432 113.957 377 105.117 306C103.906 296.5 111.414 288 120.98 288H391.02C400.586 288 408.094 296.375 406.883 306C398.043 377 337.375 432 263.992 432Z" />
            <path d="M336.055 160C318.254 160 303.965 174.25 303.965 192S318.254 224 336.055 224C353.734 224 368.023 209.75 368.023 192S353.734 160 336.055 160ZM175.969 160C158.289 160 144 174.25 144 192S158.289 224 175.969 224C193.77 224 208.059 209.75 208.059 192S193.77 160 175.969 160Z" />
        </Icon>
    </>
}