
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dog-leashed` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dog-leashed?s=thin dog-leashed}
 * @preview ![dog-leashed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgOTYuMDAzSDQ2NEw0NTYuODc1IDgxLjc1M0M0NTIgNzEuODc4IDQzOS4xMjUgNjQuMDAzIDQyOC4yNSA2NC4wMDNIMzc0LjYyNUwzNDcuMjUgMzYuNzUzQzM0NC4wMDYgMzMuNDcgMzQwIDMxLjk5OSAzMzYuMDY2IDMxLjk5OUMzMjcuODc1IDMxLjk5OSAzMjAgMzguMzc0IDMyMCA0OC4wMDNWMjEzLjg5Nkw0NC44NzMgMS42NzNDNDEuNDM2IC0xLjAxNCAzNi4zNzMgLTAuNDIxIDMzLjY1NCAzLjE0MkMzMC45NjcgNi42NDIgMzEuNjIzIDExLjY0MiAzNS4xMjMgMTQuMzZMMzA2LjkwMiAyMjQuMDAySDMwNFYyMjRIMjg4VjIyNC4wMDJMMTYwIDIyNEMxNDMuODc5IDIyNCAxMjkuMzI4IDIzMC4xNjIgMTE4LjA3NCAyNDBIMTA0QzczLjEyNSAyNDAgNDggMjE0Ljg3NSA0OCAxODRDNDggMTc5LjU5NCA0NC40MDYgMTc2IDQwIDE3NlMzMiAxNzkuNTk0IDMyIDE4NEMzMiAyMjMuNjg3IDY0LjMxMiAyNTYgMTA0IDI1NkgxMDQuODc3Qzk5LjM3OSAyNjUuNDQ1IDk2IDI3Ni4yODMgOTYgMjg3Ljk5OVY0ODBDOTYgNDk3LjY3NCAxMTAuMzI2IDUxMiAxMjggNTEySDE2MEMxNzcuNjc0IDUxMiAxOTIgNDk3LjY3NCAxOTIgNDgwVjM4NC4wMDFIMzUyVjQ4MEMzNTIgNDk3LjY3NCAzNjYuMzI2IDUxMiAzODQgNTEySDQxNkM0MzMuNjc0IDUxMiA0NDggNDk3LjY3NCA0NDggNDgwVjIyNC4wMDJINDgwQzUxNS4zNDYgMjI0LjAwMiA1NDQgMTk1LjM0OCA1NDQgMTYwLjAwMlYxMjguMDAyQzU0NCAxMTAuMzI5IDUyOS42NzQgOTYuMDAzIDUxMiA5Ni4wMDNaTTI4OCAzNjguMDAxSDE3NlY0ODBDMTc2IDQ4OC44MjIgMTY4LjgyMiA0OTYgMTYwIDQ5NkgxMjhDMTE5LjE3OCA0OTYgMTEyIDQ4OC44MjIgMTEyIDQ4MFYyODcuOTk5QzExMiAyNjEuNTMzIDEzMy41MzMgMjQwIDE2MCAyNDBMMjg4IDI0MC4wMDJWMzY4LjAwMVpNNDMyIDQ4MEM0MzIgNDg4LjgyMiA0MjQuODIyIDQ5NiA0MTYgNDk2SDM4NEMzNzUuMTc4IDQ5NiAzNjggNDg4LjgyMiAzNjggNDgwVjM2OC4wMDFIMzA0VjI0MC4wMDJIMzI2LjM3OUw0MzIgMjg1LjI2N1Y0ODBaTTUyOCAxNjAuMDAyQzUyOCAxODYuNDY5IDUwNi40NjcgMjA4LjAwMiA0ODAgMjA4LjAwMkg0MzJWMjY3Ljg3NUwzMzYgMjI2LjczMlYyMjQuMDAyTDMzNS44ODcgNDguMDc5QzMzNS45MDIgNDguMDY1IDMzNS45MzIgNDguMDQ4IDMzNS45NjMgNDguMDM0VjQ4LjA5M0wzNjMuMzM4IDc1LjM0MkwzNjguMDIgODAuMDAzSDQyOC4yNUM0MzMuMTYyIDgwLjAwMyA0NDAuMzY3IDg0LjQ2IDQ0Mi41NjQgODguOTA5TDQ1NC4xMTEgMTEyLjAwMkg1MTJDNTIwLjgyMiAxMTIuMDAyIDUyOCAxMTkuMTggNTI4IDEyOC4wMDJWMTYwLjAwMlpNNDE2IDEwNC4wMDFDNDA5LjM3MyAxMDQuMDAxIDQwNCAxMDkuMzc0IDQwNCAxMTZTNDA5LjM3MyAxMjggNDE2IDEyOFM0MjggMTIyLjYyNyA0MjggMTE2UzQyMi42MjcgMTA0LjAwMSA0MTYgMTA0LjAwMVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function DogLeashed(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M512 96.003H464L456.875 81.753C452 71.878 439.125 64.003 428.25 64.003H374.625L347.25 36.753C344.006 33.47 340 31.999 336.066 31.999C327.875 31.999 320 38.374 320 48.003V213.896L44.873 1.673C41.436 -1.014 36.373 -0.421 33.654 3.142C30.967 6.642 31.623 11.642 35.123 14.36L306.902 224.002H304V224H288V224.002L160 224C143.879 224 129.328 230.162 118.074 240H104C73.125 240 48 214.875 48 184C48 179.594 44.406 176 40 176S32 179.594 32 184C32 223.687 64.312 256 104 256H104.877C99.379 265.445 96 276.283 96 287.999V480C96 497.674 110.326 512 128 512H160C177.674 512 192 497.674 192 480V384.001H352V480C352 497.674 366.326 512 384 512H416C433.674 512 448 497.674 448 480V224.002H480C515.346 224.002 544 195.348 544 160.002V128.002C544 110.329 529.674 96.003 512 96.003ZM288 368.001H176V480C176 488.822 168.822 496 160 496H128C119.178 496 112 488.822 112 480V287.999C112 261.533 133.533 240 160 240L288 240.002V368.001ZM432 480C432 488.822 424.822 496 416 496H384C375.178 496 368 488.822 368 480V368.001H304V240.002H326.379L432 285.267V480ZM528 160.002C528 186.469 506.467 208.002 480 208.002H432V267.875L336 226.732V224.002L335.887 48.079C335.902 48.065 335.932 48.048 335.963 48.034V48.093L363.338 75.342L368.02 80.003H428.25C433.162 80.003 440.367 84.46 442.564 88.909L454.111 112.002H512C520.822 112.002 528 119.18 528 128.002V160.002ZM416 104.001C409.373 104.001 404 109.374 404 116S409.373 128 416 128S428 122.627 428 116S422.627 104.001 416 104.001Z" />
        </Icon>
    </>
}