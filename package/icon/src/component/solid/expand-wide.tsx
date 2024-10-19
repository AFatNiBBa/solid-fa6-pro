
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `expand-wide` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/expand-wide?s=solid expand-wide}
 * @preview ![expand-wide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggNjRIMzJDMTQuMzEyIDY0IDAgNzguMzEyIDAgOTZWMTkyQzAgMjA5LjY4OCAxNC4zMTIgMjI0IDMyIDIyNFM2NCAyMDkuNjg4IDY0IDE5MlYxMjhIMTI4QzE0NS42ODggMTI4IDE2MCAxMTMuNjg4IDE2MCA5NlMxNDUuNjg4IDY0IDEyOCA2NFpNNDgwIDY0SDM4NEMzNjYuMzEyIDY0IDM1MiA3OC4zMTIgMzUyIDk2UzM2Ni4zMTIgMTI4IDM4NCAxMjhINDQ4VjE5MkM0NDggMjA5LjY4OCA0NjIuMzEyIDIyNCA0ODAgMjI0UzUxMiAyMDkuNjg4IDUxMiAxOTJWOTZDNTEyIDc4LjMxMiA0OTcuNjg4IDY0IDQ4MCA2NFpNMTI4IDM4NEg2NFYzMjBDNjQgMzAyLjMxMiA0OS42ODggMjg4IDMyIDI4OFMwIDMwMi4zMTIgMCAzMjBWNDE2QzAgNDMzLjY4OCAxNC4zMTIgNDQ4IDMyIDQ0OEgxMjhDMTQ1LjY4OCA0NDggMTYwIDQzMy42ODggMTYwIDQxNlMxNDUuNjg4IDM4NCAxMjggMzg0Wk00ODAgMjg4QzQ2Mi4zMTIgMjg4IDQ0OCAzMDIuMzEyIDQ0OCAzMjBWMzg0SDM4NEMzNjYuMzEyIDM4NCAzNTIgMzk4LjMxMiAzNTIgNDE2UzM2Ni4zMTIgNDQ4IDM4NCA0NDhINDgwQzQ5Ny42ODggNDQ4IDUxMiA0MzMuNjg4IDUxMiA0MTZWMzIwQzUxMiAzMDIuMzEyIDQ5Ny42ODggMjg4IDQ4MCAyODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ExpandWide(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M128 64H32C14.312 64 0 78.312 0 96V192C0 209.688 14.312 224 32 224S64 209.688 64 192V128H128C145.688 128 160 113.688 160 96S145.688 64 128 64ZM480 64H384C366.312 64 352 78.312 352 96S366.312 128 384 128H448V192C448 209.688 462.312 224 480 224S512 209.688 512 192V96C512 78.312 497.688 64 480 64ZM128 384H64V320C64 302.312 49.688 288 32 288S0 302.312 0 320V416C0 433.688 14.312 448 32 448H128C145.688 448 160 433.688 160 416S145.688 384 128 384ZM480 288C462.312 288 448 302.312 448 320V384H384C366.312 384 352 398.312 352 416S366.312 448 384 448H480C497.688 448 512 433.688 512 416V320C512 302.312 497.688 288 480 288Z" />
        </Icon>
    </>
}