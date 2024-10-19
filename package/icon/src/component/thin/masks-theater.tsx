
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `masks-theater` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/masks-theater?s=thin masks-theater}
 * @preview ![masks-theater](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQuODQ0IDQzMS4xNjhDMTYwLjc1MiA0MjQuMjYyIDU5Ljg0NiAzNzAuMzIyIDQ3LjY1OSAzMDEuNTIxTDE2Ljg3NyAxMjguNTE0QzEyLjcyMSAxMDQuNjg2IDIzLjY1OSA4MS4xMzcgNDQuMTI3IDY5LjkwMkMxMjguMTkgMjMuNDYzIDIyNi44NzUgNi4xOTUgMzIyLjA2MyAyMS4yOTFDMzMzLjc4MiAyMy4xMzUgMzQ0LjQwNyAyOC43MjkgMzUyLjgxMyAzNy40MzJDMzU1Ljg3NSA0MC42NSAzNjAuOTM4IDQwLjY5NyAzNjQuMTI1IDM3LjY1QzM2Ny4yODIgMzQuNTcyIDM2Ny4zNzUgMjkuNTEgMzY0LjMxMyAyNi4zMzhDMzUzLjQ2OSAxNS4wODggMzM5Ljc1IDcuODgzIDMyNC41NjMgNS40NzdDMjI1Ljg3NSAtMTAuMDg2IDEyMy41NjUgNy43NTggMzYuNDA5IDU1Ljg4N0M5Ljk0IDcwLjQwMiAtNC4yNDggMTAwLjcwMSAxLjEyNyAxMzEuMjk1TDMxLjkwOSAzMDQuMzE4QzQ1LjU5NiAzODEuNDYzIDE1Mi41MDIgNDM5LjQ2NSAyMjMuMTU3IDQ0Ny4wNzRDMjIzLjQzOCA0NDcuMTA1IDIyMy43MTkgNDQ3LjEyMSAyMjQgNDQ3LjEyMUMyMjguMDMyIDQ0Ny4xMjEgMjMxLjUgNDQ0LjA3NCAyMzEuOTY5IDQzOS45OEMyMzIuNDM4IDQzNS41OSAyMjkuMjUgNDMxLjYzNyAyMjQuODQ0IDQzMS4xNjhaTTMyNi42MjUgMjE3LjU4QzMzMS4xMjUgMjE4LjUwMiAzMzUuMTI1IDIxNS40MjQgMzM1Ljg3NSAyMTEuMDhDMzM3LjQwNyAyMDIuMjk5IDM0Mi4yNSAxOTQuNjg5IDM0OS40MzggMTg5LjY1OEMzNTYuNDM4IDE4NC43NjYgMzY0Ljg0NCAxODIuODc1IDM3My4zMTMgMTg0LjQyMkMzOTAuODc1IDE4Ny41OTQgNDAyLjYyNSAyMDQuNjg5IDM5OS41IDIyMi41MzNDMzk4LjcxOSAyMjYuODc3IDQwMS42NTcgMjMxLjAxOCA0MDYgMjMxLjc4M0M0MDYuNDY5IDIzMS44NzcgNDA2LjkzOCAyMzEuOTA4IDQwNy4zNzUgMjMxLjkwOEM0MTEuMTg4IDIzMS45MDggNDE0LjU2MyAyMjkuMTc0IDQxNS4yNSAyMjUuMjgzQzQxOS45MDcgMTk4LjgxNCA0MDIuMzc1IDE3My40MjIgMzc2LjE4OCAxNjguNjcyQzM2My40NjkgMTY2LjQyMiAzNTAuODEzIDE2OS4xODcgMzQwLjMxMyAxNzYuNTMxQzMyOS41NjMgMTg0LjAxNiAzMjIuNDA3IDE5NS4zMTQgMzIwLjEyNSAyMDguMzNDMzE5LjM0NCAyMTIuNjc0IDMyMi4yODIgMjE2LjgxNCAzMjYuNjI1IDIxNy41OFpNMTUyLjE5IDE5MS4xNDNDMTc4LjM3NyAxODYuMzkxIDE5NS45MDcgMTYxIDE5MS4yNSAxMzQuNTI5QzE5MC40NjkgMTMwLjE4NiAxODYuNDM4IDEyNy4wOTIgMTgyLjAwMiAxMjguMDI5QzE3Ny42NTkgMTI4Ljc5NSAxNzQuNzIxIDEzMi45MzYgMTc1LjUwMiAxMzcuMjc5QzE3OC42MjcgMTU1LjEyNSAxNjYuODc3IDE3Mi4yMTkgMTQ5LjMxNSAxNzUuMzkxQzE0MC45NCAxNzYuODkxIDEzMi40NCAxNzUuMDMxIDEyNS40NCAxNzAuMTU2QzExOC4yNTIgMTY1LjEyNSAxMTMuNDA5IDE1Ny41MTYgMTExLjg3NyAxNDguNzM0QzExMS4wOTYgMTQ0LjM5MSAxMDcuMDY1IDE0MS4yMDEgMTAyLjYyNyAxNDIuMjMyQzk4LjI4NCAxNDIuOTk4IDk1LjM0NiAxNDcuMTQxIDk2LjEyNyAxNTEuNDg0Qzk4LjQwOSAxNjQuNSAxMDUuNTY1IDE3NS43OTcgMTE2LjMxNSAxODMuMjgxQzEyNC40NCAxODguOTU1IDEzMy45MDkgMTkxLjkwOCAxNDMuNTk2IDE5MS45MDhDMTQ2LjQ0IDE5MS45MDggMTQ5LjMxNSAxOTEuNjU4IDE1Mi4xOSAxOTEuMTQzWk0xNDQuMDAyIDMxOS45MTJDMTQ2LjMxNSAzMTkuOTEyIDE0OC41OTYgMzE4LjkyOCAxNTAuMTU5IDMxNy4wMDZDMTYwLjM3NyAzMDQuNjYyIDE3Ni4yMjEgMjk0LjE2MiAxOTQuNzE5IDI4Ny40MjhDMTk4Ljg3NSAyODUuOTI4IDIwMS4wMzIgMjgxLjMzNCAxOTkuNTMyIDI3Ny4xNzZDMTk4LjAzMiAyNzMuMDM1IDE5My4zMTMgMjcwLjg5NSAxODkuMjgyIDI3Mi4zOTVDMTY4LjA5NiAyODAuMDg0IDE0OS44NDYgMjkyLjMwMyAxMzcuODQ2IDMwNi44MThDMTM1LjAzNCAzMTAuMjA5IDEzNS41MDIgMzE1LjI1NiAxMzguOTA5IDMxOC4wNjhDMTQwLjQwOSAzMTkuMzAzIDE0Mi4xOSAzMTkuOTEyIDE0NC4wMDIgMzE5LjkxMlpNNTE1Ljg3MyAzMzMuNDNDNDg4LjQzNiAzNDkuODk4IDQ1MC40MzggMzU1LjQ0NSA0MTEuNDY5IDM0OC42NDhDMzcyLjUzMiAzNDEuODIgMzM4LjY1NyAzMjMuNjggMzE4LjU2MyAyOTguODgxQzMxNi41IDI5Ni4zNSAzMTMuMTI1IDI5NS4yMjUgMzEwIDI5Ni4yNzFDMzA2Ljg3NSAyOTcuMjI1IDMwNC42NTcgMjk5Ljk5IDMwNC4zNzUgMzAzLjI0QzI5OS41NjMgMzYwLjcyNyAzMzkuOTY5IDQxMS44NCAzOTguNDA3IDQyMi4xNTJDNDA1LjMxMyA0MjMuMzU1IDQxMi4xNTcgNDIzLjkzNCA0MTguOTA3IDQyMy45MzRDNDY5LjQzNiA0MjMuOTM0IDUxNC4yOCAzOTEuNDYzIDUyNy43MTcgMzQyLjM5OEM1MjguNTkyIDMzOS4yNDIgNTI3LjQzNiAzMzUuODgzIDUyNC44NDIgMzMzLjkxNEM1MjIuMTU1IDMzMS45MTQgNTE4LjY1NSAzMzEuNzI3IDUxNS44NzMgMzMzLjQzWk00MDEuMTU3IDQwNi40QzM1Ny43MTkgMzk4LjcxMyAzMjUuODQ0IDM2NC45MyAzMjAuNzE5IDMyNC4xMTdDMzQzLjIxOSAzNDQuMDIzIDM3NC4yNSAzNTguMzY3IDQwOC43MTkgMzY0LjM5OEM0NDMuMTI1IDM3MC40NzkgNDc3LjE1NSAzNjcuNTEgNTA1LjE1NSAzNTYuNDYxQzQ4Ni4yNDggMzkzLjA3MiA0NDQuNDA3IDQxMy45OCA0MDEuMTU3IDQwNi40Wk02MDMuNjIzIDExOS45MDRDNTE2LjQzNiA3MS43NjIgNDE0LjE1NyA1My45MzIgMzE1LjQzOCA2OS40OEMyODUuNTMyIDc0LjIxNSAyNjEuNzUgOTcuODg3IDI1Ni4zMTMgMTI4LjM4OUwyMjUuNTMyIDMwMS40MjhDMjE3LjkzOCAzNDQuMjU4IDIzOS41OTQgMzg2LjQxNiAyNTkuMTI1IDQxNC4yNjJDMjkzLjU2MyA0NjMuMzQyIDM0Ni43NSA1MDMuODU5IDM4NS42MjUgNTEwLjU5NEMzOTEgNTExLjU0NyAzOTYuNzgyIDUxMiA0MDIuOTM4IDUxMkM0NzUuMTIzIDUxMiA1OTMuODExIDQ0OC43MTUgNjA4LjA5MiAzNjguMzM4TDYzOC44NzMgMTk1LjI2OEM2NDQuMjQ4IDE2NC43MDMgNjMwLjA2MSAxMzQuNDIgNjAzLjYyMyAxMTkuOTA0Wk02MjMuMTIzIDE5Mi40ODZMNTkyLjM0MiAzNjUuNTM5QzU3OC4xODYgNDQ1LjI2MiA0NDMuNTYzIDUwNC40ODQgMzg4LjM3NSA0OTQuODQyQzM1My44NDQgNDg4Ljg1NyAzMDMuOTM4IDQ1MC4yNjIgMjcyLjIxOSA0MDUuMDcyQzI0Ny4wOTQgMzY5LjIyOSAyMzYuMDk0IDMzMy40MTQgMjQxLjI4MiAzMDQuMjI1TDI3Mi4wNjMgMTMxLjIwMUMyNzYuMzEzIDEwNy40MDQgMjk0Ljc1IDg4Ljk2NSAzMTcuOTM4IDg1LjI5M0MzNDAuMzc1IDgxLjczIDM2MyA3OS45OCAzODUuNTk0IDc5Ljk4QzQ1OC44MTEgNzkuOTggNTMxLjYyMyA5OC40MzQgNTk1Ljg3MyAxMzMuOTA0TDU5NS45MDUgMTMzLjkyQzYxNi4zNDIgMTQ1LjE0MSA2MjcuMjggMTY4LjY4OCA2MjMuMTIzIDE5Mi40ODZaTTUwNC4xODYgMTkyLjY3NEM0OTEuNDY3IDE5MC4zNzcgNDc4LjgxMSAxOTMuMjA1IDQ2OC4zMTEgMjAwLjUzM0M0NTcuNTYxIDIwOC4wMTggNDUwLjQwNyAyMTkuMzE0IDQ0OC4xMjUgMjMyLjMzQzQ0Ny4zNDQgMjM2LjY3NiA0NTAuMjgyIDI0MC44MTYgNDU0LjYyNSAyNDEuNTgyQzQ1OS4yMTcgMjQyLjQ4OCA0NjMuMDkyIDIzOS40MjYgNDYzLjg3MyAyMzUuMDgyQzQ2NS40MDUgMjI2LjI5OSA0NzAuMjQ4IDIxOC42ODkgNDc3LjQzNiAyMTMuNjU4QzQ4NC40NjcgMjA4Ljc5OSA0OTIuODQyIDIwNi44NzcgNTAxLjMxMSAyMDguNDI0QzUxOC44NzMgMjExLjU5NiA1MzAuNjIzIDIyOC42ODkgNTI3LjQ5OCAyNDYuNTM1QzUyNi43MTcgMjUwLjg3OSA1MjkuNjU1IDI1NS4wMiA1MzMuOTk4IDI1NS43ODVDNTM0LjQ2NyAyNTUuODc5IDUzNC45MzYgMjU1LjkxIDUzNS4zNzMgMjU1LjkxQzUzOS4xODYgMjU1LjkxIDU0Mi41NjEgMjUzLjE3NiA1NDMuMjQ4IDI0OS4yODVDNTQ3LjkwNSAyMjIuODE0IDUzMC4zNzMgMTk3LjQyNCA1MDQuMTg2IDE5Mi42NzRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function MasksTheater(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M224.844 431.168C160.752 424.262 59.846 370.322 47.659 301.521L16.877 128.514C12.721 104.686 23.659 81.137 44.127 69.902C128.19 23.463 226.875 6.195 322.063 21.291C333.782 23.135 344.407 28.729 352.813 37.432C355.875 40.65 360.938 40.697 364.125 37.65C367.282 34.572 367.375 29.51 364.313 26.338C353.469 15.088 339.75 7.883 324.563 5.477C225.875 -10.086 123.565 7.758 36.409 55.887C9.94 70.402 -4.248 100.701 1.127 131.295L31.909 304.318C45.596 381.463 152.502 439.465 223.157 447.074C223.438 447.105 223.719 447.121 224 447.121C228.032 447.121 231.5 444.074 231.969 439.98C232.438 435.59 229.25 431.637 224.844 431.168ZM326.625 217.58C331.125 218.502 335.125 215.424 335.875 211.08C337.407 202.299 342.25 194.689 349.438 189.658C356.438 184.766 364.844 182.875 373.313 184.422C390.875 187.594 402.625 204.689 399.5 222.533C398.719 226.877 401.657 231.018 406 231.783C406.469 231.877 406.938 231.908 407.375 231.908C411.188 231.908 414.563 229.174 415.25 225.283C419.907 198.814 402.375 173.422 376.188 168.672C363.469 166.422 350.813 169.187 340.313 176.531C329.563 184.016 322.407 195.314 320.125 208.33C319.344 212.674 322.282 216.814 326.625 217.58ZM152.19 191.143C178.377 186.391 195.907 161 191.25 134.529C190.469 130.186 186.438 127.092 182.002 128.029C177.659 128.795 174.721 132.936 175.502 137.279C178.627 155.125 166.877 172.219 149.315 175.391C140.94 176.891 132.44 175.031 125.44 170.156C118.252 165.125 113.409 157.516 111.877 148.734C111.096 144.391 107.065 141.201 102.627 142.232C98.284 142.998 95.346 147.141 96.127 151.484C98.409 164.5 105.565 175.797 116.315 183.281C124.44 188.955 133.909 191.908 143.596 191.908C146.44 191.908 149.315 191.658 152.19 191.143ZM144.002 319.912C146.315 319.912 148.596 318.928 150.159 317.006C160.377 304.662 176.221 294.162 194.719 287.428C198.875 285.928 201.032 281.334 199.532 277.176C198.032 273.035 193.313 270.895 189.282 272.395C168.096 280.084 149.846 292.303 137.846 306.818C135.034 310.209 135.502 315.256 138.909 318.068C140.409 319.303 142.19 319.912 144.002 319.912ZM515.873 333.43C488.436 349.898 450.438 355.445 411.469 348.648C372.532 341.82 338.657 323.68 318.563 298.881C316.5 296.35 313.125 295.225 310 296.271C306.875 297.225 304.657 299.99 304.375 303.24C299.563 360.727 339.969 411.84 398.407 422.152C405.313 423.355 412.157 423.934 418.907 423.934C469.436 423.934 514.28 391.463 527.717 342.398C528.592 339.242 527.436 335.883 524.842 333.914C522.155 331.914 518.655 331.727 515.873 333.43ZM401.157 406.4C357.719 398.713 325.844 364.93 320.719 324.117C343.219 344.023 374.25 358.367 408.719 364.398C443.125 370.479 477.155 367.51 505.155 356.461C486.248 393.072 444.407 413.98 401.157 406.4ZM603.623 119.904C516.436 71.762 414.157 53.932 315.438 69.48C285.532 74.215 261.75 97.887 256.313 128.389L225.532 301.428C217.938 344.258 239.594 386.416 259.125 414.262C293.563 463.342 346.75 503.859 385.625 510.594C391 511.547 396.782 512 402.938 512C475.123 512 593.811 448.715 608.092 368.338L638.873 195.268C644.248 164.703 630.061 134.42 603.623 119.904ZM623.123 192.486L592.342 365.539C578.186 445.262 443.563 504.484 388.375 494.842C353.844 488.857 303.938 450.262 272.219 405.072C247.094 369.229 236.094 333.414 241.282 304.225L272.063 131.201C276.313 107.404 294.75 88.965 317.938 85.293C340.375 81.73 363 79.98 385.594 79.98C458.811 79.98 531.623 98.434 595.873 133.904L595.905 133.92C616.342 145.141 627.28 168.688 623.123 192.486ZM504.186 192.674C491.467 190.377 478.811 193.205 468.311 200.533C457.561 208.018 450.407 219.314 448.125 232.33C447.344 236.676 450.282 240.816 454.625 241.582C459.217 242.488 463.092 239.426 463.873 235.082C465.405 226.299 470.248 218.689 477.436 213.658C484.467 208.799 492.842 206.877 501.311 208.424C518.873 211.596 530.623 228.689 527.498 246.535C526.717 250.879 529.655 255.02 533.998 255.785C534.467 255.879 534.936 255.91 535.373 255.91C539.186 255.91 542.561 253.176 543.248 249.285C547.905 222.814 530.373 197.424 504.186 192.674Z" />
        </Icon>
    </>
}