
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `calendar-minus` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-minus?s=solid calendar-minus}
 * @preview ![calendar-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgNjRIMzUyVjMyQzM1MiAxNC40IDMzNy42IDAgMzIwIDBIMzIwQzMwMi40IDAgMjg4IDE0LjQgMjg4IDMyVjY0SDE2MFYzMkMxNjAgMTQuNCAxNDUuNiAwIDEyOCAwSDEyOEMxMTAuNCAwIDk2IDE0LjQgOTYgMzJWNjRINDhDMjEuNDkgNjQgMCA4NS40OSAwIDExMlYxNjBINDQ4VjExMkM0NDggODUuNDkgNDI2LjUxIDY0IDQwMCA2NFpNMCA0NjRDMCA0OTAuNSAyMS41IDUxMiA0OCA1MTJINDAwQzQyNi41IDUxMiA0NDggNDkwLjUgNDQ4IDQ2NFYxOTJIMFY0NjRaTTE0My45OTggMzI4LjAwMkgzMDQuMDAyQzMxNy4yNjIgMzI4LjAwMiAzMjggMzM4Ljc0MiAzMjggMzUyUzMxNy4yNjIgMzc1Ljk5OCAzMDQuMDAyIDM3NS45OThIMTQzLjk5OEMxMzAuNzMgMzc1Ljk5OCAxMjAgMzY1LjI1NiAxMjAgMzUyQzEyMCAzMzguNzQyIDEzMC43MzggMzI4LjAwMiAxNDMuOTk4IDMyOC4wMDJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CalendarMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400 64H352V32C352 14.4 337.6 0 320 0H320C302.4 0 288 14.4 288 32V64H160V32C160 14.4 145.6 0 128 0H128C110.4 0 96 14.4 96 32V64H48C21.49 64 0 85.49 0 112V160H448V112C448 85.49 426.51 64 400 64ZM0 464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V192H0V464ZM143.998 328.002H304.002C317.262 328.002 328 338.742 328 352S317.262 375.998 304.002 375.998H143.998C130.73 375.998 120 365.256 120 352C120 338.742 130.738 328.002 143.998 328.002Z" />
        </Icon>
    </>
}