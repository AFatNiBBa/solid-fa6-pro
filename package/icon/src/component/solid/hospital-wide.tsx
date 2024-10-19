
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hospital-wide` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hospital-wide?s=solid hospital-wide}
 * @preview ![hospital-wide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MjggOTZINDQ4VjQ4QzQ0OCAyMS40OSA0MjYuNTEgMCA0MDAgMEgxNzZDMTQ5LjQ5IDAgMTI4IDIxLjQ5IDEyOCA0OFY5Nkg0OEMyMS40OSA5NiAwIDExNy40OSAwIDE0NFY0ODBDMCA0OTcuNjczIDE0LjMyNyA1MTIgMzIgNTEySDU0NEM1NjEuNjczIDUxMiA1NzYgNDk3LjY3MyA1NzYgNDgwVjE0NEM1NzYgMTE3LjQ5IDU1NC41MSA5NiA1MjggOTZaTTEyOCA0MzJDMTI4IDQ0MC44MzYgMTIwLjgzNiA0NDggMTEyIDQ0OEg4MEM3MS4xNjQgNDQ4IDY0IDQ0MC44MzYgNjQgNDMyVjQwMEM2NCAzOTEuMTYyIDcxLjE2NCAzODQgODAgMzg0SDExMkMxMjAuODM2IDM4NCAxMjggMzkxLjE2MiAxMjggNDAwVjQzMlpNMTI4IDMzNkMxMjggMzQ0LjgzNiAxMjAuODM2IDM1MiAxMTIgMzUySDgwQzcxLjE2NCAzNTIgNjQgMzQ0LjgzNiA2NCAzMzZWMzA0QzY0IDI5NS4xNjIgNzEuMTY0IDI4OCA4MCAyODhIMTEyQzEyMC44MzYgMjg4IDEyOCAyOTUuMTYyIDEyOCAzMDRWMzM2Wk0yNTYgNDMyQzI1NiA0NDAuODM2IDI0OC44MzYgNDQ4IDI0MCA0NDhIMjA4QzE5OS4xNjQgNDQ4IDE5MiA0NDAuODM2IDE5MiA0MzJWNDAwQzE5MiAzOTEuMTYyIDE5OS4xNjQgMzg0IDIwOCAzODRIMjQwQzI0OC44MzYgMzg0IDI1NiAzOTEuMTYyIDI1NiA0MDBWNDMyWk0yNTYgMzM2QzI1NiAzNDQuODM2IDI0OC44MzYgMzUyIDI0MCAzNTJIMjA4QzE5OS4xNjQgMzUyIDE5MiAzNDQuODM2IDE5MiAzMzZWMzA0QzE5MiAyOTUuMTYyIDE5OS4xNjQgMjg4IDIwOCAyODhIMjQwQzI0OC44MzYgMjg4IDI1NiAyOTUuMTYyIDI1NiAzMDRWMzM2Wk0zMDkuNjAyIDIyNEgyNjYuMzk4QzI2MC42NTYgMjI0IDI1NiAyMTkuMzQ0IDI1NiAyMTMuNjAyVjE3NkgyMTguMzk4QzIxMi42NTYgMTc2IDIwOCAxNzEuMzQ0IDIwOCAxNjUuNjAyVjEyMi4zOThDMjA4IDExNi42NTYgMjEyLjY1NiAxMTIgMjE4LjM5OCAxMTJIMjU2Vjc0LjM5OEMyNTYgNjguNjU2IDI2MC42NTYgNjQgMjY2LjM5OCA2NEgzMDkuNjAyQzMxNS4zNDQgNjQgMzIwIDY4LjY1NiAzMjAgNzQuMzk4VjExMkgzNTcuNjAyQzM2My4zNDQgMTEyIDM2OCAxMTYuNjU2IDM2OCAxMjIuMzk4VjE2NS42MDJDMzY4IDE3MS4zNDQgMzYzLjM0NCAxNzYgMzU3LjYwMiAxNzZIMzIwVjIxMy42MDJDMzIwIDIxOS4zNDQgMzE1LjM0NCAyMjQgMzA5LjYwMiAyMjRaTTM4NCA0MzJDMzg0IDQ0MC44MzYgMzc2LjgzNiA0NDggMzY4IDQ0OEgzMzZDMzI3LjE2NCA0NDggMzIwIDQ0MC44MzYgMzIwIDQzMlY0MDBDMzIwIDM5MS4xNjIgMzI3LjE2NCAzODQgMzM2IDM4NEgzNjhDMzc2LjgzNiAzODQgMzg0IDM5MS4xNjIgMzg0IDQwMFY0MzJaTTM4NCAzMzZDMzg0IDM0NC44MzYgMzc2LjgzNiAzNTIgMzY4IDM1MkgzMzZDMzI3LjE2NCAzNTIgMzIwIDM0NC44MzYgMzIwIDMzNlYzMDRDMzIwIDI5NS4xNjIgMzI3LjE2NCAyODggMzM2IDI4OEgzNjhDMzc2LjgzNiAyODggMzg0IDI5NS4xNjIgMzg0IDMwNFYzMzZaTTUxMiA0MzJDNTEyIDQ0MC44MzYgNTA0LjgzNiA0NDggNDk2IDQ0OEg0NjRDNDU1LjE2NCA0NDggNDQ4IDQ0MC44MzYgNDQ4IDQzMlY0MDBDNDQ4IDM5MS4xNjIgNDU1LjE2NCAzODQgNDY0IDM4NEg0OTZDNTA0LjgzNiAzODQgNTEyIDM5MS4xNjIgNTEyIDQwMFY0MzJaTTUxMiAzMzZDNTEyIDM0NC44MzYgNTA0LjgzNiAzNTIgNDk2IDM1Mkg0NjRDNDU1LjE2NCAzNTIgNDQ4IDM0NC44MzYgNDQ4IDMzNlYzMDRDNDQ4IDI5NS4xNjIgNDU1LjE2NCAyODggNDY0IDI4OEg0OTZDNTA0LjgzNiAyODggNTEyIDI5NS4xNjIgNTEyIDMwNFYzMzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HospitalWide(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M528 96H448V48C448 21.49 426.51 0 400 0H176C149.49 0 128 21.49 128 48V96H48C21.49 96 0 117.49 0 144V480C0 497.673 14.327 512 32 512H544C561.673 512 576 497.673 576 480V144C576 117.49 554.51 96 528 96ZM128 432C128 440.836 120.836 448 112 448H80C71.164 448 64 440.836 64 432V400C64 391.162 71.164 384 80 384H112C120.836 384 128 391.162 128 400V432ZM128 336C128 344.836 120.836 352 112 352H80C71.164 352 64 344.836 64 336V304C64 295.162 71.164 288 80 288H112C120.836 288 128 295.162 128 304V336ZM256 432C256 440.836 248.836 448 240 448H208C199.164 448 192 440.836 192 432V400C192 391.162 199.164 384 208 384H240C248.836 384 256 391.162 256 400V432ZM256 336C256 344.836 248.836 352 240 352H208C199.164 352 192 344.836 192 336V304C192 295.162 199.164 288 208 288H240C248.836 288 256 295.162 256 304V336ZM309.602 224H266.398C260.656 224 256 219.344 256 213.602V176H218.398C212.656 176 208 171.344 208 165.602V122.398C208 116.656 212.656 112 218.398 112H256V74.398C256 68.656 260.656 64 266.398 64H309.602C315.344 64 320 68.656 320 74.398V112H357.602C363.344 112 368 116.656 368 122.398V165.602C368 171.344 363.344 176 357.602 176H320V213.602C320 219.344 315.344 224 309.602 224ZM384 432C384 440.836 376.836 448 368 448H336C327.164 448 320 440.836 320 432V400C320 391.162 327.164 384 336 384H368C376.836 384 384 391.162 384 400V432ZM384 336C384 344.836 376.836 352 368 352H336C327.164 352 320 344.836 320 336V304C320 295.162 327.164 288 336 288H368C376.836 288 384 295.162 384 304V336ZM512 432C512 440.836 504.836 448 496 448H464C455.164 448 448 440.836 448 432V400C448 391.162 455.164 384 464 384H496C504.836 384 512 391.162 512 400V432ZM512 336C512 344.836 504.836 352 496 352H464C455.164 352 448 344.836 448 336V304C448 295.162 455.164 288 464 288H496C504.836 288 512 295.162 512 304V336Z" />
        </Icon>
    </>
}