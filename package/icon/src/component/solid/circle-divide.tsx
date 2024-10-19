
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-divide` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-divide?s=solid circle-divide}
 * @preview ![circle-divide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYuMDAyIDE2QzEyMy40MzggMTYgMTYgMTIzLjQzOCAxNiAyNTZTMTIzLjQzOCA0OTYgMjU2LjAwMiA0OTZDMzg4LjU2MiA0OTYgNDk2IDM4OC41NjIgNDk2IDI1NlMzODguNTYyIDE2IDI1Ni4wMDIgMTZaTTI1NiAxMjhDMjczLjY3NCAxMjggMjg4IDE0Mi4zMjYgMjg4IDE2MEMyODggMTc3LjY3MiAyNzMuNjc0IDE5MiAyNTYgMTkyUzIyNCAxNzcuNjcyIDIyNCAxNjBDMjI0IDE0Mi4zMjYgMjM4LjMyNiAxMjggMjU2IDEyOFpNMjU2IDM4NEMyMzguMzI2IDM4NCAyMjQgMzY5LjY3MiAyMjQgMzUyQzIyNCAzMzQuMzI2IDIzOC4zMjYgMzIwIDI1NiAzMjBTMjg4IDMzNC4zMjYgMjg4IDM1MkMyODggMzY5LjY3MiAyNzMuNjc0IDM4NCAyNTYgMzg0Wk0zNTIuMDAyIDI4MEgxNjAuMDAyQzE0Ni44MDEgMjgwIDEzNiAyNjkuMTk3IDEzNiAyNTZDMTM2IDI0Mi43OTkgMTQ2LjgwMSAyMzIgMTYwLjAwMiAyMzJIMzUyLjAwMkMzNjUuMTk5IDIzMiAzNzYgMjQyLjc5OSAzNzYgMjU2QzM3NiAyNjkuMTk3IDM2NS4xOTkgMjgwIDM1Mi4wMDIgMjgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleDivide(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256.002 16C123.438 16 16 123.438 16 256S123.438 496 256.002 496C388.562 496 496 388.562 496 256S388.562 16 256.002 16ZM256 128C273.674 128 288 142.326 288 160C288 177.672 273.674 192 256 192S224 177.672 224 160C224 142.326 238.326 128 256 128ZM256 384C238.326 384 224 369.672 224 352C224 334.326 238.326 320 256 320S288 334.326 288 352C288 369.672 273.674 384 256 384ZM352.002 280H160.002C146.801 280 136 269.197 136 256C136 242.799 146.801 232 160.002 232H352.002C365.199 232 376 242.799 376 256C376 269.197 365.199 280 352.002 280Z" />
        </Icon>
    </>
}