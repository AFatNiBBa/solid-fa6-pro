
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `trash-can-slash` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-slash?s=light trash-can-slash}
 * @preview ![trash-can-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MjcuOTk5IDk2QzUzNi44IDk2IDU0My45OTkgODguNzk5IDU0My45OTkgODBDNTQzLjk5OSA3MS4xOTkgNTM2LjggNjQgNTI3Ljk5OSA2NEg0MzEuOTk5TDM5OC4zNzQgMTkuMjVDMzg5LjM3NCA3LjEyNSAzNzUuMTI0IDAgMzU5Ljk5OSAwSDI3OS45OTlDMjY0Ljg3NCAwIDI1MC42MjQgNy4xMjUgMjQxLjYyNCAxOS4yNUwyMDcuOTk5IDY0SDE4MC4xMTRMMjIwLjY0OCA5Nkg1MjcuOTk5Wk0yNjcuMjQ5IDM4LjM3NUMyNzAuMjQ5IDM0LjM3NSAyNzQuOTk5IDMyIDI3OS45OTkgMzJIMzU5Ljk5OUMzNjQuOTk5IDMyIDM2OS43NDkgMzQuMzc1IDM3Mi43NDkgMzguMzc1TDM5MS45OTkgNjRIMjQ3Ljk5OUwyNjcuMjQ5IDM4LjM3NVpNNDMxLjk5OSA0ODBIMjA3Ljk5OUMxODEuNTMgNDgwIDE1OS45OTkgNDU4LjQ2OSAxNTkuOTk5IDQzMlYyMTEuMjIzTDEyNy45OTkgMTg1Ljk1OVY0MzJDMTI3Ljk5OSA0NzYuMTA5IDE2My44OSA1MTIgMjA3Ljk5OSA1MTJINDMxLjk5OUM0NTkuMTA5IDUxMiA0ODMuMDI2IDQ5OC4zNzMgNDk3LjUwMyA0NzcuNjg0TDQ3Mi4zMzcgNDU3LjgxMkM0NjMuNzk0IDQ3MS4xMTUgNDQ4Ljk1IDQ4MCA0MzEuOTk5IDQ4MFpNNDc5Ljk5OSAxNDRWMzAwLjc1OEw1MTEuOTk5IDMyNi4wMjFWMTQ0QzUxMS45OTkgMTM1LjE1NiA1MDQuODQzIDEyOCA0OTUuOTk5IDEyOFM0NzkuOTk5IDEzNS4xNTYgNDc5Ljk5OSAxNDRaTTM5OS45OTkgMTkyVjIzNy41OThMNDMxLjk5OSAyNjIuODYxVjE5MkM0MzEuOTk5IDE4My4xNTYgNDI0Ljg0MyAxNzYgNDE1Ljk5OSAxNzZTMzk5Ljk5OSAxODMuMTU2IDM5OS45OTkgMTkyWk00MjkuNTM2IDQyNC4wMjFMMzk5Ljk5OSA0MDAuNzAzVjQxNkMzOTkuOTk5IDQyNC44NDQgNDA3LjE1NSA0MzIgNDE1Ljk5OSA0MzJDNDIxLjg1MyA0MzIgNDI2Ljc0NyA0MjguNzA3IDQyOS41MzYgNDI0LjAyMVpNMzM1Ljk5OSA0MTZWMzUwLjE3NkwzMDMuOTk5IDMyNC45MVY0MTZDMzAzLjk5OSA0MjQuODQ0IDMxMS4xNTUgNDMyIDMxOS45OTkgNDMyUzMzNS45OTkgNDI0Ljg0NCAzMzUuOTk5IDQxNlpNMjM5Ljk5OSA0MTZWMjc0LjM4M0wyMDcuOTk5IDI0OS4xMTlWNDE2QzIwNy45OTkgNDI0Ljg0NCAyMTUuMTU1IDQzMiAyMjMuOTk5IDQzMlMyMzkuOTk5IDQyNC44NDQgMjM5Ljk5OSA0MTZaTTYzMy45MjEgNDgzLjQzNkwyNS45MjEgMy40MkMxOC45ODQgLTIuMDMzIDguOTIxIC0wLjgzIDMuNDM3IDYuMDYxQy0yLjAzMiAxMi45OTggLTAuODQ1IDIzLjA2MSA2LjA3NyAyOC41NDVMNjE0LjA3NyA1MDguNTYyQzYxNy4wMTUgNTEwLjg3NSA2MjAuNTE1IDUxMiA2MjMuOTg0IDUxMkM2MjguNzE4IDUxMiA2MzMuNDA1IDUwOS45MDYgNjM2LjU2MiA1MDUuOTIyQzY0Mi4wMyA0OTguOTg0IDY0MC44NDMgNDg4LjkyIDYzMy45MjEgNDgzLjQzNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TrashCanSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M527.999 96C536.8 96 543.999 88.799 543.999 80C543.999 71.199 536.8 64 527.999 64H431.999L398.374 19.25C389.374 7.125 375.124 0 359.999 0H279.999C264.874 0 250.624 7.125 241.624 19.25L207.999 64H180.114L220.648 96H527.999ZM267.249 38.375C270.249 34.375 274.999 32 279.999 32H359.999C364.999 32 369.749 34.375 372.749 38.375L391.999 64H247.999L267.249 38.375ZM431.999 480H207.999C181.53 480 159.999 458.469 159.999 432V211.223L127.999 185.959V432C127.999 476.109 163.89 512 207.999 512H431.999C459.109 512 483.026 498.373 497.503 477.684L472.337 457.812C463.794 471.115 448.95 480 431.999 480ZM479.999 144V300.758L511.999 326.021V144C511.999 135.156 504.843 128 495.999 128S479.999 135.156 479.999 144ZM399.999 192V237.598L431.999 262.861V192C431.999 183.156 424.843 176 415.999 176S399.999 183.156 399.999 192ZM429.536 424.021L399.999 400.703V416C399.999 424.844 407.155 432 415.999 432C421.853 432 426.747 428.707 429.536 424.021ZM335.999 416V350.176L303.999 324.91V416C303.999 424.844 311.155 432 319.999 432S335.999 424.844 335.999 416ZM239.999 416V274.383L207.999 249.119V416C207.999 424.844 215.155 432 223.999 432S239.999 424.844 239.999 416ZM633.921 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.077 508.562C617.015 510.875 620.515 512 623.984 512C628.718 512 633.405 509.906 636.562 505.922C642.03 498.984 640.843 488.92 633.921 483.436Z" />
        </Icon>
    </>
}