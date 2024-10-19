
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `trash-undo` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/trash-undo?s=thin trash-undo}
 * @preview ![trash-undo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDcuMDI3IDEyOEM0MDIuNzg3IDEyOCAzOTkuMjc5IDEzMS4zMDUgMzk5LjAyNyAxMzUuNTM3TDM3OS43MTkgNDYwLjM3NUMzNzguNDY5IDQ4MC4wMTYgMzYxLjQ2OSA0OTYgMzQxLjc4MSA0OTZIMTA2LjIxOUM4Ni41MzEgNDk2IDY5LjUzMSA0ODAuMDE2IDY4LjMxMiA0NjAuNDA2TDQ4Ljk3MyAxMzUuNTM3QzQ4LjcyMSAxMzEuMzAzIDQ1LjIxMyAxMjggNDAuOTczIDEyOEMzNi4zNjEgMTI4IDMyLjY5OSAxMzEuODg1IDMyLjk3NSAxMzYuNDlMNTIuMzQ0IDQ2MS4zNzVDNTQuMDk0IDQ4OS4yOTcgNzguMjUgNTEyIDEwNi4yMTkgNTEySDM0MS43ODFDMzY5Ljc1IDUxMiAzOTMuOTA2IDQ4OS4yOTcgMzk1LjY4NyA0NjEuMzQ0TDQxNS4wMjUgMTM2LjQ4OEM0MTUuMjk5IDEzMS44ODMgNDExLjYzOSAxMjggNDA3LjAyNyAxMjhaTTQ0MCA2NEgzMjMuMzgzTDMwMi40MzggMjIuMTI1QzI5NS42MjUgOC40NjkgMjgxLjkzOCAwIDI2Ni42NTYgMEgxODEuMzQ0QzE2Ni4wNjIgMCAxNTIuMzc1IDguNDY5IDE0NS41NjIgMjIuMTA5TDEyNC42MTcgNjRIOEMzLjU5NCA2NCAwIDY3LjU3OCAwIDcyUzMuNTk0IDgwIDggODBINDQwQzQ0NC40MDYgODAgNDQ4IDc2LjQyMiA0NDggNzJTNDQ0LjQwNiA2NCA0NDAgNjRaTTE0Mi41MDggNjRMMTU5Ljg3NSAyOS4yNUMxNjMuOTY5IDIxLjA3OCAxNzIuMTg4IDE2IDE4MS4zNDQgMTZIMjY2LjY1NkMyNzUuODEyIDE2IDI4NC4wMzEgMjEuMDc4IDI4OC4xMjUgMjkuMjY2TDMwNS40OTIgNjRIMTQyLjUwOFpNMjAwLjAwNCAxOTEuOTk2QzIwMC4wMDQgMTg5Ljg0IDE5OS4xMjkgMTg3LjY4NCAxOTcuNDEgMTg2LjA5QzE5NC4xNiAxODMuMTIxIDE4OS4wOTggMTgzLjM0IDE4Ni4xMTMgMTg2LjU5TDk4LjEwOSAyODIuNTk0Qzk1LjI5NyAyODUuNjU2IDk1LjI5NyAyOTAuMzQ0IDk4LjEwOSAyOTMuNDA2TDE4Ni4xMTMgMzg5LjQxQzE4OS4wOTggMzkyLjY2IDE5NC4xNiAzOTIuODc5IDE5Ny40MSAzODkuOTFDMjAwLjY5MSAzODYuODQ4IDIwMC45MSAzODEuODE2IDE5Ny44OTUgMzc4LjU5OEwxMjIuMTkzIDI5NkgyNTZDMjg2Ljg3NSAyOTYgMzEyIDMyMS4xMjUgMzEyIDM1MlYzODRDMzEyIDM4OC40MjIgMzE1LjU5NCAzOTIgMzIwIDM5MlMzMjggMzg4LjQyMiAzMjggMzg0VjM1MkMzMjggMzEyLjI5NyAyOTUuNjg4IDI4MCAyNTYgMjgwSDEyMi4xOTNMMTk3Ljg5NSAxOTcuNDAyQzE5OS4zMTYgMTk1Ljg3MSAyMDAuMDA0IDE5My45MzQgMjAwLjAwNCAxOTEuOTk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TrashUndo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M407.027 128C402.787 128 399.279 131.305 399.027 135.537L379.719 460.375C378.469 480.016 361.469 496 341.781 496H106.219C86.531 496 69.531 480.016 68.312 460.406L48.973 135.537C48.721 131.303 45.213 128 40.973 128C36.361 128 32.699 131.885 32.975 136.49L52.344 461.375C54.094 489.297 78.25 512 106.219 512H341.781C369.75 512 393.906 489.297 395.687 461.344L415.025 136.488C415.299 131.883 411.639 128 407.027 128ZM440 64H323.383L302.438 22.125C295.625 8.469 281.938 0 266.656 0H181.344C166.062 0 152.375 8.469 145.562 22.109L124.617 64H8C3.594 64 0 67.578 0 72S3.594 80 8 80H440C444.406 80 448 76.422 448 72S444.406 64 440 64ZM142.508 64L159.875 29.25C163.969 21.078 172.188 16 181.344 16H266.656C275.812 16 284.031 21.078 288.125 29.266L305.492 64H142.508ZM200.004 191.996C200.004 189.84 199.129 187.684 197.41 186.09C194.16 183.121 189.098 183.34 186.113 186.59L98.109 282.594C95.297 285.656 95.297 290.344 98.109 293.406L186.113 389.41C189.098 392.66 194.16 392.879 197.41 389.91C200.691 386.848 200.91 381.816 197.895 378.598L122.193 296H256C286.875 296 312 321.125 312 352V384C312 388.422 315.594 392 320 392S328 388.422 328 384V352C328 312.297 295.688 280 256 280H122.193L197.895 197.402C199.316 195.871 200.004 193.934 200.004 191.996Z" />
        </Icon>
    </>
}