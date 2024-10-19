
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `display-arrow-down` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/display-arrow-down?s=light display-arrow-down}
 * @preview ![display-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDggMTc2QzIwMy45MDYgMTc2IDE5OS44MTIgMTc3LjU2MiAxOTYuNjg4IDE4MC42ODhDMTkwLjQzOCAxODYuOTM4IDE5MC40MzggMTk3LjA2MyAxOTYuNjg4IDIwMy4zMTJMMjc2LjY4OCAyODMuMzEyQzI4Mi45MzggMjg5LjU2MiAyOTMuMDYzIDI4OS41NjIgMjk5LjMxMiAyODMuMzEyTDM3OS4zMTIgMjAzLjMxMkMzODUuNTYyIDE5Ny4wNjIgMzg1LjU2MiAxODYuOTM3IDM3OS4zMTIgMTgwLjY4OFMzNjIuOTM3IDE3NC40MzggMzU2LjY4OCAxODAuNjg4TDMwNCAyMzMuMzc1VjE2QzMwNCA3LjE1NiAyOTYuODQ0IDAgMjg4IDBTMjcyIDcuMTU2IDI3MiAxNlYyMzMuMzc1TDIxOS4zMTIgMTgwLjY4OEMyMTYuMTg4IDE3Ny41NjIgMjEyLjA5NCAxNzYgMjA4IDE3NlpNNTEyIDBIMzY4QzM1OS4xNjQgMCAzNTIgNy4xNjIgMzUyIDE2QzM1MiAyNC44MzYgMzU5LjE2NCAzMiAzNjggMzJINTEyQzUyOS42NzQgMzIgNTQ0IDQ2LjMyNiA1NDQgNjRWMzUyQzU0NCAzNjkuNjcyIDUyOS42NzQgMzg0IDUxMiAzODRINjRDNDYuMzI2IDM4NCAzMiAzNjkuNjcyIDMyIDM1MlY2NEMzMiA0Ni4zMjYgNDYuMzI2IDMyIDY0IDMySDIwOEMyMTYuODM2IDMyIDIyNCAyNC44MzYgMjI0IDE2QzIyNCA3LjE2MiAyMTYuODM2IDAgMjA4IDBINjRDMjguNjU0IDAgMCAyOC42NTIgMCA2NFYzNTJDMCAzODcuMzQ2IDI4LjY1NCA0MTYgNjQgNDE2SDIxMy42OTNMMTk0LjQ5NCA0ODBIMTQ0QzEzNS4xNjQgNDgwIDEyOCA0ODcuMTY0IDEyOCA0OTZTMTM1LjE2NCA1MTIgMTQ0IDUxMkg0MzJDNDQwLjgzNiA1MTIgNDQ4IDUwNC44MzYgNDQ4IDQ5NlM0NDAuODM2IDQ4MCA0MzIgNDgwSDM4MS41MDZMMzYyLjMwNyA0MTZINTEyQzU0Ny4zNDYgNDE2IDU3NiAzODcuMzQ2IDU3NiAzNTJWNjRDNTc2IDI4LjY1MiA1NDcuMzQ2IDAgNTEyIDBaTTIyNy45MDYgNDgwTDI0Ny4xMDUgNDE2SDMyOC44OTVMMzQ4LjA5NCA0ODBIMjI3LjkwNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function DisplayArrowDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M208 176C203.906 176 199.812 177.562 196.688 180.688C190.438 186.938 190.438 197.063 196.688 203.312L276.688 283.312C282.938 289.562 293.063 289.562 299.312 283.312L379.312 203.312C385.562 197.062 385.562 186.937 379.312 180.688S362.937 174.438 356.688 180.688L304 233.375V16C304 7.156 296.844 0 288 0S272 7.156 272 16V233.375L219.312 180.688C216.188 177.562 212.094 176 208 176ZM512 0H368C359.164 0 352 7.162 352 16C352 24.836 359.164 32 368 32H512C529.674 32 544 46.326 544 64V352C544 369.672 529.674 384 512 384H64C46.326 384 32 369.672 32 352V64C32 46.326 46.326 32 64 32H208C216.836 32 224 24.836 224 16C224 7.162 216.836 0 208 0H64C28.654 0 0 28.652 0 64V352C0 387.346 28.654 416 64 416H213.693L194.494 480H144C135.164 480 128 487.164 128 496S135.164 512 144 512H432C440.836 512 448 504.836 448 496S440.836 480 432 480H381.506L362.307 416H512C547.346 416 576 387.346 576 352V64C576 28.652 547.346 0 512 0ZM227.906 480L247.105 416H328.895L348.094 480H227.906Z" />
        </Icon>
    </>
}