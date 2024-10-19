
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `message-minus` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-minus?s=duotone message-minus}
 * @preview ![message-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCAwSDY0QzI4Ljc1IDAgMCAyOC43NDggMCA2My45OTRWMzUxLjk3MUMwIDM4Ny4yMTkgMjguNzUgNDE1Ljk2NyA2NCA0MTUuOTY3SDE2MFY0OTkuOTU5QzE2MCA1MDkuNzA5IDE3MS4yNSA1MTUuNDU5IDE3OS4xMjUgNTA5LjcwOUwzMDQgNDE1Ljk2N0g0NDhDNDgzLjI1IDQxNS45NjcgNTEyIDM4Ny4yMTkgNTEyIDM1MS45NzFWNjMuOTk0QzUxMiAyOC43NDggNDgzLjI1IDAgNDQ4IDBaTTMzNi4wMDIgMjMxLjk5OEgxNzUuOTk4QzE2Mi43MyAyMzEuOTk4IDE1MiAyMjEuMjU2IDE1MiAyMDhDMTUyIDE5NC43NDIgMTYyLjczOCAxODQuMDAyIDE3NS45OTggMTg0LjAwMkgzMzYuMDAyQzM0OS4yNjIgMTg0LjAwMiAzNjAgMTk0Ljc0MiAzNjAgMjA4UzM0OS4yNjIgMjMxLjk5OCAzMzYuMDAyIDIzMS45OThaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM2MCAyMDhDMzYwIDIyMS4yNTggMzQ5LjI2MiAyMzEuOTk4IDMzNi4wMDIgMjMxLjk5OEgxNzUuOTk4QzE2Mi43MyAyMzEuOTk4IDE1MiAyMjEuMjU2IDE1MiAyMDhDMTUyIDE5NC43NDIgMTYyLjczOCAxODQuMDAyIDE3NS45OTggMTg0LjAwMkgzMzYuMDAyQzM0OS4yNjIgMTg0LjAwMiAzNjAgMTk0Ljc0MiAzNjAgMjA4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MessageMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M448 0H64C28.75 0 0 28.748 0 63.994V351.971C0 387.219 28.75 415.967 64 415.967H160V499.959C160 509.709 171.25 515.459 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.971V63.994C512 28.748 483.25 0 448 0ZM336.002 231.998H175.998C162.73 231.998 152 221.256 152 208C152 194.742 162.738 184.002 175.998 184.002H336.002C349.262 184.002 360 194.742 360 208S349.262 231.998 336.002 231.998Z" />
            <path d="M360 208C360 221.258 349.262 231.998 336.002 231.998H175.998C162.73 231.998 152 221.256 152 208C152 194.742 162.738 184.002 175.998 184.002H336.002C349.262 184.002 360 194.742 360 208Z" />
        </Icon>
    </>
}