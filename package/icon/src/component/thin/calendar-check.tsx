
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `calendar-check` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-check?s=thin calendar-check}
 * @preview ![calendar-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgNjRIMzM2VjhDMzM2IDMuNTc4IDMzMi40MDYgMCAzMjggMFMzMjAgMy41NzggMzIwIDhWNjRIMTI4VjhDMTI4IDMuNTc4IDEyNC40MDYgMCAxMjAgMFMxMTIgMy41NzggMTEyIDhWNjRINDhDMjEuNSA2NCAwIDg1LjUgMCAxMTJWNDY0QzAgNDkwLjUgMjEuNSA1MTIgNDggNTEySDQwMEM0MjYuNSA1MTIgNDQ4IDQ5MC41IDQ0OCA0NjRWMTEyQzQ0OCA4NS41IDQyNi41IDY0IDQwMCA2NFpNNDMyIDQ2NEM0MzIgNDgxLjY0NSA0MTcuNjQ1IDQ5NiA0MDAgNDk2SDQ4QzMwLjM1NSA0OTYgMTYgNDgxLjY0NSAxNiA0NjRWMjA4SDQzMlY0NjRaTTQzMiAxOTJIMTZWMTEyQzE2IDk0LjM1NSAzMC4zNTUgODAgNDggODBIMTEyVjEyOEMxMTIgMTMyLjQyMiAxMTUuNTk0IDEzNiAxMjAgMTM2UzEyOCAxMzIuNDIyIDEyOCAxMjhWODBIMzIwVjEyOEMzMjAgMTMyLjQyMiAzMjMuNTk0IDEzNiAzMjggMTM2UzMzNiAxMzIuNDIyIDMzNiAxMjhWODBINDAwQzQxNy42NDUgODAgNDMyIDk0LjM1NSA0MzIgMTEyVjE5MlpNMTkwLjM0NCA0MTcuNjU2QzE5MS45MDYgNDE5LjIxOSAxOTMuOTM4IDQyMCAxOTYgNDIwUzIwMC4wOTQgNDE5LjIxOSAyMDEuNjU2IDQxNy42NTZMMzIxLjY1NiAyOTcuNjU2QzMyNC43ODEgMjk0LjUzMSAzMjQuNzgxIDI4OS40NjkgMzIxLjY1NiAyODYuMzQ0UzMxMy40NjkgMjgzLjIxOSAzMTAuMzQ0IDI4Ni4zNDRMMTk2IDQwMC42ODhMMTM3LjY1NiAzNDIuMzQ0QzEzNC41MzEgMzM5LjIxOSAxMjkuNDY5IDMzOS4yMTkgMTI2LjM0NCAzNDIuMzQ0UzEyMy4yMTkgMzUwLjUzMSAxMjYuMzQ0IDM1My42NTZMMTkwLjM0NCA0MTcuNjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CalendarCheck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400 64H336V8C336 3.578 332.406 0 328 0S320 3.578 320 8V64H128V8C128 3.578 124.406 0 120 0S112 3.578 112 8V64H48C21.5 64 0 85.5 0 112V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V112C448 85.5 426.5 64 400 64ZM432 464C432 481.645 417.645 496 400 496H48C30.355 496 16 481.645 16 464V208H432V464ZM432 192H16V112C16 94.355 30.355 80 48 80H112V128C112 132.422 115.594 136 120 136S128 132.422 128 128V80H320V128C320 132.422 323.594 136 328 136S336 132.422 336 128V80H400C417.645 80 432 94.355 432 112V192ZM190.344 417.656C191.906 419.219 193.938 420 196 420S200.094 419.219 201.656 417.656L321.656 297.656C324.781 294.531 324.781 289.469 321.656 286.344S313.469 283.219 310.344 286.344L196 400.688L137.656 342.344C134.531 339.219 129.469 339.219 126.344 342.344S123.219 350.531 126.344 353.656L190.344 417.656Z" />
        </Icon>
    </>
}