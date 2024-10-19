
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `angles-right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angles-right?s=duotone angles-right}
 * @preview ![angles-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1Ni4wMTUgMjU2QzI1Ni4wMTUgMjQ2LjA5NCAyNTIuMzU5IDIzNi4yMTkgMjQ1LjA0OSAyMjguNUwxMDEuMDYgNzYuNDk5Qzg1Ljg3MyA2MC40MzYgNjAuNTYyIDU5Ljc4IDQ0LjUzMyA3NC45NjdDMjguNDQxIDkwLjE4NiAyNy43NTMgMTE1LjUzIDQzLjAwMiAxMzEuNDk5TDE2MC45MjkgMjU2TDQzLjAwMiAzODAuNTAxQzI3Ljc4NSAzOTYuNTAxIDI4LjQ3MiA0MjEuOTA4IDQ0LjUzMyA0MzcuMDMzQzYwLjU2MiA0NTIuMjIgODUuODczIDQ1MS41NjQgMTAxLjA2IDQzNS41MDFMMjQ1LjA0OSAyODMuNUMyNTIuMzU5IDI3NS43ODEgMjU2LjAxNSAyNjUuOTA2IDI1Ni4wMTUgMjU2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00MzcuMDQ3IDIyOC41TDI5My4wNiA3Ni40OTlDMjc3Ljg3MyA2MC40MzYgMjUyLjU2MiA1OS43OCAyMzYuNTMzIDc0Ljk2N0MyMjAuNDQxIDkwLjE4NiAyMTkuNzUzIDExNS41MyAyMzUuMDAyIDEzMS40OTlMMzUyLjkyOSAyNTZMMjM1LjAwMiAzODAuNTAxQzIxOS43ODUgMzk2LjUwMSAyMjAuNDcyIDQyMS45MDggMjM2LjUzMyA0MzcuMDMzQzI1Mi41NjIgNDUyLjIyIDI3Ny44NzMgNDUxLjU2NCAyOTMuMDYgNDM1LjUwMUw0MzcuMDQ3IDI4My41QzQ0NC4zNTkgMjc1Ljc4MSA0NDguMDE1IDI2NS45MDYgNDQ4LjAxNSAyNTZDNDQ4LjAxNSAyNDYuMDk0IDQ0NC4zNTkgMjM2LjIxOSA0MzcuMDQ3IDIyOC41WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function AnglesRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M256.015 256C256.015 246.094 252.359 236.219 245.049 228.5L101.06 76.499C85.873 60.436 60.562 59.78 44.533 74.967C28.441 90.186 27.753 115.53 43.002 131.499L160.929 256L43.002 380.501C27.785 396.501 28.472 421.908 44.533 437.033C60.562 452.22 85.873 451.564 101.06 435.501L245.049 283.5C252.359 275.781 256.015 265.906 256.015 256Z" />
            <path d="M437.047 228.5L293.06 76.499C277.873 60.436 252.562 59.78 236.533 74.967C220.441 90.186 219.753 115.53 235.002 131.499L352.929 256L235.002 380.501C219.785 396.501 220.472 421.908 236.533 437.033C252.562 452.22 277.873 451.564 293.06 435.501L437.047 283.5C444.359 275.781 448.015 265.906 448.015 256C448.015 246.094 444.359 236.219 437.047 228.5Z" />
        </Icon>
    </>
}