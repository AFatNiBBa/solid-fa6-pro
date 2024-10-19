
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cloud-bolt-sun` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-bolt-sun?s=light cloud-bolt-sun}
 * @preview ![cloud-bolt-sun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgMzUySDQwMy4yNjZMNDkyLjA0NyAyNTAuNTMxQzQ5Ny44NTkgMjQzLjg3NSA0OTcuMTg4IDIzMy43ODEgNDkwLjUzMSAyMjcuOTY5QzQ4My44OTEgMjIyLjEyNSA0NzMuNzk3IDIyMi43NSA0NjcuOTUzIDIyOS40NjlMMzU1Ljk1MyAzNTcuNDY5QzM1MS44MjggMzYyLjE4OCAzNTAuODI4IDM2OC45MDYgMzUzLjQzOCAzNzQuNjI1QzM1Ni4wMzEgMzgwLjM0NCAzNjEuNzE5IDM4NCAzNjggMzg0SDQ2MC43MzRMMzcxLjk1MyA0ODUuNDY5QzM2Ni4xNDEgNDkyLjEyNSAzNjYuODEyIDUwMi4yMTkgMzczLjQ2OSA1MDguMDMxQzM3Ni41IDUxMC42ODggMzgwLjI1IDUxMiAzODQgNTEyQzM4OC40NTMgNTEyIDM5Mi44NzUgNTEwLjE1NiAzOTYuMDQ3IDUwNi41MzFMNTA4LjA0NyAzNzguNTMxQzUxMi4xNzIgMzczLjgxMyA1MTMuMTcyIDM2Ny4wOTQgNTEwLjU2MiAzNjEuMzc1QzUwNy45NjkgMzU1LjY1NiA1MDIuMjgxIDM1MiA0OTYgMzUyWk01NzUuMjUgMTk3LjI1QzU3MCAxNTguMjUgNTM2LjUgMTI4IDQ5NiAxMjhDNDg3LjM3NSAxMjggNDc5IDEyOS4zNzUgNDcwLjc1IDEzMi4yNUM0NTEuMTI1IDEwOS4zNzUgNDIyLjYyNSA5NiAzOTIgOTZDMzM1LjUgOTYgMjg5LjI1IDE0MS4yNSAyODggMTk3LjYyNUMyNTAuMjUgMjEwLjg3NSAyMjQgMjQ2Ljg3NSAyMjQgMjg4QzIyNCAzMzQuNDczIDI1Ny4zMTQgMzczLjQxNCAzMDEuMjgzIDM4Mi4xNjJDMzExLjAxNiAzODQuMSAzMjAgMzc2LjI3OSAzMjAgMzY2LjM1N1YzNjUuODExQzMyMCAzNTguNDc3IDMxNS4wNzIgMzUxLjg0NCAzMDcuOSAzNTAuMjk5QzI4MS41MzkgMzQ0LjYyNSAyNjAuMDM3IDMyMy43NDggMjU2LjUzMSAyOTYuMjk3QzI1Mi4xODIgMjYyLjI1MiAyNzUuMDQ3IDIzMS41MTQgMzA4IDIyNS4yNUwzMDguNSAyMjUuMTVDMzE2LjQxOCAyMjMuNTcyIDMyMS44MTQgMjE2LjE3MiAzMjAuOTIgMjA4LjE0OEMzMjAuMzk4IDIwMy40NjUgMzIwLjU2OCAyMDUuNjggMzIwLjE2IDE5Ny43NEMzMjEuMzU0IDE1OS4wMzUgMzUzLjEzMSAxMjggMzkyLjEyNSAxMjhDNDE2LjM3NSAxMjggNDM4Ljg3NSAxNDAuMjUgNDUyLjI1IDE2MC43NUw0NTIuNTQxIDE2MS4xOTdDNDU2Ljk3OSAxNjcuOTk2IDQ2NS45MDQgMTcwLjIzIDQ3My4wMiAxNjYuMzJMNDczLjM3NSAxNjYuMTI1QzUwNi4xMjUgMTQ4LjI1IDU0NC4xMjUgMTc0LjI1IDU0NC4yNSAyMDYuNUw1NDQuMTk5IDIwOS43NThDNTQ0LjA4NCAyMTcuMjc5IDU0OS4zNjkgMjIzLjgwMyA1NTYuNzUgMjI1LjI1QzU4Ni42MjUgMjMxLjI1IDYwOC4xMjUgMjU3LjYyNSA2MDguMTI1IDI4OEM2MDguMDE2IDMxOC45ODggNTg1Ljc4MSAzNDQuOTU1IDU1Ni40NTcgMzUwLjc3OUM1NDkuMTMxIDM1Mi4yMzQgNTQ0IDM1OC44ODkgNTQ0IDM2Ni4zNTdDNTQ0IDM3Ni4yNzkgNTUyLjk4NiAzODQuMSA1NjIuNzE3IDM4Mi4xNjJDNjA2LjY4NiAzNzMuNDE0IDY0MCAzMzQuNDczIDY0MCAyODhDNjQwIDI0Ni43NSA2MTMuMzc1IDIxMC4zNzUgNTc1LjI1IDE5Ny4yNVpNMTYwLjI1IDI5MS43NUMxNTYuNzUgMjg2LjM3NSAxNTAuMzc1IDI4My42MjUgMTQzLjg3NSAyODQuODc1TDg3Ljg3NSAyOTZMOTkgMjQwQzEwMC4yNSAyMzMuNjI1IDk3LjYyNSAyMjcuMjUgOTIuMjUgMjIzLjYyNUw0NC43NSAxOTEuNzVMOTIuMjUgMTYwQzk3LjYyNSAxNTYuMzc1IDEwMC4yNSAxNDkuODc1IDk5IDE0My42MjVMODcuODc1IDg3LjYyNUwxNDMuODc1IDk4Ljc1QzE1MC4zNzUgMTAwIDE1Ni43NSA5Ny4yNSAxNjAuMjUgOTEuODc1TDE5MiA0NC4zNzVMMjIzLjc1IDkxLjg3NUMyMjcuMzc1IDk3LjI1IDIzMy43NSAxMDAgMjQwLjI1IDk4Ljc1TDMxOS42MjUgODNDMzI4LjI1IDgxLjI1IDMzMy44NzUgNzIuODc1IDMzMi4yNSA2NC4yNUMzMzAuNSA1NS41IDMyMS44NzUgNDkuNzUgMzEzLjM3NSA1MS42MjVMMjQ0LjUgNjUuMjVMMjA1LjI1IDYuNzVDMTk5LjM3NSAtMi4yNSAxODQuNzUgLTIuMjUgMTc4Ljc1IDYuNzVMMTM5LjYyNSA2NS4yNUw3MC42MjUgNTEuNUM2NS4yNSA1MC4zNzUgNTkuODc1IDUyLjEyNSA1Ni4yNSA1NS44NzVDNTIuMzc1IDU5Ljc1IDUwLjc1IDY1LjEyNSA1MS43NSA3MC4zNzVMNjUuNSAxMzkuMzc1TDcuMTI1IDE3OC41QzIuNzUgMTgxLjUgMCAxODYuMzc1IDAgMTkxLjc1UzIuNzUgMjAyLjEyNSA3LjEyNSAyMDUuMTI1TDY1LjUgMjQ0LjI1TDUxLjc1IDMxMy4yNUM1MC43NSAzMTguNSA1Mi4zNzUgMzIzLjg3NSA1Ni4yNSAzMjcuNzVDNjAgMzMxLjUgNjUuMjUgMzMzLjI1IDcwLjYyNSAzMzIuMTI1TDEzOS41IDMxOC4zNzVMMTc4LjYyNSAzNzYuODc1QzE4MS43NSAzODEuNSAxODYuNzUgMzg0IDE5MS44NzUgMzg0QzE5NSAzODQgMTk4LjEyNSAzODMuMTI1IDIwMC43NSAzODEuMjVDMjA4LjEyNSAzNzYuMzc1IDIxMC4xMjUgMzY2LjM3NSAyMDUuMjUgMzU5LjEyNUwxNjAuMjUgMjkxLjc1Wk0xOTIgMTQwQzIxOC4zNzUgMTQwIDI0MCAxNjAgMjQzLjEyNSAxODUuNjI1QzI0Ny44NzUgMTgyIDI1Mi44NzUgMTc4Ljc1IDI1OC4yNSAxNzUuNzVDMjU5Ljc1IDE2Ny4yNSAyNjIuMTI1IDE1OS4yNSAyNjUgMTUxLjM3NUMyNTAuNzUgMTI1Ljc1IDIyMy41IDEwOCAxOTIgMTA4QzE0NS43NSAxMDggMTA4LjI1IDE0NS42MjUgMTA4LjI1IDE5MS43NUMxMDguMjUgMjM4IDE0NS43NSAyNzUuNjI1IDE5MiAyNzUuNjI1QzE5Mi4yNSAyNzUuNjI1IDE5Mi42MjUgMjc1LjUgMTkyLjg3NSAyNzUuNUMxOTQgMjY0LjEyNSAxOTYuNjI1IDI1My4xMjUgMjAwLjYyNSAyNDIuNzVDMTk3Ljc1IDI0My4yNSAxOTUgMjQzLjYyNSAxOTIuMTI1IDI0My42MjVDMTYzLjYyNSAyNDMuNjI1IDE0MC4zNzUgMjIwLjM3NSAxNDAuMzc1IDE5MS44NzVDMTQwLjI1IDE2My4yNSAxNjMuNSAxNDAgMTkyIDE0MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CloudBoltSun(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M496 352H403.266L492.047 250.531C497.859 243.875 497.188 233.781 490.531 227.969C483.891 222.125 473.797 222.75 467.953 229.469L355.953 357.469C351.828 362.188 350.828 368.906 353.438 374.625C356.031 380.344 361.719 384 368 384H460.734L371.953 485.469C366.141 492.125 366.812 502.219 373.469 508.031C376.5 510.688 380.25 512 384 512C388.453 512 392.875 510.156 396.047 506.531L508.047 378.531C512.172 373.813 513.172 367.094 510.562 361.375C507.969 355.656 502.281 352 496 352ZM575.25 197.25C570 158.25 536.5 128 496 128C487.375 128 479 129.375 470.75 132.25C451.125 109.375 422.625 96 392 96C335.5 96 289.25 141.25 288 197.625C250.25 210.875 224 246.875 224 288C224 334.473 257.314 373.414 301.283 382.162C311.016 384.1 320 376.279 320 366.357V365.811C320 358.477 315.072 351.844 307.9 350.299C281.539 344.625 260.037 323.748 256.531 296.297C252.182 262.252 275.047 231.514 308 225.25L308.5 225.15C316.418 223.572 321.814 216.172 320.92 208.148C320.398 203.465 320.568 205.68 320.16 197.74C321.354 159.035 353.131 128 392.125 128C416.375 128 438.875 140.25 452.25 160.75L452.541 161.197C456.979 167.996 465.904 170.23 473.02 166.32L473.375 166.125C506.125 148.25 544.125 174.25 544.25 206.5L544.199 209.758C544.084 217.279 549.369 223.803 556.75 225.25C586.625 231.25 608.125 257.625 608.125 288C608.016 318.988 585.781 344.955 556.457 350.779C549.131 352.234 544 358.889 544 366.357C544 376.279 552.986 384.1 562.717 382.162C606.686 373.414 640 334.473 640 288C640 246.75 613.375 210.375 575.25 197.25ZM160.25 291.75C156.75 286.375 150.375 283.625 143.875 284.875L87.875 296L99 240C100.25 233.625 97.625 227.25 92.25 223.625L44.75 191.75L92.25 160C97.625 156.375 100.25 149.875 99 143.625L87.875 87.625L143.875 98.75C150.375 100 156.75 97.25 160.25 91.875L192 44.375L223.75 91.875C227.375 97.25 233.75 100 240.25 98.75L319.625 83C328.25 81.25 333.875 72.875 332.25 64.25C330.5 55.5 321.875 49.75 313.375 51.625L244.5 65.25L205.25 6.75C199.375 -2.25 184.75 -2.25 178.75 6.75L139.625 65.25L70.625 51.5C65.25 50.375 59.875 52.125 56.25 55.875C52.375 59.75 50.75 65.125 51.75 70.375L65.5 139.375L7.125 178.5C2.75 181.5 0 186.375 0 191.75S2.75 202.125 7.125 205.125L65.5 244.25L51.75 313.25C50.75 318.5 52.375 323.875 56.25 327.75C60 331.5 65.25 333.25 70.625 332.125L139.5 318.375L178.625 376.875C181.75 381.5 186.75 384 191.875 384C195 384 198.125 383.125 200.75 381.25C208.125 376.375 210.125 366.375 205.25 359.125L160.25 291.75ZM192 140C218.375 140 240 160 243.125 185.625C247.875 182 252.875 178.75 258.25 175.75C259.75 167.25 262.125 159.25 265 151.375C250.75 125.75 223.5 108 192 108C145.75 108 108.25 145.625 108.25 191.75C108.25 238 145.75 275.625 192 275.625C192.25 275.625 192.625 275.5 192.875 275.5C194 264.125 196.625 253.125 200.625 242.75C197.75 243.25 195 243.625 192.125 243.625C163.625 243.625 140.375 220.375 140.375 191.875C140.25 163.25 163.5 140 192 140Z" />
        </Icon>
    </>
}