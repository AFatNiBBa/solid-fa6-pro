
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `clock-rotate-left` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clock-rotate-left?s=thin clock-rotate-left}
 * @preview ![clock-rotate-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYuMzE2IDI0QzE2MC44ODQgMjQgNzUuMzEyIDg0LjE0MSA0MC44OTQgMTcxLjg1OUwyMC44NDcgNzEuNjg4QzE5Ljk3MiA2Ny4zNDQgMTUuNTk3IDY0LjYyNSAxMS40NDEgNjUuNDA2QzcuMDk3IDY2LjI4MSA0LjI4NSA3MC41IDUuMTYgNzQuODEyTDMwLjI2OSAyMDAuMzEyQzMxLjAzNSAyMDQuMTI1IDM0LjM2MyAyMDYuNzUgMzguMDk3IDIwNi43NUMzOC42MjggMjA2Ljc1IDM5LjE2IDIwNi42ODggMzkuNjc1IDIwNi41OTRMMTY1LjE5MSAxODEuNUMxNjkuNTM1IDE4MC42MjUgMTcyLjMzMSAxNzYuNDA2IDE3MS40NzIgMTcyLjA5NEMxNzAuNTk3IDE2Ny43NSAxNjYuMTYgMTY1IDE2Mi4wNjYgMTY1LjgxMkw1MS43NzEgMTg3Ljg2N0M4MC44ODggMTAwLjU4NiAxNjMuNzY1IDQwIDI1Ni4zMTYgNDBDMzc1LjQyNSA0MCA0NzIuMzE2IDEzNi45MDYgNDcyLjMxNiAyNTZTMzc1LjQyNSA0NzIgMjU2LjMxNiA0NzJDMjExLjg3OCA0NzIgMTY5LjE5MSA0NTguNjI1IDEzMi44NzggNDMzLjI4MUMxMjkuMzE2IDQzMC43ODEgMTI0LjI4NSA0MzEuNTk0IDEyMS43MzggNDM1LjI4MUMxMTkuMjA2IDQzOC45MDYgMTIwLjA5NyA0NDMuODc1IDEyMy43MjIgNDQ2LjQwNkMxNjIuNzM4IDQ3My42MjUgMjA4LjU5NyA0ODggMjU2LjMxNiA0ODhDMzg0LjIzOCA0ODggNDg4LjMxNiAzODMuOTM4IDQ4OC4zMTYgMjU2UzM4NC4yMzggMjQgMjU2LjMxNiAyNFpNMjU2LjMxNiAxMjhDMjUxLjg5NCAxMjggMjQ4LjMxNiAxMzEuNTk0IDI0OC4zMTYgMTM2VjI1NkMyNDguMzE2IDI1OC4xMjUgMjQ5LjE2IDI2MC4xNTYgMjUwLjY2IDI2MS42NTZMMzM4LjY2IDM0OS42NTZDMzQwLjIyMiAzNTEuMjE5IDM0Mi4yNjkgMzUyIDM0NC4zMTYgMzUyUzM0OC40MSAzNTEuMjE5IDM0OS45NzIgMzQ5LjY1NkMzNTMuMDk3IDM0Ni41MzEgMzUzLjA5NyAzNDEuNDY5IDM0OS45NzIgMzM4LjM0NEwyNjQuMzE2IDI1Mi42ODhWMTM2QzI2NC4zMTYgMTMxLjU5NCAyNjAuNzM4IDEyOCAyNTYuMzE2IDEyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ClockRotateLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256.316 24C160.884 24 75.312 84.141 40.894 171.859L20.847 71.688C19.972 67.344 15.597 64.625 11.441 65.406C7.097 66.281 4.285 70.5 5.16 74.812L30.269 200.312C31.035 204.125 34.363 206.75 38.097 206.75C38.628 206.75 39.16 206.688 39.675 206.594L165.191 181.5C169.535 180.625 172.331 176.406 171.472 172.094C170.597 167.75 166.16 165 162.066 165.812L51.771 187.867C80.888 100.586 163.765 40 256.316 40C375.425 40 472.316 136.906 472.316 256S375.425 472 256.316 472C211.878 472 169.191 458.625 132.878 433.281C129.316 430.781 124.285 431.594 121.738 435.281C119.206 438.906 120.097 443.875 123.722 446.406C162.738 473.625 208.597 488 256.316 488C384.238 488 488.316 383.938 488.316 256S384.238 24 256.316 24ZM256.316 128C251.894 128 248.316 131.594 248.316 136V256C248.316 258.125 249.16 260.156 250.66 261.656L338.66 349.656C340.222 351.219 342.269 352 344.316 352S348.41 351.219 349.972 349.656C353.097 346.531 353.097 341.469 349.972 338.344L264.316 252.688V136C264.316 131.594 260.738 128 256.316 128Z" />
        </Icon>
    </>
}