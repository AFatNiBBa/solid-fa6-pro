
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `splotch` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/splotch?s=light splotch}
 * @preview ![splotch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjMuOTgzIDE4NS4xMzFMNDAwLjk4NSAxNjMuNzU4QzM4Ny45ODUgMTU5LjM4MyAzNzguNDg1IDE1MC4yNTggMzc1LjYxIDEzOS4yNThMMzYwLjYxMiA4My4xMzVDMzU0LjM2MiA1OS43NiAzMzUuMTEyIDQxLjc2IDMwOS4xMTIgMzQuODg1QzI4MC4yMzkgMjcuMjYgMjUwLjExNCAzNS4wMSAyMzAuNjE0IDU1LjAxTDE4Ny4zNjYgOTkuMzgzQzE3OC4yNDEgMTA4Ljc1OCAxNjMuNzQxIDExMy43NTggMTQ5LjI0MSAxMTIuNTA4TDgxLjc0MyAxMDcuMjU4QzUwLjM3IDEwNC44ODMgMjEuMzcgMTE5LjM4MyA3LjYyIDE0NC4yNThDLTQuMDA1IDE2NS41MDggLTIuMjU1IDE4OS44ODEgMTIuMzcgMjA5LjYzMUw0OC40OTUgMjU4LjM3OUM1NS4zNjggMjY3LjUwNCA1Ni4zNjggMjc4LjM3OSA1MS4zNyAyODguMjU0TDI0Ljc0NSAzNDEuMjUyQzE0LjEyIDM2Mi4zNzcgMTYuNDk1IDM4Ni41MDIgMzEuMjQ1IDQwNS41MDJDNDkuMTIgNDI4LjYyNSA4MC40OTMgNDM5LjEyNSAxMTEuMzY4IDQzMi41TDE3Ni44NjYgNDE4LjM3N0MxOTEuMjQxIDQxNS4yNTIgMjA2LjQ5MSA0MTguMjUgMjE3LjQ4OSA0MjYuNUwyNjguMzY0IDQ2NC4zNzVDMjgyLjIzOSA0NzQuNzUgMjk5LjQ4NyA0ODAgMzE2Ljg2MiA0ODBDMzI4LjYxMiA0ODAgMzQwLjQ4NyA0NzcuNjI1IDM1MS40ODcgNDcyLjVDMzc0Ljk4NSA0NjEuODc1IDM4OS45ODUgNDQxLjYyNSAzOTEuODYgNDE4LjI1TDM5Ni4yMzUgMzYwLjc1MkMzOTcuMTEgMzQ5Ljg3NyA0MDQuNDg1IDMzOS44NzcgNDE2LjIzNSAzMzMuODc5TDQ3NC4zNTggMzA0LjM3OUM0OTkuMjMzIDI5MS43NTQgNTEzLjYwOCAyNjguMjU0IDUxMS44NTggMjQyLjg4MUM1MDkuOTgzIDIxNi42MzEgNDkxLjYwOCAxOTQuNTA2IDQ2My45ODMgMTg1LjEzMVpNNDU5Ljg1OCAyNzUuODc5TDQwMS44NiAzMDUuMzc5QzM3OS45ODUgMzE2LjM3OSAzNjUuOTg1IDMzNi4xMjkgMzY0LjM2MiAzNTguMjUyTDM1OS45ODcgNDE1Ljc1MkMzNTguNzM3IDQzMi4zNzUgMzQ0LjM2MiA0NDAuNjI1IDMzOC4yMzcgNDQzLjM3NUMzMjEuNDg3IDQ1MSAzMDEuNjEyIDQ0OS4xMjUgMjg3LjQ4NyA0MzguNzVMMjM2LjYxNCA0MDAuNzUyQzIyMi45ODkgMzkwLjYyNyAyMDUuNjE2IDM4NS4xMjcgMTg4LjExNiAzODUuMTI3QzE4Mi4xMTYgMzg1LjEyNyAxNzYuMTE2IDM4NS43NTIgMTcwLjExNiAzODcuMTI3TDEwNC42MTggNDAxLjI1MkM4MS42MTggNDA2LjI1MiA2NC4zNjggMzk2LjEyNyA1Ni42MTggMzg1Ljg3N0M1Mi4zNyAzODAuNTAyIDQ2LjM3IDM2OS4zNzcgNTMuMzY4IDM1NS42MjdMNzkuOTkzIDMwMi42MjlDOTAuNDkzIDI4MS44NzkgODguMjQzIDI1OC4yNTQgNzQuMjQzIDIzOS4yNTZMMzguMTIgMTkwLjYzMUMyOC4zNyAxNzcuNTA2IDMyLjM3IDE2NS42MzMgMzUuNjIgMTU5Ljc1OEM0My4zNyAxNDUuNzU4IDYwLjg2OCAxMzcuODgzIDc5LjM2OCAxMzkuMTMzTDE0Ni43NDEgMTQ0LjM4M0MxNzEuMTE2IDE0Ni4yNTggMTk0LjQ5MSAxMzcuNzU4IDIxMC4yMzkgMTIxLjYzM0wyNTMuNDg5IDc3LjM4NUMyNjQuODY0IDY1Ljc2IDI4My40ODkgNjEuMjYgMzAwLjk4NyA2NS43NkMzMTUuNzM3IDY5LjYzNSAzMjYuNDg3IDc5LjI2IDMyOS43MzcgOTEuMzgzTDM0NC43MzcgMTQ3LjUwOEMzNTAuMzYyIDE2OC43NTggMzY3LjYxIDE4Ni4yNTYgMzkwLjczNSAxOTQuMTMxTDQ1My42MDggMjE1LjM4MUM0NjkuMTA4IDIyMC42MzEgNDc4Ljk4MyAyMzEuNzU2IDQ3OS44NTggMjQ1LjEzMUM0ODAuODU4IDI1Ny41MDQgNDczLjM1OCAyNjkuMDA0IDQ1OS44NTggMjc1Ljg3OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Splotch(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M463.983 185.131L400.985 163.758C387.985 159.383 378.485 150.258 375.61 139.258L360.612 83.135C354.362 59.76 335.112 41.76 309.112 34.885C280.239 27.26 250.114 35.01 230.614 55.01L187.366 99.383C178.241 108.758 163.741 113.758 149.241 112.508L81.743 107.258C50.37 104.883 21.37 119.383 7.62 144.258C-4.005 165.508 -2.255 189.881 12.37 209.631L48.495 258.379C55.368 267.504 56.368 278.379 51.37 288.254L24.745 341.252C14.12 362.377 16.495 386.502 31.245 405.502C49.12 428.625 80.493 439.125 111.368 432.5L176.866 418.377C191.241 415.252 206.491 418.25 217.489 426.5L268.364 464.375C282.239 474.75 299.487 480 316.862 480C328.612 480 340.487 477.625 351.487 472.5C374.985 461.875 389.985 441.625 391.86 418.25L396.235 360.752C397.11 349.877 404.485 339.877 416.235 333.879L474.358 304.379C499.233 291.754 513.608 268.254 511.858 242.881C509.983 216.631 491.608 194.506 463.983 185.131ZM459.858 275.879L401.86 305.379C379.985 316.379 365.985 336.129 364.362 358.252L359.987 415.752C358.737 432.375 344.362 440.625 338.237 443.375C321.487 451 301.612 449.125 287.487 438.75L236.614 400.752C222.989 390.627 205.616 385.127 188.116 385.127C182.116 385.127 176.116 385.752 170.116 387.127L104.618 401.252C81.618 406.252 64.368 396.127 56.618 385.877C52.37 380.502 46.37 369.377 53.368 355.627L79.993 302.629C90.493 281.879 88.243 258.254 74.243 239.256L38.12 190.631C28.37 177.506 32.37 165.633 35.62 159.758C43.37 145.758 60.868 137.883 79.368 139.133L146.741 144.383C171.116 146.258 194.491 137.758 210.239 121.633L253.489 77.385C264.864 65.76 283.489 61.26 300.987 65.76C315.737 69.635 326.487 79.26 329.737 91.383L344.737 147.508C350.362 168.758 367.61 186.256 390.735 194.131L453.608 215.381C469.108 220.631 478.983 231.756 479.858 245.131C480.858 257.504 473.358 269.004 459.858 275.879Z" />
        </Icon>
    </>
}