
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-alien` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-alien?s=solid user-alien}
 * @preview ![user-alien](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDYuNzI3IDM3OC4xMjVDMjE2Ljk1NSAzODUuOTU3IDIzMS4wNDUgMzg1Ljk1NyAyNDEuMjczIDM3OC4xMjVDMjgyLjYzNyAzNDYuMzIgMzg0IDI1OS41NjYgMzg0IDE3My42MjlDMzg0IDY1LjgyOCAzMTIuMjk1IDAgMjI0IDBDMTM1LjU5MiAwIDY0IDY1LjgyOCA2NCAxNzMuNjI5QzY0IDI1OS41NjYgMTY1LjM2MyAzNDYuMzIgMjA2LjcyNyAzNzguMTI1Wk0yNDAgMjM2QzI0MCAyMDIuODc1IDI2Ni44NzUgMTc2IDMwMCAxNzZIMzI0QzMzMC42MjUgMTc2IDMzNiAxODEuMzc1IDMzNiAxODhWMTk2QzMzNiAyMjkuMTI1IDMwOS4xMjUgMjU2IDI3NiAyNTZIMjUyQzI0NS4zNzUgMjU2IDI0MCAyNTAuNjI1IDI0MCAyNDRWMjM2Wk0xMTIgMTk2VjE4OEMxMTIgMTgxLjM3NSAxMTcuMzc1IDE3NiAxMjQgMTc2SDE0OEMxODEuMTI1IDE3NiAyMDggMjAyLjg3NSAyMDggMjM2VjI0NEMyMDggMjUwLjYyNSAyMDIuNjI1IDI1NiAxOTYgMjU2SDE3MkMxMzguODc1IDI1NiAxMTIgMjI5LjEyNSAxMTIgMTk2Wk0zMTkuNjUyIDM1Mi41QzI5OC45MzYgMzcyLjgwNSAyNzguMDc4IDM5MC4xOTEgMjYwLjcyOSA0MDMuNTMxQzI1MC4yMjkgNDExLjU3IDIzNy4xODYgNDE2IDIyNCA0MTZTMTk3Ljc3MSA0MTEuNTcgMTg3LjIyMyA0MDMuNDkyQzE2OS44OTMgMzkwLjE2NCAxNDkuMDUxIDM3Mi43ODkgMTI4LjM0NiAzNTIuNTA0QzU3LjA3MiAzNTUuMTg4IDAgNDEzLjQwNiAwIDQ4NS4zMzJDMCA1MDAuMDU5IDExLjk0MSA1MTIgMjYuNjY0IDUxMkg0MjEuMzM2QzQzNi4wNTkgNTEyIDQ0OCA1MDAuMDU5IDQ0OCA0ODUuMzMyQzQ0OCA0MTMuNDA2IDM5MC45MyAzNTUuMTg0IDMxOS42NTIgMzUyLjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function UserAlien(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M206.727 378.125C216.955 385.957 231.045 385.957 241.273 378.125C282.637 346.32 384 259.566 384 173.629C384 65.828 312.295 0 224 0C135.592 0 64 65.828 64 173.629C64 259.566 165.363 346.32 206.727 378.125ZM240 236C240 202.875 266.875 176 300 176H324C330.625 176 336 181.375 336 188V196C336 229.125 309.125 256 276 256H252C245.375 256 240 250.625 240 244V236ZM112 196V188C112 181.375 117.375 176 124 176H148C181.125 176 208 202.875 208 236V244C208 250.625 202.625 256 196 256H172C138.875 256 112 229.125 112 196ZM319.652 352.5C298.936 372.805 278.078 390.191 260.729 403.531C250.229 411.57 237.186 416 224 416S197.771 411.57 187.223 403.492C169.893 390.164 149.051 372.789 128.346 352.504C57.072 355.188 0 413.406 0 485.332C0 500.059 11.941 512 26.664 512H421.336C436.059 512 448 500.059 448 485.332C448 413.406 390.93 355.184 319.652 352.5Z" />
        </Icon>
    </>
}