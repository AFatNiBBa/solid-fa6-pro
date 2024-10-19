
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `book-bookmark` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-bookmark?s=regular book-bookmark}
 * @preview ![book-bookmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjQgNDAwQzQzNy4yNSA0MDAgNDQ4IDM4OS4yNSA0NDggMzc2VjI0QzQ0OCAxMC43NSA0MzcuMjUgMCA0MjQgMEg4MEMzNS44OTEgMCAwIDM1Ljg3NSAwIDgwVjQzMkMwIDQ3Ni4xMjUgMzUuODkxIDUxMiA4MCA1MTJINDI0QzQzNy4yNSA1MTIgNDQ4IDUwMS4yNSA0NDggNDg4UzQzNy4yNSA0NjQgNDI0IDQ2NEg0MTZWNDAwSDQyNFpNMzY4IDQ2NEg4MEM2Mi4zNTkgNDY0IDQ4IDQ0OS42NTYgNDggNDMyUzYyLjM1OSA0MDAgODAgNDAwSDM2OFY0NjRaTTQwMCAzNTJIODBDNjguNjI1IDM1MiA1Ny43OTcgMzU0LjM3NSA0OCAzNTguNjg4VjgwQzQ4IDYyLjM0NCA2Mi4zNTkgNDggODAgNDhIMTkyVjIwNy45NzFDMTkyIDIyMS4zODUgMjA3LjUyIDIyOC44NDYgMjE3Ljk5NiAyMjAuNDYzTDI3MiAxNzYuMDAyTDMyNi4wMDQgMjIwLjQ2M0MzMzYuNDggMjI4Ljg0NiAzNTIgMjIxLjM4NSAzNTIgMjA3Ljk3MVY0OEg0MDBWMzUyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BookBookmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M424 400C437.25 400 448 389.25 448 376V24C448 10.75 437.25 0 424 0H80C35.891 0 0 35.875 0 80V432C0 476.125 35.891 512 80 512H424C437.25 512 448 501.25 448 488S437.25 464 424 464H416V400H424ZM368 464H80C62.359 464 48 449.656 48 432S62.359 400 80 400H368V464ZM400 352H80C68.625 352 57.797 354.375 48 358.688V80C48 62.344 62.359 48 80 48H192V207.971C192 221.385 207.52 228.846 217.996 220.463L272 176.002L326.004 220.463C336.48 228.846 352 221.385 352 207.971V48H400V352Z" />
        </Icon>
    </>
}