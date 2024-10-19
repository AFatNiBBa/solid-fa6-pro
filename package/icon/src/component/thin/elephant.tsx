
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `elephant` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/elephant?s=thin elephant}
 * @preview ![elephant](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MjggMTI4QzUxOS4xNjQgMTI4IDUxMiAxMzUuMTYyIDUxMiAxNDRDNTEyIDE1Mi44MzYgNTE5LjE2NCAxNjAgNTI4IDE2MFM1NDQgMTUyLjgzNiA1NDQgMTQ0QzU0NCAxMzUuMTYyIDUzNi44MzYgMTI4IDUyOCAxMjhaTTUxMiAzMkg0NTUuMDg2QzQzNy41MTYgMTIuNDk0IDQxMi4zMiAwIDM4NCAwQzM3OC4yMjkgMCAzNzIuMzI4IDAuNTIgMzY2LjMzNCAxLjYwNEMzNDUuMzMgNS40MDQgMzI2LjU1MSAxNi42NjQgMzEyLjU3IDMyLjIzNkMzMTIuMzUyIDMyLjIxOSAzMTIuMjIzIDMyIDMxMiAzMkgyMDBDODkuNTQzIDMyIDAgMTIxLjU0MyAwIDIzMlYzNjBDMCAzNjQuNDA2IDMuNTk0IDM2OCA4IDM2OFMxNiAzNjQuNDA2IDE2IDM2MFYyMzJDMTYgMTMwLjM3OSA5OC4zNzkgNDggMjAwIDQ4SDMwMC45NDdDMjk1LjczNiA1Ni45MiAyOTEuODI4IDY2LjYyOSAyODkuODM4IDc2Ljk1OUMyODAuMjQ2IDEyNi43NzcgMzA5LjI1OCAxNzAuOTI2IDM1MiAxODYuMTIxVjE5MkMzNTIgMjA5LjY3MiAzNjYuMzI2IDIyNCAzODQgMjI0QzM4NCAyNTMuNzg3IDQwNC40NDMgMjc4LjYgNDMyIDI4NS43MzZWNDgwQzQzMiA0ODguODM2IDQyNC44MzYgNDk2IDQxNiA0OTZIMzY4QzM1OS4xNjQgNDk2IDM1MiA0ODguODM2IDM1MiA0ODBWMzc2LjkzNkMzNTguNzU2IDM3My44MTYgMzY1LjU2NiAzNzAuNzk5IDM3MiAzNjcuMDYyQzM3NS44NDQgMzY0Ljg0NCAzNzcuMTI1IDM1OS45NjkgMzc0LjkwNiAzNTYuMTU2QzM3Mi42ODggMzUyLjI4MSAzNjcuNzE5IDM1MC45NjkgMzY0IDM1My4yNUMyOTQuNTYyIDM5My41IDIwMS40MzggMzkzLjUgMTMyIDM1My4yNUMxMjguMjUgMzUwLjk2OSAxMjMuMjgxIDM1Mi4yODEgMTIxLjA5NCAzNTYuMTU2QzExOC44NzUgMzU5Ljk2OSAxMjAuMTU2IDM2NC44NDQgMTI0IDM2Ny4wNjJDMTMwLjQzNCAzNzAuNzk5IDEzNy4yNDQgMzczLjgxNiAxNDQgMzc2LjkzNlY0ODBDMTQ0IDQ4OC44MzYgMTM2LjgzNiA0OTYgMTI4IDQ5Nkg4MEM3MS4xNjQgNDk2IDY0IDQ4OC44MzYgNjQgNDgwVjIzMkM2NCAyMjcuNTgyIDYwLjQxOCAyMjQgNTYgMjI0UzQ4IDIyNy41ODIgNDggMjMyVjQ4MEM0OCA0OTcuNjcyIDYyLjMyNiA1MTIgODAgNTEySDEyOEMxNDUuNjc0IDUxMiAxNjAgNDk3LjY3MiAxNjAgNDgwVjM4My43MTdDMTg3LjgyMiAzOTQuMjAzIDIxNy41NzIgNDAwIDI0OCA0MDBTMzA4LjE3OCAzOTQuMjAzIDMzNiAzODMuNzE3VjQ4MEMzMzYgNDk3LjY3MiAzNTAuMzI2IDUxMiAzNjggNTEySDQxNkM0MzMuNjc0IDUxMiA0NDggNDk3LjY3MiA0NDggNDgwVjI4OEg1MTJDNTM1LjUgMjg4IDU1Ny4xMjUgMjgxLjI1IDU3NiAyNzAuMjVWMzY3LjFDNTc2IDM3NS42MTkgNTY5LjczNCAzODMuMzI0IDU2MS4yMzggMzgzLjk1M0M1NTIuOTQ1IDM4NC41NjggNTQ1LjkyIDM3OC45NTUgNTQ0LjMzNCAzNzEuMjg5QzU0Mi4wMiAzNjAuMDk0IDUzMi4yOTMgMzUyIDUyMC44NjEgMzUySDUwNC42MjNDNDg5Ljk2MyAzNTIgNDc4LjcyNSAzNjUuMDM5IDQ4MC44MyAzNzkuNTQ3QzQ4Ni40NDEgNDE4LjIyMyA1MTkuODA5IDQ0OC4wNTEgNTYwLjAyNSA0NDguMDUxQzU2Ni40MTQgNDQ4LjA1MSA1NzIuOTczIDQ0Ny4yOTcgNTc5LjYyNSA0NDUuNzA3QzYxNS42ODIgNDM3LjA5NCA2NDAgNDAzLjE3NCA2NDAgMzY2LjEwNFYxNjBDNjQwIDg5LjMwNyA1ODIuNjkzIDMyIDUxMiAzMlpNNjI0IDM2NC4wMjVDNjI0IDM5NS4wNjYgNjA0LjQgNDIyLjcxOSA1NzcuMzk4IDQyOS43NzNDNTcxLjYxNyA0MzEuMjg1IDU2NS43NzMgNDMyLjA1MSA1NjAuMDI1IDQzMi4wNTFDNTI3LjgzOCA0MzIuMDUxIDUwMS4xMDUgNDA4LjE0NiA0OTYuNjUyIDM3Ny4xMDJDNDk1Ljk2MyAzNzIuMzAzIDQ5OS43OTEgMzY4IDUwNC42MzkgMzY4SDUyMC44NjlDNTI0LjY5NyAzNjggNTI3Ljg4NyAzNzAuNzQ0IDUyOC42NjIgMzc0LjQ5NEM1MzEuODc5IDM5MC4wMzEgNTQ2LjM5MyA0MDEuNDgyIDU2My4xOTcgMzk5Ljg0NEM1NzkuODIyIDM5OC4yMjEgNTkyIDM4My4yNzcgNTkyIDM2Ni41NzRWMjcwLjI1QzU5MiAyNjQuNTIxIDU4OC45MzggMjU5LjIzIDU4My45NzMgMjU2LjM3N0M1ODEuNTA0IDI1NC45NTkgNTc4Ljc1MiAyNTQuMjUgNTc2IDI1NC4yNUM1NzMuMjE3IDI1NC4yNSA1NzAuNDMyIDI1NC45NzcgNTY3Ljk0MyAyNTYuNDI2QzU1MC4yMTEgMjY2Ljc2IDUzMS4zODkgMjcyIDUxMiAyNzJINDQ4QzQyMS41MzMgMjcyIDQwMCAyNTAuNDY3IDQwMCAyMjRINDI0QzQyOC40MDYgMjI0IDQzMiAyMjAuNDA2IDQzMiAyMTZTNDI4LjQwNiAyMDggNDI0IDIwOEgzODRDMzc1LjE2NCAyMDggMzY4IDIwMC44MzYgMzY4IDE5MlYxODYuMTIxQzM2OCAxNzkuMjM2IDM2My41NTEgMTczLjI3MSAzNTcuMDc0IDE3MC45NDFDMzE5LjY0NSAxNTcuNDggMjk3Ljk4NCAxMTkuMjc5IDMwNS41NDkgNzkuOTg0QzMxMS41NTUgNDguNzk3IDMzNy43MjMgMjMuMDM5IDM2OS4xODIgMTcuMzQ4QzM3NC4xMjUgMTYuNDUzIDM3OS4xMDkgMTYgMzg0IDE2QzQwNi44MDkgMTYuMDAyIDQyNy45NjEgMjUuNjExIDQ0My41MDYgNDMuMDUxQzQ0Ni40MiA0Ni4zMiA0NTAuNzMgNDggNDU1LjExMSA0OEg1MTJDNTczLjg1NSA0OCA2MjQgOTguMTQ1IDYyNCAxNjBWMzY0LjAyNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Elephant(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M528 128C519.164 128 512 135.162 512 144C512 152.836 519.164 160 528 160S544 152.836 544 144C544 135.162 536.836 128 528 128ZM512 32H455.086C437.516 12.494 412.32 0 384 0C378.229 0 372.328 0.52 366.334 1.604C345.33 5.404 326.551 16.664 312.57 32.236C312.352 32.219 312.223 32 312 32H200C89.543 32 0 121.543 0 232V360C0 364.406 3.594 368 8 368S16 364.406 16 360V232C16 130.379 98.379 48 200 48H300.947C295.736 56.92 291.828 66.629 289.838 76.959C280.246 126.777 309.258 170.926 352 186.121V192C352 209.672 366.326 224 384 224C384 253.787 404.443 278.6 432 285.736V480C432 488.836 424.836 496 416 496H368C359.164 496 352 488.836 352 480V376.936C358.756 373.816 365.566 370.799 372 367.062C375.844 364.844 377.125 359.969 374.906 356.156C372.688 352.281 367.719 350.969 364 353.25C294.562 393.5 201.438 393.5 132 353.25C128.25 350.969 123.281 352.281 121.094 356.156C118.875 359.969 120.156 364.844 124 367.062C130.434 370.799 137.244 373.816 144 376.936V480C144 488.836 136.836 496 128 496H80C71.164 496 64 488.836 64 480V232C64 227.582 60.418 224 56 224S48 227.582 48 232V480C48 497.672 62.326 512 80 512H128C145.674 512 160 497.672 160 480V383.717C187.822 394.203 217.572 400 248 400S308.178 394.203 336 383.717V480C336 497.672 350.326 512 368 512H416C433.674 512 448 497.672 448 480V288H512C535.5 288 557.125 281.25 576 270.25V367.1C576 375.619 569.734 383.324 561.238 383.953C552.945 384.568 545.92 378.955 544.334 371.289C542.02 360.094 532.293 352 520.861 352H504.623C489.963 352 478.725 365.039 480.83 379.547C486.441 418.223 519.809 448.051 560.025 448.051C566.414 448.051 572.973 447.297 579.625 445.707C615.682 437.094 640 403.174 640 366.104V160C640 89.307 582.693 32 512 32ZM624 364.025C624 395.066 604.4 422.719 577.398 429.773C571.617 431.285 565.773 432.051 560.025 432.051C527.838 432.051 501.105 408.146 496.652 377.102C495.963 372.303 499.791 368 504.639 368H520.869C524.697 368 527.887 370.744 528.662 374.494C531.879 390.031 546.393 401.482 563.197 399.844C579.822 398.221 592 383.277 592 366.574V270.25C592 264.521 588.938 259.23 583.973 256.377C581.504 254.959 578.752 254.25 576 254.25C573.217 254.25 570.432 254.977 567.943 256.426C550.211 266.76 531.389 272 512 272H448C421.533 272 400 250.467 400 224H424C428.406 224 432 220.406 432 216S428.406 208 424 208H384C375.164 208 368 200.836 368 192V186.121C368 179.236 363.551 173.271 357.074 170.941C319.645 157.48 297.984 119.279 305.549 79.984C311.555 48.797 337.723 23.039 369.182 17.348C374.125 16.453 379.109 16 384 16C406.809 16.002 427.961 25.611 443.506 43.051C446.42 46.32 450.73 48 455.111 48H512C573.855 48 624 98.145 624 160V364.025Z" />
        </Icon>
    </>
}