
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `saxophone-fire` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/saxophone-fire?s=thin saxophone-fire}
 * @preview ![saxophone-fire](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjYuMDk0IDE4Mi41MzFDMTY3LjUgMTgzLjUzMSAxNjkuMTI1IDE4NCAxNzAuNzE5IDE4NEMxNzMuMjE5IDE4NCAxNzUuNjg3IDE4Mi44MTIgMTc3LjI1IDE4MC42MjVDMTg1LjEyNSAxNjkuNDY5IDE4OS40NjkgMTU1Ljg3NSAxODkuNDM4IDE0MS42MjVDMTg4LjkwNiAxMzUuODEyIDE4NC45MzggMTI0Ljk2OSAxNzkuMDMxIDExMy4zNDRDMTc3LjgxMiAxMTAuOTA2IDE3NS40NjkgMTA5LjI4MSAxNzIuNzgxIDEwOC45NjlDMTY5LjcxOSAxMDguNTk0IDE2Ny4zNzUgMTA5Ljc4MSAxNjUuNzE5IDExMS44NzVMMTQ2LjUgMTM1LjQzOEwxMDguMjUgODIuODEyQzEwNi43NSA4MC43MTkgMTA0LjM0NCA3OS40NjkgMTAxLjc4MSA3OS40NjlIMTAxLjc1Qzk5LjE4OCA3OS40NjkgOTYuNzgxIDgwLjY4NyA5NS4yODEgODIuNzVDNzYuNDA2IDEwOC42MjUgNjYuNTMxIDEzMi4zMTIgNjYuNTMxIDE0Mi4zNDRDNjYuNTMxIDE1Ni4yNSA3MC43ODEgMTY5LjUzMSA3OC43ODEgMTgwLjY1NkM4MS4zNzUgMTg0LjI4MSA4Ni4zNzUgMTg1IDg5LjkzOCAxODIuNUM5My41MzEgMTc5LjkwNiA5NC4zNDQgMTc0LjkwNiA5MS43ODEgMTcxLjM0NEM4NS44MTMgMTYzLjAzMSA4Mi41MzEgMTUyLjc1IDgyLjUzMSAxNDIuMzQ0QzgyLjUzMSAxMzguODEyIDg3LjI4MSAxMjMuMzEyIDEwMS45MDYgMTAxLjI1TDEzOS42NTYgMTUzLjI1QzE0MS4wOTQgMTU1LjI4MSAxNDMuNDA2IDE1Ni41IDE0NS45MDYgMTU2LjU2MkMxNDcuODc1IDE1NiAxNTAuNzUgMTU1LjUgMTUyLjMxMiAxNTMuNjI1TDE3MCAxMzEuOTM4QzE3Mi4zNDQgMTM3Ljc1IDE3My4zNzUgMTQxLjQ2OSAxNzMuNDY5IDE0Mi4zNDRDMTczLjQ2OSAxNTIuNTk0IDE3MC4xNTYgMTYyLjkwNiAxNjQuMTg4IDE3MS4zNzVDMTYxLjYyNSAxNzUgMTYyLjUgMTgwIDE2Ni4wOTQgMTgyLjUzMVpNNjMzIDEwMS43NUw2MDYuNDM4IDc1LjM0NEM1OTkgNjguMDMxIDU4OS4xNTYgNjQgNTc4Ljc1IDY0SDUzMy4wMzFDNTE0LjI1IDY0IDQ5Ni41OTQgNzEuMjUgNDgzLjI4MSA4NC40MDZMNDMzLjIyNSAxMzMuOTEyTDQyMS42NTYgMTIyLjM0NEM0MTguNTMxIDExOS4yMTkgNDEzLjQ2OSAxMTkuMjE5IDQxMC4zNDQgMTIyLjM0NFM0MDcuMjE5IDEzMC41MzEgNDEwLjM0NCAxMzMuNjU2TDQyMS44NSAxNDUuMTYyTDM4NC45NjEgMTgxLjY0OEwzNzMuNjU2IDE3MC4zNDRDMzcwLjUzMSAxNjcuMjE5IDM2NS40NjkgMTY3LjIxOSAzNjIuMzQ0IDE3MC4zNDRTMzU5LjIxOSAxNzguNTMxIDM2Mi4zNDQgMTgxLjY1NkwzNzMuNTg2IDE5Mi44OThMMzM2LjY5NSAyMjkuMzgzTDMyNS42NTYgMjE4LjM0NEMzMjIuNTMxIDIxNS4yMTkgMzE3LjQ2OSAyMTUuMjE5IDMxNC4zNDQgMjE4LjM0NFMzMTEuMjE5IDIyNi41MzEgMzE0LjM0NCAyMjkuNjU2TDMyNS4zMiAyNDAuNjMzTDIwNy4xNTYgMzU3LjVDMjAxLjEyNSAzNjMuMzc1IDE5MS42MjUgMzYzLjkzOCAxODQuOTY5IDM1OC44MTJDMTc4LjM3NSAzNTMuNzUgMTc2LjYyNSAzNDQuNTMxIDE4MC43MTkgMzM3LjY1NkwyMzAuNzE5IDI2MC4zNDRDMjMzLjEyNSAyNTYuNjI1IDIzMi4wNjMgMjUxLjY4OCAyMjguMzQ0IDI0OS4yODFDMjI0LjY1NiAyNDYuODc1IDIxOS42ODggMjQ3LjkzOCAyMTcuMjgxIDI1MS42NTZMMTY3LjEyNSAzMjkuMjE5QzE1OC43MTkgMzQzLjMxMiAxNjIuMTg4IDM2MS40NjkgMTc1LjE4OCAzNzEuNDY5QzE4OCAzODEuNSAyMDYuNjI1IDM4MC4zNDQgMjE4LjM3NSAzNjguOTA2TDMzNi42MzMgMjUxLjk0NUwzNDYuMzQ0IDI2MS42NTZDMzQ3LjkwNiAyNjMuMjE5IDM0OS45MzggMjY0IDM1MiAyNjRTMzU2LjA5NCAyNjMuMjE5IDM1Ny42NTYgMjYxLjY1NkMzNjAuNzgxIDI1OC41MzEgMzYwLjc4MSAyNTMuNDY5IDM1Ny42NTYgMjUwLjM0NEwzNDguMDA4IDI0MC42OTVMMzg0Ljg5OCAyMDQuMjExTDM5NC4zNDQgMjEzLjY1NkMzOTUuOTA2IDIxNS4yMTkgMzk3LjkzOCAyMTYgNDAwIDIxNlM0MDQuMDk0IDIxNS4yMTkgNDA1LjY1NiAyMTMuNjU2QzQwOC43ODEgMjEwLjUzMSA0MDguNzgxIDIwNS40NjkgNDA1LjY1NiAyMDIuMzQ0TDM5Ni4yNzMgMTkyLjk2MUw0MzMuMTY0IDE1Ni40NzdMNDQyLjM0NCAxNjUuNjU2QzQ0My45MDYgMTY3LjIxOSA0NDUuOTM4IDE2OCA0NDggMTY4UzQ1Mi4wOTQgMTY3LjIxOSA0NTMuNjU2IDE2NS42NTZDNDU2Ljc4MSAxNjIuNTMxIDQ1Ni43ODEgMTU3LjQ2OSA0NTMuNjU2IDE1NC4zNDRMNDQ0LjUzOSAxNDUuMjI3TDQ5NC41MzEgOTUuNzgxQzUwNC44MTIgODUuNTk0IDUxOC41IDgwIDUzMy4wMzEgODBINTc4Ljc1QzU4NC45MzggODAgNTkwLjc4MSA4Mi40MDYgNTk1LjE4OCA4Ni43MTlMNjIxLjc4MSAxMTMuMTU2QzYyNC45MzggMTE2LjI1IDYyNCAxMTkuNjg4IDYyMy40MzggMTIxLjA2MkM2MjMgMTIyLjE1NiA2MjEuMTU2IDEyNS43MTkgNjE2LjQwNiAxMjUuNzE5SDU1My4zNzVDNTQxLjQ2OSAxMjUuNzE5IDUzMC4zNDQgMTMxIDUyMi43ODEgMTQwLjI1TDI4Mi45MzcgNDM2Ljg3NUwyODAuMTI1IDQzOS45NjlDMjY2LjUzMSA0NTUuMzEyIDIzMC40MzggNDk2IDE2My45NjkgNDk2SDE2My4yNUMxMzkuNDA2IDQ5NiAxMTUuOTY5IDQ4OS45NjkgOTUuMjgxIDQ3OC40NjlDNDYuMzc1IDQ1Mi45MzggMTYgNDAzLjYyNSAxNiAzNDkuNzE5QzE2IDMyNi42MjUgMjMuOTY5IDI5MC4zNDQgMzEuNzgxIDI1Ny44NzVDMzIuODEzIDI1My41NjIgMzAuMTU2IDI0OS4yNSAyNS44NzUgMjQ4LjIxOUMyMS42NTYgMjQ3LjI1IDE3LjI1IDI0OS44NDQgMTYuMjE5IDI1NC4xMjVDOC4xODggMjg3LjUgMCAzMjQuOTY5IDAgMzQ5LjcxOUMwIDQwOS41OTQgMzMuNjg4IDQ2NC4zNzUgODcuNjg4IDQ5Mi41NjJDMTEwLjU2MiA1MDUuMjgxIDEzNi42ODggNTEyIDE2My4yMTkgNTEySDE2NEMyMzcuNjI1IDUxMiAyNzcuMjE5IDQ2Ny4zNzUgMjkyLjA5NCA0NTAuNTk0TDUzNS4xODggMTUwLjM0NEM1MzkuNjg4IDE0NC44NzUgNTQ2LjMxMiAxNDEuNzE5IDU1My4zNzUgMTQxLjcxOUg2MTYuNDA2QzYyNi4wNjMgMTQxLjcxOSA2MzQuNjI1IDEzNS45NjkgNjM4LjI1IDEyNy4wOTRDNjQxLjg3NSAxMTguMTg4IDYzOS44NzUgMTA4LjQ2OSA2MzMgMTAxLjc1Wk04IDIyNEgyNDhDMjUyLjQwNiAyMjQgMjU2IDIyMC40MDYgMjU2IDIxNlMyNTIuNDA2IDIwOCAyNDggMjA4SDhDMy41OTQgMjA4IDAgMjExLjU5NCAwIDIxNlMzLjU5NCAyMjQgOCAyMjRaTTI5LjE4OCAxODMuNTk0QzMzLjM3NSAxODIuMjE5IDM1LjY1NiAxNzcuNjg4IDM0LjI4MSAxNzMuNUMzMC45NjkgMTYzLjM3NSAyOS4yMTkgMTUyLjg0NCAyOS4wOTQgMTQyLjM0NEMyOS4wOTQgMTExLjUzMSA1OS43ODEgNTkuNDY5IDEwMS4zMTIgMTkuMDMxQzExNi41IDMzLjY1NiAxMzAuMjUgNDkuMzc1IDE0Mi4xODggNjUuODEyQzE0My42MjUgNjcuODEyIDE0NS45MzggNjkgMTQ4LjQwNiA2OS4wOTRDMTUxLjQzOCA2OS4yNSAxNTMuMjUgNjguMDk0IDE1NC44NDQgNjYuMTg4QzE2MS4zNzUgNTguMjUgMTY4LjI4MSA1MC42ODggMTc1LjQ2OSA0My41OTRDMjA0LjgxMiA3My43MTkgMjI2LjkwNiAxMTkuOTY5IDIyNi45MDYgMTQyLjI1QzIyNi43ODEgMTUyLjg0NCAyMjUuMDMxIDE2My4zNzUgMjIxLjcxOSAxNzMuNUMyMjAuMzQ0IDE3Ny42ODggMjIyLjYyNSAxODIuMjE5IDIyNi44MTIgMTgzLjU5NEMyMjcuNjU2IDE4My44NzUgMjI4LjUgMTg0IDIyOS4zMTIgMTg0QzIzMi42ODggMTg0IDIzNS44MTIgMTgxLjg3NSAyMzYuOTA2IDE3OC41QzI0MC43NSAxNjYuODEyIDI0Mi43ODEgMTU0LjY1NiAyNDIuOTA2IDE0Mi4zNDRDMjQyLjkwNiAxMTQuNzgxIDIxNy40NjkgNjAuNDY5IDE4MC45MzggMjYuNTk0QzE3Ny44NzUgMjMuNzgxIDE3My4wOTQgMjMuNzUgMTcwLjAzMSAyNi42MjVDMTYyLjc4MSAzMy40MDYgMTU1Ljc1IDQwLjY1NiAxNDkuMDYyIDQ4LjI4MUMxMzYuNSAzMi4wMzEgMTIyLjMxMiAxNi41MzEgMTA2LjcxOSAyLjEyNUMxMDMuNjU2IC0wLjY4OCA5OC45MDYgLTAuNjg4IDk1Ljg0NCAyLjEyNUM0Ny45MDYgNDYuNjU2IDEzLjA5NCAxMDUuNjI1IDEzLjA5NCAxNDIuNDM3QzEzLjIxOSAxNTQuNjU2IDE1LjI1IDE2Ni44MTIgMTkuMDk0IDE3OC41QzIwLjQ2OSAxODIuNjg4IDI0Ljg3NSAxODUuMDMxIDI5LjE4OCAxODMuNTk0Wk03MiAzNzZDNzIgMzg0LjgzNiA3OS4xNjQgMzkyIDg4IDM5MlMxMDQgMzg0LjgzNiAxMDQgMzc2Uzk2LjgzNiAzNjAgODggMzYwUzcyIDM2Ny4xNjQgNzIgMzc2Wk0xMDQgMjgwQzEwNCAyODguODM2IDExMS4xNjQgMjk2IDEyMCAyOTZTMTM2IDI4OC44MzYgMTM2IDI4MFMxMjguODM2IDI2NCAxMjAgMjY0UzEwNCAyNzEuMTY0IDEwNCAyODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SaxophoneFire(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M166.094 182.531C167.5 183.531 169.125 184 170.719 184C173.219 184 175.687 182.812 177.25 180.625C185.125 169.469 189.469 155.875 189.438 141.625C188.906 135.812 184.938 124.969 179.031 113.344C177.812 110.906 175.469 109.281 172.781 108.969C169.719 108.594 167.375 109.781 165.719 111.875L146.5 135.438L108.25 82.812C106.75 80.719 104.344 79.469 101.781 79.469H101.75C99.188 79.469 96.781 80.687 95.281 82.75C76.406 108.625 66.531 132.312 66.531 142.344C66.531 156.25 70.781 169.531 78.781 180.656C81.375 184.281 86.375 185 89.938 182.5C93.531 179.906 94.344 174.906 91.781 171.344C85.813 163.031 82.531 152.75 82.531 142.344C82.531 138.812 87.281 123.312 101.906 101.25L139.656 153.25C141.094 155.281 143.406 156.5 145.906 156.562C147.875 156 150.75 155.5 152.312 153.625L170 131.938C172.344 137.75 173.375 141.469 173.469 142.344C173.469 152.594 170.156 162.906 164.188 171.375C161.625 175 162.5 180 166.094 182.531ZM633 101.75L606.438 75.344C599 68.031 589.156 64 578.75 64H533.031C514.25 64 496.594 71.25 483.281 84.406L433.225 133.912L421.656 122.344C418.531 119.219 413.469 119.219 410.344 122.344S407.219 130.531 410.344 133.656L421.85 145.162L384.961 181.648L373.656 170.344C370.531 167.219 365.469 167.219 362.344 170.344S359.219 178.531 362.344 181.656L373.586 192.898L336.695 229.383L325.656 218.344C322.531 215.219 317.469 215.219 314.344 218.344S311.219 226.531 314.344 229.656L325.32 240.633L207.156 357.5C201.125 363.375 191.625 363.938 184.969 358.812C178.375 353.75 176.625 344.531 180.719 337.656L230.719 260.344C233.125 256.625 232.063 251.688 228.344 249.281C224.656 246.875 219.688 247.938 217.281 251.656L167.125 329.219C158.719 343.312 162.188 361.469 175.188 371.469C188 381.5 206.625 380.344 218.375 368.906L336.633 251.945L346.344 261.656C347.906 263.219 349.938 264 352 264S356.094 263.219 357.656 261.656C360.781 258.531 360.781 253.469 357.656 250.344L348.008 240.695L384.898 204.211L394.344 213.656C395.906 215.219 397.938 216 400 216S404.094 215.219 405.656 213.656C408.781 210.531 408.781 205.469 405.656 202.344L396.273 192.961L433.164 156.477L442.344 165.656C443.906 167.219 445.938 168 448 168S452.094 167.219 453.656 165.656C456.781 162.531 456.781 157.469 453.656 154.344L444.539 145.227L494.531 95.781C504.812 85.594 518.5 80 533.031 80H578.75C584.938 80 590.781 82.406 595.188 86.719L621.781 113.156C624.938 116.25 624 119.688 623.438 121.062C623 122.156 621.156 125.719 616.406 125.719H553.375C541.469 125.719 530.344 131 522.781 140.25L282.937 436.875L280.125 439.969C266.531 455.312 230.438 496 163.969 496H163.25C139.406 496 115.969 489.969 95.281 478.469C46.375 452.938 16 403.625 16 349.719C16 326.625 23.969 290.344 31.781 257.875C32.813 253.562 30.156 249.25 25.875 248.219C21.656 247.25 17.25 249.844 16.219 254.125C8.188 287.5 0 324.969 0 349.719C0 409.594 33.688 464.375 87.688 492.562C110.562 505.281 136.688 512 163.219 512H164C237.625 512 277.219 467.375 292.094 450.594L535.188 150.344C539.688 144.875 546.312 141.719 553.375 141.719H616.406C626.063 141.719 634.625 135.969 638.25 127.094C641.875 118.188 639.875 108.469 633 101.75ZM8 224H248C252.406 224 256 220.406 256 216S252.406 208 248 208H8C3.594 208 0 211.594 0 216S3.594 224 8 224ZM29.188 183.594C33.375 182.219 35.656 177.688 34.281 173.5C30.969 163.375 29.219 152.844 29.094 142.344C29.094 111.531 59.781 59.469 101.312 19.031C116.5 33.656 130.25 49.375 142.188 65.812C143.625 67.812 145.938 69 148.406 69.094C151.438 69.25 153.25 68.094 154.844 66.188C161.375 58.25 168.281 50.688 175.469 43.594C204.812 73.719 226.906 119.969 226.906 142.25C226.781 152.844 225.031 163.375 221.719 173.5C220.344 177.688 222.625 182.219 226.812 183.594C227.656 183.875 228.5 184 229.312 184C232.688 184 235.812 181.875 236.906 178.5C240.75 166.812 242.781 154.656 242.906 142.344C242.906 114.781 217.469 60.469 180.938 26.594C177.875 23.781 173.094 23.75 170.031 26.625C162.781 33.406 155.75 40.656 149.062 48.281C136.5 32.031 122.312 16.531 106.719 2.125C103.656 -0.688 98.906 -0.688 95.844 2.125C47.906 46.656 13.094 105.625 13.094 142.437C13.219 154.656 15.25 166.812 19.094 178.5C20.469 182.688 24.875 185.031 29.188 183.594ZM72 376C72 384.836 79.164 392 88 392S104 384.836 104 376S96.836 360 88 360S72 367.164 72 376ZM104 280C104 288.836 111.164 296 120 296S136 288.836 136 280S128.836 264 120 264S104 271.164 104 280Z" />
        </Icon>
    </>
}