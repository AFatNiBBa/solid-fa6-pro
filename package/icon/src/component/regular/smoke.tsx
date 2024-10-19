
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `smoke` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/smoke?s=regular smoke}
 * @preview ![smoke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NDAgMjQ4QzY0MCAxNjQuMjUgNTcxLjc1IDk2IDQ4OCA5NkM0NzMuNjI1IDk2IDQ1OS42MjUgOTguNzUgNDQ2IDEwMi43NUM0MTguMjUgNjAuMjUgMzcwLjUgMzIgMzE2IDMyQzI5Ni4yNSAzMiAyNzYuNzUgMzUuODc1IDI1Ny44NzUgNDMuNzVDMjI5LjYyNSAxNS43NSAxOTEuODc1IDAgMTUyIDBDNjguMjUgMCAwIDY4LjI1IDAgMTUyQzAgMTg5Ljc1IDE0LjI1IDIyNCAzNy4zNzUgMjUwLjVDMTQuMzc1IDI3OC4yNSAwIDMxMy4yNSAwIDM1MkMwIDQ0MC4yNSA3MS43NSA1MTIgMTYwIDUxMkg1MTJDNTgyLjYyNSA1MTIgNjQwIDQ1NC42MjUgNjQwIDM4NEM2NDAgMzYwLjI1IDYzMyAzMzguMTI1IDYyMS42MjUgMzE4Ljg3NUM2MzMuMTI1IDI5Ny43NSA2NDAgMjczLjc1IDY0MCAyNDhaTTU5MiAyNDhDNTkyIDI1OS4yNSA1ODkuODc1IDI3MC4xMjUgNTg2LjUgMjgwLjI1QzU2NS41IDI2NS4xMjUgNTM5Ljg3NSAyNTYgNTEyIDI1NkM0OTAuMzc1IDI1NiA0NjkuNjI1IDI2MS4zNzUgNDUwLjg3NSAyNzEuODc1QzQyMy43NSAyNDEuNSAzODUuMjUgMjI0IDM0NCAyMjRDMzE5Ljg3NSAyMjQgMjk2Ljc1IDIzMC4xMjUgMjc1LjYyNSAyNDEuNzVDMjY4Ljc1IDIzNC4zNzUgMjYxIDIyOC4xMjUgMjUyLjg3NSAyMjIuMjVDMjY4Ljc1IDE5NC43NSAyOTggMTc2IDMzMiAxNzZDMzQ3LjYyNSAxNzYgMzYyLjc1IDE4MC4yNSAzNzcuMjUgMTg4LjVMMzk0Ljg3NSAxOTguNjI1TDQwNy43NSAxODIuNzVDNDI3Ljg3NSAxNTguMjUgNDU3LjEyNSAxNDQgNDg4IDE0NEM1NDUuMjUgMTQ0IDU5MiAxOTAuNzUgNTkyIDI0OFpNMTUyIDQ4QzE4My42MjUgNDggMjEzLjI1IDYyLjYyNSAyMzMuMjUgODhMMjQ2IDEwNC4xMjVMMjYzLjg3NSA5NC4xMjVDMjgwLjYyNSA4NC43NSAyOTguMjUgODAgMzE2IDgwQzM1MS4yNSA4MCAzODIuMzc1IDk3LjI1IDQwMi4xMjUgMTIzLjYyNUMzOTUuNzUgMTI4LjEyNSAzODkuMjUgMTMyLjc1IDM4My42MjUgMTM4LjI1QzM2NyAxMzEuMzc1IDM0OS43NSAxMjggMzMyIDEyOEMyNzkuMjUgMTI4IDIzMy43NSAxNTcuNjI1IDIwOS44NzUgMjAwLjg3NUMxOTMuODc1IDE5NS41IDE3Ny4yNSAxOTIgMTYwIDE5MkMxMjcuNzUgMTkyIDk3Ljc1IDIwMS43NSA3Mi41IDIxOC4yNUM1Ny4yNSAyMDAuMjUgNDggMTc3LjI1IDQ4IDE1MkM0OCA5NC43NSA5NC43NSA0OCAxNTIgNDhaTTUxMiA0NjRIMTYwQzk4LjI1IDQ2NCA0OCA0MTMuNzUgNDggMzUyUzk4LjI1IDI0MCAxNjAgMjQwQzE5NiAyNDAgMjMwLjEyNSAyNTcuNzUgMjUxLjI1IDI4Ny4zNzVMMjY1Ljc1IDMwNy43NUwyODUuNSAyOTIuMzc1QzMwMi43NSAyNzkuMTI1IDMyMyAyNzIgMzQ0IDI3MkMzNzcuMTI1IDI3MiA0MDcuMzc1IDI4OSA0MjUuMjUgMzE3LjM3NUw0MzkuNzUgMzQwLjc1TDQ2MC44NzUgMzIzLjEyNUM0NzEuMjUgMzE0LjM3NSA0ODguNSAzMDQuMTI1IDUxMiAzMDQuMTI1QzU1Ni4xMjUgMzA0LjEyNSA1OTIgMzQwIDU5MiAzODQuMTI1UzU1Ni4xMjUgNDY0IDUxMiA0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Smoke(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M640 248C640 164.25 571.75 96 488 96C473.625 96 459.625 98.75 446 102.75C418.25 60.25 370.5 32 316 32C296.25 32 276.75 35.875 257.875 43.75C229.625 15.75 191.875 0 152 0C68.25 0 0 68.25 0 152C0 189.75 14.25 224 37.375 250.5C14.375 278.25 0 313.25 0 352C0 440.25 71.75 512 160 512H512C582.625 512 640 454.625 640 384C640 360.25 633 338.125 621.625 318.875C633.125 297.75 640 273.75 640 248ZM592 248C592 259.25 589.875 270.125 586.5 280.25C565.5 265.125 539.875 256 512 256C490.375 256 469.625 261.375 450.875 271.875C423.75 241.5 385.25 224 344 224C319.875 224 296.75 230.125 275.625 241.75C268.75 234.375 261 228.125 252.875 222.25C268.75 194.75 298 176 332 176C347.625 176 362.75 180.25 377.25 188.5L394.875 198.625L407.75 182.75C427.875 158.25 457.125 144 488 144C545.25 144 592 190.75 592 248ZM152 48C183.625 48 213.25 62.625 233.25 88L246 104.125L263.875 94.125C280.625 84.75 298.25 80 316 80C351.25 80 382.375 97.25 402.125 123.625C395.75 128.125 389.25 132.75 383.625 138.25C367 131.375 349.75 128 332 128C279.25 128 233.75 157.625 209.875 200.875C193.875 195.5 177.25 192 160 192C127.75 192 97.75 201.75 72.5 218.25C57.25 200.25 48 177.25 48 152C48 94.75 94.75 48 152 48ZM512 464H160C98.25 464 48 413.75 48 352S98.25 240 160 240C196 240 230.125 257.75 251.25 287.375L265.75 307.75L285.5 292.375C302.75 279.125 323 272 344 272C377.125 272 407.375 289 425.25 317.375L439.75 340.75L460.875 323.125C471.25 314.375 488.5 304.125 512 304.125C556.125 304.125 592 340 592 384.125S556.125 464 512 464Z" />
        </Icon>
    </>
}