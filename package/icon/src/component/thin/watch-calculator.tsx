
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `watch-calculator` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/watch-calculator?s=thin watch-calculator}
 * @preview ![watch-calculator](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTIgNDQ4QzMwNy41NzggNDQ4IDMwNCA0NTEuNTk0IDMwNCA0NTZWNDcyQzMwNCA0ODUuMjE5IDI5My4yMzQgNDk2IDI4MCA0OTZIMTA0QzkwLjc2NiA0OTYgODAgNDg1LjIxOSA4MCA0NzJWNDU2QzgwIDQ1MS41OTQgNzYuNDIyIDQ0OCA3MiA0NDhTNjQgNDUxLjU5NCA2NCA0NTZWNDcyQzY0IDQ5NC4wNjIgODEuOTM4IDUxMiAxMDQgNTEySDI4MEMzMDIuMDYyIDUxMiAzMjAgNDk0LjA2MiAzMjAgNDcyVjQ1NkMzMjAgNDUxLjU5NCAzMTYuNDIyIDQ0OCAzMTIgNDQ4Wk0zMTIgODBINzJDMzIuMjk3IDgwIDAgMTEyLjMxMiAwIDE1MlYzNjBDMCAzOTkuNjg4IDMyLjI5NyA0MzIgNzIgNDMySDMxMkMzNTEuNzAzIDQzMiAzODQgMzk5LjY4OCAzODQgMzYwVjE1MkMzODQgMTEyLjMxMiAzNTEuNzAzIDgwIDMxMiA4MFpNMzY4IDM2MEMzNjggMzkwLjg3NSAzNDIuODc1IDQxNiAzMTIgNDE2SDcyQzQxLjEyNSA0MTYgMTYgMzkwLjg3NSAxNiAzNjBWMTUyQzE2IDEyMS4xMjUgNDEuMTI1IDk2IDcyIDk2SDMxMkMzNDIuODc1IDk2IDM2OCAxMjEuMTI1IDM2OCAxNTJWMzYwWk03MiA2NEM3Ni40MjIgNjQgODAgNjAuNDA2IDgwIDU2VjQwQzgwIDI2Ljc4MSA5MC43NjYgMTYgMTA0IDE2SDI4MEMyOTMuMjM0IDE2IDMwNCAyNi43ODEgMzA0IDQwVjU2QzMwNCA2MC40MDYgMzA3LjU3OCA2NCAzMTIgNjRTMzIwIDYwLjQwNiAzMjAgNTZWNDBDMzIwIDE3LjkzOCAzMDIuMDYyIDAgMjgwIDBIMTA0QzgxLjkzOCAwIDY0IDE3LjkzOCA2NCA0MFY1NkM2NCA2MC40MDYgNjcuNTc4IDY0IDcyIDY0Wk0yODggMTI4SDk2Qzc4LjMyOCAxMjggNjQgMTQyLjMyNiA2NCAxNjBTNzguMzI4IDE5MiA5NiAxOTJIMjg4QzMwNS42NzQgMTkyIDMyMCAxNzcuNjc0IDMyMCAxNjBTMzA1LjY3NCAxMjggMjg4IDEyOFpNMjg4IDE3Nkg5NkM4Ny4xNzggMTc2IDgwIDE2OC44MjIgODAgMTYwUzg3LjE3OCAxNDQgOTYgMTQ0SDI4OEMyOTYuODIyIDE0NCAzMDQgMTUxLjE3OCAzMDQgMTYwUzI5Ni44MjIgMTc2IDI4OCAxNzZaTTExMiAzMjBIODBDNzEuMTY0IDMyMCA2NCAzMjcuMTY0IDY0IDMzNlYzNjhDNjQgMzc2LjgzNiA3MS4xNjQgMzg0IDgwIDM4NEgxMTJDMTIwLjgzOCAzODQgMTI4IDM3Ni44MzYgMTI4IDM2OFYzMzZDMTI4IDMyNy4xNjQgMTIwLjgzOCAzMjAgMTEyIDMyMFpNMTEyIDM2OEg4MFYzMzZIMTEyVjM2OFpNMjA4IDMyMEgxNzZDMTY3LjE2NCAzMjAgMTYwIDMyNy4xNjQgMTYwIDMzNlYzNjhDMTYwIDM3Ni44MzYgMTY3LjE2NCAzODQgMTc2IDM4NEgyMDhDMjE2LjgzOCAzODQgMjI0IDM3Ni44MzYgMjI0IDM2OFYzMzZDMjI0IDMyNy4xNjQgMjE2LjgzOCAzMjAgMjA4IDMyMFpNMjA4IDM2OEgxNzZWMzM2SDIwOFYzNjhaTTMwNCAzMjBIMjcyQzI2My4xNjQgMzIwIDI1NiAzMjcuMTY0IDI1NiAzMzZWMzY4QzI1NiAzNzYuODM2IDI2My4xNjQgMzg0IDI3MiAzODRIMzA0QzMxMi44MzggMzg0IDMyMCAzNzYuODM2IDMyMCAzNjhWMzM2QzMyMCAzMjcuMTY0IDMxMi44MzggMzIwIDMwNCAzMjBaTTMwNCAzNjhIMjcyVjMzNkgzMDRWMzY4Wk0xMTIgMjI0SDgwQzcxLjE2NCAyMjQgNjQgMjMxLjE2NCA2NCAyNDBWMjcyQzY0IDI4MC44MzYgNzEuMTY0IDI4OCA4MCAyODhIMTEyQzEyMC44MzggMjg4IDEyOCAyODAuODM2IDEyOCAyNzJWMjQwQzEyOCAyMzEuMTY0IDEyMC44MzggMjI0IDExMiAyMjRaTTExMiAyNzJIODBWMjQwSDExMlYyNzJaTTIwOCAyMjRIMTc2QzE2Ny4xNjQgMjI0IDE2MCAyMzEuMTY0IDE2MCAyNDBWMjcyQzE2MCAyODAuODM2IDE2Ny4xNjQgMjg4IDE3NiAyODhIMjA4QzIxNi44MzggMjg4IDIyNCAyODAuODM2IDIyNCAyNzJWMjQwQzIyNCAyMzEuMTY0IDIxNi44MzggMjI0IDIwOCAyMjRaTTIwOCAyNzJIMTc2VjI0MEgyMDhWMjcyWk0zMDQgMjI0SDI3MkMyNjMuMTY0IDIyNCAyNTYgMjMxLjE2NCAyNTYgMjQwVjI3MkMyNTYgMjgwLjgzNiAyNjMuMTY0IDI4OCAyNzIgMjg4SDMwNEMzMTIuODM4IDI4OCAzMjAgMjgwLjgzNiAzMjAgMjcyVjI0MEMzMjAgMjMxLjE2NCAzMTIuODM4IDIyNCAzMDQgMjI0Wk0zMDQgMjcySDI3MlYyNDBIMzA0VjI3MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WatchCalculator(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M312 448C307.578 448 304 451.594 304 456V472C304 485.219 293.234 496 280 496H104C90.766 496 80 485.219 80 472V456C80 451.594 76.422 448 72 448S64 451.594 64 456V472C64 494.062 81.938 512 104 512H280C302.062 512 320 494.062 320 472V456C320 451.594 316.422 448 312 448ZM312 80H72C32.297 80 0 112.312 0 152V360C0 399.688 32.297 432 72 432H312C351.703 432 384 399.688 384 360V152C384 112.312 351.703 80 312 80ZM368 360C368 390.875 342.875 416 312 416H72C41.125 416 16 390.875 16 360V152C16 121.125 41.125 96 72 96H312C342.875 96 368 121.125 368 152V360ZM72 64C76.422 64 80 60.406 80 56V40C80 26.781 90.766 16 104 16H280C293.234 16 304 26.781 304 40V56C304 60.406 307.578 64 312 64S320 60.406 320 56V40C320 17.938 302.062 0 280 0H104C81.938 0 64 17.938 64 40V56C64 60.406 67.578 64 72 64ZM288 128H96C78.328 128 64 142.326 64 160S78.328 192 96 192H288C305.674 192 320 177.674 320 160S305.674 128 288 128ZM288 176H96C87.178 176 80 168.822 80 160S87.178 144 96 144H288C296.822 144 304 151.178 304 160S296.822 176 288 176ZM112 320H80C71.164 320 64 327.164 64 336V368C64 376.836 71.164 384 80 384H112C120.838 384 128 376.836 128 368V336C128 327.164 120.838 320 112 320ZM112 368H80V336H112V368ZM208 320H176C167.164 320 160 327.164 160 336V368C160 376.836 167.164 384 176 384H208C216.838 384 224 376.836 224 368V336C224 327.164 216.838 320 208 320ZM208 368H176V336H208V368ZM304 320H272C263.164 320 256 327.164 256 336V368C256 376.836 263.164 384 272 384H304C312.838 384 320 376.836 320 368V336C320 327.164 312.838 320 304 320ZM304 368H272V336H304V368ZM112 224H80C71.164 224 64 231.164 64 240V272C64 280.836 71.164 288 80 288H112C120.838 288 128 280.836 128 272V240C128 231.164 120.838 224 112 224ZM112 272H80V240H112V272ZM208 224H176C167.164 224 160 231.164 160 240V272C160 280.836 167.164 288 176 288H208C216.838 288 224 280.836 224 272V240C224 231.164 216.838 224 208 224ZM208 272H176V240H208V272ZM304 224H272C263.164 224 256 231.164 256 240V272C256 280.836 263.164 288 272 288H304C312.838 288 320 280.836 320 272V240C320 231.164 312.838 224 304 224ZM304 272H272V240H304V272Z" />
        </Icon>
    </>
}