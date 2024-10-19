
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chess-pawn-piece` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn-piece?s=regular chess-pawn-piece}
 * @preview ![chess-pawn-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDkuNjI1IDQzNS4zODZMMjI0IDQxNi4xN1YzOTIuMjEyQzIyNCAzNzguOTg2IDIxMy4yNSAzNjguMjU1IDIwMCAzNjguMjU1SDIwMi42MjVDMjAxLjEyNSAzNTIuMjgzIDIwMCAzMzYuMzExIDIwMCAzMjAuMzRWMjg4LjM5NkgyMDhDMjE2Ljg3NSAyODguMzk2IDIyNCAyODEuMjg0IDIyNCAyNzIuNDI1VjI1Ni40NTNDMjIzLjg3NSAyNDguNTkyIDIxOC4xMjUgMjQyLjEwMyAyMTAuMzc1IDI0MC45OEMyMTkuMjUgMjI2LjM4MSAyMjMuODc1IDIwOS42NjEgMjI0IDE5Mi41NjZDMjI0LjI1IDE1Mi4wMTMgMTk5IDExNS43MDIgMTYwLjg3NSAxMDEuODUyQzEyMi42MjUgODcuODc3IDc5Ljg3NSA5OS40ODEgNTQgMTMwLjgwMUMyOC4xMjUgMTYxLjk5NSAyNC43NSAyMDYuMTY3IDQ1LjYyNSAyNDAuOThDMzcuODc1IDI0Mi4xMDMgMzIgMjQ4LjU5MiAzMiAyNTYuNDUzVjI3Mi40MjVDMzIgMjgxLjI4NCAzOS4xMjUgMjg4LjM5NiA0OCAyODguMzk2SDU2VjMyMC4zNEM1NiAzMzYuMzExIDU0Ljg3NSAzNTIuMjgzIDUzLjM3NSAzNjguMjU1SDU2QzQyLjc1IDM2OC4yNTUgMzIgMzc4Ljk4NiAzMiAzOTIuMjEyVjQxNi4xN0w2LjM3NSA0MzUuMzg2QzIuMzc1IDQzOC4zOCAwIDQ0My4xMjIgMCA0NDguMTEzVjQ5Ni4wMjhDMCA1MDQuODg4IDcuMTI1IDUxMiAxNiA1MTJIMjQwQzI0OC44NzUgNTEyIDI1NiA1MDQuODg4IDI1NiA0OTYuMDI4VjQ0OC4xMTNDMjU2IDQ0My4xMjIgMjUzLjYyNSA0MzguMzggMjQ5LjYyNSA0MzUuMzg2Wk0xNTIgMjg4LjM5NlYzMTguMzQzQzE1MiAzMzUuMDY0IDE1MyAzNTEuNjU5IDE1NC41IDM2OC4yNTVIMTAxLjVDMTAzIDM1MS42NTkgMTA0IDMzNS4wNjQgMTA0IDMxOC4zNDNWMjg4LjM5NkgxNTJaTTEyOCAxNDQuNjUxQzE1NC41IDE0NC42NTEgMTc2IDE2Ni4xMTMgMTc2IDE5Mi41NjZTMTU0LjUgMjQwLjQ4MSAxMjggMjQwLjQ4MVM4MCAyMTkuMDE5IDgwIDE5Mi41NjZTMTAxLjUgMTQ0LjY1MSAxMjggMTQ0LjY1MVpNNDggNDY0LjA4NUw4MCA0NDAuMTI3VjQxNi4xN0gxNzZWNDQwLjEyN0wyMDggNDY0LjA4NUg0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ChessPawnPiece(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M249.625 435.386L224 416.17V392.212C224 378.986 213.25 368.255 200 368.255H202.625C201.125 352.283 200 336.311 200 320.34V288.396H208C216.875 288.396 224 281.284 224 272.425V256.453C223.875 248.592 218.125 242.103 210.375 240.98C219.25 226.381 223.875 209.661 224 192.566C224.25 152.013 199 115.702 160.875 101.852C122.625 87.877 79.875 99.481 54 130.801C28.125 161.995 24.75 206.167 45.625 240.98C37.875 242.103 32 248.592 32 256.453V272.425C32 281.284 39.125 288.396 48 288.396H56V320.34C56 336.311 54.875 352.283 53.375 368.255H56C42.75 368.255 32 378.986 32 392.212V416.17L6.375 435.386C2.375 438.38 0 443.122 0 448.113V496.028C0 504.888 7.125 512 16 512H240C248.875 512 256 504.888 256 496.028V448.113C256 443.122 253.625 438.38 249.625 435.386ZM152 288.396V318.343C152 335.064 153 351.659 154.5 368.255H101.5C103 351.659 104 335.064 104 318.343V288.396H152ZM128 144.651C154.5 144.651 176 166.113 176 192.566S154.5 240.481 128 240.481S80 219.019 80 192.566S101.5 144.651 128 144.651ZM48 464.085L80 440.127V416.17H176V440.127L208 464.085H48Z" />
        </Icon>
    </>
}