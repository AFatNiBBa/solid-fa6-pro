
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-up` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up?s=regular arrow-up}
 * @preview ![arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOC42MiAyMTUuNDUzTDIwNi42MiAzOS40NTNDMjExLjE1MSAzNC43MDMgMjE3LjQzMiAzMi4wMTYgMjIzLjk5NSAzMi4wMTZTMjM2LjgzOSAzNC43MDMgMjQxLjM3IDM5LjQ1M0w0MDkuMzcgMjE1LjQ1M0M0MTguNDk1IDIyNS4wNDcgNDE4LjE1MSAyNDAuMjM0IDQwOC41NTcgMjQ5LjM5MUMzOTkuMDU3IDI1OC41NDcgMzgzLjgwNyAyNTguMjAzIDM3NC42MiAyNDguNTc4TDI0Ny45OTUgMTE1LjkxVjQ1NkMyNDcuOTk1IDQ2OS4yNSAyMzcuMjQ1IDQ4MCAyMjMuOTk1IDQ4MFMxOTkuOTk1IDQ2OS4yNSAxOTkuOTk1IDQ1NlYxMTUuOTFMNzMuMzcgMjQ4LjU3OEM2NC4yMTQgMjU4LjIwMyA0OC45NjQgMjU4LjU0NyAzOS40MzIgMjQ5LjM5MUMyOS44MzkgMjQwLjIzNCAyOS40OTUgMjI1LjA0NyAzOC42MiAyMTUuNDUzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M38.62 215.453L206.62 39.453C211.151 34.703 217.432 32.016 223.995 32.016S236.839 34.703 241.37 39.453L409.37 215.453C418.495 225.047 418.151 240.234 408.557 249.391C399.057 258.547 383.807 258.203 374.62 248.578L247.995 115.91V456C247.995 469.25 237.245 480 223.995 480S199.995 469.25 199.995 456V115.91L73.37 248.578C64.214 258.203 48.964 258.547 39.432 249.391C29.839 240.234 29.495 225.047 38.62 215.453Z" />
        </Icon>
    </>
}