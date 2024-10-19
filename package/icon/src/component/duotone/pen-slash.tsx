
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pen-slash` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pen-slash?s=duotone pen-slash}
 * @preview ![pen-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk1LjAzNyAzNTIuOTU1QzkyLjgwMiAzNTUuMTg5IDkxLjI4MSAzNTguMDMzIDkwLjY2IDM2MS4xMzFMNjQuMzIgNDkyLjg1NEM2Mi4wOCA1MDQuMDQ5IDcxLjk1MSA1MTMuOTIgODMuMTQ0IDUxMS42OEwyMTQuODU1IDQ4NS4zMzRDMjE3Ljk1MyA0ODQuNzE1IDIyMC43OTYgNDgzLjE5MyAyMjMuMDMxIDQ4MC45NjFMMzQwLjQ2NCAzNjMuNTMzTDE5Ni45NDMgMjUxLjA0NUw5NS4wMzcgMzUyLjk1NVpNMjY1LjMzNiAxODIuNjVMNDA4Ljg2MSAyOTUuMTQzTDQ4Mi43NSAyMjEuMjU4TDM1NC43NSA5My4yMzJMMjY1LjMzNiAxODIuNjVaTTU2MS45MzcgNzQuMTU4TDUwMS44NDcgMTQuMDYyQzQ4My4wOTcgLTQuNjg4IDQ1Mi42NjIgLTQuNjg4IDQzMy45MTIgMTQuMDYyTDM3Ny4zODQgNzAuNjExTDUwNS4zNzggMTk4LjYzM0w1NjEuOTM3IDE0Mi4wODRDNTgwLjY4NyAxMjMuMzE2IDU4MC42ODcgOTIuOTEgNTYxLjkzNyA3NC4xNThaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI0LjAzMiAwQzI5LjE4OSAwIDM0LjQwNyAxLjY3MiAzOC44MTQgNS4xMDlMNjMwLjgxMSA0NjkuMTAyQzY0MS4yNDkgNDc3LjI3NCA2NDMuMDYxIDQ5Mi4zNjcgNjM0Ljg3NCA1MDIuODA1QzYyNi43NDkgNTEzLjIxMSA2MTEuNjg2IDUxNS4wODYgNjAxLjE4NiA1MDYuODgzTDkuMTg5IDQyLjg5Qy0xLjI0OSAzNC43MTggLTMuMDYxIDE5LjYyNSA1LjEyNiA5LjE4N0M5Ljg0NSAzLjE1NiAxNi45MDcgMCAyNC4wMzIgMFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function PenSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M95.037 352.955C92.802 355.189 91.281 358.033 90.66 361.131L64.32 492.854C62.08 504.049 71.951 513.92 83.144 511.68L214.855 485.334C217.953 484.715 220.796 483.193 223.031 480.961L340.464 363.533L196.943 251.045L95.037 352.955ZM265.336 182.65L408.861 295.143L482.75 221.258L354.75 93.232L265.336 182.65ZM561.937 74.158L501.847 14.062C483.097 -4.688 452.662 -4.688 433.912 14.062L377.384 70.611L505.378 198.633L561.937 142.084C580.687 123.316 580.687 92.91 561.937 74.158Z" />
            <path d="M24.032 0C29.189 0 34.407 1.672 38.814 5.109L630.811 469.102C641.249 477.274 643.061 492.367 634.874 502.805C626.749 513.211 611.686 515.086 601.186 506.883L9.189 42.89C-1.249 34.718 -3.061 19.625 5.126 9.187C9.845 3.156 16.907 0 24.032 0Z" />
        </Icon>
    </>
}