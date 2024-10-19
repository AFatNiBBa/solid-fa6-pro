
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tape` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tape?s=duotone tape}
 * @preview ![tape](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiA4MEMxNTguOTUzIDgwIDgwIDE1OC45NTMgODAgMjU2UzE1OC45NTMgNDMyIDI1NiA0MzJTNDMyIDM1My4wNDcgNDMyIDI1NlMzNTMuMDQ3IDgwIDI1NiA4MFpNMjU2IDM1MkMyMDMuMDY0IDM1MiAxNjAgMzA4LjkzNCAxNjAgMjU2QzE2MCAyMDMuMDY0IDIwMy4wNjQgMTYwIDI1NiAxNjBTMzUyIDIwMy4wNjQgMzUyIDI1NkMzNTIgMzA4LjkzNCAzMDguOTM2IDM1MiAyNTYgMzUyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNTYgMjI0QzIzOC4zNTUgMjI0IDIyNCAyMzguMzU1IDIyNCAyNTZTMjM4LjM1NSAyODggMjU2IDI4OFMyODggMjczLjY0NSAyODggMjU2UzI3My42NDUgMjI0IDI1NiAyMjRaTTYwOCA0MzJINDE4Ljc3OUM0NjYuMTU4IDM4OC4xNTggNDk2IDMyNS42NDEgNDk2IDI1NkM0OTYgMTIzLjQ1MSAzODguNTQ5IDE2IDI1NiAxNlMxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2QzI2MC4zMjIgNDk2IDYwOCA0OTYgNjA4IDQ5NkM2MTYuODM2IDQ5NiA2MjQgNDg4LjgzNiA2MjQgNDgwVjQ0OEM2MjQgNDM5LjE2MiA2MTYuODM2IDQzMiA2MDggNDMyWk0yNTYgNDMyQzE1OC45NTMgNDMyIDgwIDM1My4wNDcgODAgMjU2UzE1OC45NTMgODAgMjU2IDgwUzQzMiAxNTguOTUzIDQzMiAyNTZTMzUzLjA0NyA0MzIgMjU2IDQzMloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Tape(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M256 80C158.953 80 80 158.953 80 256S158.953 432 256 432S432 353.047 432 256S353.047 80 256 80ZM256 352C203.064 352 160 308.934 160 256C160 203.064 203.064 160 256 160S352 203.064 352 256C352 308.934 308.936 352 256 352Z" />
            <path d="M256 224C238.355 224 224 238.355 224 256S238.355 288 256 288S288 273.645 288 256S273.645 224 256 224ZM608 432H418.779C466.158 388.158 496 325.641 496 256C496 123.451 388.549 16 256 16S16 123.451 16 256S123.451 496 256 496C260.322 496 608 496 608 496C616.836 496 624 488.836 624 480V448C624 439.162 616.836 432 608 432ZM256 432C158.953 432 80 353.047 80 256S158.953 80 256 80S432 158.953 432 256S353.047 432 256 432Z" />
        </Icon>
    </>
}