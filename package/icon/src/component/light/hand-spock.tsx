
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-spock` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-spock?s=light hand-spock}
 * @preview ![hand-spock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMTQ3LjI0MUM1MTIgMTM2LjE3MSA1MDguOTI4IDEyNS4yNDYgNTAyLjk1OCAxMTUuNjc3QzQ5MC43MjMgOTUuNDczIDQ2OS43MzEgODcuMDM2IDQ1MS41MTIgODcuMDM2QzQ0NC45MDQgODcuMDM2IDQzOC4zMDQgODguMTE3IDQzMS45NTkgOTAuMzA1QzQzMS45NTkgNjMuODA5IDQxNS41ODQgMzkuOTM3IDM5MC4yMSAzMS45MzhDMzgzLjE2NCAyOS42OTggMzc2LjU2OCAyOC43MDQgMzcwLjQzMiAyOC43MDRDMzM2LjUwNiAyOC43MDQgMzE2LjY2NiA1OS4wODMgMzEyLjk2MSA3Ny4xODJMMjkxLjQ2MSAxODEuOTE4TDI1Ni4zMzcgNDUuMzExQzI0OS4yNzYgMTguMTI1IDIyNC44ODkgMCAxOTguMDg0IDBDMTUyLjU5NyAwIDEzNy42ODggNDAuNTkyIDEzNy42ODggNjAuMjg1QzEzNy42ODggNjUuMjQ0IDEzOC4zMDMgNzAuMjgzIDEzOS41ODggNzUuMzA3TDE0My4zMzggODkuODA1QzEzNy40NDIgODcuOTY3IDEzMS40MDEgODcuMDcyIDEyNS40MTEgODcuMDcyQzk2LjcyMSA4Ny4wNzIgNjUuMTg1IDEwOS43MzUgNjUuMTg1IDE0Ny4xNDJDNjUuMTg1IDE2NS4wNTcgODkuNDY0IDIzMi44NyAxMDYuOTY0IDI5Ny4wMjhMMTAxLjQ2NCAyOTEuOTA0Qzg5LjgyMyAyODAuOTg0IDc0Ljk4NCAyNzUuNTY1IDYwLjE4MyAyNzUuNTY1QzI2LjcwNCAyNzUuNTY1IDAgMzAyLjc0MyAwIDMzNS44MDRDMCAzNTEuODMyIDYuMzU3IDM2Ny44MTUgMTguOTY1IDM3OS42NDJMMTE3LjA4OSA0NzIuMDA1QzE0NC4zMzggNDk3Ljc1MiAxODAuNDYzIDUxMiAyMTcuOTYyIDUxMkgzMzMuMzM1QzMzMy40MjYgNTEyIDMzMy41MTcgNTEyIDMzMy42MDggNTEyQzM4OC4zNjcgNTEyIDQzNS44NTUgNDc0LjQxNiA0NDguNDU5IDQyMS4xMzdMNTEwLjMzMyAxNjEuMjk2QzUxMS40NDkgMTU2LjY0NiA1MTIgMTUxLjkzMSA1MTIgMTQ3LjI0MVpNNDUwLjcwOSAxMTkuMDQ5QzQ2NS4yNiAxMTkuMDQ5IDQ4MC4xMDMgMTI5LjUzNCA0ODAuMTAzIDE0Ni40MkM0ODAuMTAzIDE0OC43NiA0NzkuODE4IDE1MS4yMjIgNDc5LjIwOCAxNTMuNzk3TDQxNy4zMzQgNDEzLjc2M0M0MDguMTA1IDQ1Mi41NDQgMzczLjQ5MiA0ODAuMDA0IDMzMy42MDcgNDgwLjAwNEMzMzMuNTE2IDQ4MC4wMDQgMzMzLjQyNiA0ODAuMDA0IDMzMy4zMzUgNDgwLjAwNEgyMTcuOTYyQzE4OC41ODggNDgwLjAwNCAxNjAuMzM4IDQ2OC44OCAxMzguOTYzIDQ0OC42MzNMNDAuODQgMzU2LjM5NUMzNC4yOSAzNTAuMjM3IDMxLjU1MyAzNDMuMTc2IDMxLjU1MyAzMzYuMzU4QzMxLjU1MyAzMjEuMTA2IDQ1LjI0NyAzMDcuMDcgNjAuNTkgMzA3LjA3QzY2LjkyNSAzMDcuMDcgNzMuNTQgMzA5LjQ2MyA3OS41ODkgMzE1LjE1MUwxMzQuNDYzIDM2Ni44OTRDMTM2LjE0MyAzNjguNDU4IDEzOC4wNTUgMzY5LjEzNyAxMzkuOTAxIDM2OS4xMzdDMTQ0LjEwMiAzNjkuMTM3IDE0Ny45NjMgMzY1LjYyMSAxNDcuOTYzIDM2MS4wMkMxNDcuOTYzIDMzNS42NDggMTQ0LjMzOCAzMTAuMjc2IDEzNy4wODggMjg1LjkwNEw5OC4zMzkgMTU1LjI5NkM5Ny40IDE1Mi4xMTQgOTYuOTY3IDE0OS4wODggOTYuOTY3IDE0Ni4yNDJDOTYuOTY3IDEyOS41ODMgMTExLjc3MiAxMTkuMDYzIDEyNi4zNDQgMTE5LjA2M0MxMzcuNDQgMTE5LjA2MyAxNDguNDAxIDEyNS4xNjMgMTUyLjU4OCAxMzkuMjk5TDE4Ni4yMTMgMjUyLjkwOUMxODguNDk3IDI2MC43MDUgMTk0LjQ5MSAyNjQuMDYyIDIwMC41NzIgMjY0LjA2MkMyMDguNjAyIDI2NC4wNjIgMjE2Ljc4NCAyNTguMjA5IDIxNi43ODQgMjQ4Ljk5NEMyMTYuNzg0IDI0Ny42MjEgMjE2LjYwMyAyNDYuMTc0IDIxNi4yMTIgMjQ0LjY2TDE3MC41ODggNjcuMzA4QzE2OS44NTMgNjQuNDU5IDE2OS41MTMgNjEuNzQ4IDE2OS41MTMgNTkuMTg4QzE2OS41MTMgNDIuMzgxIDE4NC4yMDggMzIuMDk4IDE5OC42OTggMzIuMDk4QzIxMC4xNzIgMzIuMDk4IDIyMS41MTkgMzguNTQ3IDIyNS4zMzcgNTMuMzFMMjc2LjA4NiAyNTAuOTA5QzI3OC4zNDMgMjU5LjY4OSAyODUuNjI3IDI2My45NzggMjkyLjkxNyAyNjMuOTc4QzMwMC41NyAyNjMuOTc4IDMwOC4yMjkgMjU5LjI1MSAzMTAuMDg2IDI1MC4wMzRMMzQ0LjIxIDgzLjY4MUMzNDcuNDA0IDY4LjE5MyAzNTkuMzI0IDYxLjA5MSAzNzEuMzMyIDYxLjA5MUMzODUuNjEzIDYxLjA5MSA0MDAuMDE4IDcxLjEzNSA0MDAuMDE4IDg5LjA2NUM0MDAuMDE4IDkxLjQ2MyAzOTkuNzYgOTQuMDAzIDM5OS4yMDkgOTYuNjc5TDM2OC41ODUgMjQ2LjE2QzM2OC4zMzggMjQ3LjM1MiAzNjguMjIyIDI0OC40OTYgMzY4LjIyMiAyNDkuNTg3QzM2OC4yMjIgMjU4LjUzOSAzNzYuMDIzIDI2My45OTEgMzgzLjY2MyAyNjMuOTkxQzM4OS43NDEgMjYzLjk5MSAzOTUuNzE3IDI2MC41NDEgMzk3LjU4NCAyNTIuNjU5TDQyNC4yMDkgMTQwLjc5OEM0MjcuODQ5IDEyNS42MjMgNDM5LjE4OCAxMTkuMDQ5IDQ1MC43MDkgMTE5LjA0OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HandSpock(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 147.241C512 136.171 508.928 125.246 502.958 115.677C490.723 95.473 469.731 87.036 451.512 87.036C444.904 87.036 438.304 88.117 431.959 90.305C431.959 63.809 415.584 39.937 390.21 31.938C383.164 29.698 376.568 28.704 370.432 28.704C336.506 28.704 316.666 59.083 312.961 77.182L291.461 181.918L256.337 45.311C249.276 18.125 224.889 0 198.084 0C152.597 0 137.688 40.592 137.688 60.285C137.688 65.244 138.303 70.283 139.588 75.307L143.338 89.805C137.442 87.967 131.401 87.072 125.411 87.072C96.721 87.072 65.185 109.735 65.185 147.142C65.185 165.057 89.464 232.87 106.964 297.028L101.464 291.904C89.823 280.984 74.984 275.565 60.183 275.565C26.704 275.565 0 302.743 0 335.804C0 351.832 6.357 367.815 18.965 379.642L117.089 472.005C144.338 497.752 180.463 512 217.962 512H333.335C333.426 512 333.517 512 333.608 512C388.367 512 435.855 474.416 448.459 421.137L510.333 161.296C511.449 156.646 512 151.931 512 147.241ZM450.709 119.049C465.26 119.049 480.103 129.534 480.103 146.42C480.103 148.76 479.818 151.222 479.208 153.797L417.334 413.763C408.105 452.544 373.492 480.004 333.607 480.004C333.516 480.004 333.426 480.004 333.335 480.004H217.962C188.588 480.004 160.338 468.88 138.963 448.633L40.84 356.395C34.29 350.237 31.553 343.176 31.553 336.358C31.553 321.106 45.247 307.07 60.59 307.07C66.925 307.07 73.54 309.463 79.589 315.151L134.463 366.894C136.143 368.458 138.055 369.137 139.901 369.137C144.102 369.137 147.963 365.621 147.963 361.02C147.963 335.648 144.338 310.276 137.088 285.904L98.339 155.296C97.4 152.114 96.967 149.088 96.967 146.242C96.967 129.583 111.772 119.063 126.344 119.063C137.44 119.063 148.401 125.163 152.588 139.299L186.213 252.909C188.497 260.705 194.491 264.062 200.572 264.062C208.602 264.062 216.784 258.209 216.784 248.994C216.784 247.621 216.603 246.174 216.212 244.66L170.588 67.308C169.853 64.459 169.513 61.748 169.513 59.188C169.513 42.381 184.208 32.098 198.698 32.098C210.172 32.098 221.519 38.547 225.337 53.31L276.086 250.909C278.343 259.689 285.627 263.978 292.917 263.978C300.57 263.978 308.229 259.251 310.086 250.034L344.21 83.681C347.404 68.193 359.324 61.091 371.332 61.091C385.613 61.091 400.018 71.135 400.018 89.065C400.018 91.463 399.76 94.003 399.209 96.679L368.585 246.16C368.338 247.352 368.222 248.496 368.222 249.587C368.222 258.539 376.023 263.991 383.663 263.991C389.741 263.991 395.717 260.541 397.584 252.659L424.209 140.798C427.849 125.623 439.188 119.049 450.709 119.049Z" />
        </Icon>
    </>
}