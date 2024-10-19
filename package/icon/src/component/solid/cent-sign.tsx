
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cent-sign` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cent-sign?s=solid cent-sign}
 * @preview ![cent-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTAuOTY5IDM0OC41NjJDMzY0Ljk2OSAzNjUuNjcyIDM2Mi40MDYgMzkwLjg1OSAzNDUuMzEyIDQwNC44NDRDMzE4LjYxMyA0MjYuNjQzIDI4Ny43ODMgNDQwLjE2MiAyNTYgNDQ1LjU1N1Y0ODBDMjU2IDQ5Ny42NzIgMjQxLjY4OCA1MTIgMjI0IDUxMlMxOTIgNDk3LjY3MiAxOTIgNDgwVjQ0NS4xNDhDMTUzLjk1NyA0MzguNjg2IDExNy41MjcgNDIxLjA2OCA4OC4yNSAzOTEuNzY2QzUxLjk2OSAzNTUuNTE2IDMyIDMwNy4yOTcgMzIgMjU2UzUxLjk2OSAxNTYuNDg0IDg4LjI1IDEyMC4yMzRDMTE3LjUxNiA5MC45MyAxNTMuOTc5IDczLjYwOSAxOTIgNjcuMTQzVjMyQzE5MiAxNC4zMjggMjA2LjMxMiAwIDIyNCAwUzI1NiAxNC4zMjggMjU2IDMyVjY2Ljk3MUMyODcuNzY0IDcyLjM3OSAzMTguNjM1IDg1LjM3MSAzNDUuMzEyIDEwNy4xNTZDMzYyLjQwNiAxMjEuMTQxIDM2NC45NjkgMTQ2LjMyOCAzNTAuOTY5IDE2My40MzhDMzM3IDE4MC41NzggMzExLjg0NCAxODMuMTA5IDI5NC42ODggMTY5LjEyNUMyNTAuMDk0IDEzMi42ODcgMTg1LjY1NiAxMzUuOTY5IDE0NC44MTIgMTc2Ljc5N0MxMjMuNjU2IDE5Ny45NTMgMTEyIDIyNi4wNzggMTEyIDI1NlMxMjMuNjU2IDMxNC4wNDcgMTQ0LjgxMiAzMzUuMjAzQzE4NS41OTQgMzc2LjA0NyAyNTAuMDk0IDM3OS4zMTMgMjk0LjY4OCAzNDIuODc1QzMxMS44NDQgMzI4Ljg5MSAzMzcuMDMxIDMzMS40NTMgMzUwLjk2OSAzNDguNTYyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CentSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M350.969 348.562C364.969 365.672 362.406 390.859 345.312 404.844C318.613 426.643 287.783 440.162 256 445.557V480C256 497.672 241.688 512 224 512S192 497.672 192 480V445.148C153.957 438.686 117.527 421.068 88.25 391.766C51.969 355.516 32 307.297 32 256S51.969 156.484 88.25 120.234C117.516 90.93 153.979 73.609 192 67.143V32C192 14.328 206.312 0 224 0S256 14.328 256 32V66.971C287.764 72.379 318.635 85.371 345.312 107.156C362.406 121.141 364.969 146.328 350.969 163.438C337 180.578 311.844 183.109 294.688 169.125C250.094 132.687 185.656 135.969 144.812 176.797C123.656 197.953 112 226.078 112 256S123.656 314.047 144.812 335.203C185.594 376.047 250.094 379.313 294.688 342.875C311.844 328.891 337.031 331.453 350.969 348.562Z" />
        </Icon>
    </>
}