
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `screen-users` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/screen-users?s=light screen-users}
 * @preview ![screen-users](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTYgNDE2SDc2QzM0LjEyNSA0MTYgMCA0NTEuODc1IDAgNDk2QzAgNTA0Ljc1IDcuMjUgNTEyIDE2IDUxMlMzMiA1MDQuNzUgMzIgNDk2QzMyIDQ2OS41IDUxLjc1IDQ0OCA3NiA0NDhIMTE2QzE0MC4yNSA0NDggMTYwIDQ2OS41IDE2MCA0OTZDMTYwIDUwNC43NSAxNjcuMjUgNTEyIDE3NiA1MTJTMTkyIDUwNC43NSAxOTIgNDk2QzE5MiA0NTEuODc1IDE1Ny44NzUgNDE2IDExNiA0MTZaTTU2NCA0MTZINTI0QzQ4Mi4xMjUgNDE2IDQ0OCA0NTEuODc1IDQ0OCA0OTZDNDQ4IDUwNC43NSA0NTUuMjUgNTEyIDQ2NCA1MTJTNDgwIDUwNC43NSA0ODAgNDk2QzQ4MCA0NjkuNSA0OTkuNzUgNDQ4IDUyNCA0NDhINTY0QzU4OC4yNSA0NDggNjA4IDQ2OS41IDYwOCA0OTZDNjA4IDUwNC43NSA2MTUuMjUgNTEyIDYyNCA1MTJTNjQwIDUwNC43NSA2NDAgNDk2QzY0MCA0NTEuODc1IDYwNS44NzUgNDE2IDU2NCA0MTZaTTM0MCA0MTZIMzAwQzI1OC4xMjUgNDE2IDIyNCA0NTEuODc1IDIyNCA0OTZDMjI0IDUwNC43NSAyMzEuMjUgNTEyIDI0MCA1MTJTMjU2IDUwNC43NSAyNTYgNDk2QzI1NiA0NjkuNSAyNzUuNzUgNDQ4IDMwMCA0NDhIMzQwQzM2NC4yNSA0NDggMzg0IDQ2OS41IDM4NCA0OTZDMzg0IDUwNC43NSAzOTEuMjUgNTEyIDQwMCA1MTJTNDE2IDUwNC43NSA0MTYgNDk2QzQxNiA0NTEuODc1IDM4MS44NzUgNDE2IDM0MCA0MTZaTTI1NiAzMjBDMjU2IDM1NS4zNDYgMjg0LjY1NCAzODQgMzIwIDM4NFMzODQgMzU1LjM0NiAzODQgMzIwUzM1NS4zNDYgMjU2IDMyMCAyNTZTMjU2IDI4NC42NTQgMjU2IDMyMFpNMzUyIDMyMEMzNTIgMzM3LjY0NSAzMzcuNjQ1IDM1MiAzMjAgMzUyUzI4OCAzMzcuNjQ1IDI4OCAzMjBTMzAyLjM1NSAyODggMzIwIDI4OFMzNTIgMzAyLjM1NSAzNTIgMzIwWk01NDQgMjU2QzUwOC42NTQgMjU2IDQ4MCAyODQuNjU0IDQ4MCAzMjBTNTA4LjY1NCAzODQgNTQ0IDM4NFM2MDggMzU1LjM0NiA2MDggMzIwUzU3OS4zNDYgMjU2IDU0NCAyNTZaTTU0NCAzNTJDNTI2LjM1NSAzNTIgNTEyIDMzNy42NDUgNTEyIDMyMFM1MjYuMzU1IDI4OCA1NDQgMjg4UzU3NiAzMDIuMzU1IDU3NiAzMjBTNTYxLjY0NSAzNTIgNTQ0IDM1MlpNOTYgMzg0QzEzMS4zNDYgMzg0IDE2MCAzNTUuMzQ2IDE2MCAzMjBTMTMxLjM0NiAyNTYgOTYgMjU2UzMyIDI4NC42NTQgMzIgMzIwUzYwLjY1NCAzODQgOTYgMzg0Wk05NiAyODhDMTEzLjY0NSAyODggMTI4IDMwMi4zNTUgMTI4IDMyMFMxMTMuNjQ1IDM1MiA5NiAzNTJTNjQgMzM3LjY0NSA2NCAzMjBTNzguMzU1IDI4OCA5NiAyODhaTTQ4IDI0MEM1Ni44NDQgMjQwIDY0IDIzMi44NDQgNjQgMjI0VjQ4QzY0IDM5LjE3MiA3MS4xODggMzIgODAgMzJINTYwQzU2OC44MTIgMzIgNTc2IDM5LjE3MiA1NzYgNDhWMjI0QzU3NiAyMzIuODQ0IDU4My4xNTYgMjQwIDU5MiAyNDBTNjA4IDIzMi44NDQgNjA4IDIyNFY0OEM2MDggMjEuNTMxIDU4Ni40NjkgMCA1NjAgMEg4MEM1My41MzEgMCAzMiAyMS41MzEgMzIgNDhWMjI0QzMyIDIzMi44NDQgMzkuMTU2IDI0MCA0OCAyNDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ScreenUsers(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M116 416H76C34.125 416 0 451.875 0 496C0 504.75 7.25 512 16 512S32 504.75 32 496C32 469.5 51.75 448 76 448H116C140.25 448 160 469.5 160 496C160 504.75 167.25 512 176 512S192 504.75 192 496C192 451.875 157.875 416 116 416ZM564 416H524C482.125 416 448 451.875 448 496C448 504.75 455.25 512 464 512S480 504.75 480 496C480 469.5 499.75 448 524 448H564C588.25 448 608 469.5 608 496C608 504.75 615.25 512 624 512S640 504.75 640 496C640 451.875 605.875 416 564 416ZM340 416H300C258.125 416 224 451.875 224 496C224 504.75 231.25 512 240 512S256 504.75 256 496C256 469.5 275.75 448 300 448H340C364.25 448 384 469.5 384 496C384 504.75 391.25 512 400 512S416 504.75 416 496C416 451.875 381.875 416 340 416ZM256 320C256 355.346 284.654 384 320 384S384 355.346 384 320S355.346 256 320 256S256 284.654 256 320ZM352 320C352 337.645 337.645 352 320 352S288 337.645 288 320S302.355 288 320 288S352 302.355 352 320ZM544 256C508.654 256 480 284.654 480 320S508.654 384 544 384S608 355.346 608 320S579.346 256 544 256ZM544 352C526.355 352 512 337.645 512 320S526.355 288 544 288S576 302.355 576 320S561.645 352 544 352ZM96 384C131.346 384 160 355.346 160 320S131.346 256 96 256S32 284.654 32 320S60.654 384 96 384ZM96 288C113.645 288 128 302.355 128 320S113.645 352 96 352S64 337.645 64 320S78.355 288 96 288ZM48 240C56.844 240 64 232.844 64 224V48C64 39.172 71.188 32 80 32H560C568.812 32 576 39.172 576 48V224C576 232.844 583.156 240 592 240S608 232.844 608 224V48C608 21.531 586.469 0 560 0H80C53.531 0 32 21.531 32 48V224C32 232.844 39.156 240 48 240Z" />
        </Icon>
    </>
}