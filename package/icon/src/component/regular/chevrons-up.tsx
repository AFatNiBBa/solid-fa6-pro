
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chevrons-up` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-up?s=regular chevrons-up}
 * @preview ![chevrons-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01Ni41OSAyNjUuMzQ0TDIyNCAxMDUuMjE5TDM5MS40MSAyNjUuMzQ0QzM5Ni4wNjcgMjY5Ljc4MSA0MDIuMDM3IDI3MiA0MDguMDA2IDI3MkM0MTQuMzE4IDI3MiA0MjAuNjMxIDI2OS41MzEgNDI1LjM1IDI2NC41OTRDNDM0LjUwNiAyNTUgNDM0LjE2MiAyMzkuODEyIDQyNC42IDIzMC42NTZMMjQwLjU5NCA1NC42NTZDMjMxLjI4MSA0NS43ODEgMjE2LjcxOSA0NS43ODEgMjA3LjQwNiA1NC42NTZMMjMuNDAxIDIzMC42NTZDMTMuODM4IDIzOS44MTIgMTMuNDk0IDI1NSAyMi42NTEgMjY0LjU5NFM0Ni45OTYgMjc0LjQ2OSA1Ni41OSAyNjUuMzQ0Wk0yNDAuNTk0IDI0Ni42NTZDMjMxLjI4MSAyMzcuNzgxIDIxNi43MTkgMjM3Ljc4MSAyMDcuNDA2IDI0Ni42NTZMMjMuNDAxIDQyMi42NTZDMTMuODM4IDQzMS44MTIgMTMuNDk0IDQ0NyAyMi42NTEgNDU2LjU5NFM0Ni45OTYgNDY2LjQ2OSA1Ni41OSA0NTcuMzQ0TDIyNCAyOTcuMjE5TDM5MS40MSA0NTcuMzQ0QzM5Ni4wNjcgNDYxLjc4MSA0MDIuMDM3IDQ2NCA0MDguMDA2IDQ2NEM0MTQuMzE4IDQ2NCA0MjAuNjMxIDQ2MS41MzEgNDI1LjM1IDQ1Ni41OTRDNDM0LjUwNiA0NDcgNDM0LjE2MiA0MzEuODEyIDQyNC42IDQyMi42NTZMMjQwLjU5NCAyNDYuNjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ChevronsUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M56.59 265.344L224 105.219L391.41 265.344C396.067 269.781 402.037 272 408.006 272C414.318 272 420.631 269.531 425.35 264.594C434.506 255 434.162 239.812 424.6 230.656L240.594 54.656C231.281 45.781 216.719 45.781 207.406 54.656L23.401 230.656C13.838 239.812 13.494 255 22.651 264.594S46.996 274.469 56.59 265.344ZM240.594 246.656C231.281 237.781 216.719 237.781 207.406 246.656L23.401 422.656C13.838 431.812 13.494 447 22.651 456.594S46.996 466.469 56.59 457.344L224 297.219L391.41 457.344C396.067 461.781 402.037 464 408.006 464C414.318 464 420.631 461.531 425.35 456.594C434.506 447 434.162 431.812 424.6 422.656L240.594 246.656Z" />
        </Icon>
    </>
}