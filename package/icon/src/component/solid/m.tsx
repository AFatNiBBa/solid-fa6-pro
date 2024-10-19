
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `m` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/m?s=solid m}
 * @preview ![m](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgNDgwQzM3My41IDQ4MCAzNTIgNDU4LjUwMSAzNTIgNDMyLjAwMlYyMzQuNTQxTDI2My41NjIgMzYzLjE5MkMyNDUuNjI1IDM4OS4yNTQgMjAyLjM3NSAzODkuMjU0IDE4NC40MzggMzYzLjE5Mkw5NiAyMzQuNTQxVjQzMi4wMDJDOTYgNDU4LjUwMSA3NC41IDQ4MCA0OCA0ODBTMCA0NTguNTAxIDAgNDMyLjAwMlY4MC4wMTZDMCA1OC45ODYgMTMuNjg4IDQwLjQyNCAzMy43NSAzNC4xNzRDNTMuODQ0IDI3LjkyNCA3NS42MjUgMzUuNDU1IDg3LjU2MiA1Mi44M0wyMjQgMjUxLjI5TDM2MC40MzggNTIuODNDMzcyLjM0NCAzNS40NTUgMzk0LjEyNSAyNy45MjQgNDE0LjI1IDM0LjE3NEM0MzQuMzEyIDQwLjQyNCA0NDggNTguOTg2IDQ0OCA4MC4wMTZWNDMyLjAwMkM0NDggNDU4LjUwMSA0MjYuNSA0ODAgNDAwIDQ4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function M(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400 480C373.5 480 352 458.501 352 432.002V234.541L263.562 363.192C245.625 389.254 202.375 389.254 184.438 363.192L96 234.541V432.002C96 458.501 74.5 480 48 480S0 458.501 0 432.002V80.016C0 58.986 13.688 40.424 33.75 34.174C53.844 27.924 75.625 35.455 87.562 52.83L224 251.29L360.438 52.83C372.344 35.455 394.125 27.924 414.25 34.174C434.312 40.424 448 58.986 448 80.016V432.002C448 458.501 426.5 480 400 480Z" />
        </Icon>
    </>
}