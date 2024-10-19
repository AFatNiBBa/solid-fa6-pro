
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `location-slash` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location-slash?s=solid location-slash}
 * @preview ![location-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDAuMjc5IDUwMS42NjhDMzA5LjgxMSA1MTUuNDM0IDMzMC4xODYgNTE1LjQzNCAzMzkuNzE3IDUwMS42NjhDMzYzLjc1NCA0NjYuODI1IDM4NC4yNzUgNDM3LjU1NCA0MDIuMjUgNDExLjk0N0wxMjguMTIyIDE5Ny4wOTNDMTI5LjM3NCAyNzAuMzYxIDE1OC4yOSAyOTUuODQ1IDMwMC4yNzkgNTAxLjY2OFpNNjMwLjgxMSA0NjkuMTAyTDQ1Ny4wNjQgMzMyLjkyNUM1MDAuOTQzIDI2Ny43MjEgNTExLjk5NyAyNDAuNTk0IDUxMS45OTcgMTkyLjAwMUM1MTEuOTk3IDg1Ljk3MSA0MjYuMDI5IDAuMDA0IDMxOS45OTggMC4wMDRDMjQ5LjE2NCAwLjAwNCAxODcuNjIgMzguNTc4IDE1NC4zNTYgOTUuNjY4TDM4LjgxNCA1LjEwOUMzNC40MDcgMS42NzIgMjkuMTg5IDAgMjQuMDMyIDBDMTYuOTA3IDAgOS44NDUgMy4xNTYgNS4xMjYgOS4xODdDLTMuMDYxIDE5LjYyNSAtMS4yNDkgMzQuNzE4IDkuMTg5IDQyLjg5TDYwMS4xODYgNTA2Ljg4M0M2MTEuNjg2IDUxNS4wODYgNjI2Ljc0OSA1MTMuMjExIDYzNC44NzQgNTAyLjgwNUM2NDMuMDYxIDQ5Mi4zNjcgNjQxLjI0OSA0NzcuMjc0IDYzMC44MTEgNDY5LjEwMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function LocationSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M300.279 501.668C309.811 515.434 330.186 515.434 339.717 501.668C363.754 466.825 384.275 437.554 402.25 411.947L128.122 197.093C129.374 270.361 158.29 295.845 300.279 501.668ZM630.811 469.102L457.064 332.925C500.943 267.721 511.997 240.594 511.997 192.001C511.997 85.971 426.029 0.004 319.998 0.004C249.164 0.004 187.62 38.578 154.356 95.668L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.187C-3.061 19.625 -1.249 34.718 9.189 42.89L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102Z" />
        </Icon>
    </>
}