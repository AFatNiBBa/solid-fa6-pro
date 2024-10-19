
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-heart` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-heart?s=duotone circle-heart}
 * @preview ![circle-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTMgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDcgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMzc5LjUgMjgwLjI1TDI2OC44NzUgMzk0LjVDMjYxLjc1IDQwMS44NzUgMjUwLjI1IDQwMS44NzUgMjQzIDM5NC41TDEzMi41IDI4MC4yNUMxMDAuMzc1IDI0Ny4xMjUgMTAyLjI1IDE5Mi4xMjUgMTM4LjI1IDE2MS41QzE2OS41IDEzNC43NSAyMTYuMTI1IDEzOS42MjUgMjQ0Ljc1IDE2OS4yNUwyNTYuMTI1IDE4MC43NUwyNjcuMzc1IDE2OS4yNUMyOTYuMTI1IDEzOS42MjUgMzQyLjc1IDEzNC43NSAzNzMuOTk5IDE2MS41QzQwOS43NSAxOTIuMTI1IDQxMS43NSAyNDcuMTI1IDM3OS41IDI4MC4yNVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzc5Ljc1MiAyODAuMjVMMjY5LjEyNyAzOTQuNUMyNjIuMDAyIDQwMS44NzUgMjUwLjUwMiA0MDEuODc1IDI0My4yNTIgMzk0LjVMMTMyLjc1MiAyODAuMjVDMTAwLjYyNyAyNDcuMTI1IDEwMi41MDIgMTkyLjEyNSAxMzguNTAyIDE2MS41QzE2OS43NTIgMTM0Ljc1IDIxNi4zNzcgMTM5LjYyNSAyNDUuMDAyIDE2OS4yNUwyNTYuMzc3IDE4MC43NUwyNjcuNjI3IDE2OS4yNUMyOTYuMzc3IDEzOS42MjUgMzQzLjAwMiAxMzQuNzUgMzc0LjI1MSAxNjEuNUM0MTAuMDAyIDE5Mi4xMjUgNDEyLjAwMiAyNDcuMTI1IDM3OS43NTIgMjgwLjI1WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleHeart(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM379.5 280.25L268.875 394.5C261.75 401.875 250.25 401.875 243 394.5L132.5 280.25C100.375 247.125 102.25 192.125 138.25 161.5C169.5 134.75 216.125 139.625 244.75 169.25L256.125 180.75L267.375 169.25C296.125 139.625 342.75 134.75 373.999 161.5C409.75 192.125 411.75 247.125 379.5 280.25Z" />
            <path d="M379.752 280.25L269.127 394.5C262.002 401.875 250.502 401.875 243.252 394.5L132.752 280.25C100.627 247.125 102.502 192.125 138.502 161.5C169.752 134.75 216.377 139.625 245.002 169.25L256.377 180.75L267.627 169.25C296.377 139.625 343.002 134.75 374.251 161.5C410.002 192.125 412.002 247.125 379.752 280.25Z" />
        </Icon>
    </>
}