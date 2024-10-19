
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `car-bus` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/car-bus?s=light car-bus}
 * @preview ![car-bus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01OTUuMzc1IDI5NC41TDU3OS41IDIyNS42MjVDNTcyLjg3NSAxOTYuNSA1NDcgMTc1Ljg3NSA1MTcuMTI1IDE3NkgzNDQuMTI1QzMxNC4yNSAxNzUuODc1IDI4OC4yNSAxOTYuNSAyODEuNzUgMjI1LjYyNUwyNjUuMzc1IDI5Ni4xMjVDMjQxIDMwOC41IDIyNCAzMzMuNSAyMjQgMzYyLjYyNVY0MTcuNzVDMjI0LjEyNSA0MzcuNzUgMjM3IDQ1NS4zNzUgMjU2IDQ2MS41VjQ5NkMyNTYgNTA0Ljg3NSAyNjMuMTI1IDUxMiAyNzIgNTEyUzI4OCA1MDQuODc1IDI4OCA0OTZWNDY0SDU3NlY0OTZDNTc2IDUwNC44NzUgNTgzLjEyNSA1MTIgNTkyIDUxMlM2MDggNTA0Ljg3NSA2MDggNDk2VjQ2MS41QzYyNyA0NTUuMzc1IDYzOS44NzUgNDM3Ljc1IDY0MCA0MTcuNzVWMzYyLjYyNUM2NDAgMzMzLjEyNSA2MjIuNSAzMDYuMzc1IDU5NS4zNzUgMjk0LjVaTTMxMi44NzUgMjMyLjc1QzMxNi4yNSAyMTguMjUgMzI5LjEyNSAyMDggMzQ0LjEyNSAyMDhINTE3LjEyNUM1MzIgMjA4IDU0NSAyMTguMjUgNTQ4LjM3NSAyMzIuNzVMNTYxLjEyNSAyODhIMzAwLjEyNUwzMTIuODc1IDIzMi43NVpNNjA4IDQxNy43NUM2MDggNDI1LjYyNSA2MDEuNjI1IDQzMiA1OTMuNzUgNDMySDI3MC4yNUMyNjIuMzc1IDQzMiAyNTYgNDI1LjYyNSAyNTYgNDE3Ljc1VjM2Mi42MjVDMjU2IDMzOS4xMjUgMjc1LjEyNSAzMjAgMjk4LjYyNSAzMjBINTY1LjM3NUM1ODguODc1IDMyMCA2MDggMzM5LjEyNSA2MDggMzYyLjYyNVY0MTcuNzVaTTMyMCAzNTJDMzA2LjgwMSAzNTIgMjk2IDM2Mi43OTkgMjk2IDM3NkMyOTYgMzg5LjE5OSAzMDYuODAxIDQwMCAzMjAgNDAwUzM0NCAzODkuMTk5IDM0NCAzNzZDMzQ0IDM2Mi43OTkgMzMzLjE5OSAzNTIgMzIwIDM1MlpNNTQ0IDM1MkM1MzAuODAxIDM1MiA1MjAgMzYyLjc5OSA1MjAgMzc2QzUyMCAzODkuMTk5IDUzMC44MDEgNDAwIDU0NCA0MDBTNTY4IDM4OS4xOTkgNTY4IDM3NkM1NjggMzYyLjc5OSA1NTcuMTk5IDM1MiA1NDQgMzUyWk04MCAzMTJDODAgMzI1LjE5OSA5MC44MDEgMzM2IDEwNCAzMzZTMTI4IDMyNS4xOTkgMTI4IDMxMkMxMjggMjk4Ljc5OSAxMTcuMTk5IDI4OCAxMDQgMjg4UzgwIDI5OC43OTkgODAgMzEyWk0xNzYgMzg0SDY0QzQ2LjMyNiAzODQgMzIgMzY5LjY3MiAzMiAzNTJWMjU2SDIyNEMyMzIuODM2IDI1NiAyNDAgMjQ4LjgzNiAyNDAgMjQwQzI0MCAyMzEuMTYyIDIzMi44MzYgMjI0IDIyNCAyMjRIMjA4VjEyOEgzNTJDMzUyIDEzNi44MzYgMzU5LjE2NCAxNDQgMzY4IDE0NFMzODQgMTM2LjgzNiAzODQgMTI4VjkwQzM4NCA0OC4wNDcgMjk4LjkzIDAgMTkyIDBTMCA0OC4wNDcgMCA5MFYzNTJDMCAzNzUuNjI5IDEyLjk1MSAzOTYuMDM3IDMyIDQwNy4xMjNWNDY0QzMyIDQ3Mi44MzYgMzkuMTY0IDQ4MCA0OCA0ODBTNjQgNDcyLjgzNiA2NCA0NjRWNDE2SDE3NkMxODQuODM2IDQxNiAxOTIgNDA4LjgzNiAxOTIgNDAwQzE5MiAzOTEuMTYyIDE4NC44MzYgMzg0IDE3NiAzODRaTTMyIDkwLjAzMUMzMi44OTUgNzYuMDQxIDkyLjg2MSAzMiAxOTIgMzJTMzUxLjEwNSA3Ni4wNDEgMzUyIDkwVjk2SDMyVjkwLjAzMVpNMzIgMTI4SDE3NlYyMjRIMzJWMTI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CarBus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M595.375 294.5L579.5 225.625C572.875 196.5 547 175.875 517.125 176H344.125C314.25 175.875 288.25 196.5 281.75 225.625L265.375 296.125C241 308.5 224 333.5 224 362.625V417.75C224.125 437.75 237 455.375 256 461.5V496C256 504.875 263.125 512 272 512S288 504.875 288 496V464H576V496C576 504.875 583.125 512 592 512S608 504.875 608 496V461.5C627 455.375 639.875 437.75 640 417.75V362.625C640 333.125 622.5 306.375 595.375 294.5ZM312.875 232.75C316.25 218.25 329.125 208 344.125 208H517.125C532 208 545 218.25 548.375 232.75L561.125 288H300.125L312.875 232.75ZM608 417.75C608 425.625 601.625 432 593.75 432H270.25C262.375 432 256 425.625 256 417.75V362.625C256 339.125 275.125 320 298.625 320H565.375C588.875 320 608 339.125 608 362.625V417.75ZM320 352C306.801 352 296 362.799 296 376C296 389.199 306.801 400 320 400S344 389.199 344 376C344 362.799 333.199 352 320 352ZM544 352C530.801 352 520 362.799 520 376C520 389.199 530.801 400 544 400S568 389.199 568 376C568 362.799 557.199 352 544 352ZM80 312C80 325.199 90.801 336 104 336S128 325.199 128 312C128 298.799 117.199 288 104 288S80 298.799 80 312ZM176 384H64C46.326 384 32 369.672 32 352V256H224C232.836 256 240 248.836 240 240C240 231.162 232.836 224 224 224H208V128H352C352 136.836 359.164 144 368 144S384 136.836 384 128V90C384 48.047 298.93 0 192 0S0 48.047 0 90V352C0 375.629 12.951 396.037 32 407.123V464C32 472.836 39.164 480 48 480S64 472.836 64 464V416H176C184.836 416 192 408.836 192 400C192 391.162 184.836 384 176 384ZM32 90.031C32.895 76.041 92.861 32 192 32S351.105 76.041 352 90V96H32V90.031ZM32 128H176V224H32V128Z" />
        </Icon>
    </>
}