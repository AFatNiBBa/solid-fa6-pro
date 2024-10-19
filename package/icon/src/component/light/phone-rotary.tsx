
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `phone-rotary` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/phone-rotary?s=light phone-rotary}
 * @preview ![phone-rotary](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYuMDAxIDI0MEMyMTEuODc2IDI0MCAxNzYuMDAxIDI3NS44NzUgMTc2LjAwMSAzMjBTMjExLjg3NiA0MDAgMjU2LjAwMSA0MDBTMzM2LjAwMSAzNjQuMTI1IDMzNi4wMDEgMzIwUzMwMC4xMjYgMjQwIDI1Ni4wMDEgMjQwWk0yNTYuMDAxIDM2OEMyMjkuNTAxIDM2OCAyMDguMDAxIDM0Ni41IDIwOC4wMDEgMzIwUzIyOS41MDEgMjcyIDI1Ni4wMDEgMjcyUzMwNC4wMDEgMjkzLjUgMzA0LjAwMSAzMjBTMjgyLjUwMSAzNjggMjU2LjAwMSAzNjhaTTUwMC4yNDkgMTE4LjI1QzQzMS43NDkgNjMuMjUgMzQ0Ljc1MSAzMiAyNTYuMDAxIDMyUzgwLjI1MyA2My4yNSAxMS43NTMgMTE4LjI1QzQuMjUzIDEyNC4zNzUgLTAuMTIyIDEzMy42MjUgMC4wMDMgMTQzLjI1VjIwOEMwLjAwMyAyMTYuODM2IDcuMTY1IDIyNCAxNi4wMDMgMjI0SDgwLjAwMUM4OC44MzcgMjI0IDk2LjAwMSAyMTYuODM2IDk2LjAwMSAyMDhDOTYuMDAxIDE5OS4xNjIgODguODM3IDE5MiA4MC4wMDEgMTkySDMyLjAwM0wzMS43NTMgMTQzLjEyNUM5NS4zNzggOTIuMTI1IDE3NC41MDEgNjQuMjUgMjU2LjAwMSA2NEMzMzcuNTAxIDY0LjEyNSA0MTYuNDk5IDkyLjEyNSA0NzkuOTk5IDE0My4yNVYxOTJINDMyLjAwMUM0MjMuMTYzIDE5MiA0MTYuMDAxIDE5OS4xNjIgNDE2LjAwMSAyMDhDNDE2LjAwMSAyMTYuODM2IDQyMy4xNjMgMjI0IDQzMi4wMDEgMjI0SDQ5NS45OTlDNTA0LjgzNSAyMjQgNTExLjk5OSAyMTYuODM2IDUxMS45OTkgMjA4VjE0My4yNUM1MTIuMTI0IDEzMy42MjUgNTA3Ljc0OSAxMjQuMzc1IDUwMC4yNDkgMTE4LjI1Wk0zNzAuMzM1IDE5Mi4xODJDMzU5LjgwNyAxNzMuNzY2IDM0MC43OTYgMTYyLjMzOCAzMTkuODY4IDE2MC42NjZDMzE5Ljg3OCAxNjAuNDMyIDMyMC4wMDMgMTYwLjIzNiAzMjAuMDAzIDE2MFYxMjhDMzIwLjAwMyAxMTkuMTYyIDMxMi44MzkgMTEyIDMwNC4wMDMgMTEyUzI4OC4wMDMgMTE5LjE2MiAyODguMDAzIDEyOFYxNjBIMjI0LjAwM1YxMjhDMjI0LjAwMyAxMTkuMTYyIDIxNi44MzkgMTEyIDIwOC4wMDMgMTEyUzE5Mi4wMDMgMTE5LjE2MiAxOTIuMDAzIDEyOFYxNjBDMTkyLjAwMyAxNjAuMjM4IDE5Mi4xMyAxNjAuNDM4IDE5Mi4xMzkgMTYwLjY3NEMxNzEuMTkyIDE2Mi4zNjcgMTUyLjE2NSAxNzMuODEyIDE0MS42MjggMTkyLjI1TDQwLjQzNiAzNjkuMzAzQzM0LjkwOSAzNzguOTc1IDMyLjAwMyAzODkuOTIgMzIuMDAzIDQwMS4wNTlWNDE2QzMyLjAwMyA0NTEuMTk5IDYwLjgwMSA0ODAgOTYuMDAzIDQ4MEg0MTUuOTk5QzQ1MS4xOTggNDgwIDQ3OS45OTkgNDUxLjE5OSA0NzkuOTk5IDQxNlY0MDEuMDU5QzQ3OS45OTkgMzg5LjkyIDQ3Ny4wOTEgMzc4Ljk3NSA0NzEuNTYzIDM2OS4zMDNMMzcwLjMzNSAxOTIuMTgyWk00NDcuOTk5IDQxNkM0NDcuOTk5IDQzMy42NzIgNDMzLjY3MSA0NDggNDE1Ljk5OSA0NDhIOTYuMDAzQzc4LjMyOSA0NDggNjQuMDAzIDQzMy42NzIgNjQuMDAzIDQxNlY0MDAuOTk4QzY0LjAwMyAzOTUuNDMgNjUuNDU2IDM4OS45NTUgNjguMjE5IDM4NS4xMjFMMTY5LjM3NiAyMDguMTI1QzE3NS4wNzUgMTk4LjE1MiAxODUuNjc4IDE5MiAxOTcuMTYzIDE5MkgzMTQuODc2QzMyNi4zMzcgMTkyIDMzNi45MTkgMTk4LjE0MSAzNDIuNjA2IDIwOC4wOTJMNDQzLjc4IDM4NS4xMjFDNDQ2LjU0NCAzODkuOTU1IDQ0Ny45OTkgMzk1LjQzIDQ0Ny45OTkgNDAwLjk5OFY0MTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function PhoneRotary(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256.001 240C211.876 240 176.001 275.875 176.001 320S211.876 400 256.001 400S336.001 364.125 336.001 320S300.126 240 256.001 240ZM256.001 368C229.501 368 208.001 346.5 208.001 320S229.501 272 256.001 272S304.001 293.5 304.001 320S282.501 368 256.001 368ZM500.249 118.25C431.749 63.25 344.751 32 256.001 32S80.253 63.25 11.753 118.25C4.253 124.375 -0.122 133.625 0.003 143.25V208C0.003 216.836 7.165 224 16.003 224H80.001C88.837 224 96.001 216.836 96.001 208C96.001 199.162 88.837 192 80.001 192H32.003L31.753 143.125C95.378 92.125 174.501 64.25 256.001 64C337.501 64.125 416.499 92.125 479.999 143.25V192H432.001C423.163 192 416.001 199.162 416.001 208C416.001 216.836 423.163 224 432.001 224H495.999C504.835 224 511.999 216.836 511.999 208V143.25C512.124 133.625 507.749 124.375 500.249 118.25ZM370.335 192.182C359.807 173.766 340.796 162.338 319.868 160.666C319.878 160.432 320.003 160.236 320.003 160V128C320.003 119.162 312.839 112 304.003 112S288.003 119.162 288.003 128V160H224.003V128C224.003 119.162 216.839 112 208.003 112S192.003 119.162 192.003 128V160C192.003 160.238 192.13 160.438 192.139 160.674C171.192 162.367 152.165 173.812 141.628 192.25L40.436 369.303C34.909 378.975 32.003 389.92 32.003 401.059V416C32.003 451.199 60.801 480 96.003 480H415.999C451.198 480 479.999 451.199 479.999 416V401.059C479.999 389.92 477.091 378.975 471.563 369.303L370.335 192.182ZM447.999 416C447.999 433.672 433.671 448 415.999 448H96.003C78.329 448 64.003 433.672 64.003 416V400.998C64.003 395.43 65.456 389.955 68.219 385.121L169.376 208.125C175.075 198.152 185.678 192 197.163 192H314.876C326.337 192 336.919 198.141 342.606 208.092L443.78 385.121C446.544 389.955 447.999 395.43 447.999 400.998V416Z" />
        </Icon>
    </>
}