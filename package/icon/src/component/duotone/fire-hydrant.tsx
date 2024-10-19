
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `fire-hydrant` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fire-hydrant?s=duotone fire-hydrant}
 * @preview ![fire-hydrant](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU2IDE3NkgzMjhDMzQxLjI1NCAxNzYgMzUyIDE2NS4yNTQgMzUyIDE1MkMzNTIgMTM4Ljc0NCAzNDEuMjU0IDEyOCAzMjggMTI4SDMxNS40NzVDMzAzLjg2NSA4My4xNzQgMjY4LjgyNiA0OC4xMzUgMjI0IDM2LjUyNVYzMkMyMjQgMTQuMzEyIDIwOS42ODggMCAxOTIgMFMxNjAgMTQuMzEyIDE2MCAzMlYzNi41MjVDMTE1LjE3NCA0OC4xMzUgODAuMTM1IDgzLjE3NCA2OC41MjUgMTI4SDU2QzQyLjc0NiAxMjggMzIgMTM4Ljc0NCAzMiAxNTJDMzIgMTY1LjI1NCA0Mi43NDYgMTc2IDU2IDE3NlpNMzIgMjcyVjM2OEMzMiAzNzYuODM2IDM5LjE2NCAzODQgNDggMzg0SDY0VjI1Nkg0OEMzOS4xNjQgMjU2IDMyIDI2My4xNjIgMzIgMjcyWk0zMzYgMjU2SDMyMFYzODRIMzM2QzM0NC44MzYgMzg0IDM1MiAzNzYuODM2IDM1MiAzNjhWMjcyQzM1MiAyNjMuMTYyIDM0NC44MzYgMjU2IDMzNiAyNTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTMzNiA0NjRIMzIwVjE3Nkg2NFY0NjRINDhDMzkuMTY0IDQ2NCAzMiA0NzEuMTYyIDMyIDQ4MFY0OTZDMzIgNTA0LjgzNiAzOS4xNjQgNTEyIDQ4IDUxMkgzMzZDMzQ0LjgzNiA1MTIgMzUyIDUwNC44MzYgMzUyIDQ5NlY0ODBDMzUyIDQ3MS4xNjIgMzQ0LjgzNiA0NjQgMzM2IDQ2NFpNMTkyIDM4NEMxNTYuNjU0IDM4NCAxMjggMzU1LjM0NiAxMjggMzIwQzEyOCAyODQuNjUyIDE1Ni42NTQgMjU2IDE5MiAyNTZTMjU2IDI4NC42NTIgMjU2IDMyMEMyNTYgMzU1LjM0NiAyMjcuMzQ2IDM4NCAxOTIgMzg0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FireHydrant(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M56 176H328C341.254 176 352 165.254 352 152C352 138.744 341.254 128 328 128H315.475C303.865 83.174 268.826 48.135 224 36.525V32C224 14.312 209.688 0 192 0S160 14.312 160 32V36.525C115.174 48.135 80.135 83.174 68.525 128H56C42.746 128 32 138.744 32 152C32 165.254 42.746 176 56 176ZM32 272V368C32 376.836 39.164 384 48 384H64V256H48C39.164 256 32 263.162 32 272ZM336 256H320V384H336C344.836 384 352 376.836 352 368V272C352 263.162 344.836 256 336 256Z" />
            <path d="M336 464H320V176H64V464H48C39.164 464 32 471.162 32 480V496C32 504.836 39.164 512 48 512H336C344.836 512 352 504.836 352 496V480C352 471.162 344.836 464 336 464ZM192 384C156.654 384 128 355.346 128 320C128 284.652 156.654 256 192 256S256 284.652 256 320C256 355.346 227.346 384 192 384Z" />
        </Icon>
    </>
}