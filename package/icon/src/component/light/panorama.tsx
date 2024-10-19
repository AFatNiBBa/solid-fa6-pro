
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `panorama` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/panorama?s=light panorama}
 * @preview ![panorama](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggMTY4QzExNC43NDYgMTY4IDEwNCAxNzguNzQ2IDEwNCAxOTJTMTE0Ljc0NiAyMTYgMTI4IDIxNkMxNDEuMjU2IDIxNiAxNTIgMjA1LjI1NCAxNTIgMTkyUzE0MS4yNTYgMTY4IDEyOCAxNjhaTTM3OC41ODYgMTg3LjkxQzM2Ny4zMDUgMTcyLjA5OCAzNDAuMDg4IDE3MS45NzMgMzI4LjU4OCAxODcuODc5TDI4NC41NTkgMjQ5LjMxMUwyNzcuNTkgMjQwLjM2OUMyNjYuMTUyIDIyNS45MDQgMjQwLjYyMyAyMjUuODExIDIyOS4xODYgMjQwLjRMMTY2LjE1NiAzMjAuNzVDMTU5LjAzMyAzMjkuODgxIDE1OC4wMDIgMzQyLjMwNSAxNjMuNTMzIDM1Mi4zMTJDMTY4Ljc4MSAzNjEuOTc3IDE3OS4wNjIgMzY4IDE5MC4zNzUgMzY4SDQ0OS41ODJDNDYwLjU4MiAzNjggNDcwLjczOCAzNjIuMjI3IDQ3Ni4xMTEgMzUyLjkzOUM0NzYuMTExIDM1Mi45MDggNDc2LjExMSAzNTIuOTA4IDQ3Ni4xNDMgMzUyLjg3N0M0ODEuNzk5IDM0Mi45OTQgNDgxLjIwNSAzMzEuMDcyIDQ3NC41NDkgMzIxLjc1NEwzNzguNTg2IDE4Ny45MVpNMTk0LjE4OCAzMzUuODczTDI1Mi40MzYgMjYwLjI2TDI3Mi41MjcgMjg1LjkyNEMyNzYuODc1IDI5MS40NjkgMjkwLjEyNSAyOTYuNTc4IDI5OC4xMTkgMjg1LjM5MUwzNTIuNTU1IDIwNi42NDFMNDQ1LjIzOCAzMzUuODczSDE5NC4xODhaTTU5Mi4wODYgNjRDNTg3LjUyNyA2NCA1ODIuODY1IDY0LjY1OCA1NzguMjA3IDY2LjA1N0w1NzguMTk5IDY2LjA1OUM0OTMuOTg2IDkxLjMyMiA0MDYuOTk0IDEwMy45NTMgMzIwIDEwMy45NTNTMTQ2LjAxNCA5MS4zMjIgNjEuODAxIDY2LjA1OUw2MS43OTMgNjYuMDU3QzU3LjEzNyA2NC42NTggNTIuNDcxIDY0IDQ3LjkxNCA2NEMyMi4zMjYgNjMuOTk2IDAgODQuNzQgMCAxMTIuMDMxVjQzMS45NjlDMCA0NTkuMjU4IDIyLjMzIDQ4MCA0Ny45MTQgNDgwQzUyLjQ3MyA0ODAgNTcuMTM1IDQ3OS4zNCA2MS43OTMgNDc3Ljk0M0w2MS44MDEgNDc3Ljk0MUMxNDYuMDE0IDQ1Mi42NzggMjMzLjAwNiA0NDAuMDQ1IDMyMCA0NDAuMDQ1UzQ5My45ODYgNDUyLjY3OCA1NzguMTk5IDQ3Ny45NDFMNTc4LjIwNyA0NzcuOTQzQzU4Mi44NjMgNDc5LjM0IDU4Ny41MjkgNDgwIDU5Mi4wODYgNDgwQzYxNy42NzQgNDgwIDY0MCA0NTkuMjYgNjQwIDQzMS45NjlWMTEyLjAzMUM2NDAgODQuNzQyIDYxNy42NyA2NCA1OTIuMDg2IDY0Wk02MDggNDMxLjk2OUM2MDggNDQxLjg3MSA1OTkuNzQgNDQ4IDU5Mi4wODYgNDQ4QzU5MC41NDEgNDQ4IDU4OC45NjMgNDQ3Ljc2MiA1ODcuMzk1IDQ0Ny4yOTFDNTAwLjU5IDQyMS4yNSA0MTAuNjI1IDQwOC4wNDUgMzIwIDQwOC4wNDVTMTM5LjQwOCA0MjEuMjUgNTIuNTk4IDQ0Ny4yOTNDNTEuMDM1IDQ0Ny43NjIgNDkuNDU5IDQ0OCA0Ny45MTQgNDQ4QzQwLjI2IDQ0OCAzMiA0NDEuODcxIDMyIDQzMS45NjlWMTEyLjAzMUMzMiAxMDYuNDYzIDM0LjU4MiAxMDIuNzY2IDM2Ljc1IDEwMC42NDVDMzkuNzY2IDk3LjY5MSA0My44MzIgOTYgNDcuOTA4IDk2QzQ5LjQ1OSA5NiA1MS4wMzkgOTYuMjM4IDUyLjYwNSA5Ni43MDlDMTM5LjQxIDEyMi43NSAyMjkuMzc1IDEzNS45NTMgMzIwIDEzNS45NTNTNTAwLjU5MiAxMjIuNzQ4IDU4Ny40MDIgOTYuNzA3QzU4OC45NjUgOTYuMjM4IDU5MC41NDEgOTYgNTkyLjA4NiA5NkM1OTkuNzQgOTYgNjA4IDEwMi4xMjkgNjA4IDExMi4wMzFWNDMxLjk2OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Panorama(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M128 168C114.746 168 104 178.746 104 192S114.746 216 128 216C141.256 216 152 205.254 152 192S141.256 168 128 168ZM378.586 187.91C367.305 172.098 340.088 171.973 328.588 187.879L284.559 249.311L277.59 240.369C266.152 225.904 240.623 225.811 229.186 240.4L166.156 320.75C159.033 329.881 158.002 342.305 163.533 352.312C168.781 361.977 179.062 368 190.375 368H449.582C460.582 368 470.738 362.227 476.111 352.939C476.111 352.908 476.111 352.908 476.143 352.877C481.799 342.994 481.205 331.072 474.549 321.754L378.586 187.91ZM194.188 335.873L252.436 260.26L272.527 285.924C276.875 291.469 290.125 296.578 298.119 285.391L352.555 206.641L445.238 335.873H194.188ZM592.086 64C587.527 64 582.865 64.658 578.207 66.057L578.199 66.059C493.986 91.322 406.994 103.953 320 103.953S146.014 91.322 61.801 66.059L61.793 66.057C57.137 64.658 52.471 64 47.914 64C22.326 63.996 0 84.74 0 112.031V431.969C0 459.258 22.33 480 47.914 480C52.473 480 57.135 479.34 61.793 477.943L61.801 477.941C146.014 452.678 233.006 440.045 320 440.045S493.986 452.678 578.199 477.941L578.207 477.943C582.863 479.34 587.529 480 592.086 480C617.674 480 640 459.26 640 431.969V112.031C640 84.742 617.67 64 592.086 64ZM608 431.969C608 441.871 599.74 448 592.086 448C590.541 448 588.963 447.762 587.395 447.291C500.59 421.25 410.625 408.045 320 408.045S139.408 421.25 52.598 447.293C51.035 447.762 49.459 448 47.914 448C40.26 448 32 441.871 32 431.969V112.031C32 106.463 34.582 102.766 36.75 100.645C39.766 97.691 43.832 96 47.908 96C49.459 96 51.039 96.238 52.605 96.709C139.41 122.75 229.375 135.953 320 135.953S500.592 122.748 587.402 96.707C588.965 96.238 590.541 96 592.086 96C599.74 96 608 102.129 608 112.031V431.969Z" />
        </Icon>
    </>
}