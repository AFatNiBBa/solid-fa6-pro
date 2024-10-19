
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cars` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cars?s=duotone cars}
 * @preview ![cars](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1My44NjEgMjAzLjIyMUMyNjguODU3IDE1OC4yMjkgMzEwLjc5NSAxMjggMzU4LjIxOSAxMjhIMzgwLjY2NkwzNTUuNzgxIDUzLjMzNEMzNDUuMTY0IDIxLjQ4MiAzMTUuMzU5IDAgMjgxLjc4NSAwSDEzNC4yMTlDMTAwLjY0NSAwIDcwLjgzNiAyMS40ODYgNjAuMjE5IDUzLjM0TDMzLjQ4NCAxMzMuNTUxQzEzLjkzOCAxNDEuMDI5IDAgMTU5LjgyNiAwIDE4MlYzMjBDMCAzMzcuNjcyIDE0LjMyOCAzNTIgMzIgMzUySDQ4QzY1LjY3MiAzNTIgODAgMzM3LjY3MiA4MCAzMjBWMjg3SDIxMi45MzRDMjE4LjI2OCAyODAuOTI2IDIyNC4yMzggMjc1LjM4NSAyMzEuMjcgMjcxLjAwMkwyNTMuODYxIDIwMy4yMjFaTTgwIDIzMkM2Ni43NDYgMjMyIDU2IDIyMS4yNTQgNTYgMjA4QzU2IDE5NC43NDQgNjYuNzQ2IDE4NCA4MCAxODRTMTA0IDE5NC43NDQgMTA0IDIwOEMxMDQgMjIxLjI1NCA5My4yNTQgMjMyIDgwIDIzMlpNMTAyLjc5NyAxMjhMMTIwLjkzNCA3My41NzZDMTIyLjg0NCA2Ny44NDggMTI4LjE4NCA2NCAxMzQuMjE5IDY0SDI4MS43ODVDMjg3LjgyIDY0IDI5My4xNTYgNjcuODQ2IDI5NS4wNjIgNzMuNTdMMzEzLjIwMyAxMjhIMTAyLjc5N1oiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjA2LjUxNiAyOTMuNTUxTDU3OS43ODEgMjEzLjMzNEM1NjkuMTY0IDE4MS40ODIgNTM5LjM1OSAxNjAgNTA1Ljc4NSAxNjBIMzU4LjIxOUMzMjQuNjQ1IDE2MCAyOTQuODM2IDE4MS40ODYgMjg0LjIxOSAyMTMuMzRMMjU3LjQ4NCAyOTMuNTUxQzIzNy45MzggMzAxLjAyOSAyMjQgMzE5LjgyNiAyMjQgMzQyVjQ4MEMyMjQgNDk3LjY3MiAyMzguMzI4IDUxMiAyNTYgNTEySDI3MkMyODkuNjcyIDUxMiAzMDQgNDk3LjY3MiAzMDQgNDgwVjQ0N0g1NjBWNDgwQzU2MCA0OTcuNjcyIDU3NC4zMjggNTEyIDU5MiA1MTJINjA4QzYyNS42NzIgNTEyIDY0MCA0OTcuNjcyIDY0MCA0ODBWMzQyQzY0MCAzMTkuODI2IDYyNi4wNjIgMzAxLjAyOSA2MDYuNTE2IDI5My41NTFaTTM0NC45MzQgMjMzLjU3NkMzNDYuODQ0IDIyNy44NDggMzUyLjE4NCAyMjQgMzU4LjIxOSAyMjRINTA1Ljc4NUM1MTEuODIgMjI0IDUxNy4xNTYgMjI3Ljg0NiA1MTkuMDYyIDIzMy41N0w1MzcuMjAzIDI4OEgzMjYuNzk3TDM0NC45MzQgMjMzLjU3NlpNMzA0IDM5MkMyOTAuNzQ2IDM5MiAyODAgMzgxLjI1NCAyODAgMzY4QzI4MCAzNTQuNzQ0IDI5MC43NDYgMzQ0IDMwNCAzNDRTMzI4IDM1NC43NDQgMzI4IDM2OEMzMjggMzgxLjI1NCAzMTcuMjU0IDM5MiAzMDQgMzkyWk01NjAgMzkyQzU0Ni43NDYgMzkyIDUzNiAzODEuMjU0IDUzNiAzNjhDNTM2IDM1NC43NDQgNTQ2Ljc0NiAzNDQgNTYwIDM0NFM1ODQgMzU0Ljc0NCA1ODQgMzY4QzU4NCAzODEuMjU0IDU3My4yNTQgMzkyIDU2MCAzOTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Cars(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M253.861 203.221C268.857 158.229 310.795 128 358.219 128H380.666L355.781 53.334C345.164 21.482 315.359 0 281.785 0H134.219C100.645 0 70.836 21.486 60.219 53.34L33.484 133.551C13.938 141.029 0 159.826 0 182V320C0 337.672 14.328 352 32 352H48C65.672 352 80 337.672 80 320V287H212.934C218.268 280.926 224.238 275.385 231.27 271.002L253.861 203.221ZM80 232C66.746 232 56 221.254 56 208C56 194.744 66.746 184 80 184S104 194.744 104 208C104 221.254 93.254 232 80 232ZM102.797 128L120.934 73.576C122.844 67.848 128.184 64 134.219 64H281.785C287.82 64 293.156 67.846 295.062 73.57L313.203 128H102.797Z" />
            <path d="M606.516 293.551L579.781 213.334C569.164 181.482 539.359 160 505.785 160H358.219C324.645 160 294.836 181.486 284.219 213.34L257.484 293.551C237.938 301.029 224 319.826 224 342V480C224 497.672 238.328 512 256 512H272C289.672 512 304 497.672 304 480V447H560V480C560 497.672 574.328 512 592 512H608C625.672 512 640 497.672 640 480V342C640 319.826 626.062 301.029 606.516 293.551ZM344.934 233.576C346.844 227.848 352.184 224 358.219 224H505.785C511.82 224 517.156 227.846 519.062 233.57L537.203 288H326.797L344.934 233.576ZM304 392C290.746 392 280 381.254 280 368C280 354.744 290.746 344 304 344S328 354.744 328 368C328 381.254 317.254 392 304 392ZM560 392C546.746 392 536 381.254 536 368C536 354.744 546.746 344 560 344S584 354.744 584 368C584 381.254 573.254 392 560 392Z" />
        </Icon>
    </>
}