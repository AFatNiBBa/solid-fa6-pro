
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `layers-minus` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/layers-minus?s=duotone layers-minus}
 * @preview ![layers-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ5OS42MjUgMjM2LjI1TDI2Ni42MjUgMTMwLjc1QzI1OS44NzUgMTI3LjYyNSAyNTIuMTI1IDEyNy42MjUgMjQ1LjM3NSAxMzAuNzVMMTIuMzc1IDIzNi4yNUMtNC4xMjUgMjQzLjc1IC00LjEyNSAyNjguNzUgMTIuMzc1IDI3Ni4yNUwyNDUuMzc1IDM4MS44NzVDMjUyLjEyNSAzODUgMjU5Ljg3NSAzODUgMjY2LjYyNSAzODEuODc1TDQ5OS42MjUgMjc2LjI1QzUxNi4xMjUgMjY4Ljc1IDUxNi4xMjUgMjQzLjc1IDQ5OS42MjUgMjM2LjI1WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00ODggNTZIMzc2QzM2Mi43NDUgNTYgMzUyIDY2Ljc0NSAzNTIgODBWODBDMzUyIDkzLjI1NSAzNjIuNzQ1IDEwNCAzNzYgMTA0SDQ4OEM1MDEuMjU1IDEwNCA1MTIgOTMuMjU1IDUxMiA4MFY4MEM1MTIgNjYuNzQ1IDUwMS4yNTUgNTYgNDg4IDU2Wk00OTkuNjI1IDM2NC4xMjVMNDQxLjUgMzM3Ljc1TDI3OS44NzUgNDExQzI3Mi4yNSA0MTQuNSAyNjQuMjUgNDE2LjI1IDI1NiA0MTYuMjVTMjM5Ljc1IDQxNC41IDIzMi4xMjUgNDExTDcwLjUgMzM3Ljc1TDEyLjM3NSAzNjQuMTI1Qy00LjEyNSAzNzEuNjI1IC00LjEyNSAzOTYuNjI1IDEyLjM3NSA0MDQuMTI1TDI0NS4zNzUgNTA5Ljc1QzI1Mi4xMjUgNTEyLjc1IDI1OS44NzUgNTEyLjc1IDI2Ni42MjUgNTA5Ljc1TDQ5OS42MjUgNDA0LjEyNUM1MTYuMTI1IDM5Ni42MjUgNTE2LjEyNSAzNzEuNjI1IDQ5OS42MjUgMzY0LjEyNVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function LayersMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M499.625 236.25L266.625 130.75C259.875 127.625 252.125 127.625 245.375 130.75L12.375 236.25C-4.125 243.75 -4.125 268.75 12.375 276.25L245.375 381.875C252.125 385 259.875 385 266.625 381.875L499.625 276.25C516.125 268.75 516.125 243.75 499.625 236.25Z" />
            <path d="M488 56H376C362.745 56 352 66.745 352 80V80C352 93.255 362.745 104 376 104H488C501.255 104 512 93.255 512 80V80C512 66.745 501.255 56 488 56ZM499.625 364.125L441.5 337.75L279.875 411C272.25 414.5 264.25 416.25 256 416.25S239.75 414.5 232.125 411L70.5 337.75L12.375 364.125C-4.125 371.625 -4.125 396.625 12.375 404.125L245.375 509.75C252.125 512.75 259.875 512.75 266.625 509.75L499.625 404.125C516.125 396.625 516.125 371.625 499.625 364.125Z" />
        </Icon>
    </>
}