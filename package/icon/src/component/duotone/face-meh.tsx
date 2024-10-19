
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `face-meh` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-meh?s=duotone face-meh}
 * @preview ![face-meh](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ5NiAyNTZDNDk2IDM4OC41ODEgMzg4LjU4MSA0OTYgMjU2IDQ5NlMxNiAzODguNTgxIDE2IDI1NlMxMjMuNDE5IDE2IDI1NiAxNlM0OTYgMTIzLjQxOSA0OTYgMjU2Wk0xNDQgMjA4QzE0NCAyMjUuNzAzIDE1OC4zMTIgMjQwIDE3NiAyNDBTMjA4IDIyNS43MDMgMjA4IDIwOFMxOTMuNjg4IDE3NiAxNzYgMTc2UzE0NCAxOTAuMjk3IDE0NCAyMDhaTTM1MiAzMzZIMTYwQzEzOC44MTIgMzM2IDEzOC44MTIgMzY4IDE2MCAzNjhIMzUyQzM3My4xODggMzY4IDM3My4xODggMzM2IDM1MiAzMzZaTTM2OCAyMDhDMzY4IDE5MC4yOTcgMzUzLjY4OCAxNzYgMzM2IDE3NlMzMDQgMTkwLjI5NyAzMDQgMjA4UzMxOC4zMTIgMjQwIDMzNiAyNDBTMzY4IDIyNS43MDMgMzY4IDIwOFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTQ0IDIwOEMxNDQgMjI1LjcwMyAxNTguMzEyIDI0MCAxNzYgMjQwUzIwOCAyMjUuNzAzIDIwOCAyMDhTMTkzLjY4OCAxNzYgMTc2IDE3NlMxNDQgMTkwLjI5NyAxNDQgMjA4Wk0zNjggMjA4QzM2OCAxOTAuMjk3IDM1My42ODggMTc2IDMzNiAxNzZTMzA0IDE5MC4yOTcgMzA0IDIwOFMzMTguMzEyIDI0MCAzMzYgMjQwUzM2OCAyMjUuNzAzIDM2OCAyMDhaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FaceMeh(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M496 256C496 388.581 388.581 496 256 496S16 388.581 16 256S123.419 16 256 16S496 123.419 496 256ZM144 208C144 225.703 158.312 240 176 240S208 225.703 208 208S193.688 176 176 176S144 190.297 144 208ZM352 336H160C138.812 336 138.812 368 160 368H352C373.188 368 373.188 336 352 336ZM368 208C368 190.297 353.688 176 336 176S304 190.297 304 208S318.312 240 336 240S368 225.703 368 208Z" />
            <path d="M144 208C144 225.703 158.312 240 176 240S208 225.703 208 208S193.688 176 176 176S144 190.297 144 208ZM368 208C368 190.297 353.688 176 336 176S304 190.297 304 208S318.312 240 336 240S368 225.703 368 208Z" />
        </Icon>
    </>
}