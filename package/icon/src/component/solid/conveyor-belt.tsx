
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `conveyor-belt` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/conveyor-belt?s=solid conveyor-belt}
 * @preview ![conveyor-belt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgMjU2SDQ4MEM0OTcuNiAyNTYgNTEyIDI0MS42IDUxMiAyMjRWMzJDNTEyIDE0LjQgNDk3LjYgMCA0ODAgMEgzODRWMTI4TDMyMCA5NkwyNTYgMTI4VjBIMTYwQzE0Mi40IDAgMTI4IDE0LjQgMTI4IDMyVjIyNEMxMjggMjQxLjYgMTQyLjQgMjU2IDE2MCAyNTZaTTU0NCAzMjBIOTZDNDMgMzIwIDAgMzYzIDAgNDE2UzQzIDUxMiA5NiA1MTJINTQ0QzU5NyA1MTIgNjQwIDQ2OSA2NDAgNDE2UzU5NyAzMjAgNTQ0IDMyMFpNMTI4IDQ0OEMxMTAuMjUgNDQ4IDk2IDQzMy43NSA5NiA0MTZTMTEwLjI1IDM4NCAxMjggMzg0UzE2MCAzOTguMjUgMTYwIDQxNlMxNDUuNzUgNDQ4IDEyOCA0NDhaTTMyMCA0NDhDMzAyLjI1IDQ0OCAyODggNDMzLjc1IDI4OCA0MTZTMzAyLjI1IDM4NCAzMjAgMzg0UzM1MiAzOTguMjUgMzUyIDQxNlMzMzcuNzUgNDQ4IDMyMCA0NDhaTTUxMiA0NDhDNDk0LjI1IDQ0OCA0ODAgNDMzLjc1IDQ4MCA0MTZTNDk0LjI1IDM4NCA1MTIgMzg0QzUyOS43NSAzODQgNTQ0IDM5OC4yNSA1NDQgNDE2UzUyOS43NSA0NDggNTEyIDQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ConveyorBelt(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M160 256H480C497.6 256 512 241.6 512 224V32C512 14.4 497.6 0 480 0H384V128L320 96L256 128V0H160C142.4 0 128 14.4 128 32V224C128 241.6 142.4 256 160 256ZM544 320H96C43 320 0 363 0 416S43 512 96 512H544C597 512 640 469 640 416S597 320 544 320ZM128 448C110.25 448 96 433.75 96 416S110.25 384 128 384S160 398.25 160 416S145.75 448 128 448ZM320 448C302.25 448 288 433.75 288 416S302.25 384 320 384S352 398.25 352 416S337.75 448 320 448ZM512 448C494.25 448 480 433.75 480 416S494.25 384 512 384C529.75 384 544 398.25 544 416S529.75 448 512 448Z" />
        </Icon>
    </>
}