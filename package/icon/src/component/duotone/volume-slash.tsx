
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `volume-slash` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/volume-slash?s=duotone volume-slash}
 * @preview ![volume-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0IDIwOC4wMDRWMzA0LjAwMkM2NCAzMzAuNTEgODUuNDkgMzUyLjAwMiAxMTIgMzUyLjAwMkgxOTUuODRMMzMwLjczNCA0NzEuOTA2QzMzNi43MTkgNDc3LjIxOSAzNDQuMzEyIDQ4MCAzNTIgNDgwQzM1Ni40MzggNDgwIDM2MC45MDYgNDc5LjA5NCAzNjUuMTA5IDQ3Ny4xODhDMzc2LjYwOSA0NzIuMDMxIDM4NCA0NjAuNTk0IDM4NCA0NDhWMzk3LjY1Nkw4OC43NTYgMTY2LjI1MkM3NC4wNTcgMTc0LjQ1NyA2NCAxODkuOTc3IDY0IDIwOC4wMDRaTTM2NS4xMDkgMzQuODE4QzM1My42MDkgMjkuNjMxIDM0MC4xNTYgMzEuNzI1IDMzMC43MzQgNDAuMUwyMTQuODY1IDE0My4wOTRMMzg0IDI3NS42NTZWNjQuMDA2QzM4NCA1MS40MTIgMzc2LjYwOSAzOS45NzUgMzY1LjEwOSAzNC44MThaTTQ3Ni41NjIgMTgxLjk0MUM0NjYuMjgxIDE3My41OTggNDUxLjE1NiAxNzUuMDY2IDQ0Mi44MTIgMTg1LjM0OEM0MzQuNDA2IDE5NS41OTggNDM1LjkwNiAyMTAuNzIzIDQ0Ni4xODggMjE5LjEyOUM0NTcuNSAyMjguMzc5IDQ2NCAyNDEuODE0IDQ2NCAyNTYuMDAyUzQ1Ny41IDI4My42MjcgNDQ2LjE4OCAyOTIuODc3QzQzOC40NjkgMjk5LjE4OCA0MzUuNzA1IDMwOS4yODMgNDM4LjM2MSAzMTguMjY0TDQ1OS45MDIgMzM1LjE0NkM0NjAuNDA2IDMzNS4xNzggNDYwLjg2OSAzMzUuNDcxIDQ2MS4zNzUgMzM1LjQ3MUM0NjYuNzE5IDMzNS40NzEgNDcyLjEyNSAzMzMuNjg5IDQ3Ni41NjIgMzMwLjA2NEM0OTkuMDk0IDMxMS42MjcgNTEyIDI4NC42NTggNTEyIDI1Ni4wMDJDNTEyIDIyNy4zNDggNDk5LjA5NCAyMDAuMzc5IDQ3Ni41NjIgMTgxLjk0MVpNNTM3LjEyNSAxMDguMDA0QzUyNi45MDYgOTkuNjYgNTExLjc4MSAxMDEuMDk4IDUwMy4zNDQgMTExLjM0OEM0OTQuOTM3IDEyMS41OTggNDk2LjQzNyAxMzYuNzIzIDUwNi42ODcgMTQ1LjEyOUM1NDAuNTYyIDE3Mi45MSA1NjAgMjEzLjMxNiA1NjAgMjU2LjAwMkM1NjAgMjk4LjY4OSA1NDAuNTYyIDMzOS4wOTYgNTA2LjY4OCAzNjYuODc3QzUwNS42NDMgMzY3LjczNCA1MDUuMDkgMzY4LjkwNCA1MDQuMjI5IDM2OS44ODlMNTQyLjAyOSAzOTkuNTE2QzU4My45MDYgMzYyLjc4NyA2MDggMzEwLjkzNiA2MDggMjU2LjAwMkM2MDggMTk4Ljg3OSA1ODIuMTU2IDE0NC45MSA1MzcuMTI1IDEwOC4wMDRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTYzNC44NzQgNTAyLjgwNUM2MjYuNzQ5IDUxMy4yMTEgNjExLjY4NyA1MTUuMDg2IDYwMS4xODcgNTA2Ljg4M0w5LjE4OSA0Mi44ODlDLTEuMjQ5IDM0LjcxNyAtMy4wNjEgMTkuNjI1IDUuMTI2IDkuMTg4QzkuODQ1IDMuMTU2IDE2LjkwNyAwIDI0LjAzMiAwQzI5LjE4OSAwIDM0LjQwNyAxLjY3MiAzOC44MTQgNS4xMDlMNjMwLjgxMiA0NjkuMTAyQzY0MS4yNDkgNDc3LjI3MyA2NDMuMDYyIDQ5Mi4zNjcgNjM0Ljg3NCA1MDIuODA1WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function VolumeSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M64 208.004V304.002C64 330.51 85.49 352.002 112 352.002H195.84L330.734 471.906C336.719 477.219 344.312 480 352 480C356.438 480 360.906 479.094 365.109 477.188C376.609 472.031 384 460.594 384 448V397.656L88.756 166.252C74.057 174.457 64 189.977 64 208.004ZM365.109 34.818C353.609 29.631 340.156 31.725 330.734 40.1L214.865 143.094L384 275.656V64.006C384 51.412 376.609 39.975 365.109 34.818ZM476.562 181.941C466.281 173.598 451.156 175.066 442.812 185.348C434.406 195.598 435.906 210.723 446.188 219.129C457.5 228.379 464 241.814 464 256.002S457.5 283.627 446.188 292.877C438.469 299.188 435.705 309.283 438.361 318.264L459.902 335.146C460.406 335.178 460.869 335.471 461.375 335.471C466.719 335.471 472.125 333.689 476.562 330.064C499.094 311.627 512 284.658 512 256.002C512 227.348 499.094 200.379 476.562 181.941ZM537.125 108.004C526.906 99.66 511.781 101.098 503.344 111.348C494.937 121.598 496.437 136.723 506.687 145.129C540.562 172.91 560 213.316 560 256.002C560 298.689 540.562 339.096 506.688 366.877C505.643 367.734 505.09 368.904 504.229 369.889L542.029 399.516C583.906 362.787 608 310.936 608 256.002C608 198.879 582.156 144.91 537.125 108.004Z" />
            <path d="M634.874 502.805C626.749 513.211 611.687 515.086 601.187 506.883L9.189 42.889C-1.249 34.717 -3.061 19.625 5.126 9.188C9.845 3.156 16.907 0 24.032 0C29.189 0 34.407 1.672 38.814 5.109L630.812 469.102C641.249 477.273 643.062 492.367 634.874 502.805Z" />
        </Icon>
    </>
}