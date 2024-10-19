
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `apple-whole` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/apple-whole?s=duotone apple-whole}
 * @preview ![apple-whole](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMzNi4wMTQgMTI4QzMwNC4wMTMgMTI4IDI1Ni4wMTEgMTQ0IDIyNC4wMjIgMTYwQzE5Mi4wMDkgMTQ0IDE0NC4wMDggMTI4LjAwNiAxMTIuMDA3IDEyOC4wMDRDMzIuMDA0IDEyOCAwLjQxMyAyMTAuNDU5IDAuMDAzIDI4OEMtMC41MjggMzg3Ljk3NSA2My45OTcgNTEyIDE2MC4wMDEgNTEyQzE5Mi4wMDIgNTEyIDIwOC4wMDIgNDk2IDIyNC4wMDMgNDk2QzI0MC4wMDMgNDk2IDI1Ni4wMDQgNTEyIDI4OC4wMDUgNTEyQzM4NC4wMDggNTEyIDQ0OC40MDggMzg5LjE2NCA0NDcuOTk4IDI4OEM0NDcuNjg5IDIxMS41NzggNDE2LjAxNyAxMjggMzM2LjAxNCAxMjhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTMyMC4wMDQgMFYzMkMzMjAuMDA0IDc2LjE4NCAyODQuMTg2IDExMiAyNDAuMDAxIDExMkgyMDhWODBDMjA4IDM1LjgxNiAyNDMuODIxIDAgMjg4LjAwMyAwSDMyMC4wMDRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function AppleWhole(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M336.014 128C304.013 128 256.011 144 224.022 160C192.009 144 144.008 128.006 112.007 128.004C32.004 128 0.413 210.459 0.003 288C-0.528 387.975 63.997 512 160.001 512C192.002 512 208.002 496 224.003 496C240.003 496 256.004 512 288.005 512C384.008 512 448.408 389.164 447.998 288C447.689 211.578 416.017 128 336.014 128Z" />
            <path d="M320.004 0V32C320.004 76.184 284.186 112 240.001 112H208V80C208 35.816 243.821 0 288.003 0H320.004Z" />
        </Icon>
    </>
}