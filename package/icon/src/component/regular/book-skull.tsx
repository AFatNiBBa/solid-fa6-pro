
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `book-skull` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-skull?s=regular book-skull}
 * @preview ![book-skull](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTEuOTcxIDE5NC44NzVWMjA4QzE5MS45NzEgMjE2Ljg3NSAxOTkuMDk2IDIyNCAyMDcuOTcxIDIyNEgyNzEuOTcxQzI4MC44NDYgMjI0IDI4Ny45NzEgMjE2Ljg3NSAyODcuOTcxIDIwOFYxOTQuODc1QzMwNy4zNDYgMTgzLjI1IDMxOS45NzEgMTY0Ljg3NSAzMTkuOTcxIDE0NEMzMTkuOTcxIDEwOC42MjUgMjg0LjA5NiA4MCAyMzkuOTcxIDgwUzE1OS45NzEgMTA4LjYyNSAxNTkuOTcxIDE0NEMxNTkuOTcxIDE2NC44NzUgMTcyLjU5NiAxODMuMjUgMTkxLjk3MSAxOTQuODc1Wk0yNzEuOTcxIDEyOEMyODAuODQ2IDEyOCAyODcuOTcxIDEzNS4xMjUgMjg3Ljk3MSAxNDRTMjgwLjg0NiAxNjAgMjcxLjk3MSAxNjBTMjU1Ljk3MSAxNTIuODc1IDI1NS45NzEgMTQ0UzI2My4wOTYgMTI4IDI3MS45NzEgMTI4Wk0yMDcuOTcxIDEyOEMyMTYuODQ2IDEyOCAyMjMuOTcxIDEzNS4xMjUgMjIzLjk3MSAxNDRTMjE2Ljg0NiAxNjAgMjA3Ljk3MSAxNjBTMTkxLjk3MSAxNTIuODc1IDE5MS45NzEgMTQ0UzE5OS4wOTYgMTI4IDIwNy45NzEgMTI4Wk00MjQgNDAwQzQzNy4yNSA0MDAgNDQ4IDM4OS4yNSA0NDggMzc2VjI0QzQ0OCAxMC43NSA0MzcuMjUgMCA0MjQgMEg4MEMzNS44OTEgMCAwIDM1Ljg3NSAwIDgwVjQzMkMwIDQ3Ni4xMjUgMzUuODkxIDUxMiA4MCA1MTJINDI0QzQzNy4yNSA1MTIgNDQ4IDUwMS4yNSA0NDggNDg4UzQzNy4yNSA0NjQgNDI0IDQ2NEg0MTZWNDAwSDQyNFpNMzY4IDQ2NEg4MEM2Mi4zNTkgNDY0IDQ4IDQ0OS42NTYgNDggNDMyUzYyLjM1OSA0MDAgODAgNDAwSDM2OFY0NjRaTTQwMCAzNTJIODBDNjguNjI1IDM1MiA1Ny43OTcgMzU0LjM3NSA0OCAzNTguNjg4VjgwQzQ4IDYyLjM0NCA2Mi4zNTkgNDggODAgNDhINDAwVjM1MlpNMTI4LjgyOCAzMDkuMDYyQzEzMS4wNjIgMzE1Ljc1IDEzNy4yOTcgMzIwIDE0NCAzMjBDMTQ1LjY3MiAzMjAgMTQ3LjM3NSAzMTkuNzUgMTQ5LjA2MiAzMTkuMTg4TDI0MCAyODguODc1TDMzMC45MzggMzE5LjE4OEMzMzIuNjI1IDMxOS43NSAzMzQuMzI4IDMyMCAzMzYgMzIwQzM0Mi43MDMgMzIwIDM0OC45MzggMzE1Ljc1IDM1MS4xNzIgMzA5LjA2MkMzNTMuOTY5IDMwMC42ODcgMzQ5LjQzOCAyOTEuNjI1IDM0MS4wNjIgMjg4LjgxMkwyOTAuNjI1IDI3MkwzNDEuMDYyIDI1NS4xODhDMzQ5LjQzOCAyNTIuMzc1IDM1My45NjkgMjQzLjMxMiAzNTEuMTcyIDIzNC45MzhDMzQ4LjM5MSAyMjYuNTYyIDMzOS4zOTEgMjIyIDMzMC45MzggMjI0LjgxMkwyNDAgMjU1LjEyNUwxNDkuMDYyIDIyNC44MTJDMTQwLjU3OCAyMjIgMTMxLjYwOSAyMjYuNTYyIDEyOC44MjggMjM0LjkzOEMxMjYuMDMxIDI0My4zMTMgMTMwLjU2MiAyNTIuMzc1IDEzOC45MzggMjU1LjE4OEwxODkuMzc1IDI3MkwxMzguOTM4IDI4OC44MTJDMTMwLjU2MiAyOTEuNjI1IDEyNi4wMzEgMzAwLjY4OCAxMjguODI4IDMwOS4wNjJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BookSkull(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M191.971 194.875V208C191.971 216.875 199.096 224 207.971 224H271.971C280.846 224 287.971 216.875 287.971 208V194.875C307.346 183.25 319.971 164.875 319.971 144C319.971 108.625 284.096 80 239.971 80S159.971 108.625 159.971 144C159.971 164.875 172.596 183.25 191.971 194.875ZM271.971 128C280.846 128 287.971 135.125 287.971 144S280.846 160 271.971 160S255.971 152.875 255.971 144S263.096 128 271.971 128ZM207.971 128C216.846 128 223.971 135.125 223.971 144S216.846 160 207.971 160S191.971 152.875 191.971 144S199.096 128 207.971 128ZM424 400C437.25 400 448 389.25 448 376V24C448 10.75 437.25 0 424 0H80C35.891 0 0 35.875 0 80V432C0 476.125 35.891 512 80 512H424C437.25 512 448 501.25 448 488S437.25 464 424 464H416V400H424ZM368 464H80C62.359 464 48 449.656 48 432S62.359 400 80 400H368V464ZM400 352H80C68.625 352 57.797 354.375 48 358.688V80C48 62.344 62.359 48 80 48H400V352ZM128.828 309.062C131.062 315.75 137.297 320 144 320C145.672 320 147.375 319.75 149.062 319.188L240 288.875L330.938 319.188C332.625 319.75 334.328 320 336 320C342.703 320 348.938 315.75 351.172 309.062C353.969 300.687 349.438 291.625 341.062 288.812L290.625 272L341.062 255.188C349.438 252.375 353.969 243.312 351.172 234.938C348.391 226.562 339.391 222 330.938 224.812L240 255.125L149.062 224.812C140.578 222 131.609 226.562 128.828 234.938C126.031 243.313 130.562 252.375 138.938 255.188L189.375 272L138.938 288.812C130.562 291.625 126.031 300.688 128.828 309.062Z" />
        </Icon>
    </>
}