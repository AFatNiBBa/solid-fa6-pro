
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hockey-mask` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-mask?s=regular hockey-mask}
 * @preview ![hockey-mask](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTEuOTk5IDQxNkMxODMuMTI0IDQxNiAxNzUuOTk5IDQyMy4xMjUgMTc1Ljk5OSA0MzJTMTgzLjEyNCA0NDggMTkxLjk5OSA0NDhDMjAwLjg3NSA0NDggMjA4IDQ0MC44NzUgMjA4IDQzMlMyMDAuODc1IDQxNiAxOTEuOTk5IDQxNlpNMTkxLjk5OSAzNTJDMTgzLjEyNCAzNTIgMTc1Ljk5OSAzNTkuMTI1IDE3NS45OTkgMzY4UzE4My4xMjQgMzg0IDE5MS45OTkgMzg0QzIwMC44NzUgMzg0IDIwOCAzNzYuODc1IDIwOCAzNjhTMjAwLjg3NSAzNTIgMTkxLjk5OSAzNTJaTTI3Mi4wMDEgMTEyQzI4MC44NzYgMTEyIDI4OC4wMDEgMTA0Ljg3NSAyODguMDAxIDk2UzI4MC44NzYgODAgMjcyLjAwMSA4MEMyNjMuMTI2IDgwIDI1Ni4wMDEgODcuMTI1IDI1Ni4wMDEgOTZTMjYzLjEyNiAxMTIgMjcyLjAwMSAxMTJaTTE3NS45OTkgMTEyQzE4NC44NzQgMTEyIDE5MS45OTkgMTA0Ljg3NSAxOTEuOTk5IDk2UzE4NC44NzQgODAgMTc1Ljk5OSA4MFMxNTkuOTk5IDg3LjEyNSAxNTkuOTk5IDk2UzE2Ny4xMjQgMTEyIDE3NS45OTkgMTEyWk0xOTEuOTk5IDI4OEMxODMuMTI0IDI4OCAxNzUuOTk5IDI5NS4xMjUgMTc1Ljk5OSAzMDRTMTgzLjEyNCAzMjAgMTkxLjk5OSAzMjBDMjAwLjg3NSAzMjAgMjA4IDMxMi44NzUgMjA4IDMwNFMyMDAuODc1IDI4OCAxOTEuOTk5IDI4OFpNMjU2LjAwMSA0MTZDMjQ3LjEyNSA0MTYgMjQwIDQyMy4xMjUgMjQwIDQzMlMyNDcuMTI1IDQ0OCAyNTYuMDAxIDQ0OEMyNjQuODc2IDQ0OCAyNzIuMDAxIDQ0MC44NzUgMjcyLjAwMSA0MzJTMjY0Ljg3NiA0MTYgMjU2LjAwMSA0MTZaTTI1Ni4wMDEgMjg4QzI0Ny4xMjUgMjg4IDI0MCAyOTUuMTI1IDI0MCAzMDRTMjQ3LjEyNSAzMjAgMjU2LjAwMSAzMjBDMjY0Ljg3NiAzMjAgMjcyLjAwMSAzMTIuODc1IDI3Mi4wMDEgMzA0UzI2NC44NzYgMjg4IDI1Ni4wMDEgMjg4Wk0yNTYuMDAxIDM1MkMyNDcuMTI1IDM1MiAyNDAgMzU5LjEyNSAyNDAgMzY4UzI0Ny4xMjUgMzg0IDI1Ni4wMDEgMzg0QzI2NC44NzYgMzg0IDI3Mi4wMDEgMzc2Ljg3NSAyNzIuMDAxIDM2OFMyNjQuODc2IDM1MiAyNTYuMDAxIDM1MlpNMjI0IDEyOEMyMTUuMTI1IDEyOCAyMDggMTM1LjEyNSAyMDggMTQ0UzIxNS4xMjUgMTYwIDIyNCAxNjBTMjQwIDE1Mi44NzUgMjQwIDE0NFMyMzIuODc1IDEyOCAyMjQgMTI4Wk00NDggMjM4LjE3MUM0NDggMTQ5LjgzMyA0MTcuNTUzIDkwLjMwOSAzNzYuNjI4IDU0LjVDMzM1LjEyNyAxOC4xMjUgMjc5LjUwMSAwIDIyNCAwQzE2OC4zNzQgMCAxMTIuODczIDE4LjEyNSA3MS4zNzIgNTQuNUMzMC40NDcgOTAuMzA5IDAgMTQ5LjgzMyAwIDIzOC4xNzFDMCAyODcuOTgxIDkuNjggMzQ2Ljk1MyAzMi42MjEgNDE2QzY0LjQ5NyA1MTIgMjI0IDUxMiAyMjQgNTEyUzM4My41MDMgNTEyIDQxNS4zNzkgNDE2QzQzOC4zMiAzNDYuOTUzIDQ0OCAyODcuOTgxIDQ0OCAyMzguMTcxWk0zOTkuNjkgMjM4LjEzQzM5OS42OSAyODUuNjk2IDM4OS43NjggMzQwLjY3MyAzNjkuNzUzIDQwMC44NzVDMzUyLjg3NyA0NTEuODc1IDI1Ni4zNzYgNDYzLjg3NSAyMjQgNDY0QzE5Ny42MjQgNDY0IDk1LjYyMyA0NTMuMjUgNzguMjQ3IDQwMC44NzVDNTguMjMyIDM0MC42NzIgNDguMzEgMjg1LjY5NiA0OC4zMSAyMzguMTNDNDguMzEgMTczLjQwMyA2Ni42ODMgMTIyLjQgMTAyLjk5OCA5MC42MjVDMTMzLjg3MyA2My41IDE3Ny45OTkgNDggMjI0IDQ4UzMxNC4xMjcgNjMuNSAzNDUuMDAyIDkwLjYyNUMzODEuMzE3IDEyMi40IDM5OS42OSAxNzMuNDAzIDM5OS42OSAyMzguMTNaTTIwMCAyMDhDMjAwIDE5MC4zNzUgMTg1LjYyNCAxNzYgMTY3Ljk5OSAxNzZIMTAzLjk5OEM4Ni4zNzIgMTc2IDcxLjk5NyAxOTAuMzc1IDcxLjk5NyAyMDhDNzEuOTk3IDI0My4zNzUgMTAwLjYyMyAyNzIgMTM1Ljk5OCAyNzJTMjAwIDI0My4zNzUgMjAwIDIwOFpNMjgwLjAwMSAxNzZDMjYyLjM3NiAxNzYgMjQ4IDE5MC4zNzUgMjQ4IDIwOEMyNDggMjQzLjM3NSAyNzYuNjI2IDI3MiAzMTIuMDAyIDI3MlMzNzYuMDAzIDI0My4zNzUgMzc2LjAwMyAyMDhDMzc2LjAwMyAxOTAuMzc1IDM2MS42MjggMTc2IDM0NC4wMDIgMTc2SDI4MC4wMDFaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function HockeyMask(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M191.999 416C183.124 416 175.999 423.125 175.999 432S183.124 448 191.999 448C200.875 448 208 440.875 208 432S200.875 416 191.999 416ZM191.999 352C183.124 352 175.999 359.125 175.999 368S183.124 384 191.999 384C200.875 384 208 376.875 208 368S200.875 352 191.999 352ZM272.001 112C280.876 112 288.001 104.875 288.001 96S280.876 80 272.001 80C263.126 80 256.001 87.125 256.001 96S263.126 112 272.001 112ZM175.999 112C184.874 112 191.999 104.875 191.999 96S184.874 80 175.999 80S159.999 87.125 159.999 96S167.124 112 175.999 112ZM191.999 288C183.124 288 175.999 295.125 175.999 304S183.124 320 191.999 320C200.875 320 208 312.875 208 304S200.875 288 191.999 288ZM256.001 416C247.125 416 240 423.125 240 432S247.125 448 256.001 448C264.876 448 272.001 440.875 272.001 432S264.876 416 256.001 416ZM256.001 288C247.125 288 240 295.125 240 304S247.125 320 256.001 320C264.876 320 272.001 312.875 272.001 304S264.876 288 256.001 288ZM256.001 352C247.125 352 240 359.125 240 368S247.125 384 256.001 384C264.876 384 272.001 376.875 272.001 368S264.876 352 256.001 352ZM224 128C215.125 128 208 135.125 208 144S215.125 160 224 160S240 152.875 240 144S232.875 128 224 128ZM448 238.171C448 149.833 417.553 90.309 376.628 54.5C335.127 18.125 279.501 0 224 0C168.374 0 112.873 18.125 71.372 54.5C30.447 90.309 0 149.833 0 238.171C0 287.981 9.68 346.953 32.621 416C64.497 512 224 512 224 512S383.503 512 415.379 416C438.32 346.953 448 287.981 448 238.171ZM399.69 238.13C399.69 285.696 389.768 340.673 369.753 400.875C352.877 451.875 256.376 463.875 224 464C197.624 464 95.623 453.25 78.247 400.875C58.232 340.672 48.31 285.696 48.31 238.13C48.31 173.403 66.683 122.4 102.998 90.625C133.873 63.5 177.999 48 224 48S314.127 63.5 345.002 90.625C381.317 122.4 399.69 173.403 399.69 238.13ZM200 208C200 190.375 185.624 176 167.999 176H103.998C86.372 176 71.997 190.375 71.997 208C71.997 243.375 100.623 272 135.998 272S200 243.375 200 208ZM280.001 176C262.376 176 248 190.375 248 208C248 243.375 276.626 272 312.002 272S376.003 243.375 376.003 208C376.003 190.375 361.628 176 344.002 176H280.001Z " />
        </Icon>
    </>
}