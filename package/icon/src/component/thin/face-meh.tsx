
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `face-meh` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-meh?s=thin face-meh}
 * @preview ![face-meh](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQxOCAxNiAxNiAxMjMuNDIyIDE2IDI1NlMxMjMuNDE4IDQ5NiAyNTYgNDk2UzQ5NiAzODguNTc4IDQ5NiAyNTZTMzg4LjU4MiAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NCA0ODAgMzIgMzc5LjUxNiAzMiAyNTZTMTMyLjQ4NCAzMiAyNTYgMzJTNDgwIDEzMi40ODQgNDgwIDI1NlMzNzkuNTE2IDQ4MCAyNTYgNDgwWk0zMzYgMjI0QzM0NC44NDQgMjI0IDM1MiAyMTYuODUyIDM1MiAyMDhTMzQ0Ljg0NCAxOTIgMzM2IDE5MlMzMjAgMTk5LjE0OCAzMjAgMjA4UzMyNy4xNTYgMjI0IDMzNiAyMjRaTTE3NiAyMjRDMTg0Ljg0NCAyMjQgMTkyIDIxNi44NTIgMTkyIDIwOFMxODQuODQ0IDE5MiAxNzYgMTkyUzE2MCAxOTkuMTQ4IDE2MCAyMDhTMTY3LjE1NiAyMjQgMTc2IDIyNFpNMzUyIDM0NEgxNjBDMTU1LjU5NCAzNDQgMTUyIDM0Ny41NzggMTUyIDM1MlMxNTUuNTk0IDM2MCAxNjAgMzYwSDM1MkMzNTYuNDA2IDM2MCAzNjAgMzU2LjQyMiAzNjAgMzUyUzM1Ni40MDYgMzQ0IDM1MiAzNDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FaceMeh(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.418 16 16 123.422 16 256S123.418 496 256 496S496 388.578 496 256S388.582 16 256 16ZM256 480C132.484 480 32 379.516 32 256S132.484 32 256 32S480 132.484 480 256S379.516 480 256 480ZM336 224C344.844 224 352 216.852 352 208S344.844 192 336 192S320 199.148 320 208S327.156 224 336 224ZM176 224C184.844 224 192 216.852 192 208S184.844 192 176 192S160 199.148 160 208S167.156 224 176 224ZM352 344H160C155.594 344 152 347.578 152 352S155.594 360 160 360H352C356.406 360 360 356.422 360 352S356.406 344 352 344Z" />
        </Icon>
    </>
}