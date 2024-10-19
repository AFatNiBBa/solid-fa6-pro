
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `face-rolling-eyes` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-rolling-eyes?s=regular face-rolling-eyes}
 * @preview ![face-rolling-eyes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDQuMDM1IDE1MkMzMDQuMTk1IDE1MiAyNzEuOTg0IDE4NC4yNSAyNzEuOTg0IDIyNFMzMDQuMTk1IDI5NiAzNDQuMDM1IDI5NkMzODMuNzU0IDI5NiA0MTUuOTY1IDI2My43NSA0MTUuOTY1IDIyNFMzODMuNzU0IDE1MiAzNDQuMDM1IDE1MlpNMzQ0LjAzNSAyNjRDMzIxLjg3NSAyNjQgMzAzLjk1MyAyNDYuMTI1IDMwMy45NTMgMjI0QzMwMy45NTMgMjEwLjM3NSAzMTEuMzQgMTk4Ljg3NSAzMjEuNzU0IDE5MS43NUMzMjAuNjY0IDE5NC4yNSAzMjAuMDU5IDE5NyAzMjAuMDU5IDIwMEMzMjAuMDU5IDIxMy4yNSAzMzAuNzE1IDIyNCAzNDQuMDM1IDIyNFMzNjguMDEyIDIxMy4yNSAzNjguMDEyIDIwMEMzNjguMDEyIDE5Ny4xMjUgMzY3LjI4NSAxOTQuMjUgMzY2LjMxNiAxOTEuNzVDMzc2LjczIDE5OC44NzUgMzgzLjk5NiAyMTAuMzc1IDM4My45OTYgMjI0QzM4My45OTYgMjQ2LjEyNSAzNjYuMDc0IDI2NCAzNDQuMDM1IDI2NFpNMjQwLjAxNiAyMjRDMjQwLjAxNiAxODQuMjUgMjA3LjgwNSAxNTIgMTY3Ljk2NSAxNTJDMTI4LjI0NiAxNTIgOTYuMDM1IDE4NC4yNSA5Ni4wMzUgMjI0UzEyOC4yNDYgMjk2IDE2Ny45NjUgMjk2QzIwNy44MDUgMjk2IDI0MC4wMTYgMjYzLjc1IDI0MC4wMTYgMjI0Wk0xMjguMDA0IDIyNEMxMjguMDA0IDIxMC4zNzUgMTM1LjI3IDE5OC44NzUgMTQ1LjY4NCAxOTEuNzVDMTQ0LjcxNSAxOTQuMjUgMTQzLjk4OCAxOTcgMTQzLjk4OCAyMDBDMTQzLjk4OCAyMTMuMjUgMTU0LjY0NSAyMjQgMTY3Ljk2NSAyMjRTMTkxLjk0MSAyMTMuMjUgMTkxLjk0MSAyMDBDMTkxLjk0MSAxOTcuMTI1IDE5MS4zMzYgMTk0LjI1IDE5MC4yNDYgMTkxLjc1QzIwMC42NiAxOTguODc1IDIwOC4wNDcgMjEwLjM3NSAyMDguMDQ3IDIyNEMyMDguMDQ3IDI0Ni4xMjUgMTkwLjEyNSAyNjQgMTY3Ljk2NSAyNjRDMTQ1LjkyNiAyNjQgMTI4LjAwNCAyNDYuMTI1IDEyOC4wMDQgMjI0Wk0zMjAuMDU5IDM1MkgxOTEuOTQxQzE3OC43NDIgMzUyIDE2Ny45NjUgMzYyLjc1IDE2Ny45NjUgMzc2UzE3OC43NDIgNDAwIDE5MS45NDEgNDAwSDMyMC4wNTlDMzMzLjI1OCA0MDAgMzQ0LjAzNSAzODkuMjUgMzQ0LjAzNSAzNzZTMzMzLjI1OCAzNTIgMzIwLjA1OSAzNTJaTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMjU2IDQ0OEMxNTAuMTMxIDQ0OCA2NCAzNjEuODY5IDY0IDI1NlMxNTAuMTMxIDY0IDI1NiA2NFM0NDggMTUwLjEzMSA0NDggMjU2UzM2MS44NjkgNDQ4IDI1NiA0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FaceRollingEyes(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M344.035 152C304.195 152 271.984 184.25 271.984 224S304.195 296 344.035 296C383.754 296 415.965 263.75 415.965 224S383.754 152 344.035 152ZM344.035 264C321.875 264 303.953 246.125 303.953 224C303.953 210.375 311.34 198.875 321.754 191.75C320.664 194.25 320.059 197 320.059 200C320.059 213.25 330.715 224 344.035 224S368.012 213.25 368.012 200C368.012 197.125 367.285 194.25 366.316 191.75C376.73 198.875 383.996 210.375 383.996 224C383.996 246.125 366.074 264 344.035 264ZM240.016 224C240.016 184.25 207.805 152 167.965 152C128.246 152 96.035 184.25 96.035 224S128.246 296 167.965 296C207.805 296 240.016 263.75 240.016 224ZM128.004 224C128.004 210.375 135.27 198.875 145.684 191.75C144.715 194.25 143.988 197 143.988 200C143.988 213.25 154.645 224 167.965 224S191.941 213.25 191.941 200C191.941 197.125 191.336 194.25 190.246 191.75C200.66 198.875 208.047 210.375 208.047 224C208.047 246.125 190.125 264 167.965 264C145.926 264 128.004 246.125 128.004 224ZM320.059 352H191.941C178.742 352 167.965 362.75 167.965 376S178.742 400 191.941 400H320.059C333.258 400 344.035 389.25 344.035 376S333.258 352 320.059 352ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448Z" />
        </Icon>
    </>
}