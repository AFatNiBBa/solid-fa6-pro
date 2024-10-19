
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-envelope` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-envelope?s=solid circle-envelope}
 * @preview ![circle-envelope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTM4NCAzMjBDMzg0IDMzNy42NzIgMzY5LjY3NCAzNTIgMzUyIDM1MkgxNjBDMTQyLjMyNiAzNTIgMTI4IDMzNy42NzIgMTI4IDMyMFYyMzguMDM1TDI1MC4wNjIgMjg2Ljg1OUMyNTEuOTY5IDI4Ny42MjUgMjUzLjk2OSAyODggMjU2IDI4OFMyNjAuMDMxIDI4Ny42MjUgMjYxLjkzOCAyODYuODU5TDM4NCAyMzguMDM1VjMyMFpNMzg0IDIwMy41NjZMMjU2IDI1NC43NjZMMTI4IDIwMy41NjZWMTkyQzEyOCAxNzQuMzI2IDE0Mi4zMjYgMTYwIDE2MCAxNjBIMzUyQzM2OS42NzQgMTYwIDM4NCAxNzQuMzI2IDM4NCAxOTJWMjAzLjU2NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleEnvelope(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM384 320C384 337.672 369.674 352 352 352H160C142.326 352 128 337.672 128 320V238.035L250.062 286.859C251.969 287.625 253.969 288 256 288S260.031 287.625 261.938 286.859L384 238.035V320ZM384 203.566L256 254.766L128 203.566V192C128 174.326 142.326 160 160 160H352C369.674 160 384 174.326 384 192V203.566Z" />
        </Icon>
    </>
}