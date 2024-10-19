
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `venus` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/venus?s=duotone venus}
 * @preview ![venus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNzZDMjU2IDIxMS4zNDYgMjI3LjM0NiAyNDAgMTkyIDI0MFMxMjggMjExLjM0NiAxMjggMTc2UzE1Ni42NTQgMTEyIDE5MiAxMTJTMjU2IDE0MC42NTQgMjU2IDE3NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzY4IDE3Ni4wMDFDMzY4IDc4Ljc5NyAyODkuMjAzIDAuMDAxIDE5MiAwLjAwMUM5NC43OTkgMC4wMDEgMTYgNzguNzk3IDE2IDE3Ni4wMDFDMTYgMjYyLjI1OCA3OC4xIDMzMy44ODcgMTYwIDM0OC45NTRWMzg0LjAwMUgxMTJDMTAzLjE2NCAzODQuMDAxIDk2IDM5MS4xNjMgOTYgNDAwLjAwMVY0MzIuMDAxQzk2IDQ0MC44MzcgMTAzLjE2NCA0NDguMDAxIDExMiA0NDguMDAxSDE2MFY0OTYuMDAxQzE2MCA1MDQuODM3IDE2Ny4xNjQgNTEyLjAwMSAxNzYgNTEyLjAwMUgyMDhDMjE2LjgzOCA1MTIuMDAxIDIyNCA1MDQuODM3IDIyNCA0OTYuMDAxVjQ0OC4wMDFIMjcyQzI4MC44MzggNDQ4LjAwMSAyODggNDQwLjgzNyAyODggNDMyLjAwMVY0MDAuMDAxQzI4OCAzOTEuMTYzIDI4MC44MzggMzg0LjAwMSAyNzIgMzg0LjAwMUgyMjRWMzQ4Ljk1NEMzMDUuOTAyIDMzMy44ODcgMzY4IDI2Mi4yNTggMzY4IDE3Ni4wMDFaTTE5MiAyNzIuMDAxQzEzOS4wNjYgMjcyLjAwMSA5NiAyMjguOTM0IDk2IDE3Ni4wMDFDOTYgMTIzLjA2NSAxMzkuMDY2IDgwLjAwMSAxOTIgODAuMDAxQzI0NC45MzYgODAuMDAxIDI4OCAxMjMuMDY1IDI4OCAxNzYuMDAxQzI4OCAyMjguOTM0IDI0NC45MzYgMjcyLjAwMSAxOTIgMjcyLjAwMVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Venus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M256 176C256 211.346 227.346 240 192 240S128 211.346 128 176S156.654 112 192 112S256 140.654 256 176Z" />
            <path d="M368 176.001C368 78.797 289.203 0.001 192 0.001C94.799 0.001 16 78.797 16 176.001C16 262.258 78.1 333.887 160 348.954V384.001H112C103.164 384.001 96 391.163 96 400.001V432.001C96 440.837 103.164 448.001 112 448.001H160V496.001C160 504.837 167.164 512.001 176 512.001H208C216.838 512.001 224 504.837 224 496.001V448.001H272C280.838 448.001 288 440.837 288 432.001V400.001C288 391.163 280.838 384.001 272 384.001H224V348.954C305.902 333.887 368 262.258 368 176.001ZM192 272.001C139.066 272.001 96 228.934 96 176.001C96 123.065 139.066 80.001 192 80.001C244.936 80.001 288 123.065 288 176.001C288 228.934 244.936 272.001 192 272.001Z" />
        </Icon>
    </>
}