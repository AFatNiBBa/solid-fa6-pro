
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sandwich` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sandwich?s=light sandwich}
 * @preview ![sandwich](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjMuOTg4IDMyMEgzODMuOTk4TDMxOS45OTkgMzUyTDI1NS45OTkgMzIwSDQ4LjAxQzIxLjYxIDMyMCAwLjAxMSAzNDEuNiAwLjAxMSAzNjhWNDAwQzAuMDExIDQyNi40IDIxLjYxIDQ0OCA0OC4wMSA0NDhINDYzLjk4OEM0OTAuMzg4IDQ0OCA1MTEuOTg4IDQyNi40IDUxMS45ODggNDAwVjM2OEM1MTEuOTg4IDM0MS42IDQ5MC4zODggMzIwIDQ2My45ODggMzIwWk00NzkuOTg4IDQwMEM0NzkuOTg4IDQwOC42NzIgNDcyLjY2MiA0MTYgNDYzLjk4OCA0MTZINDguMDFDMzkuMzM4IDQxNiAzMi4wMSA0MDguNjcyIDMyLjAxIDQwMFYzNjhDMzIuMDEgMzU5LjMyNiAzOS4zMzggMzUyIDQ4LjAxIDM1MkgyNDguNDQ1TDMwNS42ODggMzgwLjYyMUMzMTAuMTkyIDM4Mi44NzMgMzE1LjA5NyAzODQgMzE5Ljk5OSAzODRDMzI0LjkwMyAzODQgMzI5LjgwNSAzODIuODczIDMzNC4zMDkgMzgwLjYyMUwzOTEuNTUzIDM1Mkg0NjMuOTg4QzQ3Mi42NjIgMzUyIDQ3OS45ODggMzU5LjMyNiA0NzkuOTg4IDM2OFY0MDBaTTU1Ljg5MSAyNzQuNDY5QzczIDI2NS44MTIgOTIuMzc1IDI1NiAxMjkuNTMxIDI1NkMxNjYuNzE5IDI1NiAxODYuMDkzIDI2NS44MTIgMjAzLjE1NiAyNzQuNDM4QzIxOC4wMzEgMjgyLjAxNiAyMjkuNzY1IDI4OCAyNTYuMjM0IDI4OEMyODIuNjg3IDI4OCAyOTQuMzc0IDI4Mi4wMTYgMzA5LjE0IDI3NC40NTNDMzI2LjI2NCAyNjUuODEyIDM0NS42NzEgMjU2IDM4Mi43MDIgMjU2QzQxOS43NDggMjU2IDQzOS4xMjMgMjY1LjgxMiA0NTYuMzczIDI3NC41MzFDNDY3Ljk2NyAyODAuMzc1IDQ3Ny45OTggMjg1LjQwNiA0OTQuMjYzIDI4Ny4xODhDNTAzLjEyMyAyODguMDc4IDUxMC45MzUgMjgxLjgxMiA1MTEuOTA0IDI3My4wMTZDNTEyLjg1NyAyNjQuMjM0IDUwNi41MTMgMjU2LjM0NCA0OTcuNzMyIDI1NS4zNzVDNDg3LjIxNyAyNTQuMjE5IDQ4MS4zNTcgMjUxLjI4MSA0NzAuNjcgMjQ1LjkwNkM0NTIuNDA0IDIzNi42NzIgNDI3LjM4OSAyMjQgMzgyLjcwMiAyMjRDMzM4LjA0NiAyMjQgMzEyLjk5OSAyMzYuNjU2IDI5NC42MDggMjQ1LjkzOEMyODEuNTMgMjUyLjY0MSAyNzQuOTY4IDI1NiAyNTYuMjM0IDI1NkMyMzcuNDUyIDI1NiAyMzAuODQzIDI1Mi42NDEgMjE3LjY0IDI0NS45MDZDMTk5LjM3NSAyMzYuNjcyIDE3NC4zNTkgMjI0IDEyOS41MzEgMjI0Qzg0LjczNSAyMjQgNTkuNzE5IDIzNi42NzIgNDEuMzkxIDI0NS45MzhDMzAuODI5IDI1MS4yODEgMjUuMDE2IDI1NC4yMTkgMTQuMjgyIDI1NS4zNzVDNS41MDEgMjU2LjMxMiAtMC44NTkgMjY0LjIwMyAwLjA5NSAyNzNDMS4wMzIgMjgxLjc4MSA4Ljc5OCAyODguMTI1IDE3LjcxOSAyODcuMTg4QzM0LjI1MSAyODUuNDA2IDQ0LjI1MSAyODAuMzU5IDU1Ljg5MSAyNzQuNDY5Wk00NjMuOTg4IDY0SDQ4LjAxQzIxLjYxIDY0IDAuMDExIDg1LjYgMC4wMTEgMTEyVjE0NEMwLjAxMSAxNzAuNCAyMS42MSAxOTIgNDguMDEgMTkySDQ2My45ODhDNDkwLjM4OCAxOTIgNTExLjk4OCAxNzAuNCA1MTEuOTg4IDE0NFYxMTJDNTExLjk4OCA4NS42IDQ5MC4zODggNjQgNDYzLjk4OCA2NFpNNDc5Ljk4OCAxNDRDNDc5Ljk4OCAxNTIuNjcyIDQ3Mi42NjIgMTYwIDQ2My45ODggMTYwSDQ4LjAxQzM5LjMzNyAxNjAgMzIuMDEgMTUyLjY3MiAzMi4wMSAxNDRWMTEyQzMyLjAxIDEwMy4zMjYgMzkuMzM3IDk2IDQ4LjAxIDk2SDQ2My45ODhDNDcyLjY2MiA5NiA0NzkuOTg4IDEwMy4zMjYgNDc5Ljk4OCAxMTJWMTQ0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Sandwich(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M463.988 320H383.998L319.999 352L255.999 320H48.01C21.61 320 0.011 341.6 0.011 368V400C0.011 426.4 21.61 448 48.01 448H463.988C490.388 448 511.988 426.4 511.988 400V368C511.988 341.6 490.388 320 463.988 320ZM479.988 400C479.988 408.672 472.662 416 463.988 416H48.01C39.338 416 32.01 408.672 32.01 400V368C32.01 359.326 39.338 352 48.01 352H248.445L305.688 380.621C310.192 382.873 315.097 384 319.999 384C324.903 384 329.805 382.873 334.309 380.621L391.553 352H463.988C472.662 352 479.988 359.326 479.988 368V400ZM55.891 274.469C73 265.812 92.375 256 129.531 256C166.719 256 186.093 265.812 203.156 274.438C218.031 282.016 229.765 288 256.234 288C282.687 288 294.374 282.016 309.14 274.453C326.264 265.812 345.671 256 382.702 256C419.748 256 439.123 265.812 456.373 274.531C467.967 280.375 477.998 285.406 494.263 287.188C503.123 288.078 510.935 281.812 511.904 273.016C512.857 264.234 506.513 256.344 497.732 255.375C487.217 254.219 481.357 251.281 470.67 245.906C452.404 236.672 427.389 224 382.702 224C338.046 224 312.999 236.656 294.608 245.938C281.53 252.641 274.968 256 256.234 256C237.452 256 230.843 252.641 217.64 245.906C199.375 236.672 174.359 224 129.531 224C84.735 224 59.719 236.672 41.391 245.938C30.829 251.281 25.016 254.219 14.282 255.375C5.501 256.312 -0.859 264.203 0.095 273C1.032 281.781 8.798 288.125 17.719 287.188C34.251 285.406 44.251 280.359 55.891 274.469ZM463.988 64H48.01C21.61 64 0.011 85.6 0.011 112V144C0.011 170.4 21.61 192 48.01 192H463.988C490.388 192 511.988 170.4 511.988 144V112C511.988 85.6 490.388 64 463.988 64ZM479.988 144C479.988 152.672 472.662 160 463.988 160H48.01C39.337 160 32.01 152.672 32.01 144V112C32.01 103.326 39.337 96 48.01 96H463.988C472.662 96 479.988 103.326 479.988 112V144Z" />
        </Icon>
    </>
}