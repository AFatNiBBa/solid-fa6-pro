
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-holding-heart` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-heart?s=regular hand-holding-heart}
 * @preview ![hand-holding-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NTEuOTUzIDMxMi4xMTFDNTIwLjgyNCAyODUuNzUgNDgyLjY5MyAyOTUuOTk0IDQ2My41NjQgMzEwLjM2MUw0MDMuMTgyIDM1NS44MzZIMzk5LjgwN0MzOTkuNjgyIDMxNy44NTcgMzY5LjMwMyAyODggMzMwLjY3MiAyODhIMTg2LjY1QzE1OC4yNzEgMjg4IDEzMC4yNjggMjk3LjM2OSAxMDguMTQxIDMxNC4zNTlMNzkuNzYyIDMzNi4wOThIMjQuMDA0QzEwLjgwMSAzMzYuMDk4IDAgMzQ2Ljg5MyAwIDM2MC4wODRDMCAzNzMuMjc3IDEwLjgwMSAzODQuMDcgMjQuMDA0IDM4NC4wN0g5Ni4wMTRMMTM3LjI3IDM1Mi41ODhDMTUxLjI3MSAzNDEuODQ0IDE2OC43NzMgMzM2LjA5OCAxODYuNzc1IDMzNi4wOThIMzMwLjc5N0MzNTguNjc2IDMzNi4wOTggMzU5LjgwMSAzNzYuMzI0IDMyOS42NzIgMzc2LjMyNEgyNjkuNzg3QzI2Mi4yODcgMzc2LjMyNCAyNTYuMDM1IDM4Mi40NDcgMjU2LjAzNSAzOTAuMDY4VjM5MC4xOTNDMjU2LjAzNSAzOTcuODEyIDI2Mi4yODcgNDAzLjkzNiAyNjkuNzg3IDQwMy45MzZINDA0LjM5NUM0MTQuMTA1IDQwMy45MzYgNDIzLjU1MyA0MDAuNzc3IDQzMS4zMTEgMzk0LjkzOUw0OTIuNTY4IDM0OC44NEM1MDAuODIgMzQyLjcxOSA1MTMuMDcyIDM0Mi4yMTkgNTIwLjk0OSAzNDguODRDNTMxLjA3NCAzNTcuMzM2IDUzMC4zMjQgMzcxLjk1MyA1MjAuMDcyIDM3OS41NzRMNDE5LjQzNCA0NTUuMDMxQzQxMS42ODQgNDYwLjc3NyA0MDIuMzA3IDQ2NC4wMjUgMzkyLjU1NSA0NjQuMDI1SDI0LjAwNEMxMC44MDEgNDY0LjAyNSAwIDQ3NC44MiAwIDQ4OC4wMTRDMCA1MDEuMjA1IDEwLjgwMSA1MTIgMjQuMDA0IDUxMkgzOTIuODA1QzQxMi44MDkgNTEyIDQzMi4xODYgNTA1LjUwNCA0NDguMDYyIDQ5My41MUw1NDguODI4IDQxNy42NzhDNTY1LjQ1NSA0MDUuMTg0IDU3NS4zMyAzODYuMTk1IDU3NS45NTUgMzY1LjcwN0M1NzYuNzA3IDM0NS4yMTcgNTY3LjgzIDMyNS42MDQgNTUxLjk1MyAzMTIuMTExWk0yNzUuMjMgMjUwLjUyMUMyODIuMjMgMjU3Ljg5NiAyOTMuNzMgMjU3Ljg5NiAzMDAuNzMgMjUwLjUyMUw0MDkuNzMgMTM2LjI3NUM0NDEuMjMgMTAzLjE1IDQzOS40OCA0OC4xNTIgNDA0LjEwNSAxNy41MjlDMzczLjIzIC05LjIyMSAzMjcuMzU1IC00LjM0NiAyOTkuMjMgMjUuMjc3TDI4Ny45OCAzNi45MDJMMjc2Ljg1NSAyNS4yNzdDMjQ4LjczIC00LjM0NiAyMDIuNzMgLTkuMjIxIDE3MS45OCAxNy41MjlDMTM2LjczIDQ4LjE1MiAxMzQuNzMgMTAzLjE1IDE2Ni4zNTUgMTM2LjI3NUwyNzUuMjMgMjUwLjUyMVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HandHoldingHeart(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M551.953 312.111C520.824 285.75 482.693 295.994 463.564 310.361L403.182 355.836H399.807C399.682 317.857 369.303 288 330.672 288H186.65C158.271 288 130.268 297.369 108.141 314.359L79.762 336.098H24.004C10.801 336.098 0 346.893 0 360.084C0 373.277 10.801 384.07 24.004 384.07H96.014L137.27 352.588C151.271 341.844 168.773 336.098 186.775 336.098H330.797C358.676 336.098 359.801 376.324 329.672 376.324H269.787C262.287 376.324 256.035 382.447 256.035 390.068V390.193C256.035 397.812 262.287 403.936 269.787 403.936H404.395C414.105 403.936 423.553 400.777 431.311 394.939L492.568 348.84C500.82 342.719 513.072 342.219 520.949 348.84C531.074 357.336 530.324 371.953 520.072 379.574L419.434 455.031C411.684 460.777 402.307 464.025 392.555 464.025H24.004C10.801 464.025 0 474.82 0 488.014C0 501.205 10.801 512 24.004 512H392.805C412.809 512 432.186 505.504 448.062 493.51L548.828 417.678C565.455 405.184 575.33 386.195 575.955 365.707C576.707 345.217 567.83 325.604 551.953 312.111ZM275.23 250.521C282.23 257.896 293.73 257.896 300.73 250.521L409.73 136.275C441.23 103.15 439.48 48.152 404.105 17.529C373.23 -9.221 327.355 -4.346 299.23 25.277L287.98 36.902L276.855 25.277C248.73 -4.346 202.73 -9.221 171.98 17.529C136.73 48.152 134.73 103.15 166.355 136.275L275.23 250.521Z" />
        </Icon>
    </>
}