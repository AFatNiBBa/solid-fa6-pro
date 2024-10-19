
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `display-arrow-down` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/display-arrow-down?s=duotone display-arrow-down}
 * @preview ![display-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU3NiA0OFYzNjhDNTc2IDM5NC41IDU1NC41IDQxNiA1MjggNDE2SDQ4QzIxLjUgNDE2IDAgMzk0LjUgMCAzNjhWNDhDMCAyMS41IDIxLjUgMCA0OCAwSDI2NFY2NEg2NFYzNTJINTEyVjY0SDMxMlYwSDUyOEM1NTQuNSAwIDU3NiAyMS41IDU3NiA0OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDI0IDQ2NEgzNTJMMzM2IDQxNkgyNDBMMjI0IDQ2NEgxNTJDMTM4Ljc1IDQ2NCAxMjggNDc0Ljc1IDEyOCA0ODhTMTM4Ljc1IDUxMiAxNTIgNTEySDQyNEM0MzcuMjUgNTEyIDQ0OCA1MDEuMjUgNDQ4IDQ4OFM0MzcuMjUgNDY0IDQyNCA0NjRaTTMxMiA2NFYyMDYuMDYyTDM1MS4wMzEgMTY3LjAzMUMzNjAuNDA2IDE1Ny42NTYgMzc1LjU5NCAxNTcuNjU2IDM4NC45NjkgMTY3LjAzMVMzOTQuMzQ0IDE5MS41OTQgMzg0Ljk2OSAyMDAuOTY5TDMwNC45NjkgMjgwLjk2OUMyOTUuNTk0IDI5MC4zNDQgMjgwLjQwNiAyOTAuMzQ0IDI3MS4wMzEgMjgwLjk2OUwxOTEuMDMxIDIwMC45NjlDMTgxLjY1NiAxOTEuNTk0IDE4MS42NTYgMTc2LjQwNiAxOTEuMDMxIDE2Ny4wMzFDMTk1LjcxOSAxNjIuMzQ0IDIwMS44NDQgMTYwIDIwOCAxNjBTMjIwLjI4MSAxNjIuMzQ0IDIyNC45NjkgMTY3LjAzMUwyNjQgMjA2LjA2MlY2NEg2NFYzNTJINTEyVjY0SDMxMloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function DisplayArrowDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M576 48V368C576 394.5 554.5 416 528 416H48C21.5 416 0 394.5 0 368V48C0 21.5 21.5 0 48 0H264V64H64V352H512V64H312V0H528C554.5 0 576 21.5 576 48Z" />
            <path d="M424 464H352L336 416H240L224 464H152C138.75 464 128 474.75 128 488S138.75 512 152 512H424C437.25 512 448 501.25 448 488S437.25 464 424 464ZM312 64V206.062L351.031 167.031C360.406 157.656 375.594 157.656 384.969 167.031S394.344 191.594 384.969 200.969L304.969 280.969C295.594 290.344 280.406 290.344 271.031 280.969L191.031 200.969C181.656 191.594 181.656 176.406 191.031 167.031C195.719 162.344 201.844 160 208 160S220.281 162.344 224.969 167.031L264 206.062V64H64V352H512V64H312Z" />
        </Icon>
    </>
}