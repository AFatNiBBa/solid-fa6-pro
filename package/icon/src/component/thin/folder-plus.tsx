
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `folder-plus` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-plus?s=thin folder-plus}
 * @preview ![folder-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgOTZIMjcyTDIxNy4zNzUgNDEuMzc1QzIxMS4zNzEgMzUuMzcxIDIwMy4yMzQgMzIgMTk0Ljc0NiAzMkg0OEMyMS40OTIgMzIgMCA1My40OTIgMCA4MFY0MzJDMCA0NTguNTA4IDIxLjQ5MiA0ODAgNDggNDgwSDQ2NEM0OTAuNTA4IDQ4MCA1MTIgNDU4LjUwOCA1MTIgNDMyVjE0NEM1MTIgMTE3LjQ5MiA0OTAuNTA4IDk2IDQ2NCA5NlpNNDk2IDQzMkM0OTYgNDQ5LjY3MiA0ODEuNjcyIDQ2NCA0NjQgNDY0SDQ4QzMwLjMyOCA0NjQgMTYgNDQ5LjY3MiAxNiA0MzJWODBDMTYgNjIuMzI4IDMwLjMyOCA0OCA0OCA0OEgxODguMTE3QzE5Ni42MDIgNDggMjA0Ljc0MiA1MS4zNzEgMjEwLjc0MiA1Ny4zNzFMMjY1LjM3MSAxMTJINDY0QzQ4MS42NzIgMTEyIDQ5NiAxMjYuMzI4IDQ5NiAxNDRWNDMyWk0zNDQgMjgwSDI2NFYyMDBDMjY0IDE5NS41OCAyNjAuNDIyIDE5MiAyNTYgMTkyUzI0OCAxOTUuNTggMjQ4IDIwMFYyODBIMTY4QzE2My41NzggMjgwIDE2MCAyODMuNTggMTYwIDI4OEMxNjAgMjkyLjQyMiAxNjMuNTc4IDI5NiAxNjggMjk2SDI0OFYzNzZDMjQ4IDM4MC40MjIgMjUxLjU3OCAzODQgMjU2IDM4NFMyNjQgMzgwLjQyIDI2NCAzNzZWMjk2SDM0NEMzNDguNDIyIDI5NiAzNTIgMjkyLjQyIDM1MiAyODhTMzQ4LjQyMiAyODAgMzQ0IDI4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FolderPlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 96H272L217.375 41.375C211.371 35.371 203.234 32 194.746 32H48C21.492 32 0 53.492 0 80V432C0 458.508 21.492 480 48 480H464C490.508 480 512 458.508 512 432V144C512 117.492 490.508 96 464 96ZM496 432C496 449.672 481.672 464 464 464H48C30.328 464 16 449.672 16 432V80C16 62.328 30.328 48 48 48H188.117C196.602 48 204.742 51.371 210.742 57.371L265.371 112H464C481.672 112 496 126.328 496 144V432ZM344 280H264V200C264 195.58 260.422 192 256 192S248 195.58 248 200V280H168C163.578 280 160 283.58 160 288C160 292.422 163.578 296 168 296H248V376C248 380.422 251.578 384 256 384S264 380.42 264 376V296H344C348.422 296 352 292.42 352 288S348.422 280 344 280Z" />
        </Icon>
    </>
}