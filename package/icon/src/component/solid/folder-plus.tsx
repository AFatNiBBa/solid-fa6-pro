
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `folder-plus` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-plus?s=solid folder-plus}
 * @preview ![folder-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgOTZIMjcyTDIwOCAzMkg0OEMyMS41IDMyIDAgNTMuNSAwIDgwVjQzMkMwIDQ1OC41IDIxLjUgNDgwIDQ4IDQ4MEg0NjRDNDkwLjUgNDgwIDUxMiA0NTguNSA1MTIgNDMyVjE0NEM1MTIgMTE3LjUgNDkwLjUgOTYgNDY0IDk2Wk0zMzYgMzExLjk5OEgyODBWMzY4LjAwMkMyODAgMzgxLjI2MiAyNjkuMjU4IDM5MiAyNTYgMzkyQzI0Mi43MzQgMzkyIDIzMiAzODEuMjU4IDIzMiAzNjguMDAyVjMxMS45OThIMTc2QzE2Mi43MyAzMTEuOTk4IDE1MiAzMDEuMjU2IDE1MiAyODhDMTUyIDI3NC43NDIgMTYyLjczOCAyNjQuMDAyIDE3NiAyNjQuMDAySDIzMlYyMDcuOTk4QzIzMiAxOTQuNzM4IDI0Mi43NDIgMTg0IDI1NiAxODRTMjgwIDE5NC43MzggMjgwIDIwNy45OThWMjY0LjAwMkgzMzZDMzQ5LjI2MiAyNjQuMDAyIDM2MCAyNzQuNzQyIDM2MCAyODhTMzQ5LjI2MiAzMTEuOTk4IDMzNiAzMTEuOTk4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FolderPlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 96H272L208 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM336 311.998H280V368.002C280 381.262 269.258 392 256 392C242.734 392 232 381.258 232 368.002V311.998H176C162.73 311.998 152 301.256 152 288C152 274.742 162.738 264.002 176 264.002H232V207.998C232 194.738 242.742 184 256 184S280 194.738 280 207.998V264.002H336C349.262 264.002 360 274.742 360 288S349.262 311.998 336 311.998Z" />
        </Icon>
    </>
}