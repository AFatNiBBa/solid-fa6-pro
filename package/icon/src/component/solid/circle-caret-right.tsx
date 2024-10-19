
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-caret-right` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-right?s=solid circle-caret-right}
 * @preview ![circle-caret-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUzIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ3IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTM2MC4zMjggMjczLjU5NEwyNDguMzI4IDM3Ny41OTRDMjQzLjc5NyAzODEuNzgxIDIzNy45MzggMzg0IDIzMiAzODRDMjI4Ljc1IDM4NCAyMjUuNSAzODMuMzQ0IDIyMi40MDYgMzgyQzIxMy42NTYgMzc4LjE4OCAyMDggMzY5LjUzMSAyMDggMzYwVjE1MkMyMDggMTQyLjQ2OSAyMTMuNjU2IDEzMy44MTIgMjIyLjQwNiAxMzBDMjMxLjE4OCAxMjYuMjUgMjQxLjMyOCAxMjcuOTM4IDI0OC4zMjggMTM0LjQwNkwzNjAuMzI4IDIzOC40MDZDMzY1LjIxOSAyNDIuOTY5IDM2OCAyNDkuMzEyIDM2OCAyNTZTMzY1LjIxOSAyNjkuMDMxIDM2MC4zMjggMjczLjU5NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleCaretRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM360.328 273.594L248.328 377.594C243.797 381.781 237.938 384 232 384C228.75 384 225.5 383.344 222.406 382C213.656 378.188 208 369.531 208 360V152C208 142.469 213.656 133.812 222.406 130C231.188 126.25 241.328 127.938 248.328 134.406L360.328 238.406C365.219 242.969 368 249.312 368 256S365.219 269.031 360.328 273.594Z" />
        </Icon>
    </>
}