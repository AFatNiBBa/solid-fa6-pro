
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cable-car` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cable-car?s=thin cable-car}
 * @preview ![cable-car](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDAgMzg0SDI3MkMyODkuNjc0IDM4NCAzMDQgMzY5LjY3MiAzMDQgMzUyVjMyMEMzMDQgMzAyLjMyNiAyODkuNjc0IDI4OCAyNzIgMjg4SDI0MEMyMjIuMzI3IDI4OCAyMDggMzAyLjMyNiAyMDggMzIwVjM1MkMyMDggMzY5LjY3MiAyMjIuMzI3IDM4NCAyNDAgMzg0Wk0yMjQgMzIwQzIyNCAzMTEuMTc4IDIzMS4xNzggMzA0IDI0MCAzMDRIMjcyQzI4MC44MjMgMzA0IDI4OCAzMTEuMTc4IDI4OCAzMjBWMzUyQzI4OCAzNjAuODIyIDI4MC44MjMgMzY4IDI3MiAzNjhIMjQwQzIzMS4xNzggMzY4IDIyNCAzNjAuODIyIDIyNCAzNTJWMzIwWk04MCAzMjBWMzUyQzgwIDM2OS42NzIgOTQuMzI3IDM4NCAxMTIgMzg0SDE0NEMxNjEuNjc0IDM4NCAxNzYgMzY5LjY3MiAxNzYgMzUyVjMyMEMxNzYgMzAyLjMyNiAxNjEuNjc0IDI4OCAxNDQgMjg4SDExMkM5NC4zMjcgMjg4IDgwIDMwMi4zMjYgODAgMzIwWk05NiAzMjBDOTYgMzExLjE3OCAxMDMuMTc4IDMwNCAxMTIgMzA0SDE0NEMxNTIuODIzIDMwNCAxNjAgMzExLjE3OCAxNjAgMzIwVjM1MkMxNjAgMzYwLjgyMiAxNTIuODIzIDM2OCAxNDQgMzY4SDExMkMxMDMuMTc4IDM2OCA5NiAzNjAuODIyIDk2IDM1MlYzMjBaTTM2OCAzODRINDAwQzQxNy42NzQgMzg0IDQzMiAzNjkuNjcyIDQzMiAzNTJWMzIwQzQzMiAzMDIuMzI2IDQxNy42NzQgMjg4IDQwMCAyODhIMzY4QzM1MC4zMjcgMjg4IDMzNiAzMDIuMzI2IDMzNiAzMjBWMzUyQzMzNiAzNjkuNjcyIDM1MC4zMjcgMzg0IDM2OCAzODRaTTM1MiAzMjBDMzUyIDMxMS4xNzggMzU5LjE3OCAzMDQgMzY4IDMwNEg0MDBDNDA4LjgyMyAzMDQgNDE2IDMxMS4xNzggNDE2IDMyMFYzNTJDNDE2IDM2MC44MjIgNDA4LjgyMyAzNjggNDAwIDM2OEgzNjhDMzU5LjE3OCAzNjggMzUyIDM2MC44MjIgMzUyIDM1MlYzMjBaTTUwMS45OTggNDAuMjVMNi4wMDIgMTY4LjI1QzEuNzIxIDE2OS4zNTkgLTAuODQxIDE3My43MTkgMC4yNTIgMTc4QzEuMTkgMTgxLjYwOSA0LjQ0IDE4NCA4LjAwMiAxODRDOC42NTkgMTg0IDkuMzQ2IDE4My45MjIgMTAuMDAyIDE4My43NUwyNDggMTIyLjMzVjIyNEg5NkM2MC42NTUgMjI0IDMyIDI1Mi42NTQgMzIgMjg4VjQ0OEMzMiA0ODMuMzQ2IDYwLjY1NSA1MTIgOTYgNTEySDQxNkM0NTEuMzQ2IDUxMiA0ODAgNDgzLjM0NiA0ODAgNDQ4VjI4OEM0ODAgMjUyLjY1NCA0NTEuMzQ2IDIyNCA0MTYgMjI0SDI2NFYxMTguMjAxTDUwNS45OTggNTUuNzVDNTEwLjI4IDU0LjY0MSA1MTIuODQyIDUwLjI4MSA1MTEuNzQ4IDQ2QzUxMC42NTUgNDEuNzE5IDUwNi4xODYgMzkuMTcyIDUwMS45OTggNDAuMjVaTTQxNiAyNDBDNDQyLjQ2NyAyNDAgNDY0IDI2MS41MzMgNDY0IDI4OFY0NDhDNDY0IDQ3NC40NjcgNDQyLjQ2NyA0OTYgNDE2IDQ5Nkg5NkM2OS41MzQgNDk2IDQ4IDQ3NC40NjcgNDggNDQ4VjI4OEM0OCAyNjEuNTMzIDY5LjUzNCAyNDAgOTYgMjQwSDQxNlpNMTkyIDk2QzIwOS42NzQgOTYgMjI0IDgxLjY3MiAyMjQgNjRDMjI0IDQ2LjMyNiAyMDkuNjc0IDMyIDE5MiAzMlMxNjAgNDYuMzI2IDE2MCA2NEMxNjAgODEuNjcyIDE3NC4zMjcgOTYgMTkyIDk2Wk0xOTIgNDhDMjAwLjgyMyA0OCAyMDggNTUuMTc4IDIwOCA2NFMyMDAuODIzIDgwIDE5MiA4MFMxNzYgNzIuODIyIDE3NiA2NFMxODMuMTc4IDQ4IDE5MiA0OFpNMjg4IDY0QzMwNS42NzQgNjQgMzIwIDQ5LjY3MiAzMjAgMzJDMzIwIDE0LjMyNiAzMDUuNjc0IDAgMjg4IDBTMjU2IDE0LjMyNiAyNTYgMzJDMjU2IDQ5LjY3MiAyNzAuMzI3IDY0IDI4OCA2NFpNMjg4IDE2QzI5Ni44MjMgMTYgMzA0IDIzLjE3OCAzMDQgMzJTMjk2LjgyMyA0OCAyODggNDhTMjcyIDQwLjgyMiAyNzIgMzJTMjc5LjE3OCAxNiAyODggMTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CableCar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M240 384H272C289.674 384 304 369.672 304 352V320C304 302.326 289.674 288 272 288H240C222.327 288 208 302.326 208 320V352C208 369.672 222.327 384 240 384ZM224 320C224 311.178 231.178 304 240 304H272C280.823 304 288 311.178 288 320V352C288 360.822 280.823 368 272 368H240C231.178 368 224 360.822 224 352V320ZM80 320V352C80 369.672 94.327 384 112 384H144C161.674 384 176 369.672 176 352V320C176 302.326 161.674 288 144 288H112C94.327 288 80 302.326 80 320ZM96 320C96 311.178 103.178 304 112 304H144C152.823 304 160 311.178 160 320V352C160 360.822 152.823 368 144 368H112C103.178 368 96 360.822 96 352V320ZM368 384H400C417.674 384 432 369.672 432 352V320C432 302.326 417.674 288 400 288H368C350.327 288 336 302.326 336 320V352C336 369.672 350.327 384 368 384ZM352 320C352 311.178 359.178 304 368 304H400C408.823 304 416 311.178 416 320V352C416 360.822 408.823 368 400 368H368C359.178 368 352 360.822 352 352V320ZM501.998 40.25L6.002 168.25C1.721 169.359 -0.841 173.719 0.252 178C1.19 181.609 4.44 184 8.002 184C8.659 184 9.346 183.922 10.002 183.75L248 122.33V224H96C60.655 224 32 252.654 32 288V448C32 483.346 60.655 512 96 512H416C451.346 512 480 483.346 480 448V288C480 252.654 451.346 224 416 224H264V118.201L505.998 55.75C510.28 54.641 512.842 50.281 511.748 46C510.655 41.719 506.186 39.172 501.998 40.25ZM416 240C442.467 240 464 261.533 464 288V448C464 474.467 442.467 496 416 496H96C69.534 496 48 474.467 48 448V288C48 261.533 69.534 240 96 240H416ZM192 96C209.674 96 224 81.672 224 64C224 46.326 209.674 32 192 32S160 46.326 160 64C160 81.672 174.327 96 192 96ZM192 48C200.823 48 208 55.178 208 64S200.823 80 192 80S176 72.822 176 64S183.178 48 192 48ZM288 64C305.674 64 320 49.672 320 32C320 14.326 305.674 0 288 0S256 14.326 256 32C256 49.672 270.327 64 288 64ZM288 16C296.823 16 304 23.178 304 32S296.823 48 288 48S272 40.822 272 32S279.178 16 288 16Z" />
        </Icon>
    </>
}