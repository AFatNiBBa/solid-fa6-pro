
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-arrow-right` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-right?s=solid circle-arrow-right}
 * @preview ![circle-arrow-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQyMiAxNiAxNiAxMjMuNDIyIDE2IDI1NlMxMjMuNDIyIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTc4IDQ5NiAyNTZTMzg4LjU3OCAxNiAyNTYgMTZaTTQwNi42MDIgMjc4LjY0OEwzMDIuNjI1IDM4Mi42MjVDMjkwLjEyNSAzOTUuMTI1IDI2OS44NzUgMzk1LjEyNSAyNTcuMzc1IDM4Mi42MjVTMjQ0Ljg3NSAzNDkuODc1IDI1Ny4zNzUgMzM3LjM3NUwzMDYuNzUgMjg4SDEyOEMxMTAuMzEyIDI4OCA5NiAyNzMuNjcyIDk2IDI1NlMxMTAuMzEyIDIyNCAxMjggMjI0SDMwNi43NUwyNTcuMzc1IDE3NC42MjVDMjQ0Ljg3NSAxNjIuMTI1IDI0NC44NzUgMTQxLjg3NSAyNTcuMzc1IDEyOS4zNzVTMjkwLjEyNSAxMTYuODc1IDMwMi42MjUgMTI5LjM3NUw0MDYuNjAyIDIzMy4zNTJDNDE0LjYgMjQxLjMzNiA0MTYgMjUxLjEwMiA0MTYgMjU2QzQxNiAyNjAuODgzIDQxNC42MDkgMjcwLjY1NiA0MDYuNjAyIDI3OC42NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleArrowRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.422 16 16 123.422 16 256S123.422 496 256 496S496 388.578 496 256S388.578 16 256 16ZM406.602 278.648L302.625 382.625C290.125 395.125 269.875 395.125 257.375 382.625S244.875 349.875 257.375 337.375L306.75 288H128C110.312 288 96 273.672 96 256S110.312 224 128 224H306.75L257.375 174.625C244.875 162.125 244.875 141.875 257.375 129.375S290.125 116.875 302.625 129.375L406.602 233.352C414.6 241.336 416 251.102 416 256C416 260.883 414.609 270.656 406.602 278.648Z" />
        </Icon>
    </>
}