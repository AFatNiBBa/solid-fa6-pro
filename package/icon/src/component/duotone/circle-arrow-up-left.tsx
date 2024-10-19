
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-arrow-up-left` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up-left?s=duotone circle-arrow-up-left}
 * @preview ![circle-arrow-up-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDIyIDE2IDE2IDEyMy40MjIgMTYgMjU2UzEyMy40MjIgNDk2IDI1NiA0OTZTNDk2IDM4OC41NzggNDk2IDI1NlMzODguNTc4IDE2IDI1NiAxNlpNMzY2LjYyNSAzNjYuNjI1QzM2MC4zNzUgMzcyLjg3NSAzNTIuMTg4IDM3NiAzNDQgMzc2UzMyNy42MjUgMzcyLjg3NSAzMjEuMzc1IDM2Ni42MjVMMjAwIDI0NS4yNVYzMTJDMjAwIDMyOS42ODggMTg1LjY3MiAzNDQgMTY4IDM0NFMxMzYgMzI5LjY4OCAxMzYgMzEyVjE2OEMxMzYgMTUwLjMxMiAxNTAuMzI4IDEzNiAxNjggMTM2SDMxMkMzMjkuNjcyIDEzNiAzNDQgMTUwLjMxMiAzNDQgMTY4UzMyOS42NzIgMjAwIDMxMiAyMDBIMjQ1LjI1TDM2Ni42MjUgMzIxLjM3NUMzNzkuMTI1IDMzMy44NzUgMzc5LjEyNSAzNTQuMTI1IDM2Ni42MjUgMzY2LjYyNVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzY2LjYyNSAzNjYuNjI1QzM2MC4zNzUgMzcyLjg3NSAzNTIuMTg4IDM3NiAzNDQgMzc2UzMyNy42MjUgMzcyLjg3NSAzMjEuMzc1IDM2Ni42MjVMMjAwIDI0NS4yNVYzMTJDMjAwIDMyOS42ODggMTg1LjY3MiAzNDQgMTY4IDM0NFMxMzYgMzI5LjY4OCAxMzYgMzEyVjE2OEMxMzYgMTUwLjMxMiAxNTAuMzI4IDEzNiAxNjggMTM2SDMxMkMzMjkuNjcyIDEzNiAzNDQgMTUwLjMxMiAzNDQgMTY4UzMyOS42NzIgMjAwIDMxMiAyMDBIMjQ1LjI1TDM2Ni42MjUgMzIxLjM3NUMzNzkuMTI1IDMzMy44NzUgMzc5LjEyNSAzNTQuMTI1IDM2Ni42MjUgMzY2LjYyNVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function CircleArrowUpLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 16C123.422 16 16 123.422 16 256S123.422 496 256 496S496 388.578 496 256S388.578 16 256 16ZM366.625 366.625C360.375 372.875 352.188 376 344 376S327.625 372.875 321.375 366.625L200 245.25V312C200 329.688 185.672 344 168 344S136 329.688 136 312V168C136 150.312 150.328 136 168 136H312C329.672 136 344 150.312 344 168S329.672 200 312 200H245.25L366.625 321.375C379.125 333.875 379.125 354.125 366.625 366.625Z" />
            <path d="M366.625 366.625C360.375 372.875 352.188 376 344 376S327.625 372.875 321.375 366.625L200 245.25V312C200 329.688 185.672 344 168 344S136 329.688 136 312V168C136 150.312 150.328 136 168 136H312C329.672 136 344 150.312 344 168S329.672 200 312 200H245.25L366.625 321.375C379.125 333.875 379.125 354.125 366.625 366.625Z" />
        </Icon>
    </>
}