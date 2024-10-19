
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `list-dropdown` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/list-dropdown?s=thin list-dropdown}
 * @preview ![list-dropdown](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjQxIDMyIDAgNjAuNjQxIDAgOTZWNDE2QzAgNDUxLjM1OSAyOC42NDEgNDgwIDY0IDQ4MEg0NDhDNDgzLjM1OSA0ODAgNTEyIDQ1MS4zNTkgNTEyIDQxNlY5NkM1MTIgNjAuNjQxIDQ4My4zNTkgMzIgNDQ4IDMyWk00OTYgNDE2QzQ5NiA0NDIuNDY5IDQ3NC40NjkgNDY0IDQ0OCA0NjRINjRDMzcuNTMxIDQ2NCAxNiA0NDIuNDY5IDE2IDQxNlYxNzZINDk2VjQxNlpNNDk2IDE2MEgxNlY5NkMxNiA2OS41MzEgMzcuNTMxIDQ4IDY0IDQ4SDQ0OEM0NzQuNDY5IDQ4IDQ5NiA2OS41MzEgNDk2IDk2VjE2MFpNMTIwIDI4OEgzOTJDMzk2LjQyMiAyODggNDAwIDI4NC40MjIgNDAwIDI4MFMzOTYuNDIyIDI3MiAzOTIgMjcySDEyMEMxMTUuNTc4IDI3MiAxMTIgMjc1LjU3OCAxMTIgMjgwUzExNS41NzggMjg4IDEyMCAyODhaTTEyMCAzODRIMzkyQzM5Ni40MjIgMzg0IDQwMCAzODAuNDA2IDQwMCAzNzZTMzk2LjQyMiAzNjggMzkyIDM2OEgxMjBDMTE1LjU3OCAzNjggMTEyIDM3MS41OTQgMTEyIDM3NlMxMTUuNTc4IDM4NCAxMjAgMzg0Wk00MTkgODkuNzVMMzg0IDExNy43NUwzNDkgODkuNzVDMzQ1LjU2MiA4Ny4wNjIgMzQwLjUxNiA4Ny41NzggMzM3Ljc1IDkxQzMzNSA5NC40NTMgMzM1LjU0NyA5OS40ODQgMzM5IDEwMi4yNUwzNzkgMTM0LjI1QzM4MC40NjkgMTM1LjQyMiAzODIuMjM0IDEzNiAzODQgMTM2UzM4Ny41MzEgMTM1LjQyMiAzODkgMTM0LjI1TDQyOSAxMDIuMjVDNDMyLjQ1MyA5OS40ODQgNDMzIDk0LjQ1MyA0MzAuMjUgOTFDNDI3LjUxNiA4Ny41NjIgNDIyLjUgODcuMDE2IDQxOSA4OS43NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ListDropdown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.641 32 0 60.641 0 96V416C0 451.359 28.641 480 64 480H448C483.359 480 512 451.359 512 416V96C512 60.641 483.359 32 448 32ZM496 416C496 442.469 474.469 464 448 464H64C37.531 464 16 442.469 16 416V176H496V416ZM496 160H16V96C16 69.531 37.531 48 64 48H448C474.469 48 496 69.531 496 96V160ZM120 288H392C396.422 288 400 284.422 400 280S396.422 272 392 272H120C115.578 272 112 275.578 112 280S115.578 288 120 288ZM120 384H392C396.422 384 400 380.406 400 376S396.422 368 392 368H120C115.578 368 112 371.594 112 376S115.578 384 120 384ZM419 89.75L384 117.75L349 89.75C345.562 87.062 340.516 87.578 337.75 91C335 94.453 335.547 99.484 339 102.25L379 134.25C380.469 135.422 382.234 136 384 136S387.531 135.422 389 134.25L429 102.25C432.453 99.484 433 94.453 430.25 91C427.516 87.562 422.5 87.016 419 89.75Z" />
        </Icon>
    </>
}