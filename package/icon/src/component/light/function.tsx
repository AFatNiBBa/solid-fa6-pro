
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `function` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/function?s=light function}
 * @preview ![function](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDggMzJIMTYwQzExNS44MTYgMzIgODAgNjcuODE2IDgwIDExMlYxOTJIMTZDNy4xOTkgMTkyIDAgMTk5LjE5OSAwIDIwOEMwIDIxNi43OTkgNy4xOTkgMjI0IDE2IDIyNEg4MFYzNjhDODAgMzk0LjUxIDU4LjUxIDQxNiAzMiA0MTZIMTZDNy4xOTkgNDE2IDAgNDIzLjE5OSAwIDQzMkMwIDQ0MC43OTkgNy4xOTkgNDQ4IDE2IDQ0OEgzMkM3Ni4xODQgNDQ4IDExMiA0MTIuMTgyIDExMiAzNjhWMjI0SDE3NkMxODQuODAxIDIyNCAxOTIgMjE2Ljc5OSAxOTIgMjA4QzE5MiAxOTkuMTk5IDE4NC44MDEgMTkyIDE3NiAxOTJIMTEyVjExMkMxMTIgODUuNDkgMTMzLjQ5IDY0IDE2MCA2NEgyMDhDMjE2LjgwMSA2NCAyMjQgNTYuNzk5IDIyNCA0OEMyMjQgMzkuMTk5IDIxNi44MDEgMzIgMjA4IDMyWk01MDcuMzM0IDI0NC42NjZDNTAxLjExMSAyMzguNDQzIDQ5MC45MyAyMzguNDQzIDQ4NC43MDkgMjQ0LjY2Nkw0MzEuNSAyOTcuMzc1TDM3OS4yOTEgMjQ0LjY2NkMzNzMuMDcgMjM4LjQ0MyAzNjIuODg5IDIzOC40NDMgMzU2LjY2NiAyNDQuNjY2QzM1MC40NDUgMjUwLjg4OSAzNTAuNDQ1IDI2MS4wNjggMzU2LjY2NiAyNjcuMjkxTDQwOC44NzUgMzIwTDM1Ni42NjYgMzcyLjcwOUMzNTAuNDQ1IDM3OC45MyAzNTAuNDQ1IDM4OS4xMTEgMzU2LjY2NiAzOTUuMzM0QzM2Mi44ODkgNDAxLjU1NSAzNzMuMDcgNDAxLjU1NSAzNzkuMjkxIDM5NS4zMzRMNDMxLjUgMzQyLjYyNUw0ODQuNzA5IDM5NS4zMzRDNDkwLjkzIDQwMS41NTUgNTAxLjExMSA0MDEuNTU1IDUwNy4zMzQgMzk1LjMzNEM1MTMuNTU1IDM4OS4xMTEgNTEzLjU1NSAzNzguOTMgNTA3LjMzNCAzNzIuNzA5TDQ1NC4xMjUgMzIwTDUwNy4zMzQgMjY3LjI5MUM1MTMuNTU1IDI2MS4wNjggNTEzLjU1NSAyNTAuODg5IDUwNy4zMzQgMjQ0LjY2NlpNMjk4IDE2My41QzI5MS4xMDkgMTU4LjAzMSAyODEuMDE2IDE1OS4xNTYgMjc1LjUgMTY2QzI0Mi4yOTcgMjA3LjUzMSAyMjQgMjYyLjIxOSAyMjQgMzIwUzI0Mi4yOTcgNDMyLjQ2OSAyNzUuNSA0NzRDMjc4LjY3MiA0NzcuOTM4IDI4My4zMTIgNDgwIDI4OC4wMTYgNDgwQzI5MS41MTYgNDgwIDI5NS4wNDcgNDc4Ljg0NCAyOTggNDc2LjVDMzA0Ljg5MSA0NzAuOTY5IDMwNi4wMTYgNDYwLjkwNiAzMDAuNSA0NTRDMjcxLjc5NyA0MTguMTI1IDI1NiAzNzAuNTMxIDI1NiAzMjBTMjcxLjc5NyAyMjEuODc1IDMwMC41IDE4NkMzMDYuMDE2IDE3OS4wOTQgMzA0Ljg5MSAxNjkuMDMxIDI5OCAxNjMuNVpNNTg4LjUgMTY2QzU4Mi45ODQgMTU5LjEyNSA1NzIuOTIyIDE1OCA1NjYgMTYzLjVDNTU5LjEwOSAxNjkuMDMxIDU1Ny45ODQgMTc5LjA5NCA1NjMuNSAxODZDNTkyLjIwMyAyMjEuODc1IDYwOCAyNjkuNDY5IDYwOCAzMjBTNTkyLjIwMyA0MTguMTI1IDU2My41IDQ1NEM1NTcuOTg0IDQ2MC45MDYgNTU5LjEwOSA0NzAuOTY5IDU2NiA0NzYuNUM1NjguOTUzIDQ3OC44NDQgNTcyLjQ4NCA0ODAgNTc1Ljk4NCA0ODBDNTgwLjY4OCA0ODAgNTg1LjM0NCA0NzcuOTM4IDU4OC41IDQ3NEM2MjEuNzAzIDQzMi40NjkgNjQwIDM3Ny43ODEgNjQwIDMyMFM2MjEuNzAzIDIwNy41MzEgNTg4LjUgMTY2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Function(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M208 32H160C115.816 32 80 67.816 80 112V192H16C7.199 192 0 199.199 0 208C0 216.799 7.199 224 16 224H80V368C80 394.51 58.51 416 32 416H16C7.199 416 0 423.199 0 432C0 440.799 7.199 448 16 448H32C76.184 448 112 412.182 112 368V224H176C184.801 224 192 216.799 192 208C192 199.199 184.801 192 176 192H112V112C112 85.49 133.49 64 160 64H208C216.801 64 224 56.799 224 48C224 39.199 216.801 32 208 32ZM507.334 244.666C501.111 238.443 490.93 238.443 484.709 244.666L431.5 297.375L379.291 244.666C373.07 238.443 362.889 238.443 356.666 244.666C350.445 250.889 350.445 261.068 356.666 267.291L408.875 320L356.666 372.709C350.445 378.93 350.445 389.111 356.666 395.334C362.889 401.555 373.07 401.555 379.291 395.334L431.5 342.625L484.709 395.334C490.93 401.555 501.111 401.555 507.334 395.334C513.555 389.111 513.555 378.93 507.334 372.709L454.125 320L507.334 267.291C513.555 261.068 513.555 250.889 507.334 244.666ZM298 163.5C291.109 158.031 281.016 159.156 275.5 166C242.297 207.531 224 262.219 224 320S242.297 432.469 275.5 474C278.672 477.938 283.312 480 288.016 480C291.516 480 295.047 478.844 298 476.5C304.891 470.969 306.016 460.906 300.5 454C271.797 418.125 256 370.531 256 320S271.797 221.875 300.5 186C306.016 179.094 304.891 169.031 298 163.5ZM588.5 166C582.984 159.125 572.922 158 566 163.5C559.109 169.031 557.984 179.094 563.5 186C592.203 221.875 608 269.469 608 320S592.203 418.125 563.5 454C557.984 460.906 559.109 470.969 566 476.5C568.953 478.844 572.484 480 575.984 480C580.688 480 585.344 477.938 588.5 474C621.703 432.469 640 377.781 640 320S621.703 207.531 588.5 166Z" />
        </Icon>
    </>
}