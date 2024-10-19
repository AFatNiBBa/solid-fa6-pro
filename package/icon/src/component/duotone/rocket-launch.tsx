
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rocket-launch` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rocket-launch?s=duotone rocket-launch}
 * @preview ![rocket-launch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxLjk5NyAxNTQuNUwyLjUgMjUzLjI1QzEgMjU2LjYyNSAwLjEyNSAyNjAuMjUgMCAyNjRDMCAyNzcuMjUgMTAuNzQ5IDI4OCAyMy45OTkgMjg4SDEwOS4zMTZDMTU1Ljk1NCAyMDguNTU3IDE4MS40NjcgMTYzLjUxNCAxOTYuODQ3IDEzNi41NDVDMTk4LjM2OCAxMzMuNzMyIDE5OS42MTggMTMwLjc3OSAyMDEuMTk0IDEyOEg5NC44N0M3OC40OTYgMTI4IDU5LjI0NyAxMzkuODc1IDUxLjk5NyAxNTQuNVpNMzc1LjUyMSAzMTQuODU3QzM0OC41OTYgMzMwLjI1MiAzMDMuNTU0IDM1NS44MTYgMjIzLjk4OCA0MDIuNjI1VjQ4OEMyMjMuOTg4IDUwMS4yNSAyMzQuNzM3IDUxMiAyNDcuOTg2IDUxMkMyNTEuNzM2IDUxMS44NzUgMjU1LjM2MSA1MTEgMjU4LjczNiA1MDkuNUwzNTcuNDggNDYwLjEyNUMzNzIuMTA1IDQ1Mi43NSAzODMuOTc5IDQzMy42MjUgMzgzLjk3OSA0MTcuMjVWMzEwLjUzN0MzODEuMjI3IDMxMi4xMDQgMzc4LjMwNiAzMTMuMzQ2IDM3NS41MjEgMzE0Ljg1N1pNMzUuNjIzIDM1Mi4xMjVDOS44NzQgMzc3Ljg3NSAtMyA0NDIuNjI1IDAuNjI1IDUxMS4zNzVDNjkuNzQ2IDUxNSAxMzQuMjQzIDUwMiAxNTkuOTkxIDQ3Ni4yNUMyMDAuMjM5IDQzNiAyMDIuODY0IDM4Mi4zNzUgMTY2LjI0MSAzNDUuNzVDMTI5LjYxOCAzMDkuMjUgNzUuOTk2IDMxMS43NSAzNS42MjMgMzUyLjEyNVpNMTE3LjM2OSA0MzYuMTI1QzEwOC43NDQgNDQ0LjYyNSA4Ny4yNDUgNDQ5IDY0LjI0NiA0NDcuNzVDNjIuOTk3IDQyNC44NzUgNjcuMjQ2IDQwMy4yNSA3NS44NzEgMzk0Ljc1Qzg5LjM3IDM4MS4yNSAxMDcuMjQ0IDM4MC4zNzUgMTE5LjM2OCAzOTIuNjI1QzEzMS42MTggNDA0Ljc1IDEzMC43NDMgNDIyLjYyNSAxMTcuMzY5IDQzNi4xMjVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTUwNS4xODEgMTkuNjYyQzUwMy45NTIgMTMuOTc5IDQ5Ny45MDggNy45NTcgNDkyLjIxOSA2Ljc1MkM0NjAuMzc5IDAgNDM1LjI4OCAwIDQxMC4zMjEgMEMzMzIuODg4IDAgMjc4LjcyNiAzMS4wNzggMjM2Ljk3NSA3Ny4zMDlDMjA5LjUzOSAxMDcuNjg2IDIyMi41NTQgOTUuMDYxIDEwOS4yODUgMjg4SDEwOS4zOEMxNzIuNjc0IDI4OCAyMjMuOTgzIDMzOS4zMTIgMjIzLjk4MyA0MDIuNjA5QzQxNi45MTggMjg5LjExMSA0MDQuMTA4IDMwMi4yMjEgNDM0LjQ5OSAyNzQuNzI5QzQ4MC43MSAyMzIuOTMgNTExLjk0IDE3OC43MzYgNTExLjk0IDEwMS43NUM1MTIuMDY1IDc2LjY0MSA1MTIuMDY1IDUxLjUzMyA1MDUuMTgxIDE5LjY2MlpNMzgzLjk0NyAxNjhDMzYxLjk0NyAxNjggMzQzLjk0OSAxNTAuMTI1IDM0My45NDkgMTI4UzM2MS45NDcgODggMzgzLjk0NyA4OEM0MDYuMDcxIDg4IDQyMy45NDUgMTA1Ljg3NSA0MjMuOTQ1IDEyOFM0MDYuMDcxIDE2OCAzODMuOTQ3IDE2OFpNNzUuODM5IDM5NC43NUM2Ny4yMTUgNDAzLjI1IDYyLjk2NSA0MjQuODc1IDY0LjIxNSA0NDcuNzVDODcuMjEzIDQ0OSAxMDguNzEyIDQ0NC42MjUgMTE3LjMzNyA0MzYuMTI1QzEzMC43MTEgNDIyLjYyNSAxMzEuNTg2IDQwNC43NSAxMTkuMzM3IDM5Mi42MjVDMTA3LjIxMiAzODAuMzc1IDg5LjMzOCAzODEuMjUgNzUuODM5IDM5NC43NVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function RocketLaunch(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M51.997 154.5L2.5 253.25C1 256.625 0.125 260.25 0 264C0 277.25 10.749 288 23.999 288H109.316C155.954 208.557 181.467 163.514 196.847 136.545C198.368 133.732 199.618 130.779 201.194 128H94.87C78.496 128 59.247 139.875 51.997 154.5ZM375.521 314.857C348.596 330.252 303.554 355.816 223.988 402.625V488C223.988 501.25 234.737 512 247.986 512C251.736 511.875 255.361 511 258.736 509.5L357.48 460.125C372.105 452.75 383.979 433.625 383.979 417.25V310.537C381.227 312.104 378.306 313.346 375.521 314.857ZM35.623 352.125C9.874 377.875 -3 442.625 0.625 511.375C69.746 515 134.243 502 159.991 476.25C200.239 436 202.864 382.375 166.241 345.75C129.618 309.25 75.996 311.75 35.623 352.125ZM117.369 436.125C108.744 444.625 87.245 449 64.246 447.75C62.997 424.875 67.246 403.25 75.871 394.75C89.37 381.25 107.244 380.375 119.368 392.625C131.618 404.75 130.743 422.625 117.369 436.125Z" />
            <path d="M505.181 19.662C503.952 13.979 497.908 7.957 492.219 6.752C460.379 0 435.288 0 410.321 0C332.888 0 278.726 31.078 236.975 77.309C209.539 107.686 222.554 95.061 109.285 288H109.38C172.674 288 223.983 339.312 223.983 402.609C416.918 289.111 404.108 302.221 434.499 274.729C480.71 232.93 511.94 178.736 511.94 101.75C512.065 76.641 512.065 51.533 505.181 19.662ZM383.947 168C361.947 168 343.949 150.125 343.949 128S361.947 88 383.947 88C406.071 88 423.945 105.875 423.945 128S406.071 168 383.947 168ZM75.839 394.75C67.215 403.25 62.965 424.875 64.215 447.75C87.213 449 108.712 444.625 117.337 436.125C130.711 422.625 131.586 404.75 119.337 392.625C107.212 380.375 89.338 381.25 75.839 394.75Z" />
        </Icon>
    </>
}