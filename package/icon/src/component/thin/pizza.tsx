
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pizza` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pizza?s=thin pizza}
 * @preview ![pizza](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDUuNzc4IDM5Mi44NTJDNDAyLjY1MSAzODkuNzU4IDM5Ny41ODkgMzg5Ljc1OCAzOTQuNDk1IDM5Mi44NTJDMzU3LjgwNCA0MjkuNDE2IDMwOS4xNDQgNDQ5LjQ5NiAyNTcuMzI3IDQ0OS40OTZIMjU1Ljk1MkMyMDMuNjAzIDQ0OS4xMzcgMTU0LjY0NiA0MjguMzIyIDExOC4xMTIgMzkwLjg5OEM0Ni44MDggMzE3Ljc2OCA0Ni44MDggMTk0LjE5NyAxMTguMDk3IDEyMS4wODJDMTU0LjY0NiA4My42NDMgMjAzLjYwMyA2Mi44MjggMjU1Ljk1MiA2Mi40NjlIMjU3LjMyN0MzMDkuMTQ0IDYyLjQ2OSAzNTcuODA0IDgyLjU0NyAzOTQuNDk1IDExOS4xMTNDMzk3LjU4OSAxMjIuMjA3IDQwMi42NTEgMTIyLjIwNyA0MDUuNzc4IDExOS4xMTNMNDI3LjIzMyA5Ny43MzZDNDMxLjg1OCA5My4wNDkgNDM0LjM1OCA4Ni41NDkgNDM0LjEwOCA3OS45MjJDNDMzLjg1OCA3My40NTMgNDMxLjA3NyA2Ny41OTQgNDI2LjMyNSA2My40NTNDMzc5LjExOCAyMi4wNDMgMzE4LjQ0NiAtMC4yMTggMjU2LjA5MyAwLjAwMkMyNDUuNTA2IDAuMDM5IDIzNC44NzEgMC43MjUgMjI0LjI0NSAyLjA3NEMxNTAuMDA1IDExLjYyMSA4NS42MDggNTEuNjU0IDQyLjkxNyAxMTQuNzdDMTQuMzA2IDE1Ni45OTkgMCAyMDYuNDkxIDAgMjU1Ljk4MkMwIDMwNS40NzQgMTQuMzA2IDM1NC45NjYgNDIuOTE3IDM5Ny4xOTVDODUuNTkzIDQ2MC4yOTMgMTQ5Ljk1OCA1MDAuMzEyIDIyNC4xNjcgNTA5Ljg3NUMyMzUuMiA1MTEuMjk3IDI0Ni4yMzEgNTEyIDI1Ny4yMTggNTEyQzMxOS4yMDggNTEyIDM3OS40NzggNDg5LjY3IDQyNi40MTkgNDQ4LjUyN0M0MzEuMjE4IDQ0NC4zNCA0MzMuOTgzIDQzOC40NjMgNDM0LjIwMiA0MzEuOTc5QzQzNC40MzcgNDI1LjMzOCA0MzEuODc0IDQxOC44NTQgNDI3LjE3MSA0MTQuMTY0TDQwNS43NzggMzkyLjg1MlpNNDE1LjkwMyA0MzYuNDc5QzM2NC4wNCA0ODEuODczIDI5NC45NTYgNTAyLjc4MSAyMjYuMjE0IDQ5NC4wMTRDMTU2LjYzIDQ4NS4wMjkgOTYuMjM1IDQ0Ny40NjUgNTYuMTY5IDM4OC4yMjdDMi41ODUgMzA5LjEyNyAyLjU4NSAyMDIuODM4IDU2LjE2OSAxMjMuNzM4Qzk2LjI1MSA2NC40NjkgMTU2LjY2MSAyNi45MDIgMjI2LjI3NiAxNy45NDlDMjM2LjYwNiAxNi42MjEgMjQ2LjkxOSAxNS45NjUgMjU3LjIwMiAxNS45NjVDMzE1LjMxNSAxNS45NjUgMzcxLjc5IDM2LjkwNCA0MTUuNzk0IDc1LjVDNDE3LjcxNiA3Ny4xNzIgNDE4LjA3NSA3OS4zNzUgNDE4LjEyMiA4MC41MzFDNDE4LjIgODIuNzY2IDQxNy4zNzIgODQuOTU1IDQxNS44ODggODYuNDU1TDQwMC4wMjYgMTAyLjI1MkMzNjEuMDU2IDY2LjE4OCAzMTAuNzUzIDQ2LjQ2NyAyNTcuMzI3IDQ2LjQ2N0gyNTUuODQzQzE5OS4xOTYgNDYuODU3IDE0Ni4yMDggNjkuMzkxIDEwNi42NDIgMTA5LjkwOEMyOC4xMiAxOTAuNDQ1IDI4LjEyIDMyMS41MTggMTA2LjY1NyA0MDIuMDdDMTQ2LjIwOCA0NDIuNTcyIDE5OS4xOTYgNDY1LjEwNSAyNTUuODQzIDQ2NS40OTZIMjU3LjMyN0MzMTAuNzM3IDQ2NS40OTYgMzYxLjA3MSA0NDUuNzc3IDQwMC4wMjYgNDA5LjcxMUw0MTUuODcyIDQyNS40OTRDNDE3LjQzNSA0MjcuMDU3IDQxOC4yOTQgNDI5LjIyOSA0MTguMjE2IDQzMS40NDdDNDE4LjE2OSA0MzIuNjA0IDQxNy44MjUgNDM0Ljc5MSA0MTUuOTAzIDQzNi40NzlaTTM2OC4xMDMgMzc1Ljk5QzM3MC4xNDkgMzc1Ljk5IDM3Mi4xOTYgMzc1LjIwOSAzNzMuNzU5IDM3My42NDZDMzc2Ljg4NCAzNzAuNTIxIDM3Ni44ODQgMzY1LjQ1OSAzNzMuNzU5IDM2Mi4zMzRMMjY3LjQwNSAyNTUuOTgyTDM3My43NTkgMTQ5LjYzMUMzNzYuODg0IDE0Ni41MDYgMzc2Ljg4NCAxNDEuNDQzIDM3My43NTkgMTM4LjMxOEMzNzAuNjM0IDEzNS4xOTEgMzY1LjU3MSAxMzUuMTkxIDM2Mi40NDYgMTM4LjMxOEwyNTAuNDM3IDI1MC4zMjZDMjQ3LjMxIDI1My40NTEgMjQ3LjMxIDI1OC41MTQgMjUwLjQzNyAyNjEuNjM5TDM2Mi40NDYgMzczLjY0NkMzNjQuMDA5IDM3NS4yMDkgMzY2LjA1NiAzNzUuOTkgMzY4LjEwMyAzNzUuOTlaTTUyNS42NjMgMTA3LjQ4NkM1MjEuODE5IDEwMi41MDIgNTE1LjkyOSA5OS4zOTMgNTA5LjQ3NCA5OC45NTVDNTAzLjAyMSA5OC41NDkgNDk2LjIzOSAxMDAuOTcxIDQ5MS40ODcgMTA1LjY1OEw0NzEuNzM3IDEyNS4zNDhDNDY4Ljc2NyAxMjguMzE2IDQ2OC41NzkgMTMzLjA2NiA0NzEuMzE1IDEzNi4yMzhDNTMwLjAyMiAyMDQuNTEgNTMwLjAyMiAzMDcuNDU1IDQ3MS4zMTUgMzc1LjcyNUM0NjguNTc5IDM3OC44OTYgNDY4Ljc2NyAzODMuNjQ2IDQ3MS43MzcgMzg2LjYxNUw0OTEuNDg3IDQwNi4zMDVDNDk1Ljg0OSA0MTAuNjMzIDUwMS43NTUgNDEzLjA1NSA1MDcuOTExIDQxMy4wNTVDNTA4LjQyNyA0MTMuMDU1IDUwOC45NTggNDEzLjAzOSA1MDkuNDc0IDQxMy4wMDhDNTE1LjkyOSA0MTIuNTcgNTIxLjgxOSA0MDkuNDYxIDUyNS42NjMgNDA0LjQ3N0M1NTkuMjIxIDM2MC43NjMgNTc1Ljk5OSAzMDguMzczIDU3NiAyNTUuOTgyQzU3NiAyMDMuNTkyIDU1OS4yMjEgMTUxLjIwMSA1MjUuNjYzIDEwNy40ODZaTTUxMi45NzQgMzk0LjcyN0M1MTEuNTUyIDM5Ni41NyA1MDkuNTA1IDM5Ni45NjEgNTA4LjQxMSAzOTcuMDM5QzUwNi4zNDkgMzk3LjE5NSA1MDQuMjU1IDM5Ni40MyA1MDIuNzcxIDM5NC45NjFMNDg4LjE5IDM4MC40MjhDNTQ1LjY4MSAzMDguMjIxIDU0NS42ODEgMjAzLjc0NCA0ODguMTkgMTMxLjUzNUw1MDIuNzcxIDExNy4wMDRDNTA0LjI1NSAxMTUuNTM1IDUwNi4zNDkgMTE0LjcwNyA1MDguNDExIDExNC45MjZDNTA5LjUwNSAxMTUuMDA0IDUxMS41NTIgMTE1LjM5NSA1MTIuOTc0IDExNy4yMzhDNTc1LjY4MyAxOTguOTMyIDU3NS42ODMgMzEzLjAzMyA1MTIuOTc0IDM5NC43MjdaTTM2My40MzEgMjU1Ljk4Mkw0NTMuNzUxIDE2NS45NzdDNDU2Ljg5MiAxNjIuODUgNDU2Ljg5MiAxNTcuNzg3IDQ1My43ODIgMTU0LjY2MkM0NTAuNjU3IDE1MS41MDYgNDQ1LjU2MiAxNTEuNTM3IDQ0Mi40NjggMTU0LjYzMUwzNDYuNDYgMjUwLjMxMUMzNDQuOTQ0IDI1MS44MTEgMzQ0LjEwMSAyNTMuODU3IDM0NC4xMDEgMjU1Ljk4MlMzNDQuOTQ0IDI2MC4xNTQgMzQ2LjQ2IDI2MS42NTRMNDQyLjQ2OCAzNTcuMzMyQzQ0NC4wMyAzNTguODc5IDQ0Ni4wNjIgMzU5LjY2IDQ0OC4xMDggMzU5LjY2QzQ1MC4xNTcgMzU5LjY2IDQ1Mi4yMiAzNTguODc5IDQ1My43ODIgMzU3LjMwMUM0NTYuODkyIDM1NC4xNzYgNDU2Ljg5MiAzNDkuMTEzIDQ1My43NTEgMzQ1Ljk4OEwzNjMuNDMxIDI1NS45ODJaTTE5Mi4wODcgMTU5Ljk3NUMxOTIuMDg3IDE2OC44MTIgMTk5LjI1MSAxNzUuOTc3IDIwOC4wODkgMTc1Ljk3N0MyMTYuOTI1IDE3NS45NzcgMjI0LjA4OSAxNjguODEyIDIyNC4wODkgMTU5Ljk3NUMyMjQuMDg5IDE1MS4xMzkgMjE2LjkyNSAxNDMuOTc1IDIwOC4wODkgMTQzLjk3NUMxOTkuMjUxIDE0My45NzUgMTkyLjA4NyAxNTEuMTM5IDE5Mi4wODcgMTU5Ljk3NVpNMjQwLjA5MSAzNjcuOTlDMjQwLjA5MSAzNzYuODI2IDI0Ny4yNTUgMzgzLjk5IDI1Ni4wOTMgMzgzLjk5UzI3Mi4wOTUgMzc2LjgyNiAyNzIuMDk1IDM2Ny45OUMyNzIuMDk1IDM1OS4xNTIgMjY0LjkzMSAzNTEuOTg4IDI1Ni4wOTMgMzUxLjk4OFMyNDAuMDkxIDM1OS4xNTIgMjQwLjA5MSAzNjcuOTlaTTE0NC4wODMgMjU1Ljk4MkMxNDQuMDgzIDI2NC44MTggMTUxLjI0NyAyNzEuOTgyIDE2MC4wODMgMjcxLjk4MkMxNjguOTIxIDI3MS45ODIgMTc2LjA4NSAyNjQuODE4IDE3Ni4wODUgMjU1Ljk4MkMxNzYuMDg1IDI0Ny4xNDUgMTY4LjkyMSAyMzkuOTggMTYwLjA4MyAyMzkuOThDMTUxLjI0NyAyMzkuOTggMTQ0LjA4MyAyNDcuMTQ1IDE0NC4wODMgMjU1Ljk4MlpNNDQ4LjEwOCAyNTUuOTgyQzQzOS4yNzIgMjU1Ljk4MiA0MzIuMTA4IDI2My4xNDYgNDMyLjEwOCAyNzEuOTgyQzQzMi4xMDggMjgwLjgyIDQzOS4yNzIgMjg3Ljk4NCA0NDguMTA4IDI4Ny45ODRDNDU2Ljk0NiAyODcuOTg0IDQ2NC4xMSAyODAuODIgNDY0LjExIDI3MS45ODJDNDY0LjExIDI2My4xNDYgNDU2Ljk0NiAyNTUuOTgyIDQ0OC4xMDggMjU1Ljk4MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Pizza(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M405.778 392.852C402.651 389.758 397.589 389.758 394.495 392.852C357.804 429.416 309.144 449.496 257.327 449.496H255.952C203.603 449.137 154.646 428.322 118.112 390.898C46.808 317.768 46.808 194.197 118.097 121.082C154.646 83.643 203.603 62.828 255.952 62.469H257.327C309.144 62.469 357.804 82.547 394.495 119.113C397.589 122.207 402.651 122.207 405.778 119.113L427.233 97.736C431.858 93.049 434.358 86.549 434.108 79.922C433.858 73.453 431.077 67.594 426.325 63.453C379.118 22.043 318.446 -0.218 256.093 0.002C245.506 0.039 234.871 0.725 224.245 2.074C150.005 11.621 85.608 51.654 42.917 114.77C14.306 156.999 0 206.491 0 255.982C0 305.474 14.306 354.966 42.917 397.195C85.593 460.293 149.958 500.312 224.167 509.875C235.2 511.297 246.231 512 257.218 512C319.208 512 379.478 489.67 426.419 448.527C431.218 444.34 433.983 438.463 434.202 431.979C434.437 425.338 431.874 418.854 427.171 414.164L405.778 392.852ZM415.903 436.479C364.04 481.873 294.956 502.781 226.214 494.014C156.63 485.029 96.235 447.465 56.169 388.227C2.585 309.127 2.585 202.838 56.169 123.738C96.251 64.469 156.661 26.902 226.276 17.949C236.606 16.621 246.919 15.965 257.202 15.965C315.315 15.965 371.79 36.904 415.794 75.5C417.716 77.172 418.075 79.375 418.122 80.531C418.2 82.766 417.372 84.955 415.888 86.455L400.026 102.252C361.056 66.188 310.753 46.467 257.327 46.467H255.843C199.196 46.857 146.208 69.391 106.642 109.908C28.12 190.445 28.12 321.518 106.657 402.07C146.208 442.572 199.196 465.105 255.843 465.496H257.327C310.737 465.496 361.071 445.777 400.026 409.711L415.872 425.494C417.435 427.057 418.294 429.229 418.216 431.447C418.169 432.604 417.825 434.791 415.903 436.479ZM368.103 375.99C370.149 375.99 372.196 375.209 373.759 373.646C376.884 370.521 376.884 365.459 373.759 362.334L267.405 255.982L373.759 149.631C376.884 146.506 376.884 141.443 373.759 138.318C370.634 135.191 365.571 135.191 362.446 138.318L250.437 250.326C247.31 253.451 247.31 258.514 250.437 261.639L362.446 373.646C364.009 375.209 366.056 375.99 368.103 375.99ZM525.663 107.486C521.819 102.502 515.929 99.393 509.474 98.955C503.021 98.549 496.239 100.971 491.487 105.658L471.737 125.348C468.767 128.316 468.579 133.066 471.315 136.238C530.022 204.51 530.022 307.455 471.315 375.725C468.579 378.896 468.767 383.646 471.737 386.615L491.487 406.305C495.849 410.633 501.755 413.055 507.911 413.055C508.427 413.055 508.958 413.039 509.474 413.008C515.929 412.57 521.819 409.461 525.663 404.477C559.221 360.763 575.999 308.373 576 255.982C576 203.592 559.221 151.201 525.663 107.486ZM512.974 394.727C511.552 396.57 509.505 396.961 508.411 397.039C506.349 397.195 504.255 396.43 502.771 394.961L488.19 380.428C545.681 308.221 545.681 203.744 488.19 131.535L502.771 117.004C504.255 115.535 506.349 114.707 508.411 114.926C509.505 115.004 511.552 115.395 512.974 117.238C575.683 198.932 575.683 313.033 512.974 394.727ZM363.431 255.982L453.751 165.977C456.892 162.85 456.892 157.787 453.782 154.662C450.657 151.506 445.562 151.537 442.468 154.631L346.46 250.311C344.944 251.811 344.101 253.857 344.101 255.982S344.944 260.154 346.46 261.654L442.468 357.332C444.03 358.879 446.062 359.66 448.108 359.66C450.157 359.66 452.22 358.879 453.782 357.301C456.892 354.176 456.892 349.113 453.751 345.988L363.431 255.982ZM192.087 159.975C192.087 168.812 199.251 175.977 208.089 175.977C216.925 175.977 224.089 168.812 224.089 159.975C224.089 151.139 216.925 143.975 208.089 143.975C199.251 143.975 192.087 151.139 192.087 159.975ZM240.091 367.99C240.091 376.826 247.255 383.99 256.093 383.99S272.095 376.826 272.095 367.99C272.095 359.152 264.931 351.988 256.093 351.988S240.091 359.152 240.091 367.99ZM144.083 255.982C144.083 264.818 151.247 271.982 160.083 271.982C168.921 271.982 176.085 264.818 176.085 255.982C176.085 247.145 168.921 239.98 160.083 239.98C151.247 239.98 144.083 247.145 144.083 255.982ZM448.108 255.982C439.272 255.982 432.108 263.146 432.108 271.982C432.108 280.82 439.272 287.984 448.108 287.984C456.946 287.984 464.11 280.82 464.11 271.982C464.11 263.146 456.946 255.982 448.108 255.982Z" />
        </Icon>
    </>
}