
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sun-dust` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sun-dust?s=thin sun-dust}
 * @preview ![sun-dust](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAuMDMgNDY0QzE1MS4xNTUgNDY0IDE0NC4wMyA0NzEuMTI1IDE0NC4wMyA0ODBTMTUxLjE1NSA0OTYgMTYwLjAzIDQ5NlMxNzYuMDMgNDg4Ljg3NSAxNzYuMDMgNDgwUzE2OC45MDUgNDY0IDE2MC4wMyA0NjRaTTQ3OS45OTggMTc2QzQ4OC44NzMgMTc2IDQ5NS45OTggMTY4Ljg3NSA0OTUuOTk4IDE2MFM0ODguODczIDE0NCA0NzkuOTk4IDE0NFM0NjMuOTk4IDE1MS4xMjUgNDYzLjk5OCAxNjBTNDcxLjEyMyAxNzYgNDc5Ljk5OCAxNzZaTTMxOS45OTggMzA0QzMxMS4xMjMgMzA0IDMwMy45OTggMzExLjEyNSAzMDMuOTk4IDMyMFMzMTEuMTIzIDMzNiAzMTkuOTk4IDMzNlMzMzUuOTk4IDMyOC44NzUgMzM1Ljk5OCAzMjBTMzI4Ljg3MyAzMDQgMzE5Ljk5OCAzMDRaTTM5OS45OTggMjI0QzM5MS4xMjMgMjI0IDM4My45OTggMjMxLjEyNSAzODMuOTk4IDI0MFMzOTEuMTIzIDI1NiAzOTkuOTk4IDI1NlM0MTUuOTk4IDI0OC44NzUgNDE1Ljk5OCAyNDBTNDA4Ljg3MyAyMjQgMzk5Ljk5OCAyMjRaTTIzOS45OTggMzg0QzIzMS4xMjMgMzg0IDIyMy45OTggMzkxLjEyNSAyMjMuOTk4IDQwMFMyMzEuMTIzIDQxNiAyMzkuOTk4IDQxNlMyNTUuOTk4IDQwOC44NzUgMjU1Ljk5OCA0MDBTMjQ4Ljg3MyAzODQgMjM5Ljk5OCAzODRaTTQ3OS45OTggNDY0QzQ3MS4xMjMgNDY0IDQ2My45OTggNDcxLjEyNSA0NjMuOTk4IDQ4MFM0NzEuMTIzIDQ5NiA0NzkuOTk4IDQ5NlM0OTUuOTk4IDQ4OC44NzUgNDk1Ljk5OCA0ODBTNDg4Ljg3MyA0NjQgNDc5Ljk5OCA0NjRaTTM5OS45OTggMzg0QzM5MS4xMjMgMzg0IDM4My45OTggMzkxLjEyNSAzODMuOTk4IDQwMFMzOTEuMTIzIDQxNiAzOTkuOTk4IDQxNlM0MTUuOTk4IDQwOC44NzUgNDE1Ljk5OCA0MDBTNDA4Ljg3MyAzODQgMzk5Ljk5OCAzODRaTTMxOS45OTggNDY0QzMxMS4xMjMgNDY0IDMwMy45OTggNDcxLjEyNSAzMDMuOTk4IDQ4MFMzMTEuMTIzIDQ5NiAzMTkuOTk4IDQ5NlMzMzUuOTk4IDQ4OC44NzUgMzM1Ljk5OCA0ODBTMzI4Ljg3MyA0NjQgMzE5Ljk5OCA0NjRaTTQ3OS45OTggMzA0QzQ3MS4xMjMgMzA0IDQ2My45OTggMzExLjEyNSA0NjMuOTk4IDMyMFM0NzEuMTIzIDMzNiA0NzkuOTk4IDMzNlM0OTUuOTk4IDMyOC44NzUgNDk1Ljk5OCAzMjBTNDg4Ljg3MyAzMDQgNDc5Ljk5OCAzMDRaTTM5NC4xMDggMTI0LjM0NEwzNzUuMDE0IDE4Ljc1QzM3My42MzkgMTEuMDk0IDM2OC41MTQgNC43MzQgMzYxLjMxMSAxLjc1QzM1NC4xNyAtMS4yMTkgMzQ1Ljk5OCAtMC4zMjggMzM5LjU5MiA0LjA3OEwyNTUuOTk4IDYyLjA5NEwxNzIuMzg5IDQuMDk0QzE2Ni4wMTQgLTAuMzU5IDE1Ny45MiAtMS4yMTkgMTUwLjY4NiAxLjc1QzE0My40ODMgNC43MzQgMTM4LjM1OCAxMS4wNzggMTM2Ljk4MyAxOC43NUwxMTguODczIDExOC44NzVMMTguNzQ4IDEzNi45ODRDMTEuMDc2IDEzOC4zNTkgNC43MzMgMTQzLjQ4NCAxLjc0OCAxNTAuNjg4Uy0wLjM2MSAxNjYgNC4wNzYgMTcyLjM5MUw2Mi4wOTIgMjU2TDQuMDkyIDMzOS42MDlDLTAuMzYxIDM0NiAtMS4yMzYgMzU0LjEwOSAxLjc0OCAzNjEuMzEzUzExLjA3NiAzNzMuNjQxIDE4Ljc0OCAzNzUuMDE2TDEyNC4zNDIgMzk0LjEwOUMxMjQuODI2IDM5NC4xODggMTI1LjI5NSAzOTQuMjM0IDEyNS43OCAzOTQuMjM0QzEyOS41NjEgMzk0LjIzNCAxMzIuOTM2IDM5MS41MzEgMTMzLjYzOSAzODcuNjU2QzEzNC40MiAzODMuMzEzIDEzMS41MyAzNzkuMTQxIDEyNy4xODYgMzc4LjM1OUwyMS41OTIgMzU5LjI2NkMxOC4yOTUgMzU4LjY3MiAxNi45NTEgMzU2LjIxOSAxNi41MyAzNTUuMTg4UzE1LjMxMSAzNTEuNDg0IDE3LjIzMyAzNDguNzM0TDc4LjQwNSAyNjAuNTYzQzgwLjI5NSAyNTcuODEzIDgwLjI5NSAyNTQuMTg4IDc4LjQwNSAyNTEuNDM4TDE3LjIxNyAxNjMuMjY2QzE1LjMxMSAxNjAuNTE2IDE2LjEwOCAxNTcuODQ0IDE2LjUzIDE1Ni44MTJTMTguMjk1IDE1My4zMjggMjEuNTkyIDE1Mi43MzRMMTI3LjE4NiAxMzMuNjQxQzEzMC40NjcgMTMzLjA0NyAxMzMuMDQ1IDEzMC40NjkgMTMzLjYzOSAxMjcuMTg3TDE1Mi43MzMgMjEuNTk0QzE1My4zMjYgMTguMjk3IDE1NS43OCAxNi45NTMgMTU2LjgxMSAxNi41MzFDMTU3Ljg1OCAxNi4xMDkgMTYwLjU3NiAxNS4zNDQgMTYzLjI2NCAxNy4yMzRMMjUxLjQzNiA3OC40MDZDMjU0LjE4NiA4MC4zMTIgMjU3LjgxMSA4MC4zMTIgMjYwLjU2MSA3OC40MDZMMzQ4LjcxNyAxNy4yMzRDMzUxLjQ4MyAxNS4zMTIgMzU0LjE4NiAxNi4xMDkgMzU1LjE4NiAxNi41MzFDMzU2LjIxNyAxNi45NTMgMzU4LjY3IDE4LjI5NyAzNTkuMjY0IDIxLjU5NEwzNzguMzU4IDEyNy4xODdDMzc5LjE1NSAxMzEuNTYyIDM4My4zODkgMTM0LjM0NCAzODcuNjU1IDEzMy42NDFDMzkxLjk5OCAxMzIuODU5IDM5NC44ODkgMTI4LjY4OCAzOTQuMTA4IDEyNC4zNDRaTTI1NS45OTggMTQ0QzIyNi4wNzYgMTQ0IDE5Ny45NTEgMTU1LjY1NiAxNzYuNzk1IDE3Ni44MTJDMTMzLjEzOSAyMjAuNDY5IDEzMy4xMzkgMjkxLjUzMSAxNzYuNzk1IDMzNS4yMDNDMTc4LjM1OCAzMzYuNzY2IDE4MC40MDUgMzM3LjU0NyAxODIuNDUxIDMzNy41NDdTMTg2LjU0NSAzMzYuNzY2IDE4OC4xMDggMzM1LjIwM0MxOTEuMjMzIDMzMi4wNzggMTkxLjIzMyAzMjcuMDE2IDE4OC4xMDggMzIzLjg5MUMxNTAuNjg2IDI4Ni40NTMgMTUwLjY4NiAyMjUuNTQ3IDE4OC4xMDggMTg4LjEyNUMyMDYuMjQ4IDE2OS45ODQgMjMwLjM1OCAxNjAgMjU1Ljk5OCAxNjBTMzA1Ljc0OCAxNjkuOTg0IDMyMy44NzMgMTg4LjEyNUMzMjYuOTk4IDE5MS4yNSAzMzIuMDYxIDE5MS4yNSAzMzUuMTg2IDE4OC4xMjVTMzM4LjMxMSAxNzkuOTM3IDMzNS4xODYgMTc2LjgxMkMzMTQuMDMgMTU1LjY1NiAyODUuOTA1IDE0NCAyNTUuOTk4IDE0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SunDust(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M160.03 464C151.155 464 144.03 471.125 144.03 480S151.155 496 160.03 496S176.03 488.875 176.03 480S168.905 464 160.03 464ZM479.998 176C488.873 176 495.998 168.875 495.998 160S488.873 144 479.998 144S463.998 151.125 463.998 160S471.123 176 479.998 176ZM319.998 304C311.123 304 303.998 311.125 303.998 320S311.123 336 319.998 336S335.998 328.875 335.998 320S328.873 304 319.998 304ZM399.998 224C391.123 224 383.998 231.125 383.998 240S391.123 256 399.998 256S415.998 248.875 415.998 240S408.873 224 399.998 224ZM239.998 384C231.123 384 223.998 391.125 223.998 400S231.123 416 239.998 416S255.998 408.875 255.998 400S248.873 384 239.998 384ZM479.998 464C471.123 464 463.998 471.125 463.998 480S471.123 496 479.998 496S495.998 488.875 495.998 480S488.873 464 479.998 464ZM399.998 384C391.123 384 383.998 391.125 383.998 400S391.123 416 399.998 416S415.998 408.875 415.998 400S408.873 384 399.998 384ZM319.998 464C311.123 464 303.998 471.125 303.998 480S311.123 496 319.998 496S335.998 488.875 335.998 480S328.873 464 319.998 464ZM479.998 304C471.123 304 463.998 311.125 463.998 320S471.123 336 479.998 336S495.998 328.875 495.998 320S488.873 304 479.998 304ZM394.108 124.344L375.014 18.75C373.639 11.094 368.514 4.734 361.311 1.75C354.17 -1.219 345.998 -0.328 339.592 4.078L255.998 62.094L172.389 4.094C166.014 -0.359 157.92 -1.219 150.686 1.75C143.483 4.734 138.358 11.078 136.983 18.75L118.873 118.875L18.748 136.984C11.076 138.359 4.733 143.484 1.748 150.688S-0.361 166 4.076 172.391L62.092 256L4.092 339.609C-0.361 346 -1.236 354.109 1.748 361.313S11.076 373.641 18.748 375.016L124.342 394.109C124.826 394.188 125.295 394.234 125.78 394.234C129.561 394.234 132.936 391.531 133.639 387.656C134.42 383.313 131.53 379.141 127.186 378.359L21.592 359.266C18.295 358.672 16.951 356.219 16.53 355.188S15.311 351.484 17.233 348.734L78.405 260.563C80.295 257.813 80.295 254.188 78.405 251.438L17.217 163.266C15.311 160.516 16.108 157.844 16.53 156.812S18.295 153.328 21.592 152.734L127.186 133.641C130.467 133.047 133.045 130.469 133.639 127.187L152.733 21.594C153.326 18.297 155.78 16.953 156.811 16.531C157.858 16.109 160.576 15.344 163.264 17.234L251.436 78.406C254.186 80.312 257.811 80.312 260.561 78.406L348.717 17.234C351.483 15.312 354.186 16.109 355.186 16.531C356.217 16.953 358.67 18.297 359.264 21.594L378.358 127.187C379.155 131.562 383.389 134.344 387.655 133.641C391.998 132.859 394.889 128.688 394.108 124.344ZM255.998 144C226.076 144 197.951 155.656 176.795 176.812C133.139 220.469 133.139 291.531 176.795 335.203C178.358 336.766 180.405 337.547 182.451 337.547S186.545 336.766 188.108 335.203C191.233 332.078 191.233 327.016 188.108 323.891C150.686 286.453 150.686 225.547 188.108 188.125C206.248 169.984 230.358 160 255.998 160S305.748 169.984 323.873 188.125C326.998 191.25 332.061 191.25 335.186 188.125S338.311 179.937 335.186 176.812C314.03 155.656 285.905 144 255.998 144Z" />
        </Icon>
    </>
}