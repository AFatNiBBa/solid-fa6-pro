
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bus-simple` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bus-simple?s=duotone bus-simple}
 * @preview ![bus-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyIDQ4MEMzMiA0OTcuNjcyIDQ2LjM0NCA1MTIgNjQgNTEySDk2QzExMy42NTYgNTEyIDEyOCA0OTcuNjcyIDEyOCA0ODBWNDQ4SDMyVjQ4MFpNMzIwIDQ0OFY0ODBDMzIwIDQ5Ny42NzIgMzM0LjM0NCA1MTIgMzUyIDUxMkgzODRDNDAxLjY1NiA1MTIgNDE2IDQ5Ny42NzIgNDE2IDQ4MFY0NDhIMzIwWk05NiAyODhIMzUyQzM2OS42NTYgMjg4IDM4NCAyNzMuNjcyIDM4NCAyNTZWMTI4QzM4NCAxMTAuMzI4IDM2OS42NTYgOTYgMzUyIDk2SDk2Qzc4LjM0NCA5NiA2NCAxMTAuMzI4IDY0IDEyOFYyNTZDNjQgMjczLjY3MiA3OC4zNDQgMjg4IDk2IDI4OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMCA0MTZDMCA0MzMuNjcyIDE0LjM0NCA0NDggMzIgNDQ4SDQyMi40MDZDNDM4LjQwNiA0NDggNDQ4IDQzNS4yMDMgNDQ4IDQyMi40MDZWODBDNDQ4IDM1LjIwMyAzNDguODEyIDAgMjI0IDBTMCAzNS4yMDMgMCA4MFY0MTZaTTQwMCAzNjhDNDAwIDM4NS42NzIgMzg1LjY1NiA0MDAgMzY4IDQwMFMzMzYgMzg1LjY3MiAzMzYgMzY4UzM1MC4zNDQgMzM2IDM2OCAzMzZTNDAwIDM1MC4zMjggNDAwIDM2OFpNNjQgMTI4QzY0IDExMC4zMjggNzguMzQ0IDk2IDk2IDk2SDM1MkMzNjkuNjU2IDk2IDM4NCAxMTAuMzI4IDM4NCAxMjhWMjU2QzM4NCAyNzMuNjcyIDM2OS42NTYgMjg4IDM1MiAyODhIOTZDNzguMzQ0IDI4OCA2NCAyNzMuNjcyIDY0IDI1NlYxMjhaTTgwIDMzNkM5Ny42NTYgMzM2IDExMiAzNTAuMzI4IDExMiAzNjhTOTcuNjU2IDQwMCA4MCA0MDBTNDggMzg1LjY3MiA0OCAzNjhTNjIuMzQ0IDMzNiA4MCAzMzZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BusSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M32 480C32 497.672 46.344 512 64 512H96C113.656 512 128 497.672 128 480V448H32V480ZM320 448V480C320 497.672 334.344 512 352 512H384C401.656 512 416 497.672 416 480V448H320ZM96 288H352C369.656 288 384 273.672 384 256V128C384 110.328 369.656 96 352 96H96C78.344 96 64 110.328 64 128V256C64 273.672 78.344 288 96 288Z" />
            <path d="M0 416C0 433.672 14.344 448 32 448H422.406C438.406 448 448 435.203 448 422.406V80C448 35.203 348.812 0 224 0S0 35.203 0 80V416ZM400 368C400 385.672 385.656 400 368 400S336 385.672 336 368S350.344 336 368 336S400 350.328 400 368ZM64 128C64 110.328 78.344 96 96 96H352C369.656 96 384 110.328 384 128V256C384 273.672 369.656 288 352 288H96C78.344 288 64 273.672 64 256V128ZM80 336C97.656 336 112 350.328 112 368S97.656 400 80 400S48 385.672 48 368S62.344 336 80 336Z" />
        </Icon>
    </>
}