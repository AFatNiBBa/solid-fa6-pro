
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `horse-saddle` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/horse-saddle?s=light horse-saddle}
 * @preview ![horse-saddle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgODAuMDAyQzQ3MS4xMjUgODAuMDAyIDQ2NCA4Ny4xMjcgNDY0IDk2LjAwMlM0NzEuMTI1IDExMi4wMDIgNDgwIDExMi4wMDJTNDk2IDEwNC44NzcgNDk2IDk2LjAwMlM0ODguODc1IDgwLjAwMiA0ODAgODAuMDAyWk01NjYuNzUgNjMuNzUyQzU3Mi42MDQgNTMuNjQzIDU3NS42MjUgNDEuOTc3IDU3NS4yMDkgMjkuODA3QzU3NC42MzcgMTMuMDM1IDU2MC4wMzEgMCA1NDMuMjUgMEw0MzIgMC4wMDJDMzYyLjg3NSAwLjAwMiAzMDYuNjI1IDU1LjI1MiAzMDQuMzc1IDEyMy44NzdWMTI4SDE2MEMxMjQuNTA4IDEyOCA5My44MDcgMTQ3LjU4IDc3LjE5MyAxNzYuMjkzQzM0LjM3MyAxNzcuODAzIDAgMjEyLjc0NCAwIDI1NlYzMDRDMCAzMTIuODM2IDcuMTY0IDMyMCAxNiAzMjBTMzIgMzEyLjgzNiAzMiAzMDRWMjU2QzMyIDIzNC42NTYgNDYuMDc0IDIxNi44MjIgNjUuMzU3IDIxMC41N0M2My44NSAyMjEuMTQ2IDY0IDIyMi42NjggNjQgMjI0QzY0IDI1NiA3Mi44NzUgMjc0Ljc1IDg4LjUgMjkyLjYyNUw2Ni41IDM2Ni44NzVDNjMuNSAzNzcuNjI1IDYzLjEyNSAzODguODc1IDY1Ljc1IDM5OS42MjVMODMuOTIyIDQ3NS4yMTlDODkuMTA5IDQ5Ni43OTMgMTA4LjQwNiA1MTIgMTMwLjU5NCA1MTJIMTU0LjkzNEMxODYuMjE1IDUxMiAyMDkuMTM5IDQ4Mi41NTcgMjAxLjQ2OSA0NTIuMjNMMTg0Ljg3NSAzODYuNjI1TDIwNC4xMjUgMzMyLjg3NUwyODggMzUxLjVWNDY0QzI4OCA0OTAuNTEgMzA5LjQ5IDUxMiAzMzYgNTEySDM2OEMzOTQuNTEgNTEyIDQxNiA0OTAuNTEgNDE2IDQ2NFYzMjMuNzVDNDM2LjUgMzAyLjI1IDQ0OCAyNzQgNDQ4IDI0NC4yNVYxOTMuNzVMNDYyLjUgMjE1LjVDNDgxLjYyNSAyNDQuMTI1IDUxMi41IDIzNi4xMjUgNTE4IDIzNC4yNUw1NDMuNSAyMjUuNjI1QzU2Mi45MjYgMjE5LjA1NSA1NzYgMjAwLjgzIDU3NiAxODAuMzI0Vjg2LjI1MkM1NzYgNzYuNjI3IDU3Mi4yNSA3MC4zNzcgNTY2Ljc1IDYzLjc1MlpNMjI0IDMwNC40NTVMMTgzLjYyNSAyOTUuNUwxNTEuNSAzODVMMTcwLjQ2OSA0NjAuMDhDMTczLjAyMSA0NzAuMTg4IDE2NS4zODEgNDgwIDE1NC45NTUgNDgwSDEzMC42MDlDMTIzLjIxMyA0ODAgMTE2Ljc4MSA0NzQuOTMgMTE1LjA1MyA0NjcuNzM4TDk2Ljg0IDM5MS45NzdDOTUuNTcyIDM4Ni43MDcgOTUuNzE1IDM4MS4xOTcgOTcuMjUgMzc2TDEyNC44NzUgMjgyLjVDMTA3LjUgMjcwLjM3NSA5NiAyNTYgOTYgMjI0Qzk2IDE5OS43NjggMTA5LjcwNSAxNzguODg5IDEyOS42MjEgMTY4LjAyNUMxMzYuOTg4IDIxNS4xMDkgMTc1LjgyOCAyNTEuNDQzIDIyNCAyNTUuMTkxVjMwNC40NTVaTTE2MC44MDkgMTYwSDMwMy4xOTFDMjk5LjE1MiAxOTUuODkxIDI2OC45NjMgMjI0IDIzMiAyMjRTMTY0Ljg0OCAxOTUuODkxIDE2MC44MDkgMTYwWk01NDQgMTgwLjEyNUM1NDQgMTg3IDUzOS42MjUgMTkzLjEyNSA1MzMuMTI1IDE5NS4yNUw1MDcuNjI1IDIwNEM0OTguMjUgMjA3LjI1IDQ5MS41IDIwMS4yNSA0ODkuMTI1IDE5Ny43NUw0NjQgMTYwTDQxNiAxNDRWMjQ0LjI1QzQxNiAyNzAuODc1IDQwMy4zNzUgMjk0LjM3NSAzODQgMzA5Ljc1VjQ2NEMzODQgNDcyLjgzNiAzNzYuODM2IDQ4MCAzNjggNDgwSDMzNkMzMjcuMTY0IDQ4MCAzMjAgNDcyLjgzNiAzMjAgNDY0VjMyNS43NUwyNTYgMzExLjU1NVYyNTIuOTNDMzAxLjc2MiAyNDIuMDI5IDMzNiAyMDEuMDQ5IDMzNiAxNTJWMTI4QzMzNiA3NC45ODIgMzc4Ljk4IDMyLjAwMiA0MzIgMzIuMDAySDU0My4yNUM1NDMuMjUgNDUuMjUyIDUzNS4xMjUgNTYuNjI3IDUyMy41IDYxLjUwMkw1NDQgODYuMjUyVjE4MC4xMjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HorseSaddle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M480 80.002C471.125 80.002 464 87.127 464 96.002S471.125 112.002 480 112.002S496 104.877 496 96.002S488.875 80.002 480 80.002ZM566.75 63.752C572.604 53.643 575.625 41.977 575.209 29.807C574.637 13.035 560.031 0 543.25 0L432 0.002C362.875 0.002 306.625 55.252 304.375 123.877V128H160C124.508 128 93.807 147.58 77.193 176.293C34.373 177.803 0 212.744 0 256V304C0 312.836 7.164 320 16 320S32 312.836 32 304V256C32 234.656 46.074 216.822 65.357 210.57C63.85 221.146 64 222.668 64 224C64 256 72.875 274.75 88.5 292.625L66.5 366.875C63.5 377.625 63.125 388.875 65.75 399.625L83.922 475.219C89.109 496.793 108.406 512 130.594 512H154.934C186.215 512 209.139 482.557 201.469 452.23L184.875 386.625L204.125 332.875L288 351.5V464C288 490.51 309.49 512 336 512H368C394.51 512 416 490.51 416 464V323.75C436.5 302.25 448 274 448 244.25V193.75L462.5 215.5C481.625 244.125 512.5 236.125 518 234.25L543.5 225.625C562.926 219.055 576 200.83 576 180.324V86.252C576 76.627 572.25 70.377 566.75 63.752ZM224 304.455L183.625 295.5L151.5 385L170.469 460.08C173.021 470.188 165.381 480 154.955 480H130.609C123.213 480 116.781 474.93 115.053 467.738L96.84 391.977C95.572 386.707 95.715 381.197 97.25 376L124.875 282.5C107.5 270.375 96 256 96 224C96 199.768 109.705 178.889 129.621 168.025C136.988 215.109 175.828 251.443 224 255.191V304.455ZM160.809 160H303.191C299.152 195.891 268.963 224 232 224S164.848 195.891 160.809 160ZM544 180.125C544 187 539.625 193.125 533.125 195.25L507.625 204C498.25 207.25 491.5 201.25 489.125 197.75L464 160L416 144V244.25C416 270.875 403.375 294.375 384 309.75V464C384 472.836 376.836 480 368 480H336C327.164 480 320 472.836 320 464V325.75L256 311.555V252.93C301.762 242.029 336 201.049 336 152V128C336 74.982 378.98 32.002 432 32.002H543.25C543.25 45.252 535.125 56.627 523.5 61.502L544 86.252V180.125Z" />
        </Icon>
    </>
}