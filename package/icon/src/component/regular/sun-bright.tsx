
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sun-bright` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sun-bright?s=regular sun-bright}
 * @preview ![sun-bright](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTQ0QzE5NC4xNDUgMTQ0IDE0NCAxOTQuMTQzIDE0NCAyNTZDMTQ0IDMxNy44NTUgMTk0LjE0NSAzNjggMjU2IDM2OFMzNjggMzE3Ljg1NSAzNjggMjU2QzM2OCAxOTQuMTQzIDMxNy44NTUgMTQ0IDI1NiAxNDRaTTI1NiAzMjBDMjIwLjcxMSAzMjAgMTkyIDI5MS4yODkgMTkyIDI1NkMxOTIgMjIwLjcwOSAyMjAuNzExIDE5MiAyNTYgMTkyUzMyMCAyMjAuNzA5IDMyMCAyNTZDMzIwIDI5MS4yODkgMjkxLjI4OSAzMjAgMjU2IDMyMFpNMjU2IDExMkMyNjkuMjUgMTEyIDI4MCAxMDEuMjUgMjgwIDg4VjI0QzI4MCAxMC43NSAyNjkuMjUgMCAyNTYgMFMyMzIgMTAuNzUgMjMyIDI0Vjg4QzIzMiAxMDEuMjUgMjQyLjc1IDExMiAyNTYgMTEyWk0yNTYgNDAwQzI0Mi43NSA0MDAgMjMyIDQxMC43NSAyMzIgNDI0VjQ4OEMyMzIgNTAxLjI1IDI0Mi43NSA1MTIgMjU2IDUxMlMyODAgNTAxLjI1IDI4MCA0ODhWNDI0QzI4MCA0MTAuNzUgMjY5LjI1IDQwMCAyNTYgNDAwWk00ODggMjMySDQyNEM0MTAuNzUgMjMyIDQwMCAyNDIuNzUgNDAwIDI1NlM0MTAuNzUgMjgwIDQyNCAyODBINDg4QzUwMS4yNSAyODAgNTEyIDI2OS4yNSA1MTIgMjU2UzUwMS4yNSAyMzIgNDg4IDIzMlpNMTEyIDI1NkMxMTIgMjQyLjc1IDEwMS4yNSAyMzIgODggMjMySDI0QzEwLjc1IDIzMiAwIDI0Mi43NSAwIDI1NlMxMC43NSAyODAgMjQgMjgwSDg4QzEwMS4yNSAyODAgMTEyIDI2OS4yNSAxMTIgMjU2Wk0zOTEuNzY2IDM1Ny44MTJDMzgyLjQyMiAzNDguNDM3IDM2Ny4yMDMgMzQ4LjQzNyAzNTcuODI4IDM1Ny44MTJTMzQ4LjQ1MyAzODIuMzc1IDM1Ny44MjggMzkxLjc1TDQwMy4wNzggNDM3LjAzMUM0MDcuNzUgNDQxLjcxOSA0MTMuOTA2IDQ0NC4wNjMgNDIwLjA0NyA0NDQuMDYzUzQzMi4zMjggNDQxLjcxOSA0MzcuMDE2IDQzNy4wMzFDNDQ2LjM5MSA0MjcuNjU2IDQ0Ni4zOTEgNDEyLjQ2OSA0MzcuMDE2IDQwMy4wOTRMMzkxLjc2NiAzNTcuODEyWk0xMjAuMjM0IDE1NC4xODhDMTI0LjkwNiAxNTguODc1IDEzMS4wNjIgMTYxLjIxOSAxMzcuMjAzIDE2MS4yMTlTMTQ5LjQ4NCAxNTguODc1IDE1NC4xNzIgMTU0LjE4OEMxNjMuNTQ3IDE0NC44MTIgMTYzLjU0NyAxMjkuNjI1IDE1NC4xNzIgMTIwLjI1TDEwOC45MjIgNzQuOTY5Qzk5LjU3OCA2NS41OTQgODQuMzU5IDY1LjU5NCA3NC45ODQgNzQuOTY5UzY1LjYwOSA5OS41MzEgNzQuOTg0IDEwOC45MDZMMTIwLjIzNCAxNTQuMTg4Wk0zNzQuNzk3IDE2MS4yMTlDMzgwLjkzNyAxNjEuMjE5IDM4Ny4wOTQgMTU4Ljg3NSAzOTEuNzY2IDE1NC4xODdMNDM3LjAxNiAxMDguOTA2QzQ0Ni4zOTEgOTkuNTMxIDQ0Ni4zOTEgODQuMzQ0IDQzNy4wMTYgNzQuOTY5UzQxMi40MjIgNjUuNTk0IDQwMy4wNzggNzQuOTY5TDM1Ny44MjggMTIwLjI1QzM0OC40NTMgMTI5LjYyNSAzNDguNDUzIDE0NC44MTIgMzU3LjgyOCAxNTQuMTg3QzM2Mi41MTYgMTU4Ljg3NSAzNjguNjU2IDE2MS4yMTkgMzc0Ljc5NyAxNjEuMjE5Wk0xMjAuMjM0IDM1Ny44MTJMNzQuOTg0IDQwMy4wOTRDNjUuNjA5IDQxMi40NjkgNjUuNjA5IDQyNy42NTYgNzQuOTg0IDQzNy4wMzFDNzkuNjcyIDQ0MS43MTkgODUuODEyIDQ0NC4wNjMgOTEuOTUzIDQ0NC4wNjNTMTA0LjI1IDQ0MS43MTkgMTA4LjkyMiA0MzcuMDMxTDE1NC4xNzIgMzkxLjc1QzE2My41NDcgMzgyLjM3NSAxNjMuNTQ3IDM2Ny4xODggMTU0LjE3MiAzNTcuODEyUzEyOS41NzggMzQ4LjQzOCAxMjAuMjM0IDM1Ny44MTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SunBright(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 144C194.145 144 144 194.143 144 256C144 317.855 194.145 368 256 368S368 317.855 368 256C368 194.143 317.855 144 256 144ZM256 320C220.711 320 192 291.289 192 256C192 220.709 220.711 192 256 192S320 220.709 320 256C320 291.289 291.289 320 256 320ZM256 112C269.25 112 280 101.25 280 88V24C280 10.75 269.25 0 256 0S232 10.75 232 24V88C232 101.25 242.75 112 256 112ZM256 400C242.75 400 232 410.75 232 424V488C232 501.25 242.75 512 256 512S280 501.25 280 488V424C280 410.75 269.25 400 256 400ZM488 232H424C410.75 232 400 242.75 400 256S410.75 280 424 280H488C501.25 280 512 269.25 512 256S501.25 232 488 232ZM112 256C112 242.75 101.25 232 88 232H24C10.75 232 0 242.75 0 256S10.75 280 24 280H88C101.25 280 112 269.25 112 256ZM391.766 357.812C382.422 348.437 367.203 348.437 357.828 357.812S348.453 382.375 357.828 391.75L403.078 437.031C407.75 441.719 413.906 444.063 420.047 444.063S432.328 441.719 437.016 437.031C446.391 427.656 446.391 412.469 437.016 403.094L391.766 357.812ZM120.234 154.188C124.906 158.875 131.062 161.219 137.203 161.219S149.484 158.875 154.172 154.188C163.547 144.812 163.547 129.625 154.172 120.25L108.922 74.969C99.578 65.594 84.359 65.594 74.984 74.969S65.609 99.531 74.984 108.906L120.234 154.188ZM374.797 161.219C380.937 161.219 387.094 158.875 391.766 154.187L437.016 108.906C446.391 99.531 446.391 84.344 437.016 74.969S412.422 65.594 403.078 74.969L357.828 120.25C348.453 129.625 348.453 144.812 357.828 154.187C362.516 158.875 368.656 161.219 374.797 161.219ZM120.234 357.812L74.984 403.094C65.609 412.469 65.609 427.656 74.984 437.031C79.672 441.719 85.812 444.063 91.953 444.063S104.25 441.719 108.922 437.031L154.172 391.75C163.547 382.375 163.547 367.188 154.172 357.812S129.578 348.438 120.234 357.812Z" />
        </Icon>
    </>
}