
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-up-1-9` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-1-9?s=duotone arrow-up-1-9}
 * @preview ![arrow-up-1-9](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyMCAxOTJDMzIwIDIwOS42ODggMzM0LjMxMiAyMjQgMzUyIDIyNEg0MTZDNDMzLjY4OCAyMjQgNDQ4IDIwOS42ODggNDQ4IDE5MlM0MzMuNjg4IDE2MCA0MTYgMTYwVjYzLjk4NEM0MTYgNTIuNzk3IDQxMC4xNTYgNDIuNDUzIDQwMC42MjUgMzYuNjQxQzM5MS4wOTQgMzAuODU5IDM3OS4yMTkgMzAuNDUzIDM2OS4yODEgMzUuNTc4TDMzNy4yODEgNTIuMTcyQzMyMS41OTQgNjAuMjk3IDMxNS40NjkgNzkuNjA5IDMyMy41OTQgOTUuMzAxQzMyOS4yODEgMTA2LjMwNSAzNDAuNDM4IDExMi41ODYgMzUyIDExMi41ODZWMTYwQzMzNC4zMTIgMTYwIDMyMCAxNzQuMzEyIDMyMCAxOTJaTTM5MiAyNTUuNTU1QzM0My4zOTggMjU1LjU1NSAzMDQgMjk0Ljk1MyAzMDQgMzQzLjU1NUMzMDQgMzc5Ljk5MiAzMjYuMTQ2IDQxMS4yNTQgMzU3LjcxMyA0MjQuNjIxTDM1MC4wMzEgNDMyLjYyNUMzMzkuMzEyIDQ0My43ODEgMzM5LjY4NyA0NjEuNSAzNTAuODQ0IDQ3Mi4xODhDMzU2LjI1IDQ3Ny40MDYgMzYzLjI1IDQ4MCAzNzAuMjE5IDQ4MEMzNzcuNTYyIDQ4MCAzODQuOTM3IDQ3Ny4xMjUgMzkwLjQwNiA0NzEuMzc1QzQ2MC4wMTggMzk4Ljg0NCA0ODAuMDAyIDM4NS45ODQgNDgwLjAwMiAzNDMuNTU1QzQ4MC4wMDIgMjk0Ljk1MyA0NDAuNjAyIDI1NS41NTUgMzkyIDI1NS41NTVaTTM5MiAzNjcuNTU1QzM3OC43NjYgMzY3LjU1NSAzNjggMzU2Ljc4OSAzNjggMzQzLjU1NVMzNzguNzY2IDMxOS41NTUgMzkyIDMxOS41NTVTNDE2LjAwMiAzMzAuMzIgNDE2LjAwMiAzNDMuNTU1UzQwNS4yMzQgMzY3LjU1NSAzOTIgMzY3LjU1NVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTguMzc3IDE3My4zNTlDNS4zNDcgMTYxLjQwNiA0LjQ3MiAxNDEuMTQxIDE2LjQwOCAxMjguMDk0TDEwNC40MDYgMzJDMTE2LjUzMSAxOC43NDIgMTM5LjQ2OCAxOC43NDIgMTUxLjU5MyAzMkwyMzkuNTkxIDEyOC4wOTRDMjUxLjUyNyAxNDEuMTQxIDI1MC42NTIgMTYxLjQwNiAyMzcuNjIzIDE3My4zNTlDMjI0LjYwNyAxODUuMzA1IDIwNC4zNTcgMTg0LjM5OCAxOTIuNDA0IDE3MS4zOTFMMTYwIDEzNS45OTJWNDM4LjAyM0MxNjAgNDU1LjcyNyAxNDUuNjcxIDQ3MC4wNTUgMTI4IDQ3MC4wNTVTOTYgNDU1LjcyNyA5NiA0MzguMDIzVjEzNS45OTJMNjMuNTk1IDE3MS4zOTFDNTcuMjgzIDE3OC4yNzMgNDguNjU4IDE4MS43NzMgMzkuOTg2IDE4MS43NzNDMzIuMjY3IDE4MS43NzMgMjQuNTE3IDE3OC45OTIgMTguMzc3IDE3My4zNTlaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowUp_1_9(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M320 192C320 209.688 334.312 224 352 224H416C433.688 224 448 209.688 448 192S433.688 160 416 160V63.984C416 52.797 410.156 42.453 400.625 36.641C391.094 30.859 379.219 30.453 369.281 35.578L337.281 52.172C321.594 60.297 315.469 79.609 323.594 95.301C329.281 106.305 340.438 112.586 352 112.586V160C334.312 160 320 174.312 320 192ZM392 255.555C343.398 255.555 304 294.953 304 343.555C304 379.992 326.146 411.254 357.713 424.621L350.031 432.625C339.312 443.781 339.687 461.5 350.844 472.188C356.25 477.406 363.25 480 370.219 480C377.562 480 384.937 477.125 390.406 471.375C460.018 398.844 480.002 385.984 480.002 343.555C480.002 294.953 440.602 255.555 392 255.555ZM392 367.555C378.766 367.555 368 356.789 368 343.555S378.766 319.555 392 319.555S416.002 330.32 416.002 343.555S405.234 367.555 392 367.555Z" />
            <path d="M18.377 173.359C5.347 161.406 4.472 141.141 16.408 128.094L104.406 32C116.531 18.742 139.468 18.742 151.593 32L239.591 128.094C251.527 141.141 250.652 161.406 237.623 173.359C224.607 185.305 204.357 184.398 192.404 171.391L160 135.992V438.023C160 455.727 145.671 470.055 128 470.055S96 455.727 96 438.023V135.992L63.595 171.391C57.283 178.273 48.658 181.773 39.986 181.773C32.267 181.773 24.517 178.992 18.377 173.359Z" />
        </Icon>
    </>
}