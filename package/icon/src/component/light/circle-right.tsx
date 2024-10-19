
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-right` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-right?s=light circle-right}
 * @preview ![circle-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODguMjgxIDI4NC4yODFDNDAzLjQwNiAyNjkuMTU2IDQwMy42MDkgMjQzLjAzMSAzODguMDc4IDIyNy41MzFMMjkyLjI4MSAxMzUuMDMxQzI4MC43OTcgMTIzLjU2MyAyNjMuNjg4IDEyMC4xNTYgMjQ4LjY4OCAxMjYuMzQ0QzIzMy42ODggMTMyLjU2MiAyMjQgMTQ3LjA2MiAyMjQgMTYzLjMxMlYxOTJIMTUyQzEyOS45MzggMTkyIDExMiAyMDkuOTM4IDExMiAyMzJWMjgwQzExMiAzMDIuMDYyIDEyOS45MzggMzIwIDE1MiAzMjBIMjI0VjM0OC42ODhDMjI0IDM2NC45MzggMjMzLjY4OCAzNzkuNDM4IDI0OC42ODggMzg1LjY1NkMyNjMuNjQxIDM5MS44NDQgMjgwLjY4OCAzODguNDY5IDI5Mi4xNzIgMzc3LjA5NEwzODguMjgxIDI4NC4yODFaTTI1NiAzNDguNjg4VjI4OEgxNTJDMTQ3LjU5NCAyODggMTQ0IDI4NC40MDYgMTQ0IDI4MFYyMzJDMTQ0IDIyNy41OTQgMTQ3LjU5NCAyMjQgMTUyIDIyNEgyNTZWMTYzLjMxMkMyNTYgMTU2Ljg5OCAyNjQuMDQ3IDE1Mi4wNTcgMjY5Ljg1OSAxNTcuODQ0TDM2NS42NTYgMjUwLjM0NEMzNjkuODYxIDI1NC41MDYgMzY3LjQ1MyAyNTkuODc3IDM2NS44NTkgMjYxLjQ2OUwyNjkuODU5IDM1NC4xNTZMMjY5LjY1NiAzNTQuMzQ0QzI2NC44MDUgMzU5LjE5NSAyNTYgMzU2LjEyMSAyNTYgMzQ4LjY4OFpNNDk2IDI1NkM0OTYgMTIzLjQ1MSAzODguNTQ5IDE2IDI1NiAxNlMxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZaTTQ4IDI1NkM0OCAxNDEuMzA5IDE0MS4zMDkgNDggMjU2IDQ4UzQ2NCAxNDEuMzA5IDQ2NCAyNTZTMzcwLjY5MSA0NjQgMjU2IDQ2NFM0OCAzNzAuNjkxIDQ4IDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M388.281 284.281C403.406 269.156 403.609 243.031 388.078 227.531L292.281 135.031C280.797 123.563 263.688 120.156 248.688 126.344C233.688 132.562 224 147.062 224 163.312V192H152C129.938 192 112 209.938 112 232V280C112 302.062 129.938 320 152 320H224V348.688C224 364.938 233.688 379.438 248.688 385.656C263.641 391.844 280.688 388.469 292.172 377.094L388.281 284.281ZM256 348.688V288H152C147.594 288 144 284.406 144 280V232C144 227.594 147.594 224 152 224H256V163.312C256 156.898 264.047 152.057 269.859 157.844L365.656 250.344C369.861 254.506 367.453 259.877 365.859 261.469L269.859 354.156L269.656 354.344C264.805 359.195 256 356.121 256 348.688ZM496 256C496 123.451 388.549 16 256 16S16 123.451 16 256S123.451 496 256 496S496 388.549 496 256ZM48 256C48 141.309 141.309 48 256 48S464 141.309 464 256S370.691 464 256 464S48 370.691 48 256Z" />
        </Icon>
    </>
}