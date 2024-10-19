
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `location-crosshairs` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location-crosshairs?s=light location-crosshairs}
 * @preview ![location-crosshairs](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTYwQzIwMyAxNjAgMTYwIDIwMyAxNjAgMjU2UzIwMyAzNTIgMjU2IDM1MlMzNTIgMzA5IDM1MiAyNTZTMzA5IDE2MCAyNTYgMTYwWk0yNTYgMzIwQzIyMC43NSAzMjAgMTkyIDI5MS4yNSAxOTIgMjU2UzIyMC43NSAxOTIgMjU2IDE5MlMzMjAgMjIwLjc1IDMyMCAyNTZTMjkxLjI1IDMyMCAyNTYgMzIwWk00OTYgMjQwSDQ0Ny4yNUM0MzkuNSAxNDYuNzUgMzY1LjI1IDcyLjUgMjcyIDY0Ljc1VjE2QzI3MiA3LjE5OSAyNjQuODAxIDAgMjU2IDBDMjQ3LjIwMSAwIDI0MCA3LjE5OSAyNDAgMTZWNjQuNzVDMTQ2Ljc1IDcyLjUgNzIuNSAxNDYuNzUgNjQuNzUgMjQwSDE2QzcuMjAxIDI0MCAwIDI0Ny4xOTkgMCAyNTZDMCAyNjQuNzk5IDcuMjAxIDI3MiAxNiAyNzJINjQuNzVDNzIuNSAzNjUuMjUgMTQ2Ljc1IDQzOS41IDI0MCA0NDcuMjVWNDk2QzI0MCA1MDQuNzk5IDI0Ny4yMDEgNTEyIDI1NiA1MTJDMjY0LjgwMSA1MTIgMjcyIDUwNC43OTkgMjcyIDQ5NlY0NDcuMjVDMzY1LjI1IDQzOS41IDQzOS41IDM2NS4yNSA0NDcuMjUgMjcySDQ5NkM1MDQuODAxIDI3MiA1MTIgMjY0Ljc5OSA1MTIgMjU2QzUxMiAyNDcuMTk5IDUwNC44MDEgMjQwIDQ5NiAyNDBaTTI1NiA0MTZDMTY3Ljc1IDQxNiA5NiAzNDQuMjUgOTYgMjU2UzE2Ny43NSA5NiAyNTYgOTZTNDE2IDE2Ny43NSA0MTYgMjU2UzM0NC4yNSA0MTYgMjU2IDQxNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function LocationCrosshairs(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 160C203 160 160 203 160 256S203 352 256 352S352 309 352 256S309 160 256 160ZM256 320C220.75 320 192 291.25 192 256S220.75 192 256 192S320 220.75 320 256S291.25 320 256 320ZM496 240H447.25C439.5 146.75 365.25 72.5 272 64.75V16C272 7.199 264.801 0 256 0C247.201 0 240 7.199 240 16V64.75C146.75 72.5 72.5 146.75 64.75 240H16C7.201 240 0 247.199 0 256C0 264.799 7.201 272 16 272H64.75C72.5 365.25 146.75 439.5 240 447.25V496C240 504.799 247.201 512 256 512C264.801 512 272 504.799 272 496V447.25C365.25 439.5 439.5 365.25 447.25 272H496C504.801 272 512 264.799 512 256C512 247.199 504.801 240 496 240ZM256 416C167.75 416 96 344.25 96 256S167.75 96 256 96S416 167.75 416 256S344.25 416 256 416Z" />
        </Icon>
    </>
}