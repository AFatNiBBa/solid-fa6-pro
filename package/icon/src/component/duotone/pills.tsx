
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pills` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pills?s=duotone pills}
 * @preview ![pills](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI5OS43NTUgMjI2LjI1QzI5Ni4yNTUgMjIyLjc1IDI5MC4yNTUgMjIzLjI1IDI4Ny4zOCAyMjcuMTI1QzI0Mi4xMjkgMjg5LjYyNSAyNDcuMDA0IDM3Ny4yNSAzMDMuMjU1IDQzMy41QzM1OS42MzEgNDg5Ljc1IDQ0Ny4yNTcgNDk0Ljc1IDUwOS43NTggNDQ5LjM3NUM1MTMuNzU4IDQ0Ni41IDUxNC4wMDggNDQwLjYyNSA1MTAuNTA4IDQzNy4xMjVMMjk5Ljc1NSAyMjYuMjVaTTUyOS41MDkgMjA3LjI1QzQ3My4yNTggMTUxIDM4NS42MzEgMTQ2LjEyNSAzMjMuMTMgMTkxLjM3NUMzMTkuMTMgMTk0LjI1IDMxOC43NTUgMjAwLjI1IDMyMi4yNTUgMjAzLjc1TDUzMy4xMzQgNDE0LjVDNTM2LjYzNCA0MTguMDAxIDU0Mi41MDkgNDE3LjYyNSA1NDUuMzg0IDQxMy43NUM1OTAuNzYgMzUxLjEyNSA1ODUuODg1IDI2My42MjUgNTI5LjUwOSAyMDcuMjVaTTExMi4wMDIgMzJDNTAuMTI2IDMyIDAgODIuMTI1IDAgMTQ0VjI1NkgyMjQuMDA0VjE0NEMyMjQuMDA0IDgyLjEyNSAxNzMuODc4IDMyIDExMi4wMDIgMzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTIyNC4wMDQgMjU2VjM2OEMyMjQuMDA0IDQyOS44NzUgMTczLjg3OCA0ODAgMTEyLjAwMiA0ODBTMCA0MjkuODc1IDAgMzY4VjI1NkgyMjQuMDA0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Pills(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M299.755 226.25C296.255 222.75 290.255 223.25 287.38 227.125C242.129 289.625 247.004 377.25 303.255 433.5C359.631 489.75 447.257 494.75 509.758 449.375C513.758 446.5 514.008 440.625 510.508 437.125L299.755 226.25ZM529.509 207.25C473.258 151 385.631 146.125 323.13 191.375C319.13 194.25 318.755 200.25 322.255 203.75L533.134 414.5C536.634 418.001 542.509 417.625 545.384 413.75C590.76 351.125 585.885 263.625 529.509 207.25ZM112.002 32C50.126 32 0 82.125 0 144V256H224.004V144C224.004 82.125 173.878 32 112.002 32Z" />
            <path d="M224.004 256V368C224.004 429.875 173.878 480 112.002 480S0 429.875 0 368V256H224.004Z" />
        </Icon>
    </>
}