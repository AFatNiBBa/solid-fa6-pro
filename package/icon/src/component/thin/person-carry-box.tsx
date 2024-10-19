
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `person-carry-box` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-carry-box?s=thin person-carry-box}
 * @preview ![person-carry-box](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04MCAxMDRDMTA4LjcwOSAxMDQgMTMyIDgwLjcwNyAxMzIgNTEuOTk4QzEzMiAyMy4yOTMgMTA4LjcwOSAwIDgwIDBDNTEuMjkzIDAgMjggMjMuMjkzIDI4IDUxLjk5OEMyOCA4MC43MDcgNTEuMjkzIDEwNCA4MCAxMDRaTTgwIDE2Qzk5Ljg1IDE2IDExNiAzMi4xNDggMTE2IDUxLjk5OEMxMTYgNzEuODUgOTkuODUgODggODAgODhTNDQgNzEuODUgNDQgNTEuOTk4QzQ0IDMyLjE0OCA2MC4xNSAxNiA4MCAxNlpNNTYgNDAwQzUxLjU4MiA0MDAgNDggNDAzLjU4MiA0OCA0MDhWNDgwLjAwMkM0OCA0ODguODM0IDQxLjE4OCA0OTUuNzgzIDMyLjQxNCA0OTUuOTk0QzIzLjM4NSA0OTYuMjExIDE2IDQ4Ny45NzEgMTYgNDc4LjkzOVYzNjBDMTYgMzU1LjU4MiAxMi40MTggMzUyIDggMzUyUzAgMzU1LjU4MiAwIDM2MFY0NzguMzEyQzAgNDk1LjY2OCAxMy4wODIgNTExLjE0MyAzMC40MTggNTExLjk2M0M0OC44OTYgNTEyLjgzNiA2NCA0OTguMjc1IDY0IDQ4MC4wMDJWNDA4QzY0IDQwMy41ODIgNjAuNDE4IDQwMCA1NiA0MDBaTTM1MiA5NkgyMjRDMjA2LjMyNiA5NiAxOTIgMTEwLjMyNiAxOTIgMTI4VjI1NkMxOTIgMjYxLjk1NSAxOTQuMDY0IDI2Ny4yMTkgMTk2Ljg5OCAyNzEuOTk0SDE0Ny4xODJDMTQxLjI3NyAyNzEuOTk0IDEzNS44NTIgMjY4Ljc0MiAxMzMuMDY4IDI2My41MzVMMTEwLjExMSAyMjAuNTc4QzEwNy4yODEgMjE1LjI4MSAxMDEuODAxIDIxMi4xMTcgOTYuMDAyIDIxMi4xMTdDOTMuMzk2IDIxMi4xMTcgOTAuNzI3IDIxMi43NTYgODguMjAxIDIxNC4xMzFDODIuOTM0IDIxNi45OTggODAgMjIyLjg4MyA4MCAyMjguODgxVjMwNi4zNjdDODAgMzExLjAzNyA4Mi4wMzkgMzE1LjQ3MyA4NS41ODIgMzE4LjUxMkwxMjkuNTg4IDM1Ni4yNjZDMTM4LjExNyAzNjMuNTc2IDE0My44NDggMzczLjc0NCAxNDUuNjg0IDM4NC42NThMMTU5Ljg0IDQ3Ny4zNTJDMTYwLjUzNSA0ODEuNTU1IDE1OS41NDkgNDg1Ljc3NyAxNTcuMDY0IDQ4OS4yNDRDMTU0LjU3OCA0OTIuNzEzIDE1MC44ODEgNDk1LjAwNiAxNDYuNjU0IDQ5NS43MDFDMTQ1LjQ0MyA0OTUuOSAxNDQuMjk3IDQ5NiAxNDMuMjA5IDQ5NkMxMzEuODgxIDQ5NiAxMjguMzU0IDQ4Mi44MTggMTI4LjMxNiA0ODIuODE4QzEyOC4zMTYgNDgyLjgxOCAxMjguMzE2IDQ4Mi44MiAxMjguMzE2IDQ4Mi44MjRMMTE0LjE5MSAzOTAuMzI2QzExMy42MTMgMzg2LjUzNyAxMTEuNjkzIDM4My4wODIgMTA4Ljc4NSAzODAuNTlMMzIuODU3IDMxNS41MjlDMjIuMTQ1IDMwNi4yNCAxNiAyOTIuOTI0IDE2IDI3OC45OTRWMTc1Ljk5OEMxNiAxNTguMzI0IDMwLjMyNiAxNDMuOTk4IDQ4IDE0My45OThINzYuNzVDOTQuNjEzIDE0My45OTggMTEwLjgyNCAxNTMuODIyIDExOS4xNzQgMTY5Ljg1NEwxNTIuNTQ5IDIzMS42MDRDMTU1LjM0NCAyMzYuNzczIDE2MC43NDggMjM5Ljk5NiAxNjYuNjI1IDIzOS45OTZIMTY4QzE3Mi40MTggMjM5Ljk5NiAxNzYgMjM2LjQxNCAxNzYgMjMxLjk5NlMxNzIuNDE4IDIyMy45OTYgMTY4IDIyMy45OTZIMTY2LjYyNUwxMzMuMjUgMTYyLjI0NkMxMjIuMjUgMTQxLjEyMSAxMDAuNSAxMjcuOTk4IDc2Ljc1IDEyNy45OThINDhDMjEuNDkgMTI3Ljk5OCAwIDE0OS40ODggMCAxNzUuOTk4VjI3OC45OTRDMCAyOTcuNzQ0IDguMjUgMzE1LjM2OSAyMi4zNzUgMzI3LjYxN0w5OC4zNzUgMzkyLjc0MkwxMTIuNSA0ODUuMjRDMTEzLjQyIDQ5MC40MTYgMTIxLjIyMyA1MTIgMTQzLjIwOSA1MTJDMTQ1LjExNSA1MTIgMTQ3LjEyNyA1MTEuODM4IDE0OS4yNSA1MTEuNDg4QzE2Ni43NSA1MDguNjEzIDE3OC41IDQ5Mi4xMTUgMTc1LjYyNSA0NzQuNzRMMTYxLjUgMzgyLjI0MkMxNTkgMzY3LjM2NyAxNTEuMzc1IDM1My44NjcgMTQwIDM0NC4xMTdMOTYgMzA2LjM2OVYyMjguMTE5TDExOC45NTkgMjcxLjA3OEMxMjQuNTI1IDI4MS40OTIgMTM1LjM3MyAyODcuOTk0IDE0Ny4xOCAyODcuOTk0SDIyMy45NzFDMjIzLjk4IDI4Ny45OTQgMjIzLjk5IDI4OCAyMjQgMjg4SDM1MkMzNjkuNjc0IDI4OCAzODQgMjczLjY3NCAzODQgMjU2VjEyOEMzODQgMTEwLjMyNiAzNjkuNjc0IDk2IDM1MiA5NlpNMzY4IDI1NkMzNjggMjY0LjgyMiAzNjAuODIyIDI3MiAzNTIgMjcySDIyNFYyNzEuOTk0SDIyMy45NzFDMjE1LjE2MiAyNzEuOTc5IDIwOCAyNjQuODEyIDIwOCAyNTZWMTI4QzIwOCAxMTkuMTc4IDIxNS4xNzggMTEyIDIyNCAxMTJIMzUyQzM2MC44MjIgMTEyIDM2OCAxMTkuMTc4IDM2OCAxMjhWMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PersonCarryBox(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M80 104C108.709 104 132 80.707 132 51.998C132 23.293 108.709 0 80 0C51.293 0 28 23.293 28 51.998C28 80.707 51.293 104 80 104ZM80 16C99.85 16 116 32.148 116 51.998C116 71.85 99.85 88 80 88S44 71.85 44 51.998C44 32.148 60.15 16 80 16ZM56 400C51.582 400 48 403.582 48 408V480.002C48 488.834 41.188 495.783 32.414 495.994C23.385 496.211 16 487.971 16 478.939V360C16 355.582 12.418 352 8 352S0 355.582 0 360V478.312C0 495.668 13.082 511.143 30.418 511.963C48.896 512.836 64 498.275 64 480.002V408C64 403.582 60.418 400 56 400ZM352 96H224C206.326 96 192 110.326 192 128V256C192 261.955 194.064 267.219 196.898 271.994H147.182C141.277 271.994 135.852 268.742 133.068 263.535L110.111 220.578C107.281 215.281 101.801 212.117 96.002 212.117C93.396 212.117 90.727 212.756 88.201 214.131C82.934 216.998 80 222.883 80 228.881V306.367C80 311.037 82.039 315.473 85.582 318.512L129.588 356.266C138.117 363.576 143.848 373.744 145.684 384.658L159.84 477.352C160.535 481.555 159.549 485.777 157.064 489.244C154.578 492.713 150.881 495.006 146.654 495.701C145.443 495.9 144.297 496 143.209 496C131.881 496 128.354 482.818 128.316 482.818C128.316 482.818 128.316 482.82 128.316 482.824L114.191 390.326C113.613 386.537 111.693 383.082 108.785 380.59L32.857 315.529C22.145 306.24 16 292.924 16 278.994V175.998C16 158.324 30.326 143.998 48 143.998H76.75C94.613 143.998 110.824 153.822 119.174 169.854L152.549 231.604C155.344 236.773 160.748 239.996 166.625 239.996H168C172.418 239.996 176 236.414 176 231.996S172.418 223.996 168 223.996H166.625L133.25 162.246C122.25 141.121 100.5 127.998 76.75 127.998H48C21.49 127.998 0 149.488 0 175.998V278.994C0 297.744 8.25 315.369 22.375 327.617L98.375 392.742L112.5 485.24C113.42 490.416 121.223 512 143.209 512C145.115 512 147.127 511.838 149.25 511.488C166.75 508.613 178.5 492.115 175.625 474.74L161.5 382.242C159 367.367 151.375 353.867 140 344.117L96 306.369V228.119L118.959 271.078C124.525 281.492 135.373 287.994 147.18 287.994H223.971C223.98 287.994 223.99 288 224 288H352C369.674 288 384 273.674 384 256V128C384 110.326 369.674 96 352 96ZM368 256C368 264.822 360.822 272 352 272H224V271.994H223.971C215.162 271.979 208 264.812 208 256V128C208 119.178 215.178 112 224 112H352C360.822 112 368 119.178 368 128V256Z" />
        </Icon>
    </>
}