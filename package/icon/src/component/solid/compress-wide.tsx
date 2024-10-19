
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `compress-wide` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/compress-wide?s=solid compress-wide}
 * @preview ![compress-wide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggMjg4SDMyQzE0LjMxMiAyODggMCAzMDIuMzEyIDAgMzIwUzE0LjMxMiAzNTIgMzIgMzUySDk2VjQxNkM5NiA0MzMuNjg4IDExMC4zMTIgNDQ4IDEyOCA0NDhTMTYwIDQzMy42ODggMTYwIDQxNlYzMjBDMTYwIDMwMi4zMTIgMTQ1LjY4OCAyODggMTI4IDI4OFpNMTI4IDY0QzExMC4zMTIgNjQgOTYgNzguMzEyIDk2IDk2VjE2MEgzMkMxNC4zMTIgMTYwIDAgMTc0LjMxMiAwIDE5MlMxNC4zMTIgMjI0IDMyIDIyNEgxMjhDMTQ1LjY4OCAyMjQgMTYwIDIwOS42ODggMTYwIDE5MlY5NkMxNjAgNzguMzEyIDE0NS42ODggNjQgMTI4IDY0Wk00ODAgMjg4SDM4NEMzNjYuMzEyIDI4OCAzNTIgMzAyLjMxMiAzNTIgMzIwVjQxNkMzNTIgNDMzLjY4OCAzNjYuMzEyIDQ0OCAzODQgNDQ4UzQxNiA0MzMuNjg4IDQxNiA0MTZWMzUySDQ4MEM0OTcuNjg4IDM1MiA1MTIgMzM3LjY4OCA1MTIgMzIwUzQ5Ny42ODggMjg4IDQ4MCAyODhaTTM4NCAyMjRINDgwQzQ5Ny42ODggMjI0IDUxMiAyMDkuNjg4IDUxMiAxOTJTNDk3LjY4OCAxNjAgNDgwIDE2MEg0MTZWOTZDNDE2IDc4LjMxMiA0MDEuNjg4IDY0IDM4NCA2NFMzNTIgNzguMzEyIDM1MiA5NlYxOTJDMzUyIDIwOS42ODggMzY2LjMxMiAyMjQgMzg0IDIyNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CompressWide(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M128 288H32C14.312 288 0 302.312 0 320S14.312 352 32 352H96V416C96 433.688 110.312 448 128 448S160 433.688 160 416V320C160 302.312 145.688 288 128 288ZM128 64C110.312 64 96 78.312 96 96V160H32C14.312 160 0 174.312 0 192S14.312 224 32 224H128C145.688 224 160 209.688 160 192V96C160 78.312 145.688 64 128 64ZM480 288H384C366.312 288 352 302.312 352 320V416C352 433.688 366.312 448 384 448S416 433.688 416 416V352H480C497.688 352 512 337.688 512 320S497.688 288 480 288ZM384 224H480C497.688 224 512 209.688 512 192S497.688 160 480 160H416V96C416 78.312 401.688 64 384 64S352 78.312 352 96V192C352 209.688 366.312 224 384 224Z" />
        </Icon>
    </>
}