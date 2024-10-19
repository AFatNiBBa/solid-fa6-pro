
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `value-absolute` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/value-absolute?s=duotone value-absolute}
 * @preview ![value-absolute](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwIDMyQzE3LjkwOCAzMiAwIDQ5LjkwOCAwIDcyVjQ0MEMwIDQ2Mi4wOTIgMTcuOTA4IDQ4MCA0MCA0ODBTODAgNDYyLjA5MiA4MCA0NDBWNzJDODAgNDkuOTA4IDYyLjA5MiAzMiA0MCAzMlpNNDcyIDMyQzQ0OS45MDggMzIgNDMyIDQ5LjkwOCA0MzIgNzJWNDQwQzQzMiA0NjIuMDkyIDQ0OS45MDggNDgwIDQ3MiA0ODBTNTEyIDQ2Mi4wOTIgNTEyIDQ0MFY3MkM1MTIgNDkuOTA4IDQ5NC4wOTIgMzIgNDcyIDMyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNzQuNjI1IDE4Mi42MjVMMzAxLjI1IDI1NkwzNzQuNjI1IDMyOS4zNzVDMzg3LjEyNSAzNDEuODc1IDM4Ny4xMjUgMzYyLjEyNSAzNzQuNjI1IDM3NC42MjVDMzY4LjM3NSAzODAuODc1IDM2MC4xODcgMzg0IDM1MiAzODRTMzM1LjYyNSAzODAuODc1IDMyOS4zNzUgMzc0LjYyNUwyNTYgMzAxLjI1TDE4Mi42MjUgMzc0LjYyNUMxNzYuMzc1IDM4MC44NzUgMTY4LjE4NyAzODQgMTYwIDM4NFMxNDMuNjI1IDM4MC44NzUgMTM3LjM3NSAzNzQuNjI1QzEyNC44NzUgMzYyLjEyNSAxMjQuODc1IDM0MS44NzUgMTM3LjM3NSAzMjkuMzc1TDIxMC43NSAyNTZMMTM3LjM3NSAxODIuNjI1QzEyNC44NzUgMTcwLjEyNSAxMjQuODc1IDE0OS44NzUgMTM3LjM3NSAxMzcuMzc1UzE3MC4xMjUgMTI0Ljg3NSAxODIuNjI1IDEzNy4zNzVMMjU2IDIxMC43NUwzMjkuMzc1IDEzNy4zNzVDMzQxLjg3NSAxMjQuODc1IDM2Mi4xMjUgMTI0Ljg3NSAzNzQuNjI1IDEzNy4zNzVTMzg3LjEyNSAxNzAuMTI1IDM3NC42MjUgMTgyLjYyNVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ValueAbsolute(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M40 32C17.908 32 0 49.908 0 72V440C0 462.092 17.908 480 40 480S80 462.092 80 440V72C80 49.908 62.092 32 40 32ZM472 32C449.908 32 432 49.908 432 72V440C432 462.092 449.908 480 472 480S512 462.092 512 440V72C512 49.908 494.092 32 472 32Z" />
            <path d="M374.625 182.625L301.25 256L374.625 329.375C387.125 341.875 387.125 362.125 374.625 374.625C368.375 380.875 360.187 384 352 384S335.625 380.875 329.375 374.625L256 301.25L182.625 374.625C176.375 380.875 168.187 384 160 384S143.625 380.875 137.375 374.625C124.875 362.125 124.875 341.875 137.375 329.375L210.75 256L137.375 182.625C124.875 170.125 124.875 149.875 137.375 137.375S170.125 124.875 182.625 137.375L256 210.75L329.375 137.375C341.875 124.875 362.125 124.875 374.625 137.375S387.125 170.125 374.625 182.625Z" />
        </Icon>
    </>
}