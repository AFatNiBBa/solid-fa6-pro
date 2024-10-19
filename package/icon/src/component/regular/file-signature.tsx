
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-signature` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-signature?s=regular file-signature}
 * @preview ![file-signature](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OC4wMTggNDQ4TDQ4IDY0LjEyNUM0OCA1NS4yODkgNTUuMTY0IDQ4LjEyNSA2NCA0OC4xMjVIMjI0LjAwOFYxMjhDMjI0LjAwOCAxNDUuNjcyIDIzOC4zMzQgMTYwIDI1Ni4wMDggMTYwSDMzNi4wMDJWMjU0LjE4TDM4NCAyMDYuNDY5VjEzOC42NDFDMzg0IDEyMS42NjQgMzc3LjI1OCAxMDUuMzgzIDM2NS4yNTYgOTMuMzgzTDI5MC42MjcgMTguNzQ2QzI3OC42MjUgNi43NDIgMjYyLjM0OCAwIDI0NS4zNzMgMEg2NEMyOC42NTQgMCAwIDI4LjY1MiAwIDY0TDAuMDIgNDQ4QzAuMDIgNDgzLjM0NCAyOC42NzQgNTEyIDY0LjAyIDUxMkgzMjBDMzQ5LjY0NiA1MTIgMzc0LjUyNyA0OTEuNDc3IDM4MS43MTEgNDY0SDY0LjAxOEM1NS4xOCA0NjQgNDguMDE4IDQ1Ni44MzYgNDguMDE4IDQ0OFpNMjkyLjcyNyAzNDIuMzA1QzI4OS43MDEgMzQ1LjMxMiAyODggMzQ5LjM5OCAyODggMzUzLjY2VjM4NEgyNzIuNzVDMjY4LjYyNSAzODQgMjY0LjYyNSAzODEuNSAyNjIuNjI1IDM3Ny41QzI1MC43NSAzNTMuNjI1IDIxNi4zNzUgMzQ3LjEyNSAxOTYuNjI1IDM2My4zNzVMMTgyLjc1IDMyMS43NUMxNzkuNSAzMTEuODc1IDE3MC4zNzUgMzA1LjI1IDE2MCAzMDUuMjVTMTQwLjUgMzExLjg3NSAxMzcuMjUgMzIxLjc1TDExOSAzNzYuMzc1QzExNy41IDM4MC44NzUgMTEzLjI1IDM4NCAxMDguMzc1IDM4NEg5NkM4Ny4xMjUgMzg0IDgwIDM5MS4xMjUgODAgNDAwUzg3LjEyNSA0MTYgOTYgNDE2SDEwOC4zNzVDMTI3IDQxNiAxNDMuNSA0MDQuMTI1IDE0OS4zNzUgMzg2LjVMMTYwIDM1NC42MjVMMTc2Ljg3NSA0MDVDMTc4Ljg3NSA0MTEuMjUgMTg0LjM3NSA0MTUuNSAxOTAuODc1IDQxNkgxOTJDMTk3Ljk5OSA0MTYgMjAzLjYyNSA0MTIuNjI1IDIwNi4yNSA0MDcuMTI1TDIxMy45OTkgMzkxLjc1QzIxNi43NSAzODYuMjUgMjIxLjg3NSAzODUuNjI1IDIyNCAzODUuNjI1UzIzMS4yNSAzODYuMjUgMjM0LjEyNSAzOTIuMTI1QzI0MS41IDQwNi44NzUgMjU2LjM3NSA0MTYgMjcyLjc1IDQxNkgzNTAuMzRDMzU0LjYwNCA0MTYgMzU4LjY4OSA0MTQuMjk3IDM2MS42OTMgNDExLjI3M0w1MTguNjI1IDI1My4yNUw0NTAuNzUgMTg1LjM3NUwyOTIuNzI3IDM0Mi4zMDVaTTU2OC41IDE2Ny4zNzVMNTM2LjYyNSAxMzUuNUM1MjYuNzUgMTI1LjUgNTEwLjYyNSAxMjUuNSA1MDAuNjI1IDEzNS41TDQ3My4zNzUgMTYyLjc1TDU0MS4yNSAyMzAuNjI1TDU2OC41IDIwMy4zNzVDNTc4LjUgMTkzLjM3NSA1NzguNSAxNzcuMjUgNTY4LjUgMTY3LjM3NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FileSignature(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M48.018 448L48 64.125C48 55.289 55.164 48.125 64 48.125H224.008V128C224.008 145.672 238.334 160 256.008 160H336.002V254.18L384 206.469V138.641C384 121.664 377.258 105.383 365.256 93.383L290.627 18.746C278.625 6.742 262.348 0 245.373 0H64C28.654 0 0 28.652 0 64L0.02 448C0.02 483.344 28.674 512 64.02 512H320C349.646 512 374.527 491.477 381.711 464H64.018C55.18 464 48.018 456.836 48.018 448ZM292.727 342.305C289.701 345.312 288 349.398 288 353.66V384H272.75C268.625 384 264.625 381.5 262.625 377.5C250.75 353.625 216.375 347.125 196.625 363.375L182.75 321.75C179.5 311.875 170.375 305.25 160 305.25S140.5 311.875 137.25 321.75L119 376.375C117.5 380.875 113.25 384 108.375 384H96C87.125 384 80 391.125 80 400S87.125 416 96 416H108.375C127 416 143.5 404.125 149.375 386.5L160 354.625L176.875 405C178.875 411.25 184.375 415.5 190.875 416H192C197.999 416 203.625 412.625 206.25 407.125L213.999 391.75C216.75 386.25 221.875 385.625 224 385.625S231.25 386.25 234.125 392.125C241.5 406.875 256.375 416 272.75 416H350.34C354.604 416 358.689 414.297 361.693 411.273L518.625 253.25L450.75 185.375L292.727 342.305ZM568.5 167.375L536.625 135.5C526.75 125.5 510.625 125.5 500.625 135.5L473.375 162.75L541.25 230.625L568.5 203.375C578.5 193.375 578.5 177.25 568.5 167.375Z" />
        </Icon>
    </>
}