
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `border-bottom` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-bottom?s=light border-bottom}
 * @preview ![border-bottom](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgODhDMjM3LjI1NCA4OCAyNDggNzcuMjU0IDI0OCA2NEMyNDggNTAuNzQ0IDIzNy4yNTQgNDAgMjI0IDQwUzIwMCA1MC43NDQgMjAwIDY0QzIwMCA3Ny4yNTQgMjEwLjc0NiA4OCAyMjQgODhaTTIyNCAxODRDMjM3LjI1NCAxODQgMjQ4IDE3My4yNTQgMjQ4IDE2MEMyNDggMTQ2Ljc0NCAyMzcuMjU0IDEzNiAyMjQgMTM2UzIwMCAxNDYuNzQ0IDIwMCAxNjBDMjAwIDE3My4yNTQgMjEwLjc0NiAxODQgMjI0IDE4NFpNMzIwIDg4QzMzMy4yNTQgODggMzQ0IDc3LjI1NCAzNDQgNjRDMzQ0IDUwLjc0NCAzMzMuMjU0IDQwIDMyMCA0MFMyOTYgNTAuNzQ0IDI5NiA2NEMyOTYgNzcuMjU0IDMwNi43NDYgODggMzIwIDg4Wk00MTYgMzc2QzQyOS4yNTQgMzc2IDQ0MCAzNjUuMjU0IDQ0MCAzNTJDNDQwIDMzOC43NDQgNDI5LjI1NCAzMjggNDE2IDMyOFMzOTIgMzM4Ljc0NCAzOTIgMzUyQzM5MiAzNjUuMjU0IDQwMi43NDYgMzc2IDQxNiAzNzZaTTMyMCAyODBDMzMzLjI1NCAyODAgMzQ0IDI2OS4yNTQgMzQ0IDI1NkMzNDQgMjQyLjc0NCAzMzMuMjU0IDIzMiAzMjAgMjMyUzI5NiAyNDIuNzQ0IDI5NiAyNTZDMjk2IDI2OS4yNTQgMzA2Ljc0NiAyODAgMzIwIDI4MFpNNDE2IDg4QzQyOS4yNTQgODggNDQwIDc3LjI1NCA0NDAgNjRDNDQwIDUwLjc0NCA0MjkuMjU0IDQwIDQxNiA0MFMzOTIgNTAuNzQ0IDM5MiA2NEMzOTIgNzcuMjU0IDQwMi43NDYgODggNDE2IDg4Wk00MTYgMjgwQzQyOS4yNTQgMjgwIDQ0MCAyNjkuMjU0IDQ0MCAyNTZDNDQwIDI0Mi43NDQgNDI5LjI1NCAyMzIgNDE2IDIzMlMzOTIgMjQyLjc0NCAzOTIgMjU2QzM5MiAyNjkuMjU0IDQwMi43NDYgMjgwIDQxNiAyODBaTTQxNiAxODRDNDI5LjI1NCAxODQgNDQwIDE3My4yNTQgNDQwIDE2MEM0NDAgMTQ2Ljc0NCA0MjkuMjU0IDEzNiA0MTYgMTM2UzM5MiAxNDYuNzQ0IDM5MiAxNjBDMzkyIDE3My4yNTQgNDAyLjc0NiAxODQgNDE2IDE4NFpNMzIgMzc2QzQ1LjI1NCAzNzYgNTYgMzY1LjI1NCA1NiAzNTJDNTYgMzM4Ljc0NCA0NS4yNTQgMzI4IDMyIDMyOFM4IDMzOC43NDQgOCAzNTJDOCAzNjUuMjU0IDE4Ljc0NiAzNzYgMzIgMzc2Wk0zMiA4OEM0NS4yNTQgODggNTYgNzcuMjU0IDU2IDY0QzU2IDUwLjc0NCA0NS4yNTQgNDAgMzIgNDBTOCA1MC43NDQgOCA2NEM4IDc3LjI1NCAxOC43NDYgODggMzIgODhaTTMyIDI4MEM0NS4yNTQgMjgwIDU2IDI2OS4yNTQgNTYgMjU2QzU2IDI0Mi43NDQgNDUuMjU0IDIzMiAzMiAyMzJTOCAyNDIuNzQ0IDggMjU2QzggMjY5LjI1NCAxOC43NDYgMjgwIDMyIDI4MFpNMzIgMTg0QzQ1LjI1NCAxODQgNTYgMTczLjI1NCA1NiAxNjBDNTYgMTQ2Ljc0NCA0NS4yNTQgMTM2IDMyIDEzNlM4IDE0Ni43NDQgOCAxNjBDOCAxNzMuMjU0IDE4Ljc0NiAxODQgMzIgMTg0Wk00MzIgNDQ4SDE2QzcuMTU2IDQ0OCAwIDQ1NS4xNTYgMCA0NjRTNy4xNTYgNDgwIDE2IDQ4MEg0MzJDNDQwLjg0NCA0ODAgNDQ4IDQ3Mi44NDQgNDQ4IDQ2NFM0NDAuODQ0IDQ0OCA0MzIgNDQ4Wk0xMjggMjgwQzE0MS4yNTQgMjgwIDE1MiAyNjkuMjU0IDE1MiAyNTZDMTUyIDI0Mi43NDQgMTQxLjI1NCAyMzIgMTI4IDIzMlMxMDQgMjQyLjc0NCAxMDQgMjU2QzEwNCAyNjkuMjU0IDExNC43NDYgMjgwIDEyOCAyODBaTTIyNCAzNzZDMjM3LjI1NCAzNzYgMjQ4IDM2NS4yNTQgMjQ4IDM1MkMyNDggMzM4Ljc0NCAyMzcuMjU0IDMyOCAyMjQgMzI4UzIwMCAzMzguNzQ0IDIwMCAzNTJDMjAwIDM2NS4yNTQgMjEwLjc0NiAzNzYgMjI0IDM3NlpNMjI0IDI4MEMyMzcuMjU0IDI4MCAyNDggMjY5LjI1NCAyNDggMjU2QzI0OCAyNDIuNzQ0IDIzNy4yNTQgMjMyIDIyNCAyMzJTMjAwIDI0Mi43NDQgMjAwIDI1NkMyMDAgMjY5LjI1NCAyMTAuNzQ2IDI4MCAyMjQgMjgwWk0xMjggODhDMTQxLjI1NCA4OCAxNTIgNzcuMjU0IDE1MiA2NEMxNTIgNTAuNzQ0IDE0MS4yNTQgNDAgMTI4IDQwUzEwNCA1MC43NDQgMTA0IDY0QzEwNCA3Ny4yNTQgMTE0Ljc0NiA4OCAxMjggODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BorderBottom(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 88C237.254 88 248 77.254 248 64C248 50.744 237.254 40 224 40S200 50.744 200 64C200 77.254 210.746 88 224 88ZM224 184C237.254 184 248 173.254 248 160C248 146.744 237.254 136 224 136S200 146.744 200 160C200 173.254 210.746 184 224 184ZM320 88C333.254 88 344 77.254 344 64C344 50.744 333.254 40 320 40S296 50.744 296 64C296 77.254 306.746 88 320 88ZM416 376C429.254 376 440 365.254 440 352C440 338.744 429.254 328 416 328S392 338.744 392 352C392 365.254 402.746 376 416 376ZM320 280C333.254 280 344 269.254 344 256C344 242.744 333.254 232 320 232S296 242.744 296 256C296 269.254 306.746 280 320 280ZM416 88C429.254 88 440 77.254 440 64C440 50.744 429.254 40 416 40S392 50.744 392 64C392 77.254 402.746 88 416 88ZM416 280C429.254 280 440 269.254 440 256C440 242.744 429.254 232 416 232S392 242.744 392 256C392 269.254 402.746 280 416 280ZM416 184C429.254 184 440 173.254 440 160C440 146.744 429.254 136 416 136S392 146.744 392 160C392 173.254 402.746 184 416 184ZM32 376C45.254 376 56 365.254 56 352C56 338.744 45.254 328 32 328S8 338.744 8 352C8 365.254 18.746 376 32 376ZM32 88C45.254 88 56 77.254 56 64C56 50.744 45.254 40 32 40S8 50.744 8 64C8 77.254 18.746 88 32 88ZM32 280C45.254 280 56 269.254 56 256C56 242.744 45.254 232 32 232S8 242.744 8 256C8 269.254 18.746 280 32 280ZM32 184C45.254 184 56 173.254 56 160C56 146.744 45.254 136 32 136S8 146.744 8 160C8 173.254 18.746 184 32 184ZM432 448H16C7.156 448 0 455.156 0 464S7.156 480 16 480H432C440.844 480 448 472.844 448 464S440.844 448 432 448ZM128 280C141.254 280 152 269.254 152 256C152 242.744 141.254 232 128 232S104 242.744 104 256C104 269.254 114.746 280 128 280ZM224 376C237.254 376 248 365.254 248 352C248 338.744 237.254 328 224 328S200 338.744 200 352C200 365.254 210.746 376 224 376ZM224 280C237.254 280 248 269.254 248 256C248 242.744 237.254 232 224 232S200 242.744 200 256C200 269.254 210.746 280 224 280ZM128 88C141.254 88 152 77.254 152 64C152 50.744 141.254 40 128 40S104 50.744 104 64C104 77.254 114.746 88 128 88Z" />
        </Icon>
    </>
}