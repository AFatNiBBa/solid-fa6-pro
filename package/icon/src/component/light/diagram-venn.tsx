
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `diagram-venn` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-venn?s=light diagram-venn}
 * @preview ![diagram-venn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgMzJDMzgxLjYxNSAzMiAzNDkuMTQ1IDQwLjAxNiAzMjAgNTMuOTJDMjkwLjg1NSA0MC4wMTYgMjU4LjM4NSAzMiAyMjQgMzJDMTAwLjQ4NCAzMiAwIDEzMi40ODQgMCAyNTZTMTAwLjQ4NCA0ODAgMjI0IDQ4MEMyNTguMzg1IDQ4MCAyOTAuODU1IDQ3MS45ODQgMzIwIDQ1OC4wOEMzNDkuMTQ1IDQ3MS45ODQgMzgxLjYxNSA0ODAgNDE2IDQ4MEM1MzkuNSA0ODAgNjQwIDM3OS41MTYgNjQwIDI1NlM1MzkuNSAzMiA0MTYgMzJaTTM5MC4wNTMgMTYwSDI0OS45NDdDMjY2LjgxNCAxMzEuMDMzIDI5MC45OTIgMTA2LjgxNiAzMjAgODkuOTc3QzM0OS4wMDggMTA2LjgxNiAzNzMuMTg2IDEzMS4wMzMgMzkwLjA1MyAxNjBaTTQwNC41NTkgMzIwSDIzNS40NDFDMjMwLjAwNiAzMDQuNzczIDIyNi40ODYgMjg4LjcyMyAyMjUuMDg4IDI3Mkg0MTQuOTEyQzQxMy41MTQgMjg4LjcyMyA0MDkuOTk0IDMwNC43NzMgNDA0LjU1OSAzMjBaTTQxNC45MTIgMjQwSDIyNS4wODhDMjI2LjQ4NiAyMjMuMjc3IDIzMC4wMDYgMjA3LjIyNyAyMzUuNDQxIDE5Mkg0MDQuNTU5QzQwOS45OTQgMjA3LjIyNyA0MTMuNTE0IDIyMy4yNzcgNDE0LjkxMiAyNDBaTTIyNCA0NDhDMTE4LjEyNSA0NDggMzIgMzYxLjg3NSAzMiAyNTZTMTE4LjEyNSA2NCAyMjQgNjRDMjQ1LjUzNSA2NCAyNjYuMTc4IDY3LjcyMyAyODUuNTIgNzQuMjkxQzIyOSAxMTQuOTk0IDE5MiAxODEuMTg2IDE5MiAyNTZTMjI5IDM5Ny4wMDYgMjg1LjUyIDQzNy43MDlDMjY2LjE3OCA0NDQuMjc3IDI0NS41MzUgNDQ4IDIyNCA0NDhaTTI0OS45NDcgMzUySDM5MC4wNTNDMzczLjE4NiAzODAuOTY3IDM0OS4wMDggNDA1LjE4NCAzMjAgNDIyLjAyM0MyOTAuOTkyIDQwNS4xODQgMjY2LjgxNCAzODAuOTY3IDI0OS45NDcgMzUyWk00MTYgNDQ4QzM5NC40NjUgNDQ4IDM3My44MjIgNDQ0LjI3NyAzNTQuNDggNDM3LjcwOUM0MTEgMzk3LjAwNiA0NDggMzMwLjgxNCA0NDggMjU2UzQxMSAxMTQuOTk0IDM1NC40OCA3NC4yOTFDMzczLjgyMiA2Ny43MjMgMzk0LjQ2NSA2NCA0MTYgNjRDNTIxLjg3NSA2NCA2MDggMTUwLjEyNSA2MDggMjU2UzUyMS44NzUgNDQ4IDQxNiA0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function DiagramVenn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M416 32C381.615 32 349.145 40.016 320 53.92C290.855 40.016 258.385 32 224 32C100.484 32 0 132.484 0 256S100.484 480 224 480C258.385 480 290.855 471.984 320 458.08C349.145 471.984 381.615 480 416 480C539.5 480 640 379.516 640 256S539.5 32 416 32ZM390.053 160H249.947C266.814 131.033 290.992 106.816 320 89.977C349.008 106.816 373.186 131.033 390.053 160ZM404.559 320H235.441C230.006 304.773 226.486 288.723 225.088 272H414.912C413.514 288.723 409.994 304.773 404.559 320ZM414.912 240H225.088C226.486 223.277 230.006 207.227 235.441 192H404.559C409.994 207.227 413.514 223.277 414.912 240ZM224 448C118.125 448 32 361.875 32 256S118.125 64 224 64C245.535 64 266.178 67.723 285.52 74.291C229 114.994 192 181.186 192 256S229 397.006 285.52 437.709C266.178 444.277 245.535 448 224 448ZM249.947 352H390.053C373.186 380.967 349.008 405.184 320 422.023C290.992 405.184 266.814 380.967 249.947 352ZM416 448C394.465 448 373.822 444.277 354.48 437.709C411 397.006 448 330.814 448 256S411 114.994 354.48 74.291C373.822 67.723 394.465 64 416 64C521.875 64 608 150.125 608 256S521.875 448 416 448Z" />
        </Icon>
    </>
}