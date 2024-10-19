
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `left` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/left?s=light left}
 * @preview ![left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgMTc2SDI0MFY5NkMyNDAgNzguMzE0IDIyNS42MzcgNjQgMjA4LjAwNCA2NEMxOTkuNjc4IDY0IDE5MS40OTggNjcuMjUyIDE4NS4zNzUgNzMuMzc1TDkuMzc1IDIzMy4zNzVDMy4xMjUgMjM5LjYyNSAwIDI0Ny44MTIgMCAyNTZTMy4xMjUgMjcyLjM3NSA5LjM3NSAyNzguNjI1TDE4NS4zNzUgNDM4LjYyNUMxOTEuNSA0NDQuNzQ4IDE5OS42NzggNDQ4IDIwOC4wMDQgNDQ4QzIyNS42MTcgNDQ4IDI0MCA0MzMuNzAzIDI0MCA0MTZWMzM2SDQxNkM0MzMuNjc0IDMzNiA0NDggMzIxLjY3NCA0NDggMzA0VjIwOEM0NDggMTkwLjMyOCA0MzMuNjc0IDE3NiA0MTYgMTc2Wk00MTYgMzA0SDIwOEwyMDYuOSA0MTQuOTQ3TDMyLjA1OSAyNTZMMjA4IDk2LjAwNFYyMDhINDE2VjMwNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Left(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M416 176H240V96C240 78.314 225.637 64 208.004 64C199.678 64 191.498 67.252 185.375 73.375L9.375 233.375C3.125 239.625 0 247.812 0 256S3.125 272.375 9.375 278.625L185.375 438.625C191.5 444.748 199.678 448 208.004 448C225.617 448 240 433.703 240 416V336H416C433.674 336 448 321.674 448 304V208C448 190.328 433.674 176 416 176ZM416 304H208L206.9 414.947L32.059 256L208 96.004V208H416V304Z" />
        </Icon>
    </>
}