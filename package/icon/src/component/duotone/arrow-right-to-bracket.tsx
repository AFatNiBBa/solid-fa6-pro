
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-right-to-bracket` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-bracket?s=duotone arrow-right-to-bracket}
 * @preview ![arrow-right-to-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQxNiAzMkgzNTJDMzM0LjMyNiAzMiAzMjAgNDYuMzI4IDMyMCA2NFMzMzQuMzI2IDk2IDM1MiA5Nkg0MTZDNDMzLjY3NCA5NiA0NDggMTEwLjMyOCA0NDggMTI4VjM4NEM0NDggNDAxLjY3MiA0MzMuNjc0IDQxNiA0MTYgNDE2SDM1MkMzMzQuMzI2IDQxNiAzMjAgNDMwLjMyOCAzMjAgNDQ4UzMzNC4zMjYgNDgwIDM1MiA0ODBINDE2QzQ2OS4wMiA0ODAgNTEyIDQzNy4wMiA1MTIgMzg0VjEyOEM1MTIgNzQuOTggNDY5LjAyIDMyIDQxNiAzMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzQyLjYyNSAyNzguNjI1TDIxNC42MjUgNDA2LjYyNUMyMDIuMTI1IDQxOS4xMjUgMTgxLjg3NSA0MTkuMTI1IDE2OS4zNzUgNDA2LjYyNVMxNTYuODc1IDM3My44NzUgMTY5LjM3NSAzNjEuMzc1TDI0Mi43NSAyODhIMzJDMTQuMzEyIDI4OCAwIDI3My42ODggMCAyNTZTMTQuMzEyIDIyNCAzMiAyMjRIMjQyLjc1TDE2OS4zNzUgMTUwLjYyNUMxNTYuODc1IDEzOC4xMjUgMTU2Ljg3NSAxMTcuODc1IDE2OS4zNzUgMTA1LjM3NUMxODEuODY3IDkyLjg4MyAyMDIuMTE3IDkyLjg2NyAyMTQuNjI1IDEwNS4zNzVMMzQyLjYyNSAyMzMuMzc1QzM1NS4xMjUgMjQ1Ljg3NSAzNTUuMTI1IDI2Ni4xMjUgMzQyLjYyNSAyNzguNjI1WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowRightToBracket(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M416 32H352C334.326 32 320 46.328 320 64S334.326 96 352 96H416C433.674 96 448 110.328 448 128V384C448 401.672 433.674 416 416 416H352C334.326 416 320 430.328 320 448S334.326 480 352 480H416C469.02 480 512 437.02 512 384V128C512 74.98 469.02 32 416 32Z" />
            <path d="M342.625 278.625L214.625 406.625C202.125 419.125 181.875 419.125 169.375 406.625S156.875 373.875 169.375 361.375L242.75 288H32C14.312 288 0 273.688 0 256S14.312 224 32 224H242.75L169.375 150.625C156.875 138.125 156.875 117.875 169.375 105.375C181.867 92.883 202.117 92.867 214.625 105.375L342.625 233.375C355.125 245.875 355.125 266.125 342.625 278.625Z" />
        </Icon>
    </>
}