
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chevron-up` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-up?s=solid chevron-up}
 * @preview ![chevron-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzYuOTA4IDMzOS42NTdDNDI5LjA0OSAzNDcuODc1IDQxOC41MzMgMzUyIDQwOC4wMDIgMzUyQzM5OC4wNDggMzUyIDM4OC4wOTUgMzQ4LjMxMyAzODAuMzQ1IDM0MC45MDdMMjI0IDE5MS4zNTRMNjcuNjU1IDM0MC45MDdDNTEuNzAyIDM1Ni4xNTYgMjYuMzQyIDM1NS42MjUgMTEuMDkyIDMzOS42NTdDLTQuMTc0IDMyMy42ODkgLTMuNjExIDI5OC4zNzggMTIuMzQyIDI4My4wOThMMTk2LjM0NCAxMDcuMTA5QzIxMS44MTIgOTIuMjk3IDIzNi4xODggOTIuMjk3IDI1MS42NTYgMTA3LjEwOUw0MzUuNjU4IDI4My4wOThDNDUxLjYxMSAyOTguMzc4IDQ1Mi4xNzQgMzIzLjY4OSA0MzYuOTA4IDMzOS42NTdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ChevronUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M436.908 339.657C429.049 347.875 418.533 352 408.002 352C398.048 352 388.095 348.313 380.345 340.907L224 191.354L67.655 340.907C51.702 356.156 26.342 355.625 11.092 339.657C-4.174 323.689 -3.611 298.378 12.342 283.098L196.344 107.109C211.812 92.297 236.188 92.297 251.656 107.109L435.658 283.098C451.611 298.378 452.174 323.689 436.908 339.657Z" />
        </Icon>
    </>
}