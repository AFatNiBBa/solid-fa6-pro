
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wrench-simple` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wrench-simple?s=solid wrench-simple}
 * @preview ![wrench-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMTcyLjQ0NUMzODQgMjQzLjQ2MSAzNDUuMzAzIDMwNS4yMyAyODggMzM4LjQ1M1Y0NjMuOTkyQzI4OCA0OTAuNTA4IDI2Ni41MSA1MTIgMjQwIDUxMkgxNDRDMTE3LjQ5IDUxMiA5NiA0OTAuNTA4IDk2IDQ2My45OTJWMzM4LjQ1M0MzOC42OTcgMzA1LjIzIDAgMjQzLjQ2MSAwIDE3Mi40NDVDMCA5OC4wMzUgNDIuNCAzMy42NzIgMTA0LjMwNSAxLjgyOEMxMTUuMDcgLTMuNzExIDEyOCAzLjk5MiAxMjggMTYuMTAyVjE1OS45NjlMMTkyIDIyMy45NzNMMjU2IDE1OS45NjlWMTYuMTAyQzI1NiAzLjk5MiAyNjguOTMgLTMuNzExIDI3OS42OTUgMS44MjhDMzQxLjYgMzMuNjcyIDM4NCA5OC4wMzUgMzg0IDE3Mi40NDVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function WrenchSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 172.445C384 243.461 345.303 305.23 288 338.453V463.992C288 490.508 266.51 512 240 512H144C117.49 512 96 490.508 96 463.992V338.453C38.697 305.23 0 243.461 0 172.445C0 98.035 42.4 33.672 104.305 1.828C115.07 -3.711 128 3.992 128 16.102V159.969L192 223.973L256 159.969V16.102C256 3.992 268.93 -3.711 279.695 1.828C341.6 33.672 384 98.035 384 172.445Z" />
        </Icon>
    </>
}