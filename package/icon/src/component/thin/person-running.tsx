
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `person-running` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-running?s=thin person-running}
 * @preview ![person-running](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDAgMTA0QzMyOC43MDkgMTA0IDM1MiA4MC43MDkgMzUyIDUyUzMyOC43MDkgMCAzMDAgMEMyNzEuMjkzIDAgMjQ4IDIzLjI5MSAyNDggNTJTMjcxLjI5MyAxMDQgMzAwIDEwNFpNMzAwIDE2QzMxOS44NTIgMTYgMzM2IDMyLjE0OCAzMzYgNTJDMzM2IDcxLjg1IDMxOS44NTIgODggMzAwIDg4QzI4MC4xNSA4OCAyNjQgNzEuODUgMjY0IDUyQzI2NCAzMi4xNDggMjgwLjE1IDE2IDMwMCAxNlpNMTYyLjQzOCAzNjQuNTYyTDE0Ni45MzggMzg4Ljg3NUMxNDIuNSAzOTUuODQ0IDEzNC45MzggNDAwIDEyNi43MDMgNDAwSDQ4QzM5LjE3MiA0MDAgMzIgMzkyLjgxMiAzMiAzODRTMzkuMTcyIDM2OCA0OCAzNjhIMTExLjEyNUMxMTMuODkxIDM2OCAxMTYuNDUzIDM2Ni41NjIgMTE3LjkyMiAzNjQuMjE5TDE0Mi43OTcgMzI0LjIxOUMxNDUuMTI1IDMyMC40NjkgMTQzLjk4NCAzMTUuNTMxIDE0MC4yMTkgMzEzLjIxOUMxMzYuNTMxIDMxMC44NDQgMTMxLjU0NyAzMTIuMDMxIDEyOS4yMDMgMzE1Ljc4MUwxMDYuNjcyIDM1Mkg0OEMzMC4zNTkgMzUyIDE2IDM2Ni4zNDQgMTYgMzg0UzMwLjM1OSA0MTYgNDggNDE2SDEyNi43MDNDMTQwLjQzOCA0MTYgMTUzLjA0NyA0MDkuMDk0IDE2MC40MzggMzk3LjVMMTc1LjkzOCAzNzMuMTg4QzE3OC4zMTMgMzY5LjQzOCAxNzcuMjE5IDM2NC41IDE3My40ODQgMzYyLjEyNUMxNjkuODI4IDM1OS43ODEgMTY0Ljg1OSAzNjAuODc1IDE2Mi40MzggMzY0LjU2MlpNNDAwIDIyNEgzNTZMMzI5Ljg3NSAxNzAuNzVDMzE3LjM3NSAxNDUuMjUgMjk0LjUgMTI2LjUgMjY4LjEyNSAxMTkuNzVMMTk3IDk4LjYyNUMxODkuNTQ1IDk2Ljg0NCAxODEuOTk4IDk1Ljk2NyAxNzQuNTEgOTUuOTY3QzE1My42MjcgOTUuOTY1IDEzMy4xOCAxMDIuNzc1IDExNi4yNSAxMTUuNzVMNzYuNSAxNDYuMjVDNjIuNSAxNTcgNTkuODc1IDE3NyA3MC42MjUgMTkxLjEyNUM3Ni45MTYgMTk5LjMxOCA4Ni40MiAyMDMuNjE1IDk2LjAyNyAyMDMuNjE1QzEwMi44MzQgMjAzLjYxNSAxMDkuNjkzIDIwMS40NTcgMTE1LjUgMTk3TDE1NS4xMjUgMTY2LjYyNUMxNjEuMDQ1IDE2Mi4xMzcgMTY4LjEzMyAxNTkuODM4IDE3NC42NiAxNTkuODM4QzE3Ni42NzggMTU5LjgzOCAxNzguNjQxIDE2MC4wNTcgMTgwLjUgMTYwLjVMMTk1LjEyNSAxNjQuNzVMMTU3LjYyNSAyNTIuMjVDMTQ1IDI4MS42MjUgMTU2LjM3NSAzMTYuMjUgMTg0IDMzMi41TDI2OSAzODIuNjI1TDI0MS41IDQ3MC4zNzVDMjM2LjI1IDQ4Ny4yNSAyNDUuNjI1IDUwNS4yNSAyNjIuNSA1MTAuNUMyNjUuNjI1IDUxMS41IDI2OC44NzUgNTEyIDI3MiA1MTJDMjg1LjYyNSA1MTIgMjk4LjI1IDUwMy4yNSAzMDIuNSA0ODkuNUwzMzQuMjUgMzg4LjVDMzQwLjEyNSAzNjcuNzUgMzMxLjI1IDM0NS4zNzUgMzEyLjUgMzM0LjEyNUwyNTEuMzc1IDI5OEwyODIuNjI1IDIxOS42MjVMMzAyLjg3NSAyNjEuMTI1QzMxMC44NzUgMjc3LjM3NSAzMjcuODc1IDI4OCAzNDYgMjg4SDQwMEM0MTcuNjI1IDI4OCA0MzIgMjczLjYyNSA0MzIgMjU2QzQzMiAyMzguMjUgNDE3LjYyNSAyMjQgNDAwIDIyNFpNNDAwIDI3MkgzNDZDMzM0LjA3NCAyNzIgMzIyLjUxNCAyNjQuNzg5IDMxNy4yNTQgMjU0LjEwN0wyOTcuMDA0IDIxMi42MDdDMjk0LjMxNiAyMDcuMDk4IDI4OC43MjUgMjAzLjYyNSAyODIuNjI5IDIwMy42MjVDMjgyLjQzIDIwMy42MjUgMjgyLjIyOSAyMDMuNjI5IDI4Mi4wMjkgMjAzLjYzNUMyNzUuNzAxIDIwMy44NzEgMjcwLjEwNyAyMDcuODE2IDI2Ny43NjQgMjEzLjY5OUwyMzYuNTE0IDI5Mi4wNzRDMjMzLjU5MiAyOTkuNCAyMzYuNDQ1IDMwNy43NjIgMjQzLjIzNCAzMTEuNzczTDMwNC4yNjggMzQ3Ljg0NEMzMTYuNzgxIDM1NS4zNTIgMzIyLjc4MSAzNzAuMjc3IDMxOC45ODYgMzgzLjcwMUwyODcuMjE1IDQ4NC43NzVDMjg1LjEzOSA0OTEuNDg4IDI3OS4wMjUgNDk2IDI3MiA0OTZDMjcwLjQ4NiA0OTYgMjY4Ljg4NyA0OTUuNzQ0IDI2Ny4yNTQgNDk1LjIyMUMyNjMuMTkxIDQ5My45NTcgMjU5Ljg2MyA0OTEuMTc2IDI1Ny44ODUgNDg3LjM4N0MyNTUuODk1IDQ4My41OCAyNTUuNTAyIDQ3OS4yMjcgMjU2Ljc2OCA0NzUuMTZMMjg0LjI2OCAzODcuNDA4QzI4Ni40OTIgMzgwLjMxMyAyODMuNTMzIDM3Mi42MTkgMjc3LjEyNyAzNjguODQyTDE5Mi4xMTMgMzE4LjcwOUMxNzEuMzQ2IDMwNi40OTIgMTYyLjg0IDI4MC42MzkgMTcyLjMzMiAyNTguNTUzTDIwOS44MzIgMTcxLjA1M0MyMTEuNjM3IDE2Ni44NCAyMTEuNTQ5IDE2Mi4wNTcgMjA5LjU5MiAxNTcuOTEyQzIwNy42MzMgMTUzLjc3IDIwMy45OSAxNTAuNjY0IDE5OS41OSAxNDkuMzg1TDE4NC4yMDcgMTQ0LjkzNEMxODEuMTQ4IDE0NC4yMDcgMTc3LjkzNiAxNDMuODM4IDE3NC42NiAxNDMuODM4QzE2NC4zNjcgMTQzLjgzOCAxNTMuOTk4IDE0Ny40MDIgMTQ1LjM5MSAxNTMuOTI2TDEwNS43NTYgMTg0LjMwOUMxMDIuOTM5IDE4Ni40NzMgOTkuNTc0IDE4Ny42MTUgOTYuMDI3IDE4Ny42MTVDOTAuOTkyIDE4Ny42MTUgODYuMzU5IDE4NS4zNDQgODMuMzU3IDE4MS40MzZDNzcuOTg2IDE3NC4zNzcgNzkuMjgxIDE2NC4yODcgODYuMjQgMTU4Ljk0M0wxMjUuOTgyIDEyOC40NDlDMTQwLjA1NSAxMTcuNjY2IDE1Ni44MzYgMTExLjk2NSAxNzQuNTEgMTExLjk2N0MxODAuODAzIDExMS45NjcgMTg3LjExOSAxMTIuNzE1IDE5Mi40NDUgMTEzLjk2M0wyNjQuMTU4IDEzNS4yNUMyODUuOTk0IDE0MC44MzggMzA1LjE4OSAxNTYuNzQyIDMxNS41MTIgMTc3Ljc5N0wzNDEuNjM1IDIzMS4wNDdDMzQ0LjMyNCAyMzYuNTI3IDM0OS44OTYgMjQwIDM1NiAyNDBINDAwQzQwOC44MjIgMjQwIDQxNiAyNDcuMTc4IDQxNiAyNTZTNDA4LjgyMiAyNzIgNDAwIDI3MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PersonRunning(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M300 104C328.709 104 352 80.709 352 52S328.709 0 300 0C271.293 0 248 23.291 248 52S271.293 104 300 104ZM300 16C319.852 16 336 32.148 336 52C336 71.85 319.852 88 300 88C280.15 88 264 71.85 264 52C264 32.148 280.15 16 300 16ZM162.438 364.562L146.938 388.875C142.5 395.844 134.938 400 126.703 400H48C39.172 400 32 392.812 32 384S39.172 368 48 368H111.125C113.891 368 116.453 366.562 117.922 364.219L142.797 324.219C145.125 320.469 143.984 315.531 140.219 313.219C136.531 310.844 131.547 312.031 129.203 315.781L106.672 352H48C30.359 352 16 366.344 16 384S30.359 416 48 416H126.703C140.438 416 153.047 409.094 160.438 397.5L175.938 373.188C178.313 369.438 177.219 364.5 173.484 362.125C169.828 359.781 164.859 360.875 162.438 364.562ZM400 224H356L329.875 170.75C317.375 145.25 294.5 126.5 268.125 119.75L197 98.625C189.545 96.844 181.998 95.967 174.51 95.967C153.627 95.965 133.18 102.775 116.25 115.75L76.5 146.25C62.5 157 59.875 177 70.625 191.125C76.916 199.318 86.42 203.615 96.027 203.615C102.834 203.615 109.693 201.457 115.5 197L155.125 166.625C161.045 162.137 168.133 159.838 174.66 159.838C176.678 159.838 178.641 160.057 180.5 160.5L195.125 164.75L157.625 252.25C145 281.625 156.375 316.25 184 332.5L269 382.625L241.5 470.375C236.25 487.25 245.625 505.25 262.5 510.5C265.625 511.5 268.875 512 272 512C285.625 512 298.25 503.25 302.5 489.5L334.25 388.5C340.125 367.75 331.25 345.375 312.5 334.125L251.375 298L282.625 219.625L302.875 261.125C310.875 277.375 327.875 288 346 288H400C417.625 288 432 273.625 432 256C432 238.25 417.625 224 400 224ZM400 272H346C334.074 272 322.514 264.789 317.254 254.107L297.004 212.607C294.316 207.098 288.725 203.625 282.629 203.625C282.43 203.625 282.229 203.629 282.029 203.635C275.701 203.871 270.107 207.816 267.764 213.699L236.514 292.074C233.592 299.4 236.445 307.762 243.234 311.773L304.268 347.844C316.781 355.352 322.781 370.277 318.986 383.701L287.215 484.775C285.139 491.488 279.025 496 272 496C270.486 496 268.887 495.744 267.254 495.221C263.191 493.957 259.863 491.176 257.885 487.387C255.895 483.58 255.502 479.227 256.768 475.16L284.268 387.408C286.492 380.313 283.533 372.619 277.127 368.842L192.113 318.709C171.346 306.492 162.84 280.639 172.332 258.553L209.832 171.053C211.637 166.84 211.549 162.057 209.592 157.912C207.633 153.77 203.99 150.664 199.59 149.385L184.207 144.934C181.148 144.207 177.936 143.838 174.66 143.838C164.367 143.838 153.998 147.402 145.391 153.926L105.756 184.309C102.939 186.473 99.574 187.615 96.027 187.615C90.992 187.615 86.359 185.344 83.357 181.436C77.986 174.377 79.281 164.287 86.24 158.943L125.982 128.449C140.055 117.666 156.836 111.965 174.51 111.967C180.803 111.967 187.119 112.715 192.445 113.963L264.158 135.25C285.994 140.838 305.189 156.742 315.512 177.797L341.635 231.047C344.324 236.527 349.896 240 356 240H400C408.822 240 416 247.178 416 256S408.822 272 400 272Z" />
        </Icon>
    </>
}