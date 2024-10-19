
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-c` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-c?s=solid circle-c}
 * @preview ![circle-c](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTE5OS4yNSAzMTIuNjI1QzIxNC4xNzIgMzI3LjY4OCAyMzQgMzM2IDI1NS4wOTQgMzM2QzI3Ni4xODggMzM2IDI5Ni4wMTYgMzI3LjcxOSAzMTAuOTUzIDMxMi42MjVDMzIwLjI4MSAzMDMuMjUgMzM1LjUgMzAzLjEyNSAzNDQuODkxIDMxMi41QzM1NC4zMTMgMzIxLjgxMiAzNTQuMzc1IDMzNyAzNDUuMDQ3IDM0Ni40MzhDMzIxLjAzMSAzNzAuNjU2IDI4OS4wNzggMzg0IDI1NS4wOTQgMzg0QzI1NS4wOTQgMzg0IDI1NS4wOTQgMzg0IDI1NS4wNzggMzg0QzIyMS4wOTQgMzg0IDE4OS4xNTYgMzcwLjY1NiAxNjUuMTU2IDM0Ni40MzhDMTE1LjcxOSAyOTYuNTk0IDExNS43MTkgMjE1LjQzOCAxNjUuMTU2IDE2NS41NjJDMjEzLjE0MSAxMTcuMDk0IDI5NyAxMTcuMDk0IDM0NS4wNDcgMTY1LjU2MkMzNTQuMzc1IDE3NC45NjkgMzU0LjMxMiAxOTAuMTU2IDM0NC44OTEgMTk5LjVDMzM1LjUgMjA4LjgxMiAzMjAuMzEyIDIwOC43ODEgMzEwLjk1MyAxOTkuMzQ0QzI4MS4wNzggMTY5LjIxOSAyMjkuMDk0IDE2OS4yNSAxOTkuMjUgMTk5LjM0NEMxNjguMjgxIDIzMC41OTQgMTY4LjI4MSAyODEuNDA2IDE5OS4yNSAzMTIuNjI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleC(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM199.25 312.625C214.172 327.688 234 336 255.094 336C276.188 336 296.016 327.719 310.953 312.625C320.281 303.25 335.5 303.125 344.891 312.5C354.313 321.812 354.375 337 345.047 346.438C321.031 370.656 289.078 384 255.094 384C255.094 384 255.094 384 255.078 384C221.094 384 189.156 370.656 165.156 346.438C115.719 296.594 115.719 215.438 165.156 165.562C213.141 117.094 297 117.094 345.047 165.562C354.375 174.969 354.312 190.156 344.891 199.5C335.5 208.812 320.312 208.781 310.953 199.344C281.078 169.219 229.094 169.25 199.25 199.344C168.281 230.594 168.281 281.406 199.25 312.625Z" />
        </Icon>
    </>
}