
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `money-bills` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/money-bills?s=thin money-bills}
 * @preview ![money-bills](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01OTIgMzJIMTQ0QzExNy40OTIgMzIgOTYgNTMuNDkyIDk2IDgwVjMzNkM5NiAzNjIuNTA4IDExNy40OTIgMzg0IDE0NCAzODRINTkyQzYxOC41MTIgMzg0IDY0MCAzNjIuNTA4IDY0MCAzMzZWODBDNjQwIDUzLjQ5MiA2MTguNTEyIDMyIDU5MiAzMlpNNjI0IDMzNkM2MjQgMzUzLjY0NSA2MDkuNjQ1IDM2OCA1OTIgMzY4SDE0NEMxMjYuMzU1IDM2OCAxMTIgMzUzLjY0NSAxMTIgMzM2VjgwQzExMiA2Mi4zNTUgMTI2LjM1NSA0OCAxNDQgNDhINTkyQzYwOS42NDUgNDggNjI0IDYyLjM1NSA2MjQgODBWMzM2Wk0xNDQgMjY0QzEzOS41NzggMjY0IDEzNiAyNjcuNTc4IDEzNiAyNzJTMTM5LjU3OCAyODAgMTQ0IDI4MEMxNzQuODc1IDI4MCAyMDAgMzA1LjEyNSAyMDAgMzM2QzIwMCAzNDAuNDIyIDIwMy41NzggMzQ0IDIwOCAzNDRTMjE2IDM0MC40MjIgMjE2IDMzNkMyMTYgMjk2LjI5NyAxODMuNzAzIDI2NCAxNDQgMjY0Wk0yMDggNzJDMjAzLjU3OCA3MiAyMDAgNzUuNTc4IDIwMCA4MEMyMDAgMTEwLjg3NSAxNzQuODc1IDEzNiAxNDQgMTM2QzEzOS41NzggMTM2IDEzNiAxMzkuNTc4IDEzNiAxNDRTMTM5LjU3OCAxNTIgMTQ0IDE1MkMxODMuNzAzIDE1MiAyMTYgMTE5LjcwMyAyMTYgODBDMjE2IDc1LjU3OCAyMTIuNDIyIDcyIDIwOCA3MlpNMzY3Ljk4NCAxMTJDMzIzLjgwMSAxMTIgMjg3Ljk4NCAxNTQuOTggMjg3Ljk4NCAyMDhDMjg3Ljk4NCAyNjEuMDE4IDMyMy44MDEgMzA0IDM2Ny45ODQgMzA0UzQ0Ny45ODQgMjYxLjAxOCA0NDcuOTg0IDIwOEM0NDcuOTg0IDE1NC45OCA0MTIuMTY4IDExMiAzNjcuOTg0IDExMlpNMzY3Ljk4NCAyODhDMzMyLjY5NSAyODggMzAzLjk4NCAyNTIuMTExIDMwMy45ODQgMjA4UzMzMi42OTUgMTI4IDM2Ny45ODQgMTI4UzQzMS45ODQgMTYzLjg4OSA0MzEuOTg0IDIwOFM0MDMuMjczIDI4OCAzNjcuOTg0IDI4OFpNNTkyIDI2NEM1NTIuMjk3IDI2NCA1MjAgMjk2LjI5NyA1MjAgMzM2QzUyMCAzNDAuNDIyIDUyMy41NzggMzQ0IDUyOCAzNDRTNTM2IDM0MC40MjIgNTM2IDMzNkM1MzYgMzA1LjEyNSA1NjEuMTI1IDI4MCA1OTIgMjgwQzU5Ni40MjIgMjgwIDYwMCAyNzYuNDIyIDYwMCAyNzJTNTk2LjQyMiAyNjQgNTkyIDI2NFpNNTkyIDEzNkM1NjEuMTI1IDEzNiA1MzYgMTEwLjg3NSA1MzYgODBDNTM2IDc1LjU3OCA1MzIuNDIyIDcyIDUyOCA3MlM1MjAgNzUuNTc4IDUyMCA4MEM1MjAgMTE5LjcwMyA1NTIuMjk3IDE1MiA1OTIgMTUyQzU5Ni40MjIgMTUyIDYwMCAxNDguNDIyIDYwMCAxNDRTNTk2LjQyMiAxMzYgNTkyIDEzNlpNNTM2IDQxNkM1MzEuNTc4IDQxNiA1MjggNDE5LjU3OCA1MjggNDI0QzUyOCA0NDYuMDYyIDUxMC4wNjIgNDY0IDQ4OCA0NjRINzJDNDEuMTI1IDQ2NCAxNiA0MzguODc1IDE2IDQwOFYxNTJDMTYgMTI5LjkzOCAzMy45MzggMTEyIDU2IDExMkM2MC40MjIgMTEyIDY0IDEwOC40MjIgNjQgMTA0UzYwLjQyMiA5NiA1NiA5NkMyNS4xMjUgOTYgMCAxMjEuMTI1IDAgMTUyVjQwOEMwIDQ0Ny43MDMgMzIuMjk3IDQ4MCA3MiA0ODBINDg4QzUxOC44NzUgNDgwIDU0NCA0NTQuODc1IDU0NCA0MjRDNTQ0IDQxOS41NzggNTQwLjQyMiA0MTYgNTM2IDQxNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MoneyBills(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M592 32H144C117.492 32 96 53.492 96 80V336C96 362.508 117.492 384 144 384H592C618.512 384 640 362.508 640 336V80C640 53.492 618.512 32 592 32ZM624 336C624 353.645 609.645 368 592 368H144C126.355 368 112 353.645 112 336V80C112 62.355 126.355 48 144 48H592C609.645 48 624 62.355 624 80V336ZM144 264C139.578 264 136 267.578 136 272S139.578 280 144 280C174.875 280 200 305.125 200 336C200 340.422 203.578 344 208 344S216 340.422 216 336C216 296.297 183.703 264 144 264ZM208 72C203.578 72 200 75.578 200 80C200 110.875 174.875 136 144 136C139.578 136 136 139.578 136 144S139.578 152 144 152C183.703 152 216 119.703 216 80C216 75.578 212.422 72 208 72ZM367.984 112C323.801 112 287.984 154.98 287.984 208C287.984 261.018 323.801 304 367.984 304S447.984 261.018 447.984 208C447.984 154.98 412.168 112 367.984 112ZM367.984 288C332.695 288 303.984 252.111 303.984 208S332.695 128 367.984 128S431.984 163.889 431.984 208S403.273 288 367.984 288ZM592 264C552.297 264 520 296.297 520 336C520 340.422 523.578 344 528 344S536 340.422 536 336C536 305.125 561.125 280 592 280C596.422 280 600 276.422 600 272S596.422 264 592 264ZM592 136C561.125 136 536 110.875 536 80C536 75.578 532.422 72 528 72S520 75.578 520 80C520 119.703 552.297 152 592 152C596.422 152 600 148.422 600 144S596.422 136 592 136ZM536 416C531.578 416 528 419.578 528 424C528 446.062 510.062 464 488 464H72C41.125 464 16 438.875 16 408V152C16 129.938 33.938 112 56 112C60.422 112 64 108.422 64 104S60.422 96 56 96C25.125 96 0 121.125 0 152V408C0 447.703 32.297 480 72 480H488C518.875 480 544 454.875 544 424C544 419.578 540.422 416 536 416Z" />
        </Icon>
    </>
}