
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `filter-list` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/filter-list?s=duotone filter-list}
 * @preview ![filter-list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4MCAzODRIMzUyQzMzNC4zMjcgMzg0IDMyMCAzOTguMzI3IDMyMCA0MTZWNDE2QzMyMCA0MzMuNjczIDMzNC4zMjcgNDQ4IDM1MiA0NDhINDgwQzQ5Ny42NzMgNDQ4IDUxMiA0MzMuNjczIDUxMiA0MTZWNDE2QzUxMiAzOTguMzI3IDQ5Ny42NzMgMzg0IDQ4MCAzODRaTTQ4MCAyMjRIMzUyQzMzNC4zMjcgMjI0IDMyMCAyMzguMzI3IDMyMCAyNTZWMjU2QzMyMCAyNzMuNjczIDMzNC4zMjcgMjg4IDM1MiAyODhINDgwQzQ5Ny42NzMgMjg4IDUxMiAyNzMuNjczIDUxMiAyNTZWMjU2QzUxMiAyMzguMzI3IDQ5Ny42NzMgMjI0IDQ4MCAyMjRaTTQ4MCA2NEg0NDhDNDMwLjMyNyA2NCA0MTYgNzguMzI3IDQxNiA5NlY5NkM0MTYgMTEzLjY3MyA0MzAuMzI3IDEyOCA0NDggMTI4SDQ4MEM0OTcuNjczIDEyOCA1MTIgMTEzLjY3MyA1MTIgOTZWOTZDNTEyIDc4LjMyNyA0OTcuNjczIDY0IDQ4MCA2NFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzQ2LjkzIDk5Ljg3N0wyMjQgMjQ0LjYzNVY0MjkuOTg2QzIyNCA0NDQuNjI1IDIwNy41MjMgNDUzLjAxNiAxOTUuNjg3IDQ0NC43M0wxMzUuNjg5IDQwMi43NDJDMTMwLjg1OSAzOTkuMzc5IDEyOCAzOTMuODcxIDEyOCAzODhWMjQ0LjYzNUw1LjA3IDk5Ljg3N0MtNi44NSA4NS41IDMuNTgyIDY0IDIyLjQ4MiA2NEgzMjkuNTE4QzM0OC40MTYgNjQgMzU4Ljg1IDg1LjUgMzQ2LjkzIDk5Ljg3N1oiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function FilterList(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M480 384H352C334.327 384 320 398.327 320 416V416C320 433.673 334.327 448 352 448H480C497.673 448 512 433.673 512 416V416C512 398.327 497.673 384 480 384ZM480 224H352C334.327 224 320 238.327 320 256V256C320 273.673 334.327 288 352 288H480C497.673 288 512 273.673 512 256V256C512 238.327 497.673 224 480 224ZM480 64H448C430.327 64 416 78.327 416 96V96C416 113.673 430.327 128 448 128H480C497.673 128 512 113.673 512 96V96C512 78.327 497.673 64 480 64Z" />
            <path d="M346.93 99.877L224 244.635V429.986C224 444.625 207.523 453.016 195.687 444.73L135.689 402.742C130.859 399.379 128 393.871 128 388V244.635L5.07 99.877C-6.85 85.5 3.582 64 22.482 64H329.518C348.416 64 358.85 85.5 346.93 99.877Z" />
        </Icon>
    </>
}