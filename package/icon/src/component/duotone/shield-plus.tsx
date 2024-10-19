
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `shield-plus` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shield-plus?s=duotone shield-plus}
 * @preview ![shield-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ2Ni41IDgzLjY4TDI3NC41IDMuNjcyQzI2OS42MjUgMS42NDEgMjYxLjM0NCAwIDI1Ni4wNjIgMEMyNTAuNzUgMCAyNDIuNSAxLjY0MSAyMzcuNTk0IDMuNjcyTDQ1LjU5NCA4My42OEMyNy42ODggOTEuMDcgMTYgMTA4LjU3NCAxNiAxMjcuOTg0QzE2IDM4NS4xNTcgMjA1LjE2NCA1MTIgMjU1Ljk1MyA1MTJDMzA3Ljk3NSA1MTIgNDk2IDM4My44MTMgNDk2IDEyNy45ODRDNDk2IDEwOC41NzQgNDg0LjMxMiA5MS4wNyA0NjYuNSA4My42OFpNMzM2LjAwNCAyNzkuOTk2SDI4MFYzMzZDMjgwIDM0OS4yNTggMjY5LjI2IDM2MCAyNTYuMDAyIDM2MEMyNDIuNzM2IDM2MCAyMzIuMDA0IDM0OS4yNTggMjMyLjAwNCAzMzZWMjc5Ljk5NkgxNzZDMTYyLjczMiAyNzkuOTk2IDE1Mi4wMDIgMjY5LjI1NCAxNTIuMDAyIDI1NkMxNTIuMDAyIDI0Mi43NDIgMTYyLjc0IDIzMiAxNzYgMjMySDIzMi4wMDRWMTc1Ljk5NkMyMzIuMDA0IDE2Mi43MzQgMjQyLjc0NCAxNTIgMjU2LjAwMiAxNTJTMjgwIDE2Mi43MzQgMjgwIDE3NS45OTZWMjMySDMzNi4wMDRDMzQ5LjI2NCAyMzIgMzYwLjAwMiAyNDIuNzQyIDM2MC4wMDIgMjU2UzM0OS4yNjQgMjc5Ljk5NiAzMzYuMDA0IDI3OS45OTZaICIgY2xhc3M9ImZhLXNlY29uZGFyeSI+PC9wYXRoPjxwYXRoIGQ9Ik0zNjAgMjU1Ljk5OEMzNjAgMjY5LjI1NiAzNDkuMjYyIDI3OS45OTYgMzM2LjAwMiAyNzkuOTk2SDI3OS45OThWMzM2QzI3OS45OTggMzQ5LjI2IDI2OS4yNTggMzU5Ljk5OCAyNTYgMzU5Ljk5OEMyNDIuNzM0IDM1OS45OTggMjMyLjAwMiAzNDkuMjU2IDIzMi4wMDIgMzM2VjI3OS45OTZIMTc1Ljk5OEMxNjIuNzMgMjc5Ljk5NiAxNTIgMjY5LjI1NCAxNTIgMjU1Ljk5OEMxNTIgMjQyLjc0IDE2Mi43MzggMjMyIDE3NS45OTggMjMySDIzMi4wMDJWMTc1Ljk5NkMyMzIuMDAyIDE2Mi43MzYgMjQyLjc0MiAxNTEuOTk4IDI1NiAxNTEuOTk4UzI3OS45OTggMTYyLjczNiAyNzkuOTk4IDE3NS45OTZWMjMySDMzNi4wMDJDMzQ5LjI2MiAyMzIgMzYwIDI0Mi43NCAzNjAgMjU1Ljk5OFogIiBjbGFzcz0iZmEtcHJpbWFyeSI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function ShieldPlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M466.5 83.68L274.5 3.672C269.625 1.641 261.344 0 256.062 0C250.75 0 242.5 1.641 237.594 3.672L45.594 83.68C27.688 91.07 16 108.574 16 127.984C16 385.157 205.164 512 255.953 512C307.975 512 496 383.813 496 127.984C496 108.574 484.312 91.07 466.5 83.68ZM336.004 279.996H280V336C280 349.258 269.26 360 256.002 360C242.736 360 232.004 349.258 232.004 336V279.996H176C162.732 279.996 152.002 269.254 152.002 256C152.002 242.742 162.74 232 176 232H232.004V175.996C232.004 162.734 242.744 152 256.002 152S280 162.734 280 175.996V232H336.004C349.264 232 360.002 242.742 360.002 256S349.264 279.996 336.004 279.996Z " />
            <path d="M360 255.998C360 269.256 349.262 279.996 336.002 279.996H279.998V336C279.998 349.26 269.258 359.998 256 359.998C242.734 359.998 232.002 349.256 232.002 336V279.996H175.998C162.73 279.996 152 269.254 152 255.998C152 242.74 162.738 232 175.998 232H232.002V175.996C232.002 162.736 242.742 151.998 256 151.998S279.998 162.736 279.998 175.996V232H336.002C349.262 232 360 242.74 360 255.998Z " />
        </Icon>
    </>
}