
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-u` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-u?s=duotone circle-u}
 * @preview ![circle-u](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMzY4IDI5MC45MDZDMzY4IDM1MS4wNjIgMzE3Ljc1IDQwMCAyNTYgNDAwUzE0NCAzNTEuMDYyIDE0NCAyOTAuOTA2VjE2OEMxNDQgMTU0Ljc1IDE1NC43NSAxNDQgMTY4IDE0NFMxOTIgMTU0Ljc1IDE5MiAxNjhWMjkwLjkwNkMxOTIgMzI0LjU5NCAyMjAuNzAzIDM1MiAyNTYgMzUyUzMyMCAzMjQuNTk0IDMyMCAyOTAuOTA2VjE2OEMzMjAgMTU0Ljc1IDMzMC43NSAxNDQgMzQ0IDE0NFMzNjggMTU0Ljc1IDM2OCAxNjhWMjkwLjkwNloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzQ0IDE0NEMzMzAuNzUgMTQ0IDMyMCAxNTQuNzUgMzIwIDE2OFYyOTAuOTA2QzMyMCAzMjQuNTk0IDI5MS4yOTcgMzUyIDI1NiAzNTJTMTkyIDMyNC41OTQgMTkyIDI5MC45MDZWMTY4QzE5MiAxNTQuNzUgMTgxLjI1IDE0NCAxNjggMTQ0UzE0NCAxNTQuNzUgMTQ0IDE2OFYyOTAuOTA2QzE0NCAzNTEuMDYyIDE5NC4yNSA0MDAgMjU2IDQwMFMzNjggMzUxLjA2MiAzNjggMjkwLjkwNlYxNjhDMzY4IDE1NC43NSAzNTcuMjUgMTQ0IDM0NCAxNDRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleU(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM368 290.906C368 351.062 317.75 400 256 400S144 351.062 144 290.906V168C144 154.75 154.75 144 168 144S192 154.75 192 168V290.906C192 324.594 220.703 352 256 352S320 324.594 320 290.906V168C320 154.75 330.75 144 344 144S368 154.75 368 168V290.906Z" />
            <path d="M344 144C330.75 144 320 154.75 320 168V290.906C320 324.594 291.297 352 256 352S192 324.594 192 290.906V168C192 154.75 181.25 144 168 144S144 154.75 144 168V290.906C144 351.062 194.25 400 256 400S368 351.062 368 290.906V168C368 154.75 357.25 144 344 144Z" />
        </Icon>
    </>
}