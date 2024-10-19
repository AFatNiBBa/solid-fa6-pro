
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `location-exclamation` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location-exclamation?s=duotone location-exclamation}
 * @preview ![location-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5MiAwQzg2LjM3NSAwIDAgODYuMzY5IDAgMTkxLjk4OEMwIDI2OC43MzIgMjUuNjI1IDI5MS4yMzIgMTcyLjc1IDUwMi4zNDRDMTgyLjM3NSA1MTUuMjE5IDIwMS42MjUgNTE1LjIxOSAyMTEuMjUgNTAyLjM0NEMzNTguMzc1IDI5MS4yMzIgMzg0IDI2OC43MzIgMzg0IDE5MS45ODhDMzg0IDg2LjM2OSAyOTcuNjI1IDAgMTkyIDBaTTE2OCAxMDRDMTY4IDkwLjc1IDE3OC43NSA4MCAxOTIgODBTMjE2IDkwLjc1IDIxNiAxMDRWMjE2QzIxNiAyMjkuMjUgMjA1LjI1IDI0MCAxOTIgMjQwUzE2OCAyMjkuMjUgMTY4IDIxNlYxMDRaTTE5MiAzMzZDMTc0LjMyOCAzMzYgMTYwIDMyMS42NzIgMTYwIDMwNEMxNjAgMjg2LjMyNiAxNzQuMzI4IDI3MiAxOTIgMjcyUzIyNCAyODYuMzI2IDIyNCAzMDRDMjI0IDMyMS42NzIgMjA5LjY3MiAzMzYgMTkyIDMzNloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTkyIDI0MEMyMDUuMjUgMjQwIDIxNiAyMjkuMjUgMjE2IDIxNlYxMDRDMjE2IDkwLjc1IDIwNS4yNSA4MCAxOTIgODBTMTY4IDkwLjc1IDE2OCAxMDRWMjE2QzE2OCAyMjkuMjUgMTc4Ljc1IDI0MCAxOTIgMjQwWk0xOTIgMjcyQzE3NC4zMjggMjcyIDE2MCAyODYuMzI2IDE2MCAzMDRDMTYwIDMyMS42NzIgMTc0LjMyOCAzMzYgMTkyIDMzNlMyMjQgMzIxLjY3MiAyMjQgMzA0QzIyNCAyODYuMzI2IDIwOS42NzIgMjcyIDE5MiAyNzJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LocationExclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M192 0C86.375 0 0 86.369 0 191.988C0 268.732 25.625 291.232 172.75 502.344C182.375 515.219 201.625 515.219 211.25 502.344C358.375 291.232 384 268.732 384 191.988C384 86.369 297.625 0 192 0ZM168 104C168 90.75 178.75 80 192 80S216 90.75 216 104V216C216 229.25 205.25 240 192 240S168 229.25 168 216V104ZM192 336C174.328 336 160 321.672 160 304C160 286.326 174.328 272 192 272S224 286.326 224 304C224 321.672 209.672 336 192 336Z" />
            <path d="M192 240C205.25 240 216 229.25 216 216V104C216 90.75 205.25 80 192 80S168 90.75 168 104V216C168 229.25 178.75 240 192 240ZM192 272C174.328 272 160 286.326 160 304C160 321.672 174.328 336 192 336S224 321.672 224 304C224 286.326 209.672 272 192 272Z" />
        </Icon>
    </>
}