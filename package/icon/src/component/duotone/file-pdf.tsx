
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-pdf` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-pdf?s=duotone file-pdf}
 * @preview ![file-pdf](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE4NCAyMDhDMTg0IDIwMy41OTQgMTgwLjQwNiAyMDAgMTc2IDIwMFMxNjggMjAzLjU5NCAxNjggMjA4QzE2OCAyMTAuMDYyIDE2OC4yOTcgMjMxLjMxMiAxNzcuMTQxIDI1OC4yNUMxNzkuMDk0IDI0OS41OTQgMTg0IDIyNi4xNTYgMTg0IDIwOFpNMTU2LjUzMSAzNTQuNTk0QzE3NC41MTYgMzQ4LjA5NCAxOTIuNjU2IDM0My4xNTYgMjA5LjQ1MyAzMzkuNDA2QzE5Ny4wMzEgMzI3LjM0NCAxODcuMjgxIDMxNC4yODEgMTc5LjY1NiAzMDEuMjVDMTcyLjMxMiAzMjAuNjI1IDE2NC40MjIgMzM4LjUgMTU2LjUzMSAzNTQuNTk0Wk04MCA0MjIuMzc1QzgwIDQzMi4wMzEgOTAuNDUzIDQzNC4zMTMgOTQuMzU5IDQyOC43MTlDOTkuMjUgNDIxLjg3NSAxMDguNzUgNDA4IDEyMC4wNzggMzg4LjYyNUMxMDUuODU5IDM5Ni41OTQgOTIuODI4IDQwNS45MzggODIuMDYyIDQxNi45MzhDODAuNzUgNDE4LjI4MSA4MCA0MjAuMjgxIDgwIDQyMi4zNzVaTTI1NiAxMjhWMEg0OEMyMS40OSAwIDAgMjEuNDkyIDAgNDhWNDY0QzAgNDkwLjUwOCAyMS40OSA1MTIgNDggNTEySDMzNkMzNjIuNTEgNTEyIDM4NCA0OTAuNTA4IDM4NCA0NjRWMTI4SDI1NlpNMjkyLjg3NSA0MDBDMjg2Ljg4MSA0MDAgMjgxLjA2MSAzOTkuMDQ3IDI3NS42NTggMzk3LjE5NUMyNTUuNjAyIDM5MC40MzggMjM3LjI4MyAzODEuMjM0IDIyMS4xMDQgMzY5LjgwMUMxOTcuMjI5IDM3NC45MSAxNzUuNjQ4IDM4MS4zMiAxNTYuNzkzIDM4OC45MDJDMTQyLjM2MSA0MTUuMjE1IDEyOS4xNjIgNDM1LjA1MSAxMjAuNDIyIDQ0Ny4zMTZDMTEyLjk3OSA0NTcuNzYyIDEwMC44MzQgNDY0IDg3LjkzOCA0NjRDNjUuOTE2IDQ2NCA0OCA0NDYuMDg2IDQ4IDQyNC4wNjJDNDggNDEyLjE0NSA1MS43NCA0MDIuMjM4IDU5LjE4IDM5NC41NTVDNzUuMzYzIDM3OC4wMzUgOTYuNTQ1IDM2My41NjYgMTIyLjE5OSAzNTEuNUMxMzMuOTUzIDMyOC42NjggMTQ0LjEzNSAzMDUuNDYxIDE1Mi41MzEgMjgyLjM1NUMxMzYuMTk3IDI0Mi4zOTEgMTM2IDIwOC4zNTUgMTM2IDIwOEMxMzYgMTg1Ljk0NSAxNTMuOTQ1IDE2OCAxNzYgMTY4QzE5OC4wNTcgMTY4IDIxNiAxODUuOTQ1IDIxNiAyMDhDMjE2IDIzMi45OTYgMjA4Ljc3MyAyNjMuNzU0IDIwNy4wNjIgMjcwLjYzM0MyMDYuMDU3IDI3My45MDYgMjA1LjAyNyAyNzcuMTQ4IDIwMy45OCAyODAuMzU1QzIxMS44MTEgMjk0LjgxNiAyMjEuNjc4IDMwNy41NyAyMzMuNDI0IDMxOC40MDZDMjYzLjA5NCAzMTMuMzU5IDI4NC4zMjIgMzEyLjE0OCAyODcuNTc4IDMxMkgyOTJDMzE2LjI2MiAzMTIgMzM2IDMzMS43MzggMzM2IDM1NkMzMzYgMzgwLjY3MiAzMTcuMDU5IDQwMCAyOTIuODc1IDQwMFpNMjkyIDM0NEgyODhDMjg3LjY1NiAzNDQuMDMxIDI3MS4xNzIgMzQ0Ljk2OSAyNDcuMDQ3IDM0OC43NUMyNTguMzEyIDM1NS43NSAyNzEuMTcyIDM2MS45MzggMjg1Ljg5MSAzNjYuODc1QzI4OC4wMzEgMzY3LjYyNSAyOTAuNDUzIDM2OCAyOTIuODc1IDM2OEMyOTkuMDE2IDM2OCAzMDQgMzYzIDMwNCAzNTYuODc1QzMwNCAzNDkuMzc1IDI5OC42MDkgMzQ0IDI5MiAzNDRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI5MiAzMTJIMjg3LjU3OEMyODQuMzIyIDMxMi4xNDggMjYzLjA5NCAzMTMuMzU5IDIzMy40MjQgMzE4LjQwNkMyMjEuNjc4IDMwNy41NyAyMTEuODExIDI5NC44MTYgMjAzLjk4IDI4MC4zNTVDMjA1LjAyNyAyNzcuMTQ4IDIwNi4wNTcgMjczLjkwNiAyMDcuMDYyIDI3MC42MzNDMjA4Ljc3MyAyNjMuNzU0IDIxNiAyMzIuOTk2IDIxNiAyMDhDMjE2IDE4NS45NDUgMTk4LjA1NyAxNjggMTc2IDE2OEMxNTMuOTQ1IDE2OCAxMzYgMTg1Ljk0NSAxMzYgMjA4QzEzNiAyMDguMzU1IDEzNi4xOTcgMjQyLjM5MSAxNTIuNTMxIDI4Mi4zNTVDMTQ0LjEzNSAzMDUuNDYxIDEzMy45NTMgMzI4LjY2OCAxMjIuMTk5IDM1MS41Qzk2LjU0NSAzNjMuNTY2IDc1LjM2MyAzNzguMDM1IDU5LjE4IDM5NC41NTVDNTEuNzQgNDAyLjIzOCA0OCA0MTIuMTQ1IDQ4IDQyNC4wNjJDNDggNDQ2LjA4NiA2NS45MTYgNDY0IDg3LjkzOCA0NjRDMTAwLjgzNCA0NjQgMTEyLjk3OSA0NTcuNzYyIDEyMC40MjIgNDQ3LjMxNkMxMjkuMTYyIDQzNS4wNTEgMTQyLjM2MSA0MTUuMjE1IDE1Ni43OTMgMzg4LjkwMkMxNzUuNjQ4IDM4MS4zMiAxOTcuMjI5IDM3NC45MSAyMjEuMTA0IDM2OS44MDFDMjM3LjI4MyAzODEuMjM0IDI1NS42MDIgMzkwLjQzOCAyNzUuNjU4IDM5Ny4xOTVDMjgxLjA2MSAzOTkuMDQ3IDI4Ni44ODEgNDAwIDI5Mi44NzUgNDAwQzMxNy4wNTkgNDAwIDMzNiAzODAuNjcyIDMzNiAzNTZDMzM2IDMzMS43MzggMzE2LjI2MiAzMTIgMjkyIDMxMlpNOTQuMzU5IDQyOC43MTlDOTAuNDUzIDQzNC4zMTIgODAgNDMyLjAzMSA4MCA0MjIuMzc1QzgwIDQyMC4yODEgODAuNzUgNDE4LjI4MSA4Mi4wNjIgNDE2LjkzOEM5Mi44MjggNDA1LjkzOCAxMDUuODU5IDM5Ni41OTQgMTIwLjA3OCAzODguNjI1QzEwOC43NSA0MDggOTkuMjUgNDIxLjg3NSA5NC4zNTkgNDI4LjcxOVpNMTc2IDIwMEMxODAuNDA2IDIwMCAxODQgMjAzLjU5NCAxODQgMjA4QzE4NCAyMjYuMTU2IDE3OS4wOTQgMjQ5LjU5NCAxNzcuMTQxIDI1OC4yNUMxNjguMjk3IDIzMS4zMTIgMTY4IDIxMC4wNjIgMTY4IDIwOEMxNjggMjAzLjU5NCAxNzEuNTk0IDIwMCAxNzYgMjAwWk0xNTYuNTMxIDM1NC41OTRDMTY0LjQyMiAzMzguNSAxNzIuMzEzIDMyMC42MjUgMTc5LjY1NiAzMDEuMjVDMTg3LjI4MSAzMTQuMjgxIDE5Ny4wMzEgMzI3LjM0NCAyMDkuNDUzIDMzOS40MDZDMTkyLjY1NiAzNDMuMTU2IDE3NC41MTYgMzQ4LjA5NCAxNTYuNTMxIDM1NC41OTRaTTI5Mi44NzUgMzY4QzI5MC40NTMgMzY4IDI4OC4wMzEgMzY3LjYyNSAyODUuODkxIDM2Ni44NzVDMjcxLjE3MiAzNjEuOTM4IDI1OC4zMTMgMzU1Ljc1IDI0Ny4wNDcgMzQ4Ljc1QzI3MS4xNzIgMzQ0Ljk2OSAyODcuNjU2IDM0NC4wMzEgMjg4IDM0NEgyOTJDMjk4LjYwOSAzNDQgMzA0IDM0OS4zNzUgMzA0IDM1Ni44NzVDMzA0IDM2MyAyOTkuMDE2IDM2OCAyOTIuODc1IDM2OFpNMjU2IDBWMTI4SDM4NEwyNTYgMFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function FilePdf(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M184 208C184 203.594 180.406 200 176 200S168 203.594 168 208C168 210.062 168.297 231.312 177.141 258.25C179.094 249.594 184 226.156 184 208ZM156.531 354.594C174.516 348.094 192.656 343.156 209.453 339.406C197.031 327.344 187.281 314.281 179.656 301.25C172.312 320.625 164.422 338.5 156.531 354.594ZM80 422.375C80 432.031 90.453 434.313 94.359 428.719C99.25 421.875 108.75 408 120.078 388.625C105.859 396.594 92.828 405.938 82.062 416.938C80.75 418.281 80 420.281 80 422.375ZM256 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V128H256ZM292.875 400C286.881 400 281.061 399.047 275.658 397.195C255.602 390.438 237.283 381.234 221.104 369.801C197.229 374.91 175.648 381.32 156.793 388.902C142.361 415.215 129.162 435.051 120.422 447.316C112.979 457.762 100.834 464 87.938 464C65.916 464 48 446.086 48 424.062C48 412.145 51.74 402.238 59.18 394.555C75.363 378.035 96.545 363.566 122.199 351.5C133.953 328.668 144.135 305.461 152.531 282.355C136.197 242.391 136 208.355 136 208C136 185.945 153.945 168 176 168C198.057 168 216 185.945 216 208C216 232.996 208.773 263.754 207.062 270.633C206.057 273.906 205.027 277.148 203.98 280.355C211.811 294.816 221.678 307.57 233.424 318.406C263.094 313.359 284.322 312.148 287.578 312H292C316.262 312 336 331.738 336 356C336 380.672 317.059 400 292.875 400ZM292 344H288C287.656 344.031 271.172 344.969 247.047 348.75C258.312 355.75 271.172 361.938 285.891 366.875C288.031 367.625 290.453 368 292.875 368C299.016 368 304 363 304 356.875C304 349.375 298.609 344 292 344Z" />
            <path d="M292 312H287.578C284.322 312.148 263.094 313.359 233.424 318.406C221.678 307.57 211.811 294.816 203.98 280.355C205.027 277.148 206.057 273.906 207.062 270.633C208.773 263.754 216 232.996 216 208C216 185.945 198.057 168 176 168C153.945 168 136 185.945 136 208C136 208.355 136.197 242.391 152.531 282.355C144.135 305.461 133.953 328.668 122.199 351.5C96.545 363.566 75.363 378.035 59.18 394.555C51.74 402.238 48 412.145 48 424.062C48 446.086 65.916 464 87.938 464C100.834 464 112.979 457.762 120.422 447.316C129.162 435.051 142.361 415.215 156.793 388.902C175.648 381.32 197.229 374.91 221.104 369.801C237.283 381.234 255.602 390.438 275.658 397.195C281.061 399.047 286.881 400 292.875 400C317.059 400 336 380.672 336 356C336 331.738 316.262 312 292 312ZM94.359 428.719C90.453 434.312 80 432.031 80 422.375C80 420.281 80.75 418.281 82.062 416.938C92.828 405.938 105.859 396.594 120.078 388.625C108.75 408 99.25 421.875 94.359 428.719ZM176 200C180.406 200 184 203.594 184 208C184 226.156 179.094 249.594 177.141 258.25C168.297 231.312 168 210.062 168 208C168 203.594 171.594 200 176 200ZM156.531 354.594C164.422 338.5 172.313 320.625 179.656 301.25C187.281 314.281 197.031 327.344 209.453 339.406C192.656 343.156 174.516 348.094 156.531 354.594ZM292.875 368C290.453 368 288.031 367.625 285.891 366.875C271.172 361.938 258.313 355.75 247.047 348.75C271.172 344.969 287.656 344.031 288 344H292C298.609 344 304 349.375 304 356.875C304 363 299.016 368 292.875 368ZM256 0V128H384L256 0Z" />
        </Icon>
    </>
}