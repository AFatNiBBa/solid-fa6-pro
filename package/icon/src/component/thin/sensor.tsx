
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sensor` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sensor?s=thin sensor}
 * @preview ![sensor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjUyIDQxOS4zNDYgMzIgMzg0IDMyWk00MzIgNDE2QzQzMiA0NDIuNDY3IDQxMC40NjcgNDY0IDM4NCA0NjRINjRDMzcuNTMzIDQ2NCAxNiA0NDIuNDY3IDE2IDQxNlY5NkMxNiA2OS41MzMgMzcuNTMzIDQ4IDY0IDQ4SDM4NEM0MTAuNDY3IDQ4IDQzMiA2OS41MzMgNDMyIDk2VjQxNlpNODggOTZDODMuNTk0IDk2IDgwIDk5LjU5NCA4MCAxMDRWMjgwQzgwIDI4NC40MDYgODMuNTk0IDI4OCA4OCAyODhTOTYgMjg0LjQwNiA5NiAyODBWMTA0Qzk2IDk5LjU5NCA5Mi40MDYgOTYgODggOTZaTTE1MiA5NkMxNDcuNTk0IDk2IDE0NCA5OS41OTQgMTQ0IDEwNFYyODBDMTQ0IDI4NC40MDYgMTQ3LjU5NCAyODggMTUyIDI4OFMxNjAgMjg0LjQwNiAxNjAgMjgwVjEwNEMxNjAgOTkuNTk0IDE1Ni40MDYgOTYgMTUyIDk2Wk0yMTYgOTZDMjExLjU5NCA5NiAyMDggOTkuNTk0IDIwOCAxMDRWMjgwQzIwOCAyODQuNDA2IDIxMS41OTQgMjg4IDIxNiAyODhTMjI0IDI4NC40MDYgMjI0IDI4MFYxMDRDMjI0IDk5LjU5NCAyMjAuNDA2IDk2IDIxNiA5NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Sensor(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.652 419.346 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416ZM88 96C83.594 96 80 99.594 80 104V280C80 284.406 83.594 288 88 288S96 284.406 96 280V104C96 99.594 92.406 96 88 96ZM152 96C147.594 96 144 99.594 144 104V280C144 284.406 147.594 288 152 288S160 284.406 160 280V104C160 99.594 156.406 96 152 96ZM216 96C211.594 96 208 99.594 208 104V280C208 284.406 211.594 288 216 288S224 284.406 224 280V104C224 99.594 220.406 96 216 96Z" />
        </Icon>
    </>
}