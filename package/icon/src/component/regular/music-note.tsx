
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `music-note` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/music-note?s=regular music-note}
 * @preview ![music-note](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDIuMzc1IDEuNDY0TDE5OC4zNzUgMzYuODQxQzE4NS4xMjUgNDEuMDkyIDE3NiA1My4zNDMgMTc2IDY3LjM0NFYzNjYuNDlDMTU3Ljg3NSAzNTcuMzY0IDEzNS44NzUgMzUxLjk4OSAxMTIgMzUxLjk4OUM1MC4xMjUgMzUxLjk4OSAwIDM4Ny44NjYgMCA0MzEuOTk0UzUwLjEyNSA1MTIgMTEyIDUxMlMyMjQgNDc2LjEyMiAyMjQgNDMxLjk5NFYxOTUuMzUzTDM2MS42MjUgMTYxLjk3NUMzNzUgMTU3LjcyNSAzODQgMTQ1LjQ3NCAzODQgMTMxLjQ3M1YzMS45NjZDMzg0IDIxLjcxNSAzNzkuMTI1IDEyLjIxNSAzNzAuODc1IDYuMjE0QzM2Mi42MjUgMC4wODkgMzUyLjEyNSAtMS41MzYgMzQyLjM3NSAxLjQ2NFpNMTEyIDQ2My45OTdDNzIuMjUgNDYzLjk5NyA0OCA0NDMuMjQ1IDQ4IDQzMS45OTRDNDggNDIwLjc0NCA3Mi4yNSAzOTkuOTkyIDExMiAzOTkuOTkyUzE3NiA0MjAuNzQ0IDE3NiA0MzEuOTk0QzE3NiA0NDMuMjQ1IDE1MS43NSA0NjMuOTk3IDExMiA0NjMuOTk3Wk0zMzYgMTE5LjcyMkwyMjQgMTQ0Ljk3NFY3OS4wOTRMMzM2IDUzLjg0M1YxMTkuNzIyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MusicNote(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M342.375 1.464L198.375 36.841C185.125 41.092 176 53.343 176 67.344V366.49C157.875 357.364 135.875 351.989 112 351.989C50.125 351.989 0 387.866 0 431.994S50.125 512 112 512S224 476.122 224 431.994V195.353L361.625 161.975C375 157.725 384 145.474 384 131.473V31.966C384 21.715 379.125 12.215 370.875 6.214C362.625 0.089 352.125 -1.536 342.375 1.464ZM112 463.997C72.25 463.997 48 443.245 48 431.994C48 420.744 72.25 399.992 112 399.992S176 420.744 176 431.994C176 443.245 151.75 463.997 112 463.997ZM336 119.722L224 144.974V79.094L336 53.843V119.722Z" />
        </Icon>
    </>
}