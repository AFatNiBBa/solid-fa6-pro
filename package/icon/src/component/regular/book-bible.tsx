
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `book-bible` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-bible?s=regular book-bible}
 * @preview ![book-bible](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgMjA4SDIwOFYzMDRDMjA4IDMxMi44NzUgMjE1LjEyNSAzMjAgMjI0IDMyMEgyNTZDMjY0Ljg3NSAzMjAgMjcyIDMxMi44NzUgMjcyIDMwNFYyMDhIMzIwQzMyOC44NzUgMjA4IDMzNiAyMDAuODc1IDMzNiAxOTJWMTYwQzMzNiAxNTEuMTI1IDMyOC44NzUgMTQ0IDMyMCAxNDRIMjcyVjk2QzI3MiA4Ny4xMjUgMjY0Ljg3NSA4MCAyNTYgODBIMjI0QzIxNS4xMjUgODAgMjA4IDg3LjEyNSAyMDggOTZWMTQ0SDE2MEMxNTEuMTI1IDE0NCAxNDQgMTUxLjEyNSAxNDQgMTYwVjE5MkMxNDQgMjAwLjg3NSAxNTEuMTI1IDIwOCAxNjAgMjA4Wk00MjQgNDAwQzQzNy4yNSA0MDAgNDQ4IDM4OS4yNSA0NDggMzc2VjI0QzQ0OCAxMC43NSA0MzcuMjUgMCA0MjQgMEg4MEMzNS44OTEgMCAwIDM1Ljg3NSAwIDgwVjQzMkMwIDQ3Ni4xMjUgMzUuODkxIDUxMiA4MCA1MTJINDI0QzQzNy4yNSA1MTIgNDQ4IDUwMS4yNSA0NDggNDg4UzQzNy4yNSA0NjQgNDI0IDQ2NEg0MTZWNDAwSDQyNFpNMzY4IDQ2NEg4MEM2Mi4zNTkgNDY0IDQ4IDQ0OS42NTYgNDggNDMyUzYyLjM1OSA0MDAgODAgNDAwSDM2OFY0NjRaTTQwMCAzNTJIODBDNjguNjI1IDM1MiA1Ny43OTcgMzU0LjM3NSA0OCAzNTguNjg4VjgwQzQ4IDYyLjM0NCA2Mi4zNTkgNDggODAgNDhINDAwVjM1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BookBible(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M160 208H208V304C208 312.875 215.125 320 224 320H256C264.875 320 272 312.875 272 304V208H320C328.875 208 336 200.875 336 192V160C336 151.125 328.875 144 320 144H272V96C272 87.125 264.875 80 256 80H224C215.125 80 208 87.125 208 96V144H160C151.125 144 144 151.125 144 160V192C144 200.875 151.125 208 160 208ZM424 400C437.25 400 448 389.25 448 376V24C448 10.75 437.25 0 424 0H80C35.891 0 0 35.875 0 80V432C0 476.125 35.891 512 80 512H424C437.25 512 448 501.25 448 488S437.25 464 424 464H416V400H424ZM368 464H80C62.359 464 48 449.656 48 432S62.359 400 80 400H368V464ZM400 352H80C68.625 352 57.797 354.375 48 358.688V80C48 62.344 62.359 48 80 48H400V352Z" />
        </Icon>
    </>
}