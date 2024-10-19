
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `block-quote` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/block-quote?s=light block-quote}
 * @preview ![block-quote](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgOTZDNTEyIDg3LjE5OSA1MDQuODAxIDgwIDQ5NiA4MEgxNkM3LjIwMSA4MCAwIDg3LjE5OSAwIDk2QzAgMTA0Ljc5OSA3LjIwMSAxMTIgMTYgMTEySDQ5NkM1MDQuODAxIDExMiA1MTIgMTA0Ljc5OSA1MTIgOTZaTTE2IDIyNEM3LjIwMSAyMjQgMCAyMzEuMjAxIDAgMjQwVjQzMkMwIDQ0MC44MDEgNy4yMDEgNDQ4IDE2IDQ0OEMyNC44MDEgNDQ4IDMyIDQ0MC44MDEgMzIgNDMyVjI0MEMzMiAyMzEuMjAxIDI0LjgwMSAyMjQgMTYgMjI0Wk00OTYgNDAwSDE0NEMxMzUuMjAxIDQwMCAxMjggNDA3LjE5OSAxMjggNDE2QzEyOCA0MjQuNzk5IDEzNS4yMDEgNDMyIDE0NCA0MzJINDk2QzUwNC44MDEgNDMyIDUxMiA0MjQuNzk5IDUxMiA0MTZDNTEyIDQwNy4xOTkgNTA0LjgwMSA0MDAgNDk2IDQwMFpNNDk2IDI0MEgxNDRDMTM1LjIwMSAyNDAgMTI4IDI0Ny4xOTkgMTI4IDI1NkMxMjggMjY0Ljc5OSAxMzUuMjAxIDI3MiAxNDQgMjcySDQ5NkM1MDQuODAxIDI3MiA1MTIgMjY0Ljc5OSA1MTIgMjU2QzUxMiAyNDcuMTk5IDUwNC44MDEgMjQwIDQ5NiAyNDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BlockQuote(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 96C512 87.199 504.801 80 496 80H16C7.201 80 0 87.199 0 96C0 104.799 7.201 112 16 112H496C504.801 112 512 104.799 512 96ZM16 224C7.201 224 0 231.201 0 240V432C0 440.801 7.201 448 16 448C24.801 448 32 440.801 32 432V240C32 231.201 24.801 224 16 224ZM496 400H144C135.201 400 128 407.199 128 416C128 424.799 135.201 432 144 432H496C504.801 432 512 424.799 512 416C512 407.199 504.801 400 496 400ZM496 240H144C135.201 240 128 247.199 128 256C128 264.799 135.201 272 144 272H496C504.801 272 512 264.799 512 256C512 247.199 504.801 240 496 240Z" />
        </Icon>
    </>
}