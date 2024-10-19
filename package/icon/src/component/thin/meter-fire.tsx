
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `meter-fire` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/meter-fire?s=thin meter-fire}
 * @preview ![meter-fire](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTcuODEyIDQ3MS4zNzVDMjk3Ljc4MSA0NzcuMDk0IDI3NyA0ODAgMjU2IDQ4MEMxMzIuNSA0ODAgMzIgMzc5LjUgMzIgMjU2QzMyIDEzMi40ODQgMTMyLjUgMzIgMjU2IDMyQzMxNy45MDYgMzIgMzc1LjUgNTYuNjg4IDQxOC4yMTkgMTAxLjUxNkM0MjEuMjE5IDEwNC42ODggNDI2LjI4MSAxMDQuODU5IDQyOS41MzEgMTAxLjc5N0M0MzIuNzE5IDk4Ljc1IDQzMi44NDQgOTMuNjg4IDQyOS43ODEgOTAuNDg0QzM4NC4wMzEgNDIuNDUzIDMyMi4zMTIgMTYgMjU2IDE2QzEyMy42NTYgMTYgMTYgMTIzLjY1NiAxNiAyNTZTMTIzLjY1NiA0OTYgMjU2IDQ5NkMyNzguNSA0OTYgMzAwLjc1IDQ5Mi44NzUgMzIyLjE4OCA0ODYuNzVDMzI2LjQzOCA0ODUuNTMxIDMyOC45MDYgNDgxLjEyNSAzMjcuNjg4IDQ3Ni44NzVDMzI2LjQ2OSA0NzIuNTk0IDMyMS45MzggNDcwLjAzMSAzMTcuODEyIDQ3MS4zNzVaTTE1MiAxMjhDMTM4Ljc0NiAxMjggMTI4IDEzOC43NDQgMTI4IDE1MlYyMDBDMTI4IDIxMy4yNTQgMTM4Ljc0NiAyMjQgMTUyIDIyNEgxNjhDMTgxLjI1NiAyMjQgMTkyIDIxMy4yNTQgMTkyIDIwMFYxNTJDMTkyIDEzOC43NDQgMTgxLjI1NiAxMjggMTY4IDEyOEgxNTJaTTE3NiAxNTJWMjAwQzE3NiAyMDQuNDEgMTcyLjQxMiAyMDggMTY4IDIwOEgxNTJDMTQ3LjU5IDIwOCAxNDQgMjA0LjQxIDE0NCAyMDBWMTUyQzE0NCAxNDcuNTg4IDE0Ny41OSAxNDQgMTUyIDE0NEgxNjhDMTcyLjQxMiAxNDQgMTc2IDE0Ny41ODggMTc2IDE1MlpNMjQ4IDEyOEMyMzQuNzQ2IDEyOCAyMjQgMTM4Ljc0NCAyMjQgMTUyVjIwMEMyMjQgMjEzLjI1NCAyMzQuNzQ2IDIyNCAyNDggMjI0SDI2NEMyNzcuMjU2IDIyNCAyODggMjEzLjI1NCAyODggMjAwVjE1MkMyODggMTM4Ljc0NCAyNzcuMjU2IDEyOCAyNjQgMTI4SDI0OFpNMjcyIDE1MlYyMDBDMjcyIDIwNC40MSAyNjguNDEyIDIwOCAyNjQgMjA4SDI0OEMyNDMuNTkgMjA4IDI0MCAyMDQuNDEgMjQwIDIwMFYxNTJDMjQwIDE0Ny41ODggMjQzLjU5IDE0NCAyNDggMTQ0SDI2NEMyNjguNDEyIDE0NCAyNzIgMTQ3LjU4OCAyNzIgMTUyWk0zODEuMTkxIDE0MS4yODlDMzc3LjIyOSAxMzMuNDkgMzY5LjM0OCAxMjggMzYwIDEyOEgzNDRDMzMwLjc0NiAxMjggMzIwIDEzOC43NDQgMzIwIDE1MlYyMDBDMzIwIDIwNC42NjggMzIxLjY4MiAyMDguNzczIDMyMy45ODggMjEyLjQ1OUMzMjcuOTI2IDIwNi41ODggMzMxLjc4MyAyMDAuNzI5IDMzNiAxOTQuOTk2VjE1MkMzMzYgMTQ3LjU4OCAzMzkuNTkgMTQ0IDM0NCAxNDRIMzYwQzM2NC40MTIgMTQ0IDM2OCAxNDcuNTg4IDM2OCAxNTJWMTU1Ljg2M0MzNzIuMzkxIDE1MC45NDkgMzc2LjcxMSAxNDUuOTUzIDM4MS4xOTEgMTQxLjI4OVpNNTcyLjI1IDMxMS4yMTlDNTY5LjY1NiAzMDYuMTg3IDU2Ni44MTIgMzAxIDU2My41NzggMjk1LjcxOUM1NjIuMjUgMjkzLjUzMSA1NTkuOTY5IDI5Mi4xMjUgNTU3LjQzOCAyOTEuOTA2QzU1NC44OTEgMjkxLjUzMSA1NTIuNDM4IDI5Mi42NTYgNTUwLjczNCAyOTQuNTk0TDUxMy4wOTQgMzM3LjQ2OUM0OTYuMTQxIDMxNS44NzUgNDQ5LjAzMSAyNTUuODc1IDQ0NC43MDMgMjUwLjgxM0M0NDMuMTg4IDI0OS4wMzEgNDQwLjk2OSAyNDggNDM4LjYyNSAyNDhINDM4LjU3OEM0MzYuMjE5IDI0OCA0MzMuOTg0IDI0OS4wNjIgNDMyLjQ4NCAyNTAuODc1QzM5Ny4zNDQgMjkzLjAzMSAzNzYgMzIxIDM3NiAzNTQuMTI1QzM3NiA0MTMuMTU2IDQyMC42MjUgNDU2IDQ4Mi4xMjUgNDU2QzUwNC43OTcgNDU2IDUyNi40MDYgNDQ5LjIxOSA1NDQuNjA5IDQzNi40MDZDNTgzLjUgNDA5LjE4OCA1OTUuMzc1IDM1NS4zNDQgNTcyLjI1IDMxMS4yMTlaTTUzNS40MjIgNDIzLjMxMkM1MzUuNDA2IDQyMy4zMTIgNTM1LjQwNiA0MjMuMzEyIDUzNS4zOTEgNDIzLjM0NEM1MTkuOTA2IDQzNC4yNSA1MDEuNDg0IDQ0MCA0ODIuMTI1IDQ0MEM0MjkuMDYyIDQ0MCAzOTIgNDA0LjY4OCAzOTIgMzU0LjEyNUMzOTIgMzMwLjAzMSA0MDUuODEyIDMwOC40MDYgNDM4LjUzMSAyNjguNjU2QzQ1Mi42MDkgMjg2LjM0NCA0ODYuOTY5IDMzMC4wOTQgNTA2LjQ1MyAzNTQuOTM4QzUwNy45MjIgMzU2LjgxMyA1MTAuMTU2IDM1Ny45MzggNTEyLjUzMSAzNThDNTE0LjkyMiAzNTguMTI1IDUxNy4xODggMzU3LjA2MiA1MTguNzY2IDM1NS4yODFMNTU1LjM5MSAzMTMuNTYzQzU1Ni4yOTcgMzE1LjI1IDU1Ny4xODcgMzE2LjkwNiA1NTguMDMxIDMxOC41OTRDNTc3LjQ2OSAzNTUuNjg4IDU2Ny43NSA0MDAuNzE5IDUzNS40MjIgNDIzLjMxMlpNNTUyLjk2OSAxODguNTMxQzU0OS45MDYgMTg1LjcxOSA1NDUuMjAzIDE4NS43ODEgNTQyLjE0MSAxODguNTYzQzUzMC42NzIgMTk5LjEyNSA1MTkuODI4IDIxMC4zNDQgNTA5Ljc5NyAyMjEuOTM4QzQ5MS4yNjYgMTk3Ljg0NCA0NzAuMzEyIDE3NS4wNjMgNDQ3LjM5MSAxNTQuMDk0QzQ0NC4zNTkgMTUxLjI4MSA0MzkuNjU2IDE1MS4yODEgNDM2LjU5NCAxNTQuMDk0QzM2OS4wMzEgMjE2LjEyNSAzMjAgMjk4LjE1NiAzMjAgMzQ5LjE1NkMzMjAgNDM4LjkzOCAzOTEuNzgxIDUxMiA0ODAgNTEyUzY0MCA0MzguOTM4IDY0MCAzNDkuMTU2QzY0MCAzMTEgNjA0LjI2NiAyMzUuNjU2IDU1Mi45NjkgMTg4LjUzMVpNNDgwIDQ5NkM0MDAuNTk0IDQ5NiAzMzYgNDMwLjEyNSAzMzYgMzQ5LjE1NkMzMzYgMzA0LjI4MSAzODEuMjAzIDIyOC42NTYgNDQyLjAxNiAxNzAuOTM4QzQ2NC41NzggMTkyLjE1NiA0ODUuMDc4IDIxNS4xODggNTAzLjAxNiAyMzkuNTMxQzUwNC40ODQgMjQxLjUzMSA1MDYuNzgxIDI0Mi43MTkgNTA5LjI1IDI0Mi43ODFDNTExLjU2MiAyNDIuNDY5IDUxNC4wNzggMjQxLjc1IDUxNS42NDEgMjM5Ljg0NEM1MjUuNDIyIDIyNy45MDYgNTM2LjEyNSAyMTYuMzc1IDU0Ny41MzEgMjA1LjQzOEM1OTEuNjU2IDI0OC43ODEgNjI0IDMxNS43MTkgNjI0IDM0OS4xNTZDNjI0IDQzMC4xMjUgNTU5LjQwNiA0OTYgNDgwIDQ5NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MeterFire(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M317.812 471.375C297.781 477.094 277 480 256 480C132.5 480 32 379.5 32 256C32 132.484 132.5 32 256 32C317.906 32 375.5 56.688 418.219 101.516C421.219 104.688 426.281 104.859 429.531 101.797C432.719 98.75 432.844 93.688 429.781 90.484C384.031 42.453 322.312 16 256 16C123.656 16 16 123.656 16 256S123.656 496 256 496C278.5 496 300.75 492.875 322.188 486.75C326.438 485.531 328.906 481.125 327.688 476.875C326.469 472.594 321.938 470.031 317.812 471.375ZM152 128C138.746 128 128 138.744 128 152V200C128 213.254 138.746 224 152 224H168C181.256 224 192 213.254 192 200V152C192 138.744 181.256 128 168 128H152ZM176 152V200C176 204.41 172.412 208 168 208H152C147.59 208 144 204.41 144 200V152C144 147.588 147.59 144 152 144H168C172.412 144 176 147.588 176 152ZM248 128C234.746 128 224 138.744 224 152V200C224 213.254 234.746 224 248 224H264C277.256 224 288 213.254 288 200V152C288 138.744 277.256 128 264 128H248ZM272 152V200C272 204.41 268.412 208 264 208H248C243.59 208 240 204.41 240 200V152C240 147.588 243.59 144 248 144H264C268.412 144 272 147.588 272 152ZM381.191 141.289C377.229 133.49 369.348 128 360 128H344C330.746 128 320 138.744 320 152V200C320 204.668 321.682 208.773 323.988 212.459C327.926 206.588 331.783 200.729 336 194.996V152C336 147.588 339.59 144 344 144H360C364.412 144 368 147.588 368 152V155.863C372.391 150.949 376.711 145.953 381.191 141.289ZM572.25 311.219C569.656 306.187 566.812 301 563.578 295.719C562.25 293.531 559.969 292.125 557.438 291.906C554.891 291.531 552.438 292.656 550.734 294.594L513.094 337.469C496.141 315.875 449.031 255.875 444.703 250.813C443.188 249.031 440.969 248 438.625 248H438.578C436.219 248 433.984 249.062 432.484 250.875C397.344 293.031 376 321 376 354.125C376 413.156 420.625 456 482.125 456C504.797 456 526.406 449.219 544.609 436.406C583.5 409.188 595.375 355.344 572.25 311.219ZM535.422 423.312C535.406 423.312 535.406 423.312 535.391 423.344C519.906 434.25 501.484 440 482.125 440C429.062 440 392 404.688 392 354.125C392 330.031 405.812 308.406 438.531 268.656C452.609 286.344 486.969 330.094 506.453 354.938C507.922 356.813 510.156 357.938 512.531 358C514.922 358.125 517.188 357.062 518.766 355.281L555.391 313.563C556.297 315.25 557.187 316.906 558.031 318.594C577.469 355.688 567.75 400.719 535.422 423.312ZM552.969 188.531C549.906 185.719 545.203 185.781 542.141 188.563C530.672 199.125 519.828 210.344 509.797 221.938C491.266 197.844 470.312 175.063 447.391 154.094C444.359 151.281 439.656 151.281 436.594 154.094C369.031 216.125 320 298.156 320 349.156C320 438.938 391.781 512 480 512S640 438.938 640 349.156C640 311 604.266 235.656 552.969 188.531ZM480 496C400.594 496 336 430.125 336 349.156C336 304.281 381.203 228.656 442.016 170.938C464.578 192.156 485.078 215.188 503.016 239.531C504.484 241.531 506.781 242.719 509.25 242.781C511.562 242.469 514.078 241.75 515.641 239.844C525.422 227.906 536.125 216.375 547.531 205.438C591.656 248.781 624 315.719 624 349.156C624 430.125 559.406 496 480 496Z" />
        </Icon>
    </>
}