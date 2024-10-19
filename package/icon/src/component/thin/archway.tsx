
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `archway` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/archway?s=thin archway}
 * @preview ![archway](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjAgOTZDNTY4Ljg3NSA5NiA1NzYgODguODc1IDU3NiA4MFYxNkM1NzYgNy4xMjUgNTY4Ljg3NSAwIDU2MCAwSDE2QzcuMTI1IDAgMCA3LjEyNSAwIDE2VjgwQzAgODguODc1IDcuMTI1IDk2IDE2IDk2SDI0VjQ5Nkg4QzMuNTc4IDQ5NiAwIDQ5OS41NzggMCA1MDRTMy41NzggNTEyIDggNTEySDE5MkMxOTYuNDIyIDUxMiAyMDAgNTA4LjQyMiAyMDAgNTA0VjMyOEMyMDAgMjc5LjQ2OSAyMzkuNDY5IDI0MCAyODggMjQwUzM3NiAyNzkuNDY5IDM3NiAzMjhWNTA0QzM3NiA1MDguNDIyIDM3OS41NzggNTEyIDM4NCA1MTJINTY4QzU3Mi40MjIgNTEyIDU3NiA1MDguNDIyIDU3NiA1MDRTNTcyLjQyMiA0OTYgNTY4IDQ5Nkg1NTJWOTZINTYwWk0xNiA4MFYxNkg1NjBWODBIMTZaTTUzNiA0OTZIMzkyVjMyOEMzOTIgMjcwLjY1NiAzNDUuMzQ0IDIyNCAyODggMjI0UzE4NCAyNzAuNjU2IDE4NCAzMjhWNDk2SDQwVjk2SDUzNlY0OTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Archway(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M560 96C568.875 96 576 88.875 576 80V16C576 7.125 568.875 0 560 0H16C7.125 0 0 7.125 0 16V80C0 88.875 7.125 96 16 96H24V496H8C3.578 496 0 499.578 0 504S3.578 512 8 512H192C196.422 512 200 508.422 200 504V328C200 279.469 239.469 240 288 240S376 279.469 376 328V504C376 508.422 379.578 512 384 512H568C572.422 512 576 508.422 576 504S572.422 496 568 496H552V96H560ZM16 80V16H560V80H16ZM536 496H392V328C392 270.656 345.344 224 288 224S184 270.656 184 328V496H40V96H536V496Z" />
        </Icon>
    </>
}