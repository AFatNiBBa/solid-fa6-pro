
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rupee-sign` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rupee-sign?s=thin rupee-sign}
 * @preview ![rupee-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjAgMzJINDBDMTcuOTM4IDMyIDAgNDkuOTM4IDAgNzJWNDcyQzAgNDc2LjQwNiAzLjU5NCA0ODAgOCA0ODBTMTYgNDc2LjQwNiAxNiA0NzJWMzA0SDEyMEMxMjMuMzY1IDMwNCAxMjYuNTIzIDMwMy4yNDggMTI5LjgyOCAzMDMuMDA2TDE4NC4zNzUgNDc0LjQzOEMxODUuNDY5IDQ3Ny44NDQgMTg4LjU5NCA0ODAgMTkyIDQ4MEMxOTIuODEyIDQ4MCAxOTMuNjI1IDQ3OS44NzUgMTk0LjQzOCA0NzkuNjI1QzE5OC42MjUgNDc4LjI4MSAyMDAuOTY5IDQ3My43ODEgMTk5LjYyNSA0NjkuNTYyTDE0Ni4xMDUgMzAxLjM2MUMyMDguNjM5IDI4OS4xNDEgMjU2IDIzNC4wNjEgMjU2IDE2OEMyNTYgOTMgMTk1IDMyIDEyMCAzMlpNMTIwIDI4OEgxNlY3MkMxNiA1OC43ODEgMjYuNzgxIDQ4IDQwIDQ4SDEyMEMxODYuMTU2IDQ4IDI0MCAxMDEuODQ0IDI0MCAxNjhTMTg2LjE1NiAyODggMTIwIDI4OFpNMzYyLjQwNSAzMjguMzEyTDM1MS45MDYgMzI0Ljg3NUMzMTIuMTU5IDMxMS42NTYgMjgyLjI4NyAyOTguMDkzIDI4OC45NDIgMjU0LjUzMUMyOTEuMTMgMjQwLjA5MyAyOTcuOTQyIDIyOC42ODcgMzA5LjEyOCAyMjAuNjU2QzMyNS41OTUgMjA4LjgxMiAzNTAuNSAyMDUuMTI0IDM3OC45OTcgMjEwLjE4N0MzODkuMjE1IDIxMS45OTkgNDAxLjMwOCAyMTUuNzE4IDQxNy4wODcgMjIxLjg3NEM0MjEuMDg3IDIyMy40OTkgNDI1LjgzNyAyMjEuNDY4IDQyNy40MyAyMTcuMzQzQzQyOS4wNTUgMjEzLjI0OSA0MjcuMDI0IDIwOC41OTMgNDIyLjg5OSAyMDYuOTk5QzQwNi4xNTEgMjAwLjQwNSAzOTMuMDkgMTk2LjQzNyAzODEuODA5IDE5NC40MzdDMzQ4LjkwNiAxODguNjI0IDMxOS44MTUgMTkzLjI4IDI5OS44MTYgMjA3LjY1NkMyODUuMTkzIDIxOC4xNTYgMjc1Ljk0NCAyMzMuNTMxIDI3My4xMzEgMjUyLjEyNEMyNjMuOTEzIDMxMi40NjggMzEzLjgxNSAzMjkuMDYyIDM0Ni44NDQgMzQwLjA2MkwzNTcuNDY4IDM0My41MzFDNDAwLjg3IDM1Ny41OTMgNDM4LjMzNiAzNjkuNzUgNDMxLjA1NSA0MTcuNDY5QzQyOC44NjggNDMxLjkwNiA0MjIuMDU2IDQ0My4zMTIgNDEwLjg2OSA0NTEuMzQ0QzM5NC4zMzkgNDYzLjE1NiAzNjkuNDk4IDQ2Ni44MTIgMzQwLjkzOCA0NjEuODEyQzMyNS4xNTggNDU5LjEyNSAzMDcuMDk3IDQ1MS43MTkgMjkxLjE2MSA0NDUuMjE5TDI4Mi45NzQgNDQxLjg3NUMyNzguOTQzIDQ0MC4zMTIgMjc0LjI1NiA0NDIuMjE5IDI3Mi41NjkgNDQ2LjM0NEMyNzAuOTQ0IDQ1MC40MzcgMjcyLjkxMyA0NTUuMDk0IDI3Ny4wMzcgNDU2Ljc1TDI4NS4xMyA0NjAuMDMxQzMwMS44MTYgNDY2Ljg0NCAzMjAuNzUyIDQ3NC41OTQgMzM4LjE4OCA0NzcuNTYzQzM0Ny40MDYgNDc5LjE4OCAzNTYuMzExIDQ4MCAzNjQuODExIDQ4MEMzODYuNjUzIDQ4MCA0MDUuNzc2IDQ3NC42ODggNDIwLjE4MSA0NjQuMzQ0QzQzNC44MDUgNDUzLjg0NCA0NDQuMDU0IDQzOC40NjkgNDQ2Ljg2NiA0MTkuODc1QzQ1Ni4xNzggMzU4LjcxOCA0MDYuMzcgMzQyLjU2MiAzNjIuNDA1IDMyOC4zMTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function RupeeSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M120 32H40C17.938 32 0 49.938 0 72V472C0 476.406 3.594 480 8 480S16 476.406 16 472V304H120C123.365 304 126.523 303.248 129.828 303.006L184.375 474.438C185.469 477.844 188.594 480 192 480C192.812 480 193.625 479.875 194.438 479.625C198.625 478.281 200.969 473.781 199.625 469.562L146.105 301.361C208.639 289.141 256 234.061 256 168C256 93 195 32 120 32ZM120 288H16V72C16 58.781 26.781 48 40 48H120C186.156 48 240 101.844 240 168S186.156 288 120 288ZM362.405 328.312L351.906 324.875C312.159 311.656 282.287 298.093 288.942 254.531C291.13 240.093 297.942 228.687 309.128 220.656C325.595 208.812 350.5 205.124 378.997 210.187C389.215 211.999 401.308 215.718 417.087 221.874C421.087 223.499 425.837 221.468 427.43 217.343C429.055 213.249 427.024 208.593 422.899 206.999C406.151 200.405 393.09 196.437 381.809 194.437C348.906 188.624 319.815 193.28 299.816 207.656C285.193 218.156 275.944 233.531 273.131 252.124C263.913 312.468 313.815 329.062 346.844 340.062L357.468 343.531C400.87 357.593 438.336 369.75 431.055 417.469C428.868 431.906 422.056 443.312 410.869 451.344C394.339 463.156 369.498 466.812 340.938 461.812C325.158 459.125 307.097 451.719 291.161 445.219L282.974 441.875C278.943 440.312 274.256 442.219 272.569 446.344C270.944 450.437 272.913 455.094 277.037 456.75L285.13 460.031C301.816 466.844 320.752 474.594 338.188 477.563C347.406 479.188 356.311 480 364.811 480C386.653 480 405.776 474.688 420.181 464.344C434.805 453.844 444.054 438.469 446.866 419.875C456.178 358.718 406.37 342.562 362.405 328.312Z" />
        </Icon>
    </>
}