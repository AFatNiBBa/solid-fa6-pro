
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `marker` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/marker?s=duotone marker}
 * @preview ![marker](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk0LjAwNiAyOTAuMDA2QzQxLjUxIDM0Mi41MDIgOC4zODkgNDExLjM2OSAwLjEzOSA0ODUuMTEzVjQ4NS4zNjNDLTEuNDg2IDUwMC42MTEgMTEuMzg5IDUxMy40ODYgMjYuNjM3IDUxMS44NjFDMTAwLjUwNiA1MDMuNzM2IDE2OS4zNzUgNDcwLjYxNSAyMjEuOTk0IDQxNy45OTRMMzE5Ljk4OSAzMjAuMDAxTDE5Mi4wMDEgMTkyLjAxMUw5NC4wMDYgMjkwLjAwNloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDg1LjY1NiAxNTQuNTE4TDMyMC4xNzIgMzIwLjAwNEwxOTIuMTg0IDE5Mi4wMTRMMzAxLjk4OCA4Mi4yMDlMMjcxLjA1MSA1MS4zOTZMMTcyLjYxOSAxNDkuODI4QzE2Ni4zNzEgMTU2LjA3OCAxNTYuMjQ2IDE1Ni4wNzggMTQ5Ljk5NiAxNDkuODI4TDEzOC42ODggMTM4LjUyQzEzMi40MzggMTMyLjI3IDEzMi40MzggMTIyLjE0NSAxMzguNjg4IDExNS44OTZMMjQyLjgwMyAxMS43NzlDMjU4LjQyOCAtMy44NDQgMjgzLjY3NiAtMy44NDQgMjk5LjI5OSAxMS43NzlMMzM1LjkyIDQ4LjI3N0wzNTcuNjY4IDI2LjUyOUMzOTMuMDQxIC04Ljg0NCA0NTAuMjg1IC04Ljg0NCA0ODUuNjU2IDI2LjUyOUM1MjEuMDI5IDYxLjkgNTIxLjAyOSAxMTkuMTQ2IDQ4NS42NTYgMTU0LjUxOFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Marker(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M94.006 290.006C41.51 342.502 8.389 411.369 0.139 485.113V485.363C-1.486 500.611 11.389 513.486 26.637 511.861C100.506 503.736 169.375 470.615 221.994 417.994L319.989 320.001L192.001 192.011L94.006 290.006Z" />
            <path d="M485.656 154.518L320.172 320.004L192.184 192.014L301.988 82.209L271.051 51.396L172.619 149.828C166.371 156.078 156.246 156.078 149.996 149.828L138.688 138.52C132.438 132.27 132.438 122.145 138.688 115.896L242.803 11.779C258.428 -3.844 283.676 -3.844 299.299 11.779L335.92 48.277L357.668 26.529C393.041 -8.844 450.285 -8.844 485.656 26.529C521.029 61.9 521.029 119.146 485.656 154.518Z" />
        </Icon>
    </>
}