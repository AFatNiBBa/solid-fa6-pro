
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hospital-wide` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hospital-wide?s=thin hospital-wide}
 * @preview ![hospital-wide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDQgMjQ4SDIwNEMxOTIuOTY5IDI0OCAxODQgMjU2Ljk2OSAxODQgMjY4VjMwOEMxODQgMzE5LjAzMSAxOTIuOTY5IDMyOCAyMDQgMzI4SDI0NEMyNTUuMDMxIDMyOCAyNjQgMzE5LjAzMSAyNjQgMzA4VjI2OEMyNjQgMjU2Ljk2OSAyNTUuMDMxIDI0OCAyNDQgMjQ4Wk0yNDggMzA4QzI0OCAzMTAuMjE5IDI0Ni4yMTkgMzEyIDI0NCAzMTJIMjA0QzIwMS43ODEgMzEyIDIwMCAzMTAuMjE5IDIwMCAzMDhWMjY4QzIwMCAyNjUuNzgxIDIwMS43ODEgMjY0IDIwNCAyNjRIMjQ0QzI0Ni4yMTkgMjY0IDI0OCAyNjUuNzgxIDI0OCAyNjhWMzA4Wk0yNDQgMzc2SDIwNEMxOTIuOTY5IDM3NiAxODQgMzg0Ljk2OSAxODQgMzk2VjQzNkMxODQgNDQ3LjAzMSAxOTIuOTY5IDQ1NiAyMDQgNDU2SDI0NEMyNTUuMDMxIDQ1NiAyNjQgNDQ3LjAzMSAyNjQgNDM2VjM5NkMyNjQgMzg0Ljk2OSAyNTUuMDMxIDM3NiAyNDQgMzc2Wk0yNDggNDM2QzI0OCA0MzguMjE5IDI0Ni4yMTkgNDQwIDI0NCA0NDBIMjA0QzIwMS43ODEgNDQwIDIwMCA0MzguMjE5IDIwMCA0MzZWMzk2QzIwMCAzOTMuNzgxIDIwMS43ODEgMzkyIDIwNCAzOTJIMjQ0QzI0Ni4yMTkgMzkyIDI0OCAzOTMuNzgxIDI0OCAzOTZWNDM2Wk0zMjAgMTgzLjY4OFYxNjAuMjE5TDM0My42ODggMTYwQzM1Mi42ODggMTYwIDM2MCAxNTIuNjg4IDM2MCAxNDMuNjg4VjExMi4zMTJDMzYwIDEwMy4zMTIgMzUyLjY4OCA5NiAzNDMuNjg4IDk2SDMyMFY3Mi4zMTJDMzIwIDYzLjMxMiAzMTIuNjg4IDU2IDMwMy42ODggNTZIMjcyLjMxMkMyNjMuMzEyIDU2IDI1NiA2My4zMTIgMjU2IDcyLjMxMlY5NkgyMzIuMzEyQzIyMy4zMTIgOTYgMjE2IDEwMy4zMTIgMjE2IDExMi4zMTJWMTQzLjY4OEMyMTYgMTUyLjY4OCAyMjMuMzEyIDE2MCAyMzIuMzEyIDE2MEgyNTUuNzgxTDI1NiAxODMuNjg4QzI1NiAxOTIuNjg4IDI2My4zMTIgMjAwIDI3Mi4zMTIgMjAwSDMwMy42ODhDMzEyLjY4OCAyMDAgMzIwIDE5Mi42ODggMzIwIDE4My42ODhaTTMwMy42ODggMTg0TDI3MiAxODMuNTk0TDI3MS41OTQgMTQ0TDIzMiAxNDMuNjg4TDIzMi4zMTIgMTEySDI3MkwyNzIuMzEyIDcyTDMwNCA3Mi4zMTJWMTEyTDM0NCAxMTIuMzEyTDM0My41OTQgMTQ0TDMwNCAxNDQuNDA2TDMwMy42ODggMTg0Wk0zNzIgMjQ4SDMzMkMzMjAuOTY5IDI0OCAzMTIgMjU2Ljk2OSAzMTIgMjY4VjMwOEMzMTIgMzE5LjAzMSAzMjAuOTY5IDMyOCAzMzIgMzI4SDM3MkMzODMuMDMxIDMyOCAzOTIgMzE5LjAzMSAzOTIgMzA4VjI2OEMzOTIgMjU2Ljk2OSAzODMuMDMxIDI0OCAzNzIgMjQ4Wk0zNzYgMzA4QzM3NiAzMTAuMjE5IDM3NC4yMTkgMzEyIDM3MiAzMTJIMzMyQzMyOS43ODEgMzEyIDMyOCAzMTAuMjE5IDMyOCAzMDhWMjY4QzMyOCAyNjUuNzgxIDMyOS43ODEgMjY0IDMzMiAyNjRIMzcyQzM3NC4yMTkgMjY0IDM3NiAyNjUuNzgxIDM3NiAyNjhWMzA4Wk0zNzIgMzc2SDMzMkMzMjAuOTY5IDM3NiAzMTIgMzg0Ljk2OSAzMTIgMzk2VjQzNkMzMTIgNDQ3LjAzMSAzMjAuOTY5IDQ1NiAzMzIgNDU2SDM3MkMzODMuMDMxIDQ1NiAzOTIgNDQ3LjAzMSAzOTIgNDM2VjM5NkMzOTIgMzg0Ljk2OSAzODMuMDMxIDM3NiAzNzIgMzc2Wk0zNzYgNDM2QzM3NiA0MzguMjE5IDM3NC4yMTkgNDQwIDM3MiA0NDBIMzMyQzMyOS43ODEgNDQwIDMyOCA0MzguMjE5IDMyOCA0MzZWMzk2QzMyOCAzOTMuNzgxIDMyOS43ODEgMzkyIDMzMiAzOTJIMzcyQzM3NC4yMTkgMzkyIDM3NiAzOTMuNzgxIDM3NiAzOTZWNDM2Wk01MzYgOTZINDQ4VjQwQzQ0OCAxNy45MzggNDMwLjA2MiAwIDQwOCAwSDE2OEMxNDUuOTM4IDAgMTI4IDE3LjkzOCAxMjggNDBWOTZINDBDMTcuOTM4IDk2IDAgMTEzLjkzOCAwIDEzNlY1MDRDMCA1MDguNDA2IDMuNTk0IDUxMiA4IDUxMlMxNiA1MDguNDA2IDE2IDUwNFYxMzZDMTYgMTIyLjc4MSAyNi43ODEgMTEyIDQwIDExMkgxMjhWNTA0QzEyOCA1MDguNDA2IDEzMS41OTQgNTEyIDEzNiA1MTJTMTQ0IDUwOC40MDYgMTQ0IDUwNFY0MEMxNDQgMjYuNzgxIDE1NC43ODEgMTYgMTY4IDE2SDQwOEM0MjEuMjE5IDE2IDQzMiAyNi43ODEgNDMyIDQwVjUwNEM0MzIgNTA4LjQwNiA0MzUuNTk0IDUxMiA0NDAgNTEyUzQ0OCA1MDguNDA2IDQ0OCA1MDRWMTEySDUzNkM1NDkuMjE5IDExMiA1NjAgMTIyLjc4MSA1NjAgMTM2VjUwNEM1NjAgNTA4LjQwNiA1NjMuNTk0IDUxMiA1NjggNTEyUzU3NiA1MDguNDA2IDU3NiA1MDRWMTM2QzU3NiAxMTMuOTM4IDU1OC4wNjIgOTYgNTM2IDk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HospitalWide(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M244 248H204C192.969 248 184 256.969 184 268V308C184 319.031 192.969 328 204 328H244C255.031 328 264 319.031 264 308V268C264 256.969 255.031 248 244 248ZM248 308C248 310.219 246.219 312 244 312H204C201.781 312 200 310.219 200 308V268C200 265.781 201.781 264 204 264H244C246.219 264 248 265.781 248 268V308ZM244 376H204C192.969 376 184 384.969 184 396V436C184 447.031 192.969 456 204 456H244C255.031 456 264 447.031 264 436V396C264 384.969 255.031 376 244 376ZM248 436C248 438.219 246.219 440 244 440H204C201.781 440 200 438.219 200 436V396C200 393.781 201.781 392 204 392H244C246.219 392 248 393.781 248 396V436ZM320 183.688V160.219L343.688 160C352.688 160 360 152.688 360 143.688V112.312C360 103.312 352.688 96 343.688 96H320V72.312C320 63.312 312.688 56 303.688 56H272.312C263.312 56 256 63.312 256 72.312V96H232.312C223.312 96 216 103.312 216 112.312V143.688C216 152.688 223.312 160 232.312 160H255.781L256 183.688C256 192.688 263.312 200 272.312 200H303.688C312.688 200 320 192.688 320 183.688ZM303.688 184L272 183.594L271.594 144L232 143.688L232.312 112H272L272.312 72L304 72.312V112L344 112.312L343.594 144L304 144.406L303.688 184ZM372 248H332C320.969 248 312 256.969 312 268V308C312 319.031 320.969 328 332 328H372C383.031 328 392 319.031 392 308V268C392 256.969 383.031 248 372 248ZM376 308C376 310.219 374.219 312 372 312H332C329.781 312 328 310.219 328 308V268C328 265.781 329.781 264 332 264H372C374.219 264 376 265.781 376 268V308ZM372 376H332C320.969 376 312 384.969 312 396V436C312 447.031 320.969 456 332 456H372C383.031 456 392 447.031 392 436V396C392 384.969 383.031 376 372 376ZM376 436C376 438.219 374.219 440 372 440H332C329.781 440 328 438.219 328 436V396C328 393.781 329.781 392 332 392H372C374.219 392 376 393.781 376 396V436ZM536 96H448V40C448 17.938 430.062 0 408 0H168C145.938 0 128 17.938 128 40V96H40C17.938 96 0 113.938 0 136V504C0 508.406 3.594 512 8 512S16 508.406 16 504V136C16 122.781 26.781 112 40 112H128V504C128 508.406 131.594 512 136 512S144 508.406 144 504V40C144 26.781 154.781 16 168 16H408C421.219 16 432 26.781 432 40V504C432 508.406 435.594 512 440 512S448 508.406 448 504V112H536C549.219 112 560 122.781 560 136V504C560 508.406 563.594 512 568 512S576 508.406 576 504V136C576 113.938 558.062 96 536 96Z" />
        </Icon>
    </>
}