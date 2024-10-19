
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `calendar-range` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-range?s=duotone calendar-range}
 * @preview ![calendar-range](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgMTkyVjQ2NEMwIDQ5MC41IDIxLjUgNTEyIDQ4IDUxMkg0MDBDNDI2LjUgNTEyIDQ0OCA0OTAuNSA0NDggNDY0VjE5MkgwWk02NCAyNzJDNjQgMjYzLjE2NCA3MS4xNjQgMjU2IDgwIDI1NkgxMTJDMTIwLjgzOCAyNTYgMTI4IDI2My4xNjQgMTI4IDI3MlYzMDRDMTI4IDMxMi44MzYgMTIwLjgzOCAzMjAgMTEyIDMyMEg4MEM3MS4xNjQgMzIwIDY0IDMxMi44MzYgNjQgMzA0VjI3MlpNMjY0IDQ0MEg4OEM3NC43NDUgNDQwIDY0IDQyOS4yNTQgNjQgNDE2Uzc0Ljc0NSAzOTIgODggMzkySDI2NEMyNzcuMjU1IDM5MiAyODggNDAyLjc0NiAyODggNDE2UzI3Ny4yNTUgNDQwIDI2NCA0NDBaTTM4NCA0MzJDMzg0IDQ0MC44MzYgMzc2LjgzOCA0NDggMzY4IDQ0OEgzMzZDMzI3LjE2NCA0NDggMzIwIDQ0MC44MzYgMzIwIDQzMlY0MDBDMzIwIDM5MS4xNjQgMzI3LjE2NCAzODQgMzM2IDM4NEgzNjhDMzc2LjgzOCAzODQgMzg0IDM5MS4xNjQgMzg0IDQwMFY0MzJaTTM2MCAzMTJIMTg0QzE3MC43NDUgMzEyIDE2MCAzMDEuMjU0IDE2MCAyODhTMTcwLjc0NSAyNjQgMTg0IDI2NEgzNjBDMzczLjI1NSAyNjQgMzg0IDI3NC43NDYgMzg0IDI4OFMzNzMuMjU1IDMxMiAzNjAgMzEyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00MDAgNjRIMzUyVjMyQzM1MiAxNC40IDMzNy42IDAgMzIwIDBIMzIwQzMwMi40IDAgMjg4IDE0LjQgMjg4IDMyVjY0SDE2MFYzMkMxNjAgMTQuNCAxNDUuNiAwIDEyOCAwSDEyOEMxMTAuNCAwIDk2IDE0LjQgOTYgMzJWNjRINDhDMjEuNDkgNjQgMCA4NS40OSAwIDExMlYxOTJINDQ4VjExMkM0NDggODUuNDkgNDI2LjUxIDY0IDQwMCA2NFpNMTEyIDMyMEMxMjAuODM4IDMyMCAxMjggMzEyLjgzNiAxMjggMzA0VjI3MkMxMjggMjYzLjE2NCAxMjAuODM4IDI1NiAxMTIgMjU2SDgwQzcxLjE2NCAyNTYgNjQgMjYzLjE2NCA2NCAyNzJWMzA0QzY0IDMxMi44MzYgNzEuMTY0IDMyMCA4MCAzMjBIMTEyWk0zNjggMzg0SDMzNkMzMjcuMTY0IDM4NCAzMjAgMzkxLjE2NCAzMjAgNDAwVjQzMkMzMjAgNDQwLjgzNiAzMjcuMTY0IDQ0OCAzMzYgNDQ4SDM2OEMzNzYuODM4IDQ0OCAzODQgNDQwLjgzNiAzODQgNDMyVjQwMEMzODQgMzkxLjE2NCAzNzYuODM4IDM4NCAzNjggMzg0Wk0zNjAgMjY0SDE4NEMxNzAuNzQ1IDI2NCAxNjAgMjc0Ljc0NiAxNjAgMjg4UzE3MC43NDUgMzEyIDE4NCAzMTJIMzYwQzM3My4yNTUgMzEyIDM4NCAzMDEuMjU0IDM4NCAyODhTMzczLjI1NSAyNjQgMzYwIDI2NFpNMjY0IDM5Mkg4OEM3NC43NDUgMzkyIDY0IDQwMi43NDYgNjQgNDE2Uzc0Ljc0NSA0NDAgODggNDQwSDI2NEMyNzcuMjU1IDQ0MCAyODggNDI5LjI1NCAyODggNDE2UzI3Ny4yNTUgMzkyIDI2NCAzOTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CalendarRange(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M0 192V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V192H0ZM64 272C64 263.164 71.164 256 80 256H112C120.838 256 128 263.164 128 272V304C128 312.836 120.838 320 112 320H80C71.164 320 64 312.836 64 304V272ZM264 440H88C74.745 440 64 429.254 64 416S74.745 392 88 392H264C277.255 392 288 402.746 288 416S277.255 440 264 440ZM384 432C384 440.836 376.838 448 368 448H336C327.164 448 320 440.836 320 432V400C320 391.164 327.164 384 336 384H368C376.838 384 384 391.164 384 400V432ZM360 312H184C170.745 312 160 301.254 160 288S170.745 264 184 264H360C373.255 264 384 274.746 384 288S373.255 312 360 312Z" />
            <path d="M400 64H352V32C352 14.4 337.6 0 320 0H320C302.4 0 288 14.4 288 32V64H160V32C160 14.4 145.6 0 128 0H128C110.4 0 96 14.4 96 32V64H48C21.49 64 0 85.49 0 112V192H448V112C448 85.49 426.51 64 400 64ZM112 320C120.838 320 128 312.836 128 304V272C128 263.164 120.838 256 112 256H80C71.164 256 64 263.164 64 272V304C64 312.836 71.164 320 80 320H112ZM368 384H336C327.164 384 320 391.164 320 400V432C320 440.836 327.164 448 336 448H368C376.838 448 384 440.836 384 432V400C384 391.164 376.838 384 368 384ZM360 264H184C170.745 264 160 274.746 160 288S170.745 312 184 312H360C373.255 312 384 301.254 384 288S373.255 264 360 264ZM264 392H88C74.745 392 64 402.746 64 416S74.745 440 88 440H264C277.255 440 288 429.254 288 416S277.255 392 264 392Z" />
        </Icon>
    </>
}