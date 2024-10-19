
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chevron-down` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-down?s=thin chevron-down}
 * @preview ![chevron-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yLjY1MiAxNjIuMDY2QzQuMTgzIDE2MC42OSA2LjA5IDE2MC4wMTggNy45OTYgMTYwLjAxOEMxMC4xODQgMTYwLjAxOCAxMi4zNzEgMTYwLjkwOSAxMy45MzQgMTYyLjY2TDIyNCAzOTYuMTcxTDQzNC4wNjYgMTYyLjY2QzQzNi45NzMgMTU5LjM3NyA0NDIuMDY3IDE1OS4wOCA0NDUuMzQ4IDE2Mi4wNjZDNDQ4LjYyOSAxNjUuMDM2IDQ0OC45MSAxNzAuMDg1IDQ0NS45NDIgMTczLjM4M0wyMjkuOTM4IDQxMy40OTFDMjI2LjkzOCA0MTYuODM2IDIyMS4wNjIgNDE2LjgzNiAyMTguMDYyIDQxMy40OTFMMi4wNTggMTczLjM4M0MtMC45MSAxNzAuMDg1IC0wLjYyOSAxNjUuMDM2IDIuNjUyIDE2Mi4wNjZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ChevronDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M2.652 162.066C4.183 160.69 6.09 160.018 7.996 160.018C10.184 160.018 12.371 160.909 13.934 162.66L224 396.171L434.066 162.66C436.973 159.377 442.067 159.08 445.348 162.066C448.629 165.036 448.91 170.085 445.942 173.383L229.938 413.491C226.938 416.836 221.062 416.836 218.062 413.491L2.058 173.383C-0.91 170.085 -0.629 165.036 2.652 162.066Z" />
        </Icon>
    </>
}