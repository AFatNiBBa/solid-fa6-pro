
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `boxing-glove` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/boxing-glove?s=light boxing-glove}
 * @preview ![boxing-glove](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgMTI5LjYwOVY5NkM0MTYgNDMuMDYyIDM3Mi45MzggMCAzMjAgMEgxMjhDNzUuMDYyIDAgMzIgNDMuMDYyIDMyIDk2VjI4OEMzMiAzMTUuNDA2IDQzLjU2MiAzNDAuOTIyIDY0IDM1OS4xODhWNDQ4QzY0IDQ4My4yOTcgOTIuNzAzIDUxMiAxMjggNTEySDMyMEMzNTUuMjk3IDUxMiAzODQgNDgzLjI5NyAzODQgNDQ4VjM5MC42MjVMNDQ3LjE4OCAzMjcuNDM3QzQ2OC4zNDQgMzA2LjI4MSA0ODAgMjc4LjE1NiA0ODAgMjQ4LjIzNFYyMDhDNDgwIDE2OS4zNTkgNDUyLjQ2OSAxMzcuMDQ3IDQxNiAxMjkuNjA5Wk00NDggMjQ4LjIzNEM0NDggMjY5LjYwOSA0MzkuNjcyIDI4OS43MDMgNDI0LjU2MiAzMDQuODEyTDM1MiAzNzcuMzc1VjQ0OEMzNTIgNDY1LjY0MSAzMzcuNjQxIDQ4MCAzMjAgNDgwSDEyOEMxMTAuMzU5IDQ4MCA5NiA0NjUuNjQxIDk2IDQ0OFYzNDMuNjcyTDg5LjY0MSAzMzguODc1QzczLjM0NCAzMjYuNTYyIDY0IDMwOC4wMTYgNjQgMjg4Vjk2QzY0IDYwLjcwMyA5Mi43MDMgMzIgMTI4IDMySDMyMEMzNTUuMjk3IDMyIDM4NCA2MC43MDMgMzg0IDk2VjEyOEgzNjhDMzI5LjM2OSAxMjggMjk3LjA1MyAxNTUuNTI5IDI4OS42MTkgMTkySDIxNy42ODhDMTgzLjEyNSAxOTIgMTQ5LjY0MSAxODEuODU5IDEyMC44NzUgMTYyLjY4OEMxMTMuNSAxNTcuNzgxIDEwMy41NjIgMTU5Ljc1IDk4LjY4OCAxNjcuMTI1QzkzLjc4MSAxNzQuNDg0IDk1Ljc4MSAxODQuNDA2IDEwMy4xMjUgMTg5LjMxMkMxMzcuMTcyIDIxMiAxNzYuNzgxIDIyNCAyMTcuNjg4IDIyNEgyODkuNjE5QzI5Ny4wNTMgMjYwLjQ3MSAzMjkuMzY5IDI4OCAzNjggMjg4QzM3Ni44NDQgMjg4IDM4NCAyODAuODQ0IDM4NCAyNzJTMzc2Ljg0NCAyNTYgMzY4IDI1NkMzNDEuNTMxIDI1NiAzMjAgMjM0LjQ2OSAzMjAgMjA4UzM0MS41MzEgMTYwIDM2OCAxNjBINDAwQzQyNi40NjkgMTYwIDQ0OCAxODEuNTMxIDQ0OCAyMDhWMjQ4LjIzNFpNMjg1LjMxMiAzNDMuMTI1QzI4MC4zOTEgMzM1Ljc1IDI3MC41IDMzMy43OTcgMjYzLjEyNSAzMzguNjg3TDIyNCAzNjQuNzcxTDE4NC44NzUgMzM4LjY4OEMxNzcuNDg0IDMzMy43OTcgMTY3LjU2MyAzMzUuNzUgMTYyLjY4OCAzNDMuMTI1QzE1Ny43ODEgMzUwLjQ4NCAxNTkuNzY2IDM2MC40MDYgMTY3LjEyNSAzNjUuMzEzTDE5NS4xNTYgMzg0TDE2Ny4xMjUgNDAyLjY4OEMxNTkuNzY2IDQwNy41OTQgMTU3Ljc4MSA0MTcuNTE2IDE2Mi42ODcgNDI0Ljg3NUMxNjYuMDQ0IDQyOS45MTggMTc1LjQ4MSA0MzUuNTM5IDE4NC44NzUgNDI5LjMxM0wyMjQgNDAzLjIyOUwyNjMuMTI1IDQyOS4zMTJDMjcyLjUxIDQzNS41MzMgMjgxLjkwMSA0MzAuMDAxIDI4NS4zMTIgNDI0Ljg3NUMyOTAuMjE5IDQxNy41MTYgMjg4LjIzNCA0MDcuNTk0IDI4MC44NzUgNDAyLjY4N0wyNTIuODQ0IDM4NEwyODAuODc1IDM2NS4zMTJDMjg4LjIzNCAzNjAuNDA2IDI5MC4yMTkgMzUwLjQ4NCAyODUuMzEyIDM0My4xMjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BoxingGlove(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M416 129.609V96C416 43.062 372.938 0 320 0H128C75.062 0 32 43.062 32 96V288C32 315.406 43.562 340.922 64 359.188V448C64 483.297 92.703 512 128 512H320C355.297 512 384 483.297 384 448V390.625L447.188 327.437C468.344 306.281 480 278.156 480 248.234V208C480 169.359 452.469 137.047 416 129.609ZM448 248.234C448 269.609 439.672 289.703 424.562 304.812L352 377.375V448C352 465.641 337.641 480 320 480H128C110.359 480 96 465.641 96 448V343.672L89.641 338.875C73.344 326.562 64 308.016 64 288V96C64 60.703 92.703 32 128 32H320C355.297 32 384 60.703 384 96V128H368C329.369 128 297.053 155.529 289.619 192H217.688C183.125 192 149.641 181.859 120.875 162.688C113.5 157.781 103.562 159.75 98.688 167.125C93.781 174.484 95.781 184.406 103.125 189.312C137.172 212 176.781 224 217.688 224H289.619C297.053 260.471 329.369 288 368 288C376.844 288 384 280.844 384 272S376.844 256 368 256C341.531 256 320 234.469 320 208S341.531 160 368 160H400C426.469 160 448 181.531 448 208V248.234ZM285.312 343.125C280.391 335.75 270.5 333.797 263.125 338.687L224 364.771L184.875 338.688C177.484 333.797 167.563 335.75 162.688 343.125C157.781 350.484 159.766 360.406 167.125 365.313L195.156 384L167.125 402.688C159.766 407.594 157.781 417.516 162.687 424.875C166.044 429.918 175.481 435.539 184.875 429.313L224 403.229L263.125 429.312C272.51 435.533 281.901 430.001 285.312 424.875C290.219 417.516 288.234 407.594 280.875 402.687L252.844 384L280.875 365.312C288.234 360.406 290.219 350.484 285.312 343.125Z" />
        </Icon>
    </>
}