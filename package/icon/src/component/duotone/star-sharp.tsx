
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `star-sharp` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/star-sharp?s=duotone star-sharp}
 * @preview ![star-sharp](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU0OC40NzMgMjE0LjU0M0w0MDQuNzc0IDMxOS4wMzVMNDU5LjY2MyA0ODguMTA5QzQ2NS4xMDMgNTA0Ljg2NSA0NDUuOTQgNTE4LjgwMSA0MzEuNjk4IDUwOC40NDNMMjg3Ljk5OSA0MDMuOTUxTDE0NC4zIDUwOC40NDNDMTMwLjA1OSA1MTguODAxIDExMC44OTcgNTA0Ljg2NSAxMTYuMzM2IDQ4OC4xMDlMMTcxLjIyNCAzMTkuMDM1TDI3LjUyNSAyMTQuNTQzQzEzLjI4NCAyMDQuMTg4IDIwLjYwNCAxODEuNjQxIDM4LjIwOCAxODEuNjQxSDIxNS44MjlMMjcwLjcxNyAxMi41NjhDMjc2LjE1NiAtNC4xODkgMjk5Ljg0MyAtNC4xODkgMzA1LjI4MyAxMi41NjhMMzYwLjE3MiAxODEuNjQxSDUzNy43OTNDNTU1LjM5NyAxODEuNjQxIDU2Mi43MTcgMjA0LjE4OCA1NDguNDczIDIxNC41NDNaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function StarSharp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M548.473 214.543L404.774 319.035L459.663 488.109C465.103 504.865 445.94 518.801 431.698 508.443L287.999 403.951L144.3 508.443C130.059 518.801 110.897 504.865 116.336 488.109L171.224 319.035L27.525 214.543C13.284 204.188 20.604 181.641 38.208 181.641H215.829L270.717 12.568C276.156 -4.189 299.843 -4.189 305.283 12.568L360.172 181.641H537.793C555.397 181.641 562.717 204.188 548.473 214.543Z" />
        </Icon>
    </>
}