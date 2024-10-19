
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chess-rook-piece` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chess-rook-piece?s=thin chess-rook-piece}
 * @preview ![chess-rook-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDYuNjQxIDQ1Mi40MzhMMjg4IDQ0My4wNjJWNDMyQzI4OCA0MTguNzY2IDI3Ny4yMzQgNDA4IDI2NCA0MDhINTZDNDIuNzY2IDQwOCAzMiA0MTguNzY2IDMyIDQzMlY0NDMuMDYyTDEzLjQyMiA0NTIuNDA2QzUuMjY2IDQ1Ni4yOTcgMCA0NjQuNzE5IDAgNDczLjg3NVY0ODhDMCA1MDEuMjM0IDEwLjc2NiA1MTIgMjQgNTEySDI5NkMzMDkuMjM0IDUxMiAzMjAgNTAxLjIzNCAzMjAgNDg4VjQ3My44NzVDMzIwIDQ2NC43NSAzMTQuNzY2IDQ1Ni4zNDQgMzA2LjY0MSA0NTIuNDM4Wk0zMDQgNDg4QzMwNCA0OTIuNDg0IDMwMC40ODQgNDk2IDI5NiA0OTZIMjRDMTkuNTE2IDQ5NiAxNiA0OTIuNDg0IDE2IDQ4OFY0NzMuODc1QzE2IDQ3MC44NTkgMTcuNzAzIDQ2OC4wOTQgMjAuNDY5IDQ2Ni43NjZMNDggNDUyLjkzOFY0MzJDNDggNDI3LjUxNiA1MS41MTYgNDI0IDU2IDQyNEgyNjRDMjY4LjQ4NCA0MjQgMjcyIDQyNy41MTYgMjcyIDQzMlY0NTIuOTM4TDI5OS42NzIgNDY2Ljg0NEMzMDIuMjk3IDQ2OC4wOTQgMzA0IDQ3MC44NTkgMzA0IDQ3My44NzVWNDg4Wk03MS44NTkgMjEwLjczNEw2NC4wMTYgMzc1LjYyNUM2My43OTcgMzgwLjAzMSA2Ny4yMDMgMzgzLjc4MSA3MS42MjUgMzgzLjk4NEM3NS45ODQgMzg0LjQwNiA3OS43ODEgMzgwLjgxMiA3OS45ODQgMzc2LjM3NUw4Ny45ODQgMjA4LjM3NUM4OC4wOTQgMjA2LjM3NSA4Ny40MjIgMjA0LjQyMiA4Ni4xNDEgMjAyLjg3NUw1My41NjIgMTYzLjc4MUM0OS45NjggMTU5LjQ2OCA0OCAxNTQuMDMyIDQ4IDE0OC40MTdWODBIODBWMTAwQzgwIDExNS40NjQgOTIuNTM2IDEyOCAxMDggMTI4SDEwOEMxMjMuNDY0IDEyOCAxMzYgMTE1LjQ2NCAxMzYgMTAwVjgwSDE4NFYxMDBDMTg0IDExNS40NjQgMTk2LjUzNiAxMjggMjEyIDEyOEgyMTJDMjI3LjQ2NCAxMjggMjQwIDExNS40NjQgMjQwIDEwMFY4MEgyNzJWMTQ4LjQxN0MyNzIgMTU0LjAzMiAyNzAuMDMyIDE1OS40NjggMjY2LjQzOCAxNjMuNzgxTDIzMy44NTkgMjAyLjg3NUMyMzIuNTc4IDIwNC40MjIgMjMxLjkwNiAyMDYuMzc1IDIzMi4wMTYgMjA4LjM3NUwyNDAuMDE2IDM3Ni4zNzVDMjQwLjIxOSAzODAuNjcyIDI0My43NSAzODQgMjQ4IDM4NEMyNDguMTI1IDM4NCAyNDguMjUgMzg0IDI0OC4zNzUgMzgzLjk4NEMyNTIuNzk3IDM4My43ODEgMjU2LjIwMyAzODAuMDMxIDI1NS45ODQgMzc1LjYyNUwyNDguMTQxIDIxMC43MzRMMjc4LjczOSAxNzQuMDA3QzI4NC43MjMgMTY2LjgyNCAyODggMTU3Ljc3MSAyODggMTQ4LjQyMlY3MkMyODggNjcuNTgyIDI4NC40MTggNjQgMjgwIDY0SDIzMkMyMjcuNTgyIDY0IDIyNCA2Ny41ODIgMjI0IDcyVjEwMEMyMjQgMTA2LjYyNyAyMTguNjI3IDExMiAyMTIgMTEyTDIxMiAxMTJDMjA1LjM3MyAxMTIgMjAwIDEwNi42MjcgMjAwIDEwMFY3MkMyMDAgNjcuNTgyIDE5Ni40MTggNjQgMTkyIDY0SDEyOEMxMjMuNTgyIDY0IDEyMCA2Ny41ODIgMTIwIDcyVjEwMEMxMjAgMTA2LjYyNyAxMTQuNjI3IDExMiAxMDggMTEyTDEwOCAxMTJDMTAxLjM3MyAxMTIgOTYgMTA2LjYyNyA5NiAxMDBWNzJDOTYgNjcuNTgyIDkyLjQxOCA2NCA4OCA2NEg0MEMzNS41ODIgNjQgMzIgNjcuNTgyIDMyIDcyVjE0OC40MjJDMzIgMTU3Ljc3MSAzNS4yNzcgMTY2LjgyNCA0MS4yNjEgMTc0LjAwN0w3MS44NTkgMjEwLjczNFpNMTYwIDE5MkMxNDIuMzU5IDE5MiAxMjggMjA2LjM1OSAxMjggMjI0VjI4MEMxMjggMjg0LjQyMiAxMzEuNTc4IDI4OCAxMzYgMjg4SDE4NEMxODguNDIyIDI4OCAxOTIgMjg0LjQyMiAxOTIgMjgwVjIyNEMxOTIgMjA2LjM1OSAxNzcuNjQxIDE5MiAxNjAgMTkyWk0xNzYgMjcySDE0NFYyMjRDMTQ0IDIxNS4xNzIgMTUxLjE3MiAyMDggMTYwIDIwOFMxNzYgMjE1LjE3MiAxNzYgMjI0VjI3MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ChessRookPiece(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M306.641 452.438L288 443.062V432C288 418.766 277.234 408 264 408H56C42.766 408 32 418.766 32 432V443.062L13.422 452.406C5.266 456.297 0 464.719 0 473.875V488C0 501.234 10.766 512 24 512H296C309.234 512 320 501.234 320 488V473.875C320 464.75 314.766 456.344 306.641 452.438ZM304 488C304 492.484 300.484 496 296 496H24C19.516 496 16 492.484 16 488V473.875C16 470.859 17.703 468.094 20.469 466.766L48 452.938V432C48 427.516 51.516 424 56 424H264C268.484 424 272 427.516 272 432V452.938L299.672 466.844C302.297 468.094 304 470.859 304 473.875V488ZM71.859 210.734L64.016 375.625C63.797 380.031 67.203 383.781 71.625 383.984C75.984 384.406 79.781 380.812 79.984 376.375L87.984 208.375C88.094 206.375 87.422 204.422 86.141 202.875L53.562 163.781C49.968 159.468 48 154.032 48 148.417V80H80V100C80 115.464 92.536 128 108 128H108C123.464 128 136 115.464 136 100V80H184V100C184 115.464 196.536 128 212 128H212C227.464 128 240 115.464 240 100V80H272V148.417C272 154.032 270.032 159.468 266.438 163.781L233.859 202.875C232.578 204.422 231.906 206.375 232.016 208.375L240.016 376.375C240.219 380.672 243.75 384 248 384C248.125 384 248.25 384 248.375 383.984C252.797 383.781 256.203 380.031 255.984 375.625L248.141 210.734L278.739 174.007C284.723 166.824 288 157.771 288 148.422V72C288 67.582 284.418 64 280 64H232C227.582 64 224 67.582 224 72V100C224 106.627 218.627 112 212 112L212 112C205.373 112 200 106.627 200 100V72C200 67.582 196.418 64 192 64H128C123.582 64 120 67.582 120 72V100C120 106.627 114.627 112 108 112L108 112C101.373 112 96 106.627 96 100V72C96 67.582 92.418 64 88 64H40C35.582 64 32 67.582 32 72V148.422C32 157.771 35.277 166.824 41.261 174.007L71.859 210.734ZM160 192C142.359 192 128 206.359 128 224V280C128 284.422 131.578 288 136 288H184C188.422 288 192 284.422 192 280V224C192 206.359 177.641 192 160 192ZM176 272H144V224C144 215.172 151.172 208 160 208S176 215.172 176 224V272Z" />
        </Icon>
    </>
}