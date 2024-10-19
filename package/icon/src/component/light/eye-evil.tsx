
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `eye-evil` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/eye-evil?s=light eye-evil}
 * @preview ![eye-evil](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NDAuMDAxIDI1NkM2NDAuMDAxIDI0OC43MTkgNjM1LjY1OCAyNDEuNDM4IDYyNi45NzEgMjM5LjEyNUw1MTQuODU2IDIwOC43NUM1MTAuMTA2IDIwMi4yNSA1MDQuODU4IDE5NS4zNzUgNDk4Ljk4MyAxODguNUM1MDAuMzU4IDE4Ni4zNzUgNTU0LjIyNyAxMDAuMzc1IDU1NC4yMjcgMTAwLjM3NUM1NTYuMDU0IDk3LjQ0MiA1NTYuODY5IDk0LjM4NyA1NTYuODY5IDkxLjQzNUM1NTYuODY5IDgyLjAzNSA1NDguNTk3IDczLjY4OSA1MzguMzk0IDczLjY4OUM1MzYuMjM5IDczLjY4OSA1MzMuOTk3IDc0LjA2MSA1MzEuNzI5IDc0Ljg3NUw0MTIuMTE2IDExOC4yNUM0MDIuMzY4IDExMy4zNzUgMzkyLjExOCAxMDkuMjUgMzgxLjI0NSAxMDUuNzVMMzM2Ljg3NCAxMC43NUMzMzMuNDk5IDMuNjI1IDMyNi43NSAwIDMyMCAwUzMwNi41MDIgMy42MjUgMzAzLjEyNyAxMC43NUwyNTguNzU2IDEwNS43NUMyNDcuODgzIDEwOS4yNSAyMzcuNjMzIDExMy4zNzUgMjI3Ljg4NSAxMTguMjVDMTEwLjUwOSA3NS43NjkgMTA2LjA2NCA3My43MjcgMTAyLjY5NSA3My43MjdDMTAyLjMzNyA3My43MjcgMTAxLjk5MSA3My43NSAxMDEuNTIyIDczLjc1QzkxLjM1MiA3My43NSA4My4xMzMgODEuOTkyIDgzLjEzMyA5MS4zODJDODMuMTMzIDk0LjM0IDgzLjk0OCA5Ny40MTEgODUuNzc0IDEwMC4zNzVDODUuNzc0IDEwMC4zNzUgMTM5LjY0MyAxODYuMzc1IDE0MS4wMTggMTg4LjVDMTM1LjE0MyAxOTUuMzc1IDEyOS44OTUgMjAyLjI1IDEyNS4xNDUgMjA4Ljc1TDEzLjAzIDIzOS4xMjVDNC4zNDMgMjQxLjQzOCAwIDI0OC43MTkgMCAyNTZTNC4zNDMgMjcwLjU2MiAxMy4wMyAyNzIuODc1TDEyNS4xNDUgMzAzLjI1QzEyOS44OTUgMzA5Ljc1IDEzNS4xNDMgMzE2LjUgMTQxLjAxOCAzMjMuNUMxMzkuNjQzIDMyNS42MjUgODUuNzc0IDQxMS42MjUgODUuNzc0IDQxMS42MjVDODMuOTQ3IDQxNC41ODQgODMuMTMyIDQxNy42NTQgODMuMTMyIDQyMC42MTNDODMuMTMyIDQzMC4wMjggOTEuMzg2IDQzOC4zMTcgMTAxLjU3NCA0MzguMzE3QzEwMy43MzkgNDM4LjMxNyAxMDUuOTkyIDQzNy45NDMgMTA4LjI3MiA0MzcuMTI1TDIyNy44ODUgMzkzLjc1QzIzNy42MzMgMzk4LjYyNSAyNDcuODgzIDQwMi43NSAyNTguNzU2IDQwNi4yNUwzMDMuMTI3IDUwMS4yNUMzMDYuNTAyIDUwOC4zNzUgMzEzLjI1IDUxMiAzMjAgNTEyUzMzMy40OTkgNTA4LjM3NSAzMzYuODc0IDUwMS4yNUwzODEuMjQ1IDQwNi4yNUMzOTIuMTE4IDQwMi43NSA0MDIuMzY4IDM5OC42MjUgNDEyLjExNiAzOTMuNzVMNTMxLjcyOSA0MzcuMTI1QzUzNC4wMTQgNDM3LjkzOSA1MzYuMjY5IDQzOC4zMTEgNTM4LjQzMyA0MzguMzExQzU0OC42NjMgNDM4LjMxMSA1NTYuODgyIDQyOS45ODggNTU2Ljg4MiA0MjAuNjA0QzU1Ni44ODIgNDE3LjY0MSA1NTYuMDYyIDQxNC41NzEgNTU0LjIyNyA0MTEuNjI1QzU1NC4yMjcgNDExLjYyNSA1MDAuMzU4IDMyNS42MjUgNDk4Ljk4MyAzMjMuNUM1MDQuODU4IDMxNi41IDUxMC4xMDYgMzA5Ljc1IDUxNC44NTYgMzAzLjI1TDYyNi45NzEgMjcyLjg3NUM2MzUuNjU4IDI3MC41NjIgNjQwLjAwMSAyNjMuMjgxIDY0MC4wMDEgMjU2Wk00OTUuNjA4IDI3NS4zNzVDNDgwLjYxIDI5NS44NzUgNDgyLjk4NSAyOTIuODc1IDQ1OS4zNjIgMzIwLjg3NUw1MDUuMTA4IDM5My4zNzVMNDEwLjExNiAzNTlDMzg1LjM3IDM3MS4zNzUgMzg1Ljk5NSAzNzEuMTI1IDM1OC4yNDcgMzgwTDMyMCA0NjEuNzVMMjgxLjc1NCAzODBDMjU0LjAwNiAzNzEuMTI1IDI1NC43NTYgMzcxLjM3NSAyMjkuODg1IDM1OUwxMzQuODkzIDM5My4zNzVMMTgwLjYzOSAzMjAuODc1QzE1Ny4wMTYgMjkyLjg3NSAxNTkuMzkxIDI5NS44NzUgMTQ0LjM5MyAyNzUuMzc1TDcyLjg5OSAyNTZMMTQ0LjM5MyAyMzYuNjI1QzE1OS4yNjYgMjE2LjEyNSAxNTYuODkxIDIxOS4yNSAxODAuODg5IDE5MC44NzVMMTM0Ljg5MyAxMTguNjI1TDIyOS44ODUgMTUzQzI1NC42MzEgMTQwLjYyNSAyNTMuODgxIDE0MC44NzUgMjgxLjc1NCAxMzJMMzIwIDUwLjI1TDM1OC4yNDcgMTMyQzM4NS45OTUgMTQwLjg3NSAzODUuMjQ1IDE0MC42MjUgNDEwLjExNiAxNTNMNTA1LjEwOCAxMTguNjI1TDQ1OS4xMTIgMTkxQzQ4Mi45ODUgMjE5LjEyNSA0ODAuNjEgMjE2IDQ5NS42MDggMjM2LjYyNUw1NjcuMTAyIDI1Nkw0OTUuNjA4IDI3NS4zNzVaTTM5MC42ODggMjAwLjg2M0MzNzguODAzIDIwMC44NjMgMzYxLjY1OSAyMTMuMzc1IDMyMCAyMTMuMzc1QzI3OC40MiAyMTMuMzc1IDI2MS4yOSAyMDAuODA1IDI0OS4wMjQgMjAwLjgwNUMyMjAuMjY1IDIwMC44MDUgMjE2LjAxMSAyMjguODA2IDIxNi4wMTEgMjQ3Ljk5NUMyMTYuMDExIDI1NC40NjcgMjE2LjYwNyAyNjEuMDc3IDIxNy44NTQgMjY3Ljc3M0MyMjAuODc1IDI4My45OTQgMjQzLjg3OCAzNTIgMzIwLjAwNCAzNTJDMzc3LjQ5OSAzNTIgNDIzLjk5MSAzMDUuNSA0MjMuOTkxIDI0OEM0MjMuOTkxIDIwMS45NjQgMzk1LjgwNiAyMDAuODYzIDM5MC42ODggMjAwLjg2M1pNMzIwLjAwMiAzMjBDMjgwLjY2NCAzMjAgMjQ3Ljk0NiAyODguMTUyIDI0Ny45NDYgMjQ3LjA2MUMyNDcuOTQ2IDI0Mi4xMjMgMjQ4LjM5OSAyMzcuMzgxIDI0OS4yMjcgMjMzLjAxNkMyNjYuNjY4IDIzOS40MDYgMjg1LjE0MyAyNDIuNTc4IDMwNCAyNDQuMDA0VjI3MkMzMDQgMjgwLjg0NCAzMTEuMTU3IDI4OCAzMjAgMjg4UzMzNiAyODAuODQ0IDMzNiAyNzJWMjQ0LjAzMUMzNTUuMDk0IDI0Mi42MTcgMzczLjY5OCAyMzkuNDg0IDM5MC41NjMgMjMzLjY4QzM5MS41MSAyMzguMzYzIDM5MS45OTEgMjQzLjE4IDM5MS45OTEgMjQ4QzM5MS45OTEgMjg3LjY5OSAzNTkuNjk4IDMyMCAzMjAuMDAyIDMyMFogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function EyeEvil(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M640.001 256C640.001 248.719 635.658 241.438 626.971 239.125L514.856 208.75C510.106 202.25 504.858 195.375 498.983 188.5C500.358 186.375 554.227 100.375 554.227 100.375C556.054 97.442 556.869 94.387 556.869 91.435C556.869 82.035 548.597 73.689 538.394 73.689C536.239 73.689 533.997 74.061 531.729 74.875L412.116 118.25C402.368 113.375 392.118 109.25 381.245 105.75L336.874 10.75C333.499 3.625 326.75 0 320 0S306.502 3.625 303.127 10.75L258.756 105.75C247.883 109.25 237.633 113.375 227.885 118.25C110.509 75.769 106.064 73.727 102.695 73.727C102.337 73.727 101.991 73.75 101.522 73.75C91.352 73.75 83.133 81.992 83.133 91.382C83.133 94.34 83.948 97.411 85.774 100.375C85.774 100.375 139.643 186.375 141.018 188.5C135.143 195.375 129.895 202.25 125.145 208.75L13.03 239.125C4.343 241.438 0 248.719 0 256S4.343 270.562 13.03 272.875L125.145 303.25C129.895 309.75 135.143 316.5 141.018 323.5C139.643 325.625 85.774 411.625 85.774 411.625C83.947 414.584 83.132 417.654 83.132 420.613C83.132 430.028 91.386 438.317 101.574 438.317C103.739 438.317 105.992 437.943 108.272 437.125L227.885 393.75C237.633 398.625 247.883 402.75 258.756 406.25L303.127 501.25C306.502 508.375 313.25 512 320 512S333.499 508.375 336.874 501.25L381.245 406.25C392.118 402.75 402.368 398.625 412.116 393.75L531.729 437.125C534.014 437.939 536.269 438.311 538.433 438.311C548.663 438.311 556.882 429.988 556.882 420.604C556.882 417.641 556.062 414.571 554.227 411.625C554.227 411.625 500.358 325.625 498.983 323.5C504.858 316.5 510.106 309.75 514.856 303.25L626.971 272.875C635.658 270.562 640.001 263.281 640.001 256ZM495.608 275.375C480.61 295.875 482.985 292.875 459.362 320.875L505.108 393.375L410.116 359C385.37 371.375 385.995 371.125 358.247 380L320 461.75L281.754 380C254.006 371.125 254.756 371.375 229.885 359L134.893 393.375L180.639 320.875C157.016 292.875 159.391 295.875 144.393 275.375L72.899 256L144.393 236.625C159.266 216.125 156.891 219.25 180.889 190.875L134.893 118.625L229.885 153C254.631 140.625 253.881 140.875 281.754 132L320 50.25L358.247 132C385.995 140.875 385.245 140.625 410.116 153L505.108 118.625L459.112 191C482.985 219.125 480.61 216 495.608 236.625L567.102 256L495.608 275.375ZM390.688 200.863C378.803 200.863 361.659 213.375 320 213.375C278.42 213.375 261.29 200.805 249.024 200.805C220.265 200.805 216.011 228.806 216.011 247.995C216.011 254.467 216.607 261.077 217.854 267.773C220.875 283.994 243.878 352 320.004 352C377.499 352 423.991 305.5 423.991 248C423.991 201.964 395.806 200.863 390.688 200.863ZM320.002 320C280.664 320 247.946 288.152 247.946 247.061C247.946 242.123 248.399 237.381 249.227 233.016C266.668 239.406 285.143 242.578 304 244.004V272C304 280.844 311.157 288 320 288S336 280.844 336 272V244.031C355.094 242.617 373.698 239.484 390.563 233.68C391.51 238.363 391.991 243.18 391.991 248C391.991 287.699 359.698 320 320.002 320Z " />
        </Icon>
    </>
}