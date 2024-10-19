
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sink` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sink?s=duotone sink}
 * @preview ![sink](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyIDQxNi4wMDJDMzIgNDY5LjAyMSA3NC45OCA1MTIuMDAyIDEyOCA1MTIuMDAySDM4NEM0MzcuMDIgNTEyLjAwMiA0ODAgNDY5LjAyMSA0ODAgNDE2LjAwMlYzODQuMDAySDMyVjQxNi4wMDJaTTQ5NiAyODguMDAySDE2QzcuMTY0IDI4OC4wMDIgMCAyOTUuMTY2IDAgMzA0LjAwMlYzMzYuMDAyQzAgMzQ0LjgzOCA3LjE2NCAzNTIuMDAyIDE2IDM1Mi4wMDJINDk2QzUwNC44MzYgMzUyLjAwMiA1MTIgMzQ0LjgzOCA1MTIgMzM2LjAwMlYzMDQuMDAyQzUxMiAyOTUuMTY2IDUwNC44MzYgMjg4LjAwMiA0OTYgMjg4LjAwMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzUyIDExMi4wMDJDMzUyIDEyMC44MzggMzU5LjE2NCAxMjguMDAyIDM2OCAxMjguMDAySDQwMEM0MDguODM4IDEyOC4wMDIgNDE2IDEyMC44MzggNDE2IDExMi4wMDJWOTYuMDAyQzQxNiAzNi44MDcgMzYyLjE1NCAtMTAuMDQzIDMwMC44NjcgMS44NjFDMjU1LjI5MSAxMC43MTUgMjI0IDUzLjM2MyAyMjQgOTkuNzkxVjI4OC4wMDJIMjg4Vjk2LjAwMkMyODggNzguMzYxIDMwMi4zNTkgNjQuMDAyIDMyMCA2NC4wMDJTMzUyIDc4LjM2MSAzNTIgOTYuMDAyVjExMi4wMDJaTTEyOCAyMDguMDAySDQ4QzM5LjE2NCAyMDguMDAyIDMyIDIxNS4xNjQgMzIgMjI0LjAwMlYyNDAuMDAyQzMyIDI0OC44MzggMzkuMTY0IDI1Ni4wMDIgNDggMjU2LjAwMkgxMTJWMjg4LjAwMkgxNjBWMjQwLjAwMkMxNjAgMjIyLjMyOCAxNDUuNjc0IDIwOC4wMDIgMTI4IDIwOC4wMDJaTTQ2NCAyMDguMDAySDM4NEMzNjYuMzI4IDIwOC4wMDIgMzUyIDIyMi4zMjggMzUyIDI0MC4wMDJWMjg4LjAwMkg0MDBWMjU2LjAwMkg0NjRDNDcyLjgzOCAyNTYuMDAyIDQ4MCAyNDguODM4IDQ4MCAyNDAuMDAyVjIyNC4wMDJDNDgwIDIxNS4xNjQgNDcyLjgzOCAyMDguMDAyIDQ2NCAyMDguMDAyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Sink(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M32 416.002C32 469.021 74.98 512.002 128 512.002H384C437.02 512.002 480 469.021 480 416.002V384.002H32V416.002ZM496 288.002H16C7.164 288.002 0 295.166 0 304.002V336.002C0 344.838 7.164 352.002 16 352.002H496C504.836 352.002 512 344.838 512 336.002V304.002C512 295.166 504.836 288.002 496 288.002Z" />
            <path d="M352 112.002C352 120.838 359.164 128.002 368 128.002H400C408.838 128.002 416 120.838 416 112.002V96.002C416 36.807 362.154 -10.043 300.867 1.861C255.291 10.715 224 53.363 224 99.791V288.002H288V96.002C288 78.361 302.359 64.002 320 64.002S352 78.361 352 96.002V112.002ZM128 208.002H48C39.164 208.002 32 215.164 32 224.002V240.002C32 248.838 39.164 256.002 48 256.002H112V288.002H160V240.002C160 222.328 145.674 208.002 128 208.002ZM464 208.002H384C366.328 208.002 352 222.328 352 240.002V288.002H400V256.002H464C472.838 256.002 480 248.838 480 240.002V224.002C480 215.164 472.838 208.002 464 208.002Z" />
        </Icon>
    </>
}