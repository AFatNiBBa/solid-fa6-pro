
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dog` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dog?s=thin dog}
 * @preview ![dog](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgOTYuMDAzSDQ2NEw0NTYuODc1IDgxLjc1NEM0NTIgNzEuODc5IDQzOS4xMjUgNjQuMDA0IDQyOC4yNSA2NC4wMDRIMzc0LjYyNUwzNDcuMjUgMzYuNzU0QzM0NC4wMDYgMzMuNDcxIDM0MCAzMiAzMzYuMDY2IDMyQzMyNy44NzUgMzIgMzIwIDM4LjM3NSAzMjAgNDguMDA0VjIyNC4wMDJMMTYwIDIyNEMxNDMuODc5IDIyNCAxMjkuMzI4IDIzMC4xNjIgMTE4LjA3NCAyNDBIMTA0QzczLjEyNSAyNDAgNDggMjE0Ljg3NSA0OCAxODQuMDAxQzQ4IDE3OS41OTQgNDQuNDIyIDE3Ni4wMDEgNDAgMTc2LjAwMVMzMiAxNzkuNTk0IDMyIDE4NC4wMDFDMzIgMjIzLjY4OCA2NC4yOTcgMjU2IDEwNCAyNTZIMTA0Ljg3N0M5OS4zNzkgMjY1LjQ0NSA5NiAyNzYuMjgzIDk2IDI4OFY0ODBDOTYgNDk3LjY3NCAxMTAuMzI2IDUxMiAxMjggNTEySDE2MEMxNzcuNjc0IDUxMiAxOTIgNDk3LjY3NCAxOTIgNDgwVjM4NC4wMDFIMzUyVjQ4MEMzNTIgNDk3LjY3NCAzNjYuMzI2IDUxMiAzODQgNTEySDQxNkM0MzMuNjc0IDUxMiA0NDggNDk3LjY3NCA0NDggNDgwVjIyNC4wMDJINDgwQzUxNS4zNDYgMjI0LjAwMiA1NDQgMTk1LjM0OCA1NDQgMTYwLjAwM1YxMjguMDAzQzU0NCAxMTAuMzI5IDUyOS42NzQgOTYuMDAzIDUxMiA5Ni4wMDNaTTQzMiA0ODBDNDMyIDQ4OC44MjIgNDI0LjgyMiA0OTYgNDE2IDQ5NkgzODRDMzc1LjE3OCA0OTYgMzY4IDQ4OC44MjIgMzY4IDQ4MFYzNjguMDAxSDE3NlY0ODBDMTc2IDQ4OC44MjIgMTY4LjgyMiA0OTYgMTYwIDQ5NkgxMjhDMTE5LjE3OCA0OTYgMTEyIDQ4OC44MjIgMTEyIDQ4MFYyODhDMTEyIDI2MS41MzMgMTMzLjUzMyAyNDAgMTYwIDI0MEwzMjAgMjQwLjAwMkgzMjYuMzc5TDQzMiAyODUuMjY3VjQ4MFpNNTI4IDE2MC4wMDNDNTI4IDE4Ni40NjkgNTA2LjQ2NyAyMDguMDAyIDQ4MCAyMDguMDAySDQzMlYyNjcuODc1TDMzNiAyMjYuNzMzVjIyNC4wMDJMMzM1Ljg4NyA0OC4wOEMzMzUuOTAyIDQ4LjA2NiAzMzUuOTMyIDQ4LjA0OSAzMzUuOTYzIDQ4LjAzNVY0OC4wOTRMMzYzLjMzOCA3NS4zNDNMMzY4LjAyIDgwLjAwNEg0MjguMjVDNDMzLjE2MiA4MC4wMDQgNDQwLjM2NyA4NC40NjEgNDQyLjU2NCA4OC45MUw0NTQuMTExIDExMi4wMDNINTEyQzUyMC44MjIgMTEyLjAwMyA1MjggMTE5LjE4MSA1MjggMTI4LjAwM1YxNjAuMDAzWk00MTYgMTA0LjAwMUM0MDkuMzczIDEwNC4wMDEgNDA0IDEwOS4zNzQgNDA0IDExNi4wMDFTNDA5LjM3MyAxMjguMDAxIDQxNiAxMjguMDAxUzQyOCAxMjIuNjI4IDQyOCAxMTYuMDAxUzQyMi42MjcgMTA0LjAwMSA0MTYgMTA0LjAwMVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Dog(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M512 96.003H464L456.875 81.754C452 71.879 439.125 64.004 428.25 64.004H374.625L347.25 36.754C344.006 33.471 340 32 336.066 32C327.875 32 320 38.375 320 48.004V224.002L160 224C143.879 224 129.328 230.162 118.074 240H104C73.125 240 48 214.875 48 184.001C48 179.594 44.422 176.001 40 176.001S32 179.594 32 184.001C32 223.688 64.297 256 104 256H104.877C99.379 265.445 96 276.283 96 288V480C96 497.674 110.326 512 128 512H160C177.674 512 192 497.674 192 480V384.001H352V480C352 497.674 366.326 512 384 512H416C433.674 512 448 497.674 448 480V224.002H480C515.346 224.002 544 195.348 544 160.003V128.003C544 110.329 529.674 96.003 512 96.003ZM432 480C432 488.822 424.822 496 416 496H384C375.178 496 368 488.822 368 480V368.001H176V480C176 488.822 168.822 496 160 496H128C119.178 496 112 488.822 112 480V288C112 261.533 133.533 240 160 240L320 240.002H326.379L432 285.267V480ZM528 160.003C528 186.469 506.467 208.002 480 208.002H432V267.875L336 226.733V224.002L335.887 48.08C335.902 48.066 335.932 48.049 335.963 48.035V48.094L363.338 75.343L368.02 80.004H428.25C433.162 80.004 440.367 84.461 442.564 88.91L454.111 112.003H512C520.822 112.003 528 119.181 528 128.003V160.003ZM416 104.001C409.373 104.001 404 109.374 404 116.001S409.373 128.001 416 128.001S428 122.628 428 116.001S422.627 104.001 416 104.001Z" />
        </Icon>
    </>
}