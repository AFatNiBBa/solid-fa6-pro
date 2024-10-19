
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dice-one` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dice-one?s=regular dice-one}
 * @preview ![dice-one](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMjI0QzIwNi4zNzUgMjI0IDE5MiAyMzguMzc1IDE5MiAyNTZTMjA2LjM3NSAyODggMjI0IDI4OFMyNTYgMjczLjYyNSAyNTYgMjU2UzI0MS42MjUgMjI0IDIyNCAyMjRaTTM4NCAzMkg2NEMyOC42MjUgMzIgMCA2MC42MjUgMCA5NlY0MTZDMCA0NTEuMzc1IDI4LjYyNSA0ODAgNjQgNDgwSDM4NEM0MTkuMzc1IDQ4MCA0NDggNDUxLjM3NSA0NDggNDE2Vjk2QzQ0OCA2MC42MjUgNDE5LjM3NSAzMiAzODQgMzJaTTQwMCA0MTZDNDAwIDQyNC44NzUgMzkyLjg3NSA0MzIgMzg0IDQzMkg2NEM1NS4xMjUgNDMyIDQ4IDQyNC44NzUgNDggNDE2Vjk2QzQ4IDg3LjEyNSA1NS4xMjUgODAgNjQgODBIMzg0QzM5Mi44NzUgODAgNDAwIDg3LjEyNSA0MDAgOTZWNDE2WiAiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function DiceOne(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 224C206.375 224 192 238.375 192 256S206.375 288 224 288S256 273.625 256 256S241.625 224 224 224ZM384 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H384C419.375 480 448 451.375 448 416V96C448 60.625 419.375 32 384 32ZM400 416C400 424.875 392.875 432 384 432H64C55.125 432 48 424.875 48 416V96C48 87.125 55.125 80 64 80H384C392.875 80 400 87.125 400 96V416Z " />
        </Icon>
    </>
}