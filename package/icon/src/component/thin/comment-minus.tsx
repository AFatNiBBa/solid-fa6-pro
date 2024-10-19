
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `comment-minus` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-minus?s=thin comment-minus}
 * @preview ![comment-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMzJDMTE0LjU5NCAzMiAwIDEyNS4wOTQgMCAyNDBDMCAyODkuNTk0IDIxLjQwNiAzMzUgNTcgMzcwLjcwM0M0NC41IDQyMS4wOTQgMi42ODggNDY2IDIuMTg4IDQ2Ni41QzAgNDY4Ljc5NyAtMC41OTQgNDcyLjIwMyAwLjY4OCA0NzUuMjAzQzEuOTk5IDQ3OC4yMDMgNC44MTIgNDgwIDggNDgwQzc0LjMxMiA0ODAgMTI0IDQ0OC4yMDMgMTQ4LjU5NCA0MjguNTk0QzE4MS4zMTIgNDQwLjkwNiAyMTcuNTk0IDQ0OCAyNTYgNDQ4QzM5Ny40MDYgNDQ4IDUxMiAzNTQuOTA2IDUxMiAyNDBTMzk3LjQwNiAzMiAyNTYgMzJaTTI1NiA0MzJDMjIwLjg3OSA0MzIgMTg2LjY0MSA0MjUuODE2IDE1NC4yMyA0MTMuNjE5TDE0NS43MjMgNDEwLjQxOEwxMzguNjE3IDQxNi4wODRDMTE4LjQxOCA0MzIuMTg5IDc4LjQ3NyA0NTguMTE5IDI1Ljk1NyA0NjMuMTQzQzQwLjM5NSA0NDQuODQ4IDYzLjM3NSA0MTEuNDYxIDcyLjUzMSAzNzQuNTU1TDc0LjcwMyAzNjUuNzk3TDY4LjMzMiAzNTkuNDA2QzM0LjA5OCAzMjUuMDY2IDE2IDI4My43NzUgMTYgMjQwQzE2IDEzNC4xMzEgMTIzLjY2NCA0OCAyNTYgNDhTNDk2IDEzNC4xMzEgNDk2IDI0MFMzODguMzM2IDQzMiAyNTYgNDMyWk0zNDQgMjMySDE2OEMxNjMuNTc4IDIzMiAxNjAgMjM1LjU4IDE2MCAyNDBDMTYwIDI0NC40MjIgMTYzLjU3OCAyNDggMTY4IDI0OEgzNDRDMzQ4LjQyMiAyNDggMzUyIDI0NC40MiAzNTIgMjQwUzM0OC40MjIgMjMyIDM0NCAyMzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CommentMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 32C114.594 32 0 125.094 0 240C0 289.594 21.406 335 57 370.703C44.5 421.094 2.688 466 2.188 466.5C0 468.797 -0.594 472.203 0.688 475.203C1.999 478.203 4.812 480 8 480C74.312 480 124 448.203 148.594 428.594C181.312 440.906 217.594 448 256 448C397.406 448 512 354.906 512 240S397.406 32 256 32ZM256 432C220.879 432 186.641 425.816 154.23 413.619L145.723 410.418L138.617 416.084C118.418 432.189 78.477 458.119 25.957 463.143C40.395 444.848 63.375 411.461 72.531 374.555L74.703 365.797L68.332 359.406C34.098 325.066 16 283.775 16 240C16 134.131 123.664 48 256 48S496 134.131 496 240S388.336 432 256 432ZM344 232H168C163.578 232 160 235.58 160 240C160 244.422 163.578 248 168 248H344C348.422 248 352 244.42 352 240S348.422 232 344 232Z" />
        </Icon>
    </>
}