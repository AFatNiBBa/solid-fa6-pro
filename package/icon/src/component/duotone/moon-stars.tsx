
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `moon-stars` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/moon-stars?s=duotone moon-stars}
 * @preview ![moon-stars](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4Ny45OTQgNjMuOTk4TDMwMC40MTQgOTMuNzgxQzMwMS4wMjMgOTUuMDA2IDMwMi42MjUgOTYgMzAzLjk5MiA5NlMzMDYuOTU5IDk1LjAwNiAzMDcuNTY4IDkzLjc4MUwzMTkuOTg4IDYzLjk5OEwzNDkuNzczIDUxLjU3OEMzNTAuOTkyIDUwLjk2OSAzNTEuOTg0IDQ5LjM1NyAzNTEuOTg0IDQ3Ljk5OEMzNTEuOTg0IDQ2LjYzMyAzNTAuOTkyIDQ1LjAzMSAzNDkuNzczIDQ0LjQyMkwzMTkuOTg4IDMyLjAwMkwzMDcuNTY4IDIuMjE3QzMwNi45NTkgMC45OSAzMDUuMzU5IDAgMzAzLjk5MiAwUzMwMS4wMjMgMC45OSAzMDAuNDE0IDIuMjE3TDI4Ny45OTQgMzIuMDAyTDI1OC4yMDkgNDQuNDIyQzI1Ni45OTIgNDUuMDMxIDI1NiA0Ni42MzMgMjU2IDQ3Ljk5OEMyNTYgNDkuMzU3IDI1Ni45OTIgNTAuOTY5IDI1OC4yMDkgNTEuNTc4TDI4Ny45OTQgNjMuOTk4Wk01MDcuNjA5IDIxNi44NzVMNDQ3Ljk4NCAxOTJMNDIzLjEwOSAxMzIuMzc1QzQyMS43MzQgMTI5Ljc1IDQxOC45ODQgMTI4IDQxNS45ODQgMTI4UzQxMC4yMzQgMTI5Ljc1IDQwOC44NTkgMTMyLjM3NUwzODMuOTg0IDE5MkwzMjQuMzU5IDIxNi44NzVDMzIxLjczNCAyMTguMjUgMzE5Ljk4NCAyMjEgMzE5Ljk4NCAyMjRTMzIxLjczNCAyMjkuNzUgMzI0LjM1OSAyMzEuMTI1TDM4My45ODQgMjU2TDQwOC44NTkgMzE1LjYyNUM0MTAuMjM0IDMxOC4yNSA0MTIuOTg0IDMyMCA0MTUuOTg0IDMyMFM0MjEuNzM0IDMxOC4yNSA0MjMuMTA5IDMxNS42MjVMNDQ3Ljk4NCAyNTZMNTA3LjYwOSAyMzEuMTI1QzUxMC4yMzQgMjI5Ljc1IDUxMS45ODQgMjI3IDUxMS45ODQgMjI0UzUxMC4yMzQgMjE4LjI1IDUwNy42MDkgMjE2Ljg3NVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzMyLjI1IDQyNi4zNzVDMjM5LjEyNSA0NDQuMTI1IDE1My43NSAzNzIuNzUgMTUzLjc1IDI3OC43NUMxNTMuNzUgMjI0LjUgMTgyLjc1IDE3NC43NSAyMjkuNzUgMTQ3Ljg3NUMyMzcuMTI1IDE0My43NSAyMzUuMjUgMTMyLjc1IDIyNyAxMzEuMjVDMTA4Ljc1IDEwOS4zNzUgMCAyMDAgMCAzMjBDMCA0MjYuMDAxIDg1Ljc1IDUxMiAxOTEuNzUgNTEyQzI1MSA1MTIgMzA1IDQ4NS4xMjUgMzQwLjc1IDQ0MC44NzVDMzQ2LjEyNSA0MzQuMzc1IDM0MC4yNSA0MjQuNzUgMzMyLjI1IDQyNi4zNzVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MoonStars(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M287.994 63.998L300.414 93.781C301.023 95.006 302.625 96 303.992 96S306.959 95.006 307.568 93.781L319.988 63.998L349.773 51.578C350.992 50.969 351.984 49.357 351.984 47.998C351.984 46.633 350.992 45.031 349.773 44.422L319.988 32.002L307.568 2.217C306.959 0.99 305.359 0 303.992 0S301.023 0.99 300.414 2.217L287.994 32.002L258.209 44.422C256.992 45.031 256 46.633 256 47.998C256 49.357 256.992 50.969 258.209 51.578L287.994 63.998ZM507.609 216.875L447.984 192L423.109 132.375C421.734 129.75 418.984 128 415.984 128S410.234 129.75 408.859 132.375L383.984 192L324.359 216.875C321.734 218.25 319.984 221 319.984 224S321.734 229.75 324.359 231.125L383.984 256L408.859 315.625C410.234 318.25 412.984 320 415.984 320S421.734 318.25 423.109 315.625L447.984 256L507.609 231.125C510.234 229.75 511.984 227 511.984 224S510.234 218.25 507.609 216.875Z" />
            <path d="M332.25 426.375C239.125 444.125 153.75 372.75 153.75 278.75C153.75 224.5 182.75 174.75 229.75 147.875C237.125 143.75 235.25 132.75 227 131.25C108.75 109.375 0 200 0 320C0 426.001 85.75 512 191.75 512C251 512 305 485.125 340.75 440.875C346.125 434.375 340.25 424.75 332.25 426.375Z" />
        </Icon>
    </>
}