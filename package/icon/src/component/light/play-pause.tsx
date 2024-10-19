
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `play-pause` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/play-pause?s=light play-pause}
 * @preview ![play-pause](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01Mi41MDYgNzEuNDA2QzQ2LjM2MSA2Ni4zMDcgMzkuMjE3IDY0IDMyLjIxNyA2NEMxNS43MTMgNjQgMCA3Ni44MDkgMCA5Ni4wMjdWNDE1Ljk3M0MwIDQzNS4xODkgMTUuNzE1IDQ0OCAzMi4yMTcgNDQ4QzM5LjIxOSA0NDggNDYuMzYxIDQ0NS42OTUgNTIuNTA2IDQ0MC41OTRMMjQ0LjUyOSAyODAuNjIxQzI1OS43ODEgMjY3Ljc0OCAyNTkuNzgxIDI0NC4yNTIgMjQ0LjUyOSAyMzEuMzc5TDUyLjUwNiA3MS40MDZaTTMyIDQxNS45NzNMMzEuNzc5IDk2LjE3NkMzMS44MzggOTYuMTIzIDMxLjk2MSA5Ni4wNjQgMzIuMDcgOTYuMDI5TDIyNC4wNDcgMjU2LjAzNUwzMiA0MTUuOTczWk0zNjggNjRDMzU5LjE2NCA2NCAzNTIgNzEuMTY0IDM1MiA4MFY0MzJDMzUyIDQ0MC44MzYgMzU5LjE2NCA0NDggMzY4IDQ0OFMzODQgNDQwLjgzNiAzODQgNDMyVjgwQzM4NCA3MS4xNjQgMzc2LjgzNiA2NCAzNjggNjRaTTQ5NiA2NEM0ODcuMTY0IDY0IDQ4MCA3MS4xNjQgNDgwIDgwVjQzMkM0ODAgNDQwLjgzNiA0ODcuMTY0IDQ0OCA0OTYgNDQ4UzUxMiA0NDAuODM2IDUxMiA0MzJWODBDNTEyIDcxLjE2NCA1MDQuODM2IDY0IDQ5NiA2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PlayPause(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M52.506 71.406C46.361 66.307 39.217 64 32.217 64C15.713 64 0 76.809 0 96.027V415.973C0 435.189 15.715 448 32.217 448C39.219 448 46.361 445.695 52.506 440.594L244.529 280.621C259.781 267.748 259.781 244.252 244.529 231.379L52.506 71.406ZM32 415.973L31.779 96.176C31.838 96.123 31.961 96.064 32.07 96.029L224.047 256.035L32 415.973ZM368 64C359.164 64 352 71.164 352 80V432C352 440.836 359.164 448 368 448S384 440.836 384 432V80C384 71.164 376.836 64 368 64ZM496 64C487.164 64 480 71.164 480 80V432C480 440.836 487.164 448 496 448S512 440.836 512 432V80C512 71.164 504.836 64 496 64Z" />
        </Icon>
    </>
}