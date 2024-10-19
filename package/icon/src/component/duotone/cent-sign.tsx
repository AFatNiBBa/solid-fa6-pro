
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cent-sign` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cent-sign?s=duotone cent-sign}
 * @preview ![cent-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5MiA0NDUuMTQ2VjQ4MEMxOTIgNDk3LjY4OCAyMDYuMzEyIDUxMiAyMjQgNTEyUzI1NiA0OTcuNjg4IDI1NiA0ODBWNDQ1LjU1N0MyNDUuNDE0IDQ0Ny4zNTQgMjM0LjcxOSA0NDguMjUgMjI0LjAzMSA0NDguMjVDMjEzLjI5MyA0NDguMjUgMjAyLjYwNCA0NDYuOTQ5IDE5MiA0NDUuMTQ2Wk0yMjQgMEMyMDYuMzEyIDAgMTkyIDE0LjMyOCAxOTIgMzJWNjcuMTU0QzIxMy4xOTMgNjMuNTQ5IDIzNC43MyA2My4zNTkgMjU2IDY2Ljk4VjMyQzI1NiAxNC4zMjggMjQxLjY4OCAwIDIyNCAwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNTAuOTY5IDM0OC41NDdDMzY0Ljk2OSAzNjUuNjU2IDM2Mi40MDYgMzkwLjg0NCAzNDUuMzEyIDQwNC44NDRDMzA5LjcxOSA0MzMuOTA2IDI2Ni44MTIgNDQ4LjI1IDIyNC4wMzEgNDQ4LjI1QzE3NC43ODEgNDQ4LjI1IDEyNS42ODcgNDI5LjIxOSA4OC4yNSAzOTEuNzVDNTEuOTY5IDM1NS41MTYgMzIgMzA3LjI5NyAzMiAyNTZTNTEuOTY5IDE1Ni40ODQgODguMjUgMTIwLjIzNEMxNTguMTg4IDUwLjIxOSAyNjguNzE5IDQ0LjYyNSAzNDUuMzEyIDEwNy4xNTZDMzYyLjQwNiAxMjEuMTQxIDM2NC45NjkgMTQ2LjMyOCAzNTAuOTY5IDE2My40MzhDMzM3IDE4MC41OTQgMzExLjgxMiAxODMuMTA5IDI5NC42ODggMTY5LjEyNUMyNTAuMTI1IDEzMi43MDMgMTg1LjY4OCAxMzUuOTg0IDE0NC44MTIgMTc2Ljc5N0MxMjMuNjU2IDE5Ny45NTMgMTEyIDIyNi4wNzggMTEyIDI1NlMxMjMuNjU2IDMxNC4wNDcgMTQ0LjgxMiAzMzUuMjAzQzE4NS42ODggMzc2LjA2MyAyNTAuMTI1IDM3OS4yODEgMjk0LjY4OCAzNDIuODkxQzMxMS44MTIgMzI4Ljg5MSAzMzcgMzMxLjQ2OSAzNTAuOTY5IDM0OC41NDdaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CentSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M192 445.146V480C192 497.688 206.312 512 224 512S256 497.688 256 480V445.557C245.414 447.354 234.719 448.25 224.031 448.25C213.293 448.25 202.604 446.949 192 445.146ZM224 0C206.312 0 192 14.328 192 32V67.154C213.193 63.549 234.73 63.359 256 66.98V32C256 14.328 241.688 0 224 0Z" />
            <path d="M350.969 348.547C364.969 365.656 362.406 390.844 345.312 404.844C309.719 433.906 266.812 448.25 224.031 448.25C174.781 448.25 125.687 429.219 88.25 391.75C51.969 355.516 32 307.297 32 256S51.969 156.484 88.25 120.234C158.188 50.219 268.719 44.625 345.312 107.156C362.406 121.141 364.969 146.328 350.969 163.438C337 180.594 311.812 183.109 294.688 169.125C250.125 132.703 185.688 135.984 144.812 176.797C123.656 197.953 112 226.078 112 256S123.656 314.047 144.812 335.203C185.688 376.063 250.125 379.281 294.688 342.891C311.812 328.891 337 331.469 350.969 348.547Z" />
        </Icon>
    </>
}