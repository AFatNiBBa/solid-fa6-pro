
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dolphin` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dolphin?s=regular dolphin}
 * @preview ![dolphin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzQuMDg5IDEzOC44MTJMNDI5LjM5IDEzNC44MDlDNDM4LjcwOCAxMTUuMTgyIDQ1My4wODUgOTIuMDA2IDQ3Mi4xOTggNjUuODE2QzQ4My4wMDMgNTAuODgzIDQ4Mi42NTcgMzEuODIyIDQ3MS4zMzcgMTcuMjI5QzQ2Mi43MjYgNi4xMTkgNDUwLjE2NyAwIDQzNS45ODIgMEM0MzMuNDU4IDAgNDMwLjg4OCAwLjE5NyA0MjguMjgyIDAuNjAyQzM4Ny4xMDcgNy4wNzQgMzQ3LjQyNyAxOS4xOCAzMTAuMjQ5IDM2LjYwN0MyNzguMzU1IDE0Ljc2OCAyNDkuMjA0IDEuMTY2IDIwNi4wNTYgMC4zMkMxMjAuNzgyIDIuMDcyIDQ4LjczMiA2MC42MjUgMzQuNDE1IDEzOS41NDVDMzAuMTYzIDE2My4wMDggMzEuMTg5IDE4Ni43MTEgMzcuNDU2IDIxMC4wODhMMjQuNzgyIDIxOC41MzNDNC4yNTUgMjMyLjIxMyAtNC43MjcgMjU3LjIxMSAyLjQzNyAyODAuNzM4QzkuNjM0IDMwNC41ODIgMzAuNjAzIDMyMC4wMDIgNTUuODUzIDMyMC4wMDJIMzkxLjk2NEM0MDUuMiAzMjAuMDAyIDQxNS45NyAzMDkuMjM0IDQxNS45NyAyOTYuMDAyQzQxNS45NyAyODIuNzY4IDQwNS4yIDI3Mi4wMDIgMzkxLjk2NCAyNzIuMDAySDU1Ljg1M0M1MC45NDEgMjcyLjAwMiA0OS4wODUgMjY5LjIxOSA0OC4zOTQgMjY2Ljg4NUM0Ny43NzUgMjY0Ljg1NyA0Ny4zNzIgMjYxLjE3IDUxLjQxOSAyNTguNDY3Qzk1Ljc5MiAyMjguOTMgODguMTYzIDIzNC4wMDYgOTUuMzE0IDIyOS4yNUM4NS4yNjcgMjAzLjUyMSA3NS41MjcgMTgxLjkzNCA4MS42NjcgMTQ4LjExOUM5MS42OTUgOTIuODU5IDE0NS4xNTkgNDkuOTU5IDIwNi4wMzQgNDguMzI4QzIzNC45MjUgNDguOTk0IDI1MS40MDIgNTMuMDM3IDMwNS44NzQgOTIuNDg2QzM0Mi41MjUgNzMuNzE5IDM3NC44MDggNTkuMjAxIDQyNC41MjEgNDkuOTQ1QzM4NC4yMjYgMTA3LjU4NiAzNzYuMzIyIDEzNy41OCAzNzIuMTEzIDE0OC45MkM0MjMuNzQ5IDE5My4xMTMgNDYzLjk5MSAyMjAuNzAxIDQ2My45OTEgMjk2LjAwMkM0NjMuOTkxIDM2Ny44NDIgNDAzLjcgNDAwIDM0My45NSA0MDBIMjkyLjk2OEwyNjQuMTY3IDM1NS41ODZDMjU0LjkxMyAzNDMuMTYyIDI0MC4yNTcgMzM2LjAwMiAyMjQuNjYxIDMzNi4wMDJIMTYzLjg5NEMxNDkuOTMxIDMzNi4wMDIgMTM3LjQ5NyAzNDMuNTE2IDEzMS40NDggMzU1LjYwOUMxMjUuNzAyIDM2Ny4xMDIgMTI2Ljk1NCAzODAuNjM5IDEzNC43MTYgMzkwLjkzOUwxNTkuNDkxIDQyMy45OThMMTM0LjczNiA0NTcuMDE0QzEyNi45OCA0NjcuMzkzIDEyNS43NDkgNDgwLjk1MSAxMzEuNTIxIDQ5Mi40MUMxMzcuNTYgNTA0LjQ4NiAxNDkuOTgyIDUxMiAxNjMuOTI1IDUxMkgyMjQuNjYxQzI0MC41MDUgNTEyIDI1NS4wMjUgNTA0LjY5NyAyNjQuNDk3IDQ5MS45NjFMMjkyLjk4NiA0NDhIMzQzLjk1QzQ0MS4zMjUgNDQ4IDUxMS45OTkgMzg0LjA3NCA1MTEuOTk5IDI5Ni4wMDJDNTExLjk5OSAyMDQuMjE5IDQ1OS4zNzggMTYwLjA0MyA0MzQuMDg5IDEzOC44MTJaTTIyNS4xMDEgNDY0LjU5NkwxODkuMzc4IDQ2NC4xODRMMjE1LjkgNDI4Ljc5OUwyMTkuNDk3IDQyNEwyMTUuOSA0MTkuMjAxTDE4OS41MTUgMzg0LjAwMkgyMjQuNjYxQzIyNC45NTggMzg0LjA1NSAyMjUuMTY5IDM4NC4wOCAyMjUuMzA4IDM4NC4wOEMyMjUuNDA2IDM4NC4wOCAyMjUuNDcgMzg0LjA2OCAyMjUuNTA1IDM4NC4wNDNMMjUxLjMzNSA0MjRMMjI1LjEwMSA0NjQuNTk2Wk0xMzUuODcgMTYwLjAwNEMxMzUuODcgMTczLjI2IDE0Ni42MiAxODQuMDA2IDE1OS44NzggMTg0LjAwNlMxODMuODg2IDE3My4yNiAxODMuODg2IDE2MC4wMDRTMTczLjEzNiAxMzYuMDA0IDE1OS44NzggMTM2LjAwNFMxMzUuODcgMTQ2Ljc0OCAxMzUuODcgMTYwLjAwNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Dolphin(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M434.089 138.812L429.39 134.809C438.708 115.182 453.085 92.006 472.198 65.816C483.003 50.883 482.657 31.822 471.337 17.229C462.726 6.119 450.167 0 435.982 0C433.458 0 430.888 0.197 428.282 0.602C387.107 7.074 347.427 19.18 310.249 36.607C278.355 14.768 249.204 1.166 206.056 0.32C120.782 2.072 48.732 60.625 34.415 139.545C30.163 163.008 31.189 186.711 37.456 210.088L24.782 218.533C4.255 232.213 -4.727 257.211 2.437 280.738C9.634 304.582 30.603 320.002 55.853 320.002H391.964C405.2 320.002 415.97 309.234 415.97 296.002C415.97 282.768 405.2 272.002 391.964 272.002H55.853C50.941 272.002 49.085 269.219 48.394 266.885C47.775 264.857 47.372 261.17 51.419 258.467C95.792 228.93 88.163 234.006 95.314 229.25C85.267 203.521 75.527 181.934 81.667 148.119C91.695 92.859 145.159 49.959 206.034 48.328C234.925 48.994 251.402 53.037 305.874 92.486C342.525 73.719 374.808 59.201 424.521 49.945C384.226 107.586 376.322 137.58 372.113 148.92C423.749 193.113 463.991 220.701 463.991 296.002C463.991 367.842 403.7 400 343.95 400H292.968L264.167 355.586C254.913 343.162 240.257 336.002 224.661 336.002H163.894C149.931 336.002 137.497 343.516 131.448 355.609C125.702 367.102 126.954 380.639 134.716 390.939L159.491 423.998L134.736 457.014C126.98 467.393 125.749 480.951 131.521 492.41C137.56 504.486 149.982 512 163.925 512H224.661C240.505 512 255.025 504.697 264.497 491.961L292.986 448H343.95C441.325 448 511.999 384.074 511.999 296.002C511.999 204.219 459.378 160.043 434.089 138.812ZM225.101 464.596L189.378 464.184L215.9 428.799L219.497 424L215.9 419.201L189.515 384.002H224.661C224.958 384.055 225.169 384.08 225.308 384.08C225.406 384.08 225.47 384.068 225.505 384.043L251.335 424L225.101 464.596ZM135.87 160.004C135.87 173.26 146.62 184.006 159.878 184.006S183.886 173.26 183.886 160.004S173.136 136.004 159.878 136.004S135.87 146.748 135.87 160.004Z" />
        </Icon>
    </>
}