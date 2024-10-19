
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ban-bug` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ban-bug?s=light ban-bug}
 * @preview ![ban-bug](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMzAuMjUgMzExLjg3NUwxNzYuMTI1IDMwNS4yNUMxNzYuMjUgMzEyIDE3Ny4zNzUgMzE4Ljc1IDE3OS4yNSAzMjUuMjVMMTM1LjEyNSAzNTQuNzVDMTI3Ljc1IDM1OS42MjUgMTI1Ljc1IDM2OS41IDEzMC43NSAzNzYuODc1QzEzNC4xMjUgMzgyIDE0My41IDM4Ny41IDE1Mi44NzUgMzgxLjI1TDE5NCAzNTMuODc1QzIwOC42MjUgMzcyLjEyNSAyMzAuNzUgMzg0IDI1NiAzODRDMjcyLjM3NSAzODQgMjg4LjI1IDM3OC44NzUgMzAxLjYyNSAzNjkuNUwyNzguMzc1IDM0Ni4yNUMyNzEuNSAzNTAgMjYzLjc1IDM1MiAyNTYgMzUyQzIyOS41IDM1MiAyMDggMzMwLjUgMjA4IDMwNFYyNzUuODc1TDE3NiAyNDMuODc1VjI3M0wxMjUuNzUgMjgwLjEyNUMxMTYuNTI3IDI4MS40OCAxMTAuOTA0IDI5MC4xODYgMTEyLjEyNSAyOTguMjVDMTE0LjEyNSAzMTEuODc1IDEyNy41IDMxMi4yNSAxMzAuMjUgMzExLjg3NVpNMjU2IDE2QzEyMy40NTEgMTYgMTYgMTIzLjQ1MSAxNiAyNTZTMTIzLjQ1MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0OSA0OTYgMjU2UzM4OC41NDkgMTYgMjU2IDE2Wk0yNTYgNDY0QzE0MS4zMDkgNDY0IDQ4IDM3MC42OTEgNDggMjU2QzQ4IDIwNC40MzQgNjYuOTcxIDE1Ny4yOTEgOTguMTU4IDEyMC45MDhMMzkxLjA5MiA0MTMuODQyQzM1NC43MDkgNDQ1LjAyOSAzMDcuNTY2IDQ2NCAyNTYgNDY0Wk0yMTEuODc1IDE4OS4yNUMyMjAuNzUgMTY4LjI1IDI0My4yNSAxNTYuNSAyNjUuNjI1IDE2MUMyODcuODc1IDE2NS41IDMwNCAxODUuMjUgMzA0IDIwOFYyODEuMzc1TDIxMS44NzUgMTg5LjI1Wk00MTMuODM4IDM5MS4wOThMMzM1LjEyNSAzMTIuNUMzMzUuNSAzMTAuMTI1IDMzNS43NSAzMDcuNzUgMzM1Ljg3NSAzMDUuMjVMMzgxLjc1IDMxMS44NzVDMzg0LjUgMzEyLjI1IDM5Ny44NzUgMzExLjg3NSAzOTkuODc1IDI5OC4yNUM0MDEuMTIxIDI5MC4wMzEgMzk1LjM2MSAyODEuNDY1IDM4Ni4yNSAyODAuMTI1TDMzNiAyNzNWMjQ3TDM4Ni4yNSAyMzkuODc1QzM5MiAyMzkuMTI1IDM5Ni44NzUgMjM1LjM3NSAzOTkgMjMwQzQwMS4xMjUgMjI0LjYyNSA0MDAuMjUgMjE4LjUgMzk2Ljc1IDIxNEMzOTMuMTI1IDIwOS41IDM4Ny41IDIwNy4yNSAzODEuNzUgMjA4LjEyNUwzMzYgMjE0Ljc1QzMzNiAxOTcuMzc1IDMzNC42MjUgMTkzLjI1IDMzMi43NSAxODYuNzVMMzc2Ljg3NSAxNTcuMjVDMzg0LjI1IDE1Mi4zNzUgMzg2LjI1IDE0Mi41IDM4MS4yNSAxMzUuMTI1QzM3Ni4zNzUgMTI3Ljc1IDM2Ni41IDEyNS43NSAzNTkuMTI1IDEzMC42MjVMMzE4IDE1OEMzMDMuMzc1IDEzOS44NzUgMjgxLjI1IDEyOCAyNTYgMTI4QzIyNy4zNzUgMTI4IDIwMi42MjUgMTQzLjI1IDE4OC41IDE2NS44NzVMMTIwLjkwMiA5OC4xNjJDMTU3LjI4NyA2Ni45NzMgMjA0LjQzMiA0OCAyNTYgNDhDMzcwLjY5MSA0OCA0NjQgMTQxLjMwOSA0NjQgMjU2QzQ2NCAzMDcuNTY4IDQ0NS4wMjcgMzU0LjcxMyA0MTMuODM4IDM5MS4wOThaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BanBug(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M130.25 311.875L176.125 305.25C176.25 312 177.375 318.75 179.25 325.25L135.125 354.75C127.75 359.625 125.75 369.5 130.75 376.875C134.125 382 143.5 387.5 152.875 381.25L194 353.875C208.625 372.125 230.75 384 256 384C272.375 384 288.25 378.875 301.625 369.5L278.375 346.25C271.5 350 263.75 352 256 352C229.5 352 208 330.5 208 304V275.875L176 243.875V273L125.75 280.125C116.527 281.48 110.904 290.186 112.125 298.25C114.125 311.875 127.5 312.25 130.25 311.875ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256C48 204.434 66.971 157.291 98.158 120.908L391.092 413.842C354.709 445.029 307.566 464 256 464ZM211.875 189.25C220.75 168.25 243.25 156.5 265.625 161C287.875 165.5 304 185.25 304 208V281.375L211.875 189.25ZM413.838 391.098L335.125 312.5C335.5 310.125 335.75 307.75 335.875 305.25L381.75 311.875C384.5 312.25 397.875 311.875 399.875 298.25C401.121 290.031 395.361 281.465 386.25 280.125L336 273V247L386.25 239.875C392 239.125 396.875 235.375 399 230C401.125 224.625 400.25 218.5 396.75 214C393.125 209.5 387.5 207.25 381.75 208.125L336 214.75C336 197.375 334.625 193.25 332.75 186.75L376.875 157.25C384.25 152.375 386.25 142.5 381.25 135.125C376.375 127.75 366.5 125.75 359.125 130.625L318 158C303.375 139.875 281.25 128 256 128C227.375 128 202.625 143.25 188.5 165.875L120.902 98.162C157.287 66.973 204.432 48 256 48C370.691 48 464 141.309 464 256C464 307.568 445.027 354.713 413.838 391.098Z" />
        </Icon>
    </>
}