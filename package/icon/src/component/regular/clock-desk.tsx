
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `clock-desk` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clock-desk?s=regular clock-desk}
 * @preview ![clock-desk](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDggMjI4VjEyMEMyNDggMTA2Ljc1IDIzNy4yNSA5NiAyMjQgOTZTMjAwIDEwNi43NSAyMDAgMTIwVjI0MEMyMDAgMjQ3LjU2MiAyMDMuNTYyIDI1NC42NTYgMjA5LjU5NCAyNTkuMTg4TDI3My41OTQgMzA3LjE4OEMyNzcuOTA2IDMxMC40MzggMjgyLjk2OSAzMTIgMjg3Ljk2OSAzMTJDMjk1LjI4MSAzMTIgMzAyLjUgMzA4LjY4OCAzMDcuMTg3IDMwMi40MDZDMzE1LjE1NiAyOTEuNzgxIDMxMyAyNzYuNzUgMzAyLjQwNiAyNjguODEyTDI0OCAyMjhaTTIyNCAwQzEwMC4yODkgMCAwIDEwMC4yODkgMCAyMjRDMCAyMjguNDY1IDAgNDYwLjE1NiAwIDQ2MC4xNTZDMCA0ODguNzg5IDIzLjIxMyA1MTIgNTEuODQ2IDUxMkgzOTYuMTU0QzQyNC43ODcgNTEyIDQ0OCA0ODguNzg5IDQ0OCA0NjAuMTU2QzQ0OCA0NjAuMTU2IDQ0OCAyMjguNDY1IDQ0OCAyMjRDNDQ4IDEwMC4yODkgMzQ3LjcxMyAwIDIyNCAwWk0yMjQgNDAwQzEyNi45NTMgNDAwIDQ4IDMyMS4wNDcgNDggMjI0UzEyNi45NTMgNDggMjI0IDQ4UzQwMCAxMjYuOTUzIDQwMCAyMjRTMzIxLjA0NyA0MDAgMjI0IDQwMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ClockDesk(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M248 228V120C248 106.75 237.25 96 224 96S200 106.75 200 120V240C200 247.562 203.562 254.656 209.594 259.188L273.594 307.188C277.906 310.438 282.969 312 287.969 312C295.281 312 302.5 308.688 307.187 302.406C315.156 291.781 313 276.75 302.406 268.812L248 228ZM224 0C100.289 0 0 100.289 0 224C0 228.465 0 460.156 0 460.156C0 488.789 23.213 512 51.846 512H396.154C424.787 512 448 488.789 448 460.156C448 460.156 448 228.465 448 224C448 100.289 347.713 0 224 0ZM224 400C126.953 400 48 321.047 48 224S126.953 48 224 48S400 126.953 400 224S321.047 400 224 400Z" />
        </Icon>
    </>
}