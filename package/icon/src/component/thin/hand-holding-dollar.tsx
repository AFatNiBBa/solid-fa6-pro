
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-holding-dollar` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-dollar?s=thin hand-holding-dollar}
 * @preview ![hand-holding-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjYuNjIxIDMyMy41NjJDNTU4Ljk4IDMxMy4xODcgNTQ3Ljc3NyAzMDYuNDM4IDUzNS4wNzQgMzA0LjUzMUM1MjIuMzExIDMwMi41MzEgNTA5Ljc2NCAzMDUuNzgxIDQ5OS40OTggMzEzLjQwNkwzODEuOTU1IDQwMEgyNjMuOTc1QzI1OS42MzEgNDAwIDI1NS45NzUgMzk2LjM0NCAyNTUuOTc1IDM5Mi4wMzFDMjU1Ljk3NSAzODcuNjg4IDI1OS42MzEgMzg0LjAzMSAyNjMuOTc1IDM4NC4wMzFIMzQyLjIwN0MzNjIuNTY2IDM4NC4wMzEgMzgwLjI5OSAzNjkuNzE5IDM4My40NzEgMzUwLjY4OEMzODUuMzc3IDMzOC45NjkgMzgyLjExMSAzMjcuMDk0IDM3NC40ODYgMzE4LjE1NkMzNjYuODYxIDMwOS4xODggMzU1LjcyMyAzMDQuMDMxIDM0My45NTcgMzA0LjAzMUgxODMuOTc5QzE1NS4yNiAzMDQuMDMxIDEyNy4xNTIgMzE0IDEwNC44MjQgMzMyLjA2M0w2MC41MjkgMzY4LjAzMUg4QzMuNTc4IDM2OC4wMzEgMCAzNzEuNjI1IDAgMzc2LjAzMVMzLjU3OCAzODQuMDMxIDggMzg0LjAzMUg2Ni4yMTdMMTE0LjkwMiAzNDQuNUMxMzQuMzg3IDMyOC43MTkgMTU4LjkxNiAzMjAuMDMxIDE4My45NzkgMzIwLjAzMUgzNDMuOTU3QzM1MS4wMzUgMzIwLjAzMSAzNTcuNzIzIDMyMy4xMjUgMzYyLjMwMSAzMjguNUMzNjYuOTM5IDMzMy45NjkgMzY4Ljg0NiAzNDAuOTM4IDM2Ny42ODkgMzQ4LjA5NEMzNjUuNzk5IDM1OS40NjkgMzU0Ljg0OCAzNjguMDMxIDM0Mi4yMDcgMzY4LjAzMUgyNjMuOTc1QzI1MC43NDIgMzY4LjAzMSAyMzkuOTc3IDM3OC44MTMgMjM5Ljk3NyAzOTIuMDMxUzI1MC43NDIgNDE2IDI2My45NzUgNDE2SDM4Ny4yMDVMNTA5LjAxNCAzMjYuMjgxQzUxNS44NzMgMzIxLjE4OCA1MjQuMzI2IDMxOS4xODggNTMyLjY5OSAzMjAuMzQ0QzU0MS4xNjggMzIxLjYyNSA1NDguNjM3IDMyNi4xMjUgNTUzLjc0NiAzMzMuMDYyQzU1OC44MDkgMzM5LjkzOCA1NjAuOTAyIDM0OC4zNzUgNTU5LjYyMSAzNTYuODEyQzU1OC4zNCAzNjUuMjgxIDU1My44NTUgMzcyLjcxOSA1NDYuOTY1IDM3Ny43ODFMNDExLjkwOCA0NzcuMjgxQzM5NS41MTggNDg5LjM0NCAzNzUuMjgzIDQ5NiAzNTQuOTU3IDQ5Nkg4QzMuNTc4IDQ5NiAwIDQ5OS41OTQgMCA1MDRTMy41NzggNTEyIDggNTEySDM1NC45NTdDMzc4LjY3NCA1MTIgNDAyLjI4MyA1MDQuMjUgNDIxLjQwNiA0OTAuMTU2TDU1Ni40NjUgMzkwLjY1NkM1NjYuNzc3IDM4My4wNjIgNTczLjUyNyAzNzEuOTA2IDU3NS40NDkgMzU5LjIxOUM1NzcuMzcxIDM0Ni41NjIgNTc0LjIzIDMzMy44NzUgNTY2LjYyMSAzMjMuNTYyWk0yNzcuOTY5IDEzMi4wNDdMMjg1LjgxMiAxMzQuMzEyQzMyMS4xODggMTQ0LjQ1MyAzNDIuNjU2IDE1Mi4wMTYgMzM4LjAzMSAxNzguNzgxQzMzMy41IDIwNC45ODQgMzAwLjg0NCAyMDkuNDIyIDI3NC4yMTkgMjA1LjI1QzI2Mi44MTIgMjAzLjUzMSAyNDkuNjU2IDE5OC43ODEgMjM4LjAzMSAxOTQuNjA5TDIzMiAxOTIuNDM4QzIyNy44MTIgMTkwLjk1MyAyMjMuMjgxIDE5My4xNDEgMjIxLjgxMiAxOTcuMzEyQzIyMC4zMTIgMjAxLjQ4NCAyMjIuNSAyMDYuMDQ3IDIyNi42ODggMjA3LjUzMUwyMzIuNjI1IDIwOS42NTZDMjQ0LjkwNiAyMTQuMDk0IDI1OC44NzUgMjE5LjEyNSAyNzEuNzgxIDIyMS4wNjJDMjc0LjYzOSAyMjEuNTEgMjc3LjIzOCAyMjEuNDczIDI4MCAyMjEuNzI5VjI0OEMyODAgMjUyLjQyMiAyODMuNTk0IDI1NiAyODggMjU2UzI5NiAyNTIuNDIyIDI5NiAyNDhWMjIyLjM2NUMzMjcuMjc3IDIyMC45NjMgMzQ5LjU1OSAyMDYuMDM1IDM1My43ODEgMTgxLjVDMzYxLjEyNSAxMzkuMjE5IDMyMS44MTMgMTI3Ljk2OSAyOTAuMjE5IDExOC45MzhMMjgyLjQ2OSAxMTYuNzAzQzI0OS43ODEgMTA3LjA5NCAyMzMuOTM3IDk3LjkzOCAyMzcuOTY5IDc0LjUzMUMyNDIuNSA0OC4zMTMgMjc1LjEyNSA0My45MjIgMzAxLjc1IDQ4LjA2M0MzMDkuMDYyIDQ5LjIwMyAzMTcuODc1IDUxLjU5NCAzMjkuNDA2IDU1LjU2M0MzMzMuNSA1Ni45NjkgMzM4LjEyNSA1NC43OTcgMzM5LjU2MiA1MC42MDlDMzQxIDQ2LjQzOCAzMzguNzgxIDQxLjg3NSAzMzQuNTk0IDQwLjQzOEMzMjIuMTU2IDM2LjE0MSAzMTIuNSAzMy41NDcgMzA0LjIxOSAzMi4yNUMzMDEuMzg1IDMxLjgxMSAyOTguNzM4IDMxLjcyNSAyOTYgMzEuNDcxVjhDMjk2IDMuNTc4IDI5Mi40MDYgMCAyODggMFMyODAgMy41NzggMjgwIDhWMzEuMDM3QzI0OC43MDcgMzIuNDUxIDIyNi40MzkgNDcuMjYyIDIyMi4yMTkgNzEuODEzQzIxNC45NjkgMTEzLjU2MiAyNTQuNDA2IDEyNS4xNDEgMjc3Ljk2OSAxMzIuMDQ3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HandHoldingDollar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M566.621 323.562C558.98 313.187 547.777 306.438 535.074 304.531C522.311 302.531 509.764 305.781 499.498 313.406L381.955 400H263.975C259.631 400 255.975 396.344 255.975 392.031C255.975 387.688 259.631 384.031 263.975 384.031H342.207C362.566 384.031 380.299 369.719 383.471 350.688C385.377 338.969 382.111 327.094 374.486 318.156C366.861 309.188 355.723 304.031 343.957 304.031H183.979C155.26 304.031 127.152 314 104.824 332.063L60.529 368.031H8C3.578 368.031 0 371.625 0 376.031S3.578 384.031 8 384.031H66.217L114.902 344.5C134.387 328.719 158.916 320.031 183.979 320.031H343.957C351.035 320.031 357.723 323.125 362.301 328.5C366.939 333.969 368.846 340.938 367.689 348.094C365.799 359.469 354.848 368.031 342.207 368.031H263.975C250.742 368.031 239.977 378.813 239.977 392.031S250.742 416 263.975 416H387.205L509.014 326.281C515.873 321.188 524.326 319.188 532.699 320.344C541.168 321.625 548.637 326.125 553.746 333.062C558.809 339.938 560.902 348.375 559.621 356.812C558.34 365.281 553.855 372.719 546.965 377.781L411.908 477.281C395.518 489.344 375.283 496 354.957 496H8C3.578 496 0 499.594 0 504S3.578 512 8 512H354.957C378.674 512 402.283 504.25 421.406 490.156L556.465 390.656C566.777 383.062 573.527 371.906 575.449 359.219C577.371 346.562 574.23 333.875 566.621 323.562ZM277.969 132.047L285.812 134.312C321.188 144.453 342.656 152.016 338.031 178.781C333.5 204.984 300.844 209.422 274.219 205.25C262.812 203.531 249.656 198.781 238.031 194.609L232 192.438C227.812 190.953 223.281 193.141 221.812 197.312C220.312 201.484 222.5 206.047 226.688 207.531L232.625 209.656C244.906 214.094 258.875 219.125 271.781 221.062C274.639 221.51 277.238 221.473 280 221.729V248C280 252.422 283.594 256 288 256S296 252.422 296 248V222.365C327.277 220.963 349.559 206.035 353.781 181.5C361.125 139.219 321.813 127.969 290.219 118.938L282.469 116.703C249.781 107.094 233.937 97.938 237.969 74.531C242.5 48.313 275.125 43.922 301.75 48.063C309.062 49.203 317.875 51.594 329.406 55.563C333.5 56.969 338.125 54.797 339.562 50.609C341 46.438 338.781 41.875 334.594 40.438C322.156 36.141 312.5 33.547 304.219 32.25C301.385 31.811 298.738 31.725 296 31.471V8C296 3.578 292.406 0 288 0S280 3.578 280 8V31.037C248.707 32.451 226.439 47.262 222.219 71.813C214.969 113.562 254.406 125.141 277.969 132.047Z" />
        </Icon>
    </>
}