
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-up-right` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up-right?s=regular circle-up-right}
 * @preview ![circle-up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNTkuODM0IDMwNi45MUMxNTAuNDY1IDMxNi4yODEgMTUwLjQ2NSAzMzEuNDg0IDE1OS44MzQgMzQwLjg1MkwxNzEuMTQ2IDM1Mi4xNjRDMTgwLjUxNiAzNjEuNTM1IDE5NS43MTkgMzYxLjUzNSAyMDUuMDg4IDM1Mi4xNjRMMjY5LjY1OCAyODcuNTk0TDMxMS4wMzEgMzI4Ljk2OUMzMTUuNjI1IDMzMy41NjIgMzIxLjc2NiAzMzYgMzI4IDMzNkMzMzEuMDk0IDMzNiAzMzQuMjE5IDMzNS40MDYgMzM3LjE4OCAzMzQuMTg4QzM0Ni4xNTYgMzMwLjQ2OSAzNTIgMzIxLjcxOSAzNTIgMzEyVjE4NEMzNTIgMTcwLjc1IDM0MS4yNSAxNjAgMzI4IDE2MEgyMDBDMTkwLjI5NyAxNjAgMTgxLjU0NyAxNjUuODQ0IDE3Ny44MjggMTc0LjgxMlMxNzYuMTcyIDE5NC4wOTQgMTgzLjAzMSAyMDAuOTY5TDIyNC40MDQgMjQyLjM0NEwxNTkuODM0IDMwNi45MVpNMTYgMjU2QzE2IDM4OC41NDcgMTIzLjQ1MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0NyA0OTYgMjU2UzM4OC41NDkgMTYgMjU2IDE2UzE2IDEyMy40NTMgMTYgMjU2Wk02NCAyNTZDNjQgMTUwLjEzMyAxNTAuMTMxIDY0IDI1NiA2NFM0NDggMTUwLjEzMyA0NDggMjU2UzM2MS44NjkgNDQ4IDI1NiA0NDhTNjQgMzYxLjg2NyA2NCAyNTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleUpRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M159.834 306.91C150.465 316.281 150.465 331.484 159.834 340.852L171.146 352.164C180.516 361.535 195.719 361.535 205.088 352.164L269.658 287.594L311.031 328.969C315.625 333.562 321.766 336 328 336C331.094 336 334.219 335.406 337.188 334.188C346.156 330.469 352 321.719 352 312V184C352 170.75 341.25 160 328 160H200C190.297 160 181.547 165.844 177.828 174.812S176.172 194.094 183.031 200.969L224.404 242.344L159.834 306.91ZM16 256C16 388.547 123.451 496 256 496S496 388.547 496 256S388.549 16 256 16S16 123.453 16 256ZM64 256C64 150.133 150.131 64 256 64S448 150.133 448 256S361.869 448 256 448S64 361.867 64 256Z" />
        </Icon>
    </>
}