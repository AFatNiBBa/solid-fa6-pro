
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `car-building` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/car-building?s=duotone car-building}
 * @preview ![car-building](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyMCAyNzJDMjEzLjM3NSAyNzIgMjA4IDI2Ni42MjUgMjA4IDI2MFYyMjBDMjA4IDIxMy4zNzUgMjEzLjM3NSAyMDggMjIwIDIwOEgyNTIuMjY2TDI1My44NTkgMjAzLjIyMUMyNjguMTg4IDE2MC4yMjkgMzA3LjE5MSAxMzEuMDMzIDM1MiAxMjguNDk0VjMyQzM1MiAxNC40IDMzNy42MDIgMCAzMjAgMEgzMkMxNC4zOTggMCAwIDE0LjQgMCAzMlY0NDhDMCA0NjUuNjcyIDE0LjMyOCA0ODAgMzIgNDgwSDE5MlYzNDJDMTkyIDMxMy4xMDcgMjA2LjU2MiAyODcuMjY0IDIzMC4wNDcgMjcySDIyMFpNMjA4IDkyQzIwOCA4NS4zNzUgMjEzLjM3NSA4MCAyMjAgODBIMjYwQzI2Ni42MjUgODAgMjcyIDg1LjM3NSAyNzIgOTJWMTMyQzI3MiAxMzguNjI1IDI2Ni42MjUgMTQ0IDI2MCAxNDRIMjIwQzIxMy4zNzUgMTQ0IDIwOCAxMzguNjI1IDIwOCAxMzJWOTJaTTE0NCAzODhDMTQ0IDM5NC42MjUgMTM4LjYyNSA0MDAgMTMyIDQwMEg5MkM4NS4zNzUgNDAwIDgwIDM5NC42MjUgODAgMzg4VjM0OEM4MCAzNDEuMzc1IDg1LjM3NSAzMzYgOTIgMzM2SDEzMkMxMzguNjI1IDMzNiAxNDQgMzQxLjM3NSAxNDQgMzQ4VjM4OFpNMTQ0IDI2MEMxNDQgMjY2LjYyNSAxMzguNjI1IDI3MiAxMzIgMjcySDkyQzg1LjM3NSAyNzIgODAgMjY2LjYyNSA4MCAyNjBWMjIwQzgwIDIxMy4zNzUgODUuMzc1IDIwOCA5MiAyMDhIMTMyQzEzOC42MjUgMjA4IDE0NCAyMTMuMzc1IDE0NCAyMjBWMjYwWk0xNDQgMTMyQzE0NCAxMzguNjI1IDEzOC42MjUgMTQ0IDEzMiAxNDRIOTJDODUuMzc1IDE0NCA4MCAxMzguNjI1IDgwIDEzMlY5MkM4MCA4NS4zNzUgODUuMzc1IDgwIDkyIDgwSDEzMkMxMzguNjI1IDgwIDE0NCA4NS4zNzUgMTQ0IDkyVjEzMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjA2LjUxNiAyOTMuNTUxTDU3OS43ODEgMjEzLjMzNEM1NjkuMTY0IDE4MS40ODIgNTM5LjM1OSAxNjAgNTA1Ljc4NSAxNjBIMzU4LjIxOUMzMjQuNjQ1IDE2MCAyOTQuODM2IDE4MS40ODYgMjg0LjIxOSAyMTMuMzRMMjU3LjQ4NCAyOTMuNTUxQzIzNy45MzggMzAxLjAyOSAyMjQgMzE5LjgyNiAyMjQgMzQyVjQ4MEMyMjQgNDk3LjY3MiAyMzguMzI4IDUxMiAyNTYgNTEySDI3MkMyODkuNjcyIDUxMiAzMDQgNDk3LjY3MiAzMDQgNDgwVjQ0N0g1NjBWNDgwQzU2MCA0OTcuNjcyIDU3NC4zMjggNTEyIDU5MiA1MTJINjA4QzYyNS42NzIgNTEyIDY0MCA0OTcuNjcyIDY0MCA0ODBWMzQyQzY0MCAzMTkuODI2IDYyNi4wNjIgMzAxLjAyOSA2MDYuNTE2IDI5My41NTFaTTM0NC45MzQgMjMzLjU3NkMzNDYuODQ0IDIyNy44NDggMzUyLjE4NCAyMjQgMzU4LjIxOSAyMjRINTA1Ljc4NUM1MTEuODIgMjI0IDUxNy4xNTYgMjI3Ljg0NiA1MTkuMDYyIDIzMy41N0w1MzcuMjAzIDI4OEgzMjYuNzk3TDM0NC45MzQgMjMzLjU3NlpNMzA0IDM5MkMyOTAuNzQ2IDM5MiAyODAgMzgxLjI1NCAyODAgMzY4QzI4MCAzNTQuNzQ0IDI5MC43NDYgMzQ0IDMwNCAzNDRTMzI4IDM1NC43NDQgMzI4IDM2OEMzMjggMzgxLjI1NCAzMTcuMjU0IDM5MiAzMDQgMzkyWk01NjAgMzkyQzU0Ni43NDYgMzkyIDUzNiAzODEuMjU0IDUzNiAzNjhDNTM2IDM1NC43NDQgNTQ2Ljc0NiAzNDQgNTYwIDM0NFM1ODQgMzU0Ljc0NCA1ODQgMzY4QzU4NCAzODEuMjU0IDU3My4yNTQgMzkyIDU2MCAzOTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CarBuilding(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M220 272C213.375 272 208 266.625 208 260V220C208 213.375 213.375 208 220 208H252.266L253.859 203.221C268.188 160.229 307.191 131.033 352 128.494V32C352 14.4 337.602 0 320 0H32C14.398 0 0 14.4 0 32V448C0 465.672 14.328 480 32 480H192V342C192 313.107 206.562 287.264 230.047 272H220ZM208 92C208 85.375 213.375 80 220 80H260C266.625 80 272 85.375 272 92V132C272 138.625 266.625 144 260 144H220C213.375 144 208 138.625 208 132V92ZM144 388C144 394.625 138.625 400 132 400H92C85.375 400 80 394.625 80 388V348C80 341.375 85.375 336 92 336H132C138.625 336 144 341.375 144 348V388ZM144 260C144 266.625 138.625 272 132 272H92C85.375 272 80 266.625 80 260V220C80 213.375 85.375 208 92 208H132C138.625 208 144 213.375 144 220V260ZM144 132C144 138.625 138.625 144 132 144H92C85.375 144 80 138.625 80 132V92C80 85.375 85.375 80 92 80H132C138.625 80 144 85.375 144 92V132Z" />
            <path d="M606.516 293.551L579.781 213.334C569.164 181.482 539.359 160 505.785 160H358.219C324.645 160 294.836 181.486 284.219 213.34L257.484 293.551C237.938 301.029 224 319.826 224 342V480C224 497.672 238.328 512 256 512H272C289.672 512 304 497.672 304 480V447H560V480C560 497.672 574.328 512 592 512H608C625.672 512 640 497.672 640 480V342C640 319.826 626.062 301.029 606.516 293.551ZM344.934 233.576C346.844 227.848 352.184 224 358.219 224H505.785C511.82 224 517.156 227.846 519.062 233.57L537.203 288H326.797L344.934 233.576ZM304 392C290.746 392 280 381.254 280 368C280 354.744 290.746 344 304 344S328 354.744 328 368C328 381.254 317.254 392 304 392ZM560 392C546.746 392 536 381.254 536 368C536 354.744 546.746 344 560 344S584 354.744 584 368C584 381.254 573.254 392 560 392Z" />
        </Icon>
    </>
}