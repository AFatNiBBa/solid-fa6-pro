
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-sort` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sort?s=light circle-sort}
 * @preview ![circle-sort](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNjkgMTAxLjM3NUMyNjUuNSA5OCAyNjAuODc1IDk2IDI1NiA5NlMyNDYuMzc1IDk3Ljg3NSAyNDMgMTAxLjM3NUwxNTEuNzUgMTkyLjYyNUMxNDAuMTI1IDIwNC4xMjUgMTQ4LjM3NSAyMjQgMTY0Ljc1IDIyNEgzNDcuMTI1QzM2My41IDIyNCAzNzEuNzUgMjA0LjEyNSAzNjAuMTI1IDE5Mi42MjVMMjY5IDEwMS4zNzVaTTE5Ny42MjUgMTkyTDI1NiAxMzMuNjI1TDMxNC4yNSAxOTJIMTk3LjYyNVpNMzQ3LjEyNSAyODhIMTY0Ljc1QzE0OC4zNzUgMjg4IDE0MC4xMjUgMzA3Ljg3NSAxNTEuNzUgMzE5LjM3NUwyNDMgNDEwLjYyNUMyNDYuMzc1IDQxNC4xMjUgMjUxLjEyNSA0MTYgMjU2IDQxNlMyNjUuNSA0MTQgMjY5IDQxMC42MjVMMzYwLjEyNSAzMTkuMzc1QzM3MS43NSAzMDcuODc1IDM2My41IDI4OCAzNDcuMTI1IDI4OFpNMjU2IDM3OC4zNzVMMTk3LjYyNSAzMjBIMzE0LjI1TDI1NiAzNzguMzc1Wk0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUzIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ3IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NjRDMTQxLjMwOSA0NjQgNDggMzcwLjY5MSA0OCAyNTZTMTQxLjMwOSA0OCAyNTYgNDhTNDY0IDE0MS4zMDkgNDY0IDI1NlMzNzAuNjkxIDQ2NCAyNTYgNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleSort(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M269 101.375C265.5 98 260.875 96 256 96S246.375 97.875 243 101.375L151.75 192.625C140.125 204.125 148.375 224 164.75 224H347.125C363.5 224 371.75 204.125 360.125 192.625L269 101.375ZM197.625 192L256 133.625L314.25 192H197.625ZM347.125 288H164.75C148.375 288 140.125 307.875 151.75 319.375L243 410.625C246.375 414.125 251.125 416 256 416S265.5 414 269 410.625L360.125 319.375C371.75 307.875 363.5 288 347.125 288ZM256 378.375L197.625 320H314.25L256 378.375ZM256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" />
        </Icon>
    </>
}