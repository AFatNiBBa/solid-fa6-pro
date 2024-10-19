
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `list` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/list?s=duotone list}
 * @preview ![list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5MiAxMjhINDgwQzQ5Ny42NzQgMTI4IDUxMiAxMTMuNjc0IDUxMiA5NlM0OTcuNjc0IDY0IDQ4MCA2NEgxOTJDMTc0LjMyNiA2NCAxNjAgNzguMzI2IDE2MCA5NlMxNzQuMzI2IDEyOCAxOTIgMTI4Wk00ODAgMzg0SDE5MkMxNzQuMzI2IDM4NCAxNjAgMzk4LjMyNiAxNjAgNDE2UzE3NC4zMjYgNDQ4IDE5MiA0NDhINDgwQzQ5Ny42NzQgNDQ4IDUxMiA0MzMuNjc0IDUxMiA0MTZTNDk3LjY3NCAzODQgNDgwIDM4NFpNNDgwIDIyNEgxOTJDMTc0LjMyNiAyMjQgMTYwIDIzOC4zMjYgMTYwIDI1NlMxNzQuMzI2IDI4OCAxOTIgMjg4SDQ4MEM0OTcuNjc0IDI4OCA1MTIgMjczLjY3NCA1MTIgMjU2UzQ5Ny42NzQgMjI0IDQ4MCAyMjRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTgwIDQ4SDE2QzcuMTU2IDQ4IDAgNTUuMTU2IDAgNjRWMTI4QzAgMTM2Ljg0NCA3LjE1NiAxNDQgMTYgMTQ0SDgwQzg4Ljg0NCAxNDQgOTYgMTM2Ljg0NCA5NiAxMjhWNjRDOTYgNTUuMTU2IDg4Ljg0NCA0OCA4MCA0OFpNODAgMjA4SDE2QzcuMTU2IDIwOCAwIDIxNS4xNTYgMCAyMjRWMjg4QzAgMjk2Ljg0NCA3LjE1NiAzMDQgMTYgMzA0SDgwQzg4Ljg0NCAzMDQgOTYgMjk2Ljg0NCA5NiAyODhWMjI0Qzk2IDIxNS4xNTYgODguODQ0IDIwOCA4MCAyMDhaTTgwIDM2OEgxNkM3LjE1NiAzNjggMCAzNzUuMTU2IDAgMzg0VjQ0OEMwIDQ1Ni44NDQgNy4xNTYgNDY0IDE2IDQ2NEg4MEM4OC44NDQgNDY0IDk2IDQ1Ni44NDQgOTYgNDQ4VjM4NEM5NiAzNzUuMTU2IDg4Ljg0NCAzNjggODAgMzY4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function List(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M192 128H480C497.674 128 512 113.674 512 96S497.674 64 480 64H192C174.326 64 160 78.326 160 96S174.326 128 192 128ZM480 384H192C174.326 384 160 398.326 160 416S174.326 448 192 448H480C497.674 448 512 433.674 512 416S497.674 384 480 384ZM480 224H192C174.326 224 160 238.326 160 256S174.326 288 192 288H480C497.674 288 512 273.674 512 256S497.674 224 480 224Z" />
            <path d="M80 48H16C7.156 48 0 55.156 0 64V128C0 136.844 7.156 144 16 144H80C88.844 144 96 136.844 96 128V64C96 55.156 88.844 48 80 48ZM80 208H16C7.156 208 0 215.156 0 224V288C0 296.844 7.156 304 16 304H80C88.844 304 96 296.844 96 288V224C96 215.156 88.844 208 80 208ZM80 368H16C7.156 368 0 375.156 0 384V448C0 456.844 7.156 464 16 464H80C88.844 464 96 456.844 96 448V384C96 375.156 88.844 368 80 368Z" />
        </Icon>
    </>
}