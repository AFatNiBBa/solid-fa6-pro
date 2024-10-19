
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cannabis` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cannabis?s=regular cannabis}
 * @preview ![cannabis](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTEuNDA2IDMyNi45MzhDNDg5LjE1NiAzMjUuNzgxIDQ3NC41IDMxOC4zMTMgNDUxLjkwNiAzMTFDNDk2LjM3NSAyNDYuOTA2IDUxMC40MzggMTg0LjAzMSA1MTEuMDk0IDE4MUM1MTMuODc1IDE2OC4zNDQgNTEwLjA5NCAxNTUuMTg4IDUwMC4zMTIgMTQ1LjE1NkM0OTAuOTM3IDEzNi4zMTIgNDc1LjU2MiAxMzMuMDk0IDQ2NS44NzUgMTM1LjE4OEM0NjUuMjE5IDEzNS4zMTIgNDA4LjQ2OSAxNDYuODQ0IDM0Ni41IDE4NS43MTlDMzM2LjQzNyA5OC4xNTYgMjk3LjM0NCAzMS44NDQgMjg4LjI1IDE3LjM3NUMyNzMuODc1IC00LjQzOCAyMzguNTMxIC01LjA2MiAyMjMuMzQ0IDE4QzIxNC41OTQgMzEuOTA2IDE3NS41MzEgOTguMTg4IDE2NS41IDE4NS44MTJDMTA1LjUgMTQ4LjM0NCA0OS41MzEgMTM1LjkzNyA0Ny4yMTkgMTM1LjQ2OUwzOC41IDEzNC40MzhDMjguNTMxIDEzNC40MzggMTkgMTM4LjI1IDExLjIxOSAxNDUuNjI1QzEuOTM3IDE1NC45MDYgLTEuOTA2IDE2OC4xMjUgMC45MDYgMTgwLjk2OUMxLjU2MiAxODQgMTUuNjI1IDI0Ni45MDYgNjAuMDk0IDMxMUMzNy41IDMxOC4zMTIgMjIuODEyIDMyNS43ODEgMjAuNSAzMjYuOTY5QzcuODQ0IDMzMy42MjUgMCAzNDYuNjU2IDAgMzYwLjkzOEMwIDM3NS4zMTMgNy45MDYgMzg4LjM0NCAyMC4xNTYgMzk0LjcxOUMyMC42ODggMzk1IDY4LjA5NCA0MjAuNTk0IDEzMiA0MjUuNDY5QzEzMS4yMTkgNDI3LjY1NiAxMzAuNzUgNDI5LjEyNSAxMzAuNTk0IDQyOS42NTZDMTI2LjAzMSA0NDMuNDM4IDEyOS41OTQgNDU4LjQwNiAxMzkuNzUgNDY4LjU5NEMxNDkuNzgxIDQ3OC43NSAxNjQuNTYyIDQ4Mi41MzEgMTc4LjM0NCA0NzguMzQ0QzE4My41NDkgNDc2Ljc5NyAyMDguMTQ1IDQ2My4zNzcgMjMyIDQ0OS4xMDVWNDg4Ljk2OUMyMzIgNTAyLjIxOSAyNDIuNzUgNTEyLjk2OSAyNTYgNTEyLjk2OVMyODAgNTAyLjIxOSAyODAgNDg4Ljk2OVY0NDkuMTA1QzMwMy44NTQgNDYzLjM3NyAzMjguNDQ1IDQ3Ni43OTcgMzMzLjYyNSA0NzguMzQ0QzMzNy4zNzUgNDc5LjQ2OSAzNDEuMTg4IDQ4MCAzNDQuOTY5IDQ4MEMzNTUuMDk0IDQ4MCAzNjQuODQ0IDQ3Ni4wOTQgMzcxLjgxMiA0NjlDMzgyLjIxOSA0NTguOTM4IDM4NiA0NDMuNSAzODEuNzUgNDMwLjc1QzM4MS41IDQyOS44NzUgMzgwLjkwNiA0MjguMDYyIDM3OS45NjkgNDI1LjQ2OUM0NDMuOTA2IDQyMC41OTQgNDkxLjI4MSAzOTUgNDkxLjM3NSAzOTQuOTM3QzUwNC4wOTQgMzg4LjM0NCA1MTIgMzc1LjMxMiA1MTIgMzYwLjkzOEM1MTIgMzQ2LjY1NiA1MDQuMTU2IDMzMy42MjUgNDkxLjQwNiAzMjYuOTM4Wk0zNTkuMzEyIDM3OC4yNUMzNTMuOTY5IDM3OC4yNSAzNDguODQ0IDM3OC4xMjUgMzQ0LjAzMSAzNzhMMzAzLjU2MiAzNzdMMzIyLjA5NCA0MTNDMzIzLjM3NSA0MTUuNSAzMjQuNTYyIDQxNy44NzUgMzI1LjY1NiA0MjAuMTg4QzMxMy44NzUgNDEzLjUzMSAyOTkuMjgxIDQwNC45NjkgMjg0LjkzOCAzOTUuNzgxTDI4MCAzOTIuNjIxVjMxMkMyODAgMjk4Ljc1IDI2OS4yNSAyODggMjU2IDI4OFMyMzIgMjk4Ljc1IDIzMiAzMTJWMzkyLjYyMUwyMjcuMDYyIDM5NS43ODFDMjEyLjU5NCA0MDUuMDYzIDE5Ny44MTIgNDEzLjY4OCAxODYuMjgxIDQyMC4yNUMxODcuMzc1IDQxNy45NjkgMTg4LjU2MiA0MTUuNTMxIDE4OS44NzUgNDEzLjAzMUwyMDguNTMxIDM3N0wxNjcuOTY5IDM3OEMxNjMuMTU2IDM3OC4xMjUgMTU4LjAzMSAzNzguMjUgMTUyLjY4NyAzNzguMjVDMTE1LjE1NiAzNzguMjUgODIuMzEyIDM2OC41MzEgNjIuNTMxIDM2MC45NjlDNzMuNDY5IDM1Ni44NzUgODguNDA2IDM1Mi4wNjIgMTA1LjkwNiAzNDguNTk0TDE0Ni4zMTIgMzQwLjU5NEwxMTkuNDM4IDMwOS40MDZDNzkuODEyIDI2My4zNzUgNjAuMTI1IDIxMS44NDQgNTIuMTg4IDE4Ni41MzFDNzYuOTA2IDE5NC4wOTQgMTI2Ljc4MSAyMTIuNjI1IDE3Mi4wMzEgMjQ5LjIxOUwyMTEuMTI1IDI4MC44NDRWMjI2LjYyNUMyMTEuMTI1IDE1MC4yMTkgMjQxLjA2MyA4NS4wOTQgMjU2IDU3LjM3NUMyNzEuMDMxIDg1LjM0NCAzMDAuODc1IDE1MC4zNzUgMzAwLjg3NSAyMjYuNjI1VjI4MC44NDRMMzM5Ljk2OSAyNDkuMjE5QzM4Ni4wNjMgMjExLjkzNyA0MzYuMzEzIDE5My41MzEgNDU5Ljg3NSAxODYuMjgxQzQ1MiAyMTEuNSA0MzIuMzEyIDI2My4yMTkgMzkyLjU2MiAzMDkuNDA2TDM2NS42ODcgMzQwLjU5NEw0MDYuMDk0IDM0OC41OTRDNDIzLjYyNSAzNTIuMDk0IDQzOC41NjIgMzU2Ljg3NSA0NDkuNSAzNjFDNDI5Ljc4MSAzNjguNDY5IDM5Ni45MDYgMzc4LjI1IDM1OS4zMTIgMzc4LjI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Cannabis(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M491.406 326.938C489.156 325.781 474.5 318.313 451.906 311C496.375 246.906 510.438 184.031 511.094 181C513.875 168.344 510.094 155.188 500.312 145.156C490.937 136.312 475.562 133.094 465.875 135.188C465.219 135.312 408.469 146.844 346.5 185.719C336.437 98.156 297.344 31.844 288.25 17.375C273.875 -4.438 238.531 -5.062 223.344 18C214.594 31.906 175.531 98.188 165.5 185.812C105.5 148.344 49.531 135.937 47.219 135.469L38.5 134.438C28.531 134.438 19 138.25 11.219 145.625C1.937 154.906 -1.906 168.125 0.906 180.969C1.562 184 15.625 246.906 60.094 311C37.5 318.312 22.812 325.781 20.5 326.969C7.844 333.625 0 346.656 0 360.938C0 375.313 7.906 388.344 20.156 394.719C20.688 395 68.094 420.594 132 425.469C131.219 427.656 130.75 429.125 130.594 429.656C126.031 443.438 129.594 458.406 139.75 468.594C149.781 478.75 164.562 482.531 178.344 478.344C183.549 476.797 208.145 463.377 232 449.105V488.969C232 502.219 242.75 512.969 256 512.969S280 502.219 280 488.969V449.105C303.854 463.377 328.445 476.797 333.625 478.344C337.375 479.469 341.188 480 344.969 480C355.094 480 364.844 476.094 371.812 469C382.219 458.938 386 443.5 381.75 430.75C381.5 429.875 380.906 428.062 379.969 425.469C443.906 420.594 491.281 395 491.375 394.937C504.094 388.344 512 375.312 512 360.938C512 346.656 504.156 333.625 491.406 326.938ZM359.312 378.25C353.969 378.25 348.844 378.125 344.031 378L303.562 377L322.094 413C323.375 415.5 324.562 417.875 325.656 420.188C313.875 413.531 299.281 404.969 284.938 395.781L280 392.621V312C280 298.75 269.25 288 256 288S232 298.75 232 312V392.621L227.062 395.781C212.594 405.063 197.812 413.688 186.281 420.25C187.375 417.969 188.562 415.531 189.875 413.031L208.531 377L167.969 378C163.156 378.125 158.031 378.25 152.687 378.25C115.156 378.25 82.312 368.531 62.531 360.969C73.469 356.875 88.406 352.062 105.906 348.594L146.312 340.594L119.438 309.406C79.812 263.375 60.125 211.844 52.188 186.531C76.906 194.094 126.781 212.625 172.031 249.219L211.125 280.844V226.625C211.125 150.219 241.063 85.094 256 57.375C271.031 85.344 300.875 150.375 300.875 226.625V280.844L339.969 249.219C386.063 211.937 436.313 193.531 459.875 186.281C452 211.5 432.312 263.219 392.562 309.406L365.687 340.594L406.094 348.594C423.625 352.094 438.562 356.875 449.5 361C429.781 368.469 396.906 378.25 359.312 378.25Z" />
        </Icon>
    </>
}