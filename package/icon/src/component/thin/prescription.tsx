
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `prescription` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/prescription?s=thin prescription}
 * @preview ![prescription](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTkuMzEyIDM1Mkw0NDUuNjU2IDIwNS42NTZDNDQ4Ljc4MSAyMDIuNTMxIDQ0OC43ODEgMTk3LjQ2OSA0NDUuNjU2IDE5NC4zNDRTNDM3LjQ2OSAxOTEuMjE5IDQzNC4zNDQgMTk0LjM0NEwyODggMzQwLjY4OEwxNzEuMzEyIDIyNEgxNzZDMjM3Ljc1IDIyNCAyODggMTczLjc1IDI4OCAxMTJTMjM3Ljc1IDAgMTc2IDBIOEMzLjU5NCAwIDAgMy41NzggMCA4VjMxMkMwIDMxNi40MjIgMy41OTQgMzIwIDggMzIwUzE2IDMxNi40MjIgMTYgMzEyVjIyNEgxNDguNjg4TDI3Ni42ODggMzUyTDEzMC4zNDQgNDk4LjM0NEMxMjcuMjE5IDUwMS40NjkgMTI3LjIxOSA1MDYuNTMxIDEzMC4zNDQgNTA5LjY1NkMxMzEuOTA2IDUxMS4yMTkgMTMzLjkzOCA1MTIgMTM2IDUxMlMxNDAuMDk0IDUxMS4yMTkgMTQxLjY1NiA1MDkuNjU2TDI4OCAzNjMuMzEyTDQzNC4zNDQgNTA5LjY1NkM0MzUuOTA2IDUxMS4yMTkgNDM3LjkzOCA1MTIgNDQwIDUxMlM0NDQuMDk0IDUxMS4yMTkgNDQ1LjY1NiA1MDkuNjU2QzQ0OC43ODEgNTA2LjUzMSA0NDguNzgxIDUwMS40NjkgNDQ1LjY1NiA0OTguMzQ0TDI5OS4zMTIgMzUyWk0xNiAxNkgxNzZDMjI4LjkzOCAxNiAyNzIgNTkuMDYyIDI3MiAxMTJTMjI4LjkzOCAyMDggMTc2IDIwOEgxNlYxNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Prescription(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M299.312 352L445.656 205.656C448.781 202.531 448.781 197.469 445.656 194.344S437.469 191.219 434.344 194.344L288 340.688L171.312 224H176C237.75 224 288 173.75 288 112S237.75 0 176 0H8C3.594 0 0 3.578 0 8V312C0 316.422 3.594 320 8 320S16 316.422 16 312V224H148.688L276.688 352L130.344 498.344C127.219 501.469 127.219 506.531 130.344 509.656C131.906 511.219 133.938 512 136 512S140.094 511.219 141.656 509.656L288 363.312L434.344 509.656C435.906 511.219 437.938 512 440 512S444.094 511.219 445.656 509.656C448.781 506.531 448.781 501.469 445.656 498.344L299.312 352ZM16 16H176C228.938 16 272 59.062 272 112S228.938 208 176 208H16V16Z" />
        </Icon>
    </>
}