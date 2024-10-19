
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pallet` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pallet?s=regular pallet}
 * @preview ![pallet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MTYgNDY0SDU2OFYzNjhINjE2QzYyOS4yNSAzNjggNjQwIDM1Ny4yNSA2NDAgMzQ0UzYyOS4yNSAzMjAgNjE2IDMyMEgyNEMxMC43NSAzMjAgMCAzMzAuNzUgMCAzNDRTMTAuNzUgMzY4IDI0IDM2OEg3MlY0NjRIMjRDMTAuNzUgNDY0IDAgNDc0Ljc1IDAgNDg4UzEwLjc1IDUxMiAyNCA1MTJINjE2QzYyOS4yNSA1MTIgNjQwIDUwMS4yNSA2NDAgNDg4UzYyOS4yNSA0NjQgNjE2IDQ2NFpNMjk2IDQ2NEgxMjBWMzY4SDI5NlY0NjRaTTUyMCA0NjRIMzQ0VjM2OEg1MjBWNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Pallet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M616 464H568V368H616C629.25 368 640 357.25 640 344S629.25 320 616 320H24C10.75 320 0 330.75 0 344S10.75 368 24 368H72V464H24C10.75 464 0 474.75 0 488S10.75 512 24 512H616C629.25 512 640 501.25 640 488S629.25 464 616 464ZM296 464H120V368H296V464ZM520 464H344V368H520V464Z" />
        </Icon>
    </>
}