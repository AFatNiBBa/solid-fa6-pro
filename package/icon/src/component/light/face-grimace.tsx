
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `face-grimace` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-grimace?s=light face-grimace}
 * @preview ![face-grimace](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzUuOTU1IDIzMkMxODkuMjkzIDIzMiAyMDAgMjIxLjMxMiAyMDAgMjA4UzE4OS4yOTMgMTg0IDE3NS45NTUgMTg0QzE2Mi43MDcgMTg0IDE1MiAxOTQuNjg4IDE1MiAyMDhTMTYyLjcwNyAyMzIgMTc1Ljk1NSAyMzJaTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMjU2IDQ2NEMxNDEuMzA5IDQ2NCA0OCAzNzAuNjkxIDQ4IDI1NlMxNDEuMzA5IDQ4IDI1NiA0OFM0NjQgMTQxLjMwOSA0NjQgMjU2UzM3MC42OTEgNDY0IDI1NiA0NjRaTTMzNS45NTUgMjMyQzM0OS4yOTMgMjMyIDM2MCAyMjEuMzEyIDM2MCAyMDhTMzQ5LjI5MyAxODQgMzM1Ljk1NSAxODRDMzIyLjcwNyAxODQgMzEyIDE5NC42ODggMzEyIDIwOFMzMjIuNzA3IDIzMiAzMzUuOTU1IDIzMlpNMzY4IDI4OEgxNDRDMTI2LjMyNiAyODggMTEyIDMwMi4zMjYgMTEyIDMyMFYzNTJDMTEyIDM2OS42NzIgMTI2LjMyNiAzODQgMTQ0IDM4NEgzNjhDMzg1LjY3NCAzODQgNDAwIDM2OS42NzIgNDAwIDM1MlYzMjBDNDAwIDMwMi4zMjYgMzg1LjY3NCAyODggMzY4IDI4OFpNMTc2IDM1MkgxNDRWMzIwSDE3NlYzNTJaTTI0MCAzNTJIMjA4VjMyMEgyNDBWMzUyWk0zMDQgMzUySDI3MlYzMjBIMzA0VjM1MlpNMzY4IDM1MkgzMzZWMzIwSDM2OFYzNTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FaceGrimace(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M175.955 232C189.293 232 200 221.312 200 208S189.293 184 175.955 184C162.707 184 152 194.688 152 208S162.707 232 175.955 232ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM335.955 232C349.293 232 360 221.312 360 208S349.293 184 335.955 184C322.707 184 312 194.688 312 208S322.707 232 335.955 232ZM368 288H144C126.326 288 112 302.326 112 320V352C112 369.672 126.326 384 144 384H368C385.674 384 400 369.672 400 352V320C400 302.326 385.674 288 368 288ZM176 352H144V320H176V352ZM240 352H208V320H240V352ZM304 352H272V320H304V352ZM368 352H336V320H368V352Z" />
        </Icon>
    </>
}