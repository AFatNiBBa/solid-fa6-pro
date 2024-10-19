
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bars-staggered` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bars-staggered?s=light bars-staggered}
 * @preview ![bars-staggered](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNiAxMTJINDMyQzQ0MC44NDQgMTEyIDQ0OCAxMDQuODQ0IDQ0OCA5NlM0NDAuODQ0IDgwIDQzMiA4MEgxNkM3LjE1NiA4MCAwIDg3LjE1NiAwIDk2UzcuMTU2IDExMiAxNiAxMTJaTTQ5NiAyNDBIODBDNzEuMTU2IDI0MCA2NCAyNDcuMTU2IDY0IDI1NlM3MS4xNTYgMjcyIDgwIDI3Mkg0OTZDNTA0Ljg0NCAyNzIgNTEyIDI2NC44NDQgNTEyIDI1NlM1MDQuODQ0IDI0MCA0OTYgMjQwWk00MzIgNDAwSDE2QzcuMTU2IDQwMCAwIDQwNy4xNTYgMCA0MTZTNy4xNTYgNDMyIDE2IDQzMkg0MzJDNDQwLjg0NCA0MzIgNDQ4IDQyNC44NDQgNDQ4IDQxNlM0NDAuODQ0IDQwMCA0MzIgNDAwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BarsStaggered(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M16 112H432C440.844 112 448 104.844 448 96S440.844 80 432 80H16C7.156 80 0 87.156 0 96S7.156 112 16 112ZM496 240H80C71.156 240 64 247.156 64 256S71.156 272 80 272H496C504.844 272 512 264.844 512 256S504.844 240 496 240ZM432 400H16C7.156 400 0 407.156 0 416S7.156 432 16 432H432C440.844 432 448 424.844 448 416S440.844 400 432 400Z" />
        </Icon>
    </>
}