
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `grip` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/grip?s=solid grip}
 * @preview ![grip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05NiAyODhIMzJDMTQuMzc1IDI4OCAwIDMwMi4zNzUgMCAzMjBWMzg0QzAgNDAxLjYyNSAxNC4zNzUgNDE2IDMyIDQxNkg5NkMxMTMuNjI1IDQxNiAxMjggNDAxLjYyNSAxMjggMzg0VjMyMEMxMjggMzAyLjM3NSAxMTMuNjI1IDI4OCA5NiAyODhaTTI1NiAyODhIMTkyQzE3NC4zNzUgMjg4IDE2MCAzMDIuMzc1IDE2MCAzMjBWMzg0QzE2MCA0MDEuNjI1IDE3NC4zNzUgNDE2IDE5MiA0MTZIMjU2QzI3My42MjUgNDE2IDI4OCA0MDEuNjI1IDI4OCAzODRWMzIwQzI4OCAzMDIuMzc1IDI3My42MjUgMjg4IDI1NiAyODhaTTQxNiAyODhIMzUyQzMzNC4zNzUgMjg4IDMyMCAzMDIuMzc1IDMyMCAzMjBWMzg0QzMyMCA0MDEuNjI1IDMzNC4zNzUgNDE2IDM1MiA0MTZINDE2QzQzMy42MjUgNDE2IDQ0OCA0MDEuNjI1IDQ0OCAzODRWMzIwQzQ0OCAzMDIuMzc1IDQzMy42MjUgMjg4IDQxNiAyODhaTTk2IDk2SDMyQzE0LjM3NSA5NiAwIDExMC4zNzUgMCAxMjhWMTkyQzAgMjA5LjYyNSAxNC4zNzUgMjI0IDMyIDIyNEg5NkMxMTMuNjI1IDIyNCAxMjggMjA5LjYyNSAxMjggMTkyVjEyOEMxMjggMTEwLjM3NSAxMTMuNjI1IDk2IDk2IDk2Wk0yNTYgOTZIMTkyQzE3NC4zNzUgOTYgMTYwIDExMC4zNzUgMTYwIDEyOFYxOTJDMTYwIDIwOS42MjUgMTc0LjM3NSAyMjQgMTkyIDIyNEgyNTZDMjczLjYyNSAyMjQgMjg4IDIwOS42MjUgMjg4IDE5MlYxMjhDMjg4IDExMC4zNzUgMjczLjYyNSA5NiAyNTYgOTZaTTQxNiA5NkgzNTJDMzM0LjM3NSA5NiAzMjAgMTEwLjM3NSAzMjAgMTI4VjE5MkMzMjAgMjA5LjYyNSAzMzQuMzc1IDIyNCAzNTIgMjI0SDQxNkM0MzMuNjI1IDIyNCA0NDggMjA5LjYyNSA0NDggMTkyVjEyOEM0NDggMTEwLjM3NSA0MzMuNjI1IDk2IDQxNiA5NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Grip(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M96 288H32C14.375 288 0 302.375 0 320V384C0 401.625 14.375 416 32 416H96C113.625 416 128 401.625 128 384V320C128 302.375 113.625 288 96 288ZM256 288H192C174.375 288 160 302.375 160 320V384C160 401.625 174.375 416 192 416H256C273.625 416 288 401.625 288 384V320C288 302.375 273.625 288 256 288ZM416 288H352C334.375 288 320 302.375 320 320V384C320 401.625 334.375 416 352 416H416C433.625 416 448 401.625 448 384V320C448 302.375 433.625 288 416 288ZM96 96H32C14.375 96 0 110.375 0 128V192C0 209.625 14.375 224 32 224H96C113.625 224 128 209.625 128 192V128C128 110.375 113.625 96 96 96ZM256 96H192C174.375 96 160 110.375 160 128V192C160 209.625 174.375 224 192 224H256C273.625 224 288 209.625 288 192V128C288 110.375 273.625 96 256 96ZM416 96H352C334.375 96 320 110.375 320 128V192C320 209.625 334.375 224 352 224H416C433.625 224 448 209.625 448 192V128C448 110.375 433.625 96 416 96Z" />
        </Icon>
    </>
}