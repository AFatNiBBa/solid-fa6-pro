
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `calendar-pen` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-pen?s=solid calendar-pen}
 * @preview ![calendar-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDQ2NEMwIDQ5MC41IDIxLjUgNTEyIDQ4IDUxMkg0MDBDNDI2LjUgNTEyIDQ0OCA0OTAuNSA0NDggNDY0VjE5MkgwVjQ2NFpNMjY2LjcyNyAyNjEuMjczQzI3My43NTYgMjU0LjI0MiAyODUuMTcgMjU0LjI0MiAyOTIuMjAxIDI2MS4yNzNMMzE0LjczNiAyODMuODA3QzMyMS43NjYgMjkwLjgzOCAzMjEuNzY2IDMwMi4yNCAzMTQuNzM2IDMwOS4yNzdMMjk2LjQ5OCAzMjcuNTE0TDI0OC40OTIgMjc5LjUwOEwyNjYuNzI3IDI2MS4yNzNaTTEzNy42NDkgMzkzLjE5OEMxMzguMTEzIDM5MC44NzUgMTM5LjI1NSAzODguNzQxIDE0MC45MzEgMzg3LjA2NUwyMzEuNTA4IDI5Ni40OTJMMjc5LjUxMiAzNDQuNDk2TDE4OC45MjkgNDM1LjA2MUMxODcuMjU0IDQzNi43MzYgMTg1LjEyMSA0MzcuODc4IDE4Mi43OTggNDM4LjM0MkwxMzUuMTg4IDQ0Ny44NjNDMTMwLjk5IDQ0OC43MDMgMTI3LjI5IDQ0NS4wMDIgMTI4LjEyOSA0NDAuODA1TDEzNy42NDkgMzkzLjE5OFpNNDAwIDY0SDM1MlYzMkMzNTIgMTQuNCAzMzcuNiAwIDMyMCAwSDMyMEMzMDIuNCAwIDI4OCAxNC40IDI4OCAzMlY2NEgxNjBWMzJDMTYwIDE0LjQgMTQ1LjYgMCAxMjggMEgxMjhDMTEwLjQgMCA5NiAxNC40IDk2IDMyVjY0SDQ4QzIxLjQ5IDY0IDAgODUuNDkgMCAxMTJWMTYwSDQ0OFYxMTJDNDQ4IDg1LjQ5IDQyNi41MSA2NCA0MDAgNjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CalendarPen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M0 464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V192H0V464ZM266.727 261.273C273.756 254.242 285.17 254.242 292.201 261.273L314.736 283.807C321.766 290.838 321.766 302.24 314.736 309.277L296.498 327.514L248.492 279.508L266.727 261.273ZM137.649 393.198C138.113 390.875 139.255 388.741 140.931 387.065L231.508 296.492L279.512 344.496L188.929 435.061C187.254 436.736 185.121 437.878 182.798 438.342L135.188 447.863C130.99 448.703 127.29 445.002 128.129 440.805L137.649 393.198ZM400 64H352V32C352 14.4 337.6 0 320 0H320C302.4 0 288 14.4 288 32V64H160V32C160 14.4 145.6 0 128 0H128C110.4 0 96 14.4 96 32V64H48C21.49 64 0 85.49 0 112V160H448V112C448 85.49 426.51 64 400 64Z" />
        </Icon>
    </>
}