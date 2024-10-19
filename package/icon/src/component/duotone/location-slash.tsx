
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `location-slash` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location-slash?s=duotone location-slash}
 * @preview ![location-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMwMC4xNTggNTAxLjY3NkMzMDkuNjg5IDUxNS40NDEgMzMwLjA2NCA1MTUuNDQxIDMzOS41OTYgNTAxLjY3NkMzNjMuNjMzIDQ2Ni44MzIgMzg0LjE1NCA0MzcuNTYzIDQwMi4xMjkgNDExLjk1M0wxMjggMTk3LjA5NEMxMjkuMjUyIDI3MC4zNjcgMTU4LjE2OCAyOTUuODUyIDMwMC4xNTggNTAxLjY3NlpNMzE5Ljg3NyAwLjAwNEMyNDkuMDQzIDAuMDA0IDE4Ny40OTggMzguNTc4IDE1NC4yMzQgOTUuNjcyTDQ1Ni45NDMgMzMyLjkzQzUwMC44MjIgMjY3LjcyNyA1MTEuODc3IDI0MC41OTggNTExLjg3NyAxOTIuMDA0QzUxMS44NzcgODUuOTczIDQyNS45MDggMC4wMDQgMzE5Ljg3NyAwLjAwNFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjM0Ljg3NiA1MDIuODEyQzYyNi43NTEgNTEzLjIxOSA2MTEuNjg5IDUxNS4wOTQgNjAxLjE4OSA1MDYuODkxTDkuMTg5IDQyLjg5MUMtMS4yNDkgMzQuNzE5IC0zLjA2MSAxOS42MjUgNS4xMjYgOS4xODdDOS44NDUgMy4xNTYgMTYuOTA3IDAgMjQuMDMyIDBDMjkuMTg5IDAgMzQuNDA3IDEuNjcyIDM4LjgxNCA1LjEwOUw2MzAuODE0IDQ2OS4xMDlDNjQxLjI1MSA0NzcuMjgxIDY0My4wNjQgNDkyLjM3NSA2MzQuODc2IDUwMi44MTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LocationSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M300.158 501.676C309.689 515.441 330.064 515.441 339.596 501.676C363.633 466.832 384.154 437.563 402.129 411.953L128 197.094C129.252 270.367 158.168 295.852 300.158 501.676ZM319.877 0.004C249.043 0.004 187.498 38.578 154.234 95.672L456.943 332.93C500.822 267.727 511.877 240.598 511.877 192.004C511.877 85.973 425.908 0.004 319.877 0.004Z" />
            <path d="M634.876 502.812C626.751 513.219 611.689 515.094 601.189 506.891L9.189 42.891C-1.249 34.719 -3.061 19.625 5.126 9.187C9.845 3.156 16.907 0 24.032 0C29.189 0 34.407 1.672 38.814 5.109L630.814 469.109C641.251 477.281 643.064 492.375 634.876 502.812Z" />
        </Icon>
    </>
}