
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `house-turret` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/house-turret?s=solid house-turret}
 * @preview ![house-turret](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTEuNjEzIDIxOS4wMTRMMzUyIDEyNy43NTJWMTZDMzUyIDcuMTYyIDM0NC44MzYgMCAzMzYgMEgyNzJDMjYzLjE2NCAwIDI1NiA3LjE2MiAyNTYgMTZWOTZIMjI0VjE2QzIyNCA3LjE2MiAyMTYuODM2IDAgMjA4IDBIMTQ0QzEzNS4xNjQgMCAxMjggNy4xNjIgMTI4IDE2Vjk2SDk2VjE2Qzk2IDcuMTYyIDg4LjgzNiAwIDgwIDBIMTZDNy4xNjQgMCAwIDcuMTYyIDAgMTZWMTk3LjQ5QzAgMjE0LjQ2MyA2Ljc0MiAyMzAuNzQyIDE4Ljc0NiAyNDIuNzQ0TDY0IDI4OFY0ODBDNjQgNDk3LjY3MiA3OC4zMjYgNTEyIDk2IDUxMkgyMzQuMDk4QzIyNy44MTEgNTAxLjgwNyAyMjQgNDg5LjkyMiAyMjQgNDc3LjA5VjI4MS40MzhDMjI0IDI1Ny43MjMgMjM0LjA2NCAyMzQuOTcxIDI1MS42MTMgMjE5LjAxNFpNMjEyIDIyNEMyMTIgMjMyLjgzNiAyMDQuODM2IDI0MCAxOTYgMjQwSDE1NkMxNDcuMTY0IDI0MCAxNDAgMjMyLjgzNiAxNDAgMjI0VjE5NkMxNDAgMTc2LjExNyAxNTYuMTE3IDE2MCAxNzYgMTYwUzIxMiAxNzYuMTE3IDIxMiAxOTZWMjI0Wk02MjIuODgzIDI0Mi43MTdMNDcxLjQ3NyAxMDUuMDc4QzQ1OC4xNjIgOTIuOTczIDQzNy44MjggOTIuOTczIDQyNC41MTQgMTA1LjA3OEwyNzMuMTM5IDI0Mi42OTFDMjYyLjIyMyAyNTIuNjE3IDI1NiAyNjYuNjg2IDI1NiAyODEuNDM4VjQ3Ny4wOUMyNTYgNDk2LjM3MSAyNzEuNjI5IDUxMiAyOTAuOTA4IDUxMkg2MDUuMDg0QzYyNC4zNjEgNTEyIDYzOS45OSA0OTYuNCA2MzkuOTkyIDQ3Ny4xMjFDNjM5Ljk5NiA0MjQuNTM5IDY0MCAzMjguOTYzIDY0MCAyODEuMjgxQzYzOS45OTggMjY2LjU1MSA2MzMuNzgzIDI1Mi42MjcgNjIyLjg4MyAyNDIuNzE3Wk00OTYgMzY4QzQ5NiAzNzYuODc1IDQ4OC44NzUgMzg0IDQ4MCAzODRINDE2QzQwNy4xMjUgMzg0IDQwMCAzNzYuODc1IDQwMCAzNjhWMzA0QzQwMCAyOTUuMTI1IDQwNy4xMjUgMjg4IDQxNiAyODhINDgwQzQ4OC44NzUgMjg4IDQ5NiAyOTUuMTI1IDQ5NiAzMDRWMzY4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HouseTurret(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M251.613 219.014L352 127.752V16C352 7.162 344.836 0 336 0H272C263.164 0 256 7.162 256 16V96H224V16C224 7.162 216.836 0 208 0H144C135.164 0 128 7.162 128 16V96H96V16C96 7.162 88.836 0 80 0H16C7.164 0 0 7.162 0 16V197.49C0 214.463 6.742 230.742 18.746 242.744L64 288V480C64 497.672 78.326 512 96 512H234.098C227.811 501.807 224 489.922 224 477.09V281.438C224 257.723 234.064 234.971 251.613 219.014ZM212 224C212 232.836 204.836 240 196 240H156C147.164 240 140 232.836 140 224V196C140 176.117 156.117 160 176 160S212 176.117 212 196V224ZM622.883 242.717L471.477 105.078C458.162 92.973 437.828 92.973 424.514 105.078L273.139 242.691C262.223 252.617 256 266.686 256 281.438V477.09C256 496.371 271.629 512 290.908 512H605.084C624.361 512 639.99 496.4 639.992 477.121C639.996 424.539 640 328.963 640 281.281C639.998 266.551 633.783 252.627 622.883 242.717ZM496 368C496 376.875 488.875 384 480 384H416C407.125 384 400 376.875 400 368V304C400 295.125 407.125 288 416 288H480C488.875 288 496 295.125 496 304V368Z" />
        </Icon>
    </>
}