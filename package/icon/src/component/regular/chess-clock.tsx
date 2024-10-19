
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chess-clock` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock?s=regular chess-clock}
 * @preview ![chess-clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYgMTEySDU0NFYxMDRDNTQ0IDkwLjc0NiA1MzMuMjU2IDgwIDUyMCA4MEg0MDhDMzk0Ljc0NiA4MCAzODQgOTAuNzQ2IDM4NCAxMDRWMTEySDIwMFY4MEgyMzJDMjQ1LjI1NiA4MCAyNTYgNjkuMjU0IDI1NiA1NlMyNDUuMjU2IDMyIDIzMiAzMkgxMjBDMTA2Ljc0NiAzMiA5NiA0Mi43NDYgOTYgNTZTMTA2Ljc0NiA4MCAxMjAgODBIMTUyVjExMkg2NEMyOC42NTQgMTEyIDAgMTQwLjY1NCAwIDE3NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDU3NkM2MTEuMzQ4IDQ4MCA2NDAgNDUxLjM0NiA2NDAgNDE2VjE3NkM2NDAgMTQwLjY1NCA2MTEuMzQ4IDExMiA1NzYgMTEyWk01OTIgNDE2QzU5MiA0MjQuODIyIDU4NC44MjIgNDMyIDU3NiA0MzJINjRDNTUuMTc4IDQzMiA0OCA0MjQuODIyIDQ4IDQxNlYxNzZDNDggMTY3LjE3OCA1NS4xNzggMTYwIDY0IDE2MEg1NzZDNTg0LjgyMiAxNjAgNTkyIDE2Ny4xNzggNTkyIDE3NlY0MTZaTTIwMCAxOTJDMTQyLjU2MiAxOTIgOTYgMjM4LjU2MiA5NiAyOTZTMTQyLjU2MiA0MDAgMjAwIDQwMFMzMDQgMzUzLjQzOCAzMDQgMjk2UzI1Ny40MzggMTkyIDIwMCAxOTJaTTIxNiAyODhDMjE2IDI5Ni44NDQgMjA4Ljg0NCAzMDQgMjAwIDMwNFMxODQgMjk2Ljg0NCAxODQgMjg4VjI0MEMxODQgMjMxLjE1NiAxOTEuMTU2IDIyNCAyMDAgMjI0UzIxNiAyMzEuMTU2IDIxNiAyNDBWMjg4Wk0zNjYuNDYxIDIyMi40NjFDMzI1Ljg0NiAyNjMuMDc0IDMyNS44NDYgMzI4LjkyNCAzNjYuNDYxIDM2OS41MzlDNDA3LjA3NiA0MTAuMTUyIDQ3Mi45MjQgNDEwLjE1MiA1MTMuNTM5IDM2OS41MzlDNTU0LjE1NCAzMjguOTI0IDU1NC4xNTQgMjYzLjA3NCA1MTMuNTM5IDIyMi40NjFDNDcyLjkyNCAxODEuODQ2IDQwNy4wNzYgMTgxLjg0NiAzNjYuNDYxIDIyMi40NjFaTTQ5MC45MTIgMjY3LjcxNUw0NTYuOTcxIDMwMS42NTZDNDUwLjcxNyAzMDcuOTEgNDQwLjU5OCAzMDcuOTEgNDM0LjM0NCAzMDEuNjU2UzQyOC4wOSAyODUuMjgzIDQzNC4zNDQgMjc5LjAyOUw0NjguMjg1IDI0NS4wODhDNDc0LjUzNyAyMzguODM0IDQ4NC42NTggMjM4LjgzNCA0OTAuOTEyIDI0NS4wODhTNDk3LjE2NiAyNjEuNDYxIDQ5MC45MTIgMjY3LjcxNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ChessClock(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M576 112H544V104C544 90.746 533.256 80 520 80H408C394.746 80 384 90.746 384 104V112H200V80H232C245.256 80 256 69.254 256 56S245.256 32 232 32H120C106.746 32 96 42.746 96 56S106.746 80 120 80H152V112H64C28.654 112 0 140.654 0 176V416C0 451.346 28.654 480 64 480H576C611.348 480 640 451.346 640 416V176C640 140.654 611.348 112 576 112ZM592 416C592 424.822 584.822 432 576 432H64C55.178 432 48 424.822 48 416V176C48 167.178 55.178 160 64 160H576C584.822 160 592 167.178 592 176V416ZM200 192C142.562 192 96 238.562 96 296S142.562 400 200 400S304 353.438 304 296S257.438 192 200 192ZM216 288C216 296.844 208.844 304 200 304S184 296.844 184 288V240C184 231.156 191.156 224 200 224S216 231.156 216 240V288ZM366.461 222.461C325.846 263.074 325.846 328.924 366.461 369.539C407.076 410.152 472.924 410.152 513.539 369.539C554.154 328.924 554.154 263.074 513.539 222.461C472.924 181.846 407.076 181.846 366.461 222.461ZM490.912 267.715L456.971 301.656C450.717 307.91 440.598 307.91 434.344 301.656S428.09 285.283 434.344 279.029L468.285 245.088C474.537 238.834 484.658 238.834 490.912 245.088S497.166 261.461 490.912 267.715Z" />
        </Icon>
    </>
}