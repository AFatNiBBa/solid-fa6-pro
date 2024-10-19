
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `trophy-star` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/trophy-star?s=light trophy-star}
 * @preview ![trophy-star](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjguNzkyIDExOS44MTJMMzI2LjkzMiAxMTMuNjg4TDMwOC4yMSA3NS41OThDMzAwLjYwMiA2MC4xMTcgMjc1LjUyNCA2MC4xNDggMjY3Ljk3OSA3NS41OThMMjQ5LjIyNSAxMTMuNjg4TDIwNy4yNzIgMTE5Ljg0NEMxOTguNzI1IDEyMS4wNjYgMTkxLjc3NiAxMjYuOTM4IDE4OS4xMTQgMTM1LjE2NEMxODYuNDUyIDE0My40MjIgMTg4LjY0NSAxNTIuMjUgMTk0LjgxMSAxNTguMjQ2TDIyNS4xNDkgMTg3Ljc2NkwyMTcuOTQ4IDIyOS43MTVDMjE2LjU0IDIzOC4yMjcgMjE5Ljk4MyAyNDYuNjcyIDIyNi45MzQgMjUxLjcyN0MyMzMuOTE3IDI1Ni42ODggMjQyLjkwMSAyNTcuNDQxIDI1MC41MDggMjUzLjM5MUwyODcuOTg1IDIzMy42NDFMMzI1LjQzIDI1My4zOTFDMzI4Ljc0OSAyNTUuMTQ4IDMzMi4zNDggMjU2IDMzNS45MTkgMjU2QzM0MC41NTEgMjU2IDM0NS4xNTUgMjU0LjU1NSAzNDkuMDk4IDI1MS42NjRDMzU2LjA0OSAyNDYuNTc4IDM1OS40NjIgMjM4LjEzMyAzNTguMDIyIDIyOS42NTJMMzUwLjgyMSAxODcuNzY2TDM4MS4xNTkgMTU4LjI0NkMzODcuMzU4IDE1Mi4yMTkgMzg5LjU0OSAxNDMuMzkxIDM4Ni44ODcgMTM1LjEzM0MzODQuMjI3IDEyNi45MDYgMzc3LjI3NiAxMjEuMDM1IDM2OC43OTIgMTE5LjgxMlpNMzE2LjM4MSAxNzYuNTIzTDMyMy4xMTQgMjE1LjgzNkwyODcuOTg1IDE5Ny4zNEwyNTIuODU4IDIxNS44MzZMMjU5LjU4OSAxNzYuNTIzTDIzMS4xNjEgMTQ4LjgyOEwyNzAuNTE2IDE0My4wNzhMMjg4LjA3OSAxMDcuMzc1TDMwNS42NDMgMTQzLjA3OEwzNDQuODA5IDE0OC43OTdMMzE2LjM4MSAxNzYuNTIzWk01NzIuMjI3IDc2LjcxOUM1NzAuNjY1IDY5LjMxMiA1NjQuMTM1IDY0IDU1Ni41NzUgNjRINDQ3Ljk1NEM0NDcuOTQgNTcuODI4IDQ0Ny44NjQgNTEuOTkyIDQ0Ny43MzMgNDYuNjU2QzQ0Ny4wNzcgMjAuNSA0MjUuOTkxIDAgMzk5Ljc0OSAwSDE3Ni4yNTNDMTUwLjAxIDAgMTI4LjkyNCAyMC41IDEyOC4yNjggNDYuNjU2QzEyOC4xMzcgNTEuOTkyIDEyOC4wNjEgNTcuODI4IDEyOC4wNDcgNjRIMTkuNDI2QzExLjg2NiA2NCA1LjMzNyA2OS4zMTIgMy43NzQgNzYuNzE5QzIuODk5IDgwLjkwNiAtMTcuMTg5IDE4MC43ODEgNDUuMDQ0IDI3Mi44NDRDODYuNzE1IDMzNC40ODQgMTU0LjkxOSAzNzYuODU5IDI0Ny41NzcgMzk5LjUzOUMyNjEuODcyIDQwMy4wMzkgMjcyLjAwNSA0MTUuNzY2IDI3Mi4wMDUgNDMwLjQ4OFY0ODBIMTc2LjAzNEMxNjcuMiA0ODAgMTYwLjA0IDQ4Ny4xNjQgMTYwLjA0IDQ5NlMxNjcuMiA1MTIgMTc2LjAzNCA1MTJIMzk5Ljk2N0M0MDguODAxIDUxMiA0MTUuOTYyIDUwNC44MzYgNDE1Ljk2MiA0OTZTNDA4LjgwMSA0ODAgMzk5Ljk2NyA0ODBIMzAzLjk5N1Y0MzAuNDg4QzMwMy45OTcgNDE1Ljc2NiAzMTQuMTMgNDAzLjAzOSAzMjguNDI0IDM5OS41MzlDNDIxLjA4MyAzNzYuODU5IDQ4OS4yODYgMzM0LjQ4NCA1MzAuOTU4IDI3Mi44NDRDNTkzLjE5IDE4MC43ODEgNTczLjEwMiA4MC45MDYgNTcyLjIyNyA3Ni43MTlaTTcxLjc4NiAyNTUuMjgxQzI5LjIwNCAxOTIuNTYyIDMwLjU0NyAxMjMuODEyIDMzLjMyOSA5NkgxMjguNzE0QzEzMS43MjkgMTczLjcwNyAxNDguMDA1IDI4NC42MDIgMjA5LjkwNyAzNTQuOTc3QzE0OC4zOTEgMzMyLjg3NSAxMDEuOTA3IDI5OS42NDggNzEuNzg2IDI1NS4yODFaTTI4OC4wMDEgMzc0LjYyNUMxNjYuOTEzIDMyMC4xNTYgMTU4LjI1OCAxMjguMzc1IDE2MC4yNTggNDcuNDY5QzE2MC40NzcgMzguNzgxIDE2Ny41MDYgMzIgMTc2LjI1MyAzMkgzOTkuNzQ5QzQwOC40OTUgMzIgNDE1LjUyNCAzOC43ODEgNDE1Ljc0MyA0Ny40NjlDNDE3Ljc0MyAxMjguMzc1IDQwOS4wODkgMzIwLjE1NiAyODguMDAxIDM3NC42MjVaTTUwNC4yMTUgMjU1LjI4MUM0NzQuMDk2IDI5OS42NDggNDI3LjYxIDMzMi44NzUgMzY2LjA5NCAzNTQuOTc3QzQyNy45OTcgMjg0LjYwMiA0NDQuMjcyIDE3My43MDcgNDQ3LjI4OCA5Nkg1NDIuNjcyQzU0NS40NTQgMTIzLjgxMiA1NDYuNzk3IDE5Mi41NjIgNTA0LjIxNSAyNTUuMjgxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TrophyStar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M368.792 119.812L326.932 113.688L308.21 75.598C300.602 60.117 275.524 60.148 267.979 75.598L249.225 113.688L207.272 119.844C198.725 121.066 191.776 126.938 189.114 135.164C186.452 143.422 188.645 152.25 194.811 158.246L225.149 187.766L217.948 229.715C216.54 238.227 219.983 246.672 226.934 251.727C233.917 256.688 242.901 257.441 250.508 253.391L287.985 233.641L325.43 253.391C328.749 255.148 332.348 256 335.919 256C340.551 256 345.155 254.555 349.098 251.664C356.049 246.578 359.462 238.133 358.022 229.652L350.821 187.766L381.159 158.246C387.358 152.219 389.549 143.391 386.887 135.133C384.227 126.906 377.276 121.035 368.792 119.812ZM316.381 176.523L323.114 215.836L287.985 197.34L252.858 215.836L259.589 176.523L231.161 148.828L270.516 143.078L288.079 107.375L305.643 143.078L344.809 148.797L316.381 176.523ZM572.227 76.719C570.665 69.312 564.135 64 556.575 64H447.954C447.94 57.828 447.864 51.992 447.733 46.656C447.077 20.5 425.991 0 399.749 0H176.253C150.01 0 128.924 20.5 128.268 46.656C128.137 51.992 128.061 57.828 128.047 64H19.426C11.866 64 5.337 69.312 3.774 76.719C2.899 80.906 -17.189 180.781 45.044 272.844C86.715 334.484 154.919 376.859 247.577 399.539C261.872 403.039 272.005 415.766 272.005 430.488V480H176.034C167.2 480 160.04 487.164 160.04 496S167.2 512 176.034 512H399.967C408.801 512 415.962 504.836 415.962 496S408.801 480 399.967 480H303.997V430.488C303.997 415.766 314.13 403.039 328.424 399.539C421.083 376.859 489.286 334.484 530.958 272.844C593.19 180.781 573.102 80.906 572.227 76.719ZM71.786 255.281C29.204 192.562 30.547 123.812 33.329 96H128.714C131.729 173.707 148.005 284.602 209.907 354.977C148.391 332.875 101.907 299.648 71.786 255.281ZM288.001 374.625C166.913 320.156 158.258 128.375 160.258 47.469C160.477 38.781 167.506 32 176.253 32H399.749C408.495 32 415.524 38.781 415.743 47.469C417.743 128.375 409.089 320.156 288.001 374.625ZM504.215 255.281C474.096 299.648 427.61 332.875 366.094 354.977C427.997 284.602 444.272 173.707 447.288 96H542.672C545.454 123.812 546.797 192.562 504.215 255.281Z" />
        </Icon>
    </>
}