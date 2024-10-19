
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `divide` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/divide?s=regular divide}
 * @preview ![divide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjQgMjMySDI0QzEwLjc1IDIzMiAwIDI0Mi43NSAwIDI1NlMxMC43NSAyODAgMjQgMjgwSDQyNEM0MzcuMjUgMjgwIDQ0OCAyNjkuMjUgNDQ4IDI1NlM0MzcuMjUgMjMyIDQyNCAyMzJaTTIyNCAxNDRDMjUwLjUwOSAxNDQgMjcyIDEyMi41MDkgMjcyIDk2UzI1MC41MDkgNDggMjI0IDQ4UzE3NiA2OS40OTEgMTc2IDk2UzE5Ny40OTEgMTQ0IDIyNCAxNDRaTTIyNCAzNjhDMTk3LjQ5MSAzNjggMTc2IDM4OS40OTEgMTc2IDQxNlMxOTcuNDkxIDQ2NCAyMjQgNDY0UzI3MiA0NDIuNTA5IDI3MiA0MTZTMjUwLjUwOSAzNjggMjI0IDM2OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Divide(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M424 232H24C10.75 232 0 242.75 0 256S10.75 280 24 280H424C437.25 280 448 269.25 448 256S437.25 232 424 232ZM224 144C250.509 144 272 122.509 272 96S250.509 48 224 48S176 69.491 176 96S197.491 144 224 144ZM224 368C197.491 368 176 389.491 176 416S197.491 464 224 464S272 442.509 272 416S250.509 368 224 368Z" />
        </Icon>
    </>
}