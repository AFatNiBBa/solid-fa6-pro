
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `v` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/v?s=duotone v}
 * @preview ![v](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5MiA0ODBDMTcyLjUxNyA0ODAgMTU0Ljk1NSA0NjguMjIgMTQ3LjU4MSA0NTAuMTlMMy41OSA5OC4yMTZDLTYuNDU2IDczLjY1NiA1LjMwOCA0NS42NTggMjkuODM4IDM1LjU5NkM1NC4zOTkgMjUuNTM0IDgyLjM5NyAzNy4zMTUgOTIuNDI4IDYxLjg0NEwxOTIgMzA1LjIzMkwyOTEuNTcyIDYxLjg0NEMzMDEuNjE4IDM3LjM0NiAzMjkuNjQ4IDI1LjU5NyAzNTQuMTYyIDM1LjU5NkMzNzguNjkyIDQ1LjY1OCAzOTAuNDU2IDczLjY1NiAzODAuNDEgOTguMjE2TDIzNi40MTkgNDUwLjE5QzIyOS4wNDUgNDY4LjIyIDIxMS40ODMgNDgwIDE5MiA0ODBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function V(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M192 480C172.517 480 154.955 468.22 147.581 450.19L3.59 98.216C-6.456 73.656 5.308 45.658 29.838 35.596C54.399 25.534 82.397 37.315 92.428 61.844L192 305.232L291.572 61.844C301.618 37.346 329.648 25.597 354.162 35.596C378.692 45.658 390.456 73.656 380.41 98.216L236.419 450.19C229.045 468.22 211.483 480 192 480Z" />
        </Icon>
    </>
}