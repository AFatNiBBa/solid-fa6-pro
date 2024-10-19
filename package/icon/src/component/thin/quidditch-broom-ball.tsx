
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `quidditch-broom-ball` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/quidditch-broom-ball?s=thin quidditch-broom-ball}
 * @preview ![quidditch-broom-ball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNjQuMzQgMjEyLjkzQzI2Mi45MzQgMjExLjE4IDI2MC44NzIgMjEwLjEwMiAyNTguNjIyIDIwOS45NDZDMjU0LjM3MiAyMDkuNjE4IDE1NC4wMyAyMDMuNjE4IDkzLjkzNyAyNTEuMzhDNzQgMjY3LjE0NSA1NS4yMTkgMzAwLjE1OCAzOC4wOTUgMzQ5LjQ2NkMzNy4wOTUgMzUyLjM4OCAzNy44NDUgMzU1LjYyMiA0MC4wMzIgMzU3Ljc5NEM0Mi4yMiAzNTkuOTUgNDUuNDM4IDM2MC42NjggNDguNDA3IDM1OS42MDZMOTkuNTMxIDM0MC45ODJMMTIuNjI2IDQ0My4zMDJDMTEuNzgzIDQ0NC4yODcgMTEuMTg5IDQ0NS40NTggMTAuOTA4IDQ0Ni43MjRDMy44NzYgNDc3Ljk0IDAuMTU4IDUwMC43MDQgMC4wOTUgNTAwLjkyM0MtMC4yNDggNTAzLjE1NyAwLjM0NSA1MDUuNDM4IDEuNzUyIDUwNy4yMDRDMy4xNTggNTA4Ljk2OSA1LjIyIDUxMC4wNjMgNy40NyA1MTAuMjAzQzEwLjQwOCA1MTAuMzkxIDM2LjE4OCA1MTIgNzEuMTU2IDUxMkMxMzYuNDk5IDUxMiAyMzMuNzc5IDUwNi4zOTEgMjcyLjkzNCA0NzUuNDU2QzMzMy4xNTIgNDI3LjgzNSAzNDkuOTAxIDMyOS4yMzMgMzUwLjU4OSAzMjUuMDYyQzM1MC45MzMgMzIyLjgyOCAzNTAuMzM5IDMyMC41NDcgMzQ4LjkzMyAzMTguNzY1TDI2NC4zNCAyMTIuOTNaTTI2Mi45OTcgNDYyLjg5NUMyMTQuNDY2IDUwMS4yNjYgNTYuNzgyIDQ5Ni41NzkgMTcuNDM5IDQ5NC43MDRDMTkuMDY0IDQ4NS43MjEgMjIuMDAxIDQ3MC41MzUgMjYuMDk1IDQ1Mi4xNDVMMTE3LjEyNCAzNDUuMDEzQzEyMS4yMTggMzQwLjE1NCAxMjEuNTMxIDMzMy40MDUgMTE3Ljg3NCAzMjguMjAyQzExNC4yNDkgMzIzLjAxNSAxMDcuODc1IDMyMC44OSAxMDEuNzgxIDMyMy4xNEw1OS4wNjMgMzM4LjcwMUM3My40MDYgMzAxLjIyIDg4LjQ2OSAyNzYuMTEzIDEwMy44NzUgMjYzLjkyNkMxMDMuODc1IDI2My45MSAxMDMuODc1IDI2My45MSAxMDMuODc1IDI2My45MUMxNTMuMjE3IDIyNC43MSAyMzYuMjE2IDIyNS4yMSAyNTQuMTIyIDIyNS43NTdMMzM0LjE1MiAzMjUuOTA1QzMzMC42ODMgMzQzLjQ1MSAzMTIuNDY1IDQyMy44MDQgMjYyLjk5NyA0NjIuODk1Wk00OTUuOTkyIDM1MS45NUM0NTEuODEyIDM1MS45NSA0MTUuOTk0IDM4Ny43NjQgNDE1Ljk5NCA0MzEuOTQ0UzQ1MS44MTIgNTExLjkzOCA0OTUuOTkyIDUxMS45MzhDNTQwLjE3NSA1MTEuOTM4IDU3NS45OTEgNDc2LjEyNCA1NzUuOTkxIDQzMS45NDRTNTQwLjE3NSAzNTEuOTUgNDk1Ljk5MiAzNTEuOTVaTTQ5NS45OTIgNDk1LjkzOUM0NjAuNzA0IDQ5NS45MzkgNDMxLjk5NCA0NjcuMjMgNDMxLjk5NCA0MzEuOTQ0UzQ2MC43MDQgMzY3Ljk0OSA0OTUuOTkyIDM2Ny45NDlTNTU5Ljk5MSAzOTYuNjU4IDU1OS45OTEgNDMxLjk0NFM1MzEuMjgxIDQ5NS45MzkgNDk1Ljk5MiA0OTUuOTM5Wk02MzguMzk2IDExLjE4MUM2MzUuNzcxIDcuNjUgNjMwLjc0IDYuOTc4IDYyNy4xNzcgOS41NzFMMzgwLjA5IDE5NC44NzVMMzMzLjc3NyAxMzYuODc0QzMyOS42ODMgMTMxLjgyNyAzMjMuMzM5IDEyOS4zOSAzMTYuOTY0IDEzMC4wNDZDMzEwLjQ5NiAxMzAuODEyIDMwNC45NjUgMTM0Ljc4IDMwMi4xNTIgMTQwLjY4NkwyNzcuNDAzIDE5My42MDRDMjc1LjUyOCAxOTcuNjAzIDI3Ny4yNDYgMjAyLjM2OCAyODEuMjc4IDIwNC4yNDNDMjg1LjM0IDIwNi4xOTYgMjkwLjAyNyAyMDQuNCAyOTEuOTAyIDIwMC4zODRMMzE2LjYyMSAxNDcuNTEzQzMxNy4yMTQgMTQ2LjMxIDMxOC4yNzcgMTQ2LjAxNCAzMTguODM5IDE0NS45MzZDMzE5LjU1OCAxNDUuODg5IDMyMC41MjcgMTQ1LjkzNiAzMjEuMzA4IDE0Ni44ODlMNDI2LjQ5NCAyNzguNTk3QzQyNy4yNzUgMjc5LjU4MSA0MjcuMTUgMjgwLjU1IDQyNi45MzEgMjgxLjE3NUM0MjYuNzQ0IDI4MS42OSA0MjYuMjEyIDI4Mi42MTIgNDI0LjkgMjgyLjg3OEwzNjcuNjIgMjk0Ljg2MUMzNjMuMjc2IDI5NS43NjcgMzYwLjQ5NSAzMDAuMDAxIDM2MS40MDEgMzA0LjMyOUMzNjIuMjE0IDMwOC4wOTQgMzY1LjUyNiAzMTAuNjg4IDM2OS4yNDUgMzEwLjY4OEMzNjkuNzc2IDMxMC42ODggMzcwLjMzOCAzMTAuNjQxIDM3MC44NyAzMTAuNTE2TDQyOC4xMTkgMjk4LjU0OEM0MzQuNTI1IDI5Ny4yMzYgNDM5LjcxMiAyOTIuNzk5IDQ0MS45NjIgMjg2LjY1OUM0NDQuMTgxIDI4MC41MTggNDQzLjA4NyAyNzMuNzg1IDQzOC45OTMgMjY4LjY0NEwzOTAuMDk0IDIwNy40MDNMNjM2LjgwMiAyMi4zODNDNjQwLjMzMyAxOS43MjcgNjQxLjA1MiAxNC43MTIgNjM4LjM5NiAxMS4xODFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function QuidditchBroomBall(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M264.34 212.93C262.934 211.18 260.872 210.102 258.622 209.946C254.372 209.618 154.03 203.618 93.937 251.38C74 267.145 55.219 300.158 38.095 349.466C37.095 352.388 37.845 355.622 40.032 357.794C42.22 359.95 45.438 360.668 48.407 359.606L99.531 340.982L12.626 443.302C11.783 444.287 11.189 445.458 10.908 446.724C3.876 477.94 0.158 500.704 0.095 500.923C-0.248 503.157 0.345 505.438 1.752 507.204C3.158 508.969 5.22 510.063 7.47 510.203C10.408 510.391 36.188 512 71.156 512C136.499 512 233.779 506.391 272.934 475.456C333.152 427.835 349.901 329.233 350.589 325.062C350.933 322.828 350.339 320.547 348.933 318.765L264.34 212.93ZM262.997 462.895C214.466 501.266 56.782 496.579 17.439 494.704C19.064 485.721 22.001 470.535 26.095 452.145L117.124 345.013C121.218 340.154 121.531 333.405 117.874 328.202C114.249 323.015 107.875 320.89 101.781 323.14L59.063 338.701C73.406 301.22 88.469 276.113 103.875 263.926C103.875 263.91 103.875 263.91 103.875 263.91C153.217 224.71 236.216 225.21 254.122 225.757L334.152 325.905C330.683 343.451 312.465 423.804 262.997 462.895ZM495.992 351.95C451.812 351.95 415.994 387.764 415.994 431.944S451.812 511.938 495.992 511.938C540.175 511.938 575.991 476.124 575.991 431.944S540.175 351.95 495.992 351.95ZM495.992 495.939C460.704 495.939 431.994 467.23 431.994 431.944S460.704 367.949 495.992 367.949S559.991 396.658 559.991 431.944S531.281 495.939 495.992 495.939ZM638.396 11.181C635.771 7.65 630.74 6.978 627.177 9.571L380.09 194.875L333.777 136.874C329.683 131.827 323.339 129.39 316.964 130.046C310.496 130.812 304.965 134.78 302.152 140.686L277.403 193.604C275.528 197.603 277.246 202.368 281.278 204.243C285.34 206.196 290.027 204.4 291.902 200.384L316.621 147.513C317.214 146.31 318.277 146.014 318.839 145.936C319.558 145.889 320.527 145.936 321.308 146.889L426.494 278.597C427.275 279.581 427.15 280.55 426.931 281.175C426.744 281.69 426.212 282.612 424.9 282.878L367.62 294.861C363.276 295.767 360.495 300.001 361.401 304.329C362.214 308.094 365.526 310.688 369.245 310.688C369.776 310.688 370.338 310.641 370.87 310.516L428.119 298.548C434.525 297.236 439.712 292.799 441.962 286.659C444.181 280.518 443.087 273.785 438.993 268.644L390.094 207.403L636.802 22.383C640.333 19.727 641.052 14.712 638.396 11.181Z" />
        </Icon>
    </>
}