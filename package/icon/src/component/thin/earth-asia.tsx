
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `earth-asia` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/earth-asia?s=thin earth-asia}
 * @preview ![earth-asia](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ2MSAxNiAxNiAxMjMuNDE4IDE2IDI1NlMxMjMuNDYxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTgyIDQ5NiAyNTZTMzg4LjUzOSAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NiA0ODAgMzIgMzc5LjUxNiAzMiAyNTZTMTMyLjQ4NiAzMiAyNTYgMzJTNDgwIDEzMi40ODQgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwWk0yNzYuOTUzIDIzMkgyNzkuOTY5QzI4OC43OTcgMjMyIDI5NS45NjkgMjI0LjgxMiAyOTUuOTY5IDIxNlYxMzcuODc1QzI5NS45NjkgMTI4Ljc1IDI5MC43MTkgMTIwLjMxMyAyODIuNzY2IDExNi41TDI3Mi4zNzUgMTEwLjcxOUwzMTQuNzUgNzguMTg3QzMxOC4yNSA3NS41IDMxOC45MDYgNzAuNDY5IDMxNi4yMTkgNjYuOTY5QzMxMy41MTYgNjMuNDA2IDMwOC40NjkgNjIuNzgxIDMwNSA2NS41TDI2My4wNzggOTcuNzE5QzI1OC4zMTIgMTAwLjg3NSAyNTUuNTk0IDEwNi4zNzUgMjU1Ljk1MyAxMTIuMDYyQzI1Ni4zMTMgMTE3Ljc4MSAyNTkuNjI1IDEyMi43NSAyNjQuNzAzIDEyNS4yNUwyNzUuNjU2IDEzMC44NDRDMjc4LjI4MSAxMzIuMDk0IDI3OS45NjkgMTM0Ljg0NCAyNzkuOTY5IDEzNy44NzVWMjE2TDI3Ni45NTMgMjE2LjAzMUMyNzQuOTA2IDIxMS45MzggMjcwLjc5NyAyMDkuMzEzIDI2Ni4yNjYgMjA5LjE1NkMyNjEuNzM0IDIwOCAyNTcuNTYyIDIxMS4yODEgMjU1LjIwMyAyMTUuMTI1TDIzNy43OTcgMjQ0LjA2MkMyMzYuMzEyIDI0Ni41IDIzMy42ODggMjQ4IDIzMC41NjIgMjQ4QzIyNC4yODEgMjQ4IDIxOC4yODEgMjUwLjUgMjEzLjY4NyAyNTUuMDYyTDIwNy44NzUgMjYwLjgxMkMyMDEuNzk3IDI2Ny4wOTQgMjAxLjc5NyAyNzYuOTA2IDIwNy45MzggMjgzLjI1TDIxMy42ODggMjg5LjA2MkMyMTUuMjAzIDI5MC41NjIgMjE2LjAzMSAyOTIuNTMxIDIxNi4wMzEgMjk0LjYyNVYzMDRDMjE2LjAzMSAzMDguNDA2IDIxMi40NTMgMzEyIDIwOC4wNDcgMzEySDIwMS44NzVDMTk4Ljc5NyAzMTIgMTk2LjA3OCAzMTAuMzEyIDE5NC43MzQgMzA3LjUzMUwxNzIuMTA5IDI2Mi4zMTJDMTY5LjgyOCAyNTcuNzUgMTY1LjQ2OSAyNTQuNTMxIDE2MC40MjIgMjUzLjcxOUMxNTUuMzc1IDI1Mi44NDQgMTUwLjA5NCAyNTQuNTk0IDE0Ni40MzggMjU4LjIxOUwxMjcuMDc4IDI3Ny41OTRDMTI1LjUzMSAyNzkuMTI1IDEyMy40MzggMjgwIDEyMS4zNDQgMjgwSDY2Ljg5MUM2Mi40NjkgMjgwIDU4Ljg5MSAyODMuNTk0IDU4Ljg5MSAyODhTNjIuNDY5IDI5NiA2Ni44OTEgMjk2SDEyMS4zNDRDMTI3LjY0MSAyOTYgMTMzLjg0NCAyOTMuNDA2IDEzOC4zNzUgMjg4LjkwNkwxNTcuNzgxIDI2OS40NjlMMTgwLjM3NSAzMTQuNjI1QzE4NC4zOTEgMzIyLjg3NSAxOTIuNjI1IDMyOCAyMDEuODc1IDMyOEgyMDguMDQ3QzIyMS4yNjYgMzI4IDIzMi4wMzEgMzE3LjIxOSAyMzIuMDMxIDMwNFYyOTQuNjI1QzIzMi4wMzEgMjg4LjIxOSAyMjkuNTE2IDI4Mi4yMTkgMjI1IDI3Ny43NUwyMTkuMjUgMjcyLjA2MkwyMjQuOTM4IDI2Ni40MzhDMjI2LjUzMSAyNjQuODc1IDIyOC41MzEgMjY0IDIzMC45MzggMjY0QzIzOS4yMTkgMjY0IDI0Ny4wNzggMjU5LjU2MiAyNTEuNDg0IDI1Mi4zNzVMMjY2LjIxOSAyMjcuODQ0QzI2OS4xMjUgMjMwLjQ2OSAyNzIuOTUzIDIzMiAyNzYuOTUzIDIzMlpNNDE2LjkwNiAzMTYuODQ0TDQwNS4wNzggMzA1VjI5MkM0MDUuMDc4IDI4NS4zNzUgMzk5LjY4OCAyODAgMzkzLjA3OCAyODBIMzg3LjAzMUMzODEuNjg4IDI4MCAzNzYuOTM4IDI4My41NjIgMzc1LjQ4NCAyODguNjI1TDM3Mi44NzUgMjk3LjVMMzY5LjYyNSAyODkuNzVDMzY3IDI4My44NDQgMzYxLjIzNCAyODAgMzU0LjkzOCAyODBIMzQyLjgyOEMzMzkuNTE2IDI4MCAzMzYuNDA2IDI4MC45NjkgMzMzLjQzOCAyODNMMzA5LjkzOCAyOTkuNzgxQzMwOC41NDcgMzAwLjc1IDMwNy4zNTkgMzAxLjM3NSAzMDUuODEzIDMwMS45MzhMMjY2LjYwOSAzMTcuNjg4QzI2MC40NTMgMzIwLjEyNSAyNTYuNDY5IDMyNiAyNTYuNDY5IDMzMi42MjVWMzQyLjc1QzI1Ni40NjkgMzQ2LjkzOCAyNTguMTQxIDM1MS4wNjIgMjYxLjE1NiAzNTQuMTg4TDI3My4wMTYgMzY1LjkzOEMyNzcuMzU5IDM3MC40MzggMjgzLjU2MyAzNzMgMjkwLjAzMSAzNzNIMzAwLjMxM0MzMDIuMTU2IDM3MyAzMDMuOTY5IDM3Mi44NDQgMzA2LjI4MSAzNzIuMzc1TDMyNy4zOTEgMzY3LjAzMUMzMzMuOTIyIDM2NS40NjkgMzQwLjU5NCAzNjcuMjUgMzQ1LjI5NyAzNzEuOTM4TDM1OC4yNjYgMzg0LjgxM0MzNjIuNjg4IDM4OS4zNzUgMzY4Ljg5MSAzOTIgMzc1LjI4MSAzOTJIMzkwLjQwNkMzOTYuNjg4IDM5MiA0MDIuODkxIDM4OS40MzggNDA3LjQzOCAzODQuOTM4TDQxMi45MzggMzc5LjQ2OUM0MTMuMTcyIDM3OS4yMTkgNDEzLjk2OSAzNzguMjUgNDE0LjE3MiAzNzcuOTY5QzQxNi43MDMgMzc0LjcxOSA0MTkuMjUgMzcxLjQ2OSA0MjEuNTYyIDM2OC4wNjNDNDIxLjk1MyAzNjcuNDY5IDQyMi4yNjYgMzY2Ljg0NCA0MjIuNDg0IDM2Ni4xODhDNDIzLjUgMzYzLjMxMiA0MjMuOTY5IDM2MC44MTIgNDIzLjk2OSAzNTguMzc1VjMzMy44NzVDNDIzLjk2OSAzMjcuNSA0MjEuMzkxIDMyMS4zMTIgNDE2LjkwNiAzMTYuODQ0Wk00MDcuOTY5IDM1OC4zNzVDNDA3Ljk2OSAzNTguNzgxIDQwNy44NzUgMzU5LjMxMyA0MDcuNjg3IDM2MEM0MDUuNzM0IDM2Mi43ODEgNDAzLjY0MSAzNjUuNDY5IDQwMS41NjIgMzY4LjEyNUM0MDEuNTYyIDM2OC4xMjUgNDAxLjQzOCAzNjguMjgxIDQwMS4yOTcgMzY4LjQ2OUwzOTYuMTcyIDM3My41NjJDMzk0LjYwOSAzNzUuMTI1IDM5Mi41IDM3NiAzOTAuNDA2IDM3NkgzNzUuMjgxQzM3My4yMzQgMzc2IDM3MS4xNzIgMzc1LjEyNSAzNjkuNjU2IDM3My41NjJMMzU2LjU3OCAzNjAuNTk0QzM0OS45NjkgMzU0IDM0MS4yMTkgMzUwLjQ2OSAzMzIuMDk0IDM1MC40NjlDMzI5LjI2NiAzNTAuNDY5IDMyNi4zOTEgMzUwLjgxMyAzMjMuNTMxIDM1MS41TDMwMi44MjggMzU2Ljc1QzMwMiAzNTYuOTA2IDMwMS4xNTYgMzU3IDMwMC4zMTMgMzU3SDI5MC4wMzFDMjg3Ljg3NSAzNTcgMjg1Ljg1OSAzNTYuMTg4IDI4NC4zOTEgMzU0LjY4OEwyNzIuNDY5IDM0Mi43NUwyNzIuNTQ3IDMzMi41NjNMMzExLjUzMSAzMTYuOTA2QzMxNC4xMjUgMzE1LjkzOCAzMTYuNSAzMTQuNjg4IDMxOS4xNDEgMzEyLjg3NUwzNDIuODI4IDI5NkwzNTQuOTM4IDI5Ni4wOTRMMzYwLjIxOSAzMDguNjg4QzM2MiAzMTMuMjE5IDM2Ni40NTMgMzE2LjI1IDM3MS4yODEgMzE2LjI1SDM3NS4xNTZDMzgwLjQ4NCAzMTYuMjUgMzg1LjE4OCAzMTIuNjU2IDM4Ni41NzggMzA3LjYyNUwzODkuMDc4IDI5OS4xMjVWMzA1QzM4OS4wNzggMzA5LjE4OCAzOTAuNjg4IDMxMy4xNTYgMzkzLjcxOSAzMTYuMjgxTDQwNS42MDkgMzI4LjE1NkM0MDcuMTA5IDMyOS42NTYgNDA3Ljk2OSAzMzEuNzUgNDA3Ljk2OSAzMzMuODc1VjM1OC4zNzVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function EarthAsia(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.461 16 16 123.418 16 256S123.461 496 256 496S496 388.582 496 256S388.539 16 256 16ZM256 480C132.486 480 32 379.516 32 256S132.486 32 256 32S480 132.484 480 256S379.514 480 256 480ZM276.953 232H279.969C288.797 232 295.969 224.812 295.969 216V137.875C295.969 128.75 290.719 120.313 282.766 116.5L272.375 110.719L314.75 78.187C318.25 75.5 318.906 70.469 316.219 66.969C313.516 63.406 308.469 62.781 305 65.5L263.078 97.719C258.312 100.875 255.594 106.375 255.953 112.062C256.313 117.781 259.625 122.75 264.703 125.25L275.656 130.844C278.281 132.094 279.969 134.844 279.969 137.875V216L276.953 216.031C274.906 211.938 270.797 209.313 266.266 209.156C261.734 208 257.562 211.281 255.203 215.125L237.797 244.062C236.312 246.5 233.688 248 230.562 248C224.281 248 218.281 250.5 213.687 255.062L207.875 260.812C201.797 267.094 201.797 276.906 207.938 283.25L213.688 289.062C215.203 290.562 216.031 292.531 216.031 294.625V304C216.031 308.406 212.453 312 208.047 312H201.875C198.797 312 196.078 310.312 194.734 307.531L172.109 262.312C169.828 257.75 165.469 254.531 160.422 253.719C155.375 252.844 150.094 254.594 146.438 258.219L127.078 277.594C125.531 279.125 123.438 280 121.344 280H66.891C62.469 280 58.891 283.594 58.891 288S62.469 296 66.891 296H121.344C127.641 296 133.844 293.406 138.375 288.906L157.781 269.469L180.375 314.625C184.391 322.875 192.625 328 201.875 328H208.047C221.266 328 232.031 317.219 232.031 304V294.625C232.031 288.219 229.516 282.219 225 277.75L219.25 272.062L224.938 266.438C226.531 264.875 228.531 264 230.938 264C239.219 264 247.078 259.562 251.484 252.375L266.219 227.844C269.125 230.469 272.953 232 276.953 232ZM416.906 316.844L405.078 305V292C405.078 285.375 399.688 280 393.078 280H387.031C381.688 280 376.938 283.562 375.484 288.625L372.875 297.5L369.625 289.75C367 283.844 361.234 280 354.938 280H342.828C339.516 280 336.406 280.969 333.438 283L309.938 299.781C308.547 300.75 307.359 301.375 305.813 301.938L266.609 317.688C260.453 320.125 256.469 326 256.469 332.625V342.75C256.469 346.938 258.141 351.062 261.156 354.188L273.016 365.938C277.359 370.438 283.563 373 290.031 373H300.313C302.156 373 303.969 372.844 306.281 372.375L327.391 367.031C333.922 365.469 340.594 367.25 345.297 371.938L358.266 384.813C362.688 389.375 368.891 392 375.281 392H390.406C396.688 392 402.891 389.438 407.438 384.938L412.938 379.469C413.172 379.219 413.969 378.25 414.172 377.969C416.703 374.719 419.25 371.469 421.562 368.063C421.953 367.469 422.266 366.844 422.484 366.188C423.5 363.312 423.969 360.812 423.969 358.375V333.875C423.969 327.5 421.391 321.312 416.906 316.844ZM407.969 358.375C407.969 358.781 407.875 359.313 407.687 360C405.734 362.781 403.641 365.469 401.562 368.125C401.562 368.125 401.438 368.281 401.297 368.469L396.172 373.562C394.609 375.125 392.5 376 390.406 376H375.281C373.234 376 371.172 375.125 369.656 373.562L356.578 360.594C349.969 354 341.219 350.469 332.094 350.469C329.266 350.469 326.391 350.813 323.531 351.5L302.828 356.75C302 356.906 301.156 357 300.313 357H290.031C287.875 357 285.859 356.188 284.391 354.688L272.469 342.75L272.547 332.563L311.531 316.906C314.125 315.938 316.5 314.688 319.141 312.875L342.828 296L354.938 296.094L360.219 308.688C362 313.219 366.453 316.25 371.281 316.25H375.156C380.484 316.25 385.188 312.656 386.578 307.625L389.078 299.125V305C389.078 309.188 390.688 313.156 393.719 316.281L405.609 328.156C407.109 329.656 407.969 331.75 407.969 333.875V358.375Z" />
        </Icon>
    </>
}