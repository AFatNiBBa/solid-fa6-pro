
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-down-to-bracket` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-bracket?s=light arrow-down-to-bracket}
 * @preview ![arrow-down-to-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMzUyQzIyOC4wOTQgMzUyIDIzMi4xODggMzUwLjQzOCAyMzUuMzEyIDM0Ny4zMTJMMzc5LjMxMiAyMDMuMzEyQzM4NS41NjIgMTk3LjA2MiAzODUuNTYyIDE4Ni45MzcgMzc5LjMxMiAxODAuNjg4UzM2Mi45MzcgMTc0LjQzOCAzNTYuNjg4IDE4MC42ODhMMjQwIDI5Ny4zNzVWMTZDMjQwIDcuMTU2IDIzMi44NDQgMCAyMjQgMFMyMDggNy4xNTYgMjA4IDE2VjI5Ny4zNzVMOTEuMzEyIDE4MC42ODhDODUuMDYyIDE3NC40MzggNzQuOTM3IDE3NC40MzggNjguNjg4IDE4MC42ODhTNjIuNDM4IDE5Ny4wNjMgNjguNjg4IDIwMy4zMTJMMjEyLjY4OCAzNDcuMzEyQzIxNS44MTIgMzUwLjQzOCAyMTkuOTA2IDM1MiAyMjQgMzUyWk00NDggNDMyVjMzNkM0NDggMzI3LjE1NiA0NDAuODQ0IDMyMCA0MzIgMzIwUzQxNiAzMjcuMTU2IDQxNiAzMzZWNDMyQzQxNiA0NTguNDY5IDM5NC40NjkgNDgwIDM2OCA0ODBIODBDNTMuNTMxIDQ4MCAzMiA0NTguNDY5IDMyIDQzMlYzMzZDMzIgMzI3LjE1NiAyNC44NDQgMzIwIDE2IDMyMFMwIDMyNy4xNTYgMCAzMzZWNDMyQzAgNDc2LjEyNSAzNS44NzUgNTEyIDgwIDUxMkgzNjhDNDEyLjEyNSA1MTIgNDQ4IDQ3Ni4xMjUgNDQ4IDQzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowDownToBracket(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 352C228.094 352 232.188 350.438 235.312 347.312L379.312 203.312C385.562 197.062 385.562 186.937 379.312 180.688S362.937 174.438 356.688 180.688L240 297.375V16C240 7.156 232.844 0 224 0S208 7.156 208 16V297.375L91.312 180.688C85.062 174.438 74.937 174.438 68.688 180.688S62.438 197.063 68.688 203.312L212.688 347.312C215.812 350.438 219.906 352 224 352ZM448 432V336C448 327.156 440.844 320 432 320S416 327.156 416 336V432C416 458.469 394.469 480 368 480H80C53.531 480 32 458.469 32 432V336C32 327.156 24.844 320 16 320S0 327.156 0 336V432C0 476.125 35.875 512 80 512H368C412.125 512 448 476.125 448 432Z" />
        </Icon>
    </>
}