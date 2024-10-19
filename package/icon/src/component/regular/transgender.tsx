
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `transgender` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/transgender?s=regular transgender}
 * @preview ![transgender](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzIgMEgzNzZDMzYyLjc1IDAgMzUyIDEwLjc1IDM1MiAyNFMzNjIuNzUgNDggMzc2IDQ4SDQxNC4wNjJMMzcxLjA1MyA5MS4wMUMzNDAuMTg4IDY0LjI4MyAzMDAuMDMzIDQ4IDI1NiA0OEMxNTguNzk5IDQ4IDgwIDEyNi43OTkgODAgMjI0QzgwIDMxMy4wMzkgMTQ2LjE4MiAzODYuNDQzIDIzMiAzOTguMTc2VjQyNEgyMDhDMTk0Ljc1IDQyNCAxODQgNDM0Ljc1IDE4NCA0NDhTMTk0Ljc1IDQ3MiAyMDggNDcySDIzMlY0ODhDMjMyIDUwMS4yNSAyNDIuNzUgNTEyIDI1NiA1MTJTMjgwIDUwMS4yNSAyODAgNDg4VjQ3MkgzMDRDMzE3LjI1IDQ3MiAzMjggNDYxLjI1IDMyOCA0NDhTMzE3LjI1IDQyNCAzMDQgNDI0SDI4MFYzOTguMTc2QzM2NS44MTggMzg2LjQ0MyA0MzIgMzEzLjAzOSA0MzIgMjI0QzQzMiAxODguMTc0IDQyMS4yMzIgMTU0Ljg5MSA0MDIuODQ4IDEyNy4wOUw0NDggODEuOTM4VjEyMEM0NDggMTMzLjI1IDQ1OC43NSAxNDQgNDcyIDE0NFM0OTYgMTMzLjI1IDQ5NiAxMjBWMjRDNDk2IDEwLjc1IDQ4NS4yNSAwIDQ3MiAwWk0yNTYgMzUyQzE4NS40MiAzNTIgMTI4IDI5NC41OCAxMjggMjI0UzE4NS40MiA5NiAyNTYgOTZTMzg0IDE1My40MiAzODQgMjI0UzMyNi41OCAzNTIgMjU2IDM1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Transgender(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M472 0H376C362.75 0 352 10.75 352 24S362.75 48 376 48H414.062L371.053 91.01C340.188 64.283 300.033 48 256 48C158.799 48 80 126.799 80 224C80 313.039 146.182 386.443 232 398.176V424H208C194.75 424 184 434.75 184 448S194.75 472 208 472H232V488C232 501.25 242.75 512 256 512S280 501.25 280 488V472H304C317.25 472 328 461.25 328 448S317.25 424 304 424H280V398.176C365.818 386.443 432 313.039 432 224C432 188.174 421.232 154.891 402.848 127.09L448 81.938V120C448 133.25 458.75 144 472 144S496 133.25 496 120V24C496 10.75 485.25 0 472 0ZM256 352C185.42 352 128 294.58 128 224S185.42 96 256 96S384 153.42 384 224S326.58 352 256 352Z" />
        </Icon>
    </>
}