
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `golf-club` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/golf-club?s=solid golf-club}
 * @preview ![golf-club](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDkuMTUgNDIuOTAzTDI4Mi44NzEgNDk0LjMzNUMyNzcuNDQ1IDUwNS4xNjMgMjY2LjM3MyA1MTEuOTk5IDI1NC4yNjQgNTExLjk5OUgzMkMxNC4zMjYgNTExLjk5OSAwIDQ5Ny42NzEgMCA0NzkuOTk5VjQ3MS45OTlINTJDNTguNjI3IDQ3MS45OTkgNjQgNDY2LjYyNCA2NCA0NTkuOTk5UzU4LjYyNyA0NDcuOTk5IDUyIDQ0Ny45OTlIMFY0MTZINTJDNTguNjI3IDQxNiA2NCA0MTAuNjI1IDY0IDQwNFM1OC42MjcgMzkyIDUyIDM5MkgwVjM2My4wMDdDMCAzNDEuNTcgMjAuNjYyIDMyNi4xOTkgNDEuMTkzIDMzMi4zNTlMMjU4Ljk0NyAzOTcuNjgzTDQ1Mi43MzQgMTIuNjczQzQ1OC45OTYgMC45ODUgNDczLjU0OSAtMy40MTMgNDg1LjIzMiAyLjg1Mkw0OTkuMzM4IDEwLjQxOUM1MTEuMDE2IDE2LjY4IDUxNS40MDggMzEuMjIzIDUwOS4xNSA0Mi45MDNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function GolfClub(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M509.15 42.903L282.871 494.335C277.445 505.163 266.373 511.999 254.264 511.999H32C14.326 511.999 0 497.671 0 479.999V471.999H52C58.627 471.999 64 466.624 64 459.999S58.627 447.999 52 447.999H0V416H52C58.627 416 64 410.625 64 404S58.627 392 52 392H0V363.007C0 341.57 20.662 326.199 41.193 332.359L258.947 397.683L452.734 12.673C458.996 0.985 473.549 -3.413 485.232 2.852L499.338 10.419C511.016 16.68 515.408 31.223 509.15 42.903Z" />
        </Icon>
    </>
}