
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `droplet-percent` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-percent?s=light droplet-percent}
 * @preview ![droplet-percent](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODYuNTYyIDUxLjM2MUMxODIuOTMyIDM4LjU5NiAxNzEuNDc5IDMyIDE1OS45OSAzMkMxNDguNzQgMzIgMTM3LjQ1NyAzOC4zMiAxMzMuNDM4IDUxLjM2MUM5MC45MzggMTg5LjI4MyAwIDIyNi45MDggMCAzMjQuMTQxQzAgNDEwLjIxOSA3MS41NjIgNDgwIDE2MCA0ODBTMzIwIDQxMC4yMTkgMzIwIDMyNC4xNDFDMzIwIDIyNi4zNjEgMjI5LjI3MyAxOTAuMDQ5IDE4Ni41NjIgNTEuMzYxWk0xNjAgNDQ4Qzg5LjQyIDQ0OCAzMiAzOTIuNDM4IDMyIDMyNC4xNDFDMzIgMjgzLjQyOCA1Mi41NTkgMjU1LjA3IDgxLjAxNCAyMTUuODJDMTA2LjY4NCAxODAuNDEyIDEzOC4yNTYgMTM2Ljg2NyAxNTkuOTk4IDczLjE3QzE4MS44NDggMTM3LjI1NiAyMTMuNDU3IDE4MC43MTUgMjM5LjE1OCAyMTYuMDQ5QzI2Ny41MTIgMjU1LjAzMyAyODggMjgzLjIwMSAyODggMzI0LjE0MUMyODggMzkyLjQzOCAyMzAuNTggNDQ4IDE2MCA0NDhaTTEyOCAyNjRDMTI4IDI1MC42ODggMTE3LjMxMiAyNDAgMTA0IDI0MFM4MCAyNTAuNjg4IDgwIDI2NFM5MC42ODggMjg4IDEwNCAyODhTMTI4IDI3Ny4zMTIgMTI4IDI2NFpNMjE5LjMxMiAyNjAuNjg4QzIxMy4wNjIgMjU0LjQzOCAyMDIuOTM3IDI1NC40MzggMTk2LjY4OCAyNjAuNjg4TDEwMC42ODggMzU2LjY4OEM5NC40MzggMzYyLjkzOCA5NC40MzggMzczLjA2MyAxMDAuNjg4IDM3OS4zMTJDMTAzLjgxMiAzODIuNDM4IDEwNy45MDYgMzg0IDExMiAzODRTMTIwLjE4OCAzODIuNDM4IDEyMy4zMTIgMzc5LjMxMkwyMTkuMzEyIDI4My4zMTJDMjI1LjU2MiAyNzcuMDYyIDIyNS41NjIgMjY2LjkzOCAyMTkuMzEyIDI2MC42ODhaTTIxNiAzNTJDMjAyLjY4OCAzNTIgMTkyIDM2Mi42ODggMTkyIDM3NlMyMDIuNjg4IDQwMCAyMTYgNDAwUzI0MCAzODkuMzEyIDI0MCAzNzZTMjI5LjMxMiAzNTIgMjE2IDM1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function DropletPercent(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M186.562 51.361C182.932 38.596 171.479 32 159.99 32C148.74 32 137.457 38.32 133.438 51.361C90.938 189.283 0 226.908 0 324.141C0 410.219 71.562 480 160 480S320 410.219 320 324.141C320 226.361 229.273 190.049 186.562 51.361ZM160 448C89.42 448 32 392.438 32 324.141C32 283.428 52.559 255.07 81.014 215.82C106.684 180.412 138.256 136.867 159.998 73.17C181.848 137.256 213.457 180.715 239.158 216.049C267.512 255.033 288 283.201 288 324.141C288 392.438 230.58 448 160 448ZM128 264C128 250.688 117.312 240 104 240S80 250.688 80 264S90.688 288 104 288S128 277.312 128 264ZM219.312 260.688C213.062 254.438 202.937 254.438 196.688 260.688L100.688 356.688C94.438 362.938 94.438 373.063 100.688 379.312C103.812 382.438 107.906 384 112 384S120.188 382.438 123.312 379.312L219.312 283.312C225.562 277.062 225.562 266.938 219.312 260.688ZM216 352C202.688 352 192 362.688 192 376S202.688 400 216 400S240 389.312 240 376S229.312 352 216 352Z" />
        </Icon>
    </>
}