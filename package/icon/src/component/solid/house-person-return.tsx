
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `house-person-return` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/house-person-return?s=solid house-person-return}
 * @preview ![house-person-return](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzEuMjQ3IDQ1Ny40MjRMNTgxLjE1NSA0MDcuMjkzQzU3NS4wMTggNDAxLjE2OCA1NzAuMTM1IDM5My45MTggNTY3LjAwNSAzODUuNzkxTDU0Ni4yMTUgMzM0LjI4NUM1MzcuNDUgMzQ2LjE2MiA1NTQuMTA0IDMyNy42NiA0OTguNzUzIDM4OC4wNDFMNTEyLjI3OCA0MjEuNzk1QzUxNS41MzQgNDI5Ljc5NyA1MjAuMjkyIDQzNy4xNzIgNTI2LjQyOCA0NDMuMjk3TDU4Ni4wNCA1MDIuNjhDNTk4LjU2MSA1MTQuNTU1IDYxOC4zNDggNTE0LjE4IDYzMC42MjIgNTAxLjkzQzY0Mi44OTMgNDg5LjY3OCA2NDMuMTQzIDQ2OS45MjYgNjMxLjI0NyA0NTcuNDI0Wk01MzEuNDM4IDI2Mi41MjdMNTE2LjE2MSAyMDEuNzcxTDU0My4wODUgMjEyLjY0OEM1NTAuMjIzIDIxNS41MjMgNTU2LjEwOCAyMjEuMDIzIDU1OS40ODkgMjI4LjAyM0w1NjYuMjUzIDI0MS42NUM1NjkuODgzIDI0OS4xNTIgNTc2LjUyMiAyNTQuOTAyIDU4NC41MzYgMjU3LjY1MkM1OTIuNTUxIDI2MC4yNzcgNjAxLjE5MiAyNTkuNjUyIDYwOC44MzEgMjU1LjkwMkM2MjQuNDg1IDI0Ny45MDIgNjMwLjg3MiAyMjguNzc1IDYyMi45ODEgMjEzLjAyM0w2MTYuMzQ0IDE5OS4zOTZDNjA1Ljk1IDE3OC41MiA1ODguMTY5IDE2Mi4wMTggNTY2LjUwMyAxNTMuMjY2QzUyOS4wNTkgMTM4LjEzOSA1MDkuMTQ3IDEyNy44ODkgNDczLjA4MSAxMjguMDE0QzQyNi40OTUgMTI4LjEzOSAzODUuNDE5IDE1OS4yNjggMzcwLjY0MSAyMDMuODk2TDM2MC45OTkgMjMzLjI3NUwzMzcuNTgxIDI0NS4xNUMzMjEuOTI2IDI1My4xNTIgMzE1LjU0IDI3Mi4yNzkgMzIzLjMwNSAyODguMTU2QzMyNy4wNjEgMjk1LjY1NiAzMzMuNTczIDMwMS40MDggMzQxLjU4OSAzMDQuMTU4QzM0OS42MDIgMzA2Ljc4MyAzNTguMzcgMzA2LjE1OCAzNjUuODgzIDMwMi40MDhMMzg5LjE3NiAyOTAuNjU2QzQwNC4zMjkgMjgyLjkwNiA0MTUuNzI1IDI2OS42NTQgNDIwLjk4NSAyNTMuNjUyTDQyNi40OTUgMjM3LjE1TDQ0My42NTEgMzA1Ljc4M0wzOTguMTkyIDM1NS41MzlDMzkwLjkyOCAzNjMuMjg5IDM4NS43OTYgMzcyLjkxNiAzODMuMjkgMzgzLjE2NkwzNjAuOTk5IDQ3Mi4xNzZDMzU2Ljc0MSA0ODkuMzAzIDM2Ny4xMzUgNTA2LjY4IDM4NC40MTcgNTExLjA1NUM0MDEuNTczIDUxNS4zMDUgNDE4Ljk4MSA1MDQuODA1IDQyMy4yMzkgNDg3LjY3OEw0NDEuNTIyIDQxNC40MkM0NDQuMTUzIDQwNC4wNDMgNDQ5LjI4NiAzOTQuNTQzIDQ1Ni40MjQgMzg2LjY2Nkw1MTYuNTM2IDMyMS4yODVDNTMxLjA2MyAzMDUuNDA4IDUzNi41NzMgMjgzLjQwNiA1MzEuNDM4IDI2Mi41MjdaTTQzMi4yNTUgOTYuMDFDNDU4LjgwMyA5Ni4wMSA0ODAuMzQ0IDc0LjUwOCA0ODAuMzQ0IDQ4LjAwNEM0ODAuMzQ0IDIxLjUwMiA0NTguODAzIDAgNDMyLjI1NSAwUzM4NC4xNjcgMjEuNTAyIDM4NC4xNjcgNDguMDA0QzM4NC4xNjcgNzQuNTA4IDQwNS43MDYgOTYuMDEgNDMyLjI1NSA5Ni4wMVpNMzc1LjM3MiAzMzMuMjg3QzM2Ny45MTMgMzM2LjIzIDM1OS44NzYgMzM3Ljc3IDM1MS44MzUgMzM3Ljc3QzM0NS4wMzQgMzM3Ljc3IDMzOC4zMTEgMzM2LjY5NSAzMzEuNDI0IDMzNC40MzZDMzE1LjQ1OCAzMjguOTUxIDMwMi40OTkgMzE3LjYwNyAyOTQuNzk4IDMwMi4yMjFDMjc5LjQ5MyAyNzAuOTAyIDI5Mi4yNTMgMjMyLjUyNyAzMjMuMzMxIDIxNi42MzNMMzM0LjkzIDIxMC43NDZMMzQwLjQ2NyAxOTMuODYzQzM0OS43IDE2NS45NjEgMzY2Ljk4NyAxNDIuNzg3IDM4OC43ODQgMTI1Ljc5MUwyNjEuNzA0IDguNDg2QzI0OS40NDggLTIuODMgMjMwLjU1NSAtMi44MyAyMTguMjk4IDguNDg2TDEwLjI5NCAyMDAuNDkyQzAuNjA2IDIwOS40MyAtMi41OTcgMjIzLjM2NyAyLjIgMjM1LjY1QzYuOTk3IDI0Ny45MzIgMTguODI1IDI1NS45OTQgMzEuOTk5IDI1NS45OTRINjMuOTk3VjM2Ny45OThDNjMuOTk3IDM5NC4zOTggODUuNTk2IDQxNiAxMTEuOTk3IDQxNkgzNDIuMjg2TDM1Mi4zOTkgMzc1LjU4NEMzNTYuMjM1IDM1OS44NzMgMzY0LjA1NyAzNDUuMzgxIDM3NC43NDUgMzMzLjk3M0wzNzUuMzcyIDMzMy4yODdaTTIyMy45OTcgMjcxLjk5NEMyMjMuOTk3IDI4MC44NjkgMjE2Ljg3MiAyODcuOTk0IDIwNy45OTcgMjg3Ljk5NEgxNDMuOTk3QzEzNS4xMjIgMjg3Ljk5NCAxMjcuOTk3IDI4MC44NjkgMTI3Ljk5NyAyNzEuOTk0VjIwNy45OTJDMTI3Ljk5NyAxOTkuMTE3IDEzNS4xMjIgMTkxLjk5MiAxNDMuOTk3IDE5MS45OTJIMjA3Ljk5N0MyMTYuODcyIDE5MS45OTIgMjIzLjk5NyAxOTkuMTE3IDIyMy45OTcgMjA3Ljk5MlYyNzEuOTk0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HousePersonReturn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M631.247 457.424L581.155 407.293C575.018 401.168 570.135 393.918 567.005 385.791L546.215 334.285C537.45 346.162 554.104 327.66 498.753 388.041L512.278 421.795C515.534 429.797 520.292 437.172 526.428 443.297L586.04 502.68C598.561 514.555 618.348 514.18 630.622 501.93C642.893 489.678 643.143 469.926 631.247 457.424ZM531.438 262.527L516.161 201.771L543.085 212.648C550.223 215.523 556.108 221.023 559.489 228.023L566.253 241.65C569.883 249.152 576.522 254.902 584.536 257.652C592.551 260.277 601.192 259.652 608.831 255.902C624.485 247.902 630.872 228.775 622.981 213.023L616.344 199.396C605.95 178.52 588.169 162.018 566.503 153.266C529.059 138.139 509.147 127.889 473.081 128.014C426.495 128.139 385.419 159.268 370.641 203.896L360.999 233.275L337.581 245.15C321.926 253.152 315.54 272.279 323.305 288.156C327.061 295.656 333.573 301.408 341.589 304.158C349.602 306.783 358.37 306.158 365.883 302.408L389.176 290.656C404.329 282.906 415.725 269.654 420.985 253.652L426.495 237.15L443.651 305.783L398.192 355.539C390.928 363.289 385.796 372.916 383.29 383.166L360.999 472.176C356.741 489.303 367.135 506.68 384.417 511.055C401.573 515.305 418.981 504.805 423.239 487.678L441.522 414.42C444.153 404.043 449.286 394.543 456.424 386.666L516.536 321.285C531.063 305.408 536.573 283.406 531.438 262.527ZM432.255 96.01C458.803 96.01 480.344 74.508 480.344 48.004C480.344 21.502 458.803 0 432.255 0S384.167 21.502 384.167 48.004C384.167 74.508 405.706 96.01 432.255 96.01ZM375.372 333.287C367.913 336.23 359.876 337.77 351.835 337.77C345.034 337.77 338.311 336.695 331.424 334.436C315.458 328.951 302.499 317.607 294.798 302.221C279.493 270.902 292.253 232.527 323.331 216.633L334.93 210.746L340.467 193.863C349.7 165.961 366.987 142.787 388.784 125.791L261.704 8.486C249.448 -2.83 230.555 -2.83 218.298 8.486L10.294 200.492C0.606 209.43 -2.597 223.367 2.2 235.65C6.997 247.932 18.825 255.994 31.999 255.994H63.997V367.998C63.997 394.398 85.596 416 111.997 416H342.286L352.399 375.584C356.235 359.873 364.057 345.381 374.745 333.973L375.372 333.287ZM223.997 271.994C223.997 280.869 216.872 287.994 207.997 287.994H143.997C135.122 287.994 127.997 280.869 127.997 271.994V207.992C127.997 199.117 135.122 191.992 143.997 191.992H207.997C216.872 191.992 223.997 199.117 223.997 207.992V271.994Z" />
        </Icon>
    </>
}